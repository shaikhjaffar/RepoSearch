import React, { useState,useEffect} from 'react';
import Card from './components/Card/Card';
import Loader from './components/Loader/Loader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getData } from './Api_services/Service';
const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [repos, setRepos] = useState([]);
  const [loading,setloading] = useState(false)
  const [sortOption, setSortOption] = useState('stars');
  const [message,setmessage] = useState("Enter Your Repo Name On the Search Bar!!")

  useEffect(() => {
      
  }, [repos])

    function fetchData(search,sort){
      setloading(true)
       if(searchQuery){
        getData(search,sort)
       .then((response) => {
        if (response.status !== 200){
          toast.error('SomeThing went wrong', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
            setRepos([])
            setmessage("Server Error Repo Not Found ....Try Again after SomeTime")
        }
        else {
          setRepos(response.data.items);
          setloading(false)
        }
       })
       .catch((err)=>{
        setloading(false)
        toast.error(err.message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
       })
       }
       else{
        setloading(false)
        setRepos([])
        setmessage("Your Search Box is Empty..Enter the Repo Name")
       }
       
    }
  
  const handleSortChange = (event) => {
    setSortOption( event.target.value);
    fetchData(searchQuery,event.target.value)
  };

  return (
    <>
    <ToastContainer/>
    <div className='Header_wrap'>
    <div className="Card">
  <div className="CardInner">
  <label>Search your Repo</label>
  <div className="container">
    <div className="InputContainer">
      <input placeholder="Click on Icon or Enter Key"  value={searchQuery} onChange={(e)=> setSearchQuery(e.target.value)} onKeyDown={(e)=>{
        if (e.key === 'Enter') {
          fetchData(searchQuery,sortOption)
        }
      }} />
    </div>
    <div className="Icon" onClick={()=>{fetchData(searchQuery,sortOption)}}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#657789" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
    </div>
  </div>
 </div>
</div>
  {
    repos.length > 0 ? <div className="Card2">
    <div className="CardInner">
    <label>Sort By</label>
    <div className="container">
      <div className="InputContainer">
      <select value={sortOption} onChange={handleSortChange}>
              <option value="stars">Stars</option>
              <option value="watchers">Watchers</option>
              <option value="score">Score</option>
              <option value="name">Name</option>
              <option value="created_at">Created At</option>
              <option value="updated_at">Updated At</option>
            </select>
      </div>
    </div>
   </div>
  </div> : <></>
  }

   
    </div>
      <div className='MainCard_wrap'>
        {
         !loading ? repos?.map((data) => (
            <Card data={data}/>
        )) : <Loader/>
        }
        {
          !repos.length > 0 ? <div>
             <h2>{message}</h2>
          </div>  : <></>
        }
      </div>
  
    </>
  );
};

export default App;
