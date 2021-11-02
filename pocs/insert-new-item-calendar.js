require('dotenv').config()
const { Client } = require('@notionhq/client')


const insert = async () => {
    const notion = new Client({
        auth: process.env.NOTION_API_KEY
    })

    const newData = {
            Confirmado: { id: 'SHUo', type: 'checkbox', checkbox: false },
            Date: {
            id: 'Tykn',
            type: 'date',
            date: { start: '2021-11-04T10:00:00.000-03:00', end: null }
            },
            'Observações': { id: 'm%7CfB', type: 'rich_text', rich_text: [{text: {content: 'Um serviço'}}]},
            Paciente: { id: 'sJrY', type: 'rich_text', rich_text: [{text: {content: 'Carol'}}] },
            Name: { id: 'title', type: 'title', title: [{text: {content: 'Carol'}}] }
        }


    const inserted = await notion.pages.create({
        parent: {
            database_id: 'be24f2ee14fb48caabcc5b5879adbab8'
        },
        properties: newData
    })

    console.log(inserted)

    /*    
    const negativeCalendar = await notion.databases.query({
        database_id: 'be24f2ee14fb48caabcc5b5879adbab8'
    })

    negativeCalendar.results.forEach(result => {
        console.log(result.properties)
    })*/
}

insert()