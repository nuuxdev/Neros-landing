// eslint-disable-next-line import/no-unresolved
import { getServerMode } from '@core/utils/serverHelpers'

// eslint-disable-next-line import/no-unresolved
import HomepageWrapper from '@/views/landing-pages/HomepageWrapper'

async function HomePage() {
  // Vars
  const mode = await getServerMode()

  return <HomepageWrapper mode={mode} />
}

export default HomePage
