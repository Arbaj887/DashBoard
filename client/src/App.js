import './App.css';
import axios from 'axios'
import { useEffect,useContext} from 'react';
import Header from './component/Header'
import DataContext from './context/DataContext';
import DataTable from './component/DataTable';

function App() {
  const {backendData,setBackendData}= useContext(DataContext)

 
  

  
  useEffect(() => {
    
    async function fetchData() {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/data`);
        setBackendData(response.data);
        
        
       
      } catch (err) {
        
        console.error("Error fetching data:", err);
      }
    }
    
    fetchData();
     // eslint-disable-next-line
  }, []);
  
  return (
    <>
    <div className='appParent'>
     <Header/>
     <DataTable data={backendData}/>     


    </div>
    
    </>
  );
}

export default App;
