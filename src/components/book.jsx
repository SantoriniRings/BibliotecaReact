import React from 'react'
import { Link } from 'react-router-dom'

const Book = ({ item }) => {

    const bookContainerStyle = {
        display: "flex",
        flexDirection: "column",
        width: "300px"
    }

    const bookStyleInfo = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        color: "white",
        textDecoration: "none"
    }

  return (
    <div style={bookContainerStyle}>
        <Link to={`/view/${item.id}`} style={bookStyleInfo}>
            <img src={item.cover} width="200" alt={item.title} />
            <div>{item.title}</div>
        </Link>
    </div>
  )
}

export default Book