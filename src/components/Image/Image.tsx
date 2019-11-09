import * as React from 'react'

import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

interface IProps {
  filename: string
  alt?: string
  width?: string
}

const QUERY = graphql`
  query ImageQuery {
    images: allFile(filter: { sourceInstanceName: { eq: "images" } }) {
      edges {
        node {
          relativePath
          name
          childImageSharp {
            sizes(maxWidth: 2048) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`

export const Image = (props: IProps) => {
  const { alt, width, filename } = props

  const { images } = useStaticQuery(QUERY)

  const image = images.edges.find((n: any) => {
    return n.node.relativePath.includes(filename)
  })

  if (!image) {
    return null
  }

  const imageSizes = image.node.childImageSharp.sizes

  return (
    <div style={{ width }}>
      <Img alt={alt} sizes={imageSizes} />
    </div>
  )
}
