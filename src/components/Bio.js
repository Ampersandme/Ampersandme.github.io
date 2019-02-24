import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import { FaTwitter, FaLinkedin, FaGithub, FaCodepen } from "react-icons/fa";
import styles from "../styles/link.module.css"

import { rhythm } from '../utils/typography'
import { red } from 'ansi-colors';

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <div
            style={{
              display: `flex`,
              marginBottom: rhythm(2.5),
            }}
          >
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                minWidth: 50,
                borderRadius: `25%`,
              }}
              imgStyle={{
                borderRadius: `50%`,
              }}
            />
            <div
              style={{
                textAlign: `center`,

              }}
            >
              <p>
                Written by <strong>{author}</strong> who is moving to London. Arriving March 6th, 2019
                {` `}

              </p>
              <div id="centerItems">
                <a href="" ><FaTwitter className={styles.icon + " " + styles.twitter} /></a>
                <a href="" ><FaCodepen className={styles.icon + " " + styles.codepen}/></a>
                <a href="" ><FaGithub className={styles.icon + " " + styles.github} /></a>
                <a class="link" href="https://www.linkedin.com/in/evanplayle/" ><FaLinkedin className={styles.icon + " " + styles.linkedin} /></a>
              </div>
            </div>
          </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/face-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 400, height: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

export default Bio
