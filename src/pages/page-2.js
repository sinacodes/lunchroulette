import React from 'react'
import { Link } from 'gatsby'
// import styled from 'react-emotion'

import Background from '../components/background'
import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    <Background />
    <h1>Hi from the second page</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
