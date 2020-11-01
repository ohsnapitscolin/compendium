import React from "react";
import styled from "styled-components";
import { StaticQuery, graphql } from "gatsby";

// Styles
import "./base.scss";

import { responsive } from "../utils/style";

import SEO from "../components/seo";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 24px 48px;
  box-sizing: border-box;

  ${responsive.sm`
    padding-left: 250px;
    align-items: flex-start;
    width: 100%;
  `}

  ${responsive.lg`
    width: 100%;
    padding: 0;
    align-items: center;
  `}
`;

const Wrapper = styled.div`
  width: 600px;
  max-width: 100%;
`;

export class Layout extends React.Component {
  render() {
    const { data } = this.props;

    const children = React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, { data }, null);
    });

    return (
      <>
        <SEO title="Traitors Compendium" />
        <Container>
          <Wrapper>{children}</Wrapper>
        </Container>
      </>
    );
  }
}

export const query = graphql`
  query Query {
    allContentfulCharacter {
      nodes {
        name
        slug
        type
        race
        class
        images {
          description
          file {
            url
          }
        }
        backstory {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`;

export default (props) => (
  <StaticQuery
    query={query}
    render={(data) => <Layout {...props} data={data} />}
  />
);
