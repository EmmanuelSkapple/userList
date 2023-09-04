import React from "react";
import { Text, View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { UserItemProps } from "../../types/moleculesTypes";
import Avatar from "../atoms/Avatar";
import { colors } from "../../utils/colors";

const UserItem = ({ user, onPress }: UserItemProps) => {
  const { first_name, last_name, avatar, id } = user;
  return (
    <TouchableWithoutFeedback onPress={() => onPress(user.id)}>
      <View style={styles.container}>
        <Avatar size="medium" name={first_name} id={id} src={avatar} />
        <View style={styles.infoContianer}>
          <Text style={styles.title}>{first_name}</Text>
          <Text style={styles.subtitle}>{last_name}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "40%",
    backgroundColor: colors.colorJade,
    margin: 10,
    padding: 10,
    borderRadius: 10,
    justifyContent: "flex-start",
    alignItems: "center",
    elevation: 5
  },
  infoContianer: {
    marginTop: 10
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.colorBlack,
    textAlign: "center"
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.colorBlack,
    textAlign: "center"
  }
});

export default UserItem;
