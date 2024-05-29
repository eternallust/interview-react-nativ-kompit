import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams } from "expo-router";
import {
  ActivityIndicator,
  Image,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { usePokemonApi } from "@/src/api/hooks/usePokemonApi";
import { useQuery } from "@tanstack/react-query";
import { POKEMON_TYPE_COLORS } from "@/src/constants/Colors";
import PokemonDetailHeader from "./components/PokemonDetailHeader";
import PokemonDetailContent from "./components/PokemonDetailContent";
import { storage } from "@/src/utils/storage";
import { alreadyFavorite } from "@/src/utils/utils";
import { useState } from "react";

export default function Detail() {
  const { id } = useLocalSearchParams();
  const { getPokemonDetail } = usePokemonApi();

  const { data, isLoading, error } = useQuery({
    queryKey: ["pokemonDetail", id],
    queryFn: () => getPokemonDetail(id as string),
  });

  const [isFavorite, setIsFavorite] = useState(alreadyFavorite(String(id)));

  function deleteFavorite() {
    const favorites: string | undefined =
      storage.getString("favorites") || "[]";
    const newFavorites = JSON.parse(favorites).filter(
      (item: any) => item.id !== id
    );
    storage.set("favorites", JSON.stringify(newFavorites));
  }

  function addFavorite() {
    const favorites: string | undefined =
      storage.getString("favorites") || "[]";
    const newFavorites = [
      ...JSON.parse(favorites),
      { name: data?.name, id, type: data?.types[0].type.name },
    ];
    storage.set("favorites", JSON.stringify(newFavorites));
  }

  function handleFavorite() {
    if (isFavorite) {
      deleteFavorite();
    } else {
      addFavorite();
    }
    setIsFavorite(!isFavorite);
  }

  return (
    <LinearGradient
      colors={["#4c669f", "#3b5998", "#192f6a"]}
      style={styles.linearGradient}
    >
      <SafeAreaView
        style={[
          styles.safeAreaView,
          {
            backgroundColor:
              POKEMON_TYPE_COLORS[String(data?.types[0].type.name)] ||
              "transparent",
          },
        ]}
      >
        {isLoading ? (
          <View style={styles.loadingContainer}>
            <Image
              source={require("../../src/assets/images/pokemon-log.png")}
              resizeMode="cover"
              style={styles.logo}
            />
            <ActivityIndicator size="large" color="#FFA800" />
          </View>
        ) : (
          <>
            <PokemonDetailHeader data={data} id={String(id)} />
            <PokemonDetailContent data={data} id={String(id)} />
            <TouchableOpacity
              onPress={handleFavorite}
              style={[
                styles.favoriteButton,
                {
                  backgroundColor: isFavorite
                    ? "#FFA800"
                    : POKEMON_TYPE_COLORS[String(data?.types[0].type.name)],
                },
              ]}
            >
              <Text style={styles.favoriteButtonText}>
                {isFavorite ? "Already Favorite" : "+ Favorite This Pokemon"}
              </Text>
            </TouchableOpacity>
          </>
        )}
      </SafeAreaView>
    </LinearGradient>
  );
}
