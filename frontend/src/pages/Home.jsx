import HomePost from "../components/HomePost"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const Home = () => {
  return (
    <>
 <Navbar />
<div className="px-8 md:px-[200px]">
        <HomePost />
        <HomePost />
        <HomePost />
        <HomePost />
        <HomePost />
        </div>
        <Footer />
    </>
  
  )
}

export default Home