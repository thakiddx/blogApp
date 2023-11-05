import Footer from "../component/Footer"
import HomePosts from "../component/HomePost"
import NavBar from "../component/NavBar"


const Home = () => {
    return (
    <>
    <NavBar/>
      <div className="px-8 md:px-[200px]">
        <HomePosts />
        <HomePosts />
        <HomePosts />
        <HomePosts />
        <HomePosts />
      </div>
      <Footer/>
    </>

    
    )
}

export default Home