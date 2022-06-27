import React from "react";
import Card from "../Card/Card";

const Main = (props) => {
    console.log(props);
    return<>
        <div className='Header'>
        <div className={props.c1} id='here'>
          NEW PROPERTIES
          <span className={props.c2}>FOR SELL</span>
        </div>
        <div className='parent'>
          <div className='cards'>
            <Card />
           
          </div>
          <button className={props.c3}>View More</button>
        </div>
      </div>
    </>
}

export default Main;