import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Greeter from "browser-node"

var greeter = new Greeter();
// should log "Hello from nodejs" when visiting a page built by `gatsby develop` (port 8000)
// should log "Hello from browser" when visiting a page built by  `gatsby build` + `gatsby serve` (port 9000)
greeter.greet(); 

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
