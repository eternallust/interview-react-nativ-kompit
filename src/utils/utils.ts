import { storage } from "./storage";

export const alreadyFavorite = (id: number | string) => {
  const favorites = JSON.parse(storage.getString("favorites") || "[]");
  return favorites.some((item: any) => Number(item.id) === Number(id));
};

export const getIdFromUrl = (url: string) => {
  const match = url.match(/\/(\d+)\//);
  const id = match ? match[1] : null;
  return id;
};
