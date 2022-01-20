import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Hero } from "../components/Hero"
import { Trips } from "../components/Trips"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Trips />
  </Layout>
)

export default IndexPage
