'use client'
import Image from 'next/image'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { Chip, Typography, Button, Card, CardContent, List, ListItem } from '@mui/material'
import Grid from '@mui/material/Grid2'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function AboutUs() {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#about-us',
        start: 'top 70%'
      }
    })

    tl.from('.about-title', { y: 24, opacity: 0, duration: 0.6, ease: 'power2.out' })
      .from('.about-image-left', { x: -24, y: 12, opacity: 0, duration: 0.6, ease: 'power2.out' }, '<0.1')
      .from('.about-content', { y: 18, opacity: 0, duration: 0.6, ease: 'power2.out' }, '<0.05')
      .from('.about-image-right', { x: 24, y: -12, opacity: 0, duration: 0.6, ease: 'power2.out' }, '<0.05')
      .from('.about-card', { y: 20, opacity: 0, stagger: 0.12, duration: 0.5, ease: 'power2.out' }, '-=0.2')
  })

  return (
    <section id='about-us' className='plb-[100px] bg-backgroundDefault'>
      <div className='max-w-6xl mx-auto px-4 flex flex-col gap-16 sm:gap-20'>
        <div className='about-title flex flex-col gap-y-4 sm:gap-y-5 items-center justify-center'>
          <Chip size='medium' variant='tonal' color='primary' label='About Us' />
          <h2 className='text-4xl sm:text-5xl font-extrabold text-center tracking-tight'>
            Neros&apos;{' '}
            <span className='relative z-[1]'>
              International
              <img
                src='/images/home/bg-shape.png'
                alt='bg-shape'
                className='absolute block-end-0 z-[1] bs-[40%] is-[132%] -inline-start-[19%] block-start-[17px]'
              />
            </span>{' '}
            School
          </h2>
          <Typography className='text-lg max-w-3xl leading-relaxed mt-2 sm:mt-3'>
            Neros’ School was founded in <b>2006 EC</b> in Adama, Oromia <em>Ethiopia</em>, with a clear vision to
            provide high-quality, holistic, and child-centered education. Starting as a single branch, the school was
            built on the belief that every child has unique potential that deserves to be nurtured through modern
            teaching methods, moral guidance, and community support. From the outset, Neros’ School emphasized academic
            excellence, creativity, and character development.
          </Typography>
          <Typography variant='h5' className='font-bold'>
            Expansion of Branches
          </Typography>
          <Typography className='text-lg max-w-3xl leading-relaxed mt-2 sm:mt-3'>
            Since its establishment, Neros’ School has grown into a thriving educational institution, expanding from a
            single branch in 2006 EC to four vibrant campuses today.
          </Typography>
          <List className='space-y-2 sm:space-y-3'>
            <ListItem className='px-0 py-2 flex items-start gap-3'>
              <i className='tabler-number-1 text-primary' />
              <Typography variant='h6'>Awura Godana Kindergarten Branch (Since 2006EC)</Typography>
            </ListItem>
            <ListItem className='px-0 py-2 flex items-start gap-3'>
              <i className='tabler-number-2 text-primary' />
              <Typography variant='h6'>College Primary Branch (Since 2014)</Typography>
            </ListItem>
            <ListItem className='px-0 py-2 flex items-start gap-3'>
              <i className='tabler-number-3 text-primary' />
              <Typography variant='h6'>Bole Kindergarten Branch(Since 2012EC)</Typography>
            </ListItem>
            <ListItem className='px-0 py-2 flex items-start gap-3'>
              <i className='tabler-number-4 text-primary' />
              <Typography variant='h6'>180 Primary 1–4 and KG Branch</Typography>
            </ListItem>
          </List>
        </div>

        <Grid container spacing={10} alignItems='center'>
          {/* Left floating image */}
          <Grid size={{ xs: 12, md: 4 }}>
            <div className='home_squircle about-image-left overflow-hidden shadow-xl sm:translate-y-6 sm:rotate-[-2deg] mb-8 sm:mb-0'>
              <Image
                src='/images/home/owner.webp'
                alt='Founder'
                width={900}
                height={1100}
                className='home_squircle scale-[0.9] w-full h-auto object-cover'
              />
              <div className='text-center pb-4'>
                <Typography variant='h5' className='font-semibold'>
                  Muluwengel E. Gabriel
                </Typography>
                <Typography variant='body2' className='text-muted'>
                  Founder
                </Typography>
              </div>
            </div>
          </Grid>
          {/* Center content */}
          <Grid size={{ xs: 12, md: 4 }}>
            <div className='about-content space-y-6 md:space-y-7 text-center sm:text-start'>
              <Typography variant='h5' className='font-bold'>
                Message from Our Founders
              </Typography>
              <Typography className='text-xl leading-relaxed'>
                We are proud of how far our school has come, and we remain committed to inspiring, nurturing, and
                empowering every child to become a confident, knowledgeable, and socially responsible leader of
                tomorrow.
              </Typography>
              <div className='pt-4 sm:pt-6'>
                <Button
                  variant='contained'
                  color='primary'
                  href='#admissions'
                  startIcon={<i className='tabler-arrow-right' />}
                  className='home_squircle'
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </Grid>
          {/* Right floating image */}
          <Grid size={{ xs: 12, md: 4 }}>
            <div className='home_squircle scale-[0.8] about-image-right overflow-hidden shadow-xl sm:-translate-y-6 sm:rotate-[2deg] mt-8 sm:mt-0'>
              <Image
                src='/images/home/belibe.webp'
                alt='Founder and Ceo'
                width={900}
                height={1100}
                className='home_squircle scale-[0.9] w-full h-full object-cover'
              />
              <div className='text-center pb-4'>
                <Typography variant='h4' className='font-semibold'>
                  Hanna Mohammed
                </Typography>
                <Typography variant='body2' className='text-muted text-lg'>
                  Founder and Ceo.
                </Typography>
              </div>
            </div>
          </Grid>
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 mt-16'>
            {[
              {
                icon: 'tabler-eye',
                title: 'Vision',
                text: 'to empower students with the tools, values, and creativity to excel academically, grow holistically, and become responsible global citizens who can conquer the world with confidence and compassion.'
              },
              {
                icon: 'tabler-target',
                title: 'Mission',
                text: 'To provide a nurturing and inclusive learning environment that fosters Academic Excellence, Personal Growth, and Innovation, while embracing Diversity and building strong Community Engagement to prepare students for the future.'
              },
              {
                icon: 'tabler-sparkles',
                title: 'Values',
                text: 'Excellence, Integrity, and Compassion guide us in nurturing ambitious, ethical, and empathetic learners who are prepared to thrive in a diverse and ever-changing world.'
              }
            ].map(item => (
              <Card key={item.title} className='home_squircle about-card h-full'>
                <CardContent className='space-y-3'>
                  <div className='size-10 rounded-full bg-primary/10 text-primary flex items-center justify-center'>
                    <i className={item.icon} />
                  </div>
                  <h1 className='font-semibold text-textPrimary'>{item.title}</h1>
                  <Typography variant='body2' className='text-muted text-sm leading-relaxed'>
                    {item.text}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </div>
        </Grid>
      </div>
    </section>
  )
}
