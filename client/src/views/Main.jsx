import React, { useState, useEffect } from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import axios from 'axios';

const Main = () => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState(0);


    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(res => {
                setProducts(res.data);
                setLoaded(true);
            })
            .catch(err => console.log("Error: ", err))
    }, []);

    const createPerson = product => {
        console.log(1, product);
        axios.post("http://localhost:8000/api/products/create", product)
            .then(res => {
                console.log("Response: ", res);
                if (res.data.errors){
                    console.log(res.data.errors)
                    setErrors(res.data.errors);                
                }
                else {
                    setProducts([...products, res.data]);

                }
            })
            .catch(err => console.log("Error:", err));
    }

    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id !== productId))
    }

    return(
        <div className="col-5 mx-auto">
            <ProductForm onSubmitProp={createPerson} 
                initTitle=""
                initPrice={0}
                initDescription=""
                initErrors={errors}
                buttonName="Create"/>
                
            <br />
            {loaded && <ProductList products={products} removeFromDom={removeFromDom}/>}
        </div>
    )
}

export default Main