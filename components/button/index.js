import React from "react";
import {StyleSheet, Text, TouchableOpacity} from "react-native";

const Button = (props) => {
  const styles = StyleSheet.create({
    container: {
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: props.backgroundColor || 'black',
      width: props.width || 105,
      height: props.height || 90,
      flex: props.style || 1,
    },
    text: {
      fontSize: props.fontSize || 14,
      color: props.color || 'white',
      // backgroundColor: props.backgroundColor || 'black'
    },
  });

  return (
    <TouchableOpacity onPress={props.onPress} style={styles.container}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
