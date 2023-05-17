import fastify from 'fastify'
import { memoriesRutes } from './routes/memories'

const app = fastify()

app.register(memoriesRutes)
app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('🚀 HTTP Server running on http://localhost:3333')
  })
