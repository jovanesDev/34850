import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

const ApiConsume = () => {
  const [img, setImg] = useState("");
  const [search , setSearch] = useState("")

  async function getData(pokeName) {
    try {
      const {data:{sprites:{other}}} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${ pokeName || "ditto" }`)
      const img = other['official-artwork']['front_default']
      // const img = data.sprites.other['official-artwork'].fornt_default
      setImg(img)
    } catch (error) {
       console.log(error)
       alert("El pokemon que buscas no existe , revisa el nombre ")
    }

  }

  useEffect(() => {

    getData()

    return () => {
      setImg('');
    };
  }, []);

  return <div> 
    {img ? <img src={img} alt={"poke-image"} /> : <h1>Cargando... </h1>}
    <input onChange={(e) => setSearch(e.target.value.toLowerCase())} type="text" name="" id="" />
    <button onClick={() => getData(search)} >Buscar</button>
  </div>;
};

export default ApiConsume;
