import React from 'react'
import { Link } from 'gatsby'
import navStyles from '../styles/navbar.module.css'
import { rhythm, scale } from '../utils/typography'

console.log(navStyles)
class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(0.75),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        {header}
        <div
          style = {{
            display: `grid`,
            gridTemplateColumns: `auto auto auto auto`,
            gridTemplateRows: `auto`,
            marginBottom: rhythm(0.75),
          }}
        >        
          <Link 
            to={`/projects`}
            className={navStyles.navbarItem}
          >
              Projects
          </Link>
          <Link 
            to={`/blog`}
            className={navStyles.navbarItem}
          >
              Blog
          </Link>
          <Link 
            to={`/contact`}
            className={navStyles.navbarItem}
          >
              Contacts
          </Link>          
          <Link
            to={`/about/`}
            className={navStyles.navbarItem}
          >
              About
          </Link>
        </div>

        {children}
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    )
  }
}

export default Layout
