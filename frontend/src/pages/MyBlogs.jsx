import { Link, useLocation } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../context/UserContext"
import axios from "axios"
<<<<<<< HEAD
import { URL } from "../url.js"
import HomePosts from "/home/xmalone0920/blogApp/frontend/src/component/HomePost.jsx"
=======
>>>>>>> d45bd292e363bb9b9eab75d4561e3b96efea8214
import Loader from "../component/Loader"


const MyBlogs = () => {
  const {search}=useLocation()
// console.log(search)
const [posts,setPosts]=useState([])
const [noResults,setNoResults]=useState(false)
const [loader,setLoader]=useState(false)
const {user}=useContext(UserContext)
// console.log(user)

const fetchPosts=async()=>{
  setLoader(true)
  try{
    const res=await axios.get("/api/posts/user/"+user._id)
    // console.log(res.data)
    setPosts(res.data)
    if(res.data.length===0){
      setNoResults(true)
    }
    else{
      setNoResults(false)
    }
    setLoader(false)
    
  }
  catch(err){
    console.log(err)
    setLoader(true)
  }
}

useEffect(()=>{
  fetchPosts()

},[search])

return (
  <div>
 
      <div className="px-8 md:px-[200px] min-h-[80vh]">
      {loader?<div className="h-[40vh] flex justify-center items-center"><Loader/></div>:!noResults?
      posts.map((post)=>(
        <>
        <Link to={user?`/posts/post/${post._id}`:"/login"}>
        <HomePosts key={post._id} post={post}/>
        </Link>
        </>
        
      )):<h3 className="text-center font-bold mt-16">No posts available</h3>}
      </div>

  </div>
)
}

export default MyBlogs