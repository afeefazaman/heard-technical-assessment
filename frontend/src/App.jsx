import { Route, Routes, Navigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { Suspense } from 'react'

import Transactions from 'container/transactions'

import 'react-toastify/dist/ReactToastify.css'

const App = () => (
  <>
    <ToastContainer />
    <Suspense fallback={<div />}>
      <Routes>
        <Route path='/' element={<Transactions />} />
        <Route path='*' element={<Navigate replace to='/' />} />
      </Routes>
    </Suspense>
  </>
)

export default App
