import React from 'react'
import PropTypes from 'prop-types'

import Header from 'components/Header'
import Sidebar from 'components/SideBar'

const MainLayout = ({ children }) => (
  <>
    <Header />
    <main style={{ display: 'flex', flexFlow: 'row', height: '100%' }}>
      <Sidebar />
      {children}
    </main>
  </>
)

MainLayout.propTypes = {
  children: PropTypes.any.isRequired
}

export default MainLayout
