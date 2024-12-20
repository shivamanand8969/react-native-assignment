import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';

const ReviewCard = ({ review }) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageAndDetails}>
                <View style={styles.leftBox}>
                    <View style={styles.profile}>
                        <Image
                            source={{ uri: review.userDetails.profileImage }}
                            style={{ width: 35, height: 35, borderRadius: 100 }}
                        />
                        <View style={styles.profilename}>
                            <Text style={styles.userName}>{review.userDetails.email}</Text>
                            <Text style={styles.userRole}>Seam Explorer</Text>
                        </View>
                    </View>
                    <View style={styles.starIcon}>
                        {Array(review.rating)
                            .fill()
                            .map((_, i) => (
                                <Image
                                    key={i}
                                    source={require('../assets/Vector.png')}
                                    style={{ width: 21, height: 21 }}
                                />
                            ))}
                    </View>
                    <Text style={styles.description}>{review.description}</Text>
                </View>
                <View style={styles.rightBox}>
                    <Image
                        source={{ uri: review.imageUrls[0] }}
                        style={{ width: '100%', height: 100, borderRadius: 8 }}
                    />
                </View>
            </View>
        </View>
    );
};

export default ReviewCard;

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#fff',
        marginTop: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 3,
    },
    imageAndDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    leftBox: {
        width: '60%',
    },
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
        fontWeight: '700',
        color: '#434343',
    },
    userRole: {
        fontSize: 12,
        color: '#000',
    },
    starIcon: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    description: {
        fontSize: 14,
        color: '#333',
    },
    rightBox: {
        width: '35%',
    },
});
