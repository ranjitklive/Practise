#Steps

```
install node --> prerequisite

npm init -y --> creates package.json

npm i express 

npm i --save-dev nodemon --> helps restart app when code change made

create a script called devStart inside package.json --> scripts

this will run command nodemon server.js --> entry point

to run --> npm run devStart

create express server using --> server.js

const express = require('express')

const app = express() --> create an app

app.listen(3000)

setup routes

app.get() --> app.get("/", (req, res, next))

app.put()

app.post()

app.delete()

app.patch()

app.get('/', (req, res) => {
    console.log("here")
    res.send("hi")
    res.sendStatus(500)
    res.status(500).send("hi") --> chaining
    res.status(500).json({ message: "error" })`
    res.json({ message: "error" }) --> success (200)
    res.download("server.js")
    res.render('index') --> render a file
    views reside inside folder 'views'
    setup view engine --> we can use server to run code inside view 
})

npm i ejs

app.set('view engine', 'ejs')

rename index.html to ejs

install extension in vscode for ejs

res.render('index', { text: "hello"})

within index.ejs <%= 2 + 2 %>

<%= text %>

<%= locals.text || "default text" %>

create router
```
