/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './**/*/.{html,js}'],
  theme: {
    screens: {
      'xsm': '425px',
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
      '2xl': '1440px',
      '3xl':'1920px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '24px',
        sm: '24px',
        md: '64px',
        lg: '80px',
        xl: '80px',
        '2xl': '140px',
        '3xl':'320px',
      },
    },
    extend: {
      padding: {
        '15': '60px',
        '25': '100px',
      },
      
      colors: {
        // main color 
        'primary-1': '#FF8800',
        'primary-2': '#FF7C0F',
        'secondary': '#27187E',
        'white': '#FFFFFF',
        'black': '#34306A',

        purple: {
          '90': '#D6DDF5',
          '92': '#DEE2F7',
          '94': '#E6E8F9',
          '96': '#EFF0FB',
          '98': '#F7F8FD',
          '10': '#DEDBF4',
        },

        // shade of gray
        gray: {
          '1': '#F9FAFB',
          '2': '#F4F4F6',
          '3': '#E5E6EB',
          '4': '#D3D5DA',
          '5': '#9EA3AE',
        },

        // grayscale color
        grey: {
          '50': '#F9FAFB',
          '100': '#F4F4F6',
          '200': '#E5E6EB',
          '300': '#D3D5DA',
          '400': '#9EA3AE',
          '500': '#6C727F',
          '600': '#4D5461',
          '700': '#394150',
          '800': '#212936',
          '900': '#0B0A0F',
        },

        // semantic color

        'error': '#FD504F',
        'success': '#4AD2A1',
        'warning': '#FCB121',
        'info': '#3EAFFF',
        'error-10': '#FFEDED',
        'success-10': '#EBFAF3',
        'warning-10': '#FFF6E5',
        'info-10': '#F0F9FF',
        'sematic-1': '#7875FC',
        'sematic-2': '#4285FA',
        'sematic-3': '#46C8DD',
        'sematic-4': '#FF1F7D',
        'sematic-5': '#9E9CFD',
        'sematic-6': '#92E3A9',

        // border color
        'outline-1':'#CFDBD599',
        'stroke': '#7B61FF',
      },

      fontSize: {
      
          'heading-24': ['24px', '36px'],
          'heading-28': ['28px', '44px'],
          'heading-32': ['32px', '52px'],
          'heading-48': ['48px', '72px'],
          'heading-52': ['52px', '80px'],
          'heading-40': ['40px', '56px'],
          'heading-64': ['64px', '80px'],
        
          'body-10': ['10px', '16px'],
          'body-12': ['12px', '20px'],
          'body-14': ['14px', '20px'],
          'body-16': ['16px', '24px'],
          'body-18': ['18px', '28px'],
          'body-20': ['20px', '32px'],
      },   
    },   
  },
  plugins: [],
}