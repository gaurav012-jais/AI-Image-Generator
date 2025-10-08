import React from 'react'
import Header from '../component/Header'
import Steos from '../component/Steos'
import Description from '../component/Description'
import Testimonial from '../component/Testimonial'
import Generatebtn from '../component/Generatebtn'

function Home() {
  return (
    <div>
       <Header/> 
       <Steos/>
       <Description/>
       <Testimonial/>
       <Generatebtn/>
    </div>
  )
}

export default Home