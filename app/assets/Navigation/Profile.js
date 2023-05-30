import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  FlatList,
  useNavigation,
  Modal,
  Alert,
  Image,
  ActivityIndicator,
} from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";

export function Profile({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 0.25,
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <View style={{ justifyContent: "flex-end" }}>
          <Image
            style={{ height: 25, width: 25 }}
            source={require("../../assets/1.jpeg")}
          />
        </View>
        <View style={{ justifyContent: "flex-end" }}>
          <Text style={{}}> My Profile </Text>
        </View>
        <View style={{ justifyContent: "flex-end" }}>
          <Image
            style={{ height: 15, width: 15 }}
            source={require("../../assets/8.jpeg")}
          />
        </View>
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <View>
          <Image
            Image
            style={{ height: 100, width: 100, borderRadius: 45 }}
            source={require("../../assets/6.jpeg")}
          />
        </View>
        <View>
          <Text style={{ fontStyle: "italic", fontSize: 30 }}>
            {" "}
            Edward Larry{" "}
          </Text>
          <Text style={{ fontSize: 20 }}>Senior designer</Text>
        </View>
        <View>
          <Image
            Image
            style={{ height: 50, width: 50 }}
            source={require("../../assets/4.jpeg")}
          />
        </View>
      </View>
      <View style={{ flex: 2 }}>
        <Text style={{ marginLeft: 10 }}>My status</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: 10,
          }}
        >
          <View style={{ borderRadius: 25, width: 70 }}>
            <TouchableOpacity
              style={{
                backgroundColor: "red",
                borderRadius: 10,
              }}
            >
              <Text style={{ textAlign: "center" }}>Away</Text>
            </TouchableOpacity>
          </View>
          <View style={{ backgroundColor: "red", borderRadius: 25, width: 70 }}>
            <TouchableOpacity
              style={{
                backgroundColor: "orange",
                borderRadius: 10,
              }}
            >
              <Text style={{ textAlign: "center" }}>At Work</Text>
            </TouchableOpacity>
          </View>
          <View style={{ borderRadius: 25, width: 70 }}>
            <TouchableOpacity
              style={{
                backgroundColor: "green",
                borderRadius: 10,
              }}
            >
              <Text style={{ textAlign: "center" }}>Game</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={{ marginTop: 40, marginLeft: 10, fontSize: "10" }}>
          {" "}
          Dashboard
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: 20,
          }}
        >
          <View>
            <Image
              style={{ height: 80, width: 80 }}
              source={require("../../assets/7.jpeg")}
            />
          </View>
          <View style={{ justifyContent: "center" }}>
            <Text> Payments</Text>
          </View>
          <View style={{ width: 90, justifyContent: "center" }}>
            <TouchableOpacity
              style={{ backgroundColor: "blue", borderRadius: 15 }}
            >
              <View
                style={{ flexDirection: "row", justifyContent: "space-evenly" }}
              >
                <Text style={{ marginLeft: 10 }}>2 new</Text>
                <Ionicons
                  name="md-send"
                  size={10}
                  color="#666"
                  style={{ marginTop: 5 }}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: 20,
          }}
        >
          <View>
            <Image
              style={{ height: 80, width: 80 }}
              source={require("../../assets/5.jpeg")}
            />
          </View>
          <View style={{ justifyContent: "center" }}>
            <Text> Achievements</Text>
          </View>
          <View style={{ width: 90, justifyContent: "center" }}>
            <TouchableOpacity style={{}}>
              <Ionicons
                name="md-send"
                size={10}
                color="#666"
                style={{ marginTop: 5 }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: 20,
          }}
        >
          <View>
            <Image
              style={{ height: 80, width: 80 }}
              source={require("../../assets/2.jpeg")}
            />
          </View>
          <View style={{ justifyContent: "center" }}>
            <Text> Privacy</Text>
          </View>
          <View style={{ width: 140, justifyContent: "center" }}>
            <TouchableOpacity
              style={{ backgroundColor: "yellow", borderRadius: 15 }}
            >
              <View
                style={{ flexDirection: "row", justifyContent: "space-evenly" }}
              >
                <Text style={{ marginLeft: 10 }}>Actions Needed</Text>
                <Ionicons
                  name="md-send"
                  size={10}
                  color="#666"
                  style={{ marginTop: 5 }}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{ flex: 0.5 }}>
        <Text style={{ marginLeft: 10, color: "#B2BEB5", fontSize: 15 }}>
          {" "}
          My Account
        </Text>
        <Text
          style={{ marginLeft: 10, color: "blue", fontSize: 20, marginTop: 10 }}
        >
          {" "}
          switch to another account
        </Text>
        <Text
          style={{
            marginLeft: 10,
            color: "orange",
            fontSize: 20,
            marginTop: 10,
          }}
        >
          {" "}
          Logout
        </Text>
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
