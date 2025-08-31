import search_img from "../assets/Images/search.png"
function Search(){
   return(
     <div className="search">
        <input type="text" placeholder="Search..."></input>
        <img src={search_img} alt="search_img"></img>
    </div>
   )
}
export default Search