
import { BrowserRouter as Router } from 'react-router-dom';
import Menu from './Components/Menu';
import Refer from './Routes/Refer';

function App() {
   return (
    <>
    <Router>
      <Menu />
      <Refer />
    </Router>     
    </>
  );
};

export default App;

