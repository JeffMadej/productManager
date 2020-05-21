
import React, {useState, useEffect} from 'react';
import { Link } from '@reach/router';
import Delete from './Delete';

const ProductList = ({removeFromDom, products}) => {
    return(
        <div className="col-6 mx-auto m-3">
            <table className="table p-2">
                <thead className="thead-dark">
                    <tr>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {
                    products.map((p, idx) => {
                        return(
                            <tr key={idx}>
                                <td><Link to={p._id}>{p.title}</Link></td>
                                <td>${p.price}</td>
                                <td><Delete productId={p._id} removeFromDom={removeFromDom}/></td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>

        </div>
    )
}

export default ProductList;