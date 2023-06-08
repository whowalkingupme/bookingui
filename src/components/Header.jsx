import React, { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import * as locales from "react-date-range/dist/locale";
//用它來叫出不同版本的語言翻譯，把日曆換成中文
import { DateRange } from "react-date-range";
import format from 'date-fns/format';
import "./header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCalendar,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
  const [openCalendar, setOpenCalendar] = useState(false);

  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  return (
    <div className="header">
      <div className="headerContainer">
        <h1 className="headerTitle">尋找下趟住宿</h1>
        <p className="headerDes">
          搜尋飯店、民宿及其他住宿類型的優惠…
          <br />
          Booking.com clone挑戰（為SamKo Demo使用不為盈利）
        </p>
        <div className="headerSearchBar">
          <div className="SearchBarItem">
            <FontAwesomeIcon icon={faBed} />
            <input
              type="Search"
              placeholder="你要去哪裡？"
              className="SearchInput"
            />
          </div>
          <div className="SearchBarItem">
            <FontAwesomeIcon
              icon={faCalendar}
              onClick={() => setOpenCalendar(!openCalendar)}
            />
            <span
              className="SearchText"
              onClick={() => setOpenCalendar(!openCalendar)}
            >
              {format(dates[0].startDate, "MM/dd/yyyy")} - {format(dates[0].endDate, "MM/dd/yyyy")}
            </span>
            {openCalendar && (
              <DateRange
                editableDateInputs={true} //可以讓日期被選取並輸入等等的
                onChange={(item) => setDates([item.selection])}
                //onChange把紀錄到的改動都紀錄到state date 裡面我們暫存器就會有選好的日期範圍，等於是輸入到暫存器
                //item.selection的概念就是讓他選擇上傳到key=selection的部分，因為
                moveRangeOnFirstSelection={false}
                className="calendar" //並記得classname scss styling導入
                minDate={new Date()}
                ranges={dates} //才可以選範圍並範圍更改會re-render useState的date等於這是個抓取date範圍並顯示在日曆上，等於是從暫存器輸入到日曆顯示上面
                locale={locales["zhTW"]}
                //最後這邊就是語言版本使用繁體中文zhTW概念
                //就可以用到上面的import * as locales from 'react-date-range/dist/locale';
              />
            )}
          </div>
          <div className="SearchBarItem">
            <FontAwesomeIcon icon={faPeopleGroup} />
            <span className="SearchText">3位成人 · 2 位小孩 · 1 間房</span>
          </div>
          <button className="SearchBarBtn">搜尋</button>
        </div>
      </div>
    </div>
  );
};
