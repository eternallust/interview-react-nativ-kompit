import React from "react";
import { Text, Image, View, TextInput, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { SafeAreaView } from "react-native-safe-area-context";
import { useInfiniteQuery } from "@tanstack/react-query";
import { usePokemonApi } from "@/src/api/hooks/usePokemonApi";

export default function Home() {
  const { getPokemonList } = usePokemonApi();
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["pokemonList"],
    queryFn: () => getPokemonList(0),
    initialPageParam: 0,
    getNextPageParam: () => null,
  });

  console.log("halah hilih data", data);

  return (
    <LinearGradient
      colors={["#4c669f", "#3b5998", "#192f6a"]}
      style={{ flex: 1 }}
    >
      <SafeAreaView>
        <View
          style={{
            paddingTop: 12,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../../src/assets/images/pokemon-log.png")}
            resizeMode="cover"
            style={{ width: 100, height: 50 }}
          />
        </View>
        <View style={{ paddingHorizontal: 20 }}>
          <View
            style={{ paddingVertical: 20, flexDirection: "row", width: "100%" }}
          >
            <TextInput
              placeholder="Masukkan teks di sini..."
              placeholderTextColor="#999"
              style={{
                flex: 1,
                height: 40,
                borderColor: "gray",
                borderWidth: 1,
                backgroundColor: "white",
                borderRadius: 10,
                paddingHorizontal: 10,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.1,
                shadowRadius: 2,
                elevation: 2,
              }}
            />
            <TouchableOpacity
              style={{
                backgroundColor: "#FFA800",
                padding: 10,
                borderRadius: 5,
              }}
              onPress={() => console.log("Button pressed")}
            >
              <Text style={{ color: "white" }}>Kirim</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{ height: 120, width: 120, backgroundColor: "#FFA800" }}
          />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}
