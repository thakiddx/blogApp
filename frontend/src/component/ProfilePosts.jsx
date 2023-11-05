
const ProfilePosts = () => {
  return (
    <div className="w-full flex mt-8 space-x-4"> 
    {/* left */}
    <div className="w-[35%] h-[200px] flex justify-center items-center">
    <img src="https://images.unsplash.com/photo-1589395937920-07cce323acba?auto=format&fit=crop&q=80&w=812&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="h-full w-full object cover" />
    </div>
    {/* right */}
    <div className="flex flex-col w-[65%]">
        <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
            10 Best Places to Visit in the World
        </h1>
        <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4">
        <p>@thakiddx</p>
        <div className="flex space-x-2">
            <p>11/3/2023</p>
            <p>2:42pm pst</p>
        </div>
    </div>
    <p className='text-sm md:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci vero unde quaerat ex eos distinctio nostrum delectus tempora soluta labore placeat maxime mollitia numquam, incidunt asperiores earum quis, animi officiis?</p>
    </div>
    </div>
  )
}

export default ProfilePosts
