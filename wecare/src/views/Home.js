import React from 'react'
import { Footer } from '../components/Footer'
import { VideoList } from '../components/VideoList'


export default function Home() {
  return (
    <div className="App">
      <section id="banner" data-video="images/banner">
        <div className="inner">
          <header>
            <h1>We Care</h1>
            <p>A responsive video gallery template with a functional lightbox<br />
            designed by <a href="https://templated.co/">Templated</a> and released under the Creative Commons License.</p>
          </header>
          <a href="#main" class="more">Learn More</a>
        </div>
      </section>
      <VideoList />
      <Footer />
    </div>      
  )
}
