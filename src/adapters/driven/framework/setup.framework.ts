import express, { Express } from 'express'
import { RouterFramework } from './router-controller.framework'

export const SetupFramework = async (): Promise<void> => {
  const port: string | number = 3000 || process.env.PORT
  const host: string = '0.0.0.0'
  const framework: Express = express()

  framework.use(express.json())

  RouterFramework(framework)

  framework.listen(port, host, () => {
    console.log(`Server running at http://127.0.0.1:${port}`)
  })
}
