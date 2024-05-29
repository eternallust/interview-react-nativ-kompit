import React from "react";
import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";

import PokemonList from "@/src/components/PokemonList";
import Header from "@/src/components/Header";
import { styles } from "./styles";
import { storage } from "@/src/utils/storage";

export default function Home() {
  const pokemonList = JSON.parse(storage.getString("favorites") || "[]");

  return (
    <LinearGradient
      colors={["#4c669f", "#3b5998", "#192f6a"]}
      style={styles.linearGradient}
    >
      <SafeAreaView style={styles.safeAreaView}>
        <Header />

        <View style={styles.contentContainer}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              color: "white",
              marginBottom: 12,
            }}
          >
            My Favorite Pokemons
          </Text>
          <PokemonList pokemonList={pokemonList} />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}
