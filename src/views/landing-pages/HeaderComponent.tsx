'use client'

import CustomIconButton from '@/@core/components/mui/IconButton'
import { Button } from '@mui/material'
import Link from 'next/link'
import Image from 'next/image'

export default function HeaderComponent() {
  return (
    <header className='fixed z-[1000] w-full'>
      <div
        className='header flex justify-between bg-[#675DD8] px-4 sm:px-16'
        style={{
          // clipPath: 'polygon(0% 0%, 100% 0%, 100% 40%, 28% 40%, 20% 100%, 0% 100%)'
          clipPath:
            'shape(from 0% 0%, line to 100% 0%, line to 100% 40%, line to 30% 40%, curve to 25% 70% with 25% 40%, curve to 20% 100% with 25% 100%, line to 0% 100%, close)'
        }}
      >
        <div className='flex items-center gap-2'>
          <div className='sm:size-20 size-16 my-2 sm:my-4  rounded-full overflow-clip shadow-md'>
            <Image
              src='/neros.png'
              alt='neros logo'
              width={100}
              height={100}
              draggable={false}
              className='size-full object-cover'
            />
          </div>
          <h1 className='hidden sm:block text-backgroundPaper'>Neros' Intl School</h1>
        </div>
        <div className='sm:space-x-2'>
          <CustomIconButton component={Link} href='https://t.me/Nerosschool' variant='text' className='text-white'>
            <i className='tabler-brand-telegram' />
          </CustomIconButton>
          <CustomIconButton
            component={Link}
            href='https://www.youtube.com/channel/UCig8B3jpU4x7e7IHvMbWQPA'
            variant='text'
            className='text-white'
          >
            <i className='tabler-brand-youtube' />
          </CustomIconButton>
          <CustomIconButton
            component={Link}
            href='https://www.instagram.com/neros_school/'
            variant='text'
            className='text-white'
          >
            <i className='tabler-brand-instagram' />
          </CustomIconButton>
          <CustomIconButton
            component={Link}
            href='https://www.facebook.com/NerosSchool/'
            variant='text'
            className='text-white'
          >
            <i className='tabler-brand-facebook' />
          </CustomIconButton>
        </div>
      </div>
      <div className='absolute bottom-0 right-0 px-4 sm:px-16'>
        <div className='hidden sm:flex gap-4'>
          <Button
            component={Link}
            href='#gallery'
            variant='contained'
            color='primary'
            startIcon={<i className='tabler-flower' />}
            className='home_button max-sm:is-full opacity-80 hover:opacity-100'
          >
            Gallery
          </Button>
          <Button
            component={Link}
            href='/anthems'
            variant='contained'
            color='primary'
            startIcon={<i className='tabler-music' />}
            className='home_button max-sm:is-full opacity-80 hover:opacity-100'
          >
            Anthems
          </Button>
        </div>
        <div className='flex gap-4 sm:hidden'>
          <CustomIconButton component={Link} href='#gallery' variant='contained' color='primary'>
            <i className='tabler-flower' />
          </CustomIconButton>
          <CustomIconButton component={Link} href='/anthems' variant='contained' color='primary'>
            <i className='tabler-music' />
          </CustomIconButton>
        </div>
      </div>
    </header>
  )
}
