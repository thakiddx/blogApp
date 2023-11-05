import Footer from "../component/Footer"
import NavBar from "../component/NavBar"
import { BiEdit } from "react-icons/bi"
import { MdDelete } from "react-icons/md"


const PostDetails = () => {
  return (
    <div>
      <NavBar/>
      <div className="px-8 md:px-[200px] mt-8">
        <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-black md:text-3xl">10 Best Places to Visit in the World</h1>
            <div className="flex items-center justify-center space-x-2">
                <p><BiEdit/></p>
                <p><MdDelete/></p>
            </div>
        </div>
        <div className="flex items-center justify-between mt-2 md:mt-4">
        <p>@thakiddx</p>
        <div className="flex space-x-2">
            <p>11/3/2023</p>
            <p>2:42pm pst</p>
        </div>
        </div>
        <img src="https://images.unsplash.com/photo-1589395937920-07cce323acba?auto=format&fit=crop&q=80&w=812&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full mx-auto mt-8"></img>
        <p className="mx-auto mt-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, nulla. Suscipit molestiae quam rerum laudantium quaerat veniam autem impedit quas ullam culpa delectus ea modi eos quod, quasi adipisci corporis!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet necessitatibus eius deserunt doloribus, possimus quam ab totam delectus et dolorem quaerat temporibus doloremque eligendi unde dicta aliquid blanditiis, perferendis adipisci.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti sequi ipsum aliquid perspiciatis necessitatibus non molestias debitis dignissimos eligendi, laboriosam doloribus eaque? Possimus ab voluptas hic laborum odit fuga optio?
        </p>
        <div className="flex items-center mt-8 space-x-4 font-semibold">
            <p>Catergories</p>
            <div className="flex justify-center items-center space-x-2">
                <div className="bg-gray-300 rounded-lg px-3 py-1">Travel</div>
                <div className="bg-gray-300 rounded-lg px-3 py-1">Leisure</div>
            </div>
        </div>
        <div>
            <h3 className="mt-6 mb-4 font-semibold">Comments:</h3>
            {/* comment */}
            <div className="px-2 py-2 bg-gray-200 rounded-lg my-2">
            <div className="flex items-center justify-between">
                <h3 className="font-bold text-gray-600">@thakiddx</h3>
                <div className="flex justify-center items-center space-x-4">
                    <p className="text-gray-500 text-sm">11/3/2023</p>
                    <p className="text-gray-500 text-sm">2:42pm pst</p>
                    <div className="flex items-center justify-center space-x-2">
                <p><BiEdit/></p>
                <p><MdDelete/></p>
                </div>
                </div> 
            </div>
            <p className="px-4 mt-2">Nice information!!</p>

            </div>

                   {/* comment */}
                   <div className="px-2 py-2 bg-gray-200 rounded-lg my-2">
            <div className="flex items-center justify-between">
                <h3 className="font-bold text-gray-600">@thakiddx</h3>
                <div className="flex justify-center items-center space-x-4">
                    <p className="text-gray-500 text-sm">11/3/2023</p>
                    <p className="text-gray-500 text-sm">2:42pm pst</p>
                    <div className="flex items-center justify-center space-x-2">
                <p><BiEdit/></p>
                <p><MdDelete/></p>
                </div>
                </div> 
            </div>
            <p className="px-4 mt-2">Nice information!!</p>

            </div>
        </div>
        {/* write a comment */}
        <div className="w-full flex flex-col mt-4 md:flex-row">
            <input type="text" placeholder="Write a comment" className="md:w-[80%] outline-none py-2 px-4 mt-4 md:mt-0"/>
            <button className="bg-black text-sm text-white px-2 py-2 md:w-[20%] mt-4 md:mt-0">Add Comment</button>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default PostDetails
