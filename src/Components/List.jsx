import React from 'react'

function List(props) {
    const {products} = props;
  return (
    <div>
        <h2><h2>Dressiva</h2></h2>
        {products.map((product)=>(
            <div>
                <ul>
                {product.no}.
                <li>Name : {product.name}  </li>
                 <li>Cost : {product.price} </li>
               <li><img src={product.imageUrl} style={{height:"90px",weight:"70px"}} alt={product.name}/></li>
                </ul>
            </div>
        ))}
    </div>
  )
}

export default List;