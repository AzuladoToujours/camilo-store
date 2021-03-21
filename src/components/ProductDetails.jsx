import React from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import NumberFormat from 'react-number-format';
import actions from '../actions';
import getProduct from '../hooks/getProduct';
import '../styles/components/ProductDetails.styl';

const ProductDetails = (props) => {
  const { id } = useParams();
  const product = getProduct(id);
  let discount;
  let loading = true;

  const isFreeShipping = () => {
    let freeShipping;
    product.shipping.free_shipping ? freeShipping = true : freeShipping = false;
    return freeShipping;
  };

  const calculateDiscount = (price, originalPrice) => {
    return Math.round(parseInt(100 - (+price * 100) / +originalPrice, 10));
  };

  const handleAddToCart = product => () => {
    props.addToCart(product);
  };

  if (product !== undefined) {
    loading = false;
    if (product.original_price) {
      discount = calculateDiscount(product.price, product.original_price);
    }
    console.log(product);
  }

  return (
    <div>
      {!loading && (
        <div className="product-details-container">
          <div className="product-details-header">
            <img src={product.pictures[0].secure_url} alt="" />
          </div>
          <div className="product-details-body">
            <h1>Información general</h1>
            <h3>{product.title}</h3>
            {product.original_price ? (
              <div className="prices">
                <p className="original-price">
                  $
                  {' '}
                  {product.original_price}
                  {' '}
                  {product.currency_id}
                </p>
                <span>
                  <NumberFormat value={product.price} displayType="text" thousandSeparator={true} prefix="$" suffix={product.currency_id} />
                </span>
                <span className="discount">
                  {' '}
                  {discount}
                  %OFF
                </span>
              </div>
            ) : (
              <p className="normal-price">
                <NumberFormat value={product.price} displayType="text" thousandSeparator={true} prefix="$" suffix={product.currency_id} />
              </p>
            )}
            {isFreeShipping() && (
              <p className="shipping">
                <i className="fas fa-truck" />
                Envío gratis
              </p>
            )}
            <button className="button" type="button" onClick={handleAddToCart(product)}>Agregar al carrito</button>
            <p>
              Cantidad disponible:
              {' '}
              {product.available_quantity}
            </p>
          </div>
          <div className="product-details-footer">
            <h2>Información del producto</h2>
            <div className="product-info">
              {product.attributes.map(attribute => (
                <div key={attribute.id}>
                  <h4>{attribute.name}</h4>
                  <p>{attribute.value_name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const mapDispatchToProps = {
  addToCart: actions.addToCart,
};

export default connect(null, mapDispatchToProps)(ProductDetails);

