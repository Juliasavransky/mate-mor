import React from 'react';
import { Button } from '@/components/ui/button';
// If you use Radix UI, use the following import:

interface UiFooterProps {
  logo: React.ReactNode;
  brandName: string;
  socialLinks: Array<{
    icon: React.ReactNode;
    href: string;
    label: string;
    tooltip: string;
    bgColor: string;
    hoverColor?: string;
  }>;
  mainLinks: Array<{
    href: string;
    label: string;
  }>;
  legalLinks: Array<{
    href: string;
    label: string;
  }>;
  copyright: {
    text: string | React.ReactNode;
    tooltip: string;
    license?: string;
  };
}

export function UiFooter({
  logo,
  brandName,
  socialLinks,
  mainLinks,
  legalLinks,
  copyright,
}: UiFooterProps) {
  return (
    <footer className='pb-6 pt-2 lg:pb-8 lg:pt-10'>
      <div className='px-4 lg:px-8'>
        <div className='md:flex md:items-center md:justify-between'>
          <a
            href='/'
            className='flex items-center gap-x-2'
            aria-label={brandName}
          >
            {logo}
            <span className='font-bold text-2xl'>{brandName}</span>
          </a>

          <ul className='flex justify-center list-none mt-2 md:mt-0 gap-4'>
            {socialLinks.map((link, i) => (
              <li key={i}>
                <div className='group relative'>
                  <a
                    href={link.href}
                    target='_blank'
                    aria-label={link.label}
                    className={`h-14 w-14 flex items-center justify-center rounded-full
transition-all duration-300 ${link.bgColor} ${link.hoverColor || ''}`}
                  >
                    {link.icon}
                  </a>

                  {/* Tooltip */}
                  <div className='absolute bottom-full mb-2 px-3 py-1 text-sm text-white bg-black/80 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap left-1/2 -translate-x-1/2'>
                    {link.tooltip}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className='border-t mt-6 pt-6 lg:pl-10 md:mt-4 md:pt-8 lg:grid lg:grid-cols-10'>
          <nav className='lg:mt-0 lg:col-[4/11]'>
            <ul className='list-none flex flex-wrap -my-1 -mx-2 lg:justify-end'>
              {mainLinks.map((link, i) => (
                <li key={i} className='my-1 mx-2 shrink-0'>
                  <a
                    href={link.href}
                    className='text-base text-white underline-offset-4 hover:underline'
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className='mt-6 lg:mt-0 lg:col-[4/11]'>
            <ul className='list-none flex flex-wrap -my-1 -mx-3 lg:justify-end'>
              {legalLinks.map((link, i) => (
                <li key={i} className='my-1 mx-3 shrink-0'>
                  <a
                    href={link.href}
                    className='text-base text-white underline-offset-4 hover:underline'
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div
            dir='rtl'
            className='mt-6 pr-22 text-base leading-6 text-white whitespace-nowrap lg:mt-0 lg:row-[1/3] lg:col-[1/4]'
          > 
            <div>{copyright.text}</div>
          <div className='absolute bottom-full mb-2 px-3 py-1 text-sm text-white bg-black/80 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap left-1/2 -translate-x-1/2'>
              {copyright.tooltip}
            </div>
            {copyright.license && <div>{copyright.license}</div>}
          </div>
        </div>
      </div>
    </footer>
  );
}
