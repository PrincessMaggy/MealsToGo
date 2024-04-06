import React, { useRef, useEffect, useState } from "react";
import { Camera } from "expo-camera";
import styled from "styled-components/native";
import { View, Text } from "react-native";

const ProfileCamera = styled(Camera)`
  width: 100%;
  height: 10 0%;
`;
export const CameraScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const cameraRef = useRef();

  useEffect(() => {
    async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    };
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
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
