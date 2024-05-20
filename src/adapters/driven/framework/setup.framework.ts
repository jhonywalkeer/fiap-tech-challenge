import express, { Express } from 'express'

export const SetupFramework = async (): Promise<Express> => {
  const framework: Express = express()
  const port: string | number = process.env.PORT || 3000

  framework.listen(port, () => {
    console.log(`Server running on port ${port}`)
  })

  framework.use('/', (req, res) => {
    res.send('Hello World!')
  })

  return framework
}
