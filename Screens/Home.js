import * as React from "react";
import {
  Text,
  View,
  Button,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { COLORS } from "../constants";
import { Entypo, AntDesign } from "react-native-vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home({ navigation }) {
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
        <View style={{ 
            padding: 16,
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-between'
            }}>
          <View 
          style={{
              flexDirection:'row',
              alignItems:'center'
              }}>
            <Text
              style={{
                fontSize: 18,
                color: COLORS.black,
                fontWeight: "500",
                letterSpacing: 1,
                paddingRight:6
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
              fontSize:14,
              color:COLORS.blue,
              fontWeight:'400',
          }}
          >
              SeeAll
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
