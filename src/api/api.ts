import { makeApi, Zodios } from "@zodios/core";
import axiosInstance from "../utils/axiosInstance";
import { pokemonDetailSchema } from "./zodSchemas";
import { z } from "zod";

const zodApi = makeApi([
  {
    method: "get",
    path: ":url",
    alias: "getPokemonList",
    response: z.any(),
  },
  {
    method: "get",
    path: "pokemon/:id",
    alias: "getPokemonDetail",
    response: pokemonDetailSchema,
  },
]);

const api = new Zodios(zodApi, {
  axiosInstance,
});

export default api;
