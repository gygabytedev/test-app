import { StyleSheet } from "react-native";

export const styles = (isActive: boolean) =>
  StyleSheet.create({
    container: {
      backgroundColor: isActive ? "#BCE5FF" : "transparent",
      paddingHorizontal: 31,
      paddingVertical: 6,
      borderRadius: 30,
    },
    text: {
      fontWeight: "500",
    },
  });
