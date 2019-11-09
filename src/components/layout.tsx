import * as React from 'react'
import { Link } from 'gatsby'
import { IdentityContextProvider } from 'react-netlify-identity-widget'

export default ({ children }: any) => (
  <IdentityContextProvider url="https://gatsby-auth.netlify.com/">
    <header>
      <Link to="/">JAMstack App</Link>
    </header>
    <main>{children}</main>
  </IdentityContextProvider>
)
