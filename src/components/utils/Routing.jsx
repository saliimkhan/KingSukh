import {Routes,Route} from 'react-router-dom';
import Home from '../Home';
import About from '../About';
import Contact from '../Contact';


const Routing = () => {
  return (
    <div className='container mx-auto mt-2 w-full h-full'>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      
    </div>
  )
}

export default Routing