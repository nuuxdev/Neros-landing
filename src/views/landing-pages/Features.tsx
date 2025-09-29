'use client'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Grid from '@mui/material/Grid2'
import { Card, CardContent, Chip, Typography } from '@mui/material'
import Image from 'next/image'
import './Features.css'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const features = [
  {
    title: 'Future-Ready Learning',
    desc: 'Equipped with a well-developed and engaging school management system, our students experience a modern approach to education that fosters collaboration, innovation, and digital confidence.',
    images: ['/images/home/owner.png', '/images/home/customer-service.png'],
    mobileImage: '/images/home/Future-Ready Learning.webp',
    icon: 'tabler-device-analytics'
  },
  {
    title: 'Academic Excellence',
    desc: 'We maintain high academic standards, encouraging curiosity, discipline, and critical thinking to prepare students for success in examinations and lifelong learning.',
    images: ['/images/home/owner.png', '/images/home/customer-service.png'],
    mobileImage: '/images/home/Academic Excellence.webp',
    icon: 'tabler-book-2'
  },
  {
    title: 'Talent Development',
    desc: 'Through extracurricular activities in arts, sports, and leadership, we nurture hidden talents and provide every learner with opportunities to shine beyond the classroom.',
    images: ['/images/home/owner.png', '/images/home/customer-service.png'],
    mobileImage: '/images/home/Talent Development.webp',
    icon: 'tabler-chef-hat'
  },
  {
    title: 'House Systems & Traditions',
    desc: 'With our Lion and Eagle Houses, students build camaraderie, competitiveness, and strength in unity — traditions that foster character, resilience, and school spirit.',
    images: ['/images/home/owner.png', '/images/home/customer-service.png'],
    mobileImage: '/images/home/House Systems Traditions.webp',
    icon: 'tabler-trophy'
  },
  {
    title: 'Proud Africans, Global Impact',
    desc: 'Rooted in African heritage, we inspire students to embrace their identity while preparing them to represent with excellence and confidence on the global stage.',
    images: ['/images/home/owner.png', '/images/home/customer-service.png'],
    mobileImage: '/images/home/Proud Africans Global Impact.webp',
    icon: 'tabler-world'
  }
]

export default function Features() {
  useGSAP(() => {
    // gsap
    //   .timeline({
    //     scrollTrigger: { trigger: '#features', start: 'top 75%' }
    //   })
    //   .from('.feature-title', { y: 24, opacity: 0, duration: 0.6, ease: 'power2.out' })
    //   .from('.feature-card', {
    //     y: 20,
    //     opacity: 0,
    //     stagger: 0.12,
    //     duration: 0.5,
    //     ease: 'power2.out'
    //   })
    gsap.registerPlugin(ScrollTrigger)
    const stackImages = gsap.utils.toArray('.stack_images:not(:first-child)')
    gsap.set(stackImages, { y: '300%' })
    const animation = gsap.to(stackImages, {
      y: '0%',
      duration: 1,
      ease: 'power2.out',
      stagger: 1
    })
    ScrollTrigger.create({
      trigger: '.features_block',
      start: 'top top',
      end: 'bottom bottom',
      pin: '.stack_container',
      animation,
      scrub: 3
    })
  })

  return (
    <section className='features pt-32'>
      <div className='flex flex-col gap-y-3 items-center justify-center sm:-mb-32 mb-12'>
        <Chip size='medium' variant='tonal' color='primary' label='Features' />
        <h2 className='text-4xl sm:text-5xl font-extrabold text-center tracking-tight'>
          Why
          <span className='relative z-[1]'>
            Choose
            <img
              src='/images/home/bg-shape.png'
              alt='bg-shape'
              className='absolute block-end-0 z-[1] bs-[40%] is-[132%] -inline-start-[19%] block-start-[17px]'
            />
          </span>{' '}
          Us?
        </h2>
      </div>
      <div className='features_block flex justify-center gap-8'>
        <div className='relative sm:py-[25vh] space-y-32 px-4'>
          {features.map((item, idx) => (
            <div key={item.title} className='feature-panel sm:h-[50vh] flex flex-col items-center justify-center gap-8'>
              <div className='hidden sm:block'>
                <i className={`${item.icon} text-3xl text-warning`} />
              </div>
              <img
                className='home_squircle block sm:hidden w-96 aspect-[3/2] object-cover'
                src={item.mobileImage}
                alt={`${item.title} image`}
              />
              <h3 className='text-4xl sm:text-5xl font-extrabold tracking-tight text-center'>{item.title}</h3>
              <Typography className='max-w-2xl text-xl text-center'>{item.desc}</Typography>
            </div>
          ))}
        </div>
        <div className='stack_container h-screen hidden sm:flex items-center'>
          <div className='stack home_squircle w-96 aspect-[3/2] bg-red-200 overflow-hidden'>
            {features.map((item, idx) => (
              <img
                key={idx}
                className='stack_images w-full h-full object-cover'
                src={item.mobileImage}
                alt={`${item.title} image`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
