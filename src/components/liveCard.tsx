import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Text from './text'; // custom Text component

const Card: React.FC = () => {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.cardHeader}>
                <Text style={styles.cardSubtitle}>Lorem ipsum</Text>
                <Image source={require('../assets/live.png')} style={styles.liveIcon} />
            </View>
            <View style={styles.cardBody}>
                <Text style={styles.cardBodyText}>
                    Lorem Ipsum is simply dummy text of the printing.
                </Text>
            </View>
            <View style={styles.cardFooter}>
                <Text style={styles.cardFooterText}>by Rebba</Text>
                <View style={styles.userContainer}>
                    <Image source={require('../assets/user.png')} style={styles.userIcon} />
                    <Image source={require('../assets/user.png')} style={[styles.userIcon, styles.userIconOverlap]} />
                    <Image source={require('../assets/user.png')} style={[styles.userIcon, styles.userIconOverlap]} />
                    <View style={styles.additionalUsers}>
                        <Text style={styles.additionalUsersText}>3+</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

const LiveCard: React.FC = () => {
    return (
        <View>
            <View style={styles.headerRow}>
                <Text bold style={styles.headerTitle}>
                    Live group discussion
                </Text>
                <Text style={styles.viewMore}>View more</Text>
            </View>
            <Card />
            <Card />
        </View>
    );
};

const styles = StyleSheet.create({
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginBottom: 10,
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
        backgroundColor: '#EBF0F1',
        borderRadius: 20,
        marginTop: 30,
        paddingVertical: 20,
        marginHorizontal: 20,
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 20,
        alignItems: 'center',
        marginTop: 5,
    },
    cardSubtitle: {
        fontSize: 14,
        color: '#5E626C',
    },
    liveIcon: {
        width: 75,
        height: 34,
    },
    cardBody: {
        paddingHorizontal: 20,
        marginTop: 20,
    },
    cardBodyText: {
        fontSize: 16,
    },
    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        alignItems: 'center',
        marginTop: 10,
    },
    cardFooterText: {
        fontSize: 14,
        color: '#5E626C',
    },
    userContainer: {
        flexDirection: 'row',
    },
    userIcon: {
        width: 40,
        height: 40,
    },
    userIconOverlap: {
        marginLeft: -15,
    },
    additionalUsers: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F15223',
        borderRadius: 20,
        marginLeft: -15,
    },
    additionalUsersText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
    },
});

export default LiveCard;
