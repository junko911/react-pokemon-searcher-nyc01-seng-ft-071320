import React from 'react'

const Search = props => {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value={props.searchTerm} onChange={props.getSearchTerm}/>
        <i className="search icon" />
      </div>
    </div>
  )
}

export default Search
