import { Link, useLocation } from '@redwoodjs/router'

interface NavLinkProps {
  name: string
  path: string
}

const NavLink = ({ name, path }: NavLinkProps) => {
  const router = useLocation()
  const active = 'text-cyan-300 hover:opacity-80'
  const normal = 'text-blue-100 font-thin hover:opacity-60'

  return (
    <Link to={path} className={router.pathname === path ? active : normal}>
      {name}
    </Link>
  )
}

const Header = () => {
  return (
    <header className="fixed z-10 w-full shadow-lg py-4 bg-gray-900">
      <div className="flex flex-row justify-between items-center mx-auto w-[90%] md:w-[85%]">
        <h2 className="text-3xl font-bold bg-primary text-transparent bg-clip-text">
          REDWOOD BLOG
        </h2>
        <nav className="flex flex-row space-x-4">
          <NavLink path="/" name="HOME" />
          <NavLink path="/blog" name="BLOG" />
          <NavLink path="/about" name="ABOUT" />
        </nav>
      </div>
    </header>
  )
}

export default Header
