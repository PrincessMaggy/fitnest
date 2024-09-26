import React from "react";
import { View, StyleSheet } from "react-native";
import { LineChart } from "react-native-chart-kit";

const HeartRateGraph = () => {
  const heartRateData = {
    labels: ["1", "2", "3", "4", "5", "6", "7"], // x-axis labels
    datasets: [
      {
        data: [72, 75, 78, 70, 65, 80, 85], // Sample heart rate values
        strokeWidth: 2, // Optional
      },
    ],
  };

  return (
    <View style={styles.container}>
      <LineChart
        data={heartRateData}
        width={350}
        height={220}
        yAxisLabel=""
        yAxisSuffix=" bpm"
        chartConfig={{
          backgroundColor: "#9AC4FF",
          backgroundGradientFrom: "#9AC4FF",
          backgroundGradientTo: "#ffffff",
          decimalPlaces: 0, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(107, 130, 253, ${opacity})`, // Line color
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // Label color
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            // r: "6",
            strokeWidth: "0",
            stroke: "#9AC4FF",
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HeartRateGraph;
