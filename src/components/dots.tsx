import React from 'react';
import { View, StyleSheet } from 'react-native';

const Dots: React.FC = () => {
    return (
        <View style={styles.container}>
            <View style={[styles.dot, styles.activeDot]} />
            <View style={[styles.dot, styles.inactiveDot]} />
            <View style={[styles.dot, styles.inactiveDot]} />
        </View>
    );
};

export default Dots;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
    },
    activeDot: {
        backgroundColor: 'orange',
    },
    inactiveDot: {
        backgroundColor: '#D9D9D9',
        marginLeft: 5,
    },
});
