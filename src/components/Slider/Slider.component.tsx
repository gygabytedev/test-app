import React, { FC } from "react";
import { Text, View, StyleSheet } from "react-native";
import VerticalSlider from "rn-vertical-slider";
import { styles } from "./Slider.style";

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
  } = styles();
  const Indicator = () => {
    return (
      <View style={indicatorContainer}>
        <View>
          <Text style={indicatorText}>{`${value} %`}</Text>
          <View style={indicatorLine} />
        </View>
        <View style={indicatorDot} />
      </View>
    );
  };

  return (
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
  );
};

export { Slider };
