import React, { useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import Text from '../components/text'
const { width } = Dimensions.get('window');

const BottomTab: React.FC = () => {
    const [activeTab, setActiveTab] = useState('Home');

    const tabs = [
        { key: 'Home', label: 'Home', icon: require('../assets/home_tab.png') },
        { key: 'Classes', label: 'Classes', icon: require('../assets/closses_tab.png') },
        { key: 'Giving', label: 'Giving', icon: require('../assets/giving_tab.png') },
        { key: 'Profile', label: 'Profile', icon: require('../assets/profile_tab.png') },
    ];

    return (
        <View style={styles.container}>
            {tabs.map((tab) => (
                <TouchableOpacity
                    key={tab.key}
                    style={styles.tabButton}
                    onPress={() => setActiveTab(tab.key)}
                >
                    <Image
                        source={tab.icon}
                        style={[
                            styles.icon,
                            activeTab === tab.key ? styles.iconActive : styles.iconInactive,
                        ]}
                        resizeMode='contain'
                    />
                    <Text
                        style={[
                            styles.label,
                            activeTab === tab.key ? styles.labelActive : styles.labelInactive,
                        ]}
                    >
                        {tab.label}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

export default BottomTab;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#e0e0e0',
        height: 70,
        width: width,
        position: 'absolute',
        bottom: 0,
    },
    tabButton: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        width: 24,
        height: 24,
    },
    iconActive: {
        tintColor: '#000',
    },
    iconInactive: {
        tintColor: '#999',
    },
    label: {
        fontSize: 12,
        marginTop: 5,
    },
    labelActive: {
        color: '#000',
        fontWeight: 'bold',
    },
    labelInactive: {
        color: '#999',
    },
});
