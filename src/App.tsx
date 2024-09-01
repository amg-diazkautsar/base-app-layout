import { useState, useEffect } from 'react'
import Loader from './common/Loader'
import { Route, Routes, useLocation } from 'react-router-dom'
import DefaultLayout from './layout/DefaultLayout'

function App () {
  const [loading, setLoading] = useState<boolean>(true)
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])

  return loading ? (
    <Loader />
  ) : (
    <DefaultLayout>
      <Routes>
        <Route />
      </Routes>
    </DefaultLayout>
  )
}

export default App
