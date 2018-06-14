import React from 'react'
import g from "glamorous";
import styled from 'styled-components'
import Link from "gatsby-link";

const Container = styled.div`
  margin: 3rem auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto 12px auto;
  &:last-child {
    margin-bottom: 0;
  }
`

const Avatar = styled.img`
  flex: 0 0 96px;
  width: 96px;
  height: 96px;
  margin: 0;
`

const Description = styled.div`
  flex: 1;
  margin-left: 18px;
  padding: 12px;
`

const Username = styled.h2`
  margin: 0 0 12px 0;
  padding: 0;
`

const Excerpt = styled.p`
  margin: 0;
`

const User = props => (
  <UserWrapper>
    <Avatar src={props.avatar} alt="" />
    <Description>
      <Username>{props.username}</Username>
      <Excerpt>{props.excerpt}</Excerpt>
    </Description>
  </UserWrapper>
)

export default ({ data }) => {
  return (
    <div>
      <Container>
        <h1>Primeiro Blog com Gatsby</h1>
        <User
          username="Jane Doe"
          avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
          excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        />
        <User
          username="Bob Smith"
          avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
          excerpt="I'm Bob smith, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        />
      </Container>
      <div>
        <g.H1 display={"inline-block"} borderBottom={"1px solid"}>
          Amazing Pandas Eating Things
      </g.H1>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.frontmatter.path}
              css={{ textDecoration: `none`, color: `inherit` }}
            >
              <g.H3 marginBottom={"16px"}>
                {node.frontmatter.title}{" "}
                <g.Span color="#BBB">— {node.frontmatter.date}</g.Span>
              </g.H3>
              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>

  )
}

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            path
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;