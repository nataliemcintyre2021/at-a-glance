import './Card.css'

const Card = ({ title, author, time, image }) => {
  return (
    <section className='card'>
      <h4>{title}</h4>
      <p>{author}</p>
      <p>{time}</p>
      <image src={image}/>
    </section>
  )
}


export default Card;
