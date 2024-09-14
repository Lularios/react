import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Registro from '../Pages/Registration';
import Login from '../Pages/Login';
import InfoCharacter from '../Components/InfoCharacter';

const Refer = () => {
    return(
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Registration' element={<Registro />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/character/:id' element={<InfoCharacter />} />
      </Routes>
    )
}

export default Refer;