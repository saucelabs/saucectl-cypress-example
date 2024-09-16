import { env } from 'node:process';
import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      bundler: 'vite',
      webServerCommands: {
        default: 'npx nx run nx-example:serve',
        production: 'npx nx run nx-example:preview',
      },
      ciWebServerCommand: 'npx nx run nx-example:preview',
      ciBaseUrl: 'http://localhost:4300',
    }),
    ...(!env.SAUCE_JOB_ID) && { baseUrl: 'http://localhost:3000' },
  },
});
