'use client'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { Button, Chip, Typography } from '@mui/material'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function AdmissionsCTA() {
  // useGSAP(() => {
  //   gsap
  //     .from('.admissions-title', { y: 20, opacity: 0, duration: 0.6, ease: 'power2.out' })
  //     .from('.admissions-actions', { y: 14, opacity: 0, duration: 0.5, ease: 'power2.out' }, '-=0.2')
  // })

  return (
    <section
      id='admissions'
      className='relative overflow-hidden plb-[100px] bg-gradient-to-b from-primary/10 via-primary/5 to-transparent'
    >
      {/* Background gradient overlays and decorative blobs */}
      <div className='pointer-events-none absolute -z-10 inset-0'>
        {/* subtle horizontal wash */}
        <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/10 dark:via-black/20 to-transparent' />
        {/* blobs */}
        <div className='absolute -top-20 -left-24 w-[380px] h-[380px] rounded-full blur-3xl opacity-70 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.25),_transparent_70%)]' />
        <div className='absolute -bottom-24 -right-20 w-[440px] h-[440px] rounded-full blur-3xl opacity-70 bg-[radial-gradient(ellipse_at_center,_rgba(168,85,247,0.25),_transparent_70%)]' />
      </div>

      <div className='max-w-5xl mx-auto px-4'>
        {/* Glass panel wrapper for transparency effect */}
        <div className='relative rounded-2xl border border-white/20 bg-white/10 dark:bg-white/5 backdrop-blur-md shadow-lg text-center space-y-6 p-6 sm:p-10'>
          <div className='admissions-title flex flex-col gap-3 items-center'>
            <Chip size='medium' variant='tonal' color='primary' label='Admissions' />
            <Typography
              variant='h4'
              className='font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary to-fuchsia-500'
            >
              Ready to give your children the best school experience?
            </Typography>
            <Typography className='max-w-3xl'>
              Admissions are open for all grades. Join a caring community that nurtures excellence and character.
            </Typography>
            <div className='h-px w-40 mx-auto bg-gradient-to-r from-transparent via-primary/60 to-transparent' />
          </div>

          <div className='admissions-actions flex flex-col sm:flex-row items-center justify-center gap-4'>
            <Button href='#contact' variant='contained' size='large' startIcon={<i className='tabler-forms' />}>
              Apply Now
            </Button>
            <Button href='#contact' variant='outlined' size='large' startIcon={<i className='tabler-map-pin' />}>
              Book a Campus Visit
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
