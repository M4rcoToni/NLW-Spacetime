import 'dotenv/config'
import fastify from 'fastify'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import { resolve } from 'node:path'
import multipart from '@fastify/multipart'
import { memoriesRutes } from './routes/memories'
import { authRoutes } from './routes/auth'
import { uploadRoutes } from './routes/upload'

const app = fastify()

app.register(multipart)
app.register(require('@fastify/static'), {
  root: resolve(__dirname, '../uploads'),
  prefix: '/uploads',
})

app.register(cors, {
  origin: true,
})

app.register(jwt, {
  secret: 'spacetime',
})

app.register(memoriesRutes)
app.register(authRoutes)
app.register(uploadRoutes)

app
  .listen({
    port: 3333,
    host: '0.0.0.0',
  })
  .then(() => {
    console.log('🚀 HTTP Server running on http://localhost:3333')
  })
