import React from 'react';
import { View, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import Text from './text';

const { width, height } = Dimensions.get('window');

const PrayerCard: React.FC = () => {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../assets/Maskgroup.png')}
                style={styles.imageBackground}
                resizeMode="contain"
            >
                <View style={styles.textContainer}>
                    <Text style={styles.title}>Morning prayer</Text>
                    <Text style={styles.date}>20.10.2022</Text>
                    <Text style={styles.subText}>יום שבת, ה׳ בסיוון תשפ״ב</Text>
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        alignItems: 'center',
    },
    imageBackground: {
        width: width * 0.9, // 90% of screen width
        height: height * 0.25, // 25% of screen height
        borderRadius: 16,
        overflow: 'hidden',
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: 30,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 8,
    },
    date: {
        fontSize: 16,
        color: '#fff',
        marginBottom: 4,
    },
    subText: {
        fontSize: 14,
        color: '#fff',
    },
});

export default PrayerCard;
