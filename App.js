import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Camera, useCameraDevices} from "react-native-vision-camera";
import {useEffect, useRef, useState} from "react";

export default function App() {
  const camera = useRef(null);
  const devices = useCameraDevices();
  const device = devices.back;
  
  const [showCamera, setShowCamera] = useState(false);
  const [imageSource, setImageSource] = useState("");
  
  useEffect(() => {
    async function getPermission
  })
  
  return (
    <View style={styles.container}>
      <Text>sol</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
