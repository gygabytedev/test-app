import { StyleSheet } from "react-native";

export const styles = () =>
  StyleSheet.create({
    indicatorContainer: {
      flexDirection: "row",
      alignItems: "center",
      position: "absolute",
      right: -13,
      top: -40,
    },
    indicatorText: {
      position: "absolute",
      top: -20,
      left: 90,
      fontWeight: "700",
      fontSize: 16,
    },
    indicatorLine: {
      width: 230,
      height: 5,
      backgroundColor: "black",
    },
    indicatorDot: {
      height: 40,
      width: 40,
      borderRadius: 20,
      backgroundColor: "#30324E",
    },
    sliderContainer: {
      alignItems: "flex-end",
    },
    slider: {
      backgroundColor: "transparent",
      borderRadius: 10,
      borderColor: "gray",
      borderWidth: 2,
    },
  });
