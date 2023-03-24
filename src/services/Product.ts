import { ProductsList } from "../models/Products"

export class Product {
  public static getAll = async (path: string): Promise<ProductsList> => {
    let products

    try {
      const response = await fetch(`http://localhost:3001${path}`)
      products = await response.json()
    } catch (err) {
      console.error(err)
    } finally {
      return products
    }
  }
}