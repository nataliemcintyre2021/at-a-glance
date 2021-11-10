import './Articles.css'
import Card from '../Card/Card'
import Search from '../Search/Search'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const Articles = ({ articles }) => {

  const [filteredArticles, setFilteredArticles] = useState(null)
  const [searchInput, setSearchInput] = useState('')

  const filterArticles = event => {
    const searchWord = event.target.value
    if (searchWord) {
      const foundArticles = articles.results.filter(article => {
        if (article.title.includes(searchWord.toLowerCase())) {
          return article
        }
      })
      setFilteredArticles(foundArticles)
    }
  }

  if (articles) {
    const articleCards = articles.results.map(card => {
      return (
        <>
        <NavLink to={`/${card.title}`} style={{ textDecoration: 'none' }}>
          <Card
            title={card.title}
            author={card.byline}
          />
        </NavLink>
          <hr />
        </>
      )
    })

      const filteredCards = (filteredArticles && filteredArticles.map(card => {
        return (
          <>
          <NavLink to={`/${card.title}`} style={{ textDecoration: 'none'}} >
            <Card
              title={card.title}
              author={card.byline}
            />
          </NavLink>
          <hr />
          </>
        )
      }))

    return (
      <>
      <Search
        filterArticles={filterArticles}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
      {!filteredCards ? [articleCards] : [filteredCards]}
      </>
    )
  } else {
      return (
        null
      )
    }

}


export default Articles
