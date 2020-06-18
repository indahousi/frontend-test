import React from 'react'
import styled, { css } from 'styled-components'

const topCustomCss = css`
  margin-top: ${(props) => props.topCustom}px;
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    margin-top: ${(props) => props.topCustomD}px;
  }
`

const reducedCustom = css`
  @media (max-width: 320px) {
    padding: 0px 4% !important;
  }
  @media (min-width: 321px) and (max-width: ${(props) =>
      props.theme.breakpoints.md}) {
    padding: 0px 8% !important;
  }
`

const Con = styled.div`
  ${(props) => props.topCustom && topCustomCss};
  ${(props) => props.reduced && reducedCustom};
`

export const ContainerFullWidthAndHeight = styled.div`
  min-height: calc(100vh - 50px);
  width: 100%;
  @media (min-width: ${(p) => p.theme.breakpoints.md}) {
    min-height: calc(100vh - 70px);
  }
`

export const Container = ({
  children,
  className,
  topCustom,
  topCustomD,
  reduced = false,
  ...props
}) => {
  return (
    <Con
      topCustom={topCustom}
      topCustomD={topCustomD}
      reduced={reduced}
      className={`container ${className}`}
      {...props}
    >
      {children}
    </Con>
  )
}
