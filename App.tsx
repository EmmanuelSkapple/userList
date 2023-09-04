import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { RouteMain } from "./src/routes/routeMain";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView style={style.SafeArea}>
      <NavigationContainer>
        <RouteMain />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  SafeArea: {
    flex: 1
  }
});
