import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../styles";
import { PokemonDetailType } from "@/src/Types/PokemonType";
import { POKEMON_TYPE_COLORS } from "@/src/constants/Colors";
import SpriteCard from "@/src/components/SpriteCard";
import AbilityBadge from "@/src/components/AbilityBadge";
import { storage } from "@/src/utils/storage";
import { alreadyFavorite } from "@/src/utils/utils";

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

  const [isFavorite, setIsFavorite] = useState(alreadyFavorite(id));

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
      <View>
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
      </View>
    </View>
  );
};

export default PokemonDetailContent;
