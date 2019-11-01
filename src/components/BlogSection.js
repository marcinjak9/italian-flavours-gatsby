import React, { Component } from 'react'
import BlogCard from './BlogCard'

let scriptjs

class BlogSection extends Component {
  state = {
    scriptLoad: false,
  }

  componentDidMount() {
    scriptjs = require('scriptjs') // eslint-disable-line
    const { posts } = this.props
    if (posts.length > 0) {
      scriptjs('https://blog.italianflavours.it/public/ghost-sdk.min.js', (e) => {
        this.setState({ scriptLoad: true })
      })
    }
  }

  render() {
    const {
      posts, title, cta, home, tour,
    } = this.props
    const { scriptLoad } = this.state
    if (posts.length <= 0) {
      return <div />
    }
    return (
      <div className={`container-fluid ${home ? 'home-section brand-bg' : ''} ${tour ? 'cari-amici-section grey-bg' : ''} smaller-section `}>
        <div className="row">
          <div className="col-md-12 section-title-wrapper">
            <h2 className={`text-center ${tour ? 'brand-text' : 'white-text'}`}>{title}</h2>
          </div>
          <div className="col">
            <div className="container">
              <div className="row">
                {posts.map((item, i) => (
                  <BlogCard slug={item} scriptLoad={scriptLoad} key={i} /> // eslint-disable-line
                ))}
              </div>
            </div>
          </div>

          {cta && (
          <div className="col-md-12 text-center cta-blog">
            {cta()}
          </div>
          )}

        </div>
      </div>
    )
  }
}

export default BlogSection
