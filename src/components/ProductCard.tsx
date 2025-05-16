import React from 'react'

type Product = {
    nombre: string;
    precio: number;
    estado: string;
    img: string;
}

type ProductCardProp = {
    product: Product
}
    
export const ProductCard = ({product}: ProductCardProp) => {
  return (
    <>
        <div className='card'>
            <div>
                <image href={product.img} />
            </div>
            <div>
                <h3>{product.nombre}</h3> <h3>{product.estado}</h3> 
                <h3>{product.precio}</h3>
            </div>
        </div>
    </>
  )
}
