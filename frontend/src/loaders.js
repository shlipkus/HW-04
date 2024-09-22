import axios from 'axios';

export async function getCategories(id=""){
    const data = axios.get("http://127.0.0.1:8000/categories/"+id).catch((error)=>console.log('Error', error.message))
    return  data
}

export async function getRecipes(param){
    const data = axios.get("http://127.0.0.1:8000/recipes/"+"?categories="+param).catch((error)=>console.log('Error', error.message))
    return data
}

export async function getRecId(id=""){
    const data = axios.get("http://127.0.0.1:8000/recipes/"+id).catch((error)=>console.log('Error', error.message))
    return data
}