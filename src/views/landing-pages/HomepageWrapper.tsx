'use client'

// React Imports
import { useEffect } from 'react'

// Type Imports
import type { SystemMode } from '@core/types'

// Component Imports
// eslint-disable-next-line import/no-unresolved
import { useSettings } from '@core/hooks/useSettings'

import Hero from './Hero'
import HeaderComponent from './HeaderComponent'
import AboutUs from './AboutUs'
import Features from './Features'
import Stats from './Stats'
import Gallery from './Gallery'
import Testimonials from './Testimonials'
import AdmissionsCTA from './AdmissionsCTA'
import ContactUs from './ContactUs'

const HomepageWrapper = ({ mode }: { mode: SystemMode }) => {
  // Hooks
  const { updatePageSettings } = useSettings()

  // For Page specific settings
  useEffect(() => {
    return updatePageSettings({
      skin: 'default'
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <main className='min-h-screen bg-backgroundDefault'>
      <HeaderComponent />
      <Hero mode={mode} />
      <Features />
      <Testimonials />
      <AboutUs />
      <Stats />
      <Gallery />
      <AdmissionsCTA />
      <ContactUs />
    </main>
  )
}

export default HomepageWrapper
