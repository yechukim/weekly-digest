import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), '_posts')

export function getAllPosts() {
	const fileNames = fs.readdirSync(postsDirectory)

	const allPosts = fileNames.map((name: string) => {
		const id = name.replace(/\.md$/, '')
		const filePath = path.join(postsDirectory, name)
		const fileContent = fs.readFileSync(filePath, 'utf-8')

		const matterData = matter(fileContent)
		return {
			id,
			data: matterData.data,
		}
	})

	return allPosts
}

export function getPostIds() {
	const fileNames = fs.readdirSync(postsDirectory)
	const names = fileNames.map((name: string) => {
		return {
			params: {
				id: name.replace(/\.md$/, ''),
			},
		}
	})
	return names
}

export async function getPost(id: string) {
	const fullPath = path.join(postsDirectory, `${id}.md`)
	const fileContent = fs.readFileSync(fullPath, 'utf-8')
	const matterData = matter(fileContent)
	const htmlContent = await remark().use(html).process(matterData.content)
	const htmlString = htmlContent.toString()
	return {
		id,
		content: htmlString,
		data: matterData.data,
	}
}
