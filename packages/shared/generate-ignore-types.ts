import importMap from 'vuetify/dist/json/importMap.json'
import { writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

const path = resolve('./src/importIgnoreToken.ts');

const content = `export type ImportIgnoreToken =\n`
    + [...Object.keys(importMap.components), ...importMap.directives]
        .map(name => `\t"${name}"`)
        .join(' |\n')
writeFileSync(path, content)
