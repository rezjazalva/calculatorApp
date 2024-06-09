import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import React from "react";
import FigureDetails from "./FigureDetails";

const windowHeight = Dimensions.get("window").height;

export default function FigureItem({ id, title, imagePath, keliling, luas }) {
  return (
    <View style={styles.mealItem}>
      <View style={styles.innerContainer}>
        <View style={styles.contentContainer}>
          <Image source={imagePath} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <FigureDetails keliling={keliling} luas={luas} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mealItem: {
    margin: 5,
    borderRadius: 8,
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    height: windowHeight,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  contentContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  image: {
    width: "50%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
  buttonPressed: {
    opacity: 0.5,
  },
});
