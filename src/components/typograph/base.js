import { css } from 'styled-components'

export const baseColor = css`
  color: ${(props) =>
    props.primary
      ? props.theme.colors.primary
      : props.white
      ? '#fff'
      : props.secondary
      ? props.theme.colors.secondary
      : props.theme.colors.black};
  transition: all 0.2s;
`

export const baseBold = css`
  font-weight: ${(props) => (props.thin ? 300 : props.bold ? 600 : 400)};
  text-transform: ${(props) => (props.uppercase ? 'uppercase' : 'normal')};
  b {
    font-weight: 600;
  }
`

export const baseAlign = css`
  text-align: ${(props) =>
    props.center ? 'center' : props.right ? 'right' : 'left'};

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    text-align: ${(props) =>
      props.centerMd ? 'center' : props.rightMd ? 'right' : 'left'};
  }
`

export const baseStroke = css`
  ${(props) =>
    props.stroked &&
    `
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1px ${
    props.primary
      ? props.theme.colors.primary
      : props.white
      ? '#fff'
      : props.black
      ? props.theme.colors.black
      : props.theme.colors.secondary
  };
  font-style: normal;
  `}
`
