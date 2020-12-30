import React from 'react'

import logoImg from 'assets/logo.png'
import './style.module.scss'

const Header = () => (
  <header styleName='container'>
    <section styleName='logo'>
      <img alt="Logo"
        src={logoImg} />
    </section>
    <section styleName='login'>
      <span>Login</span>
    </section>
  </header>
)

export default Header
