import Header from 'src/components/Header/Header'

type AppLayoutProps = {
  children?: React.ReactNode
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className="w-full min-h-screen flex flex-col bg-gray-900">
      <Header />
      <main className="flex-1 mx-auto w-[90%] md:w-[85%] lg:w-[80%] max-w-[900px] h-full">
        {children}
      </main>
    </div>
  )
}

export default AppLayout
