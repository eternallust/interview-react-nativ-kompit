import { makeApi, Zodios } from "@zodios/core";
import axiosInstance from "../utils/axiosInstance";
import { pokemonDetailSchema, pokemonSchema } from "./zodSchemas";

const zodApi = makeApi([
  {
    method: "get",
    path: "pokemon?offset=:offset&limit=10",
    alias: "getPokemonList",
    response: pokemonSchema,
  },
  {
    method: "get",
    path: "pokemon/:id",
    alias: "getPokemonDetail",
    response: pokemonDetailSchema,
  },
]);

const api = new Zodios("https://pokeapi.co/api/v2/", zodApi, {
  axiosInstance,
});

export default api;
