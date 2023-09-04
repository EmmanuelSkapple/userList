import React from "react";
import { Image, View, StyleSheet, ActivityIndicator } from "react-native";
import { LoadingProps } from "../../types/atomsType";
import { screenWidth } from "../../utils/GetSizes";

const Loading = ({ size = "large", color }: LoadingProps) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator animating color={color} size={size} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default Loading;
