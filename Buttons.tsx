import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

const Button = ({
  title,
  type,
  onPress
}: {
  title: string;
  type: "top" | "right" | "number";
  onPress: Function
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor:
            type == "top"
              ?'#09122C'
              : type == "right"
              ? '#7743DB'
              : '#F6F5F2',
        },
      ]}
      onPress={onPress}
    >
      <Text
        style={{
          fontSize: 34,
          color: type == "number" ? '#171617' : '#fefeff',
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    height: 70,
    width: 70,
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#09122C',
  },
});