import './card.styles.css'


{/* <img
		  alt={`monster ${name}`}
		  src={`https://robohash.org/${id}?set=set2&size=180x180`}
		/> */}

const Card = () => {
  return (
    <div className='card-container'>
      <img src='http://robohash.org/1?set=set2&size=180x180' />
      <h2>Apple Friend</h2>
      <p>Apple@gmail.com</p>
    </div>
  )
}

export default Card;


