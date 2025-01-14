import { LoaderDefinitionFunction } from 'webpack'
import { generateImports } from '@vuetify/loader-shared'

export default (function VuetifyLoader (content, sourceMap) {
  if (this.data?.skip) {
    return content
  }

  this.async()
  this.cacheable()

  const { code: imports, source } = generateImports(content)

  this.callback(null, source + imports, sourceMap)
} as LoaderDefinitionFunction)

export const pitch = (function VuetifyLoaderPitch (remainingRequest, precedingRequest, data) {
  if (this.loaders.some(loader => loader.path.endsWith('vue-loader/dist/pitcher.js'))) {
    data!.skip = true
  }
} as LoaderDefinitionFunction)
