import NavSideBar from './components/navSideBar'
import GenInfo from './components/genInfo'

export default function Home() {
  return (
    <main className='grid grid-rows-3 grid-flow-col gap-4'>
        <NavSideBar />
        <GenInfo />
    </main>
  )
}
