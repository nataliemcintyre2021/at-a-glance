import './Header.css'

const Header = () => {
  return (
    <>
    <header>
      <section className="app-title">
        <h1 className="title">At a Glance</h1>
        <h3 className="tag-line">Top NY Times stories in Art</h3>
      </section>
      <section className="header-date">
        <h4>today's date</h4>
      </section>
    </header>
    <hr className="line-break"/>
    </>
  )
}



export default Header;
