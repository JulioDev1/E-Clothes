import { ProductsList, Product as ProductModel } from "../models/Products"
import api from "./api";

export class Product {
  public static getAll = async (path: string): Promise<ProductsList> => {
    const products = await api.get(`${path}`)
    .then((res) => {
      return res.data;
    });

    return products;
  }

  public static get = async (path: string): Promise<ProductModel> => {
    const product = await api.get(`${path}`)
    .then((res) => {
      return res.data;
    });

    return product;
  }
}