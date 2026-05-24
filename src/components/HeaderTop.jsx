import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./header.css";
import { useContext, useState } from "react";
import { Cartcontext } from "../context/Cartcontext";
import { Favoritecontext } from "../context/Favoritecontext";
import { useSearchParams } from "react-router-dom";
export default function HeaderTop() {
  const { Cartitem } = useContext(Cartcontext);
  const { favoriteitem } = useContext(Favoritecontext);
  const [searchParams, setSearchParams] = useSearchParams();
  const handleSearch = (event) => {
    const value = event.target.value;
    if (value) {
      setSearchParams({ search: value }); // Updates URL to ?q=value
    } else {
      setSearchParams({}); // Clears params
    }
  };

  const query = searchParams.get("search") || "";
  const [data, setdata] = useState([]);

  return (
    <>
      <div className="top-header">
        <div className="container">
          <Link to="/" className="logo">
            <img src="/img/logo.png" alt="Logo" />
          </Link>
          <form action="/search" onSubmit={(e)=>{
            e.preventDefault()
          }}  className="search-box">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search..."
              value={query}
              onChange={handleSearch}
            />
            <Link to={`/search?search=${query}`}  data={data}>
            <button type="submit" >
              <SearchIcon className="search_icon" />
            </button>
            </Link>
          </form>

          <div className="header-icons">
            <div className="icon">
              <Link to="/favorite">
                <FavoriteBorderIcon />
                <span className="count">
                  {" "}
                  {favoriteitem ? favoriteitem.length : 0}
                </span>
              </Link>
            </div>
            <div className="icon">
              <Link to="/cart">
                <ShoppingCartIcon />
                <span className="count">{Cartitem ? Cartitem.length : 0}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
