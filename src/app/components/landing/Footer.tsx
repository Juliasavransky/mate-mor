import { UiFooter } from '../../../components/ui/footer';
import logo from '../../../../public/images/logoWhite.svg';

const Footer = () => {
  return (
    <div dir='rtl' className='w-full bg-[#664c43]'>
      <UiFooter
        logo={
          <img
            src={logo.src}
            alt='Logo'
            className='h-48 w-96 object-scale-down '
          />
        }
        brandName=''
        socialLinks={[
          {
            icon: (
              <img src='/facebook.svg' alt='Facebook' className='h-12 w-10' />
            ),
            href: 'https://www.facebook.com/mzmor?locale=he_IL',
            label: 'Facebook',
            tooltip: 'עקבו אחרי',
            hoverColor: 'hover:bg-[#1877F2]',
            bgColor: 'bg-[#f5e8cd]',
          },
          {
            icon: (
              <img src='/instagram.svg' alt='Instagram' className='h-11 w-11' />
            ),
            href: 'https://www.instagram.com/matimor40/',
            label: 'Instagram',
            tooltip: 'עקבו אחרי',
            hoverColor: 'hover:bg-[#ee2a7b]',
            bgColor: 'bg-[#f5e8cd]',
          },
          {
            icon: (
              <img
                src='/images/whatsappWhite.svg'
                alt='Whatsapp'
                className='h-9 w-9'
              />
            ),
            href: 'https://wa.me/972544591175',
            label: 'Whatsapp',
            tooltip: 'כתבו לי',
            hoverColor: 'hover:bg-[#26d366]',
            bgColor: 'bg-[#f5e8cd]',
          },
          {
            icon: (
              <img
                src='/images/emailWhite-icon.svg'
                alt='Whatsapp'
                className='h-9 w-9'
              />
            ),
            href: 'https://mail.google.com/mail/?view=cm&fs=1&to=matimor40@gmail.com&su=פנייה מהאתר&body=שלום מתי, אשמח לשמוע פרטים נוספים לגבי הערב.',
            label: 'Mail',
            tooltip: 'כתבו לי',
            hoverColor: 'hover:bg-[#D93025]',
            bgColor: 'bg-[#f5e8cd]',
          },
          {
            icon: (
              <img
                src='/images/phoneWhite-icon.svg'
                alt='Whatsapp'
                className='h-8 w-8'
              />
            ),
            href: 'tel:0544591175',
            label: 'Phone call',
            tooltip: 'התקשרו אלי',
            hoverColor: 'hover:bg-[#4CAF50]',
            bgColor: 'bg-[#f5e8cd]',
          },
        ]}
        mainLinks={[
          { href: '#about', label: 'מי אני?' },
          { href: '#eventHighlights', label: 'פרטי האירוע ' },
          { href: '#registrationForm', label: 'טופס הרשמה' },
          { href: '#socialSection', label: 'תשמרי על קשר' },
        ]}
        legalLinks={[
          { href: '/privacy', label: '' },
          { href: '/terms', label: '' },
        ]}
     copyright={{
  text: (
    <a
      href="https://www.webwitch.click/he/home"
      target="_blank"
      rel="noopener noreferrer"
      className="text-white underline hover:text-blue-600 transition"
    >
      © 2025 Web-Witch עיצוב ופיתוח - יוליה סברנסקי פרל
    </a>
  ),
  tooltip: 'התקשרו אלי',
  license: 'כל הזכויות שמורות למתי מור',
}}

      />
    </div>
  );
};

export default Footer;
