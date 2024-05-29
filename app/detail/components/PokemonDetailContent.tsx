import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../styles";
import { PokemonDetailType } from "@/src/Types/PokemonType";
import { POKEMON_TYPE_COLORS } from "@/src/constants/Colors";
import SpriteCard from "@/src/components/SpriteCard";
import AbilityBadge from "@/src/components/AbilityBadge";
import { useRouter } from "expo-router";

interface Props {
  data: PokemonDetailType | undefined;
}

const PokemonDetailContent = ({ data }: Props) => {
  const router = useRouter();
  const spritesDataUrls = [
    data?.sprites.back_default,
    data?.sprites.back_shiny,
    data?.sprites.front_default,
    data?.sprites.front_shiny,
  ];

  return (
    <View style={styles.detailsContainer}>
      <View>
        <Text style={styles.sectionTitle}>Sprite</Text>
        <View style={styles.spriteContainer}>
          {spritesDataUrls.map((sprite, index) => (
            <SpriteCard uri={String(sprite)} key={index} />
          ))}
        </View>
        <Text style={styles.sectionTitle}>Abilities</Text>
        <View style={styles.abilitiesContainer}>
          {data?.abilities.map((ability, index) => (
            <AbilityBadge
              key={index}
              abilityName={ability.ability.name}
              backgroundColor={
                POKEMON_TYPE_COLORS[String(data?.types[0].type.name)]
              }
            />
          ))}
        </View>
      </View>
      <View style={{ flex: 1, position: "relative" }}>
        <TouchableOpacity
          onPress={() => router.push("/favorites")}
          style={[
            styles.favoriteButton,
            {
              backgroundColor:
                POKEMON_TYPE_COLORS[String(data?.types[0].type.name)],
            },
          ]}
        >
          <Text style={styles.favoriteButtonText}>+ Favorite</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PokemonDetailContent;
