import { useState } from 'react'

import type { FindPosts } from 'types/graphql'

import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'

import BlogCard from '../BlogCard/BlogCard'

export const QUERY = gql`
  query FindPosts {
    posts {
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

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ posts }: CellSuccessProps<FindPosts>) => {
  const [search, setSearch] = useState('')

  const filteredPosts = posts.filter((post) => {
    return post.title.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <section className="flex flex-col">
      <h3 className="bg-primary bg-clip-text text-transparent font-bold text-4xl">
        Featured Articles
      </h3>
      <input
        className="mt-4 p-3 bg-white bg-opacity-10 rounded-lg w-full max-w-xl text-md text-blue-100"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="mt-8 flex flex-col space-y-10">
        {filteredPosts.map((item) => {
          return <BlogCard key={item.id} {...item} />
        })}
      </div>
    </section>
  )
}
