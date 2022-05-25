import React from 'react'
import ImageHero from 'assets/images/img1.svg'

export default function Hero(props) {
  return (
    <section className="container pt-2">
        <div className="row align-items-center">
          <div className="image-hero col-auto pl-5">
            <div style={{ width: 400, marginLeft: 200}}>
              <img
                src={ImageHero}
                alt="girl coding"
                className="img-fluid position-absolute "></img>
              </div>
              </div>
              </div>
              </section>
  )
}
