import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <div className="flex items-center justify-between px-6 md:px-[200px] py-4">
        <h1 className="text-xl font-extrabold"><Link to='/'>Blog Market</Link></h1>   
        <div className="flex justify-center items-center space-x-0">
            <p></p>
        </div>
        <div className='flex items-center justify-center space-x-2 md:space-x-4'></div>
        <h3><Link to='/login'>Login</Link></h3>
        <h3><Link to='/register'>Register</Link></h3>

            
        </div>
    )
}

export default NavBar