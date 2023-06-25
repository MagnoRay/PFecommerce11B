import React from "react";
import styles from "../Paginado/Paginado.module.css"

export default function Paginado({foodsPerPage, foods, paginado,currentPage}){
    const pageNumbers = []

    for(let i = 1; i <= Math.ceil(foods/foodsPerPage); i++){
        pageNumbers.push(i)
    }

    return(
        <nav>
            <ul className={styles.foodList}>
                { pageNumbers &&
                pageNumbers.map(number =>{
                    if(number===currentPage){
                        return (
                            <li className="number" key={number}>
                                <button className={styles.numbersActive} onClick={() => paginado(number)}>{number}</button>
                            </li>
                        )
                    }else{
                        return (
                            <li className="number" key={number}>
                                <button className={styles.numbers} onClick={() => paginado(number)}>{number}</button>
                            </li>
                        )
                    }
                    
                })}
            </ul>
        </nav>
    )
}