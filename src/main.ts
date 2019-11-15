import * as core from '@actions/core'
import { wait } from './wait'

async function run(): Promise<void> {
  const ms = core.getInput('milliseconds')
  console.log(`Waiting ${ms} milliseconds ...`)

  core.debug(new Date().toTimeString())
  await wait(parseInt(ms, 10))
  core.debug(new Date().toTimeString())

  core.setOutput('time', new Date().toTimeString())
}

run().catch(err => {
  core.setFailed(`${err}`)
})
