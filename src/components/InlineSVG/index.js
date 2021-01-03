import React from 'react'
import PropTypes from 'prop-types'

const InlineSVG = ({ data }) => (
  <i dangerouslySetInnerHTML={{ __html: data }}></i>
)

InlineSVG.propTypes = {
  data: PropTypes.string.isRequired
}

export default InlineSVG
