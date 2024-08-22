import React, { FC } from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./Tab.style";

export interface TabProps {
  title: string;
  onPress?: () => void;
  isActive?: boolean;
}

const Tab: FC<TabProps> = ({ title, onPress, isActive = false }) => {
  const { container, text } = styles(isActive);
  return (
    <TouchableOpacity onPress={onPress} style={container}>
      <Text style={text}>{title}</Text>
    </TouchableOpacity>
  );
};

export { Tab };
