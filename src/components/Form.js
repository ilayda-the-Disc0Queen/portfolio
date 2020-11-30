import React from 'react';
import './stylesheets/Form.scss';

class Form extends React.Component {
  state = { term: ''};

  onFormSubmit(event) {
    event.preventDefault();
  }

  render () {
    return (
      <div className="ui container">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label htmlFor="">Get in touch</label>
            <input type="text"
              value={this.state.term}
              onChange={(event) => this.setState({term: event.target.value})}/>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
