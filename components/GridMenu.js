import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Platform,
  Image,
} from "react-native";
import React from "react";

export default function GridMenu({ title, color, onPress, imageUrl }) {
  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={onPress}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Image source={imageUrl} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{title}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 200,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    color: "black",
  },
  image: {
    padding: 5,
    width: 100,
    height: 100,
    marginBottom: 30,
    borderRadius: 10,
  },
  textContainer: {
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
    minWidth: 150,
    borderRadius: 100,
    backgroundColor: "#49bb40",
    elevation: 2,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
});
