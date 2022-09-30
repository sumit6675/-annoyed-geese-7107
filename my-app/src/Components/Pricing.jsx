import { Button } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContextProvider'
function Pricing() {
  const {handleAuth}=useContext(AuthContext)
  return (
    <>
    <Button onClick={handleAuth}>LogOut</Button>
    </>
  )
}

export default Pricing