import { SafeAreaView, Text, View } from "react-native";
import { useState } from "react";
import { ListOfTabs } from "../../components";
import { styles } from "./HomeScreen.style";
import { Percentage, Volume } from "./components";

const mockTabs = [{ title: "PERCENTAGE" }, { title: "VOLIME" }];

const HomeScreen = () => {
  const [activeTab, setActiveTab] = useState<string>(mockTabs[0].title);

  const { mainView, container, headerText } = styles();

  return (
    <SafeAreaView style={container}>
      <View style={mainView}>
        <Text style={headerText}>Source Minimum</Text>
        <ListOfTabs
          arrayOfTabs={mockTabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </View>
      {activeTab === mockTabs[0].title ? <Percentage /> : <Volume />}
    </SafeAreaView>
  );
};

export { HomeScreen };
