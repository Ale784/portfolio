import '@/styles/globals.css'

//components
import { NavBar } from '@/components/NavBar'

export default function App({ Component, pageProps }) {
  return (
    <div className='bg-primary min-h-[100vh]'>
      <NavBar />
      <Component {...pageProps} />
    </div>
  )
}
