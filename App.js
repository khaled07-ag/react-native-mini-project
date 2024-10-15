import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import Home from "./screens/home";
import ItemDetails from "./screens/ItemDetails";
import { NavigationContainer } from "@react-navigation/native";
import ProductNavigation from "./navigation/ProductNavigation";
export default function App() {
  const queryClient = new QueryClient();
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        {/* <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}> */}
          <ProductNavigation />
        {/* </SafeAreaView>
      </SafeAreaProvider> */}
    </QueryClientProvider>
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
