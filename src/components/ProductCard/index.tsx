interface Props {
    id: number;
    category: string;
    gender: string;
    name: string;
    description: string;
    promo: number;
    imgUrl: string;
    sizes: Array<object>;
    price: string;
}

export const ProductCard = ({ id, name, gender, description, price, promo, imgUrl }: Props) => {
    return <div className="product--card" key={id}>
            <h1><a href="">{name}</a></h1>
            <h2>{description}</h2>
            <h2>{price}</h2>
            <button>Adicionar ao Carrinho</button>
        </div>
  };
