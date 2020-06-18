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

const RowStyled = styled.div`
  ${(props) => props.top && patternMargin};
  ${(props) => props.topSemi && patternSemiMargin};
  ${(props) => props.topCustom && topCustomCss};
`

export const Row = ({
  children,
  className,
  align = 'start',
  justify = 'start',
  topCustom,
  topCustomD,
  top = false,
  topSemi = false,
  ...props
}) => {
  const alignment = `align-items-${align}`
  const content = `justify-content-${justify}`

  return (
    <RowStyled
      top={top}
      topSemi={topSemi}
      topCustom={topCustom}
      topCustomD={topCustomD}
      className={`row ${alignment} ${content} ${className}`}
      {...props}
    >
      {children}
    </RowStyled>
  )
}

Row.propTypes = {
  align: PropTypes.oneOf(['start', 'center', 'end']),
  justify: PropTypes.oneOf(['start', 'center', 'end', 'around', 'between']),
}
