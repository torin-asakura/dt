import { gql } from '@apollo/client'

export const GET_FEEDBACK = gql`
  query GetFeedback {
    feedbackItems {
      nodes {
        contentAddons {
          title
          role
          content
          image {
            node {
              altText
              sourceUrl
            }
          }
        }
        language {
          code
        }
      }
    }
  }
`
