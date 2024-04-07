import React, { useRef, useEffect, useContext } from "react";
import { Camera } from "expo-camera";
import styled from "styled-components/native";
import { TouchableOpacity, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { SafeArea } from "../../../components/utility/safearea.component";
const ProfileCamera = styled(Camera)`
  width: 100%;
  height: 100%;
`;
export const CameraScreen = ({navigation}) => {
  const { user } = useContext(AuthenticationContext);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const cameraRef = useRef();

  useEffect(() => {
    requestPermission();
  }, []);

  const snapPics = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      console.log(photo);
      AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
      navigation.goBack();
    }
  };

  if (!permission) {
    return (
      <SafeArea>
        <Text>
          No permission to use camera. Please check your phone setting
        </Text>
      </SafeArea>
    );
  }

  return (
    <TouchableOpacity onPress={snapPics}>
      <ProfileCamera
        ref={(r) => (cameraRef.current = r)}
        style={{ width: "100%", height: "100%" }}
        type={Camera.Constants.Type.front}
      ></ProfileCamera>
    </TouchableOpacity>
  );
};
