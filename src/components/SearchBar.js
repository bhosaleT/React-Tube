import React from "react";

export default class SearchBar extends React.Component {
  state = { query: "" };

  onInputChange = e => {
    this.setState({
      query: e.target.value
    });
  };

  onFormSubmit = (e) => {
    e.preventDefault();

    //TODO: make sure we call the callback function passed on from the parent function.
  }

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} action="" className="ui form">
          <div className="field">
            <label>Video Search</label>
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
