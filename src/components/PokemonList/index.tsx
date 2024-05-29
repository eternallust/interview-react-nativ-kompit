import { POKEMON_TYPE_COLORS } from "@/src/constants/Colors";
import React from "react";
import { ActivityIndicator, FlatList } from "react-native";

import PokemonCard from "../PokemonCard";
import { styles } from "./styles";
import { PokemonSummaryType, PokemonTypesType } from "@/src/Types/PokemonType";

interface Props {
  pokemonList: PokemonSummaryType[];
  pokemonType?: string;
  pokemonTypeList?: PokemonTypesType;
  hasNextPage?: boolean;
  fetchNextPage?: () => void;
  isLoading?: boolean;
  isFetchingNextPage?: boolean;
  id?: string | number;
}

const PokemonList = ({
  pokemonList,
  pokemonTypeList,
  hasNextPage,
  fetchNextPage,
  isLoading,
  isFetchingNextPage,
}: Props) => {
  return (
    <>
      {isLoading ? (
        <ActivityIndicator
          size="large"
          color="#FFA800"
          style={styles.centerContent}
        />
      ) : (
        <FlatList
          style={{
            flex: 1,
            paddingBottom: 20,
          }}
          data={pokemonList}
          renderItem={({ item, index }: any) => (
            <PokemonCard
              item={item}
              id={item.id ?? index + 1}
              backgroundColor={
                POKEMON_TYPE_COLORS[
                  String(item.type ?? pokemonTypeList?.[index])
                ]
              }
            />
          )}
          keyExtractor={(_, index) => index.toString()}
          onEndReached={() => {
            if (hasNextPage && fetchNextPage) {
              fetchNextPage();
            }
          }}
          onEndReachedThreshold={0.5}
          numColumns={2}
          ListFooterComponent={() =>
            isFetchingNextPage ? (
              <ActivityIndicator
                size="large"
                color="#FFA800"
                style={styles.footerPadding}
              />
            ) : null
          }
        />
      )}
    </>
  );
};

export default PokemonList;
