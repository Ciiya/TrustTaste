import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
} from 'react-native-vision-camera';

const CameraManager = () => {
  const device = useCameraDevice('back');
  //const { hasPermission } = useCameraPermission();

  return (
    <Camera style={StyleSheet.absoluteFill} device={device!} isActive={true} />
  );
};

export default CameraManager;
