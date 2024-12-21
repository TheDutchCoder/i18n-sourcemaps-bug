import type { ListItem } from 'schema-dts'
import type { GhostPost, Nullable, RvDetails, VerifiedReviews } from '~/types'

export type JSONLDProduct = {
  rv: RvDetails
  path: string
  image: string
}

export type JSONLDQuestions = {
  questions: JSONLDQuestionAndAnswer[]
}

export type JSONLDQuestionAndAnswer = {
  question: string
  answer: string
}

export type JSONLDListItem = {
  position: number
  name: string
  item: string
}

export type JSONLDBreadcrumbList = {
  itemListElement: ListItem[]
}

export type JSONLDAggregateReview = {
  aggregateReview: Nullable<VerifiedReviews>
}

export type JSONLDGhostPost = {
  post: GhostPost
  staticAssetsUrl: string
  routeUrl: string
  baseUrl: string
}

export type JSONLDGhostPostList = {
  postList: GhostPost[]
  staticAssetsUrl: string
  routeUrl: string
  baseUrl: string
}
