import './App.css';
import { useEffect, useState } from 'react'
import Header from '../Header/Header'
import Articles from '../Articles/Articles'
import { getArticles } from '../../apiCalls'

const App = () => {
  const [articles, setArticles] = useState()
  const [todaysDate, setTodaysDate] = useState()

  useEffect(() => {
    getArticles()
      .then(data => {
        setArticles(data)
        setTodaysDate(data.last_updated)
      })
  }, [])

  return (
    <>
    <Header todaysDate={todaysDate}/>
    <Articles articles={articles}/>
    </>
  )
}

export default App;
