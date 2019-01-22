import React from 'react'

class AddItem extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      products: props.products,
      submitFunction: props.submitFunction,
      quantity: 0,
      item: props.products[0]

    }
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
    this.handleItemChange = this.handleItemChange.bind(this);
    this.addToCart = this.addToCart.bind(this)
  }
  handleQuantityChange(e){
    this.setState({quantity: parseInt(e.target.value)})
    console.log(this.state)
  }
  handleItemChange(e){
    let item = this.state.products.filter(item=>item.id==e.target.value)[0]
    console.log(e.target.value)
    this.setState({item: item })
  }
  addToCart(e){
    let item = {
        product: this.state.item,
        quantity: this.state.quantity
      }
      console.log(item.product)
      e.preventDefault()
      this.state.submitFunction(item)
  }
  render () {
    return(
      <div className = 'container'>
        <div className="row">
          <div className = 'col-md-12'>
            <form onSubmit = {this.addToCart}>
              <div className = 'form-group'>
                Quantity:
                <input className = 'form-control' type = 'number' onChange = {this.handleQuantityChange}/>
                Products:
                <select className = 'form-control' onChange = {this.handleItemChange} placeholder = ''>
                  {this.state.products.map((product=>{
                    return <option value = {product.id} key= {product.id}>{product.name} ({product.priceInCents / 100})</option>
                  }))}
                </select>
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddItem
