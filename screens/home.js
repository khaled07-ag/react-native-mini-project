import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import CotegoryList from "../components/CotegoryList";
import { getAllItems } from "../api/items";
import { useQuery } from "@tanstack/react-query";
import { useNavigation } from "@react-navigation/native";
const Home = () => {
  const { data: items } = useQuery({
    queryKey: ["getAllItems"],
    queryFn: () => getAllItems(),
  });
  const navigation = useNavigation();
  return (

    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{
          flexDirection: "row",
          flexalignItems: "flex-start",
          justifyContent: "flex-start",
          padding: 10,
        }}
      >
        <TextInput
          placeholder="Search"
          style={{
            borderWidth: 1,
            borderColor: "black",
            padding: 10,
            margin: 10,
            borderRadius: 10,
            width: "70%",
            height: 35,
          }}
        />
        <TouchableOpacity
          pressRetentionOffset={10}
          style={{
            borderWidth: 1,
            borderColor: "black",
            padding: 10,
            margin: 10,
            borderRadius: 10,
            height: 35,
            width: "20%",
          }}
        >
          <Text style={{ textAlign: "center", color: "black" }}>Filter</Text>
        </TouchableOpacity>
      </View>

      <View  ><CotegoryList /></View>

      <ScrollView style={{ flex: 1}}>
        <View
          style={{
            flex: 2,
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-around",
            gap: 10,
            
            
          }}
        >
            
          {items?.map((item) => (
            <TouchableOpacity
              style={{
                width: 150,
                height: 150,
                gap: 20,
                justifyContent: "center",
                alignItems: "center",
                padding: 20,
                borderRadius: 10,
              }}
              onPress={() => navigation.navigate("Item Details",{
                id:item._id,
                name:item.name,
                price:item.price,
                description:item.description,
                image:"https://react-native-mini-project-items.eapi.joincoded.com/"+item.image,
              })}
            >
              <Image
                source={{ uri: "https://react-native-mini-project-items.eapi.joincoded.com/"+item.image }}
                style={{ width: 100, height: 100, borderRadius: 10,marginBottom:-15 }}
              />
              <Text>{item.name}</Text>
              <Text>{item.price} KD</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
