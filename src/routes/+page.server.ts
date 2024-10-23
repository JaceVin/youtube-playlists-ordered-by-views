export async function load({ fetch }: any): Promise<Object> {
    const response = await fetch('/api/test')
    const data = await response.json()
    return data
}