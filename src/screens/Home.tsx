import React from "react";
import { View, StyleSheet } from "react-native";
import Header from "../components/atoms/Header";
import UserList from "../components/molecules/UserList";
import { colors } from "../utils/colors";

interface HomeProps {}

const Home = ({}: HomeProps) => {
  return (
    <View style={styles.container}>
      <Header title="Home" />
      <UserList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    height: "100%",
    width: "100%",
    alignItems: "center",
    backgroundColor: colors.colorCream
  }
});

export default Home;
