import './Search.css'

const Search = ({ filterArticles, setSearchInput, searchInput}) => {

  const handleChange = event => {
    event.preventDefault()
    setSearchInput(event.target.value)
    filterArticles(event)
  }

  return (
    <div className='search-container'>
      <input
        className='search-bar'
        type='text'
        placeholder='search articles'
        name='search'
        value={searchInput}
        onChange={event => handleChange(event)}
      />
    </div>
  )
}


export default Search;
