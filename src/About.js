import React from "react";
import Profile from './profile.jpg';


function About(){
    return(
        <div>
       <div className="about-title">
            <img src={Profile} alt="about" width='330px' height="300px" className="profile"></img>
            <h1 className="about-head">About Mable Ivory</h1>
         
        </div>
        <div>
            <h1 className="text"> Mable’s real estate career has spanned over a decade. 
                As a Diamond Elite real estate advisor at Engel & Völkers NYC, 
                her expertise and impressive real estate portfolio includes a focus on the Bronx,
                 outer boroughs and Westchester County. Mable Ivory has been one of the top selling realtors 
                 in the Grand Concourse area of the South Bronx for nearly 20 years.
                 With her impeccable reputation, Mable demonstrates a relentless commitment to her clientele.
                  She has been hailed as a trusted and relatable agent who delivers a tailored approach, designed to 
                  exceed each client's needs and expectations.  
               </h1>

               <h1 className="text">
                Mable’s understanding of the New York market, as well as her love for the energy and diversity of its people and neighborhoods, has made her a noted expert for media outlets, including The New York Times and New York Post.
                Prior to finding her passion for real estate, Mable enjoyed a successful career as a Marketing and Media Executive at Time Inc. In addition, she served as a content creator and cultural commentator with published writings in The Huffington Post, EBONY.com and ESSENCE.com


            </h1>

            <h1 className="text">Mable is a proud graduate of New York University's prestigious Stern School of Business. </h1>
                </div>
        </div>
 
        
    )
}

export default About;