import React from 'react'
import { Button, Col, Container, Row, Table, } from 'react-bootstrap'

// JUL16
// DETROIT, MI
// DTE ENERGY MUSIC THEATRE
// BUY TICKETS
// JUL19
// TORONTO,ON
// BUDWEISER STAGE
// BUY TICKETS
// JUL 22
// BRISTOW, VA
// JIGGY LUBE LIVE
// BUY TICKETS
// JUL 29
// PHOENIX, AZ
// AK-CHIN PAVILION
// BUY TICKETS
// AUG 2
// LAS VEGAS, NV
// T-MOBILE ARENA
// BUY TICKETS
// AUG 7
// CONCORD, CA
// CONCORD PAVILION
// BUY TICKETS

function HomePage() {
  return (
    <Container>
      <h3 className='text-center my-4'>TOURS</h3>
      <Row className="d-flex justify-content-center">
        <Col lg={8}>
        <Table className='mb-5' hover>
          <tbody>
            <tr>
              <td>JUL16</td>
              <td>DETROIT, MI</td>
              <td>DTE ENERGY MUSIC THEATRE</td>
              <td className='text-center'><Button>BUY TICKETS</Button></td>
            </tr>
            <tr>
              <td>JUL19</td>
              <td>TORONTO,ON</td>
              <td>BUDWEISER STAGE</td>
              <td className='text-center'><Button>BUY TICKETS</Button></td>
            </tr>
            <tr>
              <td>JUL 22</td>
              <td>BRISTOW, VA</td>
              <td>BiJIGGY LUBE LIVErd</td>
              <td className='text-center'><Button>BUY TICKETS</Button></td>
            </tr>
            <tr>
              <td>JUL16</td>
              <td>DETROIT, MI</td>
              <td>DTE ENERGY MUSIC THEATRE</td>
              <td className='text-center'><Button>BUY TICKETS</Button></td>
            </tr>
            <tr>
              <td>JUL19</td>
              <td>TORONTO,ON</td>
              <td>BUDWEISER STAGE</td>
              <td className='text-center'><Button>BUY TICKETS</Button></td>
            </tr>
            <tr>
              <td>JUL 22</td>
              <td>BRISTOW, VA</td>
              <td>BiJIGGY LUBE LIVErd</td>
              <td className='text-center'><Button>BUY TICKETS</Button></td>
            </tr>
          </tbody>
        </Table>
        </Col>
      </Row>
    </Container>
  )
}

export default HomePage