import React from "react"
import Layout from "../components/layout"
import PageHeader from "../components/PageHeader/PageHeader"
import * as styles from "../components/index.module.scss"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const Aboutus = () => {
  const pageName = "About us"
  return (
    <Layout>
      <PageHeader title={"About us"} />

      <div className={styles.pageNav}>
        <Link to="/">Home</Link>/<Link to="/Aboutus">{pageName}</Link>
      </div>

      <div className={styles.pageText}>
        <div className={styles.pageText__content}>
          <div className={styles.pageText__header}>
            <h2>Who We Are</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit,
              nobis repellendus. Laudantium, totam!
            </p>
          </div>
          <div className={styles.pageText__passage}>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis
              dolorem eum, harum quisquam quam quo nobis consequatur aliquid
              eligendi sapiente illo? Veniam ipsum recusandae ipsa veritatis
              tenetur laborum repellendus incidunt. Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Dolores saepe perspiciatis qui,
              nihil quaerat iste exercitationem facilis at quibusdam maxime
              similique aliquam, fuga doloremque! Dolore natus minima ipsam fuga
              quis.
              <i>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
                nemo veniam temporibus odio ipsam. Similique, aliquam numquam.
              </i>
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              quasi autem nesciunt asperiores, est quidem reprehenderit id
              delectus recusandae ut earum nemo totam laborum nobis officiis
              doloremque quae distinctio ea?
              <i>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas quidem blanditiis repellat. Quam eos quod dignissimos
                adipisci dolor voluptates ab!
              </i>
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis error ipsam repudiandae earum nam perferendis porro
              quo, hic at nihil, veritatis qui quaerat nisi maxime consectetur
              fugit, minus praesentium maiores!
            </p>
          </div>
          <div className={styles.pageText__img}>
            <StaticImage
              src="../images/operation.jpg"
              loading="eager"
              width={650}
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt=""
              style={{ marginBottom: `var(--space-3)` }}
            />
          </div>
          <div className={styles.pageText__list}>
            <ul>
              <li className={styles.pageText__listHead}>List Head</li>
              <li>Lorem ipsum dolor sit.</li>
              <li>Lorem ipsum dolor sit.</li>
              <li>Lorem ipsum dolor sit.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.pageText__flexCard}>
        <div className={styles.FlexCard__content}>
          <div className={styles.FlexCard__content__text}>
            <h2>Lorem ipsum dolor</h2>
            <article>
              sit amet consectetur adipisicing elit. Voluptates esse incidunt
              officia vero consequuntur enim laboriosam harum fugit atque
              itaque?vero consequuntur enim
            </article>
          </div>
          <div className={styles.FlexCard__content__img}>
            <StaticImage
              src="../images/heading.jpg"
              loading="eager"
              width={1920}
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt=""
              style={{ marginBottom: `var(--space-3)` }}
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Aboutus
