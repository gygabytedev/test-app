import React, { FC } from "react";
import { FlatList, View } from "react-native";
import { Tab, TabProps } from "../Tab/Tab.component";

interface ListOfTabsProps {
  arrayOfTabs: TabProps[];
  activeTab: string;
  setActiveTab: (title: string) => void;
}

const ListOfTabs: FC<ListOfTabsProps> = ({
  arrayOfTabs,
  activeTab,
  setActiveTab,
}) => {
  return (
    <View style={{ width: "100%" }}>
      <FlatList
        data={arrayOfTabs}
        horizontal
        contentContainerStyle={{
          borderWidth: 2,
          borderRadius: 30,
          borderColor: "#BCE5FF",
          padding: 4,
          justifyContent: "space-between",
        }}
        renderItem={({ item }) => (
          <Tab
            {...item}
            isActive={activeTab === item.title}
            onPress={() => setActiveTab(item.title)}
          />
        )}
      />
    </View>
  );
};

export { ListOfTabs };
