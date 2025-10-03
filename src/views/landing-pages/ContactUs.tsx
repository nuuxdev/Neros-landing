'use client'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Grid from '@mui/material/Grid2'
import { Button, Card, CardContent, Chip, TextField, Typography, Divider } from '@mui/material'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function ContactUs() {
  // useGSAP(() => {
  //   gsap
  //     .timeline({ scrollTrigger: { trigger: '#contact', start: 'top 80%' } })
  //     .from('.contact-title', { y: 20, opacity: 0, duration: 0.6, ease: 'power2.out' })
  //     .from('.contact-card', { y: 20, opacity: 0, duration: 0.5, ease: 'power2.out' }, '-=0.2')
  // })

  return (
    <section id='contact' className='plb-[100px] bg-backgroundDefault'>
      <div className='max-w-6xl mx-auto px-4 space-y-10'>
        <div className='contact-title flex flex-col gap-3 items-center text-center'>
          <Chip size='medium' variant='tonal' color='primary' label='Contact Us' />
          <Typography variant='h4' className='font-extrabold'>
            We&apos;d love to hear from you
          </Typography>
          <Typography className='max-w-3xl'>Reach out for admissions, campus tours, or general enquiries.</Typography>
        </div>

        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Card className='contact-card h-full'>
              <CardContent className='space-y-4'>
                <Typography variant='subtitle1' className='font-semibold'>
                  Send a Message
                </Typography>
                <div className='grid grid-cols-1 gap-3'>
                  <TextField label='Full Name' fullWidth />
                  <TextField label='Email' type='email' fullWidth />
                  <TextField label='Message' fullWidth multiline minRows={4} />
                  <div>
                    <Button variant='contained' startIcon={<i className='tabler-send' />}>
                      Submit
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Card className='contact-card h-full'>
              <CardContent className='space-y-4'>
                <Typography variant='subtitle1' className='font-semibold'>
                  Contact Information
                </Typography>

                {/* Row 1: Branch 1 + Branch 2 with vertical divider */}
                <div className='flex items-stretch gap-4'>
                  <div className='flex-1 space-y-2'>
                    <Typography variant='subtitle2' className='font-semibold'>
                      Awura Godana KG
                    </Typography>
                    <div className='flex items-center gap-2'>
                      <i className='tabler-map-pin' />
                      <Typography variant='body2'>Adama, Ethiopia</Typography>
                    </div>
                    <div className='flex items-center gap-2'>
                      <i className='tabler-phone text-primary' />
                      <Typography variant='body2'>+251 222 126586</Typography>
                    </div>
                    <div className='flex items-center gap-2'>
                      <i className='tabler-mail' />
                      <Typography variant='body2'>awura@neros.school</Typography>
                    </div>
                  </div>

                  <Divider orientation='vertical' flexItem />

                  <div className='flex-1 space-y-2'>
                    <Typography variant='subtitle2' className='font-semibold'>
                      College Primary
                    </Typography>
                    <div className='flex items-center gap-2'>
                      <i className='tabler-map-pin' />
                      <Typography variant='body2'>Adama, Ethiopia</Typography>
                    </div>
                    <div className='flex items-center gap-2'>
                      <i className='tabler-phone text-primary' />
                      <Typography variant='body2'>+251 222 116470</Typography>
                    </div>
                    <div className='flex items-center gap-2'>
                      <i className='tabler-mail' />
                      <Typography variant='body2'>college@neros.school</Typography>
                    </div>
                  </div>
                </div>

                {/* Horizontal divider between rows */}
                <Divider />

                {/* Row 2: Branch 3 + Branch 4 with vertical divider */}
                <div className='flex items-stretch gap-4'>
                  <div className='flex-1 space-y-2'>
                    <Typography variant='subtitle2' className='font-semibold'>
                      Bole KG
                    </Typography>
                    <div className='flex items-center gap-2'>
                      <i className='tabler-map-pin' />
                      <Typography variant='body2'>Adama, Ethiopia</Typography>
                    </div>
                    <div className='flex items-center gap-2'>
                      <i className='tabler-phone text-primary' />
                      <Typography variant='body2'>+251 222 114343</Typography>
                    </div>
                    <div className='flex items-center gap-2'>
                      <i className='tabler-mail' />
                      <Typography variant='body2'>bole@neros.school</Typography>
                    </div>
                  </div>

                  <Divider orientation='vertical' flexItem />

                  <div className='flex-1 space-y-2'>
                    <Typography variant='subtitle2' className='font-semibold'>
                      180 Primary & KG
                    </Typography>
                    <div className='flex items-center gap-2'>
                      <i className='tabler-map-pin' />
                      <Typography variant='body2'>Adama, Ethiopia</Typography>
                    </div>
                    <div className='flex items-center gap-2'>
                      <i className='tabler-phone text-primary' />
                      <Typography variant='body2'>+251 222 113296</Typography>
                    </div>
                    <div className='flex items-center gap-2'>
                      <i className='tabler-mail' />
                      <Typography variant='body2'>branch180@neros.school</Typography>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Footer */}
        <div className='mt-12 pt-6 border-t'>
          <Typography variant='body2' className='text-center text-muted'>
            © {new Date().getFullYear()} Neros’ School. All rights reserved.
          </Typography>
        </div>
      </div>
    </section>
  )
}
