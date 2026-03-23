import { ClientType } from '@/lib/types'

interface Props {
  client: ClientType
}

export default function ClientTypeBadge({ client }: Props) {
  return (
    <div className="flex items-center gap-2 bg-bg-elevated border border-border px-4 py-2 rounded-sm hover:border-accent hover:text-text-primary transition-all cursor-default">
      <span className="text-base">{client.icon}</span>
      <span className="text-sm text-text-secondary">{client.label}</span>
    </div>
  )
}
