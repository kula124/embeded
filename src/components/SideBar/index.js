import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

import nav from 'constants/nav'
import { importAll } from 'helper'
import InlineSVG from 'components/InlineSVG'

import './style.module.scss'
import './style.scss'

const images = importAll(require.context('../../assets/icons', false, /\.(png|jpe?g|svg)$/))

const NavItem = ({ to, title, icon }) => (
  <NavLink activeStyle={{ backgroundColor: 'rgb(169, 250, 250)' }}
    to={to}
  >
    <li key={to}
      styleName='container'>
      <span>{title}</span>
      {typeof images[icon] === 'string' ? (
        <InlineSVG data={images[icon]} />
      ) : <img src={images[icon].default} />}
    </li>
  </NavLink>
)

const SideBar = () => (
  <nav style={{ height: '100%' }}>
    {nav.map(el => <NavItem key={el.to}
      {...el} />)}
  </nav>
)

NavItem.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired
}

export default SideBar
