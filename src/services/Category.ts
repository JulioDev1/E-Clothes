import { CategoriesList } from "../models/Categories"
import api from "./api";

export class Category {
  public static getCategories = async (): Promise<CategoriesList> => {
    let categories;
    
    categories = await api.get(`/categories`)
    .then((res) => {
      return res.data;
    });

    return categories;
  }

  public static addCategory = async (category: {[key: string]: string}): Promise<void> => {
    try {
      await api.post("/categories/add_category", category);
    } catch (err) {
      console.error(err)
    }
  }
}