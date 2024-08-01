import React from 'react'
import { useNavigate } from 'react-router-dom';

function Admin() {
    let nav = useNavigate();

    async function call() {   
        let role = await localStorage.getItem("role");
        if(role != 1){
            nav("/");
        }
    }
    call();
}

export default Admin
