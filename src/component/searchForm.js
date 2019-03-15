import React from 'react';

const SearchForm = (props) => {
  return(
    <form onSubmit={props.handleSubmit}>
      Search with a Github Username (e.g.: mojombo ):
      <br/>
      <input
        type="text"
        id="search"
        value={props.search}
        onChange={props.handleChange}
      />
      <br/>
      <input type="submit" value="Search!" />
    </form>
  )
}


export default SearchForm;
