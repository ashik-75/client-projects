import { TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'
import Product from '../components/Product';
import Products from '../components/Products';
import Search from '../components/Search';
import { useGetProductsQuery } from '../store/funApi'

const TestScreen = () => {
    // const {data,isLoading,isError} = useGetProductsQuery();
    // console.log(isLoading? "loading...": "not loading...");
    // console.log(data);
    const [search,setSearch] = useState("");
    const [result,setResult] = useState([]);

    const {data:products,isLoading} = useGetProductsQuery();

    useEffect(()=>{
        if(products.length > 0){

            const rs = products.filter(dt=> dt.title.toLowerCase().includes(search))
            setResult(rs);
        }

    },[search])
    return (
        <div>
            {/* {isLoading ? "loading..":(

            <ul>
                {data.map(dt => (

                <li key={dt.id}>{dt.title}</li>
                ))}
            </ul>
            )} */}
            result is here - {JSON.stringify(result)}

            {/* <Search /> */}
            <TextField value={search} fullWidth label="fullWidth" id="fullWidth" onChange={(e)=>setSearch(e.target.value)} />
            {/* <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} /> */}

   
            <h1>search input - {search}</h1>

            {result.length>0&& result.map(prod=> (
                <Product prod={prod}/>
            ))}
            
        </div>
    )
}

export default TestScreen
