// import { useState } from "react";

const Search = ({ txtSearch, setTxtSearch }) => {
  const search = (event) => {
    setTxtSearch(event.target.value);
  };

  return (
    <header>
      <h1>😎 Emoji Search 😎</h1>
      <input
        type="text"
        placeholder="What emoji are you looking for ?"
        name="txtSearch"
        value={txtSearch}
        onChange={search}
      />
    </header>
  );
};

export default Search;
