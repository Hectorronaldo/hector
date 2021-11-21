// import logo from './logo.svg';
import React from "react";
import './App.css';
import ExterC from './componets/ExterC';
import Pokedex from "./componets/Pokeguardo";
import Searcbar from "./componets/Searcbar";
import { getPokemons } from "./componets/api";

const {useState, useEffect} = React;

export default function App(){
	const [pokemons, setPokemons] = useState([])

	const fetchPokemons = async () => {
		try{
			const data = await getPokemons();
			setPokemons(data.results);
			// console.log(data);
		} catch(err){

		}
	}
	useEffect(() => {
		fetchPokemons ();
		return () => {
			
		}
	}, [])

	return(
		<div>
			<ExterC />
		<div className= "App">
			<Searcbar/>
			<Pokedex pokemons={pokemons} />
		</div>
		</div>
	)
}
