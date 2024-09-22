import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../components/Navbar';
import { getCategories } from '../loaders';

export async function catLoader(){
    const data = await getCategories();
    return { data }
}

function Root(){
    return (
        <div>
            <NavigationBar />
            <Outlet />
        </div>
    )
}

export default Root;