'use client'
import Image from 'next/image'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { Button, IconButton, Typography } from '@mui/material'
import CustomIconButton from '@/@core/components/mui/IconButton'
import Link from 'next/link'
import { SystemMode } from '@/@core/types'
import './Hero.css'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function Hero({ mode }: { mode: SystemMode }) {
  useGSAP(() => {
    const tl = gsap.timeline({
      // yes, we can add it to an entire timeline!
      scrollTrigger: {
        trigger: '.hero-container',
        // markers: true,
        pin: '.hero', // pin the trigger element while active
        start: 'top top', // when the top of the trigger hits the top of the viewport
        end: 'bottom bottom', // end after scrolling 500px beyond the start
        scrub: 1 // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        // snap: {
        //   snapTo: 'labels', // snap to the closest label in the timeline
        //   duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
        //   delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
        //   ease: 'power1.inOut' // the ease of the snap animation ("power3" by default)
        // }
      }
    })

    tl.to('.hero_fg', {
      scale: 1.2
    })
    tl.to(
      '.hero-anthem',
      {
        y: -540
      },
      '<'
    )
    tl.from(
      '.header',
      {
        backgroundColor: '#675dd823'
      },
      '<'
    )
  })

  return (
    <section className='hero-container h-[250vh]'>
      <div className='hero'>
        <div className='absolute left-1/2 sm:top-1/2 top-[60%] -translate-x-1/2 -translate-y-1/2 sm:pt-28 pt-12'>
          <h1 className='hero-anthem uppercase text-center text-6xl sm:text-8xl font-extrabold text-gray-800 tracking-tighter leading-tight sm:leading-tight'>
            ``the <span className='text-success'>right</span> place
            <br />
            for me,
            <br />
            My <span className='text-error'>Knowledge</span>
            <br />
            base laid, <br />
            My <span className='text-primary'>personality</span>.``
          </h1>
        </div>
        <div className='hero_fg' />
        <div className='flex flex-wrap items-center justify-center gap-4 absolute bottom-12 left-1/2 -translate-x-1/2'>
          <Button variant='contained' size='large' className='home_button'>
            Join Our Learning Community
          </Button>
          <Button component={Link} href='#about-us' variant='outlined' size='large' className='home_button'>
            More About Us
          </Button>
        </div>
      </div>
    </section>
  )
}
