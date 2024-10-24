import type { PageServerLoad } from './$types'

export const load = (async ({ fetch }) => {
    const response = await fetch('/api/test')
    const data = await response.json()
    return data
}) satisfies PageServerLoad