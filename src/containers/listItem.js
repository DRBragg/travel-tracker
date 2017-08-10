import React from 'react'

const ListItem = (props) => {

  return(
    <li className={props.className} onClick={props.handleClick}>{props.place}</li>
  )
}

export default ListItem
