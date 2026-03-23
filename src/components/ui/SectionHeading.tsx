import clsx from 'clsx'

interface Props {
  eyebrow?: string
  heading: string
  subheading?: string
  align?: 'left' | 'center'
}

export default function SectionHeading({ eyebrow, heading, subheading, align = 'left' }: Props) {
  return (
    <div className={clsx('mb-12', align === 'center' && 'text-center')}>
      {eyebrow && (
        <p className="text-xs font-semibold tracking-widest text-accent uppercase mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-5xl lg:text-6xl tracking-wider text-text-primary leading-none">
        {heading}
      </h2>
      {subheading && (
        <p className="mt-4 text-text-secondary text-lg max-w-2xl leading-relaxed">
          {subheading}
        </p>
      )}
    </div>
  )
}
