import './Articles.css'
import Card from '../Card/Card'

const Articles = ( { articles }) => {

if (articles) {
  const articleCards = articles.results.map(card => {
    return (
      <Card
        title={card.title}
        author={card.byline}
        time={card.updated_date}
        image={card.multimedia[1].url}
      />
    )
  })
  return (
    [articleCards]
  )
} else {
  return (
    null
  )
}




}


export default Articles
