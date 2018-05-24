import React from "react";

export default class Form extends React.Component {
  state = {
    name: "",
    desc: "",
    price: "",
    quantity: "",
  };

  change = e => {
    this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    // this.props.onSubmit(this.state);
    this.setState({
      name: "",
      desc: "",
      price: "",
      quantity: "",
    });
    this.props.onChange({
      name: "",
      desc: "",
      price: "",
      quantity: "",
    });
  };

  render() {
    return (
      <form>
        <input
          name="name"
          placeholder="Name"
          value={this.state.name}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name="desc"
          placeholder="Description"
          value={this.state.desc}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name="price"
          placeholder="Price"
          value={this.state.price}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name="quantity"
          placeholder="Quantity"
          value={this.state.quantity}
          onChange={e => this.change(e)}
        />
        <br />
        <br />
        <button onClick={e => this.onSubmit(e)}>Submit</button>
      </form>
    );
  }
}
