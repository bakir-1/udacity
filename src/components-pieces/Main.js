import { Link } from "react-router-dom"
import Backbone from "./Backbone"
const Main = ({bookShelves,createBook}) => {
  return(

  
    <div className="list-books">
  <div className="list-books-title">
      <h1>MyReads</h1>
    </div>    <div className="list-books-content">
      <Backbone bookShelves={bookShelves} createBook={createBook} />

      {/* search part */}
    </div>
    <div className="open-search">
      <Link to="/list" ></Link>
    </div>
  </div>
  )
}

export default Main