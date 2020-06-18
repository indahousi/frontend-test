import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { patternBorderRadius } from '../../assets/styles/common-css'

export const Logo = styled.img`
  cursor: pointer;
  height: 30px;
  margin-left: 15px;
  width: 110px;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    height: 30px;
    width: 130px;
  }
`

export const DropLowerCase = styled.span``

export const LogoNavSwap = styled.img`
  height: 37px;
  margin-bottom: 1em;
  margin-top: 15px;
  width: 130px;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    display: none;
  }
`

const cssAsLanding = css`
  background: transparent !important;
  box-shadow: none;
  position: absolute;
`

export const NavContent = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  margin-left: ${(props) => (props.opened ? '0%' : '-100%')};
  position: fixed;
  top: 0;
  transition: all 0.2s;
  width: 100%;
  z-index: 99999;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    position: relative;
    height: fit-content;
    width: fit-content;
  }
`

export const HamburguerButton = styled.span`
  display: ${(props) => (props.opened ? 'none' : 'block')};
  font-size: ${(props) => props.theme.font.mobile.small};
  margin-right: 15px;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    display: none;
  }
`
export const ItemsContent = styled.div`
  background: ${(props) => props.theme.colors.primary};
  color: #fff;
  display: flex;
  flex-direction: column;
  font-size: ${(props) => props.theme.font.mobile.text.large};
  max-height: 100%;
  min-height: 100%;
  overflow-y: scroll;
  padding: 0 15px;
  width: 70%;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    overflow-y: initial;
    background: transparent;
    width: fit-content;
    display: flex;
    height: fit-content;
    margin-top: 0px;
    flex-direction: row;
    svg {
      display: none;
    }
  }
`
export const OpacityNav = styled.div`
  background: rgba(0, 0, 0, 0.5);
  height: 100%;
  width: 30%;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    display: none;
  }
`

export const Icon = styled.div`
  display: flex;
  width: 2em;
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    width: fit-content;
    margin-right: 10px;
  }
`

export const NavItem = styled.div`
  align-items: center;
  cursor: pointer;
  display: ${(props) => (props.onlyDesktop ? 'none' : 'flex')};
  font-size: ${(props) => props.theme.font.mobile.text.medium};
  margin-top: 30px;

  > :last-child {
    margin-right: 0px;
    margin-top: 0px;
  }

  a {
    color: #fff;
    text-decoration: none;
  }

  span {
    text-transform: uppercase;
  }

  ${DropLowerCase} {
    text-transform: capitalize;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    display: flex;
    margin-top: 0px;
    width: fit-content;
    margin-right: 30px;
    font-size: ${(props) => props.theme.font.desktop.text.medium};
  }
`

export const LanguageContent = styled.div`
  align-items: center;
  align-self: flex-end;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  padding-bottom: 4em;
  padding-right: 15px;
  width: 100%;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    display: none;
  }

  div {
    align-self: center;
    text-transform: uppercase;
  }
`

export const FlagIcon = styled.img`
  filter: grayscale(${(props) => (props.active ? 0 : 100)}%);
  margin-right: 1em;
  width: 2em;
`

export const DropLink = styled(Link)`
  path {
    fill: ${(props) => props.theme.colors.secondary};
  }
  :hover {
    path {
      fill: #fff;
    }
  }
`

export const DropdownContent = styled.div`
  background-color: #f9f9f9;
  display: none;
  min-width: ${(props) => props.minWidth || 130}px;
  position: absolute;
  right: 0;
  ${patternBorderRadius};
  z-index: 9999;

  > a {
    path {
      fill: ${(props) => props.theme.colors.black};
    }
    :hover {
      path {
        fill: #fff;
      }
    }
  }

  > div,
  > ${DropLink},a {
    align-items: center;
    color: ${(props) => props.theme.colors.black} !important;
    display: flex;
    height: 2.5em;
    padding: 20px 0.7em;
    transition: all 0.2s;
    width: 100%;

    :last-child {
      ${patternBorderRadius};
      border-top-left-radius: 0px;
      border-top-right-radius: 0px;
    }

    :hover {
      background: ${(props) => props.theme.colors.primary};
      color: #fff !important;
    }
  }
`

export const DropTrigger = styled.div`
  display: flex;
  width: 100%;
`

export const Dropdown = styled.div`
  display: inline-block;
  position: relative;
  :hover {
    ${DropdownContent} {
      display: block;
    }
  }
`

export const Nav = styled.nav`
  align-items: center;
  background: ${({ theme, customColor }) =>
    theme.colors[customColor]} !important;
  display: flex;
  height: 60px;
  justify-content: space-between;
  max-width: 100%;
  position: relative;
  width: 100%;
  z-index: 999;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    height: 70px;
    padding: 0 32px;
    
    a,
    ${DropLowerCase},${DropTrigger} > span,p, > a {
      color: ${({ theme, customTextColor }) => theme.colors[customTextColor]};
    }
  }
  
  > span > svg {
    path {
      fill: ${({ theme, customTextColor }) => theme.colors[customTextColor]};
    }
  }
  
  }

  ${(props) => props.asLandingPage && cssAsLanding}
`
