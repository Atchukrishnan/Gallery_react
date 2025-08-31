import ReactDOM from "react-dom/client"
import "./style.css"
import dog1 from "./assets/Images/dog_1.jpg"
import dog2 from "./assets/Images/dog_2.jpg"
import dog3 from "./assets/Images/dog_3.jpg"
import dog4 from "./assets/Images/dog_4.jpg"
import dog5 from "./assets/Images/dog_5.jpg"
import dog6 from "./assets/Images/dog_6.jpg"
import dog7 from "./assets/Images/dog_7.jpg"
import dog8 from "./assets/Images/dog_8.jpg"

const root = ReactDOM.createRoot(document.getElementById("root"))


function Dogs(props) {
    return (
            <div className="dog">
                <img src={props.dog_img} alt="dog_img" />
                <p>{props.dog_name}</p>
            </div>
        )
}
var dogs = [{ dog_img: dog1, dog_name: "Golden Retriever" }, { dog_img: dog2, dog_name: "German Shepherd" }, { dog_img: dog3, dog_name: "Labrador Retriever" },
{ dog_img: dog4, dog_name: "Pomeranian" }, { dog_img: dog5, dog_name: "Beagle" }, { dog_img: dog6, dog_name: "Bulldog" },
{ dog_img: dog7, dog_name: "Dachshund" }, { dog_img: dog8, dog_name: "Siberian Husky" }
]
root.render(
    <div className="gallery">
        {
            dogs.map(function (items) {
                return <Dogs dog_img={items.dog_img} dog_name={items.dog_name}></Dogs>
            })
        }
    </div>
)