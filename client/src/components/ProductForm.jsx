import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = ({initTitle, initPrice, initDescription, initErrors, buttonName, onSubmitProp}) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const [errors, setErrors] = useState({});

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({title, price, description, errors});
        setTitle("");
        setPrice(0);
        setDescription("");
        setErrors(initErrors);
        }

    return (
        <div className="container-lg p-2 m-2 bg-info text-white">
            <form className="absolute-center p-2 m-2" onSubmit={onSubmitHandler}>
            
                <div className="form-group">
                    <h1 className="p-2"> Welcome </h1>
                        <label>Title: </label>
                        {errors.title ? 
                        <p>{errors.title.message}</p>:""
        }

                    <input className=""
                        type="text"
                        onChange={e => { setTitle(e.target.value) }}
                        value={title} />
                </div>
                <div className="form-group">
                    <label>Price: </label>
                    {errors.price ? 
                    <p>{errors.price.message}</p>:""
        }

                    <input className=""
                        type="number"
                        value={price}
                        onChange={e => { setPrice(e.target.value) }} />
                </div>
                <div className="form-group">
                    <label>Description: </label>
                    {errors.description ? 
                    <p>{errors.description.message}</p>:""
        }

                    <input className=""
                        type="text"
                        value={description}
                        onChange={e => { setDescription(e.target.value) }} />
                </div>
                <input className="btn btn-info" type="submit" value={buttonName} />
            </form>
        </div>
    )
}

export default ProductForm;