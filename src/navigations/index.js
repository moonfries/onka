import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, HeaderTitle } from "@react-navigation/stack";

import LoginScreen from "../screens/loginpage/loginpage";
import HomeScreen from "../screens/homepage/homepage";
import SearchScreen from "../screens/searchpage/searchpage";
import ChatScreen from "../screens/chatpage/chatpage";
import FilterScreen from "../screens/filterpage/filterpage";
import ProfileScreen from "../screens/profilepage/profilepage";
import BasketScreen from "../screens/basketscreen/basketscreen";
import StoreScreen from "../screens/storepage/storepage";
import SupplyScreen from "../screens/supplypage/supplypage";
import InboxScreen from "../screens/inboxpage/inboxpage";
import NotificationScreen from "../screens/notificationpage/notificationpage";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
        <Stack.Screen name="Filter" component={FilterScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Basket" component={BasketScreen} />
        <Stack.Screen name="Store" component={StoreScreen} />
        <Stack.Screen name="Supply" component={SupplyScreen} />
        <Stack.Screen name="Inbox" component={InboxScreen} />
        <Stack.Screen name="Notification" component={NotificationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
