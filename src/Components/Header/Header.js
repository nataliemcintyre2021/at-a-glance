import './Header.css'
import App from '../App/App'

const Header = ({ todaysDate }) => {
  return (
    <>
    <header>
      <section className="app-title">
        <h1 className="title">At a Glance</h1>
        <h3 className="tag-line">Top NY Times stories in the Arts</h3>
      </section>
      <section className="header-date">
        <h4>{todaysDate}</h4>
      </section>
    </header>
    <hr className="line-break"/>
    </>
  )
}



export default Header;
