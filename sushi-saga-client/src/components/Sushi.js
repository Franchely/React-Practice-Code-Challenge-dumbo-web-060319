import React, { Fragment } from 'react'
import SushiContainer from "../containers/SushiContainer"
import App from "../App"

const Sushi = (props) => {

  const eatSushi = () => {
    
    props.sendSushi(props.sushi)
    
  }

 

  
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={eatSushi}>
        { 
          props.eaten.includes(props.sushi.id)
           ?
            null
          :
          <img src={`${props.sushi.img_url}`} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
  )
}

export default Sushi