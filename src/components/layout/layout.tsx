import { HEADER_LINKS } from 'data'
import React, { memo } from 'react'
import { Outlet } from 'react-router-dom'

import { FooterSocial } from '../footer-social/footer-social'
import { HeaderSimple } from '../header-simple/header-simple'

export const Layout = memo(function () {
  return (
    <div>
      <HeaderSimple links={HEADER_LINKS} />
      <Outlet />
      <FooterSocial />
    </div>
  )
})
