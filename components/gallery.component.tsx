import React, { useEffect, useState, useCallback } from "react";
import { View, ScrollView, Image, StyleSheet, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import ImagePickerComp from "./imagepicker.component";
import { Colors } from "@/constants/Colors";

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
      loadImages();
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
      <ImagePickerComp onImagePicked={refreshGallery} />
    </View>
  );
};

const styles = StyleSheet.create({
  galleryContainer: {
    marginVertical: 20,
    marginRight: 15,
    marginLeft: 15,
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
    fontSize: 13,
    color: Colors.text.primary,
    fontFamily: "PoppinsRegular",
  },
});

export default Gallery;
