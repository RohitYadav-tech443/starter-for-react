import React from 'react'
import { Container, About as AboutComponent } from '../components'

function AboutPage() {
  return (
    <div className='py-8'>
        <Container>
            <AboutComponent />
        </Container>
    </div>
  )
}

export default AboutPage