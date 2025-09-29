'use client'

import { useMemo, useState } from 'react'

import {
  Chip,
  Typography,
  ToggleButton,
  ToggleButtonGroup,
  Card,
  CardContent,
  List,
  ListItem,
  Divider
} from '@mui/material'

// Data: songs and multilingual lyrics
const songs = [
  {
    id: 'neros-anthem',
    title: "Neros' Anthem",
    languages: {
      en: `Neros’ school is the right place for me,
My knowledge base laid, my personality.
Where I’d be build to be punctual,
Caring, loving person to my friends at all.
I’ll always learn to save time & money,
Neros’ makes me a man useful for country.
Generous and patient what become is that
Grateful I’ll be for all inside & out.
Reader improver that’s what I’d be,
Neros’ is the place where I become real me.
Very much I’m proud Neros’ student to be.
Neros’ number one, Neros’ number one.`,
      am: `ኔሮስስኩል ነው ትምህርት ቤቴ
የምታነፅበት በባህሪ በዕውቀቴ
ሰዓት የሚያከብርጥንቁቅ ሰዉ እንደሆን
ወዳጅ እና አመስጋኝ ይቅርባይ ወንድሙን
አባካኝ ያልሆነ ጊዜና ገንዘቡን
ይህንን ማንነት ዛሬ እገነባለሁ
ከራሴ አልፌ ለሃገር እጠቅማለሁ
ለጋስ ሰው ለመሆን ትዕግስትን ጨምሬ
ወንድም እና እህቶቼን የምኖር ኣክብሬ
ይህን እለምዳለሁ ኔሮስ በመማሬ
የስኬት ቁልፍ ለኔ ኔሮስ በመማሬ
ኔሮስ ኣንደኛ ፣ ኔሮስ ኣንደኛ`
    }
  }
]

export default function AnthemsPage() {
  const [language, setLanguage] = useState<'en' | 'am'>('en')
  const [currentId] = useState<string>(songs[0].id)

  const currentSong = useMemo(() => songs.find(s => s.id === currentId)!, [currentId])
  const lyrics = currentSong.languages[language]

  return (
    <main className='min-h-screen bg-backgroundDefault relative overflow-hidden'>
      {/* Backdrop decorations */}
      <div className='pointer-events-none absolute inset-0 -z-10'>
        <div className='absolute -top-16 -left-20 w-[420px] h-[420px] rounded-full blur-3xl opacity-60 bg-[radial-gradient(circle_at_center,theme(colors.primary.DEFAULT)/25%,transparent_70%)]' />
        <div className='absolute -bottom-20 -right-24 w-[520px] h-[520px] rounded-full blur-3xl opacity-60 bg-[radial-gradient(circle_at_center,#f472b6_25%,transparent_70%)]' />
      </div>

      <section className='max-w-7xl mx-auto px-4 py-12 sm:py-16'>
        {/* Header */}
        <div className='flex items-center justify-between gap-4 mb-8'>
          <div className='flex items-center gap-3'>
            <Chip size='medium' variant='tonal' color='primary' label='Anthems' />
            <Typography
              variant='h5'
              className='font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary to-fuchsia-500'
            >
              School Songs & Lyrics
            </Typography>
          </div>

          {/* Language Toggle */}
          <ToggleButtonGroup
            exclusive
            color='primary'
            value={language}
            onChange={(_, val) => val && setLanguage(val)}
            size='small'
          >
            <ToggleButton value='en'>English</ToggleButton>
            <ToggleButton value='am'>Amharic</ToggleButton>
          </ToggleButtonGroup>
        </div>

        {/* Content two-column layout */}
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8'>
          {/* Left: Lyrics */}
          <div className='lg:col-span-8'>
            <Card className='home_squircle py-32 px-16 h-full'>
              <CardContent>
                <Typography
                  component='div'
                  className='whitespace-pre-line text-3xl sm:text-4xl lg:text-5xl leading-tight sm:leading-tight tracking-tight text-textPrimary'
                >
                  {lyrics}
                </Typography>
              </CardContent>
            </Card>
          </div>

          {/* Right: Song list */}
          <div className='lg:col-span-4'>
            <Card className='h-full'>
              <CardContent className='space-y-4'>
                <Typography variant='subtitle1' className='font-semibold'>
                  Songs
                </Typography>
                <Divider />
                <List className='space-y-1'>
                  {songs.map(song => (
                    <ListItem key={song.id} className='px-0 py-2'>
                      <div className='flex items-center justify-between w-full'>
                        <div>
                          <Typography variant='body1' className='font-medium'>
                            {song.title}
                          </Typography>
                          <Typography variant='caption' className='text-muted'>
                            Languages: English, Amharic
                          </Typography>
                        </div>
                        {/* Future: change current song when multiple exist */}
                        <div className='size-2 rounded-full bg-primary/60' />
                      </div>
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Audio player bar (you can add your audio src later) */}
      <div className='fixed bottom-0 inset-x-0 z-20'>
        <div className='mx-auto max-w-7xl px-4 pb-4'>
          <div className='home_squircle rounded-2xl border border-white/20 bg-white/10 dark:bg-white/5 backdrop-blur-md shadow-lg p-3 sm:p-4'>
            <div className='flex items-center justify-between gap-4'>
              <div className='flex items-center gap-3'>
                <div className='size-9 rounded-lg bg-primary/20 text-primary grid place-items-center'>
                  <i className='tabler-music' />
                </div>
                <div>
                  <Typography variant='subtitle2' className='font-semibold'>
                    {currentSong.title}
                  </Typography>
                  <Typography variant='caption' className='text-muted'>
                    {language === 'en' ? 'English' : 'Amharic'} version
                  </Typography>
                </div>
              </div>
              <audio className='w-full' controls>
                {/* TODO: Provide src once available, e.g. <source src="/audio/neros-anthem.mp3" type="audio/mpeg" /> */}
              </audio>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
