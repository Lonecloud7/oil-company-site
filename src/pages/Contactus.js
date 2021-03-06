import React from "react"
import Layout from "../components/layout"
import PageHeader from "../components/PageHeader/PageHeader"
import * as styles from "../components/index.module.scss"
import { Link } from "gatsby"

const Contactus = () => {
  const pageName = "Contact us"
  return (
    <Layout>
      <PageHeader title={"Contact us"} />

      <div className={styles.pageNav}>
        <Link to="/">Home</Link>/<Link to="/Contactus">{pageName}</Link>
      </div>
    </Layout>
  )
}

export default Contactus
