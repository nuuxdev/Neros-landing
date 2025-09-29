'use client'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Grid from '@mui/material/Grid2'
import { Card, CardContent, Chip, Typography } from '@mui/material'
import { useRef } from 'react'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const stats = [
  { label: 'Students', value: 1200, icon: 'tabler-users' },
  { label: 'Teachers', value: 85, icon: 'tabler-chalkboard' },
  { label: 'National Exam Pass Rate (%)', value: 100, icon: 'tabler-check' },
  { label: 'Awards', value: 12, icon: 'tabler-trophy' }
]

export default function Stats() {
  const sectionRef = useRef<HTMLDivElement | null>(null)

  useGSAP(() => {
    if (!sectionRef.current) return

    const numbers = sectionRef.current.querySelectorAll<HTMLElement>('.stat-number')

    numbers.forEach((el, i) => {
      const end = Number(el.dataset.target || 0)
      const obj = { val: 0 }

      gsap.from(el, {
        y: 18,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out',
        delay: i * 0.08,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' }
      })

      gsap.to(obj, {
        val: end,
        duration: 1.4,
        ease: 'power2.out',
        delay: 0.2 + i * 0.08,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        onUpdate: () => {
          el.innerText = Math.floor(obj.val).toString()
        }
      })
    })
  })

  return (
    <section id='stats' ref={sectionRef} className='plb-[100px] bg-backgroundDefault'>
      <div className='max-w-6xl mx-auto px-4 space-y-10'>
        <div className='flex flex-col gap-3 items-center text-center'>
          <Chip size='medium' variant='tonal' color='primary' label='Our Impact' />
          <Typography variant='h4' className='font-extrabold'>
            Numbers that tell our
            <span className='relative z-[1]'>
              {' '}
              story
              <img
                src='/images/home/bg-shape.png'
                alt='bg-shape'
                className='absolute block-end-0 z-[1] bs-[40%] is-[132%] -inline-start-[19%] block-start-[17px]'
              />
            </span>
          </Typography>
          <Typography className='max-w-3xl'>
            A vibrant community of learners and educators achieving excellence together.
          </Typography>
        </div>

        <Grid container spacing={4}>
          {stats.map(s => (
            <Grid key={s.label} size={{ xs: 12, sm: 6, md: 3 }}>
              <Card className='home_squircle h-full'>
                <CardContent className='flex flex-col items-center text-center gap-1'>
                  <div className='size-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-1'>
                    <i className={s.icon} />
                  </div>
                  <div className='text-4xl font-extrabold stat-number' data-target={s.value}></div>
                  <Typography variant='body2' className='text-muted'>
                    {s.label}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </section>
  )
}
