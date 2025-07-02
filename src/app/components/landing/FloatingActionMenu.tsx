'use client';
import React from 'react';
import {
  FloatingButton,
  FloatingButtonItem,
} from '@/components/ui/floating-button';
import { cn } from '@/lib/utils';
import {  ArrowUp, PlusIcon } from 'lucide-react';
import Image from 'next/image';
import WheatAppWhite from '../../../../public/images/whatsappWhite.svg';

const items = [
  {
    icon: (
      <Image
        src={WheatAppWhite}
        alt='WhatsApp'
        width={32}
        height={32}
        style={{ objectFit: 'contain' }}
      />
    ),
    title: 'WhatsApp',
    bgColor: 'bg-[#26d366]',
    id: 333,
    link: 'https://wa.me/972544591175',
  },
  {
    icon: <ArrowUp />,
    bgColor: 'bg-[#0a66c2]',
    title: 'Back to Top',
    id: 111,
    onClick: () => window.scrollTo({ top: 0, behavior: 'smooth' }),
  },
];

export default function FloatingActionMenu() {
  return (
    <div className='fixed bottom-6 right-6 z-50'>
      <FloatingButton
        triggerContent={
          <button className='flex items-center justify-center h-12 w-12 rounded-full bg-[#664c43] dark:bg-slate-800 text-white/80 z-10'>
            <PlusIcon />
          </button>
        }
      >
        {items.map((item) => (
          <FloatingButtonItem key={item.id}>
            {item.link ? (
              <a
                href={item.link}
                target='_blank'
                rel='noopener noreferrer'
                className={cn(
                  'flex items-center justify-center h-12 w-12 rounded-full text-white/80',
                  item.bgColor
                )}
              >
                {item.icon}
              </a>
            ) : (
              <button
                onClick={item.onClick}
                className={cn(
                  'h-12 w-12 rounded-full flex items-center justify-center text-white/80',
                  item.bgColor
                )}
              >
                {item.icon}
              </button>
            )}
          </FloatingButtonItem>
        ))}
      </FloatingButton>
    </div>
  );
}
