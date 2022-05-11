import Featured from '../../components/body/Featured'
import MostChosen from '../../components/body/MostChosen'
import PropertyList from '../../components/body/PropertyList'
import MailList from '../../components/footer/MailList'
import MenuFooter from '../../components/footer/MenuFooter'
import Header from '../../components/header/Header'
import Navbar from '../../components/header/Navbar'
import '../../Stylesheets/pages/home.css'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header type="home"/>
      <div className="home-container">
      <Featured />
        <h1 className="home-title">Tìm theo loại chỗ nghỉ</h1>
      <PropertyList />
      <h1 className="home-title">Nhà ở mà khách yêu thích</h1>
      <MostChosen />
      <MailList />
      <MenuFooter />
      </div>
    </div>

  )
}

export default Home