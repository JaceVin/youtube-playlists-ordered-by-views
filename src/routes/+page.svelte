<script lang='ts'>
    import type { PageData } from './$types'
    export let data: PageData
</script>

<template lang='pug'>
    h1 Hello {data.firstname} {data.lastname}! Welcome to SvelteKit
    p
        |Visit
        |
        a(href='https://kit.svelte.dev').
            kit.svelte.dev
        |
        |to read the documentation
</template>

<style lang='sass'>

</style>