import './Card.css'

const Card = ({ title, author }) => {
  return (
    <section className='card'>
      <h4>{title}</h4>
      <p>{author}</p>
    </section>
  )
}


export default Card;
