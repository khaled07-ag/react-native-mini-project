import { StyleSheet, Text, View, ScrollView,TouchableOpacity } from "react-native";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllCategories, getCategoryById } from "../api/category";
const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#FF';
    for (let i = 0; i < 4; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  
   
const CotegoryList = () => {
  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: getAllCategories,
  });
  
  return (
    <ScrollView horizontal={true}>
      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        {categories?.map((category) => {
  const randomColor = getRandomColor()

          return (
            <TouchableOpacity
              key={category._id}
              style={{
                padding: 10,
                backgroundColor: randomColor+20,
                margin: 5,
                borderRadius: 30,
                width: 100,
                height: 50,
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 1,
                borderColor: 'gray',
              }}
            >
              <Text style={{ color: randomColor }}>{category.name} </Text>
                </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default CotegoryList;

const styles = StyleSheet.create({});
