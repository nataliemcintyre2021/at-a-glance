import './App.css';
import { useEffect, useState } from 'react'
import Header from '../Header/Header'
import Articles from '../Articles/Articles'
import DetailedView from '../DetailedView/DetailedView'
import { getArticles } from '../../apiCalls'
import { Route, Routes, useParams } from 'react-router-dom'

const App = () => {
  const [articles, setArticles] = useState()
  const [todaysDate, setTodaysDate] = useState()


  useEffect(() => {
    getArticles()
      .then(data => {
        setArticles(data)
        setTodaysDate(data.last_updated.slice(0, 10))
      })
  }, [])

  return (
    <>
    <Header todaysDate={todaysDate}/>
    <Routes>
      <Route exact path="/" element={<Articles articles={articles}/>} />
      <Route exact path="/:title" element={<DetailedView articles={articles}/> }/>
    </Routes>
    </>
  )
}

export default App;
