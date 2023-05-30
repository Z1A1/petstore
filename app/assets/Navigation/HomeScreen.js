import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

import { useState, useEffect } from "react";

export function Homescreen({ navigation }) {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://petstore.swagger.io/v2/user/login?username=${username}&password=${password}`
      );
      const data = await response.json();

      console.log(data);

      if (response.ok) {
        setLoading(false);

        navigation.navigate("Mypetfeed");
      }
    } catch (error) {
      console.error(error);
    }
  };
  const Reg = () => {
    navigation.navigate("Registration");
  };
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 50,
          }}
        >
          <Text style={styles.Header}> signin</Text>
        </View>
        <View style={{ marginTop: 28 }}>
          {loading ? (
            <ActivityIndicator size="large" />
          ) : (
            <>
              <TextInput
                style={[styles.input]}
                placeholder={"Enter username"}
                value={username}
                keyboardType="email-address"
                onChangeText={setUserName}
              />
              <TextInput
                style={[styles.input]}
                placeholder={"password"}
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
              />
              <View style={styles.input1}>
                <Button
                  title="Click me"
                  color="#F67C8E"
                  onPress={handleLogin}
                  style={{
                    backgroundColor: "#00f",
                    borderRadius: 10,
                    margin: 10,
                  }}
                />
              </View>
            </>
          )}
        </View>

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 15,
          }}
        >
          <TouchableOpacity onPress={Reg}>
            <Text style={{ fontSize: 18 }}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
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
    borderColor: "red", // Change this to whatever color you want
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
