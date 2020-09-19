import React from "react";
import { StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/FontAwesome";

type HeaderProps = {
  image?: string;
};
export default function Header({ image }: HeaderProps) {
  const styles = StyleSheet.create({
    linearGradient: {
      flex: 1,
      height: "40%",
      width: "100%",
      position: "absolute",
      top: 0,
      borderBottomLeftRadius: 35,
      borderBottomRightRadius: 35,
      alignItems: "center",
      justifyContent: "center",
    },
    icon: {
      marginBottom: 170,
    },
    image: {
      flex: 1,
      position: "absolute",
      resizeMode: "cover",
      width: "100%",
      height: "100%",
      alignItems: "center",
      justifyContent: "center",
    },
  });
  return (
    <LinearGradient
      colors={["#6732a8", "#3258a8"]}
      style={styles.linearGradient}
    >
      <ImageBackground
        source={{ uri: image }}
        style={styles.image}
        imageStyle={{ borderBottomLeftRadius: 35, borderBottomRightRadius: 35 }}
      >
        <Icon name="film" color="#fff" size={85} style={styles.icon} />
      </ImageBackground>
    </LinearGradient>
  );
}
