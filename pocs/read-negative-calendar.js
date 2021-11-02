require('dotenv').config()
const { Client } = require('@notionhq/client')


const read = async () => {
    const notion = new Client({
        auth: process.env.NOTION_API_KEY
    })

    const negativeCalendar = await notion.databases.query({
        database_id: 'e58410915cd74f169b5959aa017d611f'
    })

    negativeCalendar.results.forEach(result => {
        console.log(result.properties)
    })
}

read()