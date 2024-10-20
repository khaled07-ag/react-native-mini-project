import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useState, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import Home from "./screens/home";
import ItemDetails from "./screens/ItemDetails";
import { NavigationContainer } from "@react-navigation/native";
import ProductNavigation from "./navigation/ProductNavigation/ProductNavigation";
import AuthNavigation from "./navigation/AuthNavigation/AuthNavigation";
import MainNavigation from "./navigation/MainNavigation/MainNavigation";
import UserContext from "./context/UserContext";
import { getToken } from "./api/storage";
export default function App() {
  const queryClient = new QueryClient();
  const [user, setUser] = useState(false);
  const checkToken = async()=>{
    const token = await getToken()
    if(token){
      setUser(true)
    }
  };
  useEffect(() => {
    checkToken()
  }, []);

  return (
    <NavigationContainer>
      <UserContext.Provider value={{ user, setUser }}>
        <QueryClientProvider client={queryClient}>
          {/* <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}> */}
          {/* <ProductNavigation /> */}
          {user ? <MainNavigation /> : <AuthNavigation />}
          {/* </SafeAreaView>
      </SafeAreaProvider> */}
        </QueryClientProvider>
      </UserContext.Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
