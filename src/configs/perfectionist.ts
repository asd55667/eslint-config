import { pluginPerfectionist } from '../plugins'
import type { ConfigItem } from '../types'

/**
 * Optional perfectionist plugin for props and items sorting.
 *
 * @see https://github.com/azat-io/eslint-plugin-perfectionist
 */
export function perfectionist(): ConfigItem[] {
  return [
    {
      name: 'wcw:perfectionist',
      plugins: {
        perfectionist: pluginPerfectionist,
      },
    },
  ]
}
