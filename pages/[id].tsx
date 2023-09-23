import { DetailType, PostType } from '../types'
import { getPost, getPostIds } from '../util/post'
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
	const { data } = post
	return (
		<div className="relative z-10 grid grid-cols-[1fr,min(640px,100%),1fr] gap-y-8 px-4 pt-48 font-sans text-base xl:grid-cols-[1fr,minmax(auto,240px),min(640px,100%),minmax(auto,240px),1fr] xl:gap-x-9 t-2 xl:[&>*]:col-start-3">
			<div className="text-4xl bg-rose-300 max-w-fit px-4 py-2 text-black font-bold">
				{data.title}
			</div>
			<div className="text-end">{data.date}</div>

			<div dangerouslySetInnerHTML={{ __html: post.content }}></div>
		</div>
	)
}

export default Post
