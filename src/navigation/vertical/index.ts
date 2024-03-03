// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Dashboards',
      icon: 'mdi:home-outline',
      path: '/dashboards/ecommerce',
      badgeColor: 'error',
    },
    {
      sectionTitle: 'Master'
    },
    {
      title: 'Users',
      icon: 'mdi:account-multiple',
      path: '/apps/user/list'
    },
    {
      title: 'Roles',
      icon: 'mdi:shield-outline',
      path: '/apps/roles'
    },
    {
      title: 'Regions',
      icon: 'mdi:compass-outline',
      path: '/apps/regions/list'
    },
    {
      title: 'Directors',
      icon: 'mdi:account-tie',
      path: '/apps/directors/list'
    },
    {
      title: 'Countries',
      icon: 'mdi:earth',
      path: '/apps/countries/list'
    },
    {
      title: 'Workstations',
      icon: 'mdi:desktop-classic',
      path: '/apps/workstations/list'
    },
    {
      title: 'Electors',
      icon: 'mdi:account-group',
      children: [
        {
          title: 'List',
          path: '/apps/invoice/list'
        },
        {
          title: 'Register',
          path: '/apps/invoice/add'
        }
      ]
    },
    {
      sectionTitle: 'Reports'
    },
  ]
}

export default navigation
