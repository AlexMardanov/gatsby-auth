import * as React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import { SEO } from '../components/SEO'

export default () => (
  <>
    <SEO title="home page" />

    <Layout>
      <h1>This App Rules!</h1>
      <p>Log in to find out why.</p>
      <Link to="/dashboard">Go to the dashboard</Link>
    </Layout>
  </>
)
