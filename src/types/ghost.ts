/**
 * Ghost specific types
 *
 * @note everything is typed optional because we don't know what we will get
 * from the API as Ghost doesn't provide types.
 */
export type GhostPage = {
  id?: string
  uuid?: string
  title?: string
  slug?: string
  html?: string
  comment_id?: string
  feature_image?: string
  featured?: boolean
  visibility?: string
  created_at?: string
  updated_at?: string
  published_at?: string
  custom_excerpt?: string
  codeinjection_head?: string
  codeinjection_foot?: string
  custom_template?: string
  canonical_url?: string
  url?: string
  excerpt?: string
  reading_time?: number
  access?: boolean
  comments?: boolean
  og_image?: string
  og_title?: string
  og_description?: string
  twitter_image?: string
  twitter_title?: string
  twitter_description?: string
  meta_title?: string
  meta_description?: string
  frontmatter?: string
  feature_image_alt?: string
  feature_image_caption?: string
}

export type GhostPages = {
  pages?: GhostPage[]
}

export type GhostTag = {
  id?: string
  name?: string
  slug?: string
  description?: string
  feature_image?: string
  visibility?: string
  meta_title?: string
  meta_description?: string
  og_image?: string
  og_title?: string
  og_description?: string
  twitter_image?: string
  twitter_title?: string
  twitter_description?: string
  codeinjection_head?: string
  codeinjection_foot?: string
  canonical_url?: string
  accent_color?: string
  url?: string
  count?: GhostCount
}

export type GhostAuthor = {
  id?: string
  name?: string
  slug?: string
  profile_image?: string
  cover_image?: string
  bio?: string
  website?: string
  location?: string
  facebook?: string
  twitter?: string
  meta_title?: string
  meta_description?: string
  url?: string
}

export type GhostPost = {
  slug?: string
  id?: string
  uuid?: string
  title?: string
  html?: string
  comment_id?: string
  feature_image?: string
  featured?: boolean
  visibility?: string
  created_at?: string
  updated_at?: string
  published_at?: string
  custom_excerpt?: string
  codeinjection_head?: string
  codeinjection_foot?: string
  custom_template?: string
  canonical_url?: string
  tags: GhostTag[]
  authors: GhostAuthor[]
  primary_author: GhostAuthor
  primary_tag: GhostTag
  url?: string
  excerpt?: string
  reading_time?: number
  access?: boolean
  comments?: boolean
  og_image?: string
  og_title?: string
  og_description?: string
  twitter_image?: string
  twitter_title?: string
  twitter_description?: string
  meta_title?: string
  meta_description?: string
  email_subject?: string
  frontmatter?: string
  feature_image_alt?: string
  feature_image_caption?: string
}

export type GhostPosts = {
  posts?: GhostPost[]
  meta?: {
    pagination?: {
      prev?: number
      next?: number
    }
  }
}

export type GhostMeta = {
  pagination?: {
    limit?: number
    next?: number
    page?: number
    pages?: number
    prev?: number
    total?: number
  }
}

export type GhostPostAndAuthor = {
  author?: GhostAuthor
  posts?: GhostPost[]
  meta?: GhostMeta
}

export type GhostTagsList = {
  tags?: GhostTag[]
}

export type GhostTagTransformed = {
  text?: string
  value?: string
}

export type GhostCount = {
  posts?: number
}

export type GhostConfig = {
  ghostApiKey: string
  ghostApiUrl: string
  pagingSize: string
  localeTags: string[]
}

export type GhostRequestParams = {
  filter: string
  pageNumber?: number
  limit?: number
}

export type GhostPostsByAuthorParams = {
  filter: string
  pageNumber?: number
  limit?: number
}

export type GhostPostsForBlogParams = {
  filter: string
  pageNumber?: number
  limit?: number
}
