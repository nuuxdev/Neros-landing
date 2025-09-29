import { Advent_Pro } from 'next/font/google'

// Type Imports
import type { ChildrenType } from '@core/types'

// Component Imports
// eslint-disable-next-line import/no-unresolved
import Providers from '@components/Providers'
// eslint-disable-next-line import/no-unresolved
import BlankLayout from '@layouts/BlankLayout'

// Util Imports
// eslint-disable-next-line import/no-unresolved
import { getSystemMode } from '@core/utils/serverHelpers'

const adventPro = Advent_Pro({
  subsets: ['latin'],
  display: 'swap'
})

type Props = ChildrenType

const Layout = async (props: Props) => {
  const { children } = props

  // Vars
  const direction = 'ltr'
  const systemMode = await getSystemMode()

  return (
    <Providers direction={direction}>
      <BlankLayout systemMode={systemMode}>
        <div className={adventPro.className}>{children}</div>
      </BlankLayout>
    </Providers>
  )
}

export default Layout
