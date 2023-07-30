import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onnAddCategory = (newCategory) =>{
        //Evalua y regresa un valor si no existe
        if(categories.includes(newCategory) ) return; 
        // categories.push(newCategory)
        console.log(newCategory)
    //     //Valorant
        setCategories([newCategory, ...categories])
    //     // setCategories(cat =>[...cat, 'Valorant'])
    }
        return (
            <>
            <h1>GifExpertApp</h1>

            <AddCategory 
            onNewCategory={(value) => onnAddCategory(value)}
            />{
                categories.map(category => (
                    <GifGrid key={category} category={category}/>
                    ))
                }
            </>
        )
}
