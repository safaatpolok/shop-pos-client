import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import StoreRoutes from './pages/Routes/StoreRoutes'
import AdminRoutes from './pages/Routes/AdminRoutes'
import Login from './pages/Auth/Login'
import CashierRoutes from './pages/Routes/CashierRoutes'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getUserProfile } from './Redux Toolkit/features/User/userThunk'
import BranchRoutes from './pages/Routes/BranchRoutes'



function App() {
  const dispatch = useDispatch();
  const { userProfile } = useSelector(state => state.user)

  useEffect(() => {
    dispatch(getUserProfile(localStorage.getItem("jwt")))
  }, [])

  let content;

  if (userProfile && userProfile?.role) {
    if (userProfile?.role === "ROLE_BRANCH_CASHIER") {
      content = (<Routes>
        <Route path="/" element={<Navigate to="/cashier" replace />} />
        <Route path="/cashier/*" element={<CashierRoutes />} />

      </Routes>);
    }
    else if (
      userProfile?.role == "ROLE_BRANCH_MANAGER" ||
      userProfile?.role == "ROLE_BRANCH_ADMIN"
    ) {
      content = (
        <Routes>
          <Route path='/' element={<Navigate to="/branch" />} />
          <Route path='/branch/*' element={<BranchRoutes />} />
        </Routes>
      )

    }
    else if (
      userProfile?.role == "ROLE_ADMIN"
    ) {
      content = (
        <Routes>
          <Route path='/' element={<Navigate to="/super-admin" />} />
          <Route path='/super-admin/*' element={<AdminRoutes />} />
        </Routes>
      )

    }

    else if (
      userProfile?.role == "ROLE_STORE_MANAGER" ||
      userProfile?.role == "ROLE_STORE_ADMIN"
    ) {
      content = (
        <Routes>
          <Route path='/' element={<Navigate to="/store" />} />
          <Route path='/store/*' element={<StoreRoutes />} />
        </Routes>
      )

    }




  } else {
    content = (
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="/login" element={<Login />} /> */}


      </Routes>
    );

  }
  return (
    <>
      {/* // <Routes>
    //   <Route path="/" element={<Navigate to="/login" replace />} />
    //   <Route path="/cashier/*" element={<CashierRoutes />} />
    //   <Route path="/store/*" element={<StoreRoutes />} />
    //   <Route path="/super-admin/*" element={<AdminRoutes />} />

    // </Routes> */}

      {content}
    </>



  )

}

export default App
