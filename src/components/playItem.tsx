import React from 'react';
import {
    View,
    StyleSheet,
    ImageBackground,
    Image,
    Dimensions,
} from 'react-native';
import { ProgressBar } from 'react-native-paper';
import Text from './text';

const PlayItem: React.FC = () => {
    return (
        <View style={styles.container}>
            <View style={styles.headerRow}>
                <Text bold style={styles.title}>
                    Shiurim <Text style={styles.learnToday}>(+50 Learn today)</Text>
                </Text>
                <Text style={styles.viewMore}>View more</Text>
            </View>
            <View style={styles.cardRow}>
                {[1, 2].map((_, index) => (
                    <View style={styles.cardContainer} key={index}>
                        <ImageBackground
                            source={require('../assets/itembg.png')}
                            style={styles.cardBackground}
                            resizeMode="stretch"
                        >
                            <View style={styles.footerRow}>
                                <ProgressBar progress={0.25} color="#FFFFFF" />
                                <View style={styles.footerContent}>
                                    <Text style={styles.footerText}>8%</Text>
                                    <Text style={styles.footerText}>10 min</Text>
                                </View>
                            </View>
                        </ImageBackground>
                        <View style={styles.overlay}>
                            <ImageBackground
                                source={require('../assets/fore.png')}
                                style={styles.overlayImage}
                                imageStyle={styles.overlayImageStyle}
                                resizeMode="cover"
                            />
                        </View>
                        <View style={styles.cardInfo}>
                            <Text bold style={styles.cardTitle}>
                                Jumash
                            </Text>
                            <View style={styles.mediaRow}>
                                <Image
                                    source={require('../assets/audio.png')}
                                    style={styles.mediaIcon}
                                    resizeMode="contain"
                                />
                                <Image
                                    source={require('../assets/video.png')}
                                    style={[styles.mediaIcon, styles.mediaIconSpacing]}
                                    resizeMode="contain"
                                />
                            </View>
                        </View>
                    </View>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        paddingHorizontal: 16,
        marginTop: 30,
        marginBottom: 20,
    },
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 50,
    },
    title: {
        fontSize: 18,
        color: '#000',
    },
    learnToday: {
        fontSize: 14,
        color: '#FF5733',
    },
    viewMore: {
        fontSize: 14,
        color: '#666',
    },
    cardRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cardContainer: {
        flex: 1,
    },
    cardBackground: {
        width: '98%',
        minHeight: 200,
        borderRadius: 12,
        overflow: 'hidden',
        justifyContent: 'flex-end',
        paddingBottom: 15,
    },
    footerRow: {
        marginHorizontal: 20,
    },
    footerContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    footerText: {
        color: '#fff',
        fontSize: 12,
        marginTop: 3,
    },
    overlay: {
        height: 180,
        width: '70%',
        backgroundColor: '#6b476c',
        alignSelf: 'center',
        position: 'absolute',
        top: -30,
        borderRadius: 16,
    },
    overlayImage: {
        height: '100%',
        width: '100%',
    },
    overlayImageStyle: {
        borderRadius: 10,
    },
    cardInfo: {
        marginTop: 8,
    },
    cardTitle: {
        fontWeight: '500',
        fontSize: 18,
    },
    mediaRow: {
        flexDirection: 'row',
        marginTop: 10,
    },
    mediaIcon: {
        width: 70,
        height: 30,
    },
    mediaIconSpacing: {
        marginLeft: 10,
    },
});

export default PlayItem;
