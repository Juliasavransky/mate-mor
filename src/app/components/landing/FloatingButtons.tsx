'use client';

import { ArrowUp } from 'lucide-react';
import Image from 'next/image';
import WhatsAppIcon from '../../../../public/images/whatsappWhite.svg';

export default function FloatingButtons() {
  return (
    <>
      {/* WhatsApp Button */}
      <div className="fixed left-2 top-2/3 transform -translate-y-1/2 z-50 group">
        <a
          href="https://wa.me/972544591175"
          target="_blank"
          rel="noopener noreferrer"
          className="h-14 w-14 rounded-full flex items-center justify-center bg-[#25D366] text-white shadow-lg hover:scale-105 focus:scale-105 active:scale-105 transition-transform duration-300 animate-float"
        >
          <Image
            src={WhatsAppIcon}
            alt="WhatsApp"
            width={28}
            height={28}
            className="object-contain group-hover:animate-pulse"
          />
        </a>
        <div className="absolute bottom-full mb-2 px-3 py-1 text-sm text-white bg-black/80 rounded-lg opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-active:opacity-100 transition-opacity duration-300 whitespace-nowrap left-1/2 -translate-x-1/2">
          תכתבו לי הודעה
        </div>
      </div>

      {/* Scroll To Top Button */}
      <div className="fixed bottom-6 right-6 z-50 group">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="h-14 w-14 rounded-full flex items-center justify-center bg-[#0a66c2] text-white shadow-lg hover:scale-110 active:scale-100 focus:scale-100 transition-transform duration-300"
        >
          <ArrowUp className="w-6 h-6 group-hover:animate-bounce group-active:animate-bounce group-focus:animate-bounce" />
        </button>
        <div className="absolute bottom-full mb-2 px-3 py-1 text-sm text-white bg-black/80 rounded-lg opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-active:opacity-100 transition-opacity duration-300 whitespace-nowrap left-1/2 -translate-x-1/2">
          חזור למעלה
        </div>
      </div>
    </>
  );
}
