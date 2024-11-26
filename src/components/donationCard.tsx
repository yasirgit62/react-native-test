import React from 'react';
import { View, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import Text from './text'; // Custom Text component

const { width } = Dimensions.get("window");

const Card: React.FC = () => {
    return (
        <ImageBackground
            source={require('../assets/plainbluebg.png')}
            resizeMode="stretch"
            style={styles.cardBackground}
        >
            <Text style={styles.cardTitle}>
                Help other Jews illuminate their lives by studying the Torah
            </Text>
            <View style={styles.shareButton}>
                <Text style={styles.shareButtonText}>Share Shiurim</Text>
            </View>
            <View style={styles.donationButton}>
                <Text style={styles.donationButtonText}>Donation</Text>
            </View>
        </ImageBackground>
    );
};

const DonationCard: React.FC = () => {
    return (
        <View style={styles.container}>
            <Card />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
    },
    cardBackground: {
        width: width - 40,
        height: width,
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    cardTitle: {
        color: '#fff',
        fontSize: 18,
    },
    shareButton: {
        backgroundColor: '#F15223',
        borderRadius: 60,
        paddingVertical: 12,
        marginTop: 50,
    },
    shareButtonText: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
    },
    donationButton: {
        paddingVertical: 12,
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 60,
        marginTop: 30,
    },
    donationButtonText: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
    },
});

export default DonationCard;
