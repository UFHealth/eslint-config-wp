"use strict"

const config = require("../")
const fs = require("fs")
const Linter = require("eslint").Linter
const linter = new Linter()

const CLIEngine = require('eslint').CLIEngine
const cli = new CLIEngine({
  configFile: './index.js'
})

const defaultScript = fs.readFileSync('./__tests__/default.js', 'utf-8')
const reactScript = fs.readFileSync('./__tests__/react.js', 'utf-8')
const preactScript = fs.readFileSync('./__tests__/preact.js', 'utf-8')

const findFailure = (result, ruleName) => {
  return result.messages.find(message => message.ruleId === ruleName)
}

describe('wordpress defaults', () => {
  let report
  const cli = new CLIEngine({
    baseConfig: config
  })

  beforeEach(() => {
    report = cli.executeOnText(defaultScript)
  })

  it('supports wordpress globals', () => {
    expect(findFailure(report.results[0], 'no-undef')).not.toBeDefined()
  })

  it('supports global wp pragma', () => {
    expect(findFailure(report.results[0], 'react/react-in-jsx-scope')).not.toBeDefined()
  })
})

describe('extendable react integration', () => {

  describe('requires non-wordpress pragma in scope', () => {
    const reactConfig = Object.assign({}, config, {
      settings: {
        react: { pragma: 'React', version: '16.5' }
      }
    })
    const reactCli = new CLIEngine({ baseConfig: reactConfig })
    const preactConfig = Object.assign({}, config, {
      settings: {
        react: { pragma: 'Preact', version: '8.4' }
      }
    })
    const preactCli = new CLIEngine({ baseConfig: preactConfig })

    let report, message

    it('supports react', () => {
      report = reactCli.executeOnText(defaultScript)
      message = findFailure(report.results[0], 'react/react-in-jsx-scope')
      expect(message).toBeDefined()
      expect(message.message).toMatch('React')

      report = reactCli.executeOnText(reactScript)
      message = findFailure(report.results[0], 'react/react-in-jsx-scope')
      expect(message).not.toBeDefined()
    })

    it('supports preact', () => {
      report = preactCli.executeOnText(defaultScript)
      message = findFailure(report.results[0], 'react/react-in-jsx-scope')
      expect(message).toBeDefined()
      expect(message.message).toMatch('Preact')

      report = preactCli.executeOnText(preactScript)
      message = findFailure(report.results[0], 'react/react-in-jsx-scope')
      expect(message).not.toBeDefined()
    })
  })
})
