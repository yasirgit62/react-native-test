import React from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';
import Text from './text'; // Custom Text component

const { width } = Dimensions.get('window');

const ThankyouCard: React.FC = () => {
    return (
        <View style={styles.cardContainer}>
            <Text style={styles.thankYouTitle}>Special thanks</Text>
            <Text style={styles.thankYouSubtitle}>to Yossi Mandy Lerman</Text>
            <Text style={styles.description}>
                thanks to his generous donation, {'\n'}
                we can study in “Shiurim” today.
            </Text>
            <View style={styles.readMoreButton}>
                <Text style={styles.readMoreText}>Read more</Text>
                <Image
                    source={require('../assets/right_arrow.png')}
                    style={styles.readMoreIcon}
                    resizeMode="contain"
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        marginTop: 40,
        backgroundColor: '#fff',
        borderRadius: 16,
        width: width - 40,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 12,
        elevation: 4,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 20,
        paddingVertical: 30,
        marginVertical: 20,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        marginBottom: 100
    },
    thankYouTitle: {
        fontSize: 20,
        color: '#F15223',
    },
    thankYouSubtitle: {
        fontSize: 16,
        color: '#000',
        fontFamily: 'Poppins-SemiBold',
    },
    description: {
        fontSize: 14,
        marginTop: 10,
        textAlign: 'center',
    },
    readMoreButton: {
        backgroundColor: '#F15223',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        paddingVertical: 7,
        paddingHorizontal: 15,
        borderRadius: 20,
    },
    readMoreText: {
        fontSize: 10,
        color: '#fff',
    },
    readMoreIcon: {
        width: 13,
        height: 13,
        marginLeft: 5,
    },
});

export default ThankyouCard;
