import React, { useRef, useState, useEffect } from "react";
import { View, Text, Button, Image } from "react-native";
import { Camera } from "expo-camera"; // Correctly importing Camera

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [imageSource, setImageSource] = useState("");
  const cameraRef = useRef(null);

  // Request camera permissions
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  // Capture a photo
  const capturePhoto = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      setImageSource(photo.uri);
    }
  };

  // Handle different permission states
  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} ref={cameraRef}>
        <View
          style={{ flex: 0.1, alignItems: "center", justifyContent: "center" }}
        >
          <Button title="Take Photo" onPress={capturePhoto} />
        </View>
      </Camera>
      {imageSource !== "" && (
        <Image
          source={{ uri: imageSource }}
          style={{ width: 200, height: 200 }}
        />
      )}
    </View>
  );
}
