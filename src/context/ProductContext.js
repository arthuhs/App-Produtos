import { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
      id: "1",
      name: "Headphone Bluetooth Pro",
      description: "Cancelamento de ruído ativo",
      category: "Eletrônicos",
      price: "450,00",
      image:
        "https://whyinfo.com.br/wp-content/uploads/2025/09/15373698166-fone-de-ouvido-edifier-w820nb-bluetooth-5-0-over-ear-cinza-2.png",
    },
  ]);

  const addProduct = (product) => {
    const finalImage =
      product.image ||
      "https://mirandacomputacao.jetassets.com.br/produto/49959-principal.png";
    setProducts([
      ...products,
      { ...product, id: Math.random().toString(), image: finalImage },
    ]);
  };

  return (
    <ProductContext.Provider value={{ products, addProduct }}>
      {children}
    </ProductContext.Provider>
  );
};
