//This used to show menu based on role
export const MENU = [
  {
    icon: 'fa fas fa-home',
    name: 'Home',
    targetId: 'home',
    url: '/dashboard',
    roles: [
      'lender',
      'surety_bond',
      'service_provider',
      'dc_govt',
      'system_admin',
      'super_admin'
    ]
  },
  {
    icon: 'fa fa-check',
    name: 'Eligible Surveys',
    targetId: 'eligibleSurveys',
    url: '/eligibleSurveys',
    roles: ['lender', 'surety_bond', 'service_provider', 'system_admin']
  },
  {
    icon: 'fa fa-times-circle',
    name: 'Ineligible Surveys',
    targetId: 'ineligibleSurveys',
    url: '/ineligibleSurveys',
    roles: ['lender', 'surety_bond', 'service_provider']
  },
  {
    icon: 'fas fa-hands-helping',
    name: 'Business Development Support',
    targetId: 'businessDevSupport',
    url: '/businessDevSupport',
    roles: []
  },
  {
    icon: 'fa fas fa-download',
    name: 'Download Surveys',
    targetId: 'downloadSurveys',
    url: '/downloadSurveys',
    roles: [
      'lender',
      'surety_bond',
      'service_provider',
      'dc_govt',
      'system_admin',
      'super_admin'
    ]
  },
  {
    icon: 'fas fa-chart-pie',
    name: 'Survey Analytics',
    targetId: 'surveyAnalytics',
    url: '/surveyAnalytics',
    roles: ['system_admin', 'super_admin']
  },
  {
    icon: 'fas fa-envelope',
    name: 'Email Logs',
    targetId: 'emailLogs',
    url: '/emailLogs',
    roles: ['super_admin', 'system_admin']
  },
  {
    icon: 'fas fa-paper-plane',
    name: 'Send Notifications',
    targetId: 'sendNotifications',
    url: '/notification/send',
    roles: ['super_admin']
  },
  {
    icon: 'fa fas fa-users',
    name: 'Manage Users',
    targetId: 'manageUsers',
    url: '/manageUsers',
    roles: ['super_admin']
  },
  {
    icon: 'fa fas fa-handshake',
    name: 'Manage Partners',
    targetId: 'managePartners',
    roles: ['system_admin', 'super_admin'],
    child: [
      {
        icon: 'fas fa-angle-right',
        name: 'Lenders',
        targetId: 'lenders',
        url: '/managePartners/lenders',
        roles: ['system_admin', 'super_admin']
      },
      {
        icon: 'fas fa-angle-right',
        name: 'Surety Bonds',
        targetId: 'suretyBonds',
        url: '/managePartners/suretyBonds',
        roles: ['system_admin', 'super_admin']
      },
      {
        icon: 'fas fa-angle-right',
        name: 'Service Providers',
        targetId: 'serviceProviders',
        url: '/managePartners/serviceProviders',
        roles: ['system_admin', 'super_admin']
      },
      {
        icon: 'fas fa-angle-right',
        name: 'DC Agencies',
        targetId: 'dcGovt',
        url: '/managePartners/dcGovt',
        roles: ['system_admin', 'super_admin']
      }
    ]
  },
  {
    icon: 'fas fa-cog',
    name: 'Settings',
    targetId: 'settings',
    url: '/settings',
    roles: ['super_admin', 'system_admin']
  }
]
