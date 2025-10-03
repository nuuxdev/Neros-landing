'use client'

import { useRef } from 'react'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Grid from '@mui/material/Grid2'
import { Avatar, Card, CardContent, Chip, Rating, Typography } from '@mui/material'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const testimonials = [
  {
    name: 'Emawaysh Hailu',
    role: 'Parent of Grade 5',
    quote: "The teachers genuinely care. My child has grown in confidence and curiosity since joining Neros' School."
  },
  {
    name: 'Yared Tadesse',
    role: 'Class of 2022',
    quote: 'The balance of academics and extracurriculars prepared me well for university and beyond.'
  },
  {
    name: 'Blen Tadele',
    role: 'Class of 2022',
    quote: 'The balance of academics and extracurriculars prepared me well for university and beyond.'
  },
  {
    name: 'Biftu Leykun',
    role: 'Class of 2022',
    quote: 'The balance of academics and extracurriculars prepared me well for university and beyond.'
  },
  {
    name: 'Bontu Lemma',
    role: 'Class of 2022',
    quote: 'The balance of academics and extracurriculars prepared me well for university and beyond.'
  },
  {
    name: 'Yonas Debru',
    role: 'Grade 9',
    quote: 'Clubs, competitions and supportive friends make every day exciting!'
  }
]

export default function Testimonials() {
  const mobileRef = useRef<HTMLDivElement | null>(null)

  // Mobile-only auto-scrolling marquee for testimonials
  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add('(max-width: 639px)', () => {
        const track = mobileRef.current?.querySelector('.tst-scroll-track') as HTMLElement | null

        if (!track) return

        // We duplicate the items once; half of scrollWidth equals one set width
        const totalWidth = track.scrollWidth / 2

        const tween = gsap.fromTo(track, { x: 0 }, { x: -totalWidth, duration: 30, ease: 'none', repeat: -1 })

        return () => tween.kill()
      })

      return () => mm.revert()
    },
    { scope: mobileRef }
  )

  return (
    <section id='testimonials' className='plb-[100px] bg-backgroundDefault'>
      <div className='max-w-6xl mx-auto px-4 space-y-10'>
        <div className='flex flex-col gap-y-3 items-center justify-center mb-12'>
          <Chip size='medium' variant='tonal' color='primary' label='Testimonials' />
          <h2 className='text-4xl sm:text-5xl font-extrabold text-center tracking-tight'>
            What Our{' '}
            <span className='relative z-[1]'>
              Community
              <img
                src='/images/home/bg-shape.png'
                alt='bg-shape'
                className='absolute block-end-0 z-[1] bs-[40%] is-[132%] -inline-start-[19%] block-start-[17px]'
              />
            </span>{' '}
            Says?
          </h2>
          <Typography className='max-w-3xl'>Experiences from parents, students and alumni and partners.</Typography>
        </div>

        {/* Mobile: horizontal auto-scrolling carousel */}
        <div className='sm:hidden' ref={mobileRef}>
          <div className='tst-scroll-viewport overflow-hidden'>
            <div className='tst-scroll-track flex gap-4 px-1 will-change-transform'>
              {testimonials.concat(testimonials).map((t, i) => (
                <Card key={`${t.name}-${i}`} className='home_squircle testimonial-card w-[85vw] max-w-sm flex-shrink-0'>
                  <CardContent className='space-y-4'>
                    <Rating value={5} readOnly size='small' />
                    <Typography variant='body1' className='leading-relaxed'>
                      “{t.quote}”
                    </Typography>
                    <div className='flex items-center gap-3'>
                      <Avatar src='/images/home/owner.png' alt={t.name} />
                      <div>
                        <Typography variant='subtitle1' className='font-semibold'>
                          {t.name}
                        </Typography>
                        <Typography variant='body2' className='text-muted'>
                          {t.role}
                        </Typography>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop/Tablet: regular grid */}
        <div className='hidden sm:block'>
          <Grid container spacing={4}>
            {testimonials.map(t => (
              <Grid key={t.name} size={{ xs: 12, md: 4 }}>
                <Card className='home_squircle testimonial-card h-full'>
                  <CardContent className='space-y-4'>
                    <Rating value={5} readOnly size='small' />
                    <Typography variant='body1' className='leading-relaxed'>
                      “{t.quote}”
                    </Typography>
                    <div className='flex items-center gap-3'>
                      <Avatar src='/images/home/owner.png' alt={t.name} />
                      <div>
                        <Typography variant='subtitle1' className='font-semibold'>
                          {t.name}
                        </Typography>
                        <Typography variant='body2' className='text-muted'>
                          {t.role}
                        </Typography>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </section>
  )
}
