export type PrimaryColorConfig = {
  name?: string
  light?: string
  main: string
  dark?: string
}

// Primary color config object
const primaryColorConfig: PrimaryColorConfig[] = [
  {
    name: 'primary-1',
    light: '#4C6EF5', // Strong, bright medium blue
    main: '#3B5BDB', // Deep royal blue (vibrant but not harsh)
    dark: '#364FC7' // Dark indigo-blue (excellent for contrast)
  }
]

export default primaryColorConfig
