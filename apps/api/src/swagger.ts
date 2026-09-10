import fs from 'fs'
import path from 'path'
import yaml from 'js-yaml'

export function loadOpenApi() {
  const yamlPath = path.join(__dirname, '../openapi.yaml')
  const file = fs.readFileSync(yamlPath, 'utf8')
  return yaml.load(file) as any
}
