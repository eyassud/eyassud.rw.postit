import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import { useAuth } from 'src/auth'

const HomePage = () => {
  const { isAuthenticated, signUp } = useAuth()

  return (
    <>
      <Metadata title="Home" description="Home page" />

      <main>
        <h1>Hello next</h1>
        <p>{JSON.stringify({ isAuthenticated })}</p>
        <button onClick={signUp}>sign up</button>
      </main>
    </>
  )
}

export default HomePage
