import React, { useState, useEffect, useRef, useContext } from 'react'
import { withTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import i18next from 'i18next'
import {
  Nav,
  Logo,
  NavItem,
  HamburguerButton,
  NavContent,
  ItemsContent,
  LogoNavSwap,
  OpacityNav,
  LanguageContent,
  FlagIcon,
  Dropdown,
  DropdownContent,
  DropTrigger,
  DropLowerCase,
  DropLink,
} from './styled'
import { MenuIcon } from '../../assets/icons/nav/menu.icon'
import { CloseIcon } from '../../assets/icons/close.icon'
import { TranslateContext } from '../../store/context/translate.context'
import { NavbarContext } from '../../store/context/navbar.context'
import { redirect } from '../../store'
import { links } from './links'

function useOutsideAlerter(ref, callback) {
  function handleClickOutside(event) {
    if (ref.current && !ref.current.contains(event.target)) {
      callback()
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  })
}

const Navbar = ({ t }) => {
  const [open, setOpened] = useState(false)

  const {
    asLandingPage,
    customColor,
    customTextColor,
    customLogoColor,
  } = useContext(NavbarContext)

  const callback = () => {
    if (open) {
      setOpened(false)
    }
  }

  const wrapperRef = useRef(null)
  useOutsideAlerter(wrapperRef, callback)

  const { language, setLanguage } = useContext(TranslateContext)

  return (
    <Nav
      asLandingPage={asLandingPage}
      customColor={customColor}
      customTextColor={customTextColor}
    >
      <Logo
        onClick={() => {
          redirect('/')
        }}
        alt="Logo Housi White"
        title="Logo Housi White"
        src={`https://housi-site.s3-sa-east-1.amazonaws.com/logo/housi-logo-${
          customLogoColor || 'white'
        }.svg`}
      />
      <HamburguerButton onClick={() => setOpened(!open)} opened={open}>
        <MenuIcon style={{ cursor: 'pointer' }} />
      </HamburguerButton>
      <NavContent opened={open} ref={wrapperRef}>
        <ItemsContent>
          <LogoNavSwap
            alt="Logo Housi White"
            title="Logo Housi White"
            src="https://housi-site.s3-sa-east-1.amazonaws.com/logo/housi-logo-white.svg"
          />
          {links.map((l) =>
            l.asDropdown ? (
              <>
                {l.content.map((ld) => (
                  <NavItem className="just-mobile-visible">
                    {ld.external ? (
                      <a href={ld.to}>{t(ld.label)}</a>
                    ) : (
                      <Link to={ld.to}>{t(ld.label)}</Link>
                    )}
                  </NavItem>
                ))}
                <NavItem onlyDesktop>
                  <Dropdown>
                    <DropTrigger>
                      <DropLowerCase>{t(l.label)}</DropLowerCase>
                    </DropTrigger>
                    <DropdownContent minWidth={200}>
                      {l.content.map((ld) =>
                        ld.external ? (
                          <a href={ld.to}>{t(ld.label)}</a>
                        ) : (
                          <DropLink to={ld.to}>{t(ld.label)}</DropLink>
                        )
                      )}
                    </DropdownContent>
                  </Dropdown>
                </NavItem>
              </>
            ) : (
              <NavItem>
                <Link to={l.to}>{t(l.label)}</Link>
              </NavItem>
            )
          )}

          <NavItem onlyDesktop>
            <Dropdown>
              <DropTrigger>
                <span>{language?.value}</span>
              </DropTrigger>
              <DropdownContent>
                <div
                  onClick={() => {
                    i18next.changeLanguage('pt-BR')
                    setLanguage('pt-BR')
                  }}
                >
                  <FlagIcon
                    active
                    src="https://housi-site.s3-sa-east-1.amazonaws.com/icons/pt-br.svg"
                    alt="Housi Brasil"
                    title="Housi Brasil"
                  />
                  PT-BR
                </div>
                <div
                  onClick={() => {
                    i18next.changeLanguage('en')
                    setLanguage('en')
                  }}
                >
                  <FlagIcon
                    active
                    src="https://housi-site.s3-sa-east-1.amazonaws.com/icons/en.svg"
                    alt="Housi England"
                    title="Housi England"
                  />
                  EN
                </div>
              </DropdownContent>
            </Dropdown>
          </NavItem>
          <LanguageContent>
            <div>
              <FlagIcon
                active={language?.value === 'pt-BR'}
                onClick={() => {
                  i18next.changeLanguage('pt-BR')
                  setLanguage('pt-BR')
                }}
                src="https://housi-site.s3-sa-east-1.amazonaws.com/icons/pt-br.svg"
                alt="Housi Brasil"
                title="Housi Brasil"
              />
              <FlagIcon
                active={language?.value === 'en'}
                onClick={() => {
                  i18next.changeLanguage('en')
                  setLanguage('en')
                }}
                src="https://housi-site.s3-sa-east-1.amazonaws.com/icons/en.svg"
                alt="Housi England"
                title="Housi England"
              />
            </div>
            <div>{language?.value}</div>
          </LanguageContent>
        </ItemsContent>
        <OpacityNav onClick={() => setOpened(false)}>
          <CloseIcon
            style={{
              position: 'absolute',
              right: 0,
              marginTop: '15px',
              marginRight: '15px',
              cursor: 'pointer',
            }}
          />
        </OpacityNav>
      </NavContent>
    </Nav>
  )
}

export default withTranslation(['nav', 'login'])(Navbar)
