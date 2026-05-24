import React from "react";
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ReplyIcon from "@mui/icons-material/Reply";
import Slideprodect from "../components/prodect/Slideprodect";
import Prodectpageloding from "./Prodectpageloding";
import Sliderloding from "../components/prodect/Sliderloding";
import { Cartcontext } from "../context/Cartcontext";
import "./prodectpage.css";

function Prodectpage({ handleClick }) {
  const { Cartitem, addcart } = useContext(Cartcontext);
  let Isincart = "";

  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [Image, setImage] = useState("");
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetch(`https://dummyjson.com/products/${id}`, { signal })
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setImage(data.thumbnail);
      })
      .catch((error) =>
        console.error("Error fetching product details:", error),
      );
    return () => controller.abort();
  }, [id]);
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    console.log(product?.category);
    fetch(`https://dummyjson.com/products/category/${product?.category}`, {
      signal,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setRelatedProducts(data);
      })
      .catch((error) =>
        console.error("Error fetching related products:", error),
      );
    return () => {
      controller.abort();
    };
  }, [product]);
  if (product) {
    if (Cartitem) {
      Isincart = Cartitem.some((i) => i.id === product.id);
    }
  }
  return (
    <>
      {product ? (
        <div className="prodect-page" style={{ width: "90%", margin: "auto" }}>
          <div className="container">
            <div className="image-item">
              <div className="big-image">
                <img src={Image} alt={product.title} />
              </div>
              <div className="samll-images">
                {product.images.map((image, index) => (
                  <img
                    key={index}
                    onClick={() => {
                      setImage(image);
                    }}
                    src={image}
                    alt={`${product.title} ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            <div className="details">
              <h1 className="name">{product.title}</h1>

              <p className="price">Price: ${product.price.toFixed(2)}</p>
              <p className="description">{product.description}</p>
              <p className="rating">Rating: {product.rating}</p>
              <p className="stock">Stock: {product.stock}</p>
              <p className="brand">Brand: {product.brand}</p>
              <p className="category">Category: {product.category}</p>
              <div className="icons">
                <span className="icon">
                  <FavoriteBorderIcon />
                </span>
                <span
                  className={Isincart ? "icon isincart" : "icon"}
                  onClick={() => {
                    handleClick();
                    addcart(product);
                  }}
                >
                  <AddShoppingCartIcon />
                </span>
                <span className="icon">
                  <ReplyIcon />
                </span>
              </div>
            </div>
          </div>

          {relatedProducts ? (
            <div className="slide category">
              <Slideprodect
                handleClick={handleClick}
                category={product.category}
                products={relatedProducts}
              />
            </div>
          ) : (
            <Sliderloding />
          )}
        </div>
      ) : (
        <Prodectpageloding />
      )}
    </>
  );
}

export default Prodectpage;
