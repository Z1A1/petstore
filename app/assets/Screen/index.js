import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Cart } from "../Navigation/Cart";
import { RegisterScreen } from "../Navigation/Registration";
import { Profile } from "../Navigation/Profile";
import { Homescreen } from "../Navigation/HomeScreen";
import { Mypetfeeds } from "../Navigation/Mypetfeed";

const Stack = createNativeStackNavigator();
export function Index() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={Homescreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Mypetfeed" component={Mypetfeeds} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen
          name="Registration"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F67C8E",
  },
  container1: {
    marginTop: 300,
    height: 500,
    left: 55,
    borderRadius: 25,

    width: 300,

    backgroundColor: "white",
  },
  container2: {
    flex: 1,
    marginTop: 100,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 60,
    borderRadius: 25,

    backgroundColor: "white",
  },
  input: {
    height: 40,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 10,
    margin: 10,
    borderColor: "red",
  },
  input1: {
    height: 40,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 10,
    margin: 10,
    borderColor: "red",
    backgroundColor: "#F67C8E",
  },
  searchBar: {
    marginBottom: 20,
    paddingHorizontal: 10,
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 20,
  },
  container3: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  Header: {
    fontSize: 25,
  },
  textinput: {
    marginTop: 15,
    justifyContent: "space-between",
  },
});
