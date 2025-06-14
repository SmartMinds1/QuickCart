import React from "react";
import "../styles/about.css";

const About = ()=>{
    return(
        <div className="about">

    {/*  section1 */}
          <div className="div1">
            <div className="aboutUs">
                <div className="abth1">
                  <h1>Who are <span>we?</span> </h1>
                </div>
                <div className="abtp">
                  <p>
                    Driven by passion, Bulit for quality. 
                    Our mission and value is to facilitate a 
                    Seamless shopping platform which offers quality
                    items that are within budget</p>
                    <br />

                  <p>
                  With a user-friendly platform, responsive support, and a dedication to customer satisfaction, we aim to make every purchase feel simple, secure, and rewarding.</p>
                </div>
            </div>
            <div className="introImage">
              <div className="introImgCaption"><p><span>QUICK</span> & <span>QUALITY</span>  shopping</p></div>
            </div>
          </div> 

    {/*  section2 */}
          <div className="div2">
               <h1>Our <span> story </span></h1>
                <p>
                  Quick Cart started as a simple by the road idea. We started with a basic store which gradually grew over time.
                  We were goal driven and self motivated. our enviroment was ecouraging , this enables us to flaurish, souring to the great heights.
               </p>
          </div>

    {/*  section3 */}
          <div className="div3">
                <div className="vision">
                    <h3>Our Vision </h3>
                    
                    <p>To become the go-to e-commerce platform for smart, seamless shopping across Africa and beyond—empowering sellers, delighting buyers, and reshaping digital retail.</p>
                </div>
                <div className="mission">
                    <h3>Our Mission</h3>
                    <p>To make online shopping faster, simpler, and more enjoyable for everyone—by combining smart technology with exceptional customer care</p>
                </div>
          </div>

     {/*  section4 */}
          <div className="div4">
            <h3> What Makes <span> Us Different!</span> </h3>
            <p>
              QuickCart is built for speed, simplicity, and trust. We offer a curated selection of quality products, real-time order tracking, secure payments, and responsive customer support. With a seamless shopping experience from checkout to delivery, we prioritize your convenience every step of the way.</p>
          </div>

         {/*  section 5 */}
          <div className="div5">
            <h3>| Our team</h3>
            <div className="teamImages">
              <div className="member1 mb"></div>
              <div className="member2 mb"></div>
              <div className="member3 mb"></div>
            </div>
          </div>
        </div>
    );
}

export default About;
