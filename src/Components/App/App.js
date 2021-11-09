import './App.css';
import { useEffect, useState } from 'react'
import Header from '../Header/Header'
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
    <Header todaysDate={todaysDate}/>
  )
}

export default App;
