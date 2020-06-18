import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import { withTranslation } from 'react-i18next'
import { LanguageMiddleware } from './middleware'
import { SeoRoute } from './custom'

const Routes = ({ history, t }) => {
  React.useEffect(() => {
    const unlisten = history.listen(() => window.scrollTo(0, 0))
    return () => unlisten()
  }, [history])

  return (
    <Switch>
      <Route path="/pt/**" component={LanguageMiddleware} />
      <Route path="/en/**" component={LanguageMiddleware} />
      <SeoRoute
        path="/"
        title={t('titles:home.SEO_TITLE')}
        description={t('titles:home.SEO_DESCRIPTION')}
        exact
        component={() => <></>}
      />
    </Switch>
  )
}
export default withTranslation('titles')(withRouter(Routes))
