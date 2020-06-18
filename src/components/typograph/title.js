import styled from 'styled-components'
import propTypes from 'prop-types'
import { baseColor, baseBold, baseAlign, baseStroke } from './base'

export const TitleExtraLarge = styled.h1`
  font-size: ${(props) => props.theme.font.mobile.extralarge};
  ${baseColor};
  ${baseBold};
  ${baseAlign};
  ${baseStroke};

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: ${(props) => props.theme.font.desktop.extralarge};
  }
`
export const TitleLarge = styled.h1`
  font-size: ${(props) => props.theme.font.mobile.large};
  ${baseColor};
  ${baseBold};
  ${baseAlign};
  ${baseStroke};

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: ${(props) => props.theme.font.desktop.large};
  }
`
export const TitleMedium = styled.h2`
  font-size: ${(props) => props.theme.font.mobile.medium};
  ${baseColor};
  ${baseBold};
  ${baseAlign};
  ${baseStroke};

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: ${(props) => props.theme.font.desktop.medium};
  }
`
export const TitleSmall = styled.h3`
  font-size: ${(props) => props.theme.font.mobile.small};
  ${baseColor};
  ${baseBold};
  ${baseAlign};
  ${baseStroke};

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: ${(props) => props.theme.font.desktop.small};
  }
`

export const TitleExtraSmall = styled.h4`
  font-size: ${(props) => props.theme.font.mobile.extrasmall};
  ${baseColor};
  ${baseBold};
  ${baseAlign};
  ${baseStroke};

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: ${(props) => props.theme.font.desktop.extrasmall};
  }
`

export const TitleExtraLargeH3 = styled(TitleExtraLarge).attrs({ as: 'h3' })``

export const TitleLargeH2 = styled(TitleLarge).attrs({ as: 'h2' })``

export const TitleSmallH2 = styled(TitleSmall).attrs({ as: 'h2' })``

export const TitleSmallH1 = styled(TitleSmall).attrs({ as: 'h1' })``

export const TitleSmallH4 = styled(TitleSmall).attrs({ as: 'h4' })``

export const TitleSmallP = styled(TitleSmall).attrs({ as: 'p' })``

export const TitleExtraSmallH3 = styled(TitleExtraSmall).attrs({ as: 'h3' })``

export const TitleExtraSmallP = styled(TitleExtraSmall).attrs({ as: 'p' })``

TitleExtraLarge.propTypes = {
  bold: propTypes.bool,
  primary: propTypes.bool,
  white: propTypes.bool,
  center: propTypes.bool,
  centerMd: propTypes.bool,
  right: propTypes.bool,
  rightMd: propTypes.bool,
  leftMd: propTypes.bool,
}

TitleLarge.propTypes = {
  bold: propTypes.bool,
  primary: propTypes.bool,
  white: propTypes.bool,
  center: propTypes.bool,
  centerMd: propTypes.bool,
  right: propTypes.bool,
  rightMd: propTypes.bool,
  leftMd: propTypes.bool,
}

TitleMedium.propTypes = {
  bold: propTypes.bool,
  primary: propTypes.bool,
  white: propTypes.bool,
  center: propTypes.bool,
  centerMd: propTypes.bool,
  right: propTypes.bool,
  rightMd: propTypes.bool,
  leftMd: propTypes.bool,
}

TitleSmall.propTypes = {
  bold: propTypes.bool,
  primary: propTypes.bool,
  white: propTypes.bool,
  center: propTypes.bool,
  centerMd: propTypes.bool,
  right: propTypes.bool,
  rightMd: propTypes.bool,
  leftMd: propTypes.bool,
}

TitleExtraSmall.propTypes = {
  bold: propTypes.bool,
  primary: propTypes.bool,
  white: propTypes.bool,
  center: propTypes.bool,
  centerMd: propTypes.bool,
  right: propTypes.bool,
  rightMd: propTypes.bool,
  leftMd: propTypes.bool,
}
