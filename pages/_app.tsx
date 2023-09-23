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
					background: #322c2d;
					color: #e1e2e3;
				}
			`}</style>
		</div>
	)
}

export default MyApp
