import "../../Stylesheets/pages/list.css"
import Header from '../../components/header/Header'
import Navbar from '../../components/header/Navbar'
import { useLocation } from "react-router-dom"
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";


const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);
  const [isOpenStartDate, setIsOpenStartDate] = useState(false);
  const [isOpenEndDate, setIsOpenEndDate] = useState(false);
  return (
    <div>
      <Navbar />
      <Header />
      <div className="list-container">
        <div className="list-warpper">
          <div className="list-search">
            <h1 className="ls-title">Tìm kiếm</h1>
            <div className="ls-item">
              <label htmlFor="">Tên chỗ nghỉ / điểm đến:</label>
              <input type="text" name="" id="" value={destination} onChange={(e) => setDestination(e.target.value)}/>
            </div>
            <div className="ls-item">
              <label htmlFor="">Ngày nhận phòng</label>
              <input type="text" name="" id=""  placeholder={`${format(
              date[0].startDate,
              "dd/MM/yyyy"
            )}`} onClick={() =>setIsOpenStartDate(!isOpenStartDate)}/>

              {isOpenStartDate &&<DateRange onChange={(item) => setDate([item.selection])} minDate={new Date()} ranges={date}/>}
            </div>
            <div className="ls-item">
              <label htmlFor="">Ngày trả phòng</label>
              <input type="text" name="" id="" placeholder={` ${format(date[0].endDate, "dd/MM/yyyy")}`} onClick={() =>setIsOpenEndDate(!isOpenEndDate)} />
              {isOpenEndDate &&<DateRange onChange={(item) => setDate([item.selection])} minDate={new Date()} ranges={date}/>}
            </div>
            <div className="ls-item">
              <label htmlFor="">Nghỉ 30 đêm</label>
              <input type="text" name="" id="" placeholder={`${options.adult} adult - ${options.children} children - ${options.room} room`}/>
            </div>
          </div>
          <div className="list-result"></div>
          
        </div>
      </div>
    </div>
  )
}

export default List