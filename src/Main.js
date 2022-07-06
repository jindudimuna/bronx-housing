import React from "react";
// eslint-disable-next-line
import ReactDOM from 'react-dom/client';
// import Pic from "./social-housing-00.jpg"

function Main(){
    return(
        <div className="main">
            <h1 className="text">Thank you for visiting this up-and-coming platform, which will serve as your Bronx centric real estate resource for information about first-time homebuyer programs, housing seminars and lotteries, grants and more in New York City’s most affordable borough – The Bronx!
Sign-up for our e-list and to get information about an upcoming first-time homebuyer seminar led by one of the Bronx’s top real estate advisors, Mable Ivory.
</h1>
{/* <div className="photo">
    <img src={Pic} alt=" Project view" width='330px' height="232px"></img>
</div> */}
<form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>

  <label>
    Email:
    <input type="email" name="Email" />
  </label>

</form>

        </div>
    )
}

export default Main;