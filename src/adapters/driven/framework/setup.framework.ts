import express, { Express } from 'express'
import { RouterFramework } from './router-controller.framework'

export const SetupFramework = async (): Promise<void> => {
  const port: string | number = process.env.PORT || 3000
  const framework: Express = express()

  framework.use(express.json())

  RouterFramework(framework)

  framework.listen(port, () => {
    console.info(`Server running on port http://127.0.0.1:${port}`)
  })
}
