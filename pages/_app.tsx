import type { AppProps } from 'next/app'
import '../styles/global.css'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<div>
			<Component {...pageProps} />
			<style global jsx>{`
				html,
				body,
				body > div:first-child,
				div#__next,
				div#__next > div {
					height: 100%;
					background: #220058;
				}
			`}</style>
		</div>
	)
}

export default MyApp
