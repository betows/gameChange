import { init_refresh } from '~/static/functions'
const unauth_routes = ['login', 'forgot-password', 'reset-password']

export default function (context) {
  if (!unauth_routes.includes(context.route.name)) { init_refresh(context, true) }
}
