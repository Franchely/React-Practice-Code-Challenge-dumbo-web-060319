import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi, {Component} from "../components/Sushi"
import App from "../App"


const SushiContainer = (props) => {
 console.log(props)

  const renderSushi = () => {
    return props.sushi.map(sushi => {
     return <Sushi money={props.money} sendSushi={props.sendSushi} eaten={props.eaten} sushi={sushi}/>
    });
  }

  return (
    <Fragment>
      <div className="belt">
        {
          renderSushi()
        }
        <MoreButton handleMoreButton={props.handleMoreButton}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer