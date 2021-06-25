import React from "react";
import "./Header.scss";
import SearchInput from "./SearchInput";

export default function Header() {
  return (
    <header className="Header">
      <div className="header-wrapper">
        <div className="header-title">Find Movies</div>
        <SearchInput />
      </div>
    </header>
  );
}
