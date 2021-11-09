import './Articles.css'
import '../Card/Card'

const Articles = ( { articles }) => {

  const articleCards = articles.results.map(card => {
    return (
      <Card
        key={Date.now()}
        title={card.title}
        author={card.byline}
        time={card.updated_date}
        image={card.multimedia[1].url}
      />
    )
  })

  return (
    {articleCards}
  )
}


export default Articles
