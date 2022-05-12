import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Header from "../../components/header/Header"
import Navbar from "../../components/header/Navbar"
import "../../Stylesheets/pages/hotel.css";
import MailList from '../../components/footer/MailList'
import MenuFooter from '../../components/footer/MenuFooter'
import { useState } from "react";

const Hotel = () => {
  const photos = [
    {
      src : "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/357381809.jpg?k=217ca171320a459ef277a24cc126995ccca5fec4545ef123c2b8b3f892ec473f&o=&hp=1"
    },
    {
      src : "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/357381821.jpg?k=1503db6f7bbcdd6f8c9842234efbf4d13808ec1b51f9a9c9c1fee22990c0ee53&o=&hp=1"
    },
    {
      src : "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/357381852.jpg?k=38ee8d76644200b29af86605bacca63e178dded04a56702f6ddbce7939d545c5&o=&hp=1"
    },
    {
      src : "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/357381827.jpg?k=7bcf0b287696149078521e25e67fa04a5867e95e8747fc8e72ca3f6f17db3aad&o=&hp=1"
    },
    {
      src : "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/357381834.jpg?k=edfd5009177b81fb7e56c0b851056fdc42fb1ce8540ea6f3c04793b3edaa0d55&o=&hp=1"
    },
    {
      src : "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/357381835.jpg?k=ed9a4f320b348f111c98c804465e6391a96a90e7480035d411de7f369e4fb5d9&o=&hp=1"
    },
  ]
  const [slideNum,setSlideNum] = useState(0);
  const [openSlide,setOpenSlide] = useState(false);
  const handleOpen = (index) =>{
    setSlideNum(index);
    setOpenSlide(true);
  }
  const maxSlide = photos.length -1;
  const handleMove = (arrow) =>{
    let newSlide ;
    if(arrow === "left"){
      newSlide = slideNum === 0 ? maxSlide : slideNum - 1;
    }
    else{
      newSlide = slideNum === maxSlide ? 0 : slideNum + 1; 
    }
    setSlideNum(newSlide);
  }
  return (
    <div>
      <Navbar />
      <Header />
    <div className="hotel-container">
      { openSlide && <div className="slider">
        <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={() => setOpenSlide(false)}/>
        <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=> handleMove("left")}/>
        <div className="slider-wrapper">
            <img src={photos[slideNum].src} alt="" className="slider-img" />
        </div>
        <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={()=> handleMove("right")}/>

      </div>}
      <div className="hotel-wrapper">
        <button className="book-now">
          BOOK NOW
        </button>
        <h1 className="hotel-title">Gran hotel</h1>
        <div className="hotel-address">
          <FontAwesomeIcon icon={faLocationDot}/>
          <span>Elton St 125 New york</span>
        </div>
        <span className="hotel-distance">
          Excelent location - 500m from center
        </span>
        <span className="hotel-price-hl">
          Book a stay over $114 at this property and get a free airport taxi
        </span>
        <div className="hotel-images">
            {photos.map((photo,index)=>(
                <div className="hotel-img-wrapper">
                  <img onClick={() =>{handleOpen(index)}} src={photo.src} alt="" className="hotel-img"/>
                </div>
            ))}
        </div>
        <div className="hotel-details">
          <div className="hotel-details-text">
            <h1 className="hotel-title">
              Stay in the herasa sasa
            </h1>
            <p className="hotel-desc">
              dasdasd asdnas das dkasnd aksjd kas dlkas daj sdla das dlas dla
              dasdas as a as as akjs da sda slkdjas dlkas d;akskd asd asld
              asd lasmdasd asjdasdalsd oasd alksd alksdalsk jd asd as
              edfsdfsd sd sd sd sd sd d setDestination              
            </p>
          </div>
          <div className="hotel-details-price">
            <h1>Perfect dasd asd asdi asd</h1>
            <span>
              dasd asd asd saj jiwa dsa diond sa dsjad 
            </span>
            <h2><b>$232</b> (10 đêm) </h2>
            <button>Book now</button>
          </div>
        </div>
      </div>
      <MailList />
      <MenuFooter />

</div>
    </div>

  )
}

export default Hotel