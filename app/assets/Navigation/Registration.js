import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ActivityIndicator,
} from "react-native";

import { useState, useEffect } from "react";

export function RegisterScreen({ navigation }) {
  const [username, setUserName] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const handlePress = () => {
    setLoading(true);
    fetch("https://petstore.swagger.io/v2/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
        phone: phone,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setLoading(false);
        navigation.navigate("home");
      })

      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <View style={styles.container3}>
          <Text style={styles.Header}> Signup</Text>
        </View>
        <View style={styles.textinput}>
          <TextInput
            style={[styles.input]}
            placeholder={"Enter username"}
            value={username}
            onChangeText={setUserName}
          />
          <TextInput
            style={[styles.input]}
            placeholder={"firstname"}
            value={firstname}
            onChangeText={setFirstname}
          />
          <TextInput
            style={[styles.input]}
            placeholder={"lastname"}
            value={lastname}
            onChangeText={setLastname}
          />
          <TextInput
            style={[styles.input]}
            placeholder={"email"}
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={[styles.input]}
            placeholder={"password"}
            value={password}
            onChangeText={setPassword}
          />
          <TextInput
            style={[styles.input]}
            placeholder={"phone"}
            value={phone}
            onChangeText={setPhone}
          />

          <View
            style={{
              width: "40%",
              alignItems: "center",
              justifyContent: "center",
              alignSelf: "center",
            }}
          >
            {loading ? (
              <ActivityIndicator size="large" />
            ) : (
              <>
                <Button title="Registar" onPress={handlePress}></Button>
              </>
            )}
          </View>
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
