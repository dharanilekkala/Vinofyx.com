import React from 'react';
import { Instagram, Linkedin, Youtube, Facebook } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const socials: {
  name: string;
  href: string;
  Icon: React.ElementType;
  colorClass: string;
}[] = [
  { name: 'Instagram', href: 'https://www.instagram.com/vinofyxdigitalmedia/', Icon: Instagram, colorClass: 'text-[#E4405F]' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/venkat-sadhu-0555a5367/', Icon: Linkedin, colorClass: 'text-[#0077B5]' },
  { name: 'WhatsApp', href: 'https://wa.me/919391934534', Icon: FaWhatsapp, colorClass: 'text-[#25D366]' },
  { name: 'YouTube', href: 'https://www.youtube.com/@VinofyxDigital', Icon: Youtube, colorClass: 'text-[#FF0000]' },
  { name: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61576595434197', Icon: Facebook, colorClass: 'text-[#1877F2]' },
];

const FloatingSocials: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-[600] flex flex-col items-center space-y-3">
      {socials.map(({ name, href, Icon, colorClass }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
          title={name}
          className={`group p-3 rounded-full bg-white shadow-lg transform transition-transform duration-200 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary ${colorClass}`}
        >
          <span className="sr-only">{name}</span>
          <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
        </a>
      ))}
    </div>
  );
};

export default FloatingSocials;
