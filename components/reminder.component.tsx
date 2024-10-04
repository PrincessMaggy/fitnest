import { Colors } from "@/constants/Colors";
import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

interface ReminderComponentProps {
  title: string;
  description: string;
  onClear: () => void;
}

const ReminderComponent: React.FC<ReminderComponentProps> = ({
  title,
  description,
  onClear,
}) => {
  return (
    <View style={styles.reminderContainer}>
      <View style={styles.reminderIconContainer}>
        <Image
          source={require("@/assets/images/reminder-calendar.png")}
          style={styles.reminderIcon}
        />
      </View>
      <View style={styles.reminderTextContainer}>
        <Text style={styles.reminderTitle}>{title}</Text>
        <Text style={styles.reminderDescription}>{description}</Text>
      </View>

      <TouchableOpacity onPress={onClear}>
        <Image
          style={styles.closeButton}
          source={require("@/assets/images/x-icon.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  reminderContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#FEE2E2",
    borderRadius: 15,
    marginBottom: 20,
  },
  reminderIconContainer: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 20,
    marginRight: 10,
  },
  reminderIcon: {
    width: 50,
    resizeMode: "contain",
    height: 50,
  },
  reminderTextContainer: {
    flex: 1,
  },
  reminderTitle: {
    fontSize: 12,
    fontFamily: "PoppinsRegular",
    color: "#EF4444",
  },
  reminderDescription: {
    fontSize: 12,
    fontFamily: "PoppinsRegular",
    color: Colors.brand.headercolor,
  },
  closeButton: {
    width: 20,
    height: 20,
  },
});

export default ReminderComponent;
