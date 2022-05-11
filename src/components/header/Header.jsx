import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import {
  faBed,
  faCar,
  faMountainSun,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../Stylesheets/components/header.css";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import OptionOperation from "./OptionOperation";
import OPTION_OPERATION from "../../consts/OPTION_OPERATION";
import LIMIT_NUMBER from "../../consts/LIMIT_NUMBER";
import { useNavigate } from "react-router-dom";


const Header = ({type}) => {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [destination, setDestination] = useState('');
  const [isOpenDate, setIsOpenDate] = useState(false);
  const [isOpenOptions, setIsOpenOptions] = useState(false);
  const [options, setOptions] = useState({
      adult:LIMIT_NUMBER.adult,
      children:LIMIT_NUMBER.children,
      room:LIMIT_NUMBER.room,
  });
  const handleOption = (name,operation) =>{
      setOptions((preState) =>({
          ...preState,
          [name]:operation === OPTION_OPERATION.MINUS ? options[name] -1 : options[name] +1,
      }))
  }
  const navigate = useNavigate();
  const handleSearch = () =>{
      navigate("/hotels",{state:{ destination,date,options}});
  }

  return (
    <div className="header">
      <div className={type === "home" ? "headerContainer" : "headerContainer list"}>
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faMountainSun} />
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </div>
        </div>
       {type === "home" && <>
        <h1 className="headerTitle">Giảm giá trọn đời? Là Genius.</h1>
        <p className="headerDesc">Nhận tặng thưởng khi đi du lịch – tiết kiệm tức thì từ 10% trở lên với tài khoản Booking.com miễn phí</p>
        <button className="headerBtn">Sign in/Register</button>
        <div className="header-search">
          <div className="header-search-item">
            <FontAwesomeIcon icon={faBed} className="header-icon" />
            <input
              type="text"
              placeholder="Where are you going?"
              className="header-search-input"
              onChange={e=>setDestination(e.target.value)}
            />
          </div>
          <div className="header-search-item">
            <FontAwesomeIcon icon={faCalendarDays} className="header-icon" />
            <span onClick={() => setIsOpenDate(!isOpenDate)} className="header-search-text">{`${format(
              date[0].startDate,
              "dd/MM/yyyy"
            )} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
            {isOpenDate && 
            <DateRange
              onChange={(item) => setDate([item.selection])}
              showSelectionPreview={true}
              moveRangeOnFirstSelection={false}
              months={2}
              ranges={date}
              className="header-date"
              minDate={new Date()}
            />}
            ;
          </div>
          <div className="header-search-item">
            <FontAwesomeIcon icon={faPerson} className="header-icon" />
            <span className="header-search-text" onClick={()=> setIsOpenOptions(!isOpenOptions)}>{`${options.adult} adult - ${options.children} children - ${options.room} room`}</span>
            <OptionOperation 
                onOptions={handleOption}
                options={options}
                openOption={isOpenOptions}
            />
            <button className="headerBtn" onClick={handleSearch}>Search</button>
          </div>
        </div>
        </>}
      </div>

    </div>
  );
};

export default Header;
