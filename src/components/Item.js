import React, {Component} from "react";

class Item extends Component {

    buttonClickHandler = () => {
        this.props.addCart(this.props.item)
        window.alert('Item has Been Added to Your Cart!')
    }

    render() {
        const i = this.props.item
    return (
        <div className='card'>
            <p><b>{i.name}</b></p>
            <p>{i.description}</p>
            <h3>${i.price}</h3>

            <button onClick={this.buttonClickHandler}>Add to Cart</button>

            <p>&#x2B50; &#x2B50; &#x2B50; &#x2B50;</p>
            <a href="/reviews">Read All Reviews</a>
        </div>
    )
}
}

export default Item;