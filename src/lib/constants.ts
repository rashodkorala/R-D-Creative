import {
  Globe,
  Palette,
  Camera,
  Film,
  Instagram,
  Facebook,
  Linkedin,
} from 'lucide-react'
import { NavLink, Service, ProcessStep, SocialLink, ClientType } from './types'

export const NAV_LINKS: NavLink[] = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#portfolio' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

export const SERVICES: Service[] = [
  {
    id: 'web',
    title: 'Web & Shopify',
    subtitle: 'Digital Presence',
    description:
      'From Shopify stores to landing pages — fast, beautiful, and built to convert. We handle everything from design to launch.',
    icon: Globe,
    tag: 'Websites & E-Commerce',
  },
  {
    id: 'design',
    title: 'Graphic Design & Merch',
    subtitle: 'Brand Identity',
    description:
      'Brand identity, print, merch design, and on-demand fulfilment handled end-to-end. From concept to customer doorstep.',
    icon: Palette,
    tag: 'Design & Print',
  },
  {
    id: 'photo',
    title: 'Product Photography',
    subtitle: 'Visual Content',
    description:
      'Studio-quality shots and lifestyle imagery that make your products impossible to scroll past. Light, colour, impact.',
    icon: Camera,
    tag: 'Photography',
  },
  {
    id: 'film',
    title: 'Filmmaking',
    subtitle: 'Motion Content',
    description:
      'Promotional films, event coverage, and social content that stops the scroll. Stories told with craft and intention.',
    icon: Film,
    tag: 'Video & Film',
  },
]

export const CLIENT_TYPES: ClientType[] = [
  { label: 'Pubs & Bars', icon: '🍺' },
  { label: 'Restaurants', icon: '🍽️' },
  { label: 'Eateries', icon: '🥘' },
  { label: 'Nightclubs', icon: '🎵' },
  { label: 'Local Brands', icon: '⚡' },
  { label: 'Retail Shops', icon: '🛍️' },
  { label: 'Event Venues', icon: '🎪' },
  { label: 'Breweries', icon: '🍻' },
  { label: 'Coffee Shops', icon: '☕' },
  { label: 'Street Food', icon: '🌮' },
]

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: 'Discovery',
    description:
      'We learn your brand, audience, and goals in a single focused conversation. No lengthy briefs — just real talk.',
  },
  {
    step: 2,
    title: 'Creation',
    description:
      'Our team gets to work — designing, building, shooting, or filming depending on what you need. Fast and focused.',
  },
  {
    step: 3,
    title: 'Launch & Beyond',
    description:
      'We deliver, refine until it\'s right, and stay available for ongoing support. Your success is ours.',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'Instagram', href: '#', icon: Instagram },
  { platform: 'Facebook', href: '#', icon: Facebook },
  { platform: 'LinkedIn', href: '#', icon: Linkedin },
]

export const CONTACT_EMAIL = 'hello@rdcreative.co'
export const WHATSAPP_NUMBER = '447000000000'
