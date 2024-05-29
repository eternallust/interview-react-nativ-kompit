import api from "../api";
import axios from "axios";
import {
  PokemonDetailType,
  PokemonListResponseType,
  PokemonTypesType,
} from "@/src/Types/PokemonType";

// Hook untuk mendapatkan daftar pengguna\

export const usePokemonApi = () => {
  const getPokemonList = async (url: string) => {
    const response: PokemonListResponseType = await api.getPokemonList({
      params: { url },
    });

    const urlPokemonDetail = response.results.map((pokemon: any) =>
      axios.get(pokemon.url)
    );
    const pokemonDetails: { data: PokemonDetailType }[] = await Promise.all(
      urlPokemonDetail
    );
    const pokemonTypes: PokemonTypesType = pokemonDetails.map(
      (detail) => detail.data.types[0].type.name
    );
    return { response, pokemonTypes };
  };

  const getPokemonDetail = async (id: number | string) => {
    const response: PokemonDetailType = await api.getPokemonDetail({
      params: { id },
    });
    return response;
  };
  return { getPokemonList, getPokemonDetail };
};
