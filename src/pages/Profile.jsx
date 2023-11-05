import NavBar from '../component/NavBar'
import Footer from '../component/Footer'
import ProfilePosts from '../component/ProfilePosts'

const Profile = () => {
  return (
    <div>
      <NavBar/>
      <div className='px-8 md:px-[200px] mt-8 flex md:flex-row flex-col-reverse'>
        <div className='flex flex-col md:w-[70%] w-full'>
            <h1 className='text-xl font-bold mb-4'>Your posts:</h1>
            <ProfilePosts/>
        </div>
        <div className='flex flex-col space-y-4 md:w-[30%] w-full'>
            <h1 className='text-xl font-bold mb-4'>Profile</h1>
            <input className='outline-none px-4 py-2 text-gray-500' placeholder='Your username' type='text'/>
            <input className='outline-none px-4 py-2 text-gray-500' placeholder='Your email' type='email'/>
            <input className='outline-none px-4 py-2 text-gray-500' placeholder='Your password' type='password'/>
            <div className='flex items-center space-x-4 mt-8'>
                <button className='text-white font-semibold bg-black px-4 py-2 hover:text-black hover:bg-gray-400'>Update</button>
                <button className='text-white font-semibold bg-black px-4 py-2 hover:text-black hover:bg-gray-400'>Delete</button>
            </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Profile
