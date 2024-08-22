import { StyleSheet } from "react-native";

export const styles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
    },
    mainView: {
      paddingHorizontal: 20,
      alignSelf: "center",
      alignItems: "center",
      gap: 30,
      marginBottom: 30,
    },
    headerText: {
      fontWeight: "600",
      fontSize: 16,
    },
  });
