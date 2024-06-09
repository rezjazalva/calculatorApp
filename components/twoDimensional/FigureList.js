import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import FigureItem from "./FigureItems";

export default function FigureList({ items }) {
  function renderMealItem(itemData) {
    const item = itemData.item;

    const figureItemProps = {
      id: item.id,
      title: item.title,
      imagePath: item.imagePath,
      keliling: item.keliling,
      luas: item.luas,
    };
    return <FigureItem {...figureItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
