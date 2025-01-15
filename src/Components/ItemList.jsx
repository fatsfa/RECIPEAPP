import style from "./ingredients.module.css"
export default function ItemList({food, isLoading}){
    return <div  className= {style.ingredients}> 
        {isLoading? <p> Loading ...</p>: food.extendedIngredients.map((item)=> ( 
                <div>
                    <ul>
                <li> {item.name} {item.amount} {item.unit}</li>
                </ul> 
                </div>) )}
        
    </div>

}