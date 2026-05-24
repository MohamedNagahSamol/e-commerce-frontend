import { useContext } from "react";
import { Cartcontext } from "../context/Cartcontext";
import "./cartpage.css";
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
function Cartpage() {
  const { Cartitem, increase, decrease, removeprodect } =
    useContext(Cartcontext);
 
  return (
    <>
      <div className="cart-page">
        <div className="order">
          <h1 className="ti">Prodect Order</h1>

          <div className="items">
            {Cartitem.length>0 ? (
              Cartitem.map((item, index) => (
                <div className="item-card" key={index}>
                  <div className="image">
                    <div className="imge-item">
                      <img src={item.thumbnail} alt={item.title} />
                    </div>

                    <div className="context">
                      <h4 className="title">{item.title}</h4>
                      <p className="price">{item.totalpice}</p>
                      <div className="quintity">
                        <button onClick={() => increase(item.id)}>+</button>
                        <span className="quintity-span">{item.quantity}</span>
                        <button onClick={() => decrease(item.id)}>-</button>
                      </div>
                    </div>
                  </div>
                  <Tooltip title="Delete" placement="top">
                    <button
                      className="delete"
                      onClick={() => {
                        removeprodect(item.id);
                      }}
                    >
                      <DeleteIcon />
                    </button>
                  </Tooltip>
                </div>
              ))
            ) : (
              <h3 style={{textAlign:"center"}}>
                NO Prodect In Cart Add Prodect In Card And Order this Prodect
              </h3>
            )}
          </div>

          <div className="tail-page">
            <div className="shope-table">
              <p>Totale:</p>
              <span className="Total-price">
                $
                {!Cartitem
                  ? 0
                  : Cartitem.reduce(
                      (acc, cur) => acc + cur.totalpice,
                      0,
                    ).toFixed(2)}
              </span>
            </div>
            <div className="btn-order">
              <button>Order Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cartpage;
