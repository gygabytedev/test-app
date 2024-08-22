import { StyleSheet } from "react-native";

export const styles = () =>
  StyleSheet.create({
    mainView: {
      paddingHorizontal: 20,
      alignSelf: "center",
      alignItems: "center",
      gap: 30,
    },

    subHeaderText: {
      fontFamily: "Monserrat-Bold",
      fontSize: 16,
      textAlign: "center",
      width: 230,
    },
    sliderContainer: {
      flexDirection: "row",
      alignItems: "flex-end",
    },
    animatedViewContainer: {
      height: 160,
      width: 181,
      left: 10,
      justifyContent: "flex-end",
      overflow: "hidden",
      paddingTop: 10,
      borderEndStartRadius: 8,
      borderEndEndRadius: 8,
      position: "absolute",
      borderWidth: 0,
      bottom: 9,
    },
    animatedView: {
      maxHeight: 160,
      width: 200,
      backgroundColor: "#BCE5FF",
      borderEndStartRadius: 8,
      borderEndEndRadius: 8,
    },
    inputContainer: {
      flexDirection: "row",
      gap: 10,
      alignItems: "center",
      borderColor: "#EAEAED",
      borderWidth: 2,
      borderLeftWidth: 0,
      borderRightWidth: 0,
      paddingHorizontal: 30,
      paddingVertical: 23,
      width: "100%",
      marginTop: 30,
      justifyContent: "space-between",
    },
    inputLabel: {
      fontFamily: "Monserrat-SemiBold",
      fontSize: 16,
    },
    textInputWrapper: {
      flexDirection: "row",
      gap: 10,
      alignItems: "center",
    },
    textInput: {
      backgroundColor: "#F1F1F3",
      paddingHorizontal: 10,
      paddingVertical: 9,
      borderRadius: 6,
      fontSize: 16,
      color: "#8A8B97",
    },
    procent: {
      color: "#8A8B97",
    },
  });
