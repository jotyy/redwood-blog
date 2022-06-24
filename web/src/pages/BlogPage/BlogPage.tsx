import { MetaTags } from '@redwoodjs/web'

import ArticlesCell from 'src/components/ArticlesCell'

const BlogPage = () => {
  return (
    <>
      <MetaTags title="Blog" description="Blog page" />

      <div className="pt-40">
        <ArticlesCell />
      </div>
    </>
  )
}

export default BlogPage
