import React from "react";
import { View, Image, Touchable } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Screens/Home";
import { Ionicons, FontAwesome, Entypo, Feather } from "react-native-vector-icons";

const Tab = createBottomTabNavigator();
export default function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: (tabInfo) => {
            return (
              <Ionicons
                name="md-home"
                size={24}
                color={tabInfo.focused ? "#006600" : "#8e8e93"}
              />
            );
          },
        }}
      />

      <Tab.Screen
      name="Đơn hàng"
        component={Home}
        options={{
          tabBarIcon: (tabInfo) => {
            return (
              <Entypo
                name="text-document"
                size={24}
                color={tabInfo.focused ? "#006600" : "#8e8e93"}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="Like"
        component={Home}
        options={{
          tabBarIcon: (tabInfo) => {
            return (
              <Ionicons
                name="heart"
                size={24}
                color={tabInfo.focused ? "#006600" : "#8e8e93"}
              />
            );
          },
        }}
      />

<Tab.Screen
      name="Thông báo"
        component={Home}
        options={{
          tabBarIcon: (tabInfo) => {
            return (
              <Feather
                name="bell"
                size={24}
                color={tabInfo.focused ? "#006600" : "#8e8e93"}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="Tôi"
        component={Home}
        options={{
          tabBarIcon: (tabInfo) => {
            return (
              <FontAwesome
                name="user"
                size={24}
                color={tabInfo.focused ? "#006600" : "#8e8e93"}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
