import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Svg, { Circle, Path } from "react-native-svg";

interface BMICircleProps {
  bmi: number;
}

const BMICircle: React.FC<BMICircleProps> = ({ bmi }) => {
  const percentage = Math.min(bmi / 100, 1);
  const arcAngle = percentage * 360;

  const polarToCartesian = (
    centerX: number,
    centerY: number,
    radius: number,
    angleInDegrees: number
  ) => {
    const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians),
    };
  };

  const describeArc = (
    x: number,
    y: number,
    radius: number,
    startAngle: number,
    endAngle: number
  ) => {
    const start = polarToCartesian(x, y, radius, endAngle);
    const end = polarToCartesian(x, y, radius, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
    return [
      "M",
      start.x,
      start.y,
      "A",
      radius,
      radius,
      0,
      largeArcFlag,
      0,
      end.x,
      end.y,
    ].join(" ");
  };

  return (
    <View style={styles.container}>
      <Svg height="100" width="100" viewBox="0 0 100 100">
        <Circle cx="50" cy="50" r="40" fill="white" />

        <Path
          d={describeArc(50, 50, 40, 0, arcAngle)}
          fill="none"
          stroke="#FF6699"
          strokeWidth="20"
        />
      </Svg>

      <Text style={styles.bmiValue}>{bmi.toFixed(1)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 20,
    right: 20,
    borderRadius: 20,
    padding: 10,
  },
  bmiValue: {
    position: "absolute",
    color: "#FF6699",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default BMICircle;
