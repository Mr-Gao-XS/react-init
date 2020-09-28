import React from 'react'
import { Link } from 'react-router-dom'
import { Page404, Container } from './styled'

const NotFound = (props) => {
  return (
    <Page404>
      <Container>
        <div className='info'>
          <h1>Oops!</h1>
          <h2>Where are we?</h2>
          <p>
            The page you are looking for was moved, removed, renamed or <br />
            might never existed.
          </p>

          <Link to='/index' className='btn'>
            Go Home
          </Link>
        </div>
        <div className='bear'>
          <div className='zzz'></div>
        </div>
      </Container>
    </Page404>
  )
}

export default NotFound
