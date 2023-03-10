import Head from 'next/head'
import styles from '@styles/pages/home.module.scss'
import { NextPage } from 'next'

const Home: NextPage = () => {

	// render

	return (
		<>
			<Head>
				<title>Rody Gosset&apos;s portfolio</title>
				<meta name="description" content="Rody Gosset's portfolio - Web developper & designer" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<main id={styles.main}>
				<h1>Hello, World!</h1>
			</main>
		</>
	)
}

export default Home
