type ProductsSizes = {
  p: Array<boolean | number>,
  m: Array<boolean | number>,
  eg: Array<boolean | number>,
  g: Array<boolean | number>,
  gg: Array<boolean | number>
};

export type Product = {
  id: number,
  category_id: number,
  category_name: string,
  sub_category?: string,
  brand?: string,
  gender: boolean,
  name: string,
  description: string,
  price: number,
  promo: number,
  thumb_url: string,
  images_url?: string,
  sizes: string
}

export type ProductsList = Product[];