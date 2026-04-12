import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_authenticated/printer/actions/index/$id',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_authenticated/printer/actions/index/$id"!</div>
}
