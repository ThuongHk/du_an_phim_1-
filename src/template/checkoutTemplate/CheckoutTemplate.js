import React from 'react'
import PhongVe from '../../pages/checkout/Checkout'
import { USER_LOGIN, history } from '../../util/settings/config'

function CheckoutTemplate() {
    if(!localStorage.getItem(USER_LOGIN)){
        history.push('/login')
    }
  return (
    <div>
      <PhongVe/>
    </div>
  )
}

export default CheckoutTemplate
