import { Routes, Route } from 'react-router-dom';
import {SVGMapPage} from '../pages/SVGMapPage'
import { About } from '../pages/About';
import BlueTooth from '../pages/BLueTooth';

const Main = () => {
return (         
    <Routes>
    <Route path='/' element={<SVGMapPage/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/blue' element={<BlueTooth/>} />
  </Routes>
);
}
export default Main;