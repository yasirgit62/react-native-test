import React from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Image,
    ImageSourcePropType,
} from 'react-native';
import Text from './text';

interface ActionItem {
    id: number;
    icon: ImageSourcePropType;
    label: string;
    labelColor?: string;
}

const actionItemsData: ActionItem[] = [
    { id: 1, icon: require('../assets/download.png'), label: 'Download', labelColor: '#000' },
    { id: 2, icon: require('../assets/bell.png'), label: 'Routine' },
    { id: 3, icon: require('../assets/star.png'), label: 'Favorites' },
    { id: 4, icon: require('../assets/clock.png'), label: 'Recents' },
];

const ActionItems: React.FC = () => {
    return (
        <View style={styles.container}>
            {actionItemsData.map((item) => (
                <View style={styles.iconWithLabel} key={item.id}>
                    <TouchableOpacity style={styles.button}>
                        <Image source={item.icon} style={styles.icon} />
                    </TouchableOpacity>
                    <Text style={[styles.label, item.labelColor ? { color: item.labelColor } : {}]}>
                        {item.label}
                    </Text>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#fff',
        marginTop:20
    },
    iconWithLabel: {
        alignItems: 'center',
    },
    button: {
        width: 60,
        height: 60,
        borderRadius: 16,
        backgroundColor: '#f7f7f7',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    label: {
        marginTop: 8,
        fontSize: 12,
        color: '#5E626C',
        textAlign: 'center',
    },
    icon: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
    },
});

export default ActionItems;
