const express = require('express')
const fs = require('fs')
const path = require('path')
const ReactSSR = require('react-dom/server')
const serverEntry = require('../dist/server-entry.js').default

// const template = fs.createReadStream(path.resolve(__dirname, '../client/template.html'))
const template = fs.readFileSync(path.resolve(__dirname, '../dist/index.html'), 'utf8')

const app = express()

// console.log(template);

app.use('/public', express.static(path.resolve(__dirname, '../dist')))

app.get('*', function(req, res) {
    const appString = ReactSSR.renderToString(serverEntry)
        // res.send(appString)
    res.end(template.replace('<app></app>', appString))
        // template.pipe(res)
})

app.listen(3333, function() {
    console.log('server is listening on 3333');
})