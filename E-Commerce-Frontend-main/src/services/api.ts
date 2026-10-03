import axios from "axios";
import type { ProductsResponse, Product } from "../types";

const api = axios.create({
  baseURL: "https://dummyjson.com",
});

export const getProducts = async (limit = 20, skip = 0): Promise<ProductsResponse> => {
  const { data } = await api.get<ProductsResponse>(`/products`, {
    params: { limit, skip },
  });
  return data;
};

export const getProductById = async (id: string | number): Promise<Product> => {
  const { data } = await api.get<Product>(`/products/${id}`);
  return data;
};

export const getCategories = async (): Promise<string[]> => {
  const { data } = await api.get<string[]>("/products/category-list");
  return data;
};

export const getProductsByCategory = async (
  category: string,
  limit = 20,
  skip = 0
): Promise<ProductsResponse> => {
  const { data } = await api.get<ProductsResponse>(`/products/category/${category}`, {
    params: { limit, skip },
  });
  return data;
};

export const searchProducts = async (query: string): Promise<ProductsResponse> => {
  const { data } = await api.get<ProductsResponse>(`/products/search`, {
    params: { q: query },
  });
  return data;
};
