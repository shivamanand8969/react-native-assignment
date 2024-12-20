import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import ReviewCard from '../component/ReviewCard';


export default function ProductListScreen({ navigation }) {
    const handlePress = (product, index) => {
        navigation.navigate('ProductDetail', { product, reviewIndex: index });
    };

    const renderHeader = () => {
        return (
            <View style={{marginTop:25,padding:20}}>
                <View style={styles.reviewsContainer}>
                    <Text style={styles.reviewsText}>Reviews</Text>
                    <View style={styles.ratingContainer}>
                        <Text style={styles.ratingText}>4.9</Text>
                        <Image
                            source={require('../assets/start.png')}
                            style={styles.starIcon}
                        />
                    </View>
                </View>

                <View style={styles.reviewsContainer}>
                    <Text style={styles.smallheadingtext}>Most Used Tags for This Pattern</Text>
                    <Text style={styles.smallreviewtext}>16 reviews</Text>
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btnText}>Beginner-Friendly</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btnText}>Helpful Illustrations</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.btnblack}>
                        <Text style={styles.blackBtnText}>Special Notions Needed</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnblack}>
                        <Text style={styles.blackBtnText}>Pattern Errors</Text>
                    </TouchableOpacity>
                </View>

                <View style={[styles.reviewsContainer, { marginTop: 15 }]}>
                    <Text style={styles.galleryHeading}>Review Gallery</Text>
                    <TouchableOpacity style={styles.seeAllText}>
                        <Text>See all 16</Text>
                    </TouchableOpacity>

                </View>

                <View style={styles.imageContainer}>
                    <Image
                        source={require('../assets/imagethree.png')}
                        style={styles.image}
                    />
                    <Image
                        source={require('../assets/imageone.png')}
                        style={styles.image}
                    />
                    <Image
                        source={require('../assets/imagetwo.png')}
                        style={styles.image}
                    />
                    <Image
                        source={require('../assets/imagefour.png')}
                        style={styles.image}
                    />

                </View>

            </View>
        )
    }

    return (
        <View style={styles.container}>
           
            <FlatList
                data={require('../_mock_data/reviews.json').reviews}
                keyExtractor={(item) => item._id}
                ListHeaderComponent={renderHeader}
                renderItem={({ item,index }) => (
                    <TouchableOpacity style={styles.item} onPress={() => handlePress(item,index)}>
                        <ReviewCard review={item} />
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        marginTop: 20,
    
    },
    reviewsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 7
    },
    imageContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20
    },
    image: {
        width: '24%',
        height:104,
        borderRadius: 10
    },
    galleryHeading: {
        fontSize: 15,
        fontWeight: 700,
        color: '#000000',
        fontStyle: 'Poppins'
    },
    seeAllText: {
        fontSize: 12,
        fontWeight: '600',
        color: '#434343',
        fontStyle:'Poppins'
    },
    buttonContainer: {
        marginTop: 10,
        flexDirection: 'row',
        gap: 7,
        width: '70%'
    },
    btn: {
        backgroundColor: '#FDEDC3',
        borderRadius: 30,
        height:23,
        paddingHorizontal: 8,
        justifyContent:'center'
    },
    btnblack: {
        backgroundColor: 'black',
        borderRadius: 30,
        color: 'white',
        height:23,
        justifyContent:'center',
        paddingHorizontal: 8,
    },
    btnText: {
        fontSize: 11,
        fontWeight: '700'
    },
    blackBtnText: {
        fontSize: 11,
        fontWeight: '700',
        color: 'white'
    },
    smallreviewtext: {
        fontSize: 11,
        fontWeight: '500',
        fontStyle: 'Poppins'
    },
    smallheadingtext: {
        fontSize: 10,
        fontWeight: '600',
        color: '#808080',
        fontStyle: 'Poppins'
    },
    reviewsText: {
        fontSize: 25,
        fontWeight: 700,
        color: '#333',
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    ratingText: {
        fontSize: 20,
        color: '#000000',
        marginRight: 5,
        fontWeight:600
    },
    starIcon: {
        width: 25,
        height: 25,
        tintColor: 'black', // Gold color for the star
    },
    item: {
        //  padding:3,
        backgroundColor: 'white',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    title: {
        fontSize: 18,
        color: '#333',
    },
});
