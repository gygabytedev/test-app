import { StyleSheet } from "react-native";

export const styles = () =>
  StyleSheet.create({
    mainView: {
      paddingHorizontal: 20,
      alignSelf: "center",
      alignItems: "center",
      gap: 30,
    },
    headerText: {
      fontWeight: "600",
      fontSize: 16,
    },
    subHeaderText: {
      fontWeight: "700",
      fontSize: 16,
      textAlign: "center",
      width: 200,
    },
    sliderContainer: {
      flexDirection: "row",
      gap: 40,
    },
    animatedViewContainer: {
      height: 170,
      width: 204,
      borderWidth: 2,
      justifyContent: "flex-end",
      overflow: "hidden",
      paddingTop: 10,
      position: "relative",
    },
    animatedView: {
      maxHeight: 160,
      width: 200,
      backgroundColor: "#BCE5FF",
    },
    inputContainer: {
      flexDirection: "row",
      gap: 10,
      alignItems: "center",
      borderWidth: 2,
      borderLeftWidth: 0,
      borderRightWidth: 0,
      padding: 10,
      width: "100%",
      marginTop: 30,
      justifyContent: "space-between",
    },
    inputLabel: {
      fontWeight: "600",
      fontSize: 16,
    },
    textInputWrapper: {
      flexDirection: "row",
      gap: 10,
      alignItems: "center",
    },
    textInput: {
      backgroundColor: "#F1F1F3",
      padding: 6,
      borderRadius: 6,
    },
  });
