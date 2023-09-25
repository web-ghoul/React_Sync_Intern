import React, { useRef } from "react";
import styles from "./Search.module.scss";
import { BiSearch } from "react-icons/bi";
import Cookies from "js-cookie";

const Search = ({ setCity }) => {
  const searchRef = useRef();
  const handleSearch=()=>{
    const city = searchRef.current.value
    setCity(city)
    Cookies.set("city",city)
  }
  return (
    <div className={` flex jcc aic ${styles.search_box}`}>
      <input
        ref={searchRef}
        type="search"
        placeholder="Search by city or country..."
        name="search"
        id="search"
        data-testid="search_input"
      />
      <button
        type="button"
        onClick={handleSearch}
        className={`flex jcc aic`}
      >
        <BiSearch />
      </button>
    </div>
  );
};

export default Search;
