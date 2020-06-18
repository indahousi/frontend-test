import React, { useContext } from 'react'
import { withTranslation } from 'react-i18next'
import {
  Details,
  DivCnpj,
  Footer as Foo,
  LinkFooter,
  LinkFooterRouter,
  Logo,
  MediaIcons,
  AppLinkImage,
} from './styled'
import { InstagramIcon } from '../../assets/icons/nav/instagram.icon'
import { LinkedinIcon } from '../../assets/icons/nav/linkedin.icon'
import { FacebookIcon } from '../../assets/icons/nav/facebook.icon'
import { TextMedium } from '../typograph/text'
import { Container, Row, Column } from '../layout'
import { TranslateContext } from '../../store/context/translate.context'

const Footer = ({ t }) => {
  const { language = '' } = useContext(TranslateContext)

  const appleLink = `https://housi-site.s3-sa-east-1.amazonaws.com/footer/app-store-${language.value.toLocaleLowerCase()}.png`
  const googleLink = `https://housi-site.s3-sa-east-1.amazonaws.com/footer/google-play-${language.value.toLocaleLowerCase()}.png`

  return (
    <Foo>
      <Container reduced>
        <Row>
          <Column md={3} lg={3} xl={3}>
            <Row>
              <Column
                flex
                align="center"
                className="flex-column align-items-md-start"
              >
                <Logo
                  alt="Housi on Demand Pink"
                  title="Housi on Demand Pink"
                  src="https://housi-site.s3-sa-east-1.amazonaws.com/logo/housi-logo-signature.svg"
                />
              </Column>
              <Column topCustom={40} topCustomD={32}>
                <TextMedium bold center>
                  {t('footer:MANIFEST')}
                </TextMedium>
                <br />
                <TextMedium center>
                  {t('footer:MANIFEST_DESCRIPTION')}
                </TextMedium>
                <br />
                <TextMedium center bold>
                  {t('footer:ON_DEMAND')}
                </TextMedium>
              </Column>
              <Column
                flex
                topCustom={28}
                topCustomD={28}
                align="center"
                className="align-items-md-start flex-column"
              >
                <TextMedium center bold>
                  {t('footer:DOWNLOAD')}
                </TextMedium>
                <a
                  href="https://apps.apple.com/br/app/housi/id1472319764"
                  target="_blank"
                >
                  <AppLinkImage src={appleLink} alt="apple store" />
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=br.com.xapps.housiapp"
                  target="_blank"
                >
                  <AppLinkImage src={googleLink} alt="google play" />
                </a>
              </Column>
            </Row>
          </Column>
          <Column
            topCustom={32}
            topCustomD={64}
            md={3}
            lg={3}
            xl={3}
            flex
            justify="center"
            className="justify-content-md-end"
          >
            <DivCnpj>
              <LinkFooterRouter to="/quem-somos" black center>
                {t('footer:links.LINK1')}
              </LinkFooterRouter>
              <LinkFooterRouter to="/plugar" black center>
                {t('footer:links.LINK2')}
              </LinkFooterRouter>
              <LinkFooterRouter to="/parceiros" black center>
                {t('footer:links.LINK3')}
              </LinkFooterRouter>
              <LinkFooterRouter to="/decor" black center>
                {t('footer:links.LINK4')}
              </LinkFooterRouter>
              <LinkFooterRouter to="/corporate" black center>
                {t('footer:links.LINK5')}
              </LinkFooterRouter>
              <LinkFooter href="https://jobs.kenoby.com/housi/" black center>
                {t('footer:links.LINK6')}
              </LinkFooter>
            </DivCnpj>
          </Column>
          <Column
            topCustom={32}
            topCustomD={64}
            md={3}
            lg={3}
            xl={3}
            flex
            justify="center"
            className="justify-content-md-end"
          >
            <div className="d-flex align-items-center flex-column align-items-md-start">
              <LinkFooter
                black
                center
                href="https://housi.zendesk.com/hc/pt-br"
                target="_blank"
              >
                {t('footer:ANSWER')}
              </LinkFooter>
              <LinkFooterRouter to="/termos-e-condicoes" black center>
                {t('footer:USE_TERMS')}
              </LinkFooterRouter>
              <LinkFooterRouter to="/termos-do-proprietario" black center>
                {t('footer:OWNER_TERMS')}
              </LinkFooterRouter>
              <LinkFooterRouter to="politica-de-cancelamento" black center>
                {t('footer:POLITICS')}
              </LinkFooterRouter>
            </div>
          </Column>
          <Column
            topCustom={32}
            topCustomD={64}
            flex
            className="justify-content-md-end"
            md={3}
            lg={3}
            xl={3}
            justify="center"
          >
            <DivCnpj>
              <TextMedium black center>
                CNPJ: 30.032.993/0001-44
              </TextMedium>
              <LinkFooter center primary href="tel:0800 46 46874">
                0800-IN HOUSI
              </LinkFooter>
              <LinkFooter center primary href="tel:0800 46 46874">
                0800 46 46874
              </LinkFooter>
            </DivCnpj>
          </Column>
        </Row>
      </Container>
      <Details>
        <Container reduced topCustom={32} topCustomD={0}>
          <Row>
            <Column
              topCustom={32}
              topCustomD={0}
              self="center"
              md={1}
              lg={1}
              xl={1}
              className="order-md-2 offset-md-6 justify-content-md-end"
            >
              <TextMedium center>{t('footer:FOLLOW')}</TextMedium>
            </Column>
            <Column
              flex
              justify="center"
              md={2}
              lg={2}
              xl={2}
              className="order-md-3 justify-content-md-end"
              self="center"
            >
              <MediaIcons>
                <a
                  href="https://www.facebook.com/housioficial/"
                  target="_blank"
                >
                  <FacebookIcon />
                </a>
                <a
                  href="https://www.instagram.com/housioficial/"
                  target="_blank"
                >
                  <InstagramIcon />
                </a>
                <a
                  href="https://www.linkedin.com/company/housioficial/"
                  target="_blank"
                >
                  <LinkedinIcon />
                </a>
              </MediaIcons>
            </Column>
            <Column md={3} lg={3} xl={3} self="center" className="order-md-1">
              <TextMedium center>© Housi Gestão Patrimonial</TextMedium>
            </Column>
            <Column topCustom={32} topCustomD={0} />
          </Row>
        </Container>
      </Details>
    </Foo>
  )
}

export default withTranslation('footer')(Footer)
