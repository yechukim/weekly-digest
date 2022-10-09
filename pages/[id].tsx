import { DetailType, PostType } from '../types'
import { getPost, getPostIds } from '../util/post'
import styles from '../styles/Home.module.css'
type PostPropType = {
	post: PostType
}

type ParamType = {
	params: DetailType
}
export async function getStaticPaths() {
	const paths = getPostIds()
	return {
		paths,
		fallback: false,
	}
}

export async function getStaticProps({ params }: ParamType) {
	const post = await getPost(params.id)
	return {
		props: {
			post,
		},
	}
}

function Post({ post }: PostPropType) {
	return (
		<div className={styles.blogWrapper}>
			<div dangerouslySetInnerHTML={{ __html: post.content }}></div>
		</div>
	)
}

export default Post
