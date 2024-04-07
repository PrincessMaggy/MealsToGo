import React, { useRef, useEffect, useState } from "react";
import { Camera } from "expo-camera";
import styled from "styled-components/native";
import { View, Text } from "react-native";
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

  // if (permission) {
  //   return (
  //       <View style={{ marginTop: "430px" }}>
  //         <Text>
  //           {permission.granted ? "Granted" : "Not granted"} from first
  //           condition
  //         </Text>
  //       </View>
  //   );
  // }
  if (!permission) {
    return <Text>No permission to camera</Text>;
  }
  return (
    <ProfileCamera
      ref={(r) => (cameraRef.current = r)}
      style={{ width: "100%", height: "100%" }}
      type={Camera.Constants.Type.front}
    ></ProfileCamera>
  );
};
