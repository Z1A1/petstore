import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  FlatList,
  Modal,
  ActivityIndicator,
} from "react-native";

import AntDesign from "react-native-vector-icons/AntDesign";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/Slicer";

export function Mypetfeeds({ navigation }) {
  const [inventoryData, setInventoryData] = useState([]);
  const [sortData, setSortData] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [taskid, setTaskid] = useState("");
  const [searchText, setSearchText] = useState("");
  const [textInputVisible, setTextInputVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const [filt, setFilt] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const array = useSelector((state) => state.array);
  const dispatch = useDispatch();

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const Cart = () => {
    navigation.navigate("Cart", { cartItems });
  };

  const handleOptionPresssold = (status) => {
    let sortedData = [];
    if (status === "available") {
      sortedData = filt.filter((item) => item.status === "available");
    } else {
      sortedData = filt.filter((item) => item.status === status);
    }
    setInventoryData(sortedData);

    setModalVisible(false);
  };

  const addcartitem = (item) => {
    setCartItems([...cartItems, item.name]);
    dispatch(addToCart(cartItems));

    console.log(cartItems);
  };
  const profile = () => {
    navigation.navigate("profile");
  };

  useEffect(() => {
    ServerCall1();
  }, []);

  const ServerCall1 = () => {
    fetch(
      "https://petstore.swagger.io/v2/pet/findByStatus?status=available,pending,sold"
    )
      .then((res) => res.json())
      .then((resjson) => {
        setInventoryData(resjson);
        setFilt(resjson);

        console.log(resjson);
      });
  };

  const Search = () => {
    setTextInputVisible(true);
  };

  const MyFlatList = ({ data, searchQuery }) => {
    const filteredData = data.filter(
      (item) => item.name && item.name.includes(searchQuery)
    );

    return (
      <FlatList
        data={filteredData}
        renderItem={({ item }) => (
          <Item title={item.name} status={item.status} item={item} />
        )}
        keyExtractor={(item) => Math.random()}
      />
    );
  };

  const Item = ({ title, status, item }) => (
    <View style={{ margin: 20, backgroundColor: "#90EE90" }}>
      <Text>{title}</Text>
      <Text>{status}</Text>

      <Button title="Add to cart " onPress={() => addcartitem(item)}></Button>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          backgroundColor: "lightblue",
          padding: 30,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity onPress={() => Search()}>
          <AntDesign
            name="search1"
            size={30}
            color="white"
            style={{ marginLeft: 20 }}
          ></AntDesign>
        </TouchableOpacity>
        {textInputVisible && (
          <TextInput
            style={styles.searchBar}
            onChangeText={(text) => setSearchText(text)}
            value={searchText}
            placeholder="Search..."
          />
        )}
        <TouchableOpacity onPress={toggleModal}>
          <AntDesign
            name="filter"
            size={30}
            color="white"
            style={{ marginLeft: 20 }}
          ></AntDesign>
        </TouchableOpacity>
        <Modal visible={modalVisible} animationType="slide">
          <TouchableOpacity onPress={() => handleOptionPresssold("available")}>
            <Text>avaliable</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleOptionPresssold("sold")}>
            <Text>sold</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleOptionPresssold("pending")}>
            <Text>pending</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Text>Cancel</Text>
          </TouchableOpacity>
        </Modal>
      </View>
      {isLoading ? (
        <View style={styles.activityIndicator}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : null}
      <MyFlatList data={inventoryData} searchQuery={searchText} />
      <View
        style={{
          backgroundColor: "lightblue",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity>
          <AntDesign
            name="home"
            size={30}
            color="white"
            style={{ marginLeft: 20 }}
          ></AntDesign>
        </TouchableOpacity>

        <TouchableOpacity onPress={Cart}>
          <AntDesign
            name="shoppingcart"
            size={30}
            color="white"
            style={{ marginLeft: 20 }}
          ></AntDesign>
          {array.length > 0 && (
            <View style={styles.cartCount}>
              <Text style={styles.cartCountText}>{array.length}</Text>
            </View>
          )}
        </TouchableOpacity>

        <TouchableOpacity onPress={profile}>
          <AntDesign
            name="profile"
            size={30}
            color="white"
            style={{ marginLeft: 20 }}
          ></AntDesign>
        </TouchableOpacity>
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
  cartCount: {
    position: "absolute",
    top: -10,
    right: -10,
    backgroundColor: "red",
    borderRadius: 10,
    width: 20,
    height: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  cartCountText: {
    color: "white",
    fontWeight: "bold",
  },
});
