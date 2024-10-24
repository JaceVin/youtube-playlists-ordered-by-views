import { json } from '@sveltejs/kit'
import type {  RequestHandler } from './$types'

export const GET = (async () => {
    return json({
        firstname: 'Denzel',
        lastname: 'Hernandez'
    })
}) satisfies RequestHandler