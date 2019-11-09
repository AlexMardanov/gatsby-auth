import * as React from 'react';

import styled from '@emotion/styled';

import { Image } from '../Image';

interface IProps {
  children: React.ReactNode;
}

const Container = styled.div`
  margin: 0 auto;
  max-width: 600px;
`;

export const Layout = ({ children }: IProps) => {
  return (
    <Container>
      <Image filename="gatsby-icon.png" width="100px" />
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </Container>
  );
};
