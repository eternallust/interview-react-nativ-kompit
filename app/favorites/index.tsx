import React, { useState } from "react";
import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";

import PokemonList from "@/src/components/PokemonList";
import Header from "@/src/components/Header";
import { styles } from "./styles";
import { PokemonSummaryType } from "@/src/Types/PokemonType";

export default function Home() {
  const pokemonList: PokemonSummaryType[] = [{ name: "test", url: "test" }];

  return (
    <LinearGradient
      colors={["#4c669f", "#3b5998", "#192f6a"]}
      style={styles.linearGradient}
    >
      <SafeAreaView style={styles.safeAreaView}>
        <Header />
        <View style={styles.contentContainer}>
          <PokemonList pokemonList={pokemonList} />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}
