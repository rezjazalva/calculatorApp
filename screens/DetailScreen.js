import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import { FIGURE } from "../data/figureData";
import FigureList from "../components/twoDimensional/FigureList";

export default function DetailScreen({ route }) {
  const figureId = route.params.figureId;
  const displayedMeals = FIGURE.filter((figureItem) => {
    return figureItem.id.indexOf(figureId) >= 0;
  });

  return <FigureList items={displayedMeals} />;
}

