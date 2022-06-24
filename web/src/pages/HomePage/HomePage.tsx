import { FiGithub, FiTwitter, FiLinkedin, FiMail } from 'react-icons/fi'

import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <section className="flex flex-col justify-center min-h-screen max-h-screen">
        <h1 className="w-24 text-center p-1 rounded-md rounded-tr-full rounded-bl-lg text-sm bg-gradient-to-r from-cyan-400 to-blue-100">
          Hello, 👋
        </h1>
        <p className="text-6xl text-blue-100 font-bold mt-4">
          I&lsquo;m <span className="underline">Joshua Lee</span>
        </p>
        <p className="text-2xl text-gray-400 mt-8">Fullstack Engineer/Devops</p>
        <p className="text-sm text-gray-500 mt-4">
          Currently working on Blockchain development. Building something like
          web3.js and ethers.js
        </p>
        <button className="w-40 bg-gradient-to-r from-cyan-400 to-blue-100 px-4 py-2 rounded-lg text-xl font-bold shadow-md mt-6 transition hover:-translate-y-1">
          Contact me!
        </button>

        <nav className="fixed text-gray-400 text-2xl bottom-[15%] right-[10%] flex flex-col items-center gap-6">
          <a href="https://github.com/jotyy">
            <FiGithub className="transition hover:-translate-y-2 hover:text-cyan-300" />
          </a>
          <a href="https://twitter.com/jotyy3">
            <FiTwitter className="transition hover:-translate-y-2 hover:text-cyan-300" />
          </a>
          <a href="https://linkedin.com/in/jotyy">
            <FiLinkedin className="transition cursor-pointer hover:-translate-y-2 hover:text-cyan-300" />
          </a>
          <a href="mailto:jotyy318@gmail.com">
            <FiMail className="transition cursor-pointer hover:-translate-y-2 hover:text-cyan-300" />
          </a>
        </nav>
      </section>
    </>
  )
}

export default HomePage
