import { useAppDispatch, useAppSelector } from "@/store/hooks"
import AuthCheck from "@/store/services/AuthCheck"
import {  useEffect } from "react"



interface AuthLayoutProps {
    children: React.ReactNode
    }
const AuthLayout = ({children}:AuthLayoutProps) => {

    const dispatch = useAppDispatch()

   useEffect(()=>{
     dispatch(AuthCheck())
    }
    ,[])  
       


  return (
    <div>{children}</div>
  )
}

export default AuthLayout