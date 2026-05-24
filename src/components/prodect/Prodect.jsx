import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ReplyIcon from "@mui/icons-material/Reply";
import { Link } from "react-router";
import "./prodect.css";
import { useContext } from "react";
import { Cartcontext } from "../../context/Cartcontext";
import { Favoritecontext } from "../../context/Favoritecontext";
import CheckIcon from "@mui/icons-material/Check";

function Prodect({ product, handleClick }) {
  const { Cartitem, addcart } = useContext(Cartcontext);
  const { favoriteitem, addfavorite } = useContext(Favoritecontext);

  let Isincart = "";
  if (Cartitem) {
    Isincart = Cartitem.some((i) => i.id === product.id);
  } else {
    Isincart = false;
  }
  let Isinfavorite = "";
  if (favoriteitem) {
    Isinfavorite = favoriteitem.some((i) => i.id === product.id);
  } else {
    Isinfavorite = false;
  }

  return (
    <>
      <div className="prodect">
        <Link to={`/products/${product.id}`}>
          {Isincart ? (
            <span className="span-cart">
              <CheckIcon className="true" /> In Cart
            </span>
          ) : (
            ""
          )}
          <div className="img-prodect">
            <img src={product.thumbnail} alt={product.title} />
          </div>
          <p className="name-prodect">{product.title}</p>
          <div className="stars"></div>
          <p className="price-prodect">${product.price.toFixed(2)}</p>
        </Link>
        <div className="icons">
          <span
          
            className={Isinfavorite ? "icon Isinfavorite" : "icon"}
            onClick={() => {
              handleClick();
              addfavorite(product);
            }}
          >
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
    </>
  );
}

export default Prodect;
