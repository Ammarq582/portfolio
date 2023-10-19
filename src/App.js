import { Route, Routes } from 'react-router-dom';
import Home from './components/home/home.component';


function App() {
  return(
    <Routes>
        <Route path='/' element={<Home/>}/>
    </Routes>
  )
}

export default App;
