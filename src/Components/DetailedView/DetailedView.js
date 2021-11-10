import './DetailedView.css'
import { useEffect, useState } from 'react'
import { getArticles } from '../../apiCalls'
import { useParams } from 'react-router-dom'

const DetailedView = ({ articles }) => {

  const [selectedArticle, setSelectedArticle] = useState()
  let { title } = useParams()

  useEffect(() => {
    console.log("here")
    console.log("title", title)
    getArticles()
      .then(data => {
        data.results.filter(result => {
          if (result.title === title)
          {
            console.log("TITLE", title)
            setSelectedArticle(result)
          }
        })
      })
  }, [])




  return (
<>
  { selectedArticle ?
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
