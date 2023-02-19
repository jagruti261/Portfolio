import React from 'react'
import Card from 'react-bootstrap/Card'
import { ImPointRight } from 'react-icons/im'

function AboutCard() {
  return (
    <Card className='quote-card-view'>
      <Card.Body>
        <blockquote className='blockquote mb-0'>
          <p style={{ textAlign: 'justify' }}>
            Hi Everyone, I am <span className='purple'>Jagruti Vekariya </span>
            from <span className='purple'> Cottbus, Germany.</span>
            <br />I am a pursuing MSC in Artificial Inteligence in BTU Cottbus.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className='about-activity'>
              <ImPointRight /> Playing Outdoor Games
            </li>
            <li className='about-activity'>
              <ImPointRight /> Explore new Technologies
            </li>
            <li className='about-activity'>
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: 'rgb(155 126 172)' }}>
            "Create your own path in own way!"{' '}
          </p>
          <footer className='blockquote-footer'>Jagruti Vekariya</footer>
        </blockquote>
      </Card.Body>
    </Card>
  )
}

export default AboutCard
