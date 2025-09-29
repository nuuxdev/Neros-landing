import * as React from 'react'

import Box from '@mui/material/Box'
import Masonry from '@mui/lab/Masonry'
import { Chip, Typography } from '@mui/material'

export default function ImageMasonry() {
  return (
    <Box id='gallery' className='max-w-6xl mx-auto px-4 space-y-10'>
      <div className='gallery-title flex flex-col gap-3 items-center text-center'>
        <Chip size='medium' variant='tonal' color='primary' label='Gallery' />
        <Typography variant='h4' className='font-extrabold'>
          Life at Neros&apos;d School
        </Typography>
        <Typography className='max-w-3xl'>A peek into our classrooms, activities and community moments.</Typography>
      </div>
      <Masonry columns={{ xs: 2, md: 4 }} spacing={4}>
        {itemData.map((item, index) => (
          <div key={index} className='home_squircle overflow-hidden'>
            <img
              srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
              src={`${item.img}?w=162&auto=format`}
              alt={item.title}
              loading='lazy'
              style={{
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
                display: 'block',
                width: '100%'
              }}
            />
          </div>
        ))}
      </Masonry>
    </Box>
  )
}

const itemData = [
  {
    img: '/images/home/gallery-1.webp',
    title: 'Fern'
  },
  {
    img: '/images/home/gallery-2.webp',
    title: 'Snacks'
  },
  {
    img: '/images/home/gallery-3.webp',
    title: 'Mushrooms'
  },
  {
    img: '/images/home/gallery-4.webp',
    title: 'Tower'
  },
  {
    img: '/images/home/gallery-5.webp',
    title: 'Sea star'
  },
  {
    img: '/images/home/gallery-6.webp',
    title: 'Honey'
  },
  {
    img: '/images/home/gallery-7.webp',
    title: 'Basketball'
  },
  {
    img: '/images/home/gallery-8.webp',
    title: 'Breakfast'
  },
  {
    img: '/images/home/gallery-9.webp',
    title: 'Tree'
  },
  {
    img: '/images/home/gallery-10.webp',
    title: 'Burger'
  },
  {
    img: '/images/home/gallery-11.webp',
    title: 'Camera'
  },
  {
    img: '/images/home/Academic Excellence.webp',
    title: 'Coffee'
  },
  {
    img: '/images/home/Future-Ready Learning.webp',
    title: 'Camping Car'
  },
  {
    img: '/images/home/House Systems Traditions.webp',
    title: 'Hats'
  },
  {
    img: '/images/home/Proud Africans Global Impact.webp',
    title: 'Tomato basil'
  },
  {
    img: '/images/home/Talent Development.webp',
    title: 'Mountain'
  }
]
