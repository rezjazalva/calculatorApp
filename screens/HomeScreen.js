import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import GridMenu from "../components/GridMenu";
import { FIGURE } from "../data/figureData";

export default function HomeScreen({ navigation }) {
  function renderFigure(itemData) {
    function pressHandler() {
      navigation.navigate("DetailScreen", {
        figureId: itemData.item.id,
      });
    }

    return (
      <GridMenu
        onPress={pressHandler}
        title={itemData.item.title}
        imageUrl={itemData.item.imagePath}
        color="#ffff"
      />
    );
  }

  return (
    <FlatList
      data={FIGURE}
      keyExtractor={(item) => item.id}
      renderItem={renderFigure}
      numColumns={2}
    />
  );
}
