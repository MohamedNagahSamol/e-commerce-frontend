import Slider from "../components/Slider";
import "./home.css";
import Slideprodect from "../components/prodect/Slideprodect";
import Sliderloding from "../components/prodect/Sliderloding";
import { useState, useEffect } from "react";
const categories = [
  "smartphones",
  "laptops",
  "fragrances",
  "motorcycle",
  "sports-accessories",
  "groceries",
  "home-decoration",
];
function Home({ handleClick }) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const fetchProducts = async () => {
      try {
        const response = await Promise.all(
          categories.map(async (category) => {
            const res = await fetch(
              `https://dummyjson.com/products/category/${category}`,
              { signal },
            );
            const data = await res.json();
            return { [category]: data };
          }),
        );
        const prodectsdata = Object.assign({}, ...response);
        setProducts(prodectsdata);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setIsLoading(false);
      }
      return () => {
        controller.abort();
      };
    };
    fetchProducts();
  }, []);
  return (
    <>
      <Slider />
      {isLoading ? (
        <Sliderloding />
      ) : (
        categories.map((category, index) => (
          <Slideprodect
            key={index}
            slideview={7}
            category={category}
            products={products[category]}
            handleClick={handleClick}
          />
        ))
      )}
    </>
  );
}

export default Home;
