import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function FigureDetails({ keliling, luas, style, textStyle }) {
  return (
    <View style={[styles.details, style]}>
      <View style={styles.labelValue}>
        <View style={styles.label}>
          <Text style={[styles.detailItem, textStyle]}>KELILING</Text>
          <Text style={[styles.detailItem, textStyle]}>=</Text>
        </View>
        <Text style={[styles.detailItem, textStyle]}>
          {keliling.toUpperCase()}
        </Text>
      </View>

      <View style={styles.labelValue}>
        <View style={styles.label}>
          <Text style={[styles.detailItem, textStyle]}>LUAS</Text>
          <Text style={[styles.detailItem, textStyle]}>=</Text>
        </View>
        <Text style={[styles.detailItem, textStyle]}>{luas.toUpperCase()}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  details: {
    flexDirection: "column",
    alignItems: "flex-start",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
    fontWeight: "bold",
  },
  label: {
    minWidth: "20%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  labelValue: {
    flexDirection: "row",
  },
});
