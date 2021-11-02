require('dotenv').config()
const { Client } = require('@notionhq/client')


const read = async () => {
    const notion = new Client({
        auth: process.env.NOTION_API_KEY
    })

    const negativeCalendar = await notion.databases.query({
        database_id: 'be24f2ee14fb48caabcc5b5879adbab8'
    })

    negativeCalendar.results.forEach(result => {
        console.log(result.properties)
    })
}

read()