import { determineScript } from './helpers/determineScript'
import { execute } from './helpers/execute'

/**
 * 
 * 💡 To explore all available features, fork the CodeSandbox and connect it to your own demo database.
 * Follow the instructions here: https://github.com/prisma-csb/prisma-client-demo-ts/blob/master/SETUP.md
 * 
 * 🚀 Run `yarn demo` to start exploring the API. 
 *
 */

async function main() {
  // Determine which script to run by launching an interactive wizard
  const script = await determineScript()

  // Execute the script
  await execute(script)
}

main()
