import React, { useEffect, useState } from "react";
import { View, StyleSheet, Animated } from "react-native";
import UserItem from "./UserItem";
import { getUserList } from "../../api/userApi";
import { UserTypes } from "../../types/userType";
import { useNavigation } from "@react-navigation/native";
import Loading from "../atoms/Loading";
interface UserPageProps {
  page: number;
}

const UserPage = ({ page }: UserPageProps) => {
  const [userList, setUserList] = useState<UserTypes[]>([]);
  const navigation = useNavigation<any>();

  const getUsers = async () => {
    const response = await getUserList(page);
    setUserList(response.data);
  };
  useEffect(() => {
    getUsers();
  }, []);

  const navigateProfile = (userId: number) => {
    navigation.navigate("UserDetails", { userId });
  };

  return (
    <View style={styles.container}>
      {userList.map((user) => {
        return <UserItem key={user.id} user={user} onPress={navigateProfile} />;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around"
  }
});

export default UserPage;
