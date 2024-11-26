import React from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text,
    ImageBackground,
    Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

const Quote: React.FC = () => {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../assets/quoteCard.png')}
                style={styles.imageBackground}
                resizeMode="cover"
            >
                <View style={styles.quoteContainer}>
                    <Image
                        source={require('../assets/quotes.png')}
                        style={styles.quoteIcon}
                    />
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>In that era, there will be neither famine or</Text>
                        <Text style={styles.text}>war, envy or competition, for good will flow</Text>
                        <Text style={styles.text}>in abundance and all the delights will be</Text>
                        <Text style={styles.text}>freely available as dust. The occupation of</Text>
                        <Text style={styles.text}>the entire world will be solely to know G-d.</Text>
                    </View>
                    <Text style={styles.authorText}>- Mishneh Tarah</Text>
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EBF0F1',
    },
    imageBackground: {
        width: width,
        height: width * 0.9,
    },
    quoteContainer: {
        marginVertical: 50,
        marginHorizontal: 35,
    },
    quoteIcon: {
        width: 30,
        height: 30,
    },
    textContainer: {
        marginTop: 20,
        marginBottom: 25,
    },
    text: {
        fontSize: 14,
        marginBottom: 5,
        fontFamily: 'Prata-Regular',
    },
    authorText: {
        fontFamily: 'Prata-Regular',
        fontWeight: 'bold',
    },
});

export default Quote;
