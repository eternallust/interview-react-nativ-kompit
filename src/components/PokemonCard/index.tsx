import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { PokemonSummaryType } from "@/src/Types/PokemonType";
import { useRouter } from "expo-router";

interface Props {
  item: PokemonSummaryType;
  index: number;
  backgroundColor: string;
}

const PokemonCard = ({ item, index, backgroundColor }: Props) => {
  const router = useRouter();
  return (
    <TouchableOpacity
      onPress={() => router.push(`/detail/${index + 1}`)}
      style={[styles.card, { backgroundColor: backgroundColor }]}
    >
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${
              index + 1
            }.png`,
          }}
          style={styles.image}
        />
      </View>
      <Text style={styles.indexText}>{`#${index + 1}`}</Text>
      <Text style={styles.nameText}>{item.name}</Text>
    </TouchableOpacity>
  );
};

export default PokemonCard;
