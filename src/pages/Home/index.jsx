import React from "react";
import { useNavigate } from "react-router-dom";
import {useEffect} from "react"

function Home() {

const history = useNavigate();


  const validateIsLogged = () => {
		const user = JSON.parse(localStorage.getItem("user"));
		if (!user) history("/login");
	};

	useEffect(() => {
		validateIsLogged();
	}, []);


  return (
    <div>
      "ACA IRA LA PAGINA PRINCIPAL"
    </div>
  )
}

export default Home;