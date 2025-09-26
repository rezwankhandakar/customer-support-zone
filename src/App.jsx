
import { Suspense,useState } from 'react'
import './App.css'
import Mainsection from './Component/Mainsection'
import Navbar from './Component/Navbar'
import { Toaster } from 'react-hot-toast' 
import Footer from './Component/Footer'


const fetchTeckets =async ()=>{
  const res =await fetch ("/Tickets.json")
  return res.json()
}
const teketsPromise = fetchTeckets()
function App() {
  
 
 const [inProgressCount, setInProgressCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <Suspense fallback={<span className="loading loading-spinner text-error"></span>}>
        <Mainsection 
          teketsPromise={teketsPromise} 
          inProgressCount={inProgressCount} 
          setInProgressCount={setInProgressCount} 
        />
      </Suspense>
      <Footer></Footer>
      <Toaster position="top-right" reverseOrder={false} />

    </>
  )
}

export default App
