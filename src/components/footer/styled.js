import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { TextMedium } from '../typograph/text'

export const Footer = styled.footer`
  background: #f5f5f5;
  flex-direction: column;
  max-width: 100%;
  min-width: 100%;
  padding-top: 32px;
`

export const Logo = styled.img`
  width: 10em;
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    width: 9em;
    margin-top: 0px;
  }
`

export const Details = styled.div`
  background: #e5e5e5;
  min-width: 100%;
  width: 100%;
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    padding: 4px 0;
    margin-top: 32px;
  }
`

export const LinkFooter = styled(TextMedium).attrs({ as: 'a' })`
  margin-top: ${(props) => (props.top ? 20 : 5)}px;
  margin-bottom: 5px;
  text-decoration: none;
`

export const Copyright = styled.div`
  align-items: flex-end;
  color: #fff;
  display: flex;
  font-size: 12px;
  justify-content: center;
  padding-bottom: 1em;
  padding-top: 1em;
  text-align: center;
  width: 100%;
`

export const MediaIcons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 10em;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    width: 8em;
  }
`

export const DivCnpj = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    align-items: flex-start;
  }
`

export const LinkFooterRouter = styled(TextMedium).attrs({ as: Link })`
  text-decoration: none;
  margin-top: 6px;
  margin-bottom: 5px;
`

export const AppLinkImage = styled.img`
  margin-top: 16px;
  max-width: 120px;
`
