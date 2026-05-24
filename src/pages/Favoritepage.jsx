import { useContext } from "react";
import { Favoritecontext } from "../context/Favoritecontext";
import "./cartpage.css";
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
function Favoritepage() {
  const { favoriteitem, removiefavorite } = useContext(Favoritecontext);
  return (
    <>
      <div className="cart-page">
        <div className="order">
          <h1 className="ti">Favorite</h1>

          <div className="favorats">
            {favoriteitem.length > 0 ? (
              favoriteitem.map((item, index) => (
                <div style={{height:"34%"}} className="item-card" key={index}>
                  <div className="image">
                    <div className="imge-item">
                      <img src={item.thumbnail} alt={item.title} />
                    </div>

                    <div className="context">
                      <h4 className="title">{item.title}</h4>
                      <p className="price">{item.price}</p>
                    </div>
                  </div>
                  <Tooltip title="Delete" placement="top">
                    <button
                      className="delete"
                      onClick={() => {
                        removiefavorite(item.id);
                      }}
                    >
                      <DeleteIcon />
                    </button>
                  </Tooltip>
                </div>
              ))
            ) : (
              <h3 style={{textAlign:"center"}}>NO Prodect In favorite Add Prodect In Favorite</h3>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Favoritepage;
