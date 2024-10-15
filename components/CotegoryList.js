import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllCategories, getCategoryById } from "../api/category";
const CotegoryList = () => {
  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: getAllCategories,
  });
  console.log(categories);
  return (
    <ScrollView horizontal={true}>
      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        {categories?.map((category) => {
          return (
            <View
              key={category._id}
              style={{
                padding: 10,
                backgroundColor: "gray",
                margin: 5,
                borderRadius: 10,
                width: 100,
                height: 100,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "black" }}>{category.name} </Text>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default CotegoryList;

const styles = StyleSheet.create({});
