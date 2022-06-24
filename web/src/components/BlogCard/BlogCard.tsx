import { Link, routes } from '@redwoodjs/router'

interface Props {
  title: string
  body: string
  tags: string[]
}

const BlogCard = ({ title, body, tags }: Props) => {
  return (
    <div className="bg-primary p-0.5 rounded-lg transition hover:-translate-y-2">
      <div className="bg-gray-900 p-5 h-full rounded-lg">
        <Link to={routes.article()} className="text-xl text-white font-bold">
          {title}
        </Link>
        <div className="flex flex-col md:flex-row items-start mt-1">
          <p className="text-sm pr-4 text-gray-400">June 24, 2022</p>
          <div className="flex flex-row space-x-1">
            {tags.map((tag) => (
              <div
                key={tag}
                className="rounded-full px-2 text-sm bg-primary text-center"
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
        <p className="text-blue-100 mt-2 truncate">{body.slice(0, 200)}</p>
      </div>
    </div>
  )
}

export default BlogCard
