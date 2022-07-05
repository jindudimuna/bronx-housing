import React from "react";



function Review({remark, name, avatar}){
    return(

        <section>
       <div className="card">
      
      <img src={`./images/${avatar}`} className="avatar" alt="user" />
      <p className="feedback">{remark}</p>
      <p className="name">{name}</p>

  </div>
        </section>
    

     
    )
}

export default Review;