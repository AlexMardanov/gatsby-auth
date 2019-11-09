import * as React from 'react'
import { navigate } from 'gatsby'
import { Router } from '@reach/router'
import IdentityModal from 'react-netlify-identity-widget'

import Layout from '../components/layout'
import Profile from '../components/profile'
import RouteBase from '../components/route-base'
import RouteSecret from '../components/route-secret'
import RouteLogin from '../components/route-login'
import PrivateRoute from '../components/private-rout'

import 'react-netlify-identity-widget/styles.css'

const Dashboard = ({ location }: any) => {
  const [isVisible, setVisibility] = React.useState(false)

  React.useEffect(() => {
    if (location.pathname.match(/^\/dashboard\/?$/)) {
      navigate('/dashboard/login', { replace: true })
    }
  }, [location.pathname])

  const showModal = () => setVisibility(true)

  return (
    <Layout>
      <Profile showModal={showModal} />
      <Router>
        <PrivateRoute component={RouteBase} path="/dashboard/base" />
        <PrivateRoute component={RouteSecret} path="/dashboard/secret" />
        <RouteLogin path="/dashboard/login" showModal={showModal} />
      </Router>
      <IdentityModal
        showDialog={isVisible}
        onCloseDialog={() => setVisibility(false)}
      />
    </Layout>
  )
}

export default Dashboard
