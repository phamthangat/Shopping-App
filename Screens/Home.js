import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  Button,
  Image,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { COLORS } from "../constants";
import { Entypo, AntDesign, FontAwesome } from "react-native-vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { Items } from "../Database";

export default function Home({ navigation }) {
  const [products, setProducts] = useState([]);
  const [accessory, setAccessory] = useState([]);

  useEffect(() => {
    const unsubcribe = navigation.addListener("focus", () => {
      getDataFromDB();
    });

    return unsubcribe;
  }, [navigation]);

  //get data from DB
  const getDataFromDB = () => {
    let productList = [];
    let accessoryList = [];
    for (let index = 0; index < Items.length; index++) {
      if (Items[index].category === "product") {
        productList.push(Items[index]);
      } else if (Items[index].category === "accessory") {
        accessoryList.push(Items[index]);
      }
    }

    setProducts(productList);
    setAccessory(accessoryList);
  };

  //create an product reusable card

  const ProductCard = ({ data }) => {
    return (
      <TouchableOpacity
      onPress={() => navigation.navigate('ProductInfo',{productID: data.id})}
        style={{
          width: "48%",
          marginVertical: 14,
        }}
      >
        <View
          style={{
            width: "100%",
            height: 100,
            borderRadius: 10,
            backgroundColor: COLORS.backgroundLight,
            position: "relative",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 8,
          }}
        >
          {data.isOff ? (
            <View
              style={{
                position: "absolute",
                width: "20%",
                height: "20%",
                backgroundColor: COLORS.green,
                top: 0,
                left: 0,
                borderTopLeftRadius: 10,
                borderBottomRightRadius: 10,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  color: COLORS.white,
                  fontWeight: "bold",
                  letterSpacing: 1,
                }}
              >
                {data.offPercentage}%
              </Text>
            </View>
          ) : null}
          <Image
            source={data.productImage}
            style={{
              width: "80%",
              height: "80%",
              resizeMode: "contain",
            }}
          />
        </View>
        <Text
          style={{
            fontSize: 12,
            color: COLORS.black,
            fontWeight: "600",
            marginBottom: 2,
          }}
        >
          {data.productName}
        </Text>
        {data.category === "accessory" ? (
          data.isAvailable ? (
            <View>
              <FontAwesome
                name="circle"
                style={{
                  fontSize: 12,
                  marginRight: 6,
                  color: COLORS.green,
                }}
              />
              <Text
                style={{
                  fontSize: 12,
                  color: COLORS.green,
                }}
              >
                Available
              </Text>
            </View>
          ) : (
            <View>
              <FontAwesome
                name="circle"
                style={{
                  fontSize: 12,
                  marginRight: 6,
                  color: COLORS.green,
                }}
              />
              <Text
                style={{
                  fontSize: 12,
                  color: COLORS.red,
                }}
              >
                Unavailable
              </Text>
            </View>
          )
        ) : null}
        <Text>&#8377;{data.productPrice}</Text>
      </TouchableOpacity>
    );
  };

  function renderHeader() {
    return (
      <View style={{ flexDirection: "row", height: 50 }}>
        <TouchableOpacity
          style={{
            width: 50,
            paddingLeft: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Entypo name="location" size={24} color="black" />
        </TouchableOpacity>

        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <View
            style={{
              width: "70%",
              height: "100%",
              backgroundColor: "#EFEFF1",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 30,
            }}
          >
            <Text style={{ fontSize: 15, lineHeight: 22, fontWeight: "bold" }}>
              Thang Pham
            </Text>
          </View>
        </View>

        <TouchableOpacity
          style={{
            width: 50,
            justifyContent: "center",
            alignItems: "center",
            paddingRight: 20,
          }}
          onPress={() => navigation.navigate("MyCart")}
        >
          <AntDesign name="shoppingcart" size={24} color="black" />
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <SafeAreaView
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: COLORS.white,
      }}
    >
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
      {renderHeader()}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ padding: 20 }}>
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>
            Shop & Service
          </Text>
          <Text>Discover and Get Great Product</Text>
        </View>

        {/* products */}
        <View
          style={{
            padding: 16,
          }}
        >
          <View
            style={{
              padding: 16,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  color: COLORS.black,
                  fontWeight: "500",
                  letterSpacing: 1,
                  paddingRight: 6,
                }}
              >
                Products
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: COLORS.black,
                  fontWeight: "400",
                  letterSpacing: 1,
                  opacity: 0.5,
                }}
              >
                50
              </Text>
            </View>
            <Text
              style={{
                fontSize: 14,
                color: COLORS.blue,
                fontWeight: "400",
              }}
            >
              SeeAll
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-around",
            }}
          >
            {products.map((data) => {
              return <ProductCard data={data} key={data.id} />;
            })}
          </View>
        </View>

        {/* accessories */}
        <View
          style={{
            padding: 16,
          }}
        >
          <View
            style={{
              padding: 16,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  color: COLORS.black,
                  fontWeight: "500",
                  letterSpacing: 1,
                  paddingRight: 6,
                }}
              >
                Accessories
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: COLORS.black,
                  fontWeight: "400",
                  letterSpacing: 1,
                  opacity: 0.5,
                }}
              >
                78
              </Text>
            </View>
            <Text
              style={{
                fontSize: 14,
                color: COLORS.blue,
                fontWeight: "400",
              }}
            >
              SeeAll
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-around",
            }}
          >
            {accessory.map((data) => {
              return <ProductCard data={data} key={data.id} />;
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
