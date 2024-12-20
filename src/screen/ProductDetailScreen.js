import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Dimensions, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

const ProductDetailScreen = ({ route, navigation }) => {
  const { reviewIndex: initialIndex } = route.params; // Get the passed reviewIndex

  let allReviews = require('../_mock_data/reviews.json').reviews;

  const [reviewIndex, setReviewIndex] = useState(initialIndex);
  const [images, setImages] = useState(allReviews[reviewIndex]?.imageUrls);
  const [reviewData, setReviewData] = useState(allReviews[reviewIndex]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setImages(allReviews[reviewIndex]?.imageUrls);
    setReviewData(allReviews[reviewIndex]);
    setCurrentIndex(0);  // Reset the image index to 0 when changing reviews
  }, [reviewIndex]);

  useEffect(() => {
    if (images.length == currentIndex) {
      nextReview();
    }
  }, [currentIndex])

  // Auto image change every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextImage();
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, [currentIndex, images.length]);

  const nextReview = () => {
    if (reviewIndex < allReviews.length - 1) {
      setReviewIndex(reviewIndex + 1);
    }
  };

  const previousReview = () => {
    if (reviewIndex > 0) {
      setReviewIndex(reviewIndex - 1);
    }
  };

  const nextImage = () => {
    // Check if we're at the last image in the current review
    if (currentIndex === images.length - 1) {
      // If so, go to the next review
      nextReview();
    } else {
      // Otherwise, move to the next image
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const selectImage = (index) => {
    setCurrentIndex(index);
  };

  return (
    <SafeAreaView style={{
      // position: 'absolute',
      // top: 0,
      // left: 0,
      // right: 0,
      // bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.53)', // Semi-transparent black background
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          position: 'absolute',
          top: 70,
          left: 20,
          zIndex: 2,
          backgroundColor: 'white',
          borderRadius: 50,
          padding: 13,
        }}
      >
        <Image style={{ width: 14, height: 15, objectFit: 'contain' }} source={require('../assets/lessthen.png')} />
      </TouchableOpacity>

      {/* Image Slider */}
      <View style={{ width: width - 40, height: 434, overflow: 'hidden',marginTop:30 }}>
        <Image
          source={{ uri: images[currentIndex] }}
          style={{ width: '100%', height: '100%', borderRadius: 10 }}
          resizeMode="cover"
        />
      </View>

      <View
        style={{
          marginTop: 20,
          padding: 15,
          width: width - 40,
          borderRadius: 10,
          borderWidth: 1,
          borderColor: '#ddd',
          backgroundColor: '#030302a1',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.5,
          elevation: 5,
        }}
      >
        <View style={styles.profile}>
          <Image
            source={{ uri: reviewData.userDetails.profileImage }}
            style={{ width: 35, height: 35, borderRadius: 100,borderWidth:1,borderColor:'white' }}
          />
          <View style={styles.profilename}>
            <Text style={styles.userName}>{reviewData.userDetails.email?.split('@')[0]}</Text>
            <Text style={styles.userRole}>Seam Explorer</Text>
          </View>
        </View>

        <View style={styles.starIcon}>
          {Array(5)
            .fill()
            .map((_, i) => (
              <Image
                key={i}
                source={
                  i < reviewData.rating
                    ? require('../assets/golden.png')
                    : require('../assets/whitegolder.png')
                }
                style={{ width: 21, height: 21 }}
              />
            ))}
        </View>
        <Text style={{ fontSize: 16, fontWeight: 'bold',color:'#FFFFFF' }}>{reviewData?.userDetails?.email}</Text>
        <Text style={{ fontSize: 14, color: '#FFFFFF', marginTop: 5 }}>
          {reviewData?.description}
        </Text>
      </View>

      {/* Dots to navigate between images */}
      <View style={{ flexDirection: 'row',gap:10, marginTop: 10 }}>
        {images.map((_, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => selectImage(index)}
            style={{
              marginHorizontal: 5,
              width: 10,
              height: 10,
              borderRadius: 5,
              backgroundColor: currentIndex === index ? '#000' : '#ddd',
            }}
          />
        ))}
      </View>

      <View style={{ flexDirection: 'row',justifyContent:'space-between', marginTop: 10 }}>
        <TouchableOpacity onPress={previousReview} style={{ marginHorizontal: 10 }} disabled={reviewIndex === 0}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: reviewIndex === 0 ? '#ccc' : '#FFF' }}>
            Prev Review
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={nextReview} style={{ marginHorizontal: 10 }} disabled={reviewIndex === allReviews.length - 1}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: reviewIndex === allReviews.length - 1 ? '#ccc' : '#FFF' }}>
            Next Review
          </Text>
        </TouchableOpacity>
      </View> 


    </SafeAreaView>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({

  profile: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
  },
  profilename: {
    marginLeft: 10,
  },
  userName: {
    fontSize: 16,
    fontWeight: 700,
    color: '#FFFFFF',
  },
  userRole: {
    fontSize: 12,
    color: '#FFFFFF',
    fontWeight: 700
  },
  starIcon: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 10,
    marginTop: 6
  },
  description: {
    fontSize: 14,
    color: '#FFFFFF',
  },

});
