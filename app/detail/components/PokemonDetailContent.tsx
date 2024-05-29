import React from "react";
import { View, Text } from "react-native";
import { styles } from "../styles";
import { PokemonDetailType } from "@/src/Types/PokemonType"; // Perbaikan casing untuk konsistensi
import { POKEMON_TYPE_COLORS } from "@/src/constants/Colors";
import SpriteCard from "@/src/components/SpriteCard";
import AbilityBadge from "@/src/components/AbilityBadge";
interface Props {
  data: PokemonDetailType | undefined;
  id: number | string;
}

const PokemonDetailContent = ({ data, id }: Props) => {
  const spritesDataUrls = [
    data?.sprites.back_default,
    data?.sprites.back_shiny,
    data?.sprites.front_default,
    data?.sprites.front_shiny,
  ];

  return (
    <View style={styles.detailsContainer}>
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
  );
};

export default PokemonDetailContent;
