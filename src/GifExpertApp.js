import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];

    const [categories, setCategories] = useState(['One Punch']);
    // const handleAdd = () => {
    //     // setCategories(categories.push(hunter)); NO
    //     // setCategories(categories.concat(hunter)); MIO NO RECOMENDABLE
    //     // setCategories(['HunterXHunter', ...categories]);     SI
    //     setCategories(cats => [...cats, 'HunterXHunter']);   //SI
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr></hr>
            {/* <button onClick={handleAdd}>Agregar</button> */}
            <ol>
                {
                    categories.map((category, i) =>
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    )
                }
            </ol>
        </>
    );
}
