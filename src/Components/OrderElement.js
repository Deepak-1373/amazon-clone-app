import React from 'react';
import "./OrderElement.css";
import moment from "moment";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from 'react-currency-format';

function OrderElement({ order }) {
    return (
        <div className="orderElement">
            <h2>Order Placed</h2>
            <p>{moment.unix(order.data.created).format('MMMM Do YYYY, h:mma')}</p>
            <p className="orderElement__id">
                <small>{order.id}</small>
            </p>
            {order.data.basket?.map(item => (
                <CheckoutProduct 
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    hideButton
                />
            ))}
            <CurrencyFormat
                renderText={(value) => (
                    <h3 className="orderElement__total">Order Total: {value}</h3>
                )}
                decimalScale={2}
                value={order.data.amount / 100} 
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
        </div>
    )
}

export default OrderElement
