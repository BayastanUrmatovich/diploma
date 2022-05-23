import Header from "../components/Header/Header";
import headerImage from "../assets/products.jpeg";
import ProductList from "../components/ProductList/ProductList";
import { getProducts } from "../data/products";

function Products() {
  return (
    <>
      <Header
        title="now we have!"
        image={headerImage}>
        No matter who you are or what you’re about, we’ve got the swimsuit styles and accessories to keep your summer wardrobe afloat this year. From swim trunks, plus size bathing suits, bikinis, one-pieces, skirted suits, and more, Hot Topic’s got the summer must-have you’re looking for.
      </Header>

      <ProductList products={getProducts()} />
    </>
  );
}

export default Products;