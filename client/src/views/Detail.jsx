import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';
import Delete from '../components/Delete';

const Detail = ({id}) => {
    const [loaded, setLoaded] = useState(false);
    const style = {
        fontWeight: 'bold'
    }
    const [product, setProduct] = useState({});
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                setProduct({...res.data});
                setLoaded(!loaded);
            })
    }, [])

    const onEditHandler = e => {
        e.preventDefault();
        navigate(`/${product._id}/edit`);
    }

    return(
        <div className="col-6 mx-auto">
            <h1><span style={style}>{product.title}</span></h1>
            <h4><span style={style}>Price:</span> ${product.price}</h4>
            <h4><span style={style}>Description:</span> {product.description}</h4>
            <button className="btn btn-outline-dark p-6 m-2" onClick={onEditHandler}>Edit</button>
            <Delete productId={product._id} removeFromDom={null}/>
        </div>
    )
}

export default Detail;