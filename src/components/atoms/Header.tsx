import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../../utils/colors";
import { HeaderProps } from "../../types/atomsType";
import Ionicons from "react-native-vector-icons/Ionicons";

const Header = ({ title, onBack }: HeaderProps) => {
  return (
    <View style={styles.container}>
      {onBack ? (
        <TouchableOpacity onPress={onBack} style={styles.iconBack}>
          <Ionicons name="arrow-back" size={30} color={colors.colorWhite} />
        </TouchableOpacity>
      ) : null}
      <Text style={styles.headerText}> {title} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.colorBlack,
    marginBottom: 10,
    elevation: 5
  },
  headerText: {
    color: colors.colorWhite,
    fontSize: 20,
    fontWeight: "bold"
  },
  iconBack: {
    position: "absolute",
    left: 10,
    top: 10
  }
});

export default Header;
