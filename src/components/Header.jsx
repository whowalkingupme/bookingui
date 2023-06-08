import React from "react";
import "./header.scss"

export const Header = () => {
  return (
    <div className="header">
      <div className="headerContainer">
        <h1 className="headerTitle">尋找下趟住宿</h1>
        <p className="headerDes">
          搜尋飯店、民宿及其他住宿類型的優惠…
          <br />
          Booking.com clone挑戰（為SamKo Demo使用不為盈利）
        </p>
        <div className="headerSearchBar">SearchBar</div>
      </div>
    </div>
  );
};
