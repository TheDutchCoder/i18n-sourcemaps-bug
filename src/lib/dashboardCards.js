export const dashboardLookup = {
  OwnerProspect: {
    icon: 'i_rv',
    dismissible: true,
    button: {
      color: '#42B8E9',
      link: '/dashboard/rvs/new',
    },
  },
  OwnerProspectCredit: {
    icon: 'i_rv',
    dismissible: true,
    button: {
      color: '#42B8E9',
      link: '/dashboard/rvs/new',
    },
  },
  RenterHasCredit: {
    icon: 'i_referral',
    dismissible: true,
    button: {
      color: '#42B8E9',
      link: '/rv-search',
    },
  },
  ProfileAddBankAccount: {
    id: 'PROFILE_ADD_BANK',
    icon: 'i_bank',
    dismissible: false,
    button: {
      color: '#42B8E9',
      link: '/dashboard/profile/payout',
    },
  },
  RvListingProgress: {
    icon: null,
    dismissible: false,
    button: {
      color: '#27AF5B',
      link: '/dashboard/rvs/new',
    },
  },
  RvInsured: {
    icon: null,
    dismissible: false,
    button: {
      color: '#27AF5B',
      link: '/dashboard/rvs/{{rvId}}/insurance',
    },
  },
  RvUnderReview: {
    icon: null,

    dismissible: false,
    button: {
      color: '#27AF5B',
      link: '/dashboard/rvs/{{rvId}}/insurance',
    },
  },
  ImproveListing: {
    icon: 'i_instabook',
    dismissible: true,
    button: {
      color: '#27AF5B',
      link: '/dashboard/rvs/{{rvId}}/earn-more',
    },
  },
  PersonalizeExperience: {
    icon: 'survey-card',
    dismissible: true,
    button: {
      link: '/dashboard/survey/host',
    },
  },
  AdditionalBookingCharges: {
    icon: null,
    dismissible: false,
    button: {
      link: '/dashboard/bookings/{{bookingId}}/send-request-money/review',
    },
  },
}
