import { Link, useLocation } from '@redwoodjs/router'

interface NavLinkProps {
  name: string
  path: string
}

const NavLink = ({ name, path }: NavLinkProps) => {
  const router = useLocation()
  const active = 'text-color-primary hover:opacity-80'
  const normal = 'text-gray-400 font-thin hover:opacity-80'

  return (
    <Link to={path} className={router.pathname === path ? active : normal}>
      {name}
    </Link>
  )
}

const Header = () => {
  return (
    <header className="w-full shadow-lg py-4">
      <div className="flex flex-row justify-between items-center mx-auto w-[90%] md:w-[85%] lg:w-[80%] max-w-[800px]">
        <h2 className="text-3xl font-extrabold font-mono">
          REDWOOD<span className="font-light text-gray-400">BLOG</span>
        </h2>
        <nav className="flex flex-row space-x-4">
          <NavLink path="/" name="HOME" />
          <NavLink path="/about" name="ABOUT" />
        </nav>
      </div>
    </header>
  )
}

export default Header
