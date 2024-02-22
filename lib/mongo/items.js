import clientPromise from ''

let client
let db
let items

async function init() {
    if (db) return
    try {
        client = await clientPromise
        db = await client.db()
        items = await db.collection('shoes')
    } catch (error) {
        throw new Error('Failed to stablish connection to database')
    }
}

;(async () => {
    await init()
})()

export async function getItems() {
    try {
        if (!items) await init() 
            const result = await items
                .find({})
                .limit(20)
                .map(user => ({...user, _id: user_id.toString() }))
                .toArray()

            return { movies: result }
    } catch (error) {
        return { error: 'Failed to fetch items!' }
    }
}