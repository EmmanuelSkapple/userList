import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { colors } from "../utils/colors";
import Header from "../components/atoms/Header";
import { useNavigation, useRoute } from "@react-navigation/native";
import { getUserDetail } from "../api/userApi";
import { UserTypes } from "../types/userType";
import Avatar from "../components/atoms/Avatar";
import Loading from "../components/atoms/Loading";

const UserDetails = () => {
  const [userProfile, setUserProfile] = useState<UserTypes>({} as UserTypes);
  const [loading, setLoading] = useState<boolean>(true);
  const navigation = useNavigation<any>();
  const route = useRoute() as any;

  const { userId } = route.params;
  const getUser = async () => {
    setLoading(true);
    const response = await getUserDetail(userId);
    setUserProfile(response.data);
    setLoading(false);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <View style={styles.container}>
      <Header onBack={() => navigation.goBack()} title="Profile" />
      {loading ? (
        <Loading />
      ) : (
        <View style={styles.headerProfile}>
          <Avatar size="large" src={userProfile.avatar} />
          <Text
            style={styles.title}
          >{`${userProfile.first_name} ${userProfile.last_name}`}</Text>
          <Text style={styles.subtitle}>{userProfile.email}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: colors.colorCream
  },
  headerProfile: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.colorJade,
    width: "90%",
    padding: 20,
    borderRadius: 10
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.colorBlack,
    textAlign: "center"
  },
  subtitle: {
    fontSize: 16,
    color: colors.colorBlack,
    textAlign: "center"
  }
});

export default UserDetails;
