import { useEffect, useState } from "react"
import style from "./foodDetails.module.css"
import ItemList from "./itemList"

export default function FoodDetails({foodId}){
    const [food, setFood] = useState({})
    const [isLoading, setisLoading] = useState(true)
    const URL = `https://api.spoonacular.com/recipes/${foodId}/information`
    const API_KEY ="92e1b15bc8714a63a7e0710669c8d1e7"

    useEffect(()=>{
        async function fetchFood(){
            const res = await fetch(`${URL}?apiKey=${API_KEY}`)
            const data = await res.json()
            setFood(data)
            console.log(data)
            setisLoading(false)
        }
        fetchFood()
    }, [foodId])
    return( <div>  
    <div className={style.recipeCard}>
            <h1 className = {style.recipeName}>{food.title}</h1>
            <img className={style.recipeImage} src={food.image} alt=""/>
     <div className= {style.recipeDetails}>
     <span> 
        <strong> 🕐 {food.readyInMinutes} Minutes </strong>
     </span>
     <span>
        <strong> {food.vegetarian ? "🥕 Vegetarian" : "🍖 Non Vegetarian"}</strong>  
     </span>
     <span>
        <strong>👪 Serves {food.servings}</strong>
     </span>
     <span>
        <strong> {food.vegan ? "🐮 Vegan" : ""} </strong> 
     </span>
     </div>
     <div >
        <strong> 💲<span> {food.pricePerServing/100} Per Serving</span></strong>
        
     </div>
     <h2> Ingredients</h2>
     <ItemList food={food} isLoading={isLoading}/>
     
    
     <h2> Instructions </h2>
     <div className={style.recipeInstructions}>  
        <ol className={style.recipeInstructionsol}> 
        
        {isLoading ? <p> Loading ...</p> :  food.analyzedInstructions[0].steps.map( (step)=>
            (<li className={style.recipeInstructionsli}>{step.step}</li>)
            )} 
       </ol>
       </div>
     </div>
    </div>)
}
