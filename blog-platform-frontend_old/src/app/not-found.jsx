import Link from "next/link"

const NotFound = () => {
  return (
    <div>
          <div style={{width:'100%',fontSize:"30px",display:'flex',justifyContent:"center",marginTop:"5%",flexDirection:"column",alignItems:'center'}}>
          <h2>Not Found</h2>
          <p>Sorry, the page you are looking for does not exist.</p>
          <button 
              className="px-10 py-5 bg-black text-white text-3xl rounded-md shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              <Link href="/">Return Home</Link>
            </button>

            </div>

      
      
    </div>
  )
}

export default NotFound