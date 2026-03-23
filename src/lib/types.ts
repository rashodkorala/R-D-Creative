import { LucideIcon } from 'lucide-react'

export interface Service {
  id: string
  title: string
  subtitle: string
  description: string
  icon: LucideIcon
  tag: string
}

export interface ProcessStep {
  step: number
  title: string
  description: string
}

export interface NavLink {
  label: string
  href: string
}

export interface SocialLink {
  platform: string
  href: string
  icon: LucideIcon
}

export interface ClientType {
  label: string
  icon: string
}
