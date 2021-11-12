import './DetailedView.css'
import { useEffect, useState } from 'react'
import { getArticles } from '../../apiCalls'
import { useParams } from 'react-router-dom'

const DetailedView = ({ articles }) => {

  const [selectedArticle, setSelectedArticle] = useState()
  const [loading, setLoading] = useState(true)
  let { title } = useParams()

  useEffect(() => {
    getArticles()
      .then(data => {
        data.results.filter(result => {
          if (result.title === title)
          {
            setSelectedArticle(result)
            setLoading(false)
          }
        })
      })

  }, [])




  return (
<>
{console.log("selectedArticle", selectedArticle)}
  { selectedArticle && !loading ?
    <section className="the-details">
      <div className="the-details-card">
        <h1 className="heading-details">{ selectedArticle.title }</h1>
        <h5 className="author"> {selectedArticle.byline}</h5>
        <img src={selectedArticle.multimedia[0].url}/>
        <h3 className="abstract"> {selectedArticle.abstract}</h3>
        <a className="url" href={selectedArticle.url}>Read full article here</a>
      </div>
    </section> :
      null
}
  </>
)
}


export default DetailedView
