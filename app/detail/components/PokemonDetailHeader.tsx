import React from "react";
import { View, Image, Text, Dimensions } from "react-native";
import { styles } from "../styles";
import Header from "@/src/components/Header";
import { PokemonDetailType } from "@/src/Types/PokemonType"; // Perbaikan casing untuk menghindari masalah lint
import { useRouter } from "expo-router";

interface Props {
  data: PokemonDetailType | undefined;
  id: number | string | undefined;
}

const PokemonDetailHeader = ({ data, id }: Props) => {
  const { width } = Dimensions.get("window");
  const router = useRouter();
  return (
    <View style={styles.headerContainer}>
      <Header goBack={() => router.push("/(Home)")} />
      <View style={styles.headerContent}>
        <View>
          <Text style={styles.pokemonName}>{data?.name}</Text>
          <View style={styles.typeContainer}>
            {data?.types.map((type, index) => (
              <View key={index} style={styles.typeBadge}>
                <Text style={styles.typeText}>{type.type.name}</Text>
              </View>
            ))}
          </View>
        </View>
        <Text style={styles.pokemonId}>#{id}</Text>
      </View>

      <Image
        source={{
          uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`,
        }}
        style={[
          styles.pokemonImage,
          {
            left: "50%",
            transform: [{ translateX: -(width / 3) }],
          },
        ]}
      />
    </View>
  );
};

export default PokemonDetailHeader;
