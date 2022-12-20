import React from 'react'
import { Card } from 'react-bootstrap'
import './PersCard.css'

const PersCard = () => {
  return (
    <div className='perscard'>
        <Card className='perscr'>
            <Card.Img className='persim'variant="top" src="https://www.biography.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc5OTcxMjMwMjM1ODk0OTA2/gettyimages-972635212.jpg" />
            <Card.Body>
                <Card.Title as='h4' className='text-primary'>Lionel Messi</Card.Title>
                <Card.Text className='text-dark'>
                    CEO
                </Card.Text>
            </Card.Body>
        </Card>
        <Card className='perscr'>
            <Card.Img className='persim' variant="top" src="https://images.hola.com/us/images/0276-154abe945dbe-7fcd0bf0d5b2-1000/square-800/johnny-depp-amp-amber-heard-defamation-trial-continues.jpg" />
            <Card.Body>
                <Card.Title className='text-primary'>Johnny Depp</Card.Title>
                <Card.Text className='text-dark'>
                    CFO
                </Card.Text>
            </Card.Body>
        </Card>
        <Card className='perscr'>
            <Card.Img className='persim' variant="top" src="https://images2.minutemediacdn.com/image/fetch/w_736,h_485,c_fill,g_auto,f_auto/https%3A%2F%2Fsircharlesincharge.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2018%2F04%2F944692892-cleveland-cavaliers-v-new-york-knicks.jpg-850x560.jpg" />
            <Card.Body>
                <Card.Title className='text-primary'>Lebron James</Card.Title>
                <Card.Text className='text-dark'>
                    COO
                </Card.Text>
            </Card.Body>
        </Card>
        <Card className='perscr'>
            <Card.Img className='persim' variant="top" src="https://cdn.britannica.com/38/157838-050-285F8B2D/Chris-Rock-NAACP-Image-Awards-Los-Angeles-2010.jpg?w=400&h=300&c=crop" />
            <Card.Body>
                <Card.Title className='text-primary'>Chris Rock</Card.Title>
                <Card.Text className='text-dark'>
                    CTO
                </Card.Text>
            </Card.Body>
        </Card>
    </div>
  )
}

{/*style={{ fontSize: '30px' }} */}

export default PersCard