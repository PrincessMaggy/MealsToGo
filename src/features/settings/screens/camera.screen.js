import React, { useRef, useEffect, useState } from "react";
import { Camera } from "expo-camera";
import styled from "styled-components/native";
import { TouchableOpacity, Text } from "react-native";
import SafeArea from "../../../components/utility/safearea.component";

const ProfileCamera = styled(Camera)`
  width: 100%;
  height: 100%;
`;
export const CameraScreen = () => {
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const cameraRef = useRef();
  useEffect(() => {
    requestPermission();
  }, []);

  const snapPics = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      console.log(photo);
    }
  };
  if (!permission) {
    return <Text>No permission to use camera</Text>;
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
