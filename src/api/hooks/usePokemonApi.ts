import { useQuery } from "@tanstack/react-query";
import api from "../api";
import axios from "axios";

// Hook untuk mendapatkan daftar pengguna\

export const usePokemonApi = () => {
  const getPokemonList = async (offset: number | string) => {
    const response = await api.getPokemonList({
      params: { offset },
    });

    const urlPokemonDetail = response.results.map((pokemon: any) =>
      axios.get(pokemon.url)
    );
    const pokemonDetails = await Promise.all(urlPokemonDetail);
    const pokemonTypes = pokemonDetails.map(
      (detail) => detail.data.types[0].type.name
    );
    return { response, pokemonTypes };
  };

  const getPokemonDetail = async (id: number | string) => {
    const response = await api.getPokemonDetail({
      params: { id },
    });
    return response;
  };
  return { getPokemonList, getPokemonDetail };
};
