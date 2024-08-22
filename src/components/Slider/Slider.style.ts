import { StyleSheet } from "react-native";

export const styles = () =>
  StyleSheet.create({
    indicatorContainer: {
      flexDirection: "row",
      alignItems: "center",
      position: "absolute",
      right: -11,
      top: -40,
    },
    indicatorText: {
      position: "absolute",
      top: -34,
      left: 85,
      fontWeight: "700",
      fontSize: 21,
      fontFamily: "Monserrat-Bold",
    },
    indicatorLine: {
      width: 238,
      height: 3,
      borderTopStartRadius: 100,
      borderBottomStartRadius: 100,

      backgroundColor: "#30324E",
    },
    indicatorDot: {
      height: 36,
      width: 36,
      borderRadius: 20,
      backgroundColor: "#30324E",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      shadowColor: "black",
      shadowRadius: 10,
      shadowOffset: { width: 1, height: 5 },
      shadowOpacity: 0.5,
    },
    sliderContainer: {
      alignItems: "flex-end",
    },
    slider: {
      backgroundColor: "transparent",
      borderRadius: 10,
      opacity: 0.2,
      borderColor: "#30324E",
      borderWidth: 2,
    },
    boxStyle: {
      width: 16,
      height: 16,
      backgroundColor: "#30324E",
      transform: [{ rotate: "45deg" }],
      borderRadius: 3,
      position: "absolute",
      right: 22,
    },
  });
