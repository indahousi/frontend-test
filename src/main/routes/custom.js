import React from 'react'
import { Route, withRouter } from 'react-router-dom'
import { Helmet } from 'react-helmet'

export const SeoRoute = withRouter(
  ({ path, location, title = '', description = '', canonical, ...props }) => {
    let urlCanonical = canonical || window.location.href
    if (!urlCanonical.match(/.*\/$/m)) urlCanonical += '/'

    return (
      <>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <link rel="canonical" href={urlCanonical} />
          <link rel="alternate" hrefLang="pt-br" href={urlCanonical} />
          <script type="application/ld+json">
            {`
              {
                "@context":"http://schema.org",
                "@type":"BreadcrumbList",
                "itemListElement":[ 
                    { 
                      "@type":"ListItem",
                      "position":1,
                      "name":"Housi",
                      "item":"https://housi.com.br/"
                    },
                    { 
                      "@type":"ListItem",
                      "position":2,
                      "name":"${title}",
                      "item":"${urlCanonical}"
                    }
                ]

              }
            `}
          </script>
        </Helmet>
        <Route path={path} {...props} />
      </>
    )
  }
)
