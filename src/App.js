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
 
 
  return (
    <div className="App">
      {/* {console.log(data)} */}
      <button onClick={handleIncrementor}>Click</button>
      <ProfileCard Id={data[index].id} Name={data[index].name} Email={data[index].email} Message={data[index].body}/>      
    </div>
  );
}

export default App;
