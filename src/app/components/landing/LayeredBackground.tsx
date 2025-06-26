'use client';

import React from 'react';

export default function LayeredBackground() {
  return (
    <div
      className='absolute inset-0 bg-cover bg-center bg-no-repeat'
      style={{
        backgroundImage: `
          url('/images/bgSmall.jpg'),
          radial-gradient(circle at 20% 80%, rgba(164, 134, 79, 0.15) 0%, transparent 60%),
          radial-gradient(circle at 80% 20%, rgba(202, 171, 115, 0.15) 0%, transparent 60%),
          radial-gradient(circle at 40% 40%, rgba(245, 217, 165, 0.12) 0%, transparent 60%),
          linear-gradient(135deg, rgba(164, 134, 79, 0.05) 0%, rgba(245, 217, 165, 0.08) 100%)
        `,
        backgroundBlendMode: 'overlay, normal, normal, normal, normal',
        filter: 'blur(1.5px) brightness(1.1) contrast(1.05)',
      }}
    ></div>
  );
}
