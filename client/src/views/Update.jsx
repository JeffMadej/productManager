import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';
import ProductForm from '../components/ProductForm';

const Update = ({id}) => {
    const [product, setProduct] = useState();
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState({});
   

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                setProduct(res.data);
                setLoaded(!loaded);
            })
    }, [])

    const updateProduct = product => {
        console.log(1, product)
        axios.put(`http://localhost:8000/api/products/update/${id}`, product)
            .then(res => {
                console.log(res);
                if(res.data.errors) {
                    setErrors(res.data.errors);
                }
                console.log(4, res);
                navigate(`/${id}`);
            })
            .catch(err => console.log(err))
    }
    return(
        <div className="col-6 mx-auto">
            <h1 className="p-6 m-4">Update Product:</h1>
            {
                loaded && (
                    <ProductForm onSubmitProp={updateProduct}
                    initTitle={product.title}
                    initPrice={product.price}
                    initDescription={product.description}
                    initErrors={product.errors}
                    buttonName="Update"
                    buttonClass="btn btn-primary"/>
                )
            }
        </div>
    )
}

export default Update;