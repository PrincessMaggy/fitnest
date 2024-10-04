import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
  Text,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions"; // Import Permissions for Camera
import AsyncStorage from "@react-native-async-storage/async-storage";

const AvatarScreen = () => {
  const [image, setImage] = React.useState<string | null>(null);

  // Function to open the image gallery
  const pickImage = async () => {
    // Request permission to access the phone's gallery
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      Alert.alert(
        "Permission denied",
        "You need to allow gallery access to select an image."
      );
      return;
    }

    // Open the image picker and handle the result
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    // Handle the selected image if not cancelled
    if (!result.canceled && result.assets && result.assets.length > 0) {
      const uri = result.assets[0].uri;
      setImage(uri);
      await saveImageToStorage(uri);
    }
  };

  // Function to open the camera and take a picture
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

  // Function to save image URI to AsyncStorage
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

  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        {image ? (
          <Image source={{ uri: image }} style={styles.avatar} />
        ) : (
          <Image
            source={require("@/assets/images/avatar.png")}
            style={styles.avatar}
          />
        )}
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={pickImage}>
          <Text>Select from Gallery</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={takePhoto}>
          <Text>Take a Photo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
  },
  avatarContainer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: "#ddd",
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
    marginTop: 20,
  },
  button: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default AvatarScreen;

import React, { useEffect, useState, useCallback } from "react";
import { View, ScrollView, Image, StyleSheet, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import AvatarScreen from "./avatar.component";

const Gallery = () => {
  const [images, setImages] = useState<string[]>([]);

  const loadImages = async () => {
    try {
      const storedImages = await AsyncStorage.getItem("Fitnest-galleryImages");
      if (storedImages) {
        setImages(JSON.parse(storedImages));
      }
    } catch (error) {
      console.error("Failed to load images from storage", error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      refreshGallery(); // Refresh gallery whenever the screen comes into focus
    }, [])
  );

  useEffect(() => {
    loadImages();
  }, []);

  const refreshGallery = () => {
    loadImages();
  };

  return (
    <View style={styles.galleryContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.galleryTitle}>Gallery</Text>
        <Text style={styles.seeMoreText}>See more</Text>
      </View>
      <AvatarScreen />
      {/* Horizontal Scrollable Gallery */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
      >
        {images.length > 0 ? (
          images.map((uri, index) => (
            <Image key={index} source={{ uri }} style={styles.galleryImage} />
          ))
        ) : (
          <Text style={styles.noImagesText}>No images available</Text>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  galleryContainer: {
    marginVertical: 20,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  galleryTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  seeMoreText: {
    color: "#4F46E5",
    textDecorationLine: "underline",
  },
  scrollView: {
    paddingVertical: 5,
  },
  galleryImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 15,
  },
  noImagesText: {
    fontSize: 14,
    color: "#888",
  },
});

export default Gallery;
