import { ProductsList } from "../models/Products"
import api from "./api";

export class Product {
  public static getAll = async (path: string): Promise<ProductsList> => {
    let products

    products = await api.get(`${path}`)
    .then((res) => {
      return res.data;
    });

    return products;
  }
}