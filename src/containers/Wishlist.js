import React from 'react'
import ListItem from './ListItem'

const Wishlist = (props) => {
  const wishlist = props.data.places.map((place) => {
    let ident = place.id
    let handleClick = () => props.handleClick(ident)
    let className= (props.clickedPlaces.includes(ident) ? "strike" : "")

    return(
      <ListItem
        key={ident}
        place={place.name}
        handleClick={handleClick}
        className={className}
      />
    )
  })

  return(
    <ul>
      {wishlist}
    </ul>
  )
}

export default Wishlist
