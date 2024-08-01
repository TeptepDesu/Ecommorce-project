import React, { useContext, useEffect } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'; // Adjust path accordingly

const Product = () => {
    const { all_product } = useContext(ShopContext);
    const { productId } = useParams();

    useEffect(() => {
        console.log('all_product:', all_product);
        console.log('productId:', productId);
    }, [all_product, productId]);

    const product = all_product.find((e) => e.id === Number(productId));

    return (
        <div>
            {product ? (
                <>
                    <Breadcrum product={product} />
                    <ProductDisplay product={product} />
                </>
            ) : (
                <div>Product not found</div>
            )}
        </div>
    );
}

export default Product;
