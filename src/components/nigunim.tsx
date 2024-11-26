import React from "react";
import {
    View,
    StyleSheet,
    Dimensions,
    Image,
    ImageSourcePropType,
} from "react-native";
import Text from "./text";

const { width } = Dimensions.get("window");

interface CardItem {
    id: number;
    title: string;
    subtitle: string;
    sessions: string;
    image: ImageSourcePropType;
}

const data: CardItem[] = [
    {
        id: 1,
        title: "Calm Jewish",
        subtitle: "to relax",
        sessions: "43 sessions",
        image: require("../assets/imageOne.png"),
    },
    {
        id: 2,
        title: "Chabod Ni...",
        subtitle: "chabad music",
        sessions: "43 sessions",
        image: require("../assets/imageTwo.png"),
    },
];

interface CardProps {
    item: CardItem;
}

const Card: React.FC<CardProps> = ({ item }) => (
    <View style={styles.card}>
        <Image source={item.image} style={styles.cardImage} resizeMode="contain" />
        <View style={styles.titleRow}>
            <Image source={require("../assets/music.png")} style={styles.icon} />
            <Text bold style={styles.cardTitle}>
                {item.title}
            </Text>
        </View>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
        <View style={styles.sessionContainer}>
            <Image source={require("../assets/session.png")} style={styles.icon} />
            <Text style={styles.sessionText}>{item.sessions}</Text>
        </View>
    </View>
);

const Niguinim: React.FC = () => (
    <View style={styles.container}>
        <View style={styles.headerRow}>
            <Text bold style={styles.headerTitle}>
                Nigunim
            </Text>
            <Text style={styles.viewMore}>View more</Text>
        </View>
        <View style={styles.cardRow}>
            {data.map((item) => (
                <Card key={item.id} item={item} />
            ))}
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 16,
        paddingTop: 20,
    },
    headerRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        marginBottom: 60,
    },
    headerTitle: {
        fontSize: 18,
        color: "#000",
    },
    viewMore: {
        fontSize: 14,
        color: "#666",
    },
    cardRow: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    card: {
        backgroundColor: "#fff",
        borderRadius: 16,
        padding: 16,
        width: width / 2 - 30,
        marginHorizontal: 5,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 12,
        elevation: 4,
        alignItems: "flex-start",
    },
    cardImage: {
        width: 121,
        height: 150,
        marginTop: -50,
        alignSelf: "center",
    },
    titleRow: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
    },
    cardTitle: {
        fontSize: 16,
        color: "#000",
        marginLeft: 7,
    },
    subtitle: {
        fontSize: 14,
        color: "#5E626C",
        marginBottom: 8,
    },
    sessionContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    sessionText: {
        fontSize: 14,
        color: "#5E626C",
        marginLeft: 10,
    },
    icon: {
        width: 12,
        height: 15,
    },
});

export default Niguinim;
