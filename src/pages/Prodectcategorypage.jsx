import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Prodect from "../components/prodect/Prodect";
function Prodectcategorypage({ handleClick }) {
  const { category } = useParams();
  const [prodects, setprodects] = useState([]);
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetch(`https://dummyjson.com/products/category/${category}`, { signal })
      .then((res) => res.json())
      .then((data) => {
        setprodects(data.products);
      })
      .catch((error) =>
        console.error("Error fetching product details:", error),
      );
    return () => controller.abort();
  }, [category]);
  return (
    <>
      <div
        className="container"
        style={{
          display: "flex",
          gap: "20px",
          width: "88%",
          padding: "20px",
          flexWrap: "wrap",
          marginTop: "20px",
        }}
      >
        {prodects.length > 0 ? (
          prodects.map((i) => <Prodect product={i} handleClick={handleClick} />)
        ) : (
          <h1 style={{ textAlign: "center", marginTop: "auto" }}>
            loding pagded
          </h1>
        )}
      </div>
    </>
  );
}

export default Prodectcategorypage;
