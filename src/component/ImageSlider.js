import React, { useState } from 'react';
import { SafeAreaView, View, Dimensions, Text, Image, TouchableOpacity } from 'react-native';

const { width, height } = Dimensions.get('window');

const ImageSlider = () => {
  // An array of image URLs (make sure there are no duplicates)
  const images = [
    "https://res.cloudinary.com/dg2bgnw5r/image/upload/v1734594304/p2fkctl2vaqddmjaxpyy.jpg",
    "https://res.cloudinary.com/dg2bgnw5r/image/upload/v1734594307/mqtclbq0rjd78t81pgh0.jpg",
    "https://res.cloudinary.com/dg2bgnw5r/image/upload/v1734594317/xu8bjne2rtl2ffynkkjy.jpg",
    "https://res.cloudinary.com/dg2bgnw5r/image/upload/v1734594417/pytuyt3jfyk9ztltjhoe.jpg",
    "https://res.cloudinary.com/dg2bgnw5r/image/upload/v1734594467/zvrooqidqndohrvh0zva.jpg"
  ];

  // State to track the current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next image
  const nextImage = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // Loop back to the first image
    }
  };

  // Function to go to the previous image
  const prevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(images.length - 1); // Loop back to the last image
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Image Slider</Text>

      <View style={{ width: width - 40, height: height / 2, overflow: 'hidden' }}>
        <Image
          source={{ uri: images[currentIndex] }}
          style={{ width: '100%', height: '100%', borderRadius: 10 }}
          resizeMode="cover"
        />
      </View>

      <View style={{ flexDirection: 'row', marginTop: 10 }}>
        <TouchableOpacity onPress={prevImage} style={{ marginHorizontal: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{"<"}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={nextImage} style={{ marginHorizontal: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{">"}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ImageSlider;
