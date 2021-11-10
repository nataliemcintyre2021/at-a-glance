import './Articles.css'
import Card from '../Card/Card'
import Search from '../Search/Search'
import { useEffect, useState } from 'react'

const Articles = ({ articles }) => {

  const [filteredArticles, setFilteredArticles] = useState(null)
  const [searchInput, setSearchInput] = useState('')

  const filterArticles = event => {
    const { value } = event.target
    if (value.length) {
      const foundArticles = articles.results.filter(article => {
        if (article.title.includes(value.toLowerCase())) {
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
        <Card
          title={card.title}
          author={card.byline}
          time={card.updated_date}
          image={card.multimedia[0].url}
        />
        <hr />
        </>
      )
    })

      const filteredCards = (filteredArticles && filteredArticles.map(card => {
        return (
          <>
          <Card
            title={card.title}
            author={card.byline}
            time={card.updated_date}
            image={card.multimedia[0].url}
          />
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
