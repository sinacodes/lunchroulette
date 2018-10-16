import React from 'react'
import { Link } from 'gatsby'
// import styled from 'react-emotion'

import Background from '../components/background'
import Layout from '../components/layout'

// here happens everything!

const IndexPage = (props) => (
  <Layout>
    <Background first={props.first}/>
    <Link to="/page-2/">Jetzt unbedingt hier klicken.</Link>
  </Layout>
)

export default IndexPage
