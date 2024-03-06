import styles from "./item.module.css"

export default function Item({item}){
    return (
        <div className={styles.itemContainer}>

            <div>        
                <img className={styles.image} src={`https://spoonacular.com/cdn/ingredients_100x100/`+ item.image} alt=""></img>
            </div>   
            
            <div className={styles.nameContainer}> 
                <div className={styles.name}> {item.name} </div> 
                <div className={styles.amount}> {item.amount}{item.unit} </div> 
            </div>
                    
        </div>
    )
}