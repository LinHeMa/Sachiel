import gql from 'graphql-tag'

import type { Post } from '~/graphql/fragments/post'
import { postFragment } from '~/graphql/fragments/post'
import { GenericFeature, GenericPost } from '~/types/common'

export type PostWithSubtitle = Post & Pick<GenericPost, 'subtitle'>

export type Feature = Pick<GenericFeature, 'description' | 'featurePost'> & {
  featurePost: PostWithSubtitle[]
}

const features = gql`
  query {
    features(where: { state: { equals: "published" } }) {
      description
      featurePost {
        subtitle
        ...PostFields
      }
    }
  }
  ${postFragment}
`

export { features }
