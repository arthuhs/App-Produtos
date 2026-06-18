import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "react-native";

import { ProductProvider } from "./src/context/ProductContext";
import LoginScreen from "./src/screens/LoginScreen";
import ProductListScreen from "./src/screens/ProductListScreen";
import RegisterProductScreen from "./src/screens/RegisterProductScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ProductProvider>
      <StatusBar barStyle="light-content" backgroundColor="#2563EB" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerStyle: { backgroundColor: "#2563EB" },
            headerTintColor: "#fff",
            headerTitleStyle: { fontWeight: "bold" },
          }}
        >
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Produtos"
            component={ProductListScreen}
            options={{ title: "Meus Produtos" }}
          />
          <Stack.Screen
            name="Cadastrar Produto"
            component={RegisterProductScreen}
            options={{ title: "Novo Produto" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ProductProvider>
  );
}
