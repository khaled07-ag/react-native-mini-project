import { StyleSheet, Text, View, Image,TouchableOpacity } from "react-native";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getItemById } from "../api/items";

const ItemDetails = ({ route }) => {
  const { id, name, price, description, image } = route.params;
  const { data: item } = useQuery({
    queryKey: ["item"],
    queryFn: () => getItemById(id),
  });
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Image
          source={{ uri: image }}
          style={{ width: "100%", height: "100%" }}
        />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "col",
          alignItems: "center",
          height: "100%",
          width: "100%",
          marginTop: -40,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
          borderRadius: 40,
          borderWidth: 1,
          borderColor: "black",
          padding: 10,
          gap: 10,
          backgroundColor: "white",
        }}
      >
        <View style={{ flexDirection: "col",alignItems:"center" ,flex:2,gap:30}}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>{name}</Text>
          
     

        <Text style={{ fontSize: 16, fontWeight: "300" }}>{description}</Text>
        <Text style={{ fontSize: 16, fontWeight: "300" }}>{price} KD</Text>
        </View>
        
        <TouchableOpacity
          style={{
            flexDirection: "row",
            backgroundColor: "blue",
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
            borderWidth: 1,
            borderColor: "black",
            borderRadius: 10,
            
          }}
        >
          <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
            Add to Cart
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ItemDetails;

const styles = StyleSheet.create({});
