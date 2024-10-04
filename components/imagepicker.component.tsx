import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Button,
  Alert,
  TouchableOpacity,
  Image,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Colors } from "@/constants/Colors";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const ImagePickerComp = ({ onImagePicked }: { onImagePicked: () => void }) => {
  const [image, setImage] = useState<string | null>(null);

  const takePhoto = async () => {
    // Request camera permissions
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    if (!permissionResult.granted) {
      Alert.alert(
        "Permission denied",
        "You need to allow camera access to take a photo."
      );
      return;
    }

    // Open the camera and handle the result
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    // Handle the taken picture if not cancelled
    if (!result.canceled && result.assets && result.assets.length > 0) {
      const uri = result.assets[0].uri;
      setImage(uri);
      await saveImageToStorage(uri);
    }
  };

  const saveImageToStorage = async (uri: any) => {
    try {
      const existingImages = await AsyncStorage.getItem(
        "Fitnest-galleryImages"
      );
      const imagesArray = existingImages ? JSON.parse(existingImages) : [];
      imagesArray.push(uri);
      await AsyncStorage.setItem(
        "Fitnest-galleryImages",
        JSON.stringify(imagesArray)
      );
    } catch (error) {
      console.error("Failed to save image to storage", error);
    }
  };

  // Function to pick an image from the phone gallery
  const pickImageFromGallery = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      Alert.alert(
        "Permission Denied",
        "You need to allow gallery access to select an image."
      );
      return;
    }

    // Open the image picker and handle the result
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      const selectedImageUri = result.assets[0].uri;

      // Save the selected image URI to AsyncStorage
      await saveImageToAsyncStorage(selectedImageUri);
      onImagePicked();
      Alert.alert("Image saved!", "The image has been saved to your gallery.");
    }
  };

  // Function to save an image URI to AsyncStorage
  const saveImageToAsyncStorage = async (uri: any) => {
    try {
      const storedImages = await AsyncStorage.getItem("Fitnest-galleryImages");
      const updatedImages = storedImages
        ? JSON.parse(storedImages).concat(uri)
        : [uri];

      await AsyncStorage.setItem(
        "Fitnest-galleryImages",
        JSON.stringify(updatedImages)
      );
    } catch (error) {
      console.error("Error saving image to AsyncStorage", error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={pickImageFromGallery}>
        <FontAwesome name="picture-o" size={50} color={Colors.brand.grad1} />
      </TouchableOpacity>
      <TouchableOpacity onPress={takePhoto}>
        <Image
          source={require("@/assets/images/camera.png")}
          style={styles.cameraicon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
  cameraicon: {
    width: 90,
    height: 90,
    resizeMode: "contain",
    marginTop: 15,
  },
});

export default ImagePickerComp;
