import React, { Component } from 'react';

export default class Input extends Component {
  state = {
    name: '',
    tag: '',
  };

  handleNameChange = event => {
    // console.log(event.target.value);

    this.setState({ name: event.target.value });
  };

  handleTagChange = event => {
    // console.log(event.target.value);

    this.setState({ tag: event.target.value });
  };

  handleChange = event => {
    // console.log(event.target);
    // console.log(event.target.name);
    // console.log(event.target.value);

    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    // console.log(this.state)

    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', tag: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Имя{' '}
          <input
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
          ></input>
        </label>
        <label>
          Прозвище{' '}
          <input
            name="tag"
            type="text"
            value={this.state.tag}
            onChange={this.handleChange}
          ></input>
        </label>

        <button type="submit">Отправить форму</button>
      </form>
    );
  }
}
