import { useEffect, useState } from "react"
import styles from "./search.module.css"

const URL="https://api.spoonacular.com/recipes/complexSearch"


export default function Search({foodData, setFoodData}){

    const [query, setQuery] = useState("");

//FOR CALLING THE API
    useEffect(() => {
        async function fetchFood() {
            const res = await fetch(`${URL}?query=${query}&apiKey=${import.meta.env.VITE_APP_API_KEY}`);
            const data = await res.json();
            console.log(data.results);
            setFoodData (data.results);


        }
        fetchFood()
    }, [query])

    return (
        <div className={styles.searchContainer}>
            <input className={styles.input} value={query} onChange={(e)=> setQuery(e.target.value)} type="text" />
        </div>
    )
}