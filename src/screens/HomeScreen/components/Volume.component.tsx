import React, { FC, useEffect, useRef, useState } from "react";
import { Animated, Image, Text, TextInput, View } from "react-native";

import { Wave } from "../../../../assets/icons/wave";
import { Slider } from "../../../components";
import { styles } from "./style";
import { DashedLine } from "../../../../assets/icons/dashed-line";

const Volume = () => {
  const {
    mainView,
    subHeaderText,
    sliderContainer,
    animatedViewContainer,
    animatedView,
    inputContainer,
    inputLabel,
    textInputWrapper,
    textInput,
    procent,
  } = styles();
  const [value, setValue] = useState(0);

  const animatedHeight = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedHeight, {
      toValue: (170 * value) / 100 + 20,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [value]);
  const handleInputChange = (text: string) => {
    const numberValue = Number(text);
    if (!isNaN(numberValue)) {
      const clampedValue = Math.max(0, Math.min(100, numberValue));
      setValue(clampedValue);
    }
  };
  return (
    <>
      <View style={mainView}>
        <Text style={subHeaderText}>
          We’ll stop the pump when your tank drops below:
        </Text>
        <View style={sliderContainer}>
          <Image
            source={require("../../../../assets/icons/tank.png")}
            style={{ width: 200, height: 200 }}
          />
          <View style={[animatedViewContainer]}>
            <Wave />
            <Animated.View style={[animatedView, { height: animatedHeight }]} />
          </View>
          <Image source={require("../../../../assets/icons/dashedLine.png")} />
          <Slider value={value} setValue={setValue} />
        </View>
      </View>
      <View style={inputContainer}>
        <Text style={inputLabel}>Source Minimum</Text>
        <View style={textInputWrapper}>
          <TextInput
            style={textInput}
            value={value.toString()}
            onChangeText={handleInputChange}
            keyboardType="numeric"
            maxLength={3}
          />
          <Text style={procent}>%</Text>
        </View>
      </View>
    </>
  );
};

export { Volume };
