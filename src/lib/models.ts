export type ArticleModel = {
  author: string
  date: string
  text: string
}
export type CommentModel = {
  id : number
  author: string
  text: string
  date: string
}
export type LoadingFlags = {
  article: boolean
  comments: boolean
  moreComments: boolean
}