import React from 'react'
import { Link } from 'gatsby'
import styled from 'react-emotion'

import Layout from '../components/layout'

const Wrapper = styled('div')`
  color: turquoise;
`; 

const IndexPage = () => (
  <Layout>
    <Wrapper>
    first lines of emotion
    </Wrapper>
    <Link to="/page-2/">Jetzt unbedingt hier klicken.</Link>
  </Layout>
)

export default IndexPage
