import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { useLoaderData } from 'react-router-dom';
import { getCategories, getRecipes } from '../loaders';

export async function laoderCat({ params }){
    const cat = await getCategories(params.categoryId);
    const rec = await getRecipes(params.categoryId);
    return {cat, rec}
}

function Category(){
    let data = useLoaderData();
    return (
            <div className="list">
                <h3>{data.cat.data.name}:</h3>
                <ListGroup>
                    {data.rec.data.length ? data.rec.data.map(item => <ListGroup.Item action href={`/recipes/${item.id}`}>{item.name}</ListGroup.Item>): <h2>Здесь пока ничего нет.</h2>}
                </ListGroup>
            </div>
        )
}

export default Category;