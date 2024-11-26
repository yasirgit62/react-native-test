import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Text from './text'; //custom Text component

const Header: React.FC = () => {
    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity style={styles.leftIconContainer}>
                <Image
                    source={require('../assets/path2362.png')}
                    style={styles.icon}
                />
                <View style={styles.notificationBadge}>
                    <Text style={styles.badgeText}>2</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.rightIconContainer}>
                <Image
                    source={require('../assets/Group10851.png')}
                    style={styles.icon}
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
    },
    leftIconContainer: {
        position: 'relative',
    },
    notificationBadge: {
        position: 'absolute',
        top: -7,
        right: -10,
        backgroundColor: '#FF0000',
        borderRadius: 10,
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    badgeText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
    },
    rightIconContainer: {
        // Intentionally empty to allow for future customizations
    },
    icon: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
    },
});

export default Header;
