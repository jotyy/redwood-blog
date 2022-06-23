import Header from 'src/components/Header/Header'

type AppLayoutProps = {
  children?: React.ReactNode
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Header />
      <main className="flex flex-col flex-1 mx-auto w-[90%] md:w-[85%] lg:w-[80%] max-w-[900px] p-10 min-h-(100vh - 68px) bg-light-100">
        {children}
      </main>
    </div>
  )
}

export default AppLayout
