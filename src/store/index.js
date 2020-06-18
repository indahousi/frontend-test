import { createBrowserHistory } from 'history'

export const history = createBrowserHistory({
  forceRefresh: false,
})

export const redirect = (to) => history.push(to)
