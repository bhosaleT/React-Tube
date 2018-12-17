import React from "react";

export default class SearchBar extends React.Component {
  state = { query: "" };

  onInputChange = e => {
    this.setState({
      query: e.target.value
    });
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onTermSubmit(this.state.query);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} action="" className="ui form">
          <div className="field">
            <label>React-Tube Search</label>
            <input
              type="text"
              value={this.state.query}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}
