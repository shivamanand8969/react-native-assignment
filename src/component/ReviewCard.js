import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
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
                            <Text style={styles.userName}>{review.userDetails.email?.split('@')[0]}</Text>
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
                                        i < review.rating
                                            ? require('../assets/Vector.png')
                                            : require('../assets/grayVerctor.png')
                                    }
                                    style={{ width: 21, height: 21 }}
                                />
                            ))}
                    </View>
                    <View style={{ flexDirection: 'row', width: '80%', gap: 30 }}>
                        <View style={{ flexDirection: 'row', gap: 4 }}>
                            <Image
                                source={require('../assets/clothicon.png')}
                                style={styles.icon}
                            />
                            <Text style={styles.icontext}>{review?.size}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', gap: 4 }}>
                            <Image
                                source={require('../assets/Group.png')}
                                style={styles.icon}
                            />
                            <Text style={styles.icontext}>{review?.fabricUse}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.rightBox}>
                    <Image
                        source={{ uri: review.imageUrls[0] }}
                        style={{ width: '100%', height: 100, borderRadius: 8 }}
                    />
                </View>
            </View>
            <View style={[styles.btnContainer, { marginTop: 20 }]}>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText}>Beginner-Friendly</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText}>Helpful Illustrations</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText}>Right Seam Allowance</Text>
                </TouchableOpacity>

            </View>
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText}>Affordable</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText}>Didn’t Fit Well</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText}>Would Make Again</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.btnblack}>
                    <Text style={styles.blackBtnText}>Special Notions Needed</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnblack}>
                    <Text style={styles.blackBtnText}>Pattern Errors</Text>
                </TouchableOpacity>
            </View>
            <Text style={{ color: '#000000', fontSize: 22, fontWeight: 700, fontStyle: 'Poppins', marginTop: 10 }}>{review.title}</Text>
            <Text style={[styles.description, { fontFamily: 'Poppins', fontWeight: 400, fontSize: 16 }]}>{review.description}</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>
                <View style={{ flexDirection: 'row', gap: 20 }}>
                    <TouchableOpacity style={{ flexDirection: 'row', gap: 4, alignItems: 'center', borderWidth: 1, borderColor: 'black', borderRadius: 20, padding: 3, paddingHorizontal: 8 }}>
                        <Image style={{ width: 20 }} source={require('../assets/like.png')} />
                        <Text style={{ fontSize: 15, fontWeight: 700, fontStyle: 'Helvetica Neue' }}>{review?.like?.length > 0 ? review?.like?.length : 0 }</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', gap: 4, alignItems: 'center', borderWidth: 1, borderColor: 'black', borderRadius: 20, padding: 3, paddingHorizontal: 8 }}>
                        <Image style={{ width: 20 }} source={require('../assets/dislike.png')} />
                        <Text style={{ fontSize: 15, fontWeight: 700, fontStyle: 'Helvetica Neue' }}>{review?.disLike?.length > 0 ? review?.disLike?.length : 0}</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity>
                        <Text style={{ fontStyle: 'Poppins', fontWeight: 700, fontSize: 18 }}>Edit</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
};

export default ReviewCard;

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 3
    },
    btn: {
        backgroundColor: '#FDEDC3',
        borderRadius: 30,
        height: 26,
        paddingHorizontal: 8,
        justifyContent: 'center'
    },
    btnContainer: {
        marginTop: 8,
        flexDirection: 'row',
        gap: 7,
        width: '70%'
    },
    btnText: {
        fontSize: 12,
        fontWeight: 700,
        fontFamily: 'Poppins'
    },
    blackBtnText: {
        fontSize: 11,
        fontWeight: '700',
        color: 'white'
    },
    btnblack: {
        backgroundColor: 'black',
        borderRadius: 30,
        color: 'white',
        height: 26,
        justifyContent: 'center',
        paddingHorizontal: 8,
    },
    icon: {
        width: 20,
        height: 17,
        color: '#434343'
    },
    icontext: {
        fontSize: 12,
        fontWeight: 600,
        fontStyle: 'Poppins',
        color: '#5A5A5A'
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
        fontWeight: 700,
        color: '#434343',
    },
    userRole: {
        fontSize: 12,
        color: '#000000',
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
        color: '#333',
    },
    rightBox: {
        width: '45%',
    },
});
