# Module dependencies.

express = require 'express'

app = module.exports = express.createServer()

# Configuration

app.configure -> 
    app.set 'views', __dirname + '/views'
    app.set 'view engine', 'jade'
    app.use express.bodyParser()
    app.use express.methodOverride()
    app.use app.router
    app.use express.static __dirname + '/public'

app.configure 'development', ->
    app.use express.errorHandler { dumpExceptions: true, showStack: true }


app.configure 'production', ->
    app.use express.errorHandler

# Routes

app.get '/', (req,res) ->
    res.render 'index', {title: 'Express'}


# Only listen on $ node app.js

if !module.parent
    app.listen process.env.PORT==0 ? 1337 : process.env.PORT
    console.log "Express server listening on port %d", app.address().port
