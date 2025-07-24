import { $authHost, $host } from "./index";
import { jwtDecode } from "jwt-decode";

export const createType = async (type) => {
  const { data } = await $authHost.post("api/type", type);
  return data;
};

export const fetchTypes = async () => {
  const { data } = await $host.get("api/type");
  return data;
};

export const createBrand = async (brand) => {
  const { data } = await $authHost.post("api/brand", brand);
  return data;
};

export const fetchBrands = async () => {
  const { data } = await $host.get("api/brand");
  return data;
};

export const createCloth = async (cloth) => {
  const { data } = await $authHost.post("api/cloth", cloth);
  return data;
};

export const fetchClothes = async (typeId, brandId, page, limit) => {
  const { data } = await $host.get("api/cloth", {
    params: {
      typeId,
      brandId,
      page,
      limit,
    },
  });
  return data;
};

export const fetchOneCloth = async (id) => {
  const { data } = await $host.get("api/cloth/" + id);
  return data;
};

export const fetchRating = async (id) => {
  const { data } = await $host.get("api/rating/" + id);
  return data;
};

export const createBasketItem = async (clothId, size, count) => {
  const authResponse = await $authHost.get("api/user/auth");
  const basketId = authResponse.data.id;

  const { data } = await $authHost.post("api/basket", {
    basketId,
    clothId,
    size,
    count,
  });

  return data;
};

export const fetchBasketItems = async () => {
  const authResponse = await $authHost.get("api/user/auth");
  const basketId = authResponse.data.id;

  const { data } = await $authHost.get(`api/basket?basketId=${basketId}`);

  const transformed = data.map((item) => ({
    id: item.cloth.id,
    cloth: {
      name: item.cloth.name,
      price: item.cloth.price,
      img: item.cloth.img,
    },
    size: item.size,
    count: item.count,
  }));

  return transformed;
};

export const removeBasketItem = async (clothId) => {
  const authResponse = await $authHost.get("api/user/auth");
  const basketId = authResponse.data.id;

  const { data } = await $authHost.post("api/basket/remove", {
    basketId,
    clothId,
  });

  return data;
};

export const updateBasketItemCount = async (clothId, count) => {
  const authResponse = await $authHost.get("api/user/auth");
  const basketId = authResponse.data.id;

  const { data } = await $authHost.post("api/basket/update", {
    basketId,
    clothId,
    count,
  });

  return data;
};
