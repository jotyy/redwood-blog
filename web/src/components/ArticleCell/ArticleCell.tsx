import { useEffect, useState } from 'react'

import { remark } from 'remark'
import html from 'remark-html'
import type { FindPostById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindArticleQuery($id: String!) {
    post: post(id: $id) {
      id
      title
      body
      tags
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps<FindPostById>) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ post }: CellSuccessProps<FindPostById>) => {
  const [content, setContent] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      const processedContent = await remark().use(html).process(post.body)
      const contentHtml = processedContent.toString()
      setContent(contentHtml)
    }
    fetchData()
  }, [post.body])
  return (
    <section className="pt-40">
      <h1 className="text-4xl font-bold text-blue-100 text-center">
        {post.title}
      </h1>
      <div className="h-2 bg-primary mt-8"></div>
      <p className="text-blue-100 mt-2 text-end text-sm">
        Pulished at June 24, 2022
      </p>
      <article className="mt-10 prose lg:prose-xl prose-invert">
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
      </article>
    </section>
  )
}
