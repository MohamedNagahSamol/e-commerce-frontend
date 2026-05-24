import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import "./header.css";
const navlinks = [
  { name: " Home", link: "/" },
  { name: " Blog", link: "/blog" },
  { name: " About", link: "/about" },
  { name: " Contact", link: "/contact" },
];
export default function HeaderDown() {
  const location = useLocation();
  const [categories, setCategories] = useState([]);
  const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState("");
  const toggleCategoryMenu = () => {
    if (isCategoryMenuOpen === "") {
      setIsCategoryMenuOpen("show");
    } else {
      setIsCategoryMenuOpen("");
    }
  };
  useEffect(() => {
    // Fetch categories from API and populate the category menu
    const controller = new AbortController();
    const signal = controller.signal;
    fetch("https://dummyjson.com/products/categories", { signal })
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => {
        if (error.name === "AbortError") {
        } else {
          console.error("Error fetching categories:", error);
        }
      });
    return () => {
      controller.abort();
    };
  }, []);
  return (
    <>
      <div className="down-header">
        <div className="container">
          <nav className="nav">
            <div className="category-nav">
              <div
                className="category-btn"
                onClick={() => toggleCategoryMenu()}
              >
                <MenuIcon />
                <p>Categories</p>
                <ArrowDropDownIcon />
              </div>
              <div className={`category-menu ${isCategoryMenuOpen}`}>
                {categories.length > 0 ? (
                  categories.map((category, index) => (
                    <Link
                      to={`/category/${category.slug}`}
                      key={index}
                      className="category-link"
                      
                    >
                      {category.name}
                    </Link>
                  ))
                ) : (
                  <p>Loading categories...</p>
                )}
              </div>
              <div className="nav-links">
                {navlinks.map((navlink, index) => (
                  <Link
                    to={navlink.link}
                    key={index}
                    className={
                      location.pathname === navlink.link
                        ? "active nav-link"
                        : "nav-link"
                    }
                  >
                    {navlink.name}
                  </Link>
                ))}
              </div>
            </div>
          </nav>
          <div className="user-actions">
            <Link to="/login" className="user-action-link">
              <LoginIcon />
              <span>Login</span>
            </Link>
            <Link to="/logout" className="user-action-link">
              <LogoutIcon />
              <span>Logout</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
