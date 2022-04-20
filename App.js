import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CartProvider } from "./contexts/CartContext";
import { OrderProvider } from "./contexts/OrderHistoryContext";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Tabs from "./navigation/tabs";
import MyCart from "./Screens/MyCart";
import ProductInfo from "./Screens/ProductInfo";
import SeeAll from "./Screens/SeeAll";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <CartProvider>
      <OrderProvider>
        <SafeAreaProvider>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
              }}
              initialRouteName={"Home"}
            >
              <Stack.Screen name="Home" component={Tabs} />
              <Stack.Screen name="MyCart" component={MyCart} />
              <Stack.Screen name="ProductInfo" component={ProductInfo} />
              <Stack.Screen name="SeeAll" component={SeeAll} />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      </OrderProvider>
    </CartProvider>
  );
}
