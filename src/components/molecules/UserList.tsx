import React, { useState, useRef } from "react";
import { View, StyleSheet, FlatList, Animated, Text } from "react-native";

import UserPage from "./UserPage";
import { colors } from "../../utils/colors";

const UserList = () => {
  const [scrollViewWidth, setScrollViewWidth] = useState(0);
  const boxWidth = scrollViewWidth * 0.8;
  const boxDistance = scrollViewWidth - boxWidth;
  const halfBoxDistance = boxDistance / 2;
  const ALL_PAGES = [1, 2];
  const pan = useRef(new Animated.ValueXY()).current;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>People you may know</Text>
      <FlatList
        style={styles.listContainer}
        horizontal
        data={ALL_PAGES}
        renderItem={({ item, index }) => <UserPage page={item} />}
        contentContainerStyle={{ paddingVertical: 16 }}
        contentInsetAdjustmentBehavior="never"
        snapToAlignment="center"
        decelerationRate="fast"
        automaticallyAdjustContentInsets={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={1}
        keyExtractor={(item) => item.toString()}
        snapToInterval={boxWidth}
        contentInset={{
          left: halfBoxDistance,
          right: halfBoxDistance
        }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: pan.x } } }],
          {
            useNativeDriver: false
          }
        )}
        contentOffset={{ x: halfBoxDistance * -1, y: 0 }}
        onLayout={(e) => {
          setScrollViewWidth(e.nativeEvent.layout.width);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  listContainer: {
    flex: 1,
    width: "100%"
  },
  title: {
    fontSize: 20,

    color: colors.colorBlack
  }
});

export default UserList;
