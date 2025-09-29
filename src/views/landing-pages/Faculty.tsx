'use client'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Grid from '@mui/material/Grid2'
import { Avatar, Card, CardContent, Chip, Typography } from '@mui/material'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const staff = [
  { name: 'Mrs. Johnson', role: 'Principal' },
  { name: 'Mr. Smith', role: 'Head of Science' },
  { name: 'Ms. Lee', role: 'Head of Arts' },
  { name: 'Mr. Brown', role: 'Sports Director' }
]

export default function Faculty() {
  // useGSAP(() => {
  //   gsap
  //     .timeline({ scrollTrigger: { trigger: '#faculty', start: 'top 75%' } })
  //     .from('.faculty-title', { y: 24, opacity: 0, duration: 0.6, ease: 'power2.out' })
  //     .from('.faculty-card', { opacity: 0, y: 20, duration: 0.5, ease: 'power2.out', stagger: 0.1 }, '-=0.2')
  // })

  return (
    <section id='faculty' className='plb-[100px] bg-backgroundPaper'>
      <div className='max-w-6xl mx-auto px-4 space-y-10'>
        <div className='faculty-title flex flex-col gap-3 items-center text-center'>
          <Chip size='medium' variant='tonal' color='primary' label='Our Faculty' />
          <Typography variant='h4' className='font-extrabold'>
            Dedicated educators, inspiring mentors
          </Typography>
          <Typography className='max-w-3xl'>Meet the team that guides our students to success.</Typography>
        </div>

        <Grid container spacing={4}>
          {staff.map(member => (
            <Grid key={member.name} size={{ xs: 12, sm: 6, md: 3 }}>
              <Card className='faculty-card h-full text-center'>
                <CardContent className='flex flex-col items-center gap-3'>
                  <Avatar src='/images/home/owner.png' alt={member.name} sx={{ width: 96, height: 96 }} />
                  <div>
                    <Typography variant='h6' className='font-semibold'>
                      {member.name}
                    </Typography>
                    <Typography variant='body2' className='text-muted'>
                      {member.role}
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </section>
  )
}
