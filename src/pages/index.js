import React from "react"
import { graphql,Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"

import SEO from "../components/seo"


const BlogLink = styled(Link)`
text-decoration : none;
`
const BlogTitle = styled.h4`
margin-bottom : 20px;
color:#eb6841;
text-decoration : underline
`

const IndexPage = ({data}) => {
  console.log(data);
  return (  
  <Layout>
    <SEO title="Home" />
    <h1>My Thoughts</h1>
    <h4>{data.allMarkdownRemark.totalCount} posts</h4>
    {
      data.allMarkdownRemark.edges.map(({node}) => (
        <div key={node.id}>
         <BlogLink to = {node.fields.slug}>
         <BlogTitle><em>{node.frontmatter.title}-{node.frontmatter.date}</em></BlogTitle>  
         </BlogLink> 
          <p>{node.excerpt}</p>
        </div>
      ))
    }
  </Layout>)}


export default IndexPage

export const query = graphql`
query  {
  allMarkdownRemark(sort:{fields : frontmatter___date, order: DESC}) {
    totalCount
    edges {
      node {
        id
        frontmatter {
          date
          title
        }
        fields{
          slug
        }
        html
        excerpt
      }
    }
  }
}`
