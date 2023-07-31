import React, { useState } from 'react';

const App = () => {

  const [data,setData] = useState({userName:"",password:"",})
  const [focusvar,setfocusvar]=useState(false);
  
  
  const {userName,password}=data;

  const onChange=(e)=>{

    setData({...data,[e.target.name]:e.target.value})
  }

  // const showMessage=()=>setfocusvar(true)
  // const dontDhowMessage=()=>setfocusvar(false)


  const evnetHandler=(e)=>{
    e.preventDefault();
    console.log(data)
  }

  return ( 
    <center>
    <form onSubmit={evnetHandler}>
      <input type="text" placeholder="enter username" name="userName" value={userName} onChange={onChange}/><br/>
      <input type="password" placeholder="enter password"  name="password" value={password} onFocus={()=>setfocusvar(true)} onBlur={()=>setfocusvar(false)} onChange={onChange}/><br/>
      {(password.length<=5 && focusvar===true) ? <p>Password should be greater than 5 characters</p> : null }
      <button type="submit">submit</button>
      </form>
      </center>
   );
}
export default App