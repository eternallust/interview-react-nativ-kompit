import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { PokemonSummaryType } from "@/src/types/PokemonType";
import { useRouter } from "expo-router";

interface Props {
  item: PokemonSummaryType;
  backgroundColor: string;
  id: string | number;
}

const PokemonCard = ({ item, backgroundColor, id }: Props) => {
  const router = useRouter();
  return (
    <TouchableOpacity
      onPress={() => router.push(`/detail/${id}`)}
      style={[styles.card, { backgroundColor: backgroundColor }]}
    >
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`,
          }}
          style={styles.image}
        />
      </View>
      <Text style={styles.indexText}>{`#${id}`}</Text>
      <Text style={styles.nameText}>{item.name}</Text>
    </TouchableOpacity>
  );
};

export default PokemonCard;
