import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import TableData from './components/TableData';
import Layout from './Layout';


function App() {

  
  return (
    <div className="h-full">

    
        <Routes>

        <Route path='/ ' element={<Layout/>}>
          
          <Route path='form-fillup' element={<TableData/>}/>

          

        </Route>



        </Routes>



     <Header/>
     <TableData/>
    </div>
  );
}

export default App;
