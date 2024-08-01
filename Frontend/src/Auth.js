import React from 'react'
import { useNavigate } from 'react-router-dom';

function Auth() {
  let nav = useNavigate();
  let call = async ()=>{
      let auth = await localStorage.getItem("uid");
      if(auth == null){
        nav("SignIn")
      }
    }
    call();
}

export default Auth
