import React from 'react';
import '../Styles/Card.css'

const Card = ({trip}) => {

  const {image, name, desc, price, activities} = trip;

  return (
    <article className='card__container'>
      <img className='card__container--img' src={image} alt={name} />
      <div className='card__details'>
        <div className='card__details--title'>
          <h3>{name}</h3>
          <p>{desc}</p>
          <ul>
            {
              activities.map((act, i) => (
                <li key={i}>
                  {act}
                </li>
              ))
            }
          </ul>
        </div>
        <div className='card__details--bottom'>
          <span className='card__details--last-price'>5.500 EUR</span>
          <span className='card__details--price'>{price} EUR</span>
          <button className='card__details--visit'>Visit</button>
        </div>
      </div>
    </article>
  )
}

export default Card;
