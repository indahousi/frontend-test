import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import {
  patternMargin,
  patternSemiMargin,
} from '../../assets/styles/common-css'

const topCustomCss = css`
  margin-top: ${(props) => props.topCustom}px;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    margin-top: ${(props) => props.topCustomD}px;
  }
`

const Col = styled.div`
  ${(props) => props.top && patternMargin};
  ${(props) => props.topSemi && patternSemiMargin};
  ${(props) => props.topCustom && topCustomCss};
  min-height: ${(props) => props.heightMobile};

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    min-height: ${(props) => props.heightDesktop};
  }
`

export const Column = ({
  children,
  className,
  xs = 12,
  sm = 12,
  md = 12,
  lg = 12,
  xl = 12,
  self = 'start',
  align = 'start',
  justify = 'start',
  topCustom,
  topCustomD,
  flex,
  order = undefined,
  style = {},
  padding = undefined,
  heightMobile = 'auto',
  heightDesktop = 'auto',
  top = false,
  topSemi = false,
  ...props
}) => {
  const styles = style
  styles.padding = padding !== undefined ? padding : undefined

  const alignment = `align-self-${self}`
  const ordering = order !== undefined ? `order-${order}` : ''
  const flexDisplay = flex ? 'd-flex' : ''
  const alignmentItems = `align-items-${align}`
  const content = `justify-content-${justify}`

  return (
    <Col
      heightDesktop={heightDesktop}
      heightMobile={heightMobile}
      top={top}
      topSemi={topSemi}
      topCustom={topCustom}
      topCustomD={topCustomD}
      className={`col-${xs} col-sm-${sm} col-md-${md} col-lg-${lg} col-xl-${xl} ${flexDisplay} ${alignment} ${content} ${alignmentItems} ${ordering} ${className}`}
      style={styles}
      {...props}
    >
      {children}
    </Col>
  )
}

const columProperty = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 'auto', '']
const columPropertyString = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
]

Column.propTypes = {
  xs: PropTypes.oneOf(columProperty.concat(columPropertyString)),
  sm: PropTypes.oneOf(columProperty.concat(columPropertyString)),
  md: PropTypes.oneOf(columProperty.concat(columPropertyString)),
  lg: PropTypes.oneOf(columProperty.concat(columPropertyString)),
  xl: PropTypes.oneOf(columProperty.concat(columPropertyString)),
  self: PropTypes.oneOf(['start', 'center', 'end']),
  flex: PropTypes.bool,
  align: PropTypes.oneOf(['start', 'center', 'end']),
  justify: PropTypes.oneOf(['start', 'center', 'end', 'around', 'between']),
}
