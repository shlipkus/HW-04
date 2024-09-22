import React from 'react';
import { getRecId } from '../loaders';
import { useLoaderData } from 'react-router-dom';
import '../styles/rec.css'

export async function recLoader({ params }){
    const data = await getRecId(params.recipeId)
    return data
}

function Recipe(){
    const data = useLoaderData().data;
    console.log(data)
    return (
        <div className='list'>
            <h1>{data.name}</h1>
            <pre className='text-style'>{data.cooking}</pre>
        </div>
    )
}

export default Recipe;