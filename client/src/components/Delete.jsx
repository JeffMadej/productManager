import React from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';

const Delete = ({productId, removeFromDom}) => {

    const deleteHandler = () => {
        axios.delete(`http://localhost:8000/api/products/delete/${productId}`)
            .then(res => {
                if(removeFromDom){
                    removeFromDom(productId);
                }
                else{
                    navigate('/');
                }
            })
            .catch(err => console.log(err))
    }
    return(
        <button className="btn btn-danger" onClick={deleteHandler}>Delete</button>
    )
}

export default Delete;
