import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <div className="my-auto flex flex-col gap-2 items-start justify-center">
        <h1 className="w-24 text-center p-1 rounded-tr-full rounded-bl-lg text-sm bg-gradient-to-r from-cyan-400 to-blue-100">
          Hello, 👋
        </h1>
        <p className="text-5xl font-bold">
          I'm <span className="underline">Joshua Lee</span>
        </p>
        <p className="text-lg text-gray-500">Fullstack Engineer/Devops</p>
        <button className="bg-gradient-to-r from-cyan-400 to-blue-100 px-4 py-2 rounded-lg text-xl font-bold shadow-md mt-6 transition hover:-translate-y-1">
          Contact me!
        </button>
      </div>
    </>
  )
}

export default HomePage
