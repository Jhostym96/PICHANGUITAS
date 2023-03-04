import axios from "axios";



const todoslosEstadios = async (state) => {

  const peticion = await axios.get("https://6363105c66f75177ea3c9307.mockapi.io/stadium")
  state(peticion.data)
}



const unicoProducto = async (id, state) => {

    const token = JSON.parse(localStorage.getItem("user")).token ?? {}


  const peticion = await axios.get(`http://localhost:5000/api/v1/fields/${id}`,{
    headers:{
        Authorization:`bearer ${token}`
    }

  })

 state(peticion.data);

}

export {
  todoslosEstadios,
  unicoProducto
}