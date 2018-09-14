import React from 'react'
import fetch from 'isomorphic-unfetch'

export default class extends React.Component {
  static async getInitialProps({ req }) {
    if (!req.query) return { result: [] };
    const { first, last } = req.query;
    const response = await fetch(`http://localhost:3000/calculate?first=${first}&last=${last}`);
    const { result } = await response.json();
    return { result };
  }

  render() {
    const { result } = this.props;
    return (
      <div>
        WORD CHAIN
        {!result && (
          <h1>Complete fields</h1>
        )}
        <ul>
          {result.map(obj => (
            <li key={obj}>{obj}</li>
          ))}
        </ul>
      </div>
    )
  }
}