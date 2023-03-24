type ProductsSizes = {
  p: Array<boolean | number>,
  m: Array<boolean | number>,
  eg: Array<boolean | number>,
  g: Array<boolean | number>,
  gg: Array<boolean | number>
};

export type Product = {
  id: number,
  category: string,
  gender: 'male' | 'woman',
  name: string,
  description: string,
  price: string,
  promo: number,
  imgUrl: string,
  sizes: ProductsSizes
}

export type ProductsList = Product[];