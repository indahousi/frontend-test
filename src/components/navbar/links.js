export const links = [
  {
    label: 'nav:HOME',
    to: '/',
    asDropdown: false,
    content: [],
  },
  {
    label: 'nav:WHO',
    to: '/quem-somos',
    asDropdown: false,
    content: [],
  },
  {
    label: 'nav:CHANNEL',
    to: '',
    asDropdown: true,
    content: [
      {
        label: 'nav:CORPORATE',
        to: '/corporate',
        external: false,
      },
      {
        label: 'nav:DECOR',
        to: '/decor',
        external: false,
      },
      {
        label: 'nav:PLUG',
        to: '/plugar',
        external: false,
      },
      {
        label: 'nav:PARTNERS',
        to: '/parceiros',
        external: false,
      },
      {
        label: 'nav:IRENT',
        to: '/irent',
        external: false,
      },
      {
        label: 'nav:BREAK',
        to: 'https://break.housi.com.br/v2/',
        external: true,
      },
      {
        label: 'nav:BLOG',
        to: 'https://blog.housi.com.br',
        external: true,
      },
    ],
  },
]
