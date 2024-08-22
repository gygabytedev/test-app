import React, { FC } from "react";
import { Text, View, StyleSheet } from "react-native";
import VerticalSlider from "rn-vertical-slider";
import { styles } from "./Slider.style";
import { ArrowUp } from "../../../assets/icons/arrowUp";
import { ArrowDown } from "../../../assets/icons/arrowDown";

interface SliderProps {
  value: number;
  setValue: (value: number) => void;
}

const Slider: FC<SliderProps> = ({ value, setValue }) => {
  const {
    indicatorContainer,
    indicatorDot,
    indicatorLine,
    indicatorText,
    slider,
    sliderContainer,
    boxStyle,
  } = styles();
  const Indicator = () => {
    return (
      <View style={indicatorContainer}>
        <View>
          <Text style={indicatorText}>{`${value} %`}</Text>
          <View style={indicatorLine} />
        </View>
        <View style={boxStyle}></View>
        <View style={indicatorDot}>
          <ArrowUp></ArrowUp>
          <ArrowDown></ArrowDown>
        </View>
      </View>
    );
  };

  return (
    <View>
      <View
        style={{
          height: 1,
          width: 8,
          borderTopWidth: 0.8,
          borderColor: "#30324E",
          opacity: 0.2,
          position: "absolute",
          top: 120,
          left: 3,
        }}
      />
      <View
        style={{
          height: 1,
          width: 8,
          borderTopWidth: 0.8,
          borderColor: "#30324E",
          opacity: 0.2,
          position: "absolute",
          top: 80,
          left: 3,
        }}
      />
      <View
        style={{
          height: 1,
          width: 8,
          borderTopWidth: 0.8,
          borderColor: "#30324E",
          opacity: 0.2,
          position: "absolute",
          top: 40,
          left: 3,
        }}
      />
      <VerticalSlider
        value={value}
        onChange={(value) => setValue(value)}
        height={170}
        width={14}
        step={1}
        min={0}
        max={100}
        borderRadius={10}
        maximumTrackTintColor="transparent"
        minimumTrackTintColor="transparent"
        renderIndicatorHeight={30}
        showIndicator
        renderIndicator={() => <Indicator />}
        containerStyle={sliderContainer}
        sliderStyle={slider}
      />
    </View>
  );
};

export { Slider };
