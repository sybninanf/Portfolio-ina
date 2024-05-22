import React from "react";

<style>
  
</style>


function AboutCard() {
  return (
    <section class = "skills container">
      <div class = "row">
        <div class = "item">
          <div class = "item-text">
            <span>Kotlin</span> 
            {/* <strong className="purple"class = "w-90">90%</strong> */}
      
          </div>
          <div class = "progress">
            <div class = "progress-bar w-90"></div>
          </div>
        </div>

        <div class = "item">
          <div class = "item-text">
            <span>Flutter</span>
            {/* <strong className="purple" class = "w-75"> 75%</strong> */}
           
          </div>
          <div class = "progress">
            <div class = "progress-bar w-75"></div>
          </div>
        </div>

        <div class = "item">
          <div class = "item-text">
            <span>Laravel</span>
            {/* <span class = "w-85"> 85%</span> */}
          </div>
          <div class = "progress">
            <div class = "progress-bar w-85"></div>
          </div>
        </div>

        <div class = "item">
          <div class = "item-text">
            <span>Java</span>
         
          </div>
          <div class = "progress">
            <div class = "progress-bar w-80"></div>
          </div>
        </div>

        <div class = "item">
          <div class = "item-text">
            <span>Python</span>
      
          </div>
          <div class = "progress">
            <div class = "progress-bar w-60"></div>
          </div>
        </div>

        <div class = "item">
          <div class = "item-text">
            <span>PHP</span>
          
          </div>
          <div class = "progress">
            <div class = "progress-bar w-68"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutCard;
