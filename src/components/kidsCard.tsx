import React from 'react';
import {
    View,
    StyleSheet,
    Image,
    ImageSourcePropType,
} from 'react-native';
import Text from './text'; // Custom Text component

interface CardProps {
    image: ImageSourcePropType;
}

const Card: React.FC<CardProps> = ({ image }) => {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.cardImageContainer}>
                <Image
                    source={image}
                    style={styles.cardImage}
                    resizeMode="cover"
                />
            </View>
            <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>Moises</Text>
                <Text style={styles.cardSubtitle}>the story of</Text>
                <View style={styles.cardFooter}>
                    <View style={styles.sessionContainer}>
                        <Image
                            source={require('../assets/session.png')}
                            style={styles.icon}
                        />
                        <Text style={styles.sessionText}>43 session</Text>
                    </View>
                    <Image
                        source={require('../assets/readMore.png')}
                        style={styles.readMoreIcon}
                        resizeMode="contain"
                    />
                </View>
            </View>
        </View>
    );
};

const KidsCard: React.FC = () => {
    return (
        <View style={styles.container}>
            <View style={styles.headerRow}>
                <Text bold style={styles.headerTitle}>
                    Kids
                </Text>
                <Text style={styles.viewMore}>View more</Text>
            </View>
            <Card image={require('../assets/storyOne.png')} />
            <Card image={require('../assets/storyTwo.png')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 20,
    },
    headerTitle: {
        fontSize: 18,
        color: '#000',
    },
    viewMore: {
        fontSize: 14,
        color: '#666',
    },
    cardContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    cardImageContainer: {
        backgroundColor: '#fff',
        borderRadius: 16,
        width: 100,
        height: 100,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 12,
        elevation: 4,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    cardImage: {
        width: 70,
        height: 80,
        borderRadius: 16,
    },
    cardContent: {
        flex: 3,
        paddingLeft: 15,
    },
    cardTitle: {
        fontSize: 16,
    },
    cardSubtitle: {
        fontSize: 14,
        color: '#5E626C',
    },
    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    sessionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    sessionText: {
        fontSize: 14,
        color: '#5E626C',
        marginLeft: 10,
    },
    icon: {
        width: 12,
        height: 15,
    },
    readMoreIcon: {
        width: 60,
        height: 21,
    },
});

export default KidsCard;
