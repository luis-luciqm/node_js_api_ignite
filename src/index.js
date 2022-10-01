const express = require('express');

const app = express();
const port = 3333

app.get('/', (request, response) => {
    const users = {
        id: 1,
        name: 'Luís',
        age: '22',
        city: {
            name: 'Rafael Fernandes',
            state: 'Rio Grande do Norte',
            zone: 'Nordeste'
        },
        hobbies: {
            name: 'Programação',
            type: 'Back-End',
            language: 'Javascript and Python',
            framework: 'Express and Django',
            database: 'PostgreSQL and MySQL'
        },
        social: {
            github: 'luis-luciqm',
        },
        tokens: {
            access: 'skwhrhesnfck4tuiedivnr5r8fh5tjre9d8tu5t95yreudco2mti5tg8fvn6yiy6970uymtgbj67ouyt09rdfh6i',
            refresh: 'A@I498eufjrnt5886759thimuh0gt0o8ouytr0fciert594ew9mtvo'
        }
    }

    return response.json(users);
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})