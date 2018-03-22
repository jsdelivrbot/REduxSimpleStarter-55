import React from 'react';


class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { term: '' }

  }
  render() {
    return (
      <div>
        <input
          onChange={event => this.setState({ term: event.target.value })} />
        <br />
        {/* Value of input :{this.state.term} */}
      </div>
    );
  }


}

export default SearchBar;