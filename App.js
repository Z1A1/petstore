import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Index } from "./app/assets/Screen/index";
import { Provider } from "react-redux";
import store from "./app/assets/redux/store";
export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Index />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
