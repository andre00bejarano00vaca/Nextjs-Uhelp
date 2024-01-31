import BuscarPage from "./buscar/page"

const HomePage =async () => {
  return (
    <div className="grid place-items-center h-screen w-screen  bg-black text-white">
    <div className="text-center border-4 border-white overflow-auto h-1/2 w-3/4 rounded-md ">
    <BuscarPage/>
    </div>
    
    </div>
  )
}

export default HomePage