import React from 'react';
import {  useLoaderData } from 'react-router-dom';
import "../styles/cat.css";
import ListGroup from 'react-bootstrap/ListGroup';


function Categories() {
    const { data } = useLoaderData();
    console.log(data)
    return (
        <div className="list">
        <ListGroup>
            {data.data.length ? data.data.map(item => <ListGroup.Item action href={`categories/${item.id}`}>{item.name}</ListGroup.Item>): <h2>Здесь пока ничего нет.</h2>}
        </ListGroup>
        </div>
    )
}

export default Categories;