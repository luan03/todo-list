import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400&display=swap" rel="stylesheet" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Today
        </h1>

        <div className={styles.add}>
          <input type="text" name="add" placeholder="Add a task to do" />
        </div>

        <label htmlFor="item" className={styles.item}>
          <input type="checkbox" id="item" />
          Surfar no Hawaii
        </label>

        <label htmlFor="item2" className={styles.item}>
          <input type="checkbox" id="item2" />
          Andar de skate em Barcelona
        </label>

      </main>
    </div>
  )
}

export default Home
