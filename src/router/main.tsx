import { Routes, Route } from 'react-router-dom';
import {SVGMapPage} from '../pages/SVGMapPage'
import { About } from '../pages/About';

const Main = () => {
return (         
    <Routes>
    <Route path='/' element={<SVGMapPage/>} />
    <Route path='/about' element={<About/>} />
  </Routes>
);
}
export default Main;