import { Hand } from 'lucide-react';
import React, { useState, useEffect, use } from 'react';
import Notiflix from "notiflix";

import { ToastContainer, toast } from "react-toastify";
import { time } from 'framer-motion';


function First() {
  const [count, setCount] = useState(0);

  return (
    <div className="text-center mt-10">
      <p>Count: {count}</p>
      <button
        onClick={() => setCount(count + 10)}
        className="bg-black text-white p-2 rounded-2xl"
      >
        Increase
      </button>
    </div>
  );
}

function Second() {
  const [title, setTitle] = useState("Hello Admin");
  const [data, setData] = useState(null);

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <div>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        {data ? data.map((user) => <p key={user.id}>{user.name}</p>) : "Loading..."}
      </div>
    </div>
  );
}

function Third(){

  const myName = {name:"sharad",rollNo:21,lastName: "kumar"};

  return (
    <div className='mt-10 bg-blue-200 text-3xl '>

      <Fourth send={myName} />

      
      
    </div>
  );
}

function Fourth({send}) {

  if(!send){
    return <h2>Loading...</h2>;
  }

  return (
  <div> 
    <h2>My name is {send.name} {send.lastName}</h2>
    <p>My roll no is {send.rollNo}</p>

  </div>
  );
}
function Fifth(){

  const response = {
    name : "sharad",
    course:"B.Tech",
    roll:21
  }
  return (
    <div>
      {response ? <Third  /> : <Fourth />}

    </div>

  );
}

function Sixth(){
  const[name,setName] = useState('');
  const[pass,setPass]= useState('');
  const [clicked, setClicked] = useState(false);

  const HandleSubmit = (e)=>{
    e.preventDefault();
    alert(`Hello ${name} and Password ${pass}`)
  }
  useEffect(() => {
    if (clicked) {
      setName("");
      setPass("");
      setClicked(false);
    } else {
      alert("wrong");
    }
  }, [clicked]);

  const notify = ()=> {
    
    toast.success(`Hello ${name} and Password ${pass}`);
  }

  const handleClick = ()=>{
    setClicked(true);
    notify();

  }

  return(
    <div className='flex justify-center text-xl bg-blue-300 mt-4 p-10'>
      <form action="#" onSubmit={HandleSubmit} className='bg-green-500 p-10 rounded-tl-4xl rounded-br-4xl  '>
        <label className='flex justify-center font-bold p-2 mt-4'> <h2>LOGIN</h2></label>
        <label > Username:
          <input 
          type="text"
          value={name} 
          className='bg-white mt-4 mb-4 p-1 rounded-2xl m-1'
          onChange={(e)=>{ setName(e.target.value)}}/>
        </label>
        <br />
        <label >

        </label>Password:
        <input 
        type="password"
        value={pass} 
        className='bg-white mt-4 mb-4 p-1 rounded-2xl m-2'
        onChange={(e)=>{ setPass(e.target.value)}} />
        <br />
        <div className='flex justify-center'>
        <input type="submit" onClick={
           handleClick } className='bg-black text-white p-2 rounded-2xl' />
        </div>
      </form>

      

    </div>
  )
}
  function Seven(){   
    // pending

  const [IsLogged,setIsLogged] = useState(0)

  const IsLoggedIn = false;

  const notify = ()=> toast.success("Notification Sent!");
  
  const notify1 = ()=> Notiflix.Notify.success("Success Notification!");
  
  const notify2 = ()=> Notiflix.Notify.failure("Error Notification!");

  return(

  <div>
   <h2>

    
    <div>
    <h2>Red and Green Light : {IsLogged}</h2>
    <button 
    className='p-2 bg-gray-800 rounded-md '
    onClick={()=> setIsLogged(IsLogged +1)} >Start</button>
    </div>

    {IsLoggedIn ? <div onClick={notify1}>True</div> : <div onClick={notify2}>False</div>}

   </h2>
   <div><button onClick={notify}>Click me!</button></div>
    <ToastContainer />
  </div>
  )
}

function Eight(){
  // usestate

  const [counter,setCounter] = useState(0);
  const [name, setName] = useState('');

  const [details, setDetails]= useState({counter:0,name:""});


  const IncreaseCounter = ()=>setCounter(counter+1)

  const clickCounter = () =>
    setDetails((prev) => {
      return {
        
        ...prev,
        counter: prev.counter + 1,  // Corrected: comma instead of semicolon
      };

    });
    const handleInputChange = (e) => {
      setDetails((prev) => ({
        ...prev,
        name: e.target.value,
      }));
    };
    console.log(details);
    
    
    

  return(  
    



    <div className='bg-blue-100 border-2'>  

         {/* // usestate with input  */}

      <div className='mt-4 border-2 p-2 ml-4 '> 

      <h1>{name} has clicked  {counter} times!</h1>
      <input type="text" onChange={(e)=>{setName(e.target.value)}} />
      <button onClick={IncreaseCounter} className='flex'>Increase</button>

      </div>

      <div className='mt-4 border-2 p-2 ml-4 mb-4 '>   {/* // usestate with object  */}

      <input type="text" onChange={handleInputChange} />
      <h1>
        {details.counter} has clicked {details.name} times !!
      </h1>
      <button onClick={clickCounter} className='flex'>clickName</button>
      

       
      </div>
    </div>
  )
}

function Nine(){
  // useEffect

  const[count, seCount]=useState(0);
  const[timer, setTimer] = useState(0);

  useEffect(()=>{
    console.log("run useEffect",count);

    return ()=>{
      console.log("clean up",count);
      
    }
    


  },[count])

  // useEffect(()=>{
  //   const stop = setInterval(()=>{
  //     setTimer(timer+1)
  //   },1000)

  //   return ()=>{
  //     clearInterval(stop)
  //   }

  // })
  
  


  
  return(
    <div>
      <h1>{timer}</h1>

      <h2>{count} new message </h2>
      <button onClick={()=> seCount(count+1)}>Increase</button>


    </div>
  )
}

function Ten(){

  
  return(
    <div>
      <h2>hy admin</h2>


    </div>
  )
}

export const useFetch = (url)=>{
  const [response,setResponse]= useState([]);

  useEffect(()=>{
    fetch(url)
    .then((res)=>res.json())
    .then((data)=> setResponse(data));
  },[])

  return response ;
  
}
export { First, Second, Third ,Fourth,Fifth ,Sixth,Seven,Eight,Nine,Ten};
