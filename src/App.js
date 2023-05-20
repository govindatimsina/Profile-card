import { useState, useEffect } from 'react';
import './App.css';
import ProfileCard from './ProfileCard';

function App() {
  const[index, setIndex] = useState(0);
  const[data, setData]=useState([""]);
  
  function handleIncrementor(){
    setIndex(index+1);
  }

  useEffect(()=>{
    getData();
 },[]);
 
  const getData = async ()=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/comments");
    const actualData = await res.json();
    setData(actualData);;
  }

  const handledecrementor = ()=>{
    setIndex(index-1);
  }
  return (
    <div className="mainbox">
      {/* {console.log(data)} */}
      <button onClick={handledecrementor} className='prev'>{"<"}</button>
      <ProfileCard Id={data[index].id} P_url={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOX2A9PishKybgn8eK6QARTKuP_Q8fgm7tX4Xnopr5&s"} Name={data[index].name} Email={data[index].email} Message={data[index].body}/>
      <button onClick={handleIncrementor} className='next'> {">"} </button>
    </div>
  );
}

export default App;
