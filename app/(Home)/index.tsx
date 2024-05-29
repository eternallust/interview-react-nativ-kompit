import React, { useState } from "react";
import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { useInfiniteQuery } from "@tanstack/react-query";

import { usePokemonApi } from "@/src/api/hooks/usePokemonApi";
import SearchBar from "@/src/components/SearchBar";
import PokemonList from "@/src/components/PokemonList";
import Header from "@/src/components/Header";
import { styles } from "./styles";
import {
  PokemonListResponseType,
  PokemonTypesType,
} from "@/src/Types/PokemonType";

export default function Home() {
  const { getPokemonList } = usePokemonApi();
  const [searchPokemon, setSearchPokemon] = useState("");

  const onSubmit = (input: string) => setSearchPokemon(input);

  const { data, hasNextPage, fetchNextPage, isFetchingNextPage, isLoading } =
    useInfiniteQuery({
      queryKey: ["pokemonList"],
      queryFn: ({ pageParam }) => {
        return getPokemonList(pageParam);
      },
      initialPageParam: "pokemon",
      getNextPageParam: ({ response }) => {
        if (searchPokemon) {
          return null;
        }
        return response.next;
      },
    });

  const pokemonTypeList =
    data?.pages.flatMap(
      (page: { pokemonTypes: PokemonTypesType }) => page.pokemonTypes
    ) ?? [];

  const pokemonList =
    data?.pages
      .flatMap(
        (page: { response: PokemonListResponseType }) => page.response.results
      )
      .filter((pokemon) => pokemon.name.includes(searchPokemon)) ?? [];

  return (
    <LinearGradient
      colors={["#4c669f", "#3b5998", "#192f6a"]}
      style={styles.linearGradient}
    >
      <SafeAreaView style={styles.safeAreaView}>
        <Header />

        <View style={styles.contentContainer}>
          <SearchBar onSubmit={onSubmit} reset={() => setSearchPokemon("")} />
          <PokemonList
            pokemonTypeList={pokemonTypeList}
            pokemonList={pokemonList}
            hasNextPage={hasNextPage}
            fetchNextPage={fetchNextPage}
            isFetchingNextPage={isFetchingNextPage}
            isLoading={isLoading}
          />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}
