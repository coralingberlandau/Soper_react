import React, { useEffect, useState } from 'react'

const Soper = () => {
    const products = [{ id: 1, desc: "bamba", price: 10 },
    { id: 2, desc: "cola", price: 15 },
    { id: 3, desc: "vanila", price: 7 },
    { id: 4, desc: "banana", price: 12 },
    { id: 5, desc: "apple", price: 4 },
    { id: 6, desc: "ice-cream", price: 27 }]

    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)

    const add = (pro, deltaAmount) => {
        console.log(pro, deltaAmount);
        
        let tempProduct = cart.filter(prod => prod.id == pro.id)[0]
        

        if (tempProduct) {
            tempProduct.amount += deltaAmount
            if (tempProduct.amount == 0) {
                setCart([...cart.filter(prod => prod.id != pro.id)])
            }
            else {
                setCart([...cart])
            }
        } else {
            pro.amount = 1
            setCart([...cart, pro])
        }
    }

    useEffect(() => {
        let temp = 0
        cart.forEach(each => temp += each.price * each.amount)
        setTotal(temp)
        console.log(cart);
        
    }, [cart])

    return (
        <div>

            <h1> Soper </h1>

            {products.map((product) => (<div key={product.id}>
                Product: {product.desc}, Price: {product.price} &nbsp;
                <button onClick={() => add(product, 1)}> Add </button>
            </div>))}
            <hr/>


            <h2> Cart: </h2>
            {cart.length <= 0 ? <h2> The cart is empty.... </h2> : <h2> Do you have {cart.length} products. Only {total} </h2>}
            {cart.map((item, index) => (<div key={index}> 
                Product: {item.desc}, Price: {item.price}, Amount: {item.amount}
                <button onClick={() => add(item, -1)}> - </button>
                <button onClick={() => add(item, 1)}> + </button>

            </div>))}
        </div>
    )
}

export default Soper