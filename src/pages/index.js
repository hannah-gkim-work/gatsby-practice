import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Hero } from "../components/Hero"
import { Trips } from "../components/Trips"
import Testimonials from "../components/styles/Testimonials"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Trips heading="Out Favorite Destinations" />
    <Testimonials />
  </Layout>
)

export default IndexPage
