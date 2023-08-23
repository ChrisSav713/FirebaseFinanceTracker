import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronRightIcon } from '@heroicons/react/20/solid'

import img from 'C:\\Users\\Chris\\Documents\\Programming-Desktop\\MyProjects\\FirebaseFinanceTracker\\client\\src\\IMG-2684.JPG'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' }
]

export default function Land() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className='bg-white'>
      <div className='relative isolate pt-14'>
        <div className='px-6 py-24 mx-auto max-w-7xl sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40'>
          <div className='max-w-2xl mx-auto lg:mx-0 lg:flex-auto'>
            <div className='flex'></div>
            <h1 className='max-w-lg mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
              Timothy Aiello
            </h1>
            <p className='mt-6 text-lg leading-8 text-gray-600'>
              Esse id magna consectetur fugiat non dolor in ad laboris magna
              laborum ea consequat. Nisi irure aliquip nisi adipisicing veniam
              voluptate id. In veniam incididunt ex veniam adipisicing sit.
            </p>
            <div className='flex items-center mt-10 gap-x-6'>
              <a
                href='/about'
                className='text-sm font-semibold leading-6 text-gray-900'
              >
                Learn more <span aria-hidden='true'>→</span>
              </a>
            </div>
          </div>
          <div className='mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow'>
            <img src={img} alt='' />
          </div>
        </div>
      </div>
    </div>
  )
}
