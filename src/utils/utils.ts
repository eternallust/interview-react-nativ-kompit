import { storage } from "./storage";

export const alreadyFavorite = (id: number | string) => {
  const favorites = JSON.parse(storage.getString("favorites") || "[]");
  return favorites.some((item: any) => Number(item.id) === Number(id));
};
