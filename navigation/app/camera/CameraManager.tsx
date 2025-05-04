import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import AlergenicsModal from './AlergenicsModal';

const CameraManager = () => {

  const [scanned, setScanned] = useState(false);
  const [permission, requestPermission] = useCameraPermissions();
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const handleBarCodeScanned = ({ type, data }: { type: string; data: string }) => {
    if (type === "ean13" || type === "ean8") {
      setScanned(true);
      setIsModalVisible(true)
      console.log(data);
    }
  };

  const onModalClose = () => {
    setIsModalVisible(false);
    setScanned(false)
  };

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="Grant permission" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <CameraView 
        style={styles.camera} 
        barcodeScannerSettings={{
          barcodeTypes: ['ean13', "ean8"],
        }}
        onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
      >
        <AlergenicsModal isVisible={isModalVisible} onClose={onModalClose}/>
        <View style={styles.buttonContainer} />
      </CameraView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default CameraManager;
