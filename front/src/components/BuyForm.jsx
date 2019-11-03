import React from 'react';
import Flavor from '../components/Flavor';

const BuyForm = (props) => {
  return (
    <div>
  <ol><li>
  <h2 className="color4">CHOOSE YOUR PLAN</h2>

  <div className="grilla" >
    <div><input type="image" src="https://www.saboresdemihuerto.com/wp-content/uploads/2014/11/Sopa-de-Tortilla.jpg" width="250px" height="250px"></input></div>
    <div><input type="image" src="https://www.saboresdemihuerto.com/wp-content/uploads/2014/11/Sopa-de-Tortilla.jpg" width="250px" height="250px"></input></div>
    <div><input type="image" src="https://www.saboresdemihuerto.com/wp-content/uploads/2014/11/Sopa-de-Tortilla.jpg" width="250px" height="250px"></input></div>
  </div>
  </li>


  <li><h2 className="color4">CHOOSE YOUR FRECUENCY</h2>

  <div className="stepTwo">
    <form className="aa"><h4 className="color1">DELIVER EVERY {" "}
    <select>
      <option default value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </select> {" "}
    WEEKS</h4></form>
  </div>
  </li>
  <br></br>
  <li>
  <h2 className="color4">CHOOSE FLAVORS</h2>
  </li><br></br></ol>
  <div className="grilla">
  {props.flavors.map((p,i)=>(<Flavor  key={i} image={p.imageurl} ></Flavor>))}
  </div>

  <div className="btn-container">
    <button type="button" class="btn btn-lg color5">ORDER NOW</button>
  </div>
  </div>
  )
}

export default BuyForm;

