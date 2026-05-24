import "./App.css";
import HeaderTop from "./components/HeaderTop";
import HeaderDown from "./components/HeaderDown";
import Home from "./pages/Home";
import { Route, Routes } from "react-router";
import Prodectpage from "./pages/Prodectpage";
import { useState, useEffect } from "react";
import { Cartcontext } from "./context/Cartcontext";
import Cartpage from "./pages/Cartpage.jsx";
import Snack from "./components/Snackbar";
import { Favoritecontext } from "./context/Favoritecontext";
import Favoritepage from "./pages/Favoritepage.jsx";
import Searchpage from "./pages/Searchpage.jsx";
import Prodectcategorypage from "./pages/Prodectcategorypage";
function App() {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [Cartitem, setCartitem] = useState(
    JSON.parse(localStorage.getItem("Cartitem"))
      ? JSON.parse(localStorage.getItem("Cartitem"))
      : [],
  );
  const addcart = (item) => {
    setCartitem((previtem) => {
      const updateprodect = [
        ...previtem,
        { ...item, quantity: 1, totalpice: item.price },
      ];

      return updateprodect;
    });
  };
  useEffect(() => {
    localStorage.setItem("Cartitem", JSON.stringify(Cartitem));
  }, [Cartitem]);

  const removeprodect = (id) => {
    setCartitem((previtem) => {
      const updateprodect = previtem.filter((i) => i.id !== id);
      return updateprodect;
    });
  };
  const increase = (id) => {
    setCartitem((previtem) =>
      previtem.map((i) =>
        i.id === id
          ? {
              ...i,
              quantity: i.quantity + 1,
              totalpice: i.price * (i.quantity + 1),
            }
          : i,
      ),
    );
  };
  const decrease = (id) => {
    setCartitem((previtem) =>
      previtem.map((i) =>
        i.id === id && i.quantity > 1
          ? {
              ...i,
              quantity: i.quantity - 1,
              totalpice: i.price * (i.quantity - 1),
            }
          : i,
      ),
    );
  };
  const [favoriteitem, setFavoriteitem] = useState(
    JSON.parse(localStorage.getItem("Favoriteitem"))
      ? JSON.parse(localStorage.getItem("Favoriteitem"))
      : [],
  );
  const addfavorite = (item) => {
    setFavoriteitem((previtem) => {
      const updateprodect = [...previtem, item];

      return updateprodect;
    });
  };
  const removiefavorite = (id) => {
    setFavoriteitem((previtem) => {
      const updateprodect = previtem.filter((i) => i.id !== id);
      return updateprodect;
    });
  };
  useEffect(() => {
    localStorage.setItem("Favoriteitem", JSON.stringify(favoriteitem));
  }, [favoriteitem]);
  return (
    <Cartcontext.Provider
      value={{ Cartitem, addcart, increase, decrease, removeprodect }}
    >
      <Favoritecontext.Provider
        value={{ removiefavorite, addfavorite, favoriteitem }}
      >
        <div className="App">
          <header>
            <HeaderTop />
            <HeaderDown />
          </header>
          <Routes>
            <Route path="/" element={<Home handleClick={handleClick} />} />
            <Route
              path="/products/:id"
              element={<Prodectpage handleClick={handleClick} />}
            />
            <Route path="/cart" element={<Cartpage />} />
            <Route path="/favorite" element={<Favoritepage />} />
            <Route
              path="/category/:category"
              element={<Prodectcategorypage handleClick={handleClick} />}
            />
            <Route
              path="/search"
              element={<Searchpage handleClick={handleClick} />}
            />
            <Route path="*" element={<h1>this page is not found</h1>} />
          </Routes>
          <Snack HandleClose={handleClose} Open={open} />
        </div>
      </Favoritecontext.Provider>
    </Cartcontext.Provider>
  );
}

export default App;
