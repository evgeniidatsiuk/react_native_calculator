import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Display = (props) => {
  const styles = StyleSheet.create({
    container: { padding: 20 },
    display: { fontSize: 70, color: "black", textAlign: "right" },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.display}>{props.value}</Text>
    </View>
  );
};

export default Display;
