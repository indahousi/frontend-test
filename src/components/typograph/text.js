import styled, { css } from 'styled-components'
import propTypes from 'prop-types'
import { baseColor, baseBold, baseAlign } from './base'

export const SpanColor = styled.span`
  ${baseColor};
  ${baseBold};
`

export const TextStroke = css`
  -webkit-text-fill-color: #fff;
  -webkit-text-stroke: 1px ${(props) => props.theme.colors.primary};
  font-style: normal;
`

export const TextExtraLarge = styled.p`
  font-size: ${(props) => props.theme.font.mobile.text.extralarge};
  ${baseColor};
  ${baseBold};
  ${baseAlign};

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: ${(props) => props.theme.font.desktop.text.extralarge};
  }
`

export const TextExtraLargeH2 = styled.h2`
  font-size: ${(props) => props.theme.font.mobile.text.extralarge};
  ${baseColor};
  ${baseBold};
  ${baseAlign};

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: ${(props) => props.theme.font.desktop.text.extralarge};
  }
`

export const TextExtraLargeH3 = styled.h3`
  font-size: ${(props) => props.theme.font.mobile.text.extralarge};
  ${baseColor};
  ${baseBold};
  ${baseAlign};

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: ${(props) => props.theme.font.desktop.text.extralarge};
  }
`

export const TextExtraLargeH4 = styled.h4`
  font-size: ${(props) => props.theme.font.mobile.text.extralarge};
  ${baseColor};
  ${baseBold};
  ${baseAlign};

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: ${(props) => props.theme.font.desktop.text.extralarge};
  }
`

export const TextLarge = styled(TextExtraLarge)`
  font-size: ${(props) => props.theme.font.mobile.text.large};

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: ${(props) => props.theme.font.desktop.text.large};
  }
`

export const TextLargeH3 = styled(TextExtraLargeH3)`
  font-size: ${(props) => props.theme.font.mobile.text.large};

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: ${(props) => props.theme.font.desktop.text.large};
  }
`

export const TextMedium = styled(TextExtraLarge)`
  font-size: ${(props) => props.theme.font.mobile.text.medium};

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: ${(props) => props.theme.font.desktop.text.medium};
  }
`

export const TextMediumH3 = styled(TextExtraLargeH3)`
  font-size: ${(props) => props.theme.font.mobile.text.medium};

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: ${(props) => props.theme.font.desktop.text.medium};
  }
`

export const TextMediumH4 = styled(TextExtraLargeH4)`
  font-size: ${(props) => props.theme.font.mobile.text.medium};

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: ${(props) => props.theme.font.desktop.text.medium};
  }
`

export const TextSmall = styled(TextExtraLarge)`
  font-size: ${(props) => props.theme.font.mobile.text.small};

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: ${(props) => props.theme.font.desktop.text.small};
  }
`

export const TextSmallH3 = styled(TextExtraLargeH3)`
  font-size: ${(props) => props.theme.font.mobile.text.small};

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: ${(props) => props.theme.font.desktop.text.small};
  }
`

export const TextExtraSmall = styled(TextExtraLarge)`
  font-size: ${(props) => props.theme.font.mobile.text.extrasmall};

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: ${(props) => props.theme.font.desktop.text.extrasmall};
  }
`

TextExtraLarge.propTypes = {
  bold: propTypes.bool,
  primary: propTypes.bool,
  white: propTypes.bool,
  center: propTypes.bool,
  centerMd: propTypes.bool,
  right: propTypes.bool,
  rightMd: propTypes.bool,
  leftMd: propTypes.bool,
}

TextLarge.propTypes = {
  bold: propTypes.bool,
  primary: propTypes.bool,
  white: propTypes.bool,
  center: propTypes.bool,
  centerMd: propTypes.bool,
  right: propTypes.bool,
  rightMd: propTypes.bool,
  leftMd: propTypes.bool,
}

TextMedium.propTypes = {
  bold: propTypes.bool,
  primary: propTypes.bool,
  white: propTypes.bool,
  center: propTypes.bool,
  centerMd: propTypes.bool,
  right: propTypes.bool,
  rightMd: propTypes.bool,
  leftMd: propTypes.bool,
}

TextSmall.propTypes = {
  bold: propTypes.bool,
  primary: propTypes.bool,
  white: propTypes.bool,
  center: propTypes.bool,
  centerMd: propTypes.bool,
  right: propTypes.bool,
  rightMd: propTypes.bool,
  leftMd: propTypes.bool,
}

TextExtraSmall.propTypes = {
  bold: propTypes.bool,
  primary: propTypes.bool,
  white: propTypes.bool,
  center: propTypes.bool,
  centerMd: propTypes.bool,
  right: propTypes.bool,
  rightMd: propTypes.bool,
  leftMd: propTypes.bool,
}
