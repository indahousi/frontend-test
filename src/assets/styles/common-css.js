import { css } from 'styled-components'

export const patternMargin = css`
  margin-top: 30px;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    margin-top: 80px;
  }
`

export const patternSemiMargin = css`
  margin-top: 20px;
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    margin-top: 40px;
  }
`

export const patternBorderRadius = css`
  border-radius: 5px;
`
