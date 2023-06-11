import { env } from '$env/dynamic/private'
import type { PageServerLoad } from './$types'
import { getTagline } from '@/src/lib/storyblok'

export const load: PageServerLoad = async ({ url }) => {
	const tagline = await getTagline('home')
	return { tagline, domain: env.DOMAIN ?? url.origin }
}
