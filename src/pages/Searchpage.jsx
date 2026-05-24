import { useEffect, useState } from "react";
import Prodect from "../components/prodect/Prodect";
import { useSearchParams } from "react-router-dom";
function Searchpage({handleClick}) {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("search") || "";
  const [data, setdata] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetch(`https://dummyjson.com/products/search?q=${query}`, { signal })
      .then((res) => res.json())
      .then((data) => {
        setdata(data.products);
      })
      .catch((error) =>
        console.error("Error fetching product details:", error),
      );
    return () => controller.abort();
  }, [query]);
  console.log(data);
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
        {data.length > 0 ? (
            data.map((i) => <Prodect product={i} handleClick={handleClick} />)
        ) : (
          <h1 style={{ textAlign: "center" }}>no prodect match your search</h1>
        )}
      </div>
    </>
  );
}

export default Searchpage;
