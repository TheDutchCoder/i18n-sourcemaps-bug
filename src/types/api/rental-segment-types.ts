export type SegmentTypes = {
  'AddFavouriteClicked': {

    /**
   * What the call to action was for the user to add the RV in favourite
   */
    cta?: string
    /**
   * The ISO 4217 currency code displayed
   */
    currency: string
    /**
   * Whether or not the RV listing is Featured
   */
    isFeatured: boolean
    /**
   * The user type, if known. The user is the person visiting the profile page.
   */
    isOwner: boolean
    /**
   * The index of the column in which the list card was favourited
   */
    listColumnNumber: number
    /**
   * The position in the array of the listing, representing the position shown in the list or search results ([array index]+1) when the lisitng was favorited
   */
    listPosition: number
    /**
   * The index of the row in which the list card was favourited
   */
    listRowNumber: number
    /**
   * The city that the listing is based in and which is shown on the results.
   */
    listingCity: string
    /**
   * The country where the RV is listed
   */
    listingCountry: string
    /**
   * The page number corresponding to the pagination index of the gallery on which the listing set was presented.
   */
    listingPageNumber: number
    /**
   * The region the listing is based in and which is shown on the results.
   */
    listingRegion: string
    /**
   * The number of people that the listing sleeps.
   */
    listingSleepingSpots: number
    /**
   * Rental category of vehicle selected in search. Only populate when host has all of the listing Type selected. (like the select all)
   */
    listingType: string
    /**
   * The nightly rate that is displayed on the listing card
   */
    nightlyRate: number
    /**
   * The number of reviews of the listing as displayed on the RV listing page
   */
    numReviews?: number
    /**
   * The source screen that came before their next action. (e.g. from search results, listing page, top 25, map)
   */
    pageSource?: string
    /**
   * path that relates to the exact photo that is now being shown (reflecting the path column we have for that photo in this table)
   */
    photoPath: string
    /**
   * The unique ID associated with an RV.
   */
    rvID: string
    /**
   * The RV length mentioned on the listing
   */
    rvLength?: string
    /**
   * The type of RV (e.g. Class A, Class B, Class C, Fifth Wheel, TentTrailer, Travel Trailer, etc.) that are selected in search filters.
   */
    rvType: unknown[]
    /**
   * The star rating for the listing as displayed on the RV listing
   */
    starRating?: number

  }
  'AddFavouriteClicked [v1]': {

    /**
   * What the call to action was for the user to add the RV in favourite
   */
    cta?: string
    /**
   * The ISO 4217 currency code displayed
   */
    currency: string
    /**
   * Whether or not the RV listing is Featured
   */
    isFeatured: boolean
    /**
   * The user type, if known. The user is the person visiting the profile page.
   */
    isOwner: boolean
    /**
   * The index of the column in which the list card was favourited
   */
    listColumnNumber: number
    /**
   * The position in the array of the listing, representing the position shown in the list or search results ([array index]+1) when the lisitng was favorited
   */
    listPosition: number
    /**
   * The index of the row in which the list card was favourited
   */
    listRowNumber: number
    /**
   * The city that the listing is based in and which is shown on the results.
   */
    listingCity: string
    /**
   * The country where the RV is listed
   */
    listingCountry: string
    /**
   * The page number corresponding to the pagination index of the gallery on which the listing set was presented.
   */
    listingPageNumber: number
    /**
   * The region the listing is based in and which is shown on the results.
   */
    listingRegion: string
    /**
   * The number of people that the listing sleeps.
   */
    listingSleepingSpots: number
    /**
   * Rental category of vehicle selected in search. Only populate when host has all of the listing Type selected. (like the select all)
   */
    listingType: string
    /**
   * The nightly rate that is displayed on the listing card
   */
    nightlyRate: number
    /**
   * The number of reviews of the listing as displayed on the RV listing page
   */
    numReviews?: number
    /**
   * The source screen that came before their next action. (e.g. from search results, listing page, top 25, map)
   */
    pageSource?: string
    /**
   * path that relates to the exact photo that is now being shown (reflecting the path column we have for that photo in this table)
   */
    photoPath: string
    /**
   * The unique ID associated with an RV.
   */
    rvID: string
    /**
   * The RV length mentioned on the listing
   */
    rvLength?: string
    /**
   * The type of RV (e.g. Class A, Class B, Class C, Fifth Wheel, TentTrailer, Travel Trailer, etc.) that are selected in search filters.
   */
    rvType: unknown[]
    /**
   * The star rating for the listing as displayed on the RV listing
   */
    starRating?: number

  }
  'AffiliateLinkClicked': {

    /**
   * The vendor that we are sending
   */
    affiliateName: string
    /**
   * The primary product that the affiliate provides.
   */
    affiliateProductCategory: string
    /**
   * The unique ID of the booking, if the link is clicked within that context.
   */
    bookingId?: number
    /**
   * The destination type that we are sending the user to.  (search|listing|home|specificsearch)
   */
    destinationType: 'home' | 'listing' | 'search' | 'specificsearch'
    /**
   * The URL we are sending the user to.
   */
    destinationUrl: string
    /**
   * Whether or not the outbound link is monetized (E.g. is actually part of an affiliate program). This is also evident if were are providing an affiliateId in the outbound link.
   */
    isMonetized: boolean
    /**
   * The unique host ID associated with the RV.
   */
    otherUserId: number
    /**
   * Where the user is when they click on a link.
   */
    pageSource: string
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId?: string

  }
  'AffiliateLinkClicked [v1]': {

    /**
   * The vendor that we are sending
   */
    affiliateName: string
    /**
   * The primary product that the affiliate provides.
   */
    affiliateProductCategory: string
    /**
   * The unique ID of the booking, if the link is clicked within that context.
   */
    bookingId?: number
    /**
   * The destination type that we are sending the user to.  (search|listing|home|specificsearch)
   */
    destinationType: 'home' | 'listing' | 'search' | 'specificsearch'
    /**
   * The URL we are sending the user to.
   */
    destinationUrl: string
    /**
   * Whether or not the outbound link is monetized (E.g. is actually part of an affiliate program). This is also evident if were are providing an affiliateId in the outbound link.
   */
    isMonetized: boolean
    /**
   * The unique host ID associated with the RV.
   */
    otherUserId: number
    /**
   * Where the user is when they click on a link.
   */
    pageSource: string
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId?: string

  }
  'AppBannerClicked': {

    /**
   * The CTA that got the user to this screen.
   */
    cta?: string
    /**
   * The store to which the smart banner is pointing, dependent on the OS of the device.
   */
    os: 'android' | 'ios' | 'macos' | 'other' | 'windows'
    /**
   * The screen that the user came from.
   */
    pageSource?: string

  }
  'AppBannerClicked [v1]': {

    /**
   * The CTA that got the user to this screen.
   */
    cta?: string
    /**
   * The store to which the smart banner is pointing, dependent on the OS of the device.
   */
    os: 'android' | 'ios'
    /**
   * The screen that the user came from.
   */
    pageSource?: string

  }
  'AppBannerClicked [v2]': {

    /**
   * The CTA that got the user to this screen.
   */
    cta?: string
    /**
   * The store to which the smart banner is pointing, dependent on the OS of the device.
   */
    os: 'android' | 'ios' | 'macos' | 'other' | 'windows'
    /**
   * The screen that the user came from.
   */
    pageSource?: string

  }
  'AppBannerClosed': {

    /**
   * The CTA that got the user to this screen.
   */
    cta?: string
    /**
   * The store to which the smart banner is pointing, dependent on the OS of the device.
   */
    os: 'android' | 'ios' | 'macos' | 'other' | 'windows'
    /**
   * The screen that the user came from.
   */
    pageSource?: string

  }
  'AppBannerClosed [v1]': {

    /**
   * The CTA that got the user to this screen.
   */
    cta?: string
    /**
   * The store to which the smart banner is pointing, dependent on the OS of the device.
   */
    os: 'android' | 'ios'
    /**
   * The screen that the user came from.
   */
    pageSource?: string

  }
  'AppBannerClosed [v2]': {

    /**
   * The CTA that got the user to this screen.
   */
    cta?: string
    /**
   * The store to which the smart banner is pointing, dependent on the OS of the device.
   */
    os: 'android' | 'ios' | 'macos' | 'other' | 'windows'
    /**
   * The screen that the user came from.
   */
    pageSource?: string

  }
  'AppRaterRateAppClicked': {

    /**
   * The response to the initial rating modal. Only 1-3 stars as this is the only path the user can take to get here.
   */
    rating: '4' | '5'
    /**
   * The trigger that caused the app rater modal to be displayed.
   */
    trigger:
      | '4starreview'
      | '5starreview'
      | 'firstbookingpaymentreceived'
      | 'firstbookingreceived'
      | 'firstpayoutreceived'

  }
  'AppRaterRateAppClicked [v1]': {

    /**
   * The response to the initial rating modal. Only 1-3 stars as this is the only path the user can take to get here.
   */
    rating: '4' | '5'
    /**
   * The trigger that caused the app rater modal to be displayed.
   */
    trigger:
      | '4starreview'
      | '5starreview'
      | 'firstbookingpaymentreceived'
      | 'firstbookingreceived'
      | 'firstpayoutreceived'

  }
  'AppRaterResponded': {

    /**
   * The raw text response of the user in the feedback form. Only populated if stepName is feedback and response is NOT close or clickoutside.
   */
    feedback?: string
    /**
   * The star rating that the user provided. This is saved for subsequent steps.
   */
    rating?: '1' | '2' | '3' | '4' | '5'
    /**
   * The response to the modal - either the star rating or closing the modal.
   */
    response: 'clickoutside' | 'close' | 'continue' | 'done'
    /**
   * The step that the user has responded to.
   */
    stepName: 'feedback' | 'leavereview' | 'stars'
    /**
   * The trigger that caused the app rater modal to be displayed.
   */
    trigger:
      | '4starreview'
      | '5starreview'
      | 'firstbookingpaymentreceived'
      | 'firstbookingreceived'
      | 'firstpayoutreceived'

  }
  'AppRaterResponded [v1]': {

    /**
   * The raw text response of the user in the feedback form. Only populated if stepName is feedback and response is NOT close or clickoutside.
   */
    feedback?: string
    /**
   * The star rating that the user provided. This is saved for subsequent steps.
   */
    rating?: '1' | '2' | '3' | '4' | '5'
    /**
   * The response to the modal - either the star rating or closing the modal.
   */
    response: 'clickoutside' | 'close' | 'continue' | 'done'
    /**
   * The step that the user has responded to.
   */
    stepName: 'feedback' | 'leavereview' | 'stars'
    /**
   * The trigger that caused the app rater modal to be displayed.
   */
    trigger:
      | '4starreview'
      | '5starreview'
      | 'firstbookingpaymentreceived'
      | 'firstbookingreceived'
      | 'firstpayoutreceived'

  }
  'AppRaterViewed': {

    /**
   * The star rating that the user provided. This is saved for subsequent steps.
   */
    rating?: '1' | '2' | '3' | '4' | '5'
    /**
   * The step that the user is viewing.
   */
    stepName: 'feedback' | 'leavereview' | 'stars'
    /**
   * The trigger that caused the app rater modal to be displayed.
   */
    trigger:
      | '4starreview'
      | '5starreview'
      | 'firstbookingpaymentreceived'
      | 'firstbookingreceived'
      | 'firstpayoutreceived'

  }
  'AppRaterViewed [v1]': {

    /**
   * The star rating that the user provided. This is saved for subsequent steps.
   */
    rating?: '1' | '2' | '3' | '4' | '5'
    /**
   * The step that the user is viewing.
   */
    stepName: 'feedback' | 'leavereview' | 'stars'
    /**
   * The trigger that caused the app rater modal to be displayed.
   */
    trigger:
      | '4starreview'
      | '5starreview'
      | 'firstbookingpaymentreceived'
      | 'firstbookingreceived'
      | 'firstpayoutreceived'

  }
  'Application Backgrounded': {

  }
  'Application Backgrounded [v1]': {

  }
  'Application Installed': {

  }
  'Application Installed [v1]': {

  }
  'Application Opened': {

    build?: string
    from_background?: boolean
    referring_application?: string
    url?: string
    version?: string

  }
  'Application Opened [v1]': {

    build?: string
    from_background?: boolean
    referring_application?: string
    url?: string
    version?: string

  }
  'Application Updated': {

    build?: string
    previous_build?: string
    previous_version?: string
    version?: string

  }
  'Application Updated [v1]': {

    build?: string
    previous_build?: string
    previous_version?: string
    version?: string

  }
  'BannerClicked': {

    /**
   * Name that illustrates the purpose of the banner, i.e. clicking on the banner will show delivery RVs, do a midweek dated search. What will the banner do?
   */
    bannerName: string
    /**
   * The device type of the user
   */
    deviceType: string
    /**
   * The operating system of the device
   */
    os: string
    /**
   * The page on which the banner was clicked
   */
    pageSource: string
    /**
   * Country of the user - based on which the banner is displayed
   */
    userCountry: string

  }
  'BannerClicked [v1]': {

    /**
   * Name that illustrates the purpose of the banner, i.e. clicking on the banner will show delivery RVs, do a midweek dated search. What will the banner do?
   */
    bannerName: string
    /**
   * The device type of the user
   */
    deviceType: string
    /**
   * The operating system of the device
   */
    os: string
    /**
   * The page on which the banner was clicked
   */
    pageSource: string
    /**
   * Country of the user - based on which the banner is displayed
   */
    userCountry: string

  }
  'BannerClosed': {

    /**
   * Name that illustrates the purpose of the banner, i.e. clicking on the banner will show delivery RVs, do a midweek dated search. What will the banner do?
   */
    bannerName: string
    /**
   * The device type of the user
   */
    deviceType: string
    /**
   * The operating system of the device
   */
    os: string
    /**
   * The page on which the banner was clicked
   */
    pageSource: string
    /**
   * Country of the user - based on which the banner is displayed
   */
    userCountry: string

  }
  'BannerClosed [v1]': {

    /**
   * Name that illustrates the purpose of the banner, i.e. clicking on the banner will show delivery RVs, do a midweek dated search. What will the banner do?
   */
    bannerName: string
    /**
   * The device type of the user
   */
    deviceType: string
    /**
   * The operating system of the device
   */
    os: string
    /**
   * The page on which the banner was clicked
   */
    pageSource: string
    /**
   * Country of the user - based on which the banner is displayed
   */
    userCountry: string

  }
  'BookingCancelled': {

    /**
   * The average price per night of the booking. If multiple nightly prices are included, this will be the average.
   */
    avgNightlyPrice?: number
    /**
   * The unique ID associated with the booking request.
   */
    bookingId: number
    /**
   * The method through which the booking was created.
   */
    bookingType?: 'enquiry' | 'ezmatch' | 'instant' | 'normal'
    /**
   * Whether the booking was cancelled by the Owner, Renter, Admin or System.
   */
    cancelledBy: string
    /**
   * The ISO 4217 currency code that is displayed.
   */
    currency: 'AUD' | 'CAD' | 'EUR' | 'GBP' | 'NZD' | 'USD'
    /**
   * Reason the Host chooses when going through the host cancellation flow. There are 6 main reasons. If the booking is renter cancellation, this parameter is null.
   */
    hostCancellationReason?: number | null
    /**
   * The city that the listing is based in as selected in the listing flow.
   */
    listingCity?: string
    /**
   * The region the listing is based in as selected in the listing flow.
   */
    listingRegion?: string
    /**
   * The number of people that the listing sleeps.
   */
    listingSleepingSpots?: number
    /**
   * The unique ID of the owner of the listing renter has sent the booking request for.
   */
    ownerId: number
    /**
   * The rental portion in the total amount paid by the Renter to-date. This is the same as totalPaid minus service fees and tax.
   */
    paidRentalAmount: number
    /**
   * Was the booking paid all in cash? If yes, then True. If it was paid all or partially in credit, then False.
   */
    paymentAllCash: boolean
    /**
   * Was the payment captured? If yes, then True. If it’s in the process of capturing then False.
   */
    paymentCaptured: boolean
    /**
   * The amount that would be refunded back to the Renter if Renter requests refund in cash, depending on who cancelled the booking and the number of days it was cancelled before trip start date.
   */
    potentialCashRefund: number
    /**
   * The amount that would be refunded back to the Renter if Renter requests refund in credit, depending on who cancelled the booking and the number of days it was cancelled before trip start date.
   */
    potentialCreditRefund: number
    /**
   * The unique ID of the renter that sent the booking request for the listing.
   */
    renterId: number
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId?: string
    /**
   * The date host sells their RV and listing will be automatically delisted
   */
    rvSellingDate?: string
    /**
   * Specific type of RV.
   */
    rvType?:
      | 'campervan'
      | 'classa'
      | 'classb'
      | 'classc'
      | 'fifthwheel'
      | 'hybrid'
      | 'microtrailer'
      | 'motorhome'
      | 'rvcottage'
      | 'tenttrailer'
      | 'toyhauler'
      | 'traveltrailer'
      | 'truckcamper'
    /**
   * The total that has been paid by the renter to-date.
   */
    totalPaid: number

  }
  'BookingCancelled [v1]': {

    /**
   * The average price per night of the booking. If multiple nightly prices are included, this will be the average.
   */
    avgNightlyPrice?: number
    /**
   * The unique ID associated with the booking request.
   */
    bookingId: number
    /**
   * The method through which the booking was created.
   */
    bookingType?: 'enquiry' | 'ezmatch' | 'instant' | 'normal'
    /**
   * Whether the booking was cancelled by the Owner, Renter, Admin or System.
   */
    cancelledBy: string
    /**
   * The ISO 4217 currency code that is displayed.
   */
    currency: 'aud' | 'cad' | 'eur' | 'gbp' | 'nzd' | 'usd'
    /**
   * The city that the listing is based in as selected in the listing flow.
   */
    listingCity?: string
    /**
   * The region the listing is based in as selected in the listing flow.
   */
    listingRegion?: string
    /**
   * The number of people that the listing sleeps.
   */
    listingSleepingSpots?: number
    /**
   * The rental portion in the total amount paid by the Renter to-date. This is the same as totalPaid minus service fees and tax.
   */
    paidRentalAmount: number
    /**
   * Was the booking paid all in cash? If yes, then True. If it was paid all or partially in credit, then False.
   */
    paymentAllCash: boolean
    /**
   * Was the payment captured? If yes, then True. If it’s in the process of capturing then False.
   */
    paymentCaptured: boolean
    /**
   * The amount that would be refunded back to the Renter if Renter requests refund in cash, depending on who cancelled the booking and the number of days it was cancelled before trip start date.
   */
    potentialCashRefund: number
    /**
   * The amount that would be refunded back to the Renter if Renter requests refund in credit, depending on who cancelled the booking and the number of days it was cancelled before trip start date.
   */
    potentialCreditRefund: number
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId?: string
    /**
   * Specific type of RV.
   */
    rvType?:
      | 'campervan'
      | 'classa'
      | 'classb'
      | 'classc'
      | 'fifthwheel'
      | 'hybrid'
      | 'microtrailer'
      | 'motorhome'
      | 'rvcottage'
      | 'tenttrailer'
      | 'toyhauler'
      | 'traveltrailer'
      | 'truckcamper'
    /**
   * The total that has been paid by the renter to-date.
   */
    totalPaid: number

  }
  'BookingCancelled [v2]': {

    /**
   * The average price per night of the booking. If multiple nightly prices are included, this will be the average.
   */
    avgNightlyPrice?: number
    /**
   * The unique ID associated with the booking request.
   */
    bookingId: number
    /**
   * The method through which the booking was created.
   */
    bookingType?: 'enquiry' | 'ezmatch' | 'instant' | 'normal'
    /**
   * Whether the booking was cancelled by the Owner, Renter, Admin or System.
   */
    cancelledBy: string
    /**
   * The ISO 4217 currency code that is displayed.
   */
    currency: 'aud' | 'cad' | 'eur' | 'gbp' | 'nzd' | 'usd'
    /**
   * The city that the listing is based in as selected in the listing flow.
   */
    listingCity?: string
    /**
   * The region the listing is based in as selected in the listing flow.
   */
    listingRegion?: string
    /**
   * The number of people that the listing sleeps.
   */
    listingSleepingSpots?: number
    /**
   * The unique ID of the owner of the listing renter has sent the booking request for.
   */
    ownerId: number
    /**
   * The rental portion in the total amount paid by the Renter to-date. This is the same as totalPaid minus service fees and tax.
   */
    paidRentalAmount: number
    /**
   * Was the booking paid all in cash? If yes, then True. If it was paid all or partially in credit, then False.
   */
    paymentAllCash: boolean
    /**
   * Was the payment captured? If yes, then True. If it’s in the process of capturing then False.
   */
    paymentCaptured: boolean
    /**
   * The amount that would be refunded back to the Renter if Renter requests refund in cash, depending on who cancelled the booking and the number of days it was cancelled before trip start date.
   */
    potentialCashRefund: number
    /**
   * The amount that would be refunded back to the Renter if Renter requests refund in credit, depending on who cancelled the booking and the number of days it was cancelled before trip start date.
   */
    potentialCreditRefund: number
    /**
   * The unique ID of the renter that sent the booking request for the listing.
   */
    renterId: number
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId?: string
    /**
   * Specific type of RV.
   */
    rvType?:
      | 'campervan'
      | 'classa'
      | 'classb'
      | 'classc'
      | 'fifthwheel'
      | 'hybrid'
      | 'microtrailer'
      | 'motorhome'
      | 'rvcottage'
      | 'tenttrailer'
      | 'toyhauler'
      | 'traveltrailer'
      | 'truckcamper'
    /**
   * The total that has been paid by the renter to-date.
   */
    totalPaid: number

  }
  'BookingCancelled [v3]': {

    /**
   * The average price per night of the booking. If multiple nightly prices are included, this will be the average.
   */
    avgNightlyPrice?: number
    /**
   * The unique ID associated with the booking request.
   */
    bookingId: number
    /**
   * The method through which the booking was created.
   */
    bookingType?: 'enquiry' | 'ezmatch' | 'instant' | 'normal'
    /**
   * Whether the booking was cancelled by the Owner, Renter, Admin or System.
   */
    cancelledBy: string
    /**
   * The ISO 4217 currency code that is displayed.
   */
    currency: 'aud' | 'cad' | 'eur' | 'gbp' | 'nzd' | 'usd'
    /**
   * Reason the Host chooses when going through the host cancellation flow. There are 6 main reasons. If the booking is renter cancellation, this parameter is null.
   */
    hostCancellationReason: number | null
    /**
   * The city that the listing is based in as selected in the listing flow.
   */
    listingCity?: string
    /**
   * The region the listing is based in as selected in the listing flow.
   */
    listingRegion?: string
    /**
   * The number of people that the listing sleeps.
   */
    listingSleepingSpots?: number
    /**
   * The unique ID of the owner of the listing renter has sent the booking request for.
   */
    ownerId: number
    /**
   * The rental portion in the total amount paid by the Renter to-date. This is the same as totalPaid minus service fees and tax.
   */
    paidRentalAmount: number
    /**
   * Was the booking paid all in cash? If yes, then True. If it was paid all or partially in credit, then False.
   */
    paymentAllCash: boolean
    /**
   * Was the payment captured? If yes, then True. If it’s in the process of capturing then False.
   */
    paymentCaptured: boolean
    /**
   * The amount that would be refunded back to the Renter if Renter requests refund in cash, depending on who cancelled the booking and the number of days it was cancelled before trip start date.
   */
    potentialCashRefund: number
    /**
   * The amount that would be refunded back to the Renter if Renter requests refund in credit, depending on who cancelled the booking and the number of days it was cancelled before trip start date.
   */
    potentialCreditRefund: number
    /**
   * The unique ID of the renter that sent the booking request for the listing.
   */
    renterId: number
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId?: string
    /**
   * The date host sells their RV and listing will be automatically delisted
   */
    rvSellingDate?: string
    /**
   * Specific type of RV.
   */
    rvType?:
      | 'campervan'
      | 'classa'
      | 'classb'
      | 'classc'
      | 'fifthwheel'
      | 'hybrid'
      | 'microtrailer'
      | 'motorhome'
      | 'rvcottage'
      | 'tenttrailer'
      | 'toyhauler'
      | 'traveltrailer'
      | 'truckcamper'
    /**
   * The total that has been paid by the renter to-date.
   */
    totalPaid: number

  }
  'BookingCancelled [v4]': {

    /**
   * The average price per night of the booking. If multiple nightly prices are included, this will be the average.
   */
    avgNightlyPrice?: number
    /**
   * The unique ID associated with the booking request.
   */
    bookingId: number
    /**
   * The method through which the booking was created.
   */
    bookingType?: 'enquiry' | 'ezmatch' | 'instant' | 'normal'
    /**
   * Whether the booking was cancelled by the Owner, Renter, Admin or System.
   */
    cancelledBy: string
    /**
   * The ISO 4217 currency code that is displayed.
   */
    currency: 'AUD' | 'CAD' | 'EUR' | 'GBP' | 'NZD' | 'USD'
    /**
   * Reason the Host chooses when going through the host cancellation flow. There are 6 main reasons. If the booking is renter cancellation, this parameter is null.
   */
    hostCancellationReason?: number | null
    /**
   * The city that the listing is based in as selected in the listing flow.
   */
    listingCity?: string
    /**
   * The region the listing is based in as selected in the listing flow.
   */
    listingRegion?: string
    /**
   * The number of people that the listing sleeps.
   */
    listingSleepingSpots?: number
    /**
   * The unique ID of the owner of the listing renter has sent the booking request for.
   */
    ownerId: number
    /**
   * The rental portion in the total amount paid by the Renter to-date. This is the same as totalPaid minus service fees and tax.
   */
    paidRentalAmount: number
    /**
   * Was the booking paid all in cash? If yes, then True. If it was paid all or partially in credit, then False.
   */
    paymentAllCash: boolean
    /**
   * Was the payment captured? If yes, then True. If it’s in the process of capturing then False.
   */
    paymentCaptured: boolean
    /**
   * The amount that would be refunded back to the Renter if Renter requests refund in cash, depending on who cancelled the booking and the number of days it was cancelled before trip start date.
   */
    potentialCashRefund: number
    /**
   * The amount that would be refunded back to the Renter if Renter requests refund in credit, depending on who cancelled the booking and the number of days it was cancelled before trip start date.
   */
    potentialCreditRefund: number
    /**
   * The unique ID of the renter that sent the booking request for the listing.
   */
    renterId: number
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId?: string
    /**
   * The date host sells their RV and listing will be automatically delisted
   */
    rvSellingDate?: string
    /**
   * Specific type of RV.
   */
    rvType?:
      | 'campervan'
      | 'classa'
      | 'classb'
      | 'classc'
      | 'fifthwheel'
      | 'hybrid'
      | 'microtrailer'
      | 'motorhome'
      | 'rvcottage'
      | 'tenttrailer'
      | 'toyhauler'
      | 'traveltrailer'
      | 'truckcamper'
    /**
   * The total that has been paid by the renter to-date.
   */
    totalPaid: number

  }
  'BookingCardClicked': {

    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country where the user is located
   */
    accountCountry?: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * The booking label that defines which status the booking is in
   */
    bookingLabel: string
    /**
   * the cta the user clicked on to get to this screen. (ie. was it from the inbox message, or the bookings/trips card or host dashboard card, etc. )
   */
    cta?: string
    /**
   * the number of nights as mntioned on the card clicked
   */
    numberOfNights: number
    /**
   * The source screen that came before their next action if applicable
   */
    pageSource?: string
    /**
   * The date that the requested booking is to begin.
   */
    startDate: string
    /**
   * The user ID of the user who clicked on the card
   */
    userId: number

  }
  'BookingCardClicked [v1]': {

    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country where the user is located
   */
    accountCountry?: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * The booking label that defines which status the booking is in
   */
    bookingLabel: string
    /**
   * the cta the user clicked on to get to this screen. (ie. was it from the inbox message, or the bookings/trips card or host dashboard card, etc. )
   */
    cta?: string
    /**
   * the number of nights as mntioned on the card clicked
   */
    numberOfNights: number
    /**
   * The source screen that came before their next action if applicable
   */
    pageSource?: string
    /**
   * The date that the requested booking is to begin.
   */
    startDate: string
    /**
   * The user ID of the user who clicked on the card
   */
    userId: number

  }
  'BookingDetailsCtaClicked': {

    /**
   * The unique ID associated with the booking (same as booking number).
   */
    bookingId: number
    /**
   * The state of the booking as is represented on the backend.
   */
    bookingState: number
    /**
   * The method through which the booking was created.
   */
    bookingType: string
    /**
   * the cta the user clicked on. (ie. Pre-approve, Accept, decline or Special Offer, Make a payment, add Pay to confirm, cancel, See full review, etc. )
   */
    cta: string
    /**
   * The ISO 4217 currency code displayed
   */
    currency: string
    /**
   * The number of characters in the guest review. If there is no guest review this number will be “0”
   */
    guestReviewLength?: number
    /**
   * Whether or not there is a guest review.
   */
    hasGuestReview: boolean
    /**
   * whether or not this Booking has payment information attached at time of the event
   */
    hasPaymentInfo: boolean
    /**
   * If the review has photos uploaded by the guest
   */
    hasReviewPhotos: boolean
    /**
   * Whether the booking originated from an Ezymatch offer
   */
    isEzymatch: boolean
    /**
   * The user type, if known. The user is the person visiting the profile page.
   */
    isOwner?: boolean
    /**
   * The number of messages that have been received by the user viewing
   */
    numMessagesReceived?: number
    /**
   * The number of messages that have been sent by the user viewing.
   */
    numMessagesSent?: number
    /**
   * Each time a different party messages, the turn count is incremented by one. E.g. If A messages B then B messages A, the turn count is 2. If A messages B, then A messages B again, then A messages B again, the turn count is 1 (because B has not yet had a “turn”). A code snippet can most likely be reused from ‘MessageSent’ event
   */
    numTurns?: number
    /**
   * The Id of the user whose profile is being viewed.
   */
    receiverUserId?: number
    /**
   * The quoted rental price for total nights only that is displayed.
   */
    rentalPrice: number
    /**
   * The unique ID associated with an RV.
   */
    rvId: string
    /**
   * The total dollar value of the host payout for the entire rental.
   */
    totalPayout: number
    /**
   * Difference between start date and the current date. (how many days out does the trip start)
   */
    tripLeadTime: number
    /**
   * Difference between start date and end date. Effectively, the number of nights for a trip
   */
    tripLength: number

  }
  'BookingDetailsCtaClicked [v1]': {

    /**
   * The unique ID associated with the booking (same as booking number).
   */
    bookingId: number
    /**
   * The state of the booking as is represented on the backend.
   */
    bookingState: number
    /**
   * The method through which the booking was created.
   */
    bookingType: string
    /**
   * the cta the user clicked on. (ie. Pre-approve, Accept, decline or Special Offer, Make a payment, add Pay to confirm etc. )
   */
    cta: string
    /**
   * The ISO 4217 currency code displayed
   */
    currency: string
    /**
   * whether or not this Booking has payment information attached at time of the event
   */
    hasPaymentInfo: boolean
    /**
   * Whether the booking originated from an Ezymatch offer
   */
    isEzymatch: boolean
    /**
   * The user type, if known. The user is the person visiting the profile page.
   */
    isOwner?: boolean
    /**
   * The number of messages that have been received by the user viewing
   */
    numMessagesReceived: number
    /**
   * The number of messages that have been sent by the user viewing.
   */
    numMessagesSent: number
    /**
   * Each time a different party messages, the turn count is incremented by one. E.g. If A messages B then B messages A, the turn count is 2. If A messages B, then A messages B again, then A messages B again, the turn count is 1 (because B has not yet had a “turn”). A code snippet can most likely be reused from ‘MessageSent’ event
   */
    numTurns: number
    /**
   * The Id of the user whose profile is being viewed.
   */
    receiverUserId: number
    /**
   * The quoted rental price for total nights only that is displayed.
   */
    rentalPrice: number
    /**
   * The unique ID associated with an RV.
   */
    rvId: string
    /**
   * The total dollar value of the host payout for the entire rental.
   */
    totalPayout: number
    /**
   * Difference between start date and the current date. (how many days out does the trip start)
   */
    tripLeadTime: number
    /**
   * Difference between start date and end date. Effectively, the number of nights for a trip
   */
    tripLength: number

  }
  'BookingDetailsCtaClicked [v2]': {

    /**
   * The unique ID associated with the booking (same as booking number).
   */
    bookingId: number
    /**
   * The state of the booking as is represented on the backend.
   */
    bookingState: number
    /**
   * The method through which the booking was created.
   */
    bookingType: string
    /**
   * the cta the user clicked on. (ie. Pre-approve, Accept, decline or Special Offer, Make a payment, add Pay to confirm, cancel, See full review, etc. )
   */
    cta: string
    /**
   * The ISO 4217 currency code displayed
   */
    currency: string
    /**
   * The number of characters in the guest review. If there is no guest review this number will be “0”
   */
    guestReviewLength?: number
    /**
   * Whether or not there is a guest review.
   */
    hasGuestReview: boolean
    /**
   * whether or not this Booking has payment information attached at time of the event
   */
    hasPaymentInfo: boolean
    /**
   * If the review has photos uploaded by the guest
   */
    hasReviewPhotos: boolean
    /**
   * Whether the booking originated from an Ezymatch offer
   */
    isEzymatch: boolean
    /**
   * The user type, if known. The user is the person visiting the profile page.
   */
    isOwner?: boolean
    /**
   * The number of messages that have been received by the user viewing
   */
    numMessagesReceived?: number
    /**
   * The number of messages that have been sent by the user viewing.
   */
    numMessagesSent?: number
    /**
   * Each time a different party messages, the turn count is incremented by one. E.g. If A messages B then B messages A, the turn count is 2. If A messages B, then A messages B again, then A messages B again, the turn count is 1 (because B has not yet had a “turn”). A code snippet can most likely be reused from ‘MessageSent’ event
   */
    numTurns?: number
    /**
   * The Id of the user whose profile is being viewed.
   */
    receiverUserId?: number
    /**
   * The quoted rental price for total nights only that is displayed.
   */
    rentalPrice: number
    /**
   * The unique ID associated with an RV.
   */
    rvId: string
    /**
   * The total dollar value of the host payout for the entire rental.
   */
    totalPayout: number
    /**
   * Difference between start date and the current date. (how many days out does the trip start)
   */
    tripLeadTime: number
    /**
   * Difference between start date and end date. Effectively, the number of nights for a trip
   */
    tripLength: number

  }
  'BookingDetailsViewed': {

    /**
   * The number of adults that the requested booking will have.
   */
    adults: number
    /**
   * The unique ID associated with the booking (same as booking number).
   */
    bookingId: number
    /**
   * The state of the booking as is represented on the backend.
   */
    bookingState: number
    /**
   * The method through which the booking was created.
   */
    bookingType: 'enquiry' | 'ezmatch' | 'instant' | 'normal'
    /**
   * The number of children that the requested booking will have.
   */
    children: number
    /**
   * The quoted price for cleaning.
   */
    cleaningPrice?: number
    /**
   * the cta the user clicked on to get to this screen. (ie. was it from teh inbox message, or the bookings/trips card or host dashboard card, etc. )
   */
    cta: string
    /**
   * The ISO 4217 currency code displayed
   */
    currency: string
    /**
   * maximum distance in kilometers that the add-on is offering (ie. if I choose up to 100km option, this parameter shows 100km )
   */
    deliveryDistance?: number
    /**
   * The total price for delivery option selected
   */
    deliveryPrice?: number
    /**
   * The extra price per KM that is charged above the freeDistanceKms.
   */
    distancePriceKms?: number
    /**
   * The date that the requested booking is to end.
   */
    endDate: string
    /**
   * The name of the festival or event that the guest has said they will be attending
   */
    festivalName?: string
    /**
   * The total number of free kilometers included for the RV. Natural rounding and conversion to KMs if quoted in miles.
   */
    freeDistanceKms: number | null
    /**
   * The number of free generator hours for the entire rental (not daily).
   */
    freeGeneratorHours?: number | null
    /**
   * If the rental charges per hour for generator usage
   */
    generatorPriceHourly?: number | null
    /**
   * whether or not this booking request includes Delivery
   */
    hasDelivery: boolean
    /**
   * whether or not this Booking has payment information attached at time of the event
   */
    hasPaymentInfo: boolean
    /**
   * Whether the booking request has pets
   */
    hasPets: boolean
    /**
   * Whether the guest has experience towing a similar trailer (true = yes, false = no). If this question is not required on a booking request then this field should not be recorded as true or false
   */
    hasTowingExperience?: boolean
    /**
   * The quoted price for insurance.
   */
    insurancePrice: number
    /**
   * Whether the guest is attending a festival (true = yes, false = no). If this question is not required on a booking request then this field should not be recorded as true or false
   */
    isAttendingFestival?: boolean
    /**
   * Whether the booking originated from an Ezymatch offer
   */
    isEzymatch: boolean
    /**
   * The type of user viewing the booking. Depending upon this type, different options will be available on the page.
   */
    isOwner: boolean
    /**
   * whether or not this booking is planning on moving the RV after delivery or not. (based on the question asked on the first page of the booking flow)
   */
    isStationaryDelivery?: boolean
    /**
   * The last time that a message was received by the user viewing.
   */
    lastMessageReceived?: string
    /**
   * The last time that a message was sent by the user viewing.
   */
    lastMessageSent?: string
    /**
   * The city that the listing is based in.
   */
    listingCity?: string
    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    listingCountry?: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * The region the listing is based in
   */
    listingRegion?: string
    /**
   * The number of drivers that have been added to the booking.
   */
    numDrivers: number
    /**
   * The number of messages that have been received by the user viewing.
   */
    numMessagesReceived: number
    /**
   * The number of messages that have been sent by the user viewing.
   */
    numMessagesSent: number
    /**
   * The total amount that has been paid to-date on the booking.
   */
    pricePaid: number
    /**
   * The quoted rental price for total nights only that is displayed.
   */
    rentalPrice: number
    /**
   * The total rental price that is viewed by the Guest.
   */
    rentalTotal: number
    /**
   * The quoted price for roadside assistance.
   */
    roadsidePrice: number
    /**
   * The unique ID associated with an RV.
   */
    rvId: string
    /**
   * The quoted security deposit that will be taken on the security deposit date.
   */
    securityDepositPrice: number
    /**
   * The state of the security deposit (pending | taken | released)
   */
    securityDepositState: string
    /**
   * The quoted service fee paid to RVezy.
   */
    servicePrice: number
    /**
   * The date that the requested booking is to begin.
   */
    startDate: string
    /**
   * The total dollar value of the host payout for the entire rental.
   */
    totalPayout: number
    /**
   * Difference between start date and the current date. (how many days out does the trip start)
   */
    tripLeadTime: number
    /**
   * Difference between start date and end date. Effectively, the number of nights for a trip
   */
    tripLength: number

  }
  'BookingDetailsViewed [v1]': {

    /**
   * The number of adults that the requested booking will have.
   */
    adults: number
    /**
   * The unique ID associated with the booking (same as booking number).
   */
    bookingId: number
    /**
   * The state of the booking as is represented on the backend.
   */
    bookingState: number
    /**
   * The method through which the booking was created.
   */
    bookingType: 'enquiry' | 'ezmatch' | 'instant' | 'normal'
    /**
   * The number of children that the requested booking will have.
   */
    children: number
    /**
   * The quoted price for cleaning.
   */
    cleaningPrice?: number
    /**
   * The ISO 4217 currency code displayed
   */
    currency: string
    /**
   * The extra price per KM that is charged above the freeDistanceKms.
   */
    distancePriceKms?: number
    /**
   * The date that the requested booking is to end.
   */
    endDate: string
    /**
   * The total number of free kilometers included for the RV. Natural rounding and conversion to KMs if quoted in miles.
   */
    freeDistanceKms: number
    /**
   * The number of free generator hours for the entire rental (not daily).
   */
    freeGeneratorHours?: number
    /**
   * If the rental charges per hour for generator usage
   */
    generatorPriceHourly?: number
    /**
   * The quoted price for insurance.
   */
    insurancePrice: number
    /**
   * The type of user viewing the booking. Depending upon this type, different options will be available on the page.
   */
    isOwner: boolean
    /**
   * The last time that a message was received by the user viewing.
   */
    lastMessageReceived?: string
    /**
   * The last time that a message was sent by the user viewing.
   */
    lastMessageSent?: string
    /**
   * The number of drivers that have been added to the booking.
   */
    numDrivers: number
    /**
   * The number of messages that have been received by the user viewing.
   */
    numMessagesReceived: number
    /**
   * The number of messages that have been sent by the user viewing.
   */
    numMessagesSent: number
    /**
   * The total amount that has been paid to-date on the booking.
   */
    pricePaid: number
    /**
   * The quoted rental price for total nights only that is displayed.
   */
    rentalPrice: number
    /**
   * The total rental price that is viewed by the Guest.
   */
    rentalTotal: number
    /**
   * The quoted price for roadside assistance.
   */
    roadsidePrice: number
    /**
   * The unique ID associated with an RV.
   */
    rvId: string
    /**
   * The quoted security deposit that will be taken on the security deposit date.
   */
    securityDepositPrice: number
    /**
   * The state of the security deposit (pending | taken | released)
   */
    securityDepositState: string
    /**
   * The quoted service fee paid to RVezy.
   */
    servicePrice: number
    /**
   * The date that the requested booking is to begin.
   */
    startDate: string

  }
  'BookingDetailsViewed [v2]': {

    /**
   * The number of adults that the requested booking will have.
   */
    adults: number
    /**
   * The unique ID associated with the booking (same as booking number).
   */
    bookingId: number
    /**
   * The state of the booking as is represented on the backend.
   */
    bookingState: number
    /**
   * The method through which the booking was created.
   */
    bookingType: 'enquiry' | 'ezmatch' | 'instant' | 'normal'
    /**
   * The number of children that the requested booking will have.
   */
    children: number
    /**
   * The quoted price for cleaning.
   */
    cleaningPrice?: number
    /**
   * The ISO 4217 currency code displayed
   */
    currency: string
    /**
   * maximum distance in kilometers that the add-on is offering (ie. if I choose up to 100km option, this parameter shows 100km )
   */
    deliveryDistance?: number
    /**
   * The total price for delivery option selected
   */
    deliveryPrice?: number
    /**
   * The extra price per KM that is charged above the freeDistanceKms.
   */
    distancePriceKms?: number
    /**
   * The date that the requested booking is to end.
   */
    endDate: string
    /**
   * The name of the festival or event that the guest has said they will be attending
   */
    festivalName?: string
    /**
   * The total number of free kilometers included for the RV. Natural rounding and conversion to KMs if quoted in miles.
   */
    freeDistanceKms: number
    /**
   * The number of free generator hours for the entire rental (not daily).
   */
    freeGeneratorHours?: number
    /**
   * If the rental charges per hour for generator usage
   */
    generatorPriceHourly?: number
    /**
   * whether or not this booking request includes Delivery
   */
    hasDelivery: boolean
    /**
   * whether or not this Booking has payment information attached at time of the event
   */
    hasPaymentInfo: boolean
    /**
   * Whether the booking request has pets
   */
    hasPets: boolean
    /**
   * Whether the guest has experience towing a similar trailer (true = yes, false = no). If this question is not required on a booking request then this field should not be recorded as true or false
   */
    hasTowingExperience?: boolean
    /**
   * The quoted price for insurance.
   */
    insurancePrice: number
    /**
   * Whether the guest is attending a festival (true = yes, false = no). If this question is not required on a booking request then this field should not be recorded as true or false
   */
    isAttendingFestival?: boolean
    /**
   * Whether the booking originated from an Ezymatch offer
   */
    isEzymatch: boolean
    /**
   * The type of user viewing the booking. Depending upon this type, different options will be available on the page.
   */
    isOwner: boolean
    /**
   * whether or not this booking is planning on moving the RV after delivery or not. (based on the question asked on the first page of the booking flow)
   */
    isStationaryDelivery?: boolean
    /**
   * The last time that a message was received by the user viewing.
   */
    lastMessageReceived?: string
    /**
   * The last time that a message was sent by the user viewing.
   */
    lastMessageSent?: string
    /**
   * The city that the listing is based in.
   */
    listingCity?: string
    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    listingCountry?: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * The region the listing is based in
   */
    listingRegion?: string
    /**
   * The number of drivers that have been added to the booking.
   */
    numDrivers: number
    /**
   * The number of messages that have been received by the user viewing.
   */
    numMessagesReceived: number
    /**
   * The number of messages that have been sent by the user viewing.
   */
    numMessagesSent: number
    /**
   * The total amount that has been paid to-date on the booking.
   */
    pricePaid: number
    /**
   * The quoted rental price for total nights only that is displayed.
   */
    rentalPrice: number
    /**
   * The total rental price that is viewed by the Guest.
   */
    rentalTotal: number
    /**
   * The quoted price for roadside assistance.
   */
    roadsidePrice: number
    /**
   * The unique ID associated with an RV.
   */
    rvId: string
    /**
   * The quoted security deposit that will be taken on the security deposit date.
   */
    securityDepositPrice: number
    /**
   * The state of the security deposit (pending | taken | released)
   */
    securityDepositState: string
    /**
   * The quoted service fee paid to RVezy.
   */
    servicePrice: number
    /**
   * The date that the requested booking is to begin.
   */
    startDate: string
    /**
   * The total dollar value of the host payout for the entire rental.
   */
    totalPayout: number
    /**
   * Difference between start date and the current date. (how many days out does the trip start)
   */
    tripLeadTime: number
    /**
   * Difference between start date and end date. Effectively, the number of nights for a trip
   */
    tripLength: number

  }
  'BookingDetailsViewed [v3]': {

    /**
   * The number of adults that the requested booking will have.
   */
    adults: number
    /**
   * The unique ID associated with the booking (same as booking number).
   */
    bookingId: number
    /**
   * The state of the booking as is represented on the backend.
   */
    bookingState: number
    /**
   * The method through which the booking was created.
   */
    bookingType: 'enquiry' | 'ezmatch' | 'instant' | 'normal'
    /**
   * The number of children that the requested booking will have.
   */
    children: number
    /**
   * The quoted price for cleaning.
   */
    cleaningPrice?: number
    /**
   * the cta the user clicked on to get to this screen. (ie. was it from teh inbox message, or the bookings/trips card or host dashboard card, etc. )
   */
    cta: string
    /**
   * The ISO 4217 currency code displayed
   */
    currency: string
    /**
   * maximum distance in kilometers that the add-on is offering (ie. if I choose up to 100km option, this parameter shows 100km )
   */
    deliveryDistance?: number
    /**
   * The total price for delivery option selected
   */
    deliveryPrice?: number
    /**
   * The extra price per KM that is charged above the freeDistanceKms.
   */
    distancePriceKms?: number
    /**
   * The date that the requested booking is to end.
   */
    endDate: string
    /**
   * The name of the festival or event that the guest has said they will be attending
   */
    festivalName?: string
    /**
   * The total number of free kilometers included for the RV. Natural rounding and conversion to KMs if quoted in miles.
   */
    freeDistanceKms: number
    /**
   * The number of free generator hours for the entire rental (not daily).
   */
    freeGeneratorHours?: number
    /**
   * If the rental charges per hour for generator usage
   */
    generatorPriceHourly?: number
    /**
   * whether or not this booking request includes Delivery
   */
    hasDelivery: boolean
    /**
   * whether or not this Booking has payment information attached at time of the event
   */
    hasPaymentInfo: boolean
    /**
   * Whether the booking request has pets
   */
    hasPets: boolean
    /**
   * Whether the guest has experience towing a similar trailer (true = yes, false = no). If this question is not required on a booking request then this field should not be recorded as true or false
   */
    hasTowingExperience?: boolean
    /**
   * The quoted price for insurance.
   */
    insurancePrice: number
    /**
   * Whether the guest is attending a festival (true = yes, false = no). If this question is not required on a booking request then this field should not be recorded as true or false
   */
    isAttendingFestival?: boolean
    /**
   * Whether the booking originated from an Ezymatch offer
   */
    isEzymatch: boolean
    /**
   * The type of user viewing the booking. Depending upon this type, different options will be available on the page.
   */
    isOwner: boolean
    /**
   * whether or not this booking is planning on moving the RV after delivery or not. (based on the question asked on the first page of the booking flow)
   */
    isStationaryDelivery?: boolean
    /**
   * The last time that a message was received by the user viewing.
   */
    lastMessageReceived?: string
    /**
   * The last time that a message was sent by the user viewing.
   */
    lastMessageSent?: string
    /**
   * The city that the listing is based in.
   */
    listingCity?: string
    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    listingCountry?: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * The region the listing is based in
   */
    listingRegion?: string
    /**
   * The number of drivers that have been added to the booking.
   */
    numDrivers: number
    /**
   * The number of messages that have been received by the user viewing.
   */
    numMessagesReceived: number
    /**
   * The number of messages that have been sent by the user viewing.
   */
    numMessagesSent: number
    /**
   * The total amount that has been paid to-date on the booking.
   */
    pricePaid: number
    /**
   * The quoted rental price for total nights only that is displayed.
   */
    rentalPrice: number
    /**
   * The total rental price that is viewed by the Guest.
   */
    rentalTotal: number
    /**
   * The quoted price for roadside assistance.
   */
    roadsidePrice: number
    /**
   * The unique ID associated with an RV.
   */
    rvId: string
    /**
   * The quoted security deposit that will be taken on the security deposit date.
   */
    securityDepositPrice: number
    /**
   * The state of the security deposit (pending | taken | released)
   */
    securityDepositState: string
    /**
   * The quoted service fee paid to RVezy.
   */
    servicePrice: number
    /**
   * The date that the requested booking is to begin.
   */
    startDate: string
    /**
   * The total dollar value of the host payout for the entire rental.
   */
    totalPayout: number
    /**
   * Difference between start date and the current date. (how many days out does the trip start)
   */
    tripLeadTime: number
    /**
   * Difference between start date and end date. Effectively, the number of nights for a trip
   */
    tripLength: number

  }
  'BookingDetailsViewed [v4]': {

    /**
   * The number of adults that the requested booking will have.
   */
    adults: number
    /**
   * The unique ID associated with the booking (same as booking number).
   */
    bookingId: number
    /**
   * The state of the booking as is represented on the backend.
   */
    bookingState: number
    /**
   * The method through which the booking was created.
   */
    bookingType: 'enquiry' | 'ezmatch' | 'instant' | 'normal'
    /**
   * The number of children that the requested booking will have.
   */
    children: number
    /**
   * The quoted price for cleaning.
   */
    cleaningPrice?: number
    /**
   * the cta the user clicked on to get to this screen. (ie. was it from teh inbox message, or the bookings/trips card or host dashboard card, etc. )
   */
    cta: string
    /**
   * The ISO 4217 currency code displayed
   */
    currency: string
    /**
   * maximum distance in kilometers that the add-on is offering (ie. if I choose up to 100km option, this parameter shows 100km )
   */
    deliveryDistance?: number
    /**
   * The total price for delivery option selected
   */
    deliveryPrice?: number
    /**
   * The extra price per KM that is charged above the freeDistanceKms.
   */
    distancePriceKms?: number
    /**
   * The date that the requested booking is to end.
   */
    endDate: string
    /**
   * The name of the festival or event that the guest has said they will be attending
   */
    festivalName?: string
    /**
   * The total number of free kilometers included for the RV. Natural rounding and conversion to KMs if quoted in miles.
   */
    freeDistanceKms: number | null
    /**
   * The number of free generator hours for the entire rental (not daily).
   */
    freeGeneratorHours?: number | null
    /**
   * If the rental charges per hour for generator usage
   */
    generatorPriceHourly?: number | null
    /**
   * whether or not this booking request includes Delivery
   */
    hasDelivery: boolean
    /**
   * whether or not this Booking has payment information attached at time of the event
   */
    hasPaymentInfo: boolean
    /**
   * Whether the booking request has pets
   */
    hasPets: boolean
    /**
   * Whether the guest has experience towing a similar trailer (true = yes, false = no). If this question is not required on a booking request then this field should not be recorded as true or false
   */
    hasTowingExperience?: boolean
    /**
   * The quoted price for insurance.
   */
    insurancePrice: number
    /**
   * Whether the guest is attending a festival (true = yes, false = no). If this question is not required on a booking request then this field should not be recorded as true or false
   */
    isAttendingFestival?: boolean
    /**
   * Whether the booking originated from an Ezymatch offer
   */
    isEzymatch: boolean
    /**
   * The type of user viewing the booking. Depending upon this type, different options will be available on the page.
   */
    isOwner: boolean
    /**
   * whether or not this booking is planning on moving the RV after delivery or not. (based on the question asked on the first page of the booking flow)
   */
    isStationaryDelivery?: boolean
    /**
   * The last time that a message was received by the user viewing.
   */
    lastMessageReceived?: string
    /**
   * The last time that a message was sent by the user viewing.
   */
    lastMessageSent?: string
    /**
   * The city that the listing is based in.
   */
    listingCity?: string
    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    listingCountry?: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * The region the listing is based in
   */
    listingRegion?: string
    /**
   * The number of drivers that have been added to the booking.
   */
    numDrivers: number
    /**
   * The number of messages that have been received by the user viewing.
   */
    numMessagesReceived: number
    /**
   * The number of messages that have been sent by the user viewing.
   */
    numMessagesSent: number
    /**
   * The total amount that has been paid to-date on the booking.
   */
    pricePaid: number
    /**
   * The quoted rental price for total nights only that is displayed.
   */
    rentalPrice: number
    /**
   * The total rental price that is viewed by the Guest.
   */
    rentalTotal: number
    /**
   * The quoted price for roadside assistance.
   */
    roadsidePrice: number
    /**
   * The unique ID associated with an RV.
   */
    rvId: string
    /**
   * The quoted security deposit that will be taken on the security deposit date.
   */
    securityDepositPrice: number
    /**
   * The state of the security deposit (pending | taken | released)
   */
    securityDepositState: string
    /**
   * The quoted service fee paid to RVezy.
   */
    servicePrice: number
    /**
   * The date that the requested booking is to begin.
   */
    startDate: string
    /**
   * The total dollar value of the host payout for the entire rental.
   */
    totalPayout: number
    /**
   * Difference between start date and the current date. (how many days out does the trip start)
   */
    tripLeadTime: number
    /**
   * Difference between start date and end date. Effectively, the number of nights for a trip
   */
    tripLength: number

  }
  'BookingPaymentDepositSuccessful': {

    /**
   * The amount that was taken as a deposit.
   */
    amount: number
    /**
   * The unique ID associated with the booking request.
   */
    bookingId: number
    /**
   * The ISO 4217 currency code that is displayed.
   */
    currency: 'AUD' | 'CAD' | 'EUR' | 'GBP' | 'NZD' | 'USD'
    /**
   * The unique ID of the owner of the listing renter has sent the booking request for.
   */
    ownerId: number
    /**
   * The payment provider that will handle processing the payment.
   */
    paymentProvider: 'stripe'
    /**
   * The unique ID of the renter that sent the booking request for the listing.
   */
    renterId: number
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId: string

  }
  'BookingPaymentDepositSuccessful [v1]': {

    /**
   * The amount that was taken as a deposit.
   */
    amount: number
    /**
   * The unique ID associated with the booking request.
   */
    bookingId: number
    /**
   * The ISO 4217 currency code that is displayed.
   */
    currency: 'AUD' | 'CAD' | 'EUR' | 'GBP' | 'NZD' | 'USD'
    /**
   * The unique ID of the owner of the listing renter has sent the booking request for.
   */
    ownerId: number
    /**
   * The payment provider that will handle processing the payment.
   */
    paymentProvider: 'stripe'
    /**
   * The unique ID of the renter that sent the booking request for the listing.
   */
    renterId: number
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId: string

  }
  'BookingPaymentFailed': {

    /**
   * The unique ID associated with the booking request that got the user to the payment screen.
   */
    bookingId?: number
    /**
   * The state of the booking as is represented on the backend before this event was submitted (or at the time)
   */
    bookingState: number
    /**
   * The amount that was attempted as a charge
   */
    chargeAmount: number
    /**
   * What part of payment failed.
   */
    chargeType: string
    /**
   * The ISO 4217 currency that will be submitted for payments.
   */
    currency: 'AUD' | 'CAD' | 'EUR' | 'GBP' | 'NZD' | 'USD'
    /**
   * The standardized code that the payment provider uses to indicate why the payment failed. 'reason' from stripe
   */
    failCode: string
    /**
   * The english failure reason. seller_message from Stripe.
   */
    failMessage: string
    /**
   * The failure type identified for the payment.
   */
    failType?: string
    /**
   * Stripe payment intent id
   */
    paymentIntentId?: string
    /**
   * The unique ID of the renter that sent the booking request for the listing.
   */
    renterId: number

  }
  'BookingPaymentFailed [v1]': {

    /**
   * The unique ID associated with the booking request that got the user to the payment screen.
   */
    bookingId?: number
    /**
   * The state of the booking as is represented on the backend before this event was submitted (or at the time)
   */
    bookingState: number
    /**
   * The amount that was attempted as a charge
   */
    chargeAmount: number
    /**
   * What part of payment failed.
   */
    chargeType: string
    /**
   * The ISO 4217 currency that will be submitted for payments.
   */
    currency: 'CAD' | 'USD' | 'aud' | 'cad' | 'eur' | 'gbp' | 'nzd' | 'usd'
    /**
   * The standardized code that the payment provider uses to indicate why the payment failed. 'reason' from stripe
   */
    failCode: string
    /**
   * The english failure reason. seller_message from Stripe.
   */
    failMessage: string
    /**
   * The failure type identified for the payment.
   */
    failType?: string
    /**
   * Stripe payment intent id
   */
    paymentIntentId?: string

  }
  'BookingPaymentFailed [v2]': {

    /**
   * The unique ID associated with the booking request that got the user to the payment screen.
   */
    bookingId?: number
    /**
   * The state of the booking as is represented on the backend before this event was submitted (or at the time)
   */
    bookingState: number
    /**
   * The amount that was attempted as a charge
   */
    chargeAmount: number
    /**
   * What part of payment failed.
   */
    chargeType: string
    /**
   * The ISO 4217 currency that will be submitted for payments.
   */
    currency: 'AUD' | 'CAD' | 'EUR' | 'GBP' | 'NZD' | 'USD'
    /**
   * The standardized code that the payment provider uses to indicate why the payment failed. 'reason' from stripe
   */
    failCode: string
    /**
   * The english failure reason. seller_message from Stripe.
   */
    failMessage: string
    /**
   * The failure type identified for the payment.
   */
    failType?: string
    /**
   * Stripe payment intent id
   */
    paymentIntentId?: string

  }
  'BookingPaymentFailed [v3]': {

    /**
   * The unique ID associated with the booking request that got the user to the payment screen.
   */
    bookingId?: number
    /**
   * The state of the booking as is represented on the backend before this event was submitted (or at the time)
   */
    bookingState: number
    /**
   * The amount that was attempted as a charge
   */
    chargeAmount: number
    /**
   * What part of payment failed.
   */
    chargeType: string
    /**
   * The ISO 4217 currency that will be submitted for payments.
   */
    currency: 'AUD' | 'CAD' | 'EUR' | 'GBP' | 'NZD' | 'USD'
    /**
   * The standardized code that the payment provider uses to indicate why the payment failed. 'reason' from stripe
   */
    failCode: string
    /**
   * The english failure reason. seller_message from Stripe.
   */
    failMessage: string
    /**
   * The failure type identified for the payment.
   */
    failType?: string
    /**
   * Stripe payment intent id
   */
    paymentIntentId?: string
    /**
   * The unique ID of the renter that sent the booking request for the listing.
   */
    renterId: number

  }
  'BookingPaymentFeeSuccessful': {

    /**
   * The amount that was taken as the installment.
   */
    amount: number
    /**
   * The unique ID associated with the booking request.
   */
    bookingId: number
    /**
   * The method through which the booking was created. (note make sure to still track ezymatch even though it isn’t a official booking type in the backend)
   */
    bookingType: string
    /**
   * The ISO 4217 currency code that is displayed.
   */
    currency: 'AUD' | 'CAD' | 'EUR' | 'GBP' | 'NZD' | 'USD'
    /**
   * If the listing has no FOMO tag then the result will be null. If the listing has tag, then the FOMO will be defined as described in the string
   */
    fomoTag?: string
    /**
   * whether or not this booking includes Delivery
   */
    hasDelivery: boolean
    /**
   * whether the booking has the payout guarantee added
   */
    hasPayoutGuarantee: boolean
    /**
   * Whether the booking request has pets
   */
    hasPets: boolean
    /**
   * The installment number for this payment attempt. If the installment number exceeds totalInstallments, it is resulting from a change request.
   */
    installment: number
    /**
   * Whether the booking originated from an Ezymatch offer
   */
    isEzymatch: boolean
    /**
   * Whether or not the RV clicked was available because of the ShortStays feature.
   */
    isShortStay: boolean
    /**
   * The city that the listing is based in.
   */
    listingCity?: string
    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    listingCountry?: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * The region the listing is based in
   */
    listingRegion?: string
    /**
   * Rental category of vehicle booked.
   */
    listingType: string
    /**
   * Specifies the payment method used
   */
    paymentMethodType: 'Affirm' | 'Credit Card'
    /**
   * The payment provider that will handle processing the payment.
   */
    paymentProvider: 'credit' | 'stripe'
    /**
   * name of promo code being applied as shown on the price breakdown component
   */
    promoCode?: string
    /**
   * dollar value of the promo applied if there is one when the user views the payment form. (in the same currency that all other prices are displayed in)
   */
    promoDollarValue?: number
    /**
   * The host ID related to the booking payment being made.
   */
    receiverUserId: number
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId: string
    /**
   * Specific RV type of vehicle booked.
   */
    rvType: string
    /**
   * The totally number of installments to be taken for this booking.
   */
    totalInstallments: number
    /**
   * The total dollar value of the host payout for the entire rental.
   */
    totalPayout: number
    /**
   * Difference between start date and the current date. (how many days out does the trip start)
   */
    tripLeadTime: number
    /**
   * Difference between start date and end date. Effectively, the number of nights for a trip
   */
    tripLength: number

  }
  'BookingPaymentFeeSuccessful [v1]': {

    /**
   * The amount that was taken as the installment.
   */
    amount: number
    /**
   * The unique ID associated with the booking request.
   */
    bookingId: number
    /**
   * The ISO 4217 currency code that is displayed.
   */
    currency: 'aud' | 'cad' | 'eur' | 'gbp' | 'nzd' | 'usd'
    /**
   * The installment number for this payment attempt. If the installment number exceeds totalInstallments, it is resulting from a change request.
   */
    installment: number
    /**
   * The payment provider that will handle processing the payment.
   */
    paymentProvider: 'stripe'
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId: string
    /**
   * The totally number of installments to be taken for this booking.
   */
    totalInstallments: number

  }
  'BookingPaymentFeeSuccessful [v2]': {

    /**
   * The amount that was taken as the installment.
   */
    amount: number
    /**
   * The unique ID associated with the booking request.
   */
    bookingId: number
    /**
   * The method through which the booking was created. (note make sure to still track ezymatch even though it isn’t a official booking type in the backend)
   */
    bookingType: string
    /**
   * The ISO 4217 currency code that is displayed.
   */
    currency: 'aud' | 'cad' | 'eur' | 'gbp' | 'nzd' | 'usd'
    /**
   * whether or not this booking includes Delivery
   */
    hasDelivery: boolean
    /**
   * Whether the booking request has pets
   */
    hasPets: boolean
    /**
   * The installment number for this payment attempt. If the installment number exceeds totalInstallments, it is resulting from a change request.
   */
    installment: number
    /**
   * Whether the booking originated from an Ezymatch offer
   */
    isEzymatch: boolean
    /**
   * The city that the listing is based in.
   */
    listingCity?: string
    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    listingCountry?: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * The region the listing is based in
   */
    listingRegion?: string
    /**
   * Rental category of vehicle booked.
   */
    listingType: string
    /**
   * The payment provider that will handle processing the payment.
   */
    paymentProvider: 'stripe'
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId: string
    /**
   * Specific RV type of vehicle booked.
   */
    rvType: string
    /**
   * The totally number of installments to be taken for this booking.
   */
    totalInstallments: number
    /**
   * The total dollar value of the host payout for the entire rental.
   */
    totalPayout: number
    /**
   * Difference between start date and the current date. (how many days out does the trip start)
   */
    tripLeadTime: number

  }
  'BookingPaymentFeeSuccessful [v3]': {

    /**
   * The amount that was taken as the installment.
   */
    amount: number
    /**
   * The unique ID associated with the booking request.
   */
    bookingId: number
    /**
   * The method through which the booking was created. (note make sure to still track ezymatch even though it isn’t a official booking type in the backend)
   */
    bookingType: string
    /**
   * The ISO 4217 currency code that is displayed.
   */
    currency: 'AUD' | 'CAD' | 'EUR' | 'GBP' | 'NZD' | 'USD'
    /**
   * whether or not this booking includes Delivery
   */
    hasDelivery: boolean
    /**
   * whether the booking has the payout guarantee added
   */
    hasPayoutGuarantee: boolean
    /**
   * Whether the booking request has pets
   */
    hasPets: boolean
    /**
   * The installment number for this payment attempt. If the installment number exceeds totalInstallments, it is resulting from a change request.
   */
    installment: number
    /**
   * Whether the booking originated from an Ezymatch offer
   */
    isEzymatch: boolean
    /**
   * The city that the listing is based in.
   */
    listingCity?: string
    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    listingCountry?: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * The region the listing is based in
   */
    listingRegion?: string
    /**
   * Rental category of vehicle booked.
   */
    listingType: string
    /**
   * The payment provider that will handle processing the payment.
   */
    paymentProvider: 'credit' | 'stripe'
    /**
   * The host ID related to the booking payment being made.
   */
    receiverUserId: number
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId: string
    /**
   * Specific RV type of vehicle booked.
   */
    rvType: string
    /**
   * The totally number of installments to be taken for this booking.
   */
    totalInstallments: number
    /**
   * The total dollar value of the host payout for the entire rental.
   */
    totalPayout: number
    /**
   * Difference between start date and the current date. (how many days out does the trip start)
   */
    tripLeadTime: number

  }
  'BookingPaymentFeeSuccessful [v4]': {

    /**
   * The amount that was taken as the installment.
   */
    amount: number
    /**
   * The unique ID associated with the booking request.
   */
    bookingId: number
    /**
   * The method through which the booking was created. (note make sure to still track ezymatch even though it isn’t a official booking type in the backend)
   */
    bookingType: string
    /**
   * The ISO 4217 currency code that is displayed.
   */
    currency: 'AUD' | 'CAD' | 'EUR' | 'GBP' | 'NZD' | 'USD'
    /**
   * whether or not this booking includes Delivery
   */
    hasDelivery: boolean
    /**
   * whether the booking has the payout guarantee added
   */
    hasPayoutGuarantee: boolean
    /**
   * Whether the booking request has pets
   */
    hasPets: boolean
    /**
   * The installment number for this payment attempt. If the installment number exceeds totalInstallments, it is resulting from a change request.
   */
    installment: number
    /**
   * Whether the booking originated from an Ezymatch offer
   */
    isEzymatch: boolean
    /**
   * Whether or not the RV clicked was available because of the ShortStays feature.
   */
    isShortStay: boolean
    /**
   * The city that the listing is based in.
   */
    listingCity?: string
    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    listingCountry?: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * The region the listing is based in
   */
    listingRegion?: string
    /**
   * Rental category of vehicle booked.
   */
    listingType: string
    /**
   * The payment provider that will handle processing the payment.
   */
    paymentProvider: 'credit' | 'stripe'
    /**
   * name of promo code being applied as shown on the price breakdown component
   */
    promoCode?: string
    /**
   * dollar value of the promo applied if there is one when the user views the payment form. (in the same currency that all other prices are displayed in)
   */
    promoDollarValue?: number
    /**
   * The host ID related to the booking payment being made.
   */
    receiverUserId: number
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId: string
    /**
   * Specific RV type of vehicle booked.
   */
    rvType: string
    /**
   * The totally number of installments to be taken for this booking.
   */
    totalInstallments: number
    /**
   * The total dollar value of the host payout for the entire rental.
   */
    totalPayout: number
    /**
   * Difference between start date and the current date. (how many days out does the trip start)
   */
    tripLeadTime: number
    /**
   * Difference between start date and end date. Effectively, the number of nights for a trip
   */
    tripLength: number

  }
  'BookingPaymentFeeSuccessful [v5]': {

    /**
   * The amount that was taken as the installment.
   */
    amount: number
    /**
   * The unique ID associated with the booking request.
   */
    bookingId: number
    /**
   * The method through which the booking was created. (note make sure to still track ezymatch even though it isn’t a official booking type in the backend)
   */
    bookingType: string
    /**
   * The ISO 4217 currency code that is displayed.
   */
    currency: 'AUD' | 'CAD' | 'EUR' | 'GBP' | 'NZD' | 'USD'
    /**
   * whether or not this booking includes Delivery
   */
    hasDelivery: boolean
    /**
   * whether the booking has the payout guarantee added
   */
    hasPayoutGuarantee: boolean
    /**
   * Whether the booking request has pets
   */
    hasPets: boolean
    /**
   * The installment number for this payment attempt. If the installment number exceeds totalInstallments, it is resulting from a change request.
   */
    installment: number
    /**
   * Whether the booking originated from an Ezymatch offer
   */
    isEzymatch: boolean
    /**
   * Whether or not the RV clicked was available because of the ShortStays feature.
   */
    isShortStay: boolean
    /**
   * The city that the listing is based in.
   */
    listingCity?: string
    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    listingCountry?: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * The region the listing is based in
   */
    listingRegion?: string
    /**
   * Rental category of vehicle booked.
   */
    listingType: string
    /**
   * Specifies the payment method used
   */
    paymentMethodType: 'Affirm' | 'Credit Card'
    /**
   * The payment provider that will handle processing the payment.
   */
    paymentProvider: 'credit' | 'stripe'
    /**
   * name of promo code being applied as shown on the price breakdown component
   */
    promoCode?: string
    /**
   * dollar value of the promo applied if there is one when the user views the payment form. (in the same currency that all other prices are displayed in)
   */
    promoDollarValue?: number
    /**
   * The host ID related to the booking payment being made.
   */
    receiverUserId: number
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId: string
    /**
   * Specific RV type of vehicle booked.
   */
    rvType: string
    /**
   * The totally number of installments to be taken for this booking.
   */
    totalInstallments: number
    /**
   * The total dollar value of the host payout for the entire rental.
   */
    totalPayout: number
    /**
   * Difference between start date and the current date. (how many days out does the trip start)
   */
    tripLeadTime: number
    /**
   * Difference between start date and end date. Effectively, the number of nights for a trip
   */
    tripLength: number

  }
  'BookingPaymentFeeSuccessful [v6]': {

    /**
   * The amount that was taken as the installment.
   */
    amount: number
    /**
   * The unique ID associated with the booking request.
   */
    bookingId: number
    /**
   * The method through which the booking was created. (note make sure to still track ezymatch even though it isn’t a official booking type in the backend)
   */
    bookingType: string
    /**
   * The ISO 4217 currency code that is displayed.
   */
    currency: 'AUD' | 'CAD' | 'EUR' | 'GBP' | 'NZD' | 'USD'
    /**
   * If the listing has no FOMO tag then the result will be null. If the listing has tag, then the FOMO will be defined as described in the string
   */
    fomoTag?: string
    /**
   * whether or not this booking includes Delivery
   */
    hasDelivery: boolean
    /**
   * whether the booking has the payout guarantee added
   */
    hasPayoutGuarantee: boolean
    /**
   * Whether the booking request has pets
   */
    hasPets: boolean
    /**
   * The installment number for this payment attempt. If the installment number exceeds totalInstallments, it is resulting from a change request.
   */
    installment: number
    /**
   * Whether the booking originated from an Ezymatch offer
   */
    isEzymatch: boolean
    /**
   * Whether or not the RV clicked was available because of the ShortStays feature.
   */
    isShortStay: boolean
    /**
   * The city that the listing is based in.
   */
    listingCity?: string
    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    listingCountry?: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * The region the listing is based in
   */
    listingRegion?: string
    /**
   * Rental category of vehicle booked.
   */
    listingType: string
    /**
   * Specifies the payment method used
   */
    paymentMethodType: 'Affirm' | 'Credit Card'
    /**
   * The payment provider that will handle processing the payment.
   */
    paymentProvider: 'credit' | 'stripe'
    /**
   * name of promo code being applied as shown on the price breakdown component
   */
    promoCode?: string
    /**
   * dollar value of the promo applied if there is one when the user views the payment form. (in the same currency that all other prices are displayed in)
   */
    promoDollarValue?: number
    /**
   * The host ID related to the booking payment being made.
   */
    receiverUserId: number
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId: string
    /**
   * Specific RV type of vehicle booked.
   */
    rvType: string
    /**
   * The totally number of installments to be taken for this booking.
   */
    totalInstallments: number
    /**
   * The total dollar value of the host payout for the entire rental.
   */
    totalPayout: number
    /**
   * Difference between start date and the current date. (how many days out does the trip start)
   */
    tripLeadTime: number
    /**
   * Difference between start date and end date. Effectively, the number of nights for a trip
   */
    tripLength: number

  }
  'BookingPaymentFormViewed': {

    /**
   * The number of adults that the requested booking will have.
   */
    adults: number
    /**
   * The unique ID associated with the booking request.
   */
    bookingId: number
    /**
   * The state of the booking as is represented on the backend.
   */
    bookingState: string
    /**
   * The method through which the booking was created.
   */
    bookingType: string
    /**
   * The number of children that the requested booking will have.
   */
    children: number
    /**
   * The quoted price for cleaning.
   */
    cleaningPrice?: number
    /**
   * The CTA that got the user to this screen.
   */
    cta: string
    /**
   * The ISO 4217 currency code that is displayed.
   */
    currency: 'CAD' | 'USD' | 'aud' | 'cad' | 'eur' | 'gbp' | 'nzd' | 'usd'
    /**
   * The extra price per KM that is charged above the freeDistanceKms.
   */
    distancePriceKms?: number
    /**
   * The datetime that the requested booking is to end.
   */
    endDate: string
    /**
   * If the listing has no FOMO tag then the result will be null. If the listing has tag, then the FOMO will be defined as described in the string
   */
    fomoTag?: string
    /**
   * The total number of free kilometers included for the RV. Natural rounding and conversion to KMs if quoted in miles.
   */
    freeDistanceKms?: number | null
    /**
   * The number of free generator hours for the entire rental (not daily).
   */
    freeGeneratorHours?: number | null
    /**
   * If the rental charges per hour for generator usage, the price per hour.
   */
    generatorPriceHourly?: number
    /**
   * whether or not this booking request includes Delivery
   */
    hasDelivery: boolean
    /**
   * The quoted price for insurance.
   */
    insurancePrice: number
    /**
   * Whether or not the PaymentForm is being viewed while the booking is in a state that is before acceptance.
   */
    isBeforeAcceptance: boolean
    /**
   * Whether the booking originated from an Ezymatch offer
   */
    isEzymatch: boolean
    /**
   * Whether or not the RV clicked was available because of the ShortStays feature.
   */
    isShortStay: boolean
    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    listingCountry?: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * The region the listing is based in
   */
    listingRegion?: string
    /**
   * Rental category of vehicle booked.
   */
    listingType: string
    /**
   * This is the nightly rate that is displayed next to the listing
   */
    nightlyRate: number
    /**
   * Time in seconds from when a page started to load to when it finished loading
   */
    pageLoadSpeed?: number
    /**
   * The screen that the user came from.
   */
    pageSource: string
    /**
   * One of bookingflow (when this page is part of the booking flow), failedpayment (when the payment is in a failed state), or requestaccepted (when the request has been accepted by the host and the guest is coming back here).
   */
    pageType: string
    /**
   * name of promo code being applied as shown on the price breakdown component
   */
    promoCode?: string
    /**
   * dollar value of the promo applied if there is one when the user views the payment form. (in the same currency that all other prices are displayed in)
   */
    promoDollarValue?: number
    /**
   * The quoted rental price for total nights only that is displayed.
   */
    rentalPrice: number
    /**
   * The quoted price for roadside assistance.
   */
    roadsidePrice: number | null
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId: string
    /**
   * The quoted security deposit that will be taken on the security deposit date.
   */
    securityDepositPrice: number
    /**
   * The quoted service fee paid to RVezy by the renter.
   */
    servicePrice: number
    /**
   * This is the nightly rate that is displayed for the listing that has smart pricing
   */
    smartNightlyRate?: number | null
    /**
   * The datetime that the requested booking is to begin.
   */
    startDate: string
    /**
   * The total dollar value for the entire booking that is displayed.
   */
    totalPrice: number
    /**
   * Difference between start date and the current date. (how many days out does the trip start)
   */
    tripLeadTime: number
    /**
   * Difference between start date and end date. Effectively, the number of nights for a trip
   */
    tripLength: number

  }
  'BookingPaymentFormViewed [v1]': {

    /**
   * The number of adults that the requested booking will have.
   */
    adults: number
    /**
   * The unique ID associated with the booking request.
   */
    bookingId: number
    /**
   * The number of children that the requested booking will have.
   */
    children: number
    /**
   * The quoted price for cleaning.
   */
    cleaningPrice?: number
    /**
   * The CTA that got the user to this screen.
   */
    cta: string
    /**
   * The ISO 4217 currency code that is displayed.
   */
    currency: 'CAD' | 'USD' | 'aud' | 'cad' | 'eur' | 'gbp' | 'nzd' | 'usd'
    /**
   * The extra price per KM that is charged above the freeDistanceKms.
   */
    distancePriceKms?: number
    /**
   * The datetime that the requested booking is to end.
   */
    endDate: string
    /**
   * The total number of free kilometers included for the RV. Natural rounding and conversion to KMs if quoted in miles.
   */
    freeDistanceKms: number
    /**
   * The number of free generator hours for the entire rental (not daily).
   */
    freeGeneratorHours?: number
    /**
   * If the rental charges per hour for generator usage, the price per hour.
   */
    generatorPriceHourly?: number
    /**
   * The quoted price for insurance.
   */
    insurancePrice: number
    /**
   * Time in seconds from when a page started to load to when it finished loading
   */
    pageLoadSpeed?: number
    /**
   * The screen that the user came from.
   */
    pageSource: string
    /**
   * One of bookingflow (when this page is part of the booking flow), failedpayment (when the payment is in a failed state), or requestaccepted (when the request has been accepted by the host and the guest is coming back here).
   */
    pageType: 'bookingflow' | 'failedpayment' | 'requestaccepted'
    /**
   * The quoted rental price for total nights only that is displayed.
   */
    rentalPrice: number
    /**
   * The quoted price for roadside assistance.
   */
    roadsidePrice: number | null
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId: string
    /**
   * The quoted security deposit that will be taken on the security deposit date.
   */
    securityDepositPrice: number
    /**
   * The quoted service fee paid to RVezy by the renter.
   */
    servicePrice: number
    /**
   * The datetime that the requested booking is to begin.
   */
    startDate: string
    /**
   * The total dollar value for the entire booking that is displayed.
   */
    totalPrice: number

  }
  'BookingPaymentFormViewed [v2]': {

    /**
   * The number of adults that the requested booking will have.
   */
    adults: number
    /**
   * The unique ID associated with the booking request.
   */
    bookingId: number
    /**
   * The number of children that the requested booking will have.
   */
    children: number
    /**
   * The quoted price for cleaning.
   */
    cleaningPrice?: number
    /**
   * The CTA that got the user to this screen.
   */
    cta: string
    /**
   * The ISO 4217 currency code that is displayed.
   */
    currency: 'CAD' | 'USD' | 'aud' | 'cad' | 'eur' | 'gbp' | 'nzd' | 'usd'
    /**
   * The extra price per KM that is charged above the freeDistanceKms.
   */
    distancePriceKms?: number
    /**
   * The datetime that the requested booking is to end.
   */
    endDate: string
    /**
   * The total number of free kilometers included for the RV. Natural rounding and conversion to KMs if quoted in miles.
   */
    freeDistanceKms: number
    /**
   * The number of free generator hours for the entire rental (not daily).
   */
    freeGeneratorHours?: number
    /**
   * If the rental charges per hour for generator usage, the price per hour.
   */
    generatorPriceHourly?: number
    /**
   * The quoted price for insurance.
   */
    insurancePrice: number
    /**
   * Whether or not the PaymentForm is being viewed while the booking is in a state that is before acceptance.
   */
    isBeforeAcceptance: boolean
    /**
   * Time in seconds from when a page started to load to when it finished loading
   */
    pageLoadSpeed?: number
    /**
   * The screen that the user came from.
   */
    pageSource: string
    /**
   * One of bookingflow (when this page is part of the booking flow), failedpayment (when the payment is in a failed state), or requestaccepted (when the request has been accepted by the host and the guest is coming back here).
   */
    pageType: string
    /**
   * name of promo code being applied as shown on the price breakdown component
   */
    promoCode?: string
    /**
   * dollar value of the promo applied if there is one when the user views the payment form. (in the same currency that all other prices are displayed in)
   */
    promoDollarValue?: number
    /**
   * The quoted rental price for total nights only that is displayed.
   */
    rentalPrice: number
    /**
   * The quoted price for roadside assistance.
   */
    roadsidePrice: number | null
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId: string
    /**
   * The quoted security deposit that will be taken on the security deposit date.
   */
    securityDepositPrice: number
    /**
   * The quoted service fee paid to RVezy by the renter.
   */
    servicePrice: number
    /**
   * The datetime that the requested booking is to begin.
   */
    startDate: string
    /**
   * The total dollar value for the entire booking that is displayed.
   */
    totalPrice: number

  }
  'BookingPaymentFormViewed [v3]': {

    /**
   * The number of adults that the requested booking will have.
   */
    adults: number
    /**
   * The unique ID associated with the booking request.
   */
    bookingId: number
    /**
   * The state of the booking as is represented on the backend.
   */
    bookingState: number
    /**
   * The method through which the booking was created.
   */
    bookingType: string
    /**
   * The number of children that the requested booking will have.
   */
    children: number
    /**
   * The quoted price for cleaning.
   */
    cleaningPrice?: number
    /**
   * The CTA that got the user to this screen.
   */
    cta: string
    /**
   * The ISO 4217 currency code that is displayed.
   */
    currency: 'CAD' | 'USD' | 'aud' | 'cad' | 'eur' | 'gbp' | 'nzd' | 'usd'
    /**
   * The extra price per KM that is charged above the freeDistanceKms.
   */
    distancePriceKms?: number
    /**
   * The datetime that the requested booking is to end.
   */
    endDate: string
    /**
   * The total number of free kilometers included for the RV. Natural rounding and conversion to KMs if quoted in miles.
   */
    freeDistanceKms: number
    /**
   * The number of free generator hours for the entire rental (not daily).
   */
    freeGeneratorHours?: number
    /**
   * If the rental charges per hour for generator usage, the price per hour.
   */
    generatorPriceHourly?: number
    /**
   * whether or not this booking request includes Delivery
   */
    hasDelivery: boolean
    /**
   * The quoted price for insurance.
   */
    insurancePrice: number
    /**
   * Whether or not the PaymentForm is being viewed while the booking is in a state that is before acceptance.
   */
    isBeforeAcceptance: boolean
    /**
   * Whether the booking originated from an Ezymatch offer
   */
    isEzymatch: boolean
    /**
   * Whether or not the RV clicked was available because of the ShortStays feature.
   */
    isShortStay: boolean
    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    listingCountry?: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * The region the listing is based in
   */
    listingRegion?: string
    /**
   * Rental category of vehicle booked.
   */
    listingType: string
    /**
   * Time in seconds from when a page started to load to when it finished loading
   */
    pageLoadSpeed?: number
    /**
   * The screen that the user came from.
   */
    pageSource: string
    /**
   * One of bookingflow (when this page is part of the booking flow), failedpayment (when the payment is in a failed state), or requestaccepted (when the request has been accepted by the host and the guest is coming back here).
   */
    pageType: string
    /**
   * name of promo code being applied as shown on the price breakdown component
   */
    promoCode?: string
    /**
   * dollar value of the promo applied if there is one when the user views the payment form. (in the same currency that all other prices are displayed in)
   */
    promoDollarValue?: number
    /**
   * The quoted rental price for total nights only that is displayed.
   */
    rentalPrice: number
    /**
   * The quoted price for roadside assistance.
   */
    roadsidePrice: number | null
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId: string
    /**
   * The quoted security deposit that will be taken on the security deposit date.
   */
    securityDepositPrice: number
    /**
   * The quoted service fee paid to RVezy by the renter.
   */
    servicePrice: number
    /**
   * The datetime that the requested booking is to begin.
   */
    startDate: string
    /**
   * The total dollar value for the entire booking that is displayed.
   */
    totalPrice: number
    /**
   * Difference between start date and the current date. (how many days out does the trip start)
   */
    tripLeadTime: number
    /**
   * Difference between start date and end date. Effectively, the number of nights for a trip
   */
    tripLength: number

  }
  'BookingPaymentFormViewed [v4]': {

    /**
   * The number of adults that the requested booking will have.
   */
    adults: number
    /**
   * The unique ID associated with the booking request.
   */
    bookingId: number
    /**
   * The state of the booking as is represented on the backend.
   */
    bookingState: number
    /**
   * The method through which the booking was created.
   */
    bookingType: string
    /**
   * The number of children that the requested booking will have.
   */
    children: number
    /**
   * The quoted price for cleaning.
   */
    cleaningPrice?: number
    /**
   * The CTA that got the user to this screen.
   */
    cta: string
    /**
   * The ISO 4217 currency code that is displayed.
   */
    currency: 'CAD' | 'USD' | 'aud' | 'cad' | 'eur' | 'gbp' | 'nzd' | 'usd'
    /**
   * The extra price per KM that is charged above the freeDistanceKms.
   */
    distancePriceKms?: number
    /**
   * The datetime that the requested booking is to end.
   */
    endDate: string
    /**
   * The total number of free kilometers included for the RV. Natural rounding and conversion to KMs if quoted in miles.
   */
    freeDistanceKms?: number | null
    /**
   * The number of free generator hours for the entire rental (not daily).
   */
    freeGeneratorHours?: number | null
    /**
   * If the rental charges per hour for generator usage, the price per hour.
   */
    generatorPriceHourly?: number
    /**
   * whether or not this booking request includes Delivery
   */
    hasDelivery: boolean
    /**
   * The quoted price for insurance.
   */
    insurancePrice: number
    /**
   * Whether or not the PaymentForm is being viewed while the booking is in a state that is before acceptance.
   */
    isBeforeAcceptance: boolean
    /**
   * Whether the booking originated from an Ezymatch offer
   */
    isEzymatch: boolean
    /**
   * Whether or not the RV clicked was available because of the ShortStays feature.
   */
    isShortStay: boolean
    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    listingCountry?: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * The region the listing is based in
   */
    listingRegion?: string
    /**
   * Rental category of vehicle booked.
   */
    listingType: string
    /**
   * This is the nightly rate that is displayed next to the listing
   */
    nightlyRate: number
    /**
   * Time in seconds from when a page started to load to when it finished loading
   */
    pageLoadSpeed?: number
    /**
   * The screen that the user came from.
   */
    pageSource: string
    /**
   * One of bookingflow (when this page is part of the booking flow), failedpayment (when the payment is in a failed state), or requestaccepted (when the request has been accepted by the host and the guest is coming back here).
   */
    pageType: string
    /**
   * name of promo code being applied as shown on the price breakdown component
   */
    promoCode?: string
    /**
   * dollar value of the promo applied if there is one when the user views the payment form. (in the same currency that all other prices are displayed in)
   */
    promoDollarValue?: number
    /**
   * The quoted rental price for total nights only that is displayed.
   */
    rentalPrice: number
    /**
   * The quoted price for roadside assistance.
   */
    roadsidePrice: number | null
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId: string
    /**
   * The quoted security deposit that will be taken on the security deposit date.
   */
    securityDepositPrice: number
    /**
   * The quoted service fee paid to RVezy by the renter.
   */
    servicePrice: number
    /**
   * This is the nightly rate that is displayed for the listing that has smart pricing
   */
    smartNightlyRate?: number | null
    /**
   * The datetime that the requested booking is to begin.
   */
    startDate: string
    /**
   * The total dollar value for the entire booking that is displayed.
   */
    totalPrice: number
    /**
   * Difference between start date and the current date. (how many days out does the trip start)
   */
    tripLeadTime: number
    /**
   * Difference between start date and end date. Effectively, the number of nights for a trip
   */
    tripLength: number

  }
  'BookingPaymentFormViewed [v5]': {

    /**
   * The number of adults that the requested booking will have.
   */
    adults: number
    /**
   * The unique ID associated with the booking request.
   */
    bookingId: number
    /**
   * The state of the booking as is represented on the backend.
   */
    bookingState: number
    /**
   * The method through which the booking was created.
   */
    bookingType: string
    /**
   * The number of children that the requested booking will have.
   */
    children: number
    /**
   * The quoted price for cleaning.
   */
    cleaningPrice?: number
    /**
   * The CTA that got the user to this screen.
   */
    cta: string
    /**
   * The ISO 4217 currency code that is displayed.
   */
    currency: 'CAD' | 'USD' | 'aud' | 'cad' | 'eur' | 'gbp' | 'nzd' | 'usd'
    /**
   * The extra price per KM that is charged above the freeDistanceKms.
   */
    distancePriceKms?: number
    /**
   * The datetime that the requested booking is to end.
   */
    endDate: string
    /**
   * If the listing has no FOMO tag then the result will be null. If the listing has tag, then the FOMO will be defined as described in the string
   */
    fomoTag?: string
    /**
   * The total number of free kilometers included for the RV. Natural rounding and conversion to KMs if quoted in miles.
   */
    freeDistanceKms?: number | null
    /**
   * The number of free generator hours for the entire rental (not daily).
   */
    freeGeneratorHours?: number | null
    /**
   * If the rental charges per hour for generator usage, the price per hour.
   */
    generatorPriceHourly?: number
    /**
   * whether or not this booking request includes Delivery
   */
    hasDelivery: boolean
    /**
   * The quoted price for insurance.
   */
    insurancePrice: number
    /**
   * Whether or not the PaymentForm is being viewed while the booking is in a state that is before acceptance.
   */
    isBeforeAcceptance: boolean
    /**
   * Whether the booking originated from an Ezymatch offer
   */
    isEzymatch: boolean
    /**
   * Whether or not the RV clicked was available because of the ShortStays feature.
   */
    isShortStay: boolean
    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    listingCountry?: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * The region the listing is based in
   */
    listingRegion?: string
    /**
   * Rental category of vehicle booked.
   */
    listingType: string
    /**
   * This is the nightly rate that is displayed next to the listing
   */
    nightlyRate: number
    /**
   * Time in seconds from when a page started to load to when it finished loading
   */
    pageLoadSpeed?: number
    /**
   * The screen that the user came from.
   */
    pageSource: string
    /**
   * One of bookingflow (when this page is part of the booking flow), failedpayment (when the payment is in a failed state), or requestaccepted (when the request has been accepted by the host and the guest is coming back here).
   */
    pageType: string
    /**
   * name of promo code being applied as shown on the price breakdown component
   */
    promoCode?: string
    /**
   * dollar value of the promo applied if there is one when the user views the payment form. (in the same currency that all other prices are displayed in)
   */
    promoDollarValue?: number
    /**
   * The quoted rental price for total nights only that is displayed.
   */
    rentalPrice: number
    /**
   * The quoted price for roadside assistance.
   */
    roadsidePrice: number | null
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId: string
    /**
   * The quoted security deposit that will be taken on the security deposit date.
   */
    securityDepositPrice: number
    /**
   * The quoted service fee paid to RVezy by the renter.
   */
    servicePrice: number
    /**
   * This is the nightly rate that is displayed for the listing that has smart pricing
   */
    smartNightlyRate?: number | null
    /**
   * The datetime that the requested booking is to begin.
   */
    startDate: string
    /**
   * The total dollar value for the entire booking that is displayed.
   */
    totalPrice: number
    /**
   * Difference between start date and the current date. (how many days out does the trip start)
   */
    tripLeadTime: number
    /**
   * Difference between start date and end date. Effectively, the number of nights for a trip
   */
    tripLength: number

  }
  'BookingPaymentFormViewed [v6]': {

    /**
   * The number of adults that the requested booking will have.
   */
    adults: number
    /**
   * The unique ID associated with the booking request.
   */
    bookingId: number
    /**
   * The state of the booking as is represented on the backend.
   */
    bookingState: string
    /**
   * The method through which the booking was created.
   */
    bookingType: string
    /**
   * The number of children that the requested booking will have.
   */
    children: number
    /**
   * The quoted price for cleaning.
   */
    cleaningPrice?: number
    /**
   * The CTA that got the user to this screen.
   */
    cta: string
    /**
   * The ISO 4217 currency code that is displayed.
   */
    currency: 'CAD' | 'USD' | 'aud' | 'cad' | 'eur' | 'gbp' | 'nzd' | 'usd'
    /**
   * The extra price per KM that is charged above the freeDistanceKms.
   */
    distancePriceKms?: number
    /**
   * The datetime that the requested booking is to end.
   */
    endDate: string
    /**
   * If the listing has no FOMO tag then the result will be null. If the listing has tag, then the FOMO will be defined as described in the string
   */
    fomoTag?: string
    /**
   * The total number of free kilometers included for the RV. Natural rounding and conversion to KMs if quoted in miles.
   */
    freeDistanceKms?: number | null
    /**
   * The number of free generator hours for the entire rental (not daily).
   */
    freeGeneratorHours?: number | null
    /**
   * If the rental charges per hour for generator usage, the price per hour.
   */
    generatorPriceHourly?: number
    /**
   * whether or not this booking request includes Delivery
   */
    hasDelivery: boolean
    /**
   * The quoted price for insurance.
   */
    insurancePrice: number
    /**
   * Whether or not the PaymentForm is being viewed while the booking is in a state that is before acceptance.
   */
    isBeforeAcceptance: boolean
    /**
   * Whether the booking originated from an Ezymatch offer
   */
    isEzymatch: boolean
    /**
   * Whether or not the RV clicked was available because of the ShortStays feature.
   */
    isShortStay: boolean
    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    listingCountry?: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * The region the listing is based in
   */
    listingRegion?: string
    /**
   * Rental category of vehicle booked.
   */
    listingType: string
    /**
   * This is the nightly rate that is displayed next to the listing
   */
    nightlyRate: number
    /**
   * Time in seconds from when a page started to load to when it finished loading
   */
    pageLoadSpeed?: number
    /**
   * The screen that the user came from.
   */
    pageSource: string
    /**
   * One of bookingflow (when this page is part of the booking flow), failedpayment (when the payment is in a failed state), or requestaccepted (when the request has been accepted by the host and the guest is coming back here).
   */
    pageType: string
    /**
   * name of promo code being applied as shown on the price breakdown component
   */
    promoCode?: string
    /**
   * dollar value of the promo applied if there is one when the user views the payment form. (in the same currency that all other prices are displayed in)
   */
    promoDollarValue?: number
    /**
   * The quoted rental price for total nights only that is displayed.
   */
    rentalPrice: number
    /**
   * The quoted price for roadside assistance.
   */
    roadsidePrice: number | null
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId: string
    /**
   * The quoted security deposit that will be taken on the security deposit date.
   */
    securityDepositPrice: number
    /**
   * The quoted service fee paid to RVezy by the renter.
   */
    servicePrice: number
    /**
   * This is the nightly rate that is displayed for the listing that has smart pricing
   */
    smartNightlyRate?: number | null
    /**
   * The datetime that the requested booking is to begin.
   */
    startDate: string
    /**
   * The total dollar value for the entire booking that is displayed.
   */
    totalPrice: number
    /**
   * Difference between start date and the current date. (how many days out does the trip start)
   */
    tripLeadTime: number
    /**
   * Difference between start date and end date. Effectively, the number of nights for a trip
   */
    tripLength: number

  }
  'BookingPaymentInfoSubmitClicked': {

    /**
   * The unique ID associated with the booking request that got the user to the payment screen.
   */
    bookingId?: number
    /**
   * The CTA that got the user to the payment screen. See CTAs.
   */
    cta: string
    /**
   * The ISO 4217 currency that will be submitted for payments.
   */
    currency: 'CAD' | 'USD' | 'aud' | 'cad' | 'eur' | 'gbp' | 'nzd' | 'usd'
    /**
   * Whether or not the payment form was submitted with an address_country.
   */
    hasAddressCountry?: boolean
    /**
   * Whether or not the payment form was submitted with a name.
   */
    hasCardholderName: boolean
    /**
   * Whether or not the payment form was submitted with a address_zip
   */
    hasZip: boolean
    /**
   * The screen that the user came from. See pageSources.
   */
    pageSource: string
    /**
   * One of bookingflow (when this page is part of the booking flow), failedpayment (when the payment is in a failed state), or requestaccepted (when the request has been accepted by the host and the guest is coming back here).
   */
    pageType: string
    /**
   * The payment method that is being requested. (card | applePay | googlePay)Card includes credit card and debit card.
   */
    paymentMethod: 'applepay' | 'card' | 'googlepay'
    /**
   * The payment provider that will handle processing the payment. (stripe)
   */
    paymentProvider: 'stripe'
    /**
   * Which promo code was used (only stored if the promo code is valid).
   */
    promoCode?: string
    /**
   * The unique ID associated with an RV on the booking.
   */
    rvId?: string

  }
  'BookingPaymentInfoSubmitClicked [v1]': {

    /**
   * The unique ID associated with the booking request that got the user to the payment screen.
   */
    bookingId?: number
    /**
   * The CTA that got the user to the payment screen. See CTAs.
   */
    cta: string
    /**
   * The ISO 4217 currency that will be submitted for payments.
   */
    currency?: 'CAD' | 'USD' | 'aud' | 'cad' | 'eur' | 'gbp' | 'nzd' | 'usd'
    /**
   * Whether or not the payment form was submitted with an address_city.
   */
    hasAddressCity?: boolean
    /**
   * Whether or not the payment form was submitted with an address_country.
   */
    hasAddressCountry?: boolean
    /**
   * Whether or not the payment form was submitted with an address_line1.
   */
    hasAddressLine1?: boolean
    /**
   * Whether or not the payment form was submitted with an address_line2.
   */
    hasAddressLine2?: boolean
    /**
   * Whether or not the payment form was submitted with an address_state.
   */
    hasAddressState?: boolean
    /**
   * Whether or not the payment form was submitted with a name.
   */
    hasCardholderName: boolean
    /**
   * Whether or not the payment form was submitted with a address_zip
   */
    hasZip: boolean
    /**
   * The screen that the user came from. See pageSources.
   */
    pageSource: string
    /**
   * One of bookingflow (when this page is part of the booking flow), failedpayment (when the payment is in a failed state), or requestaccepted (when the request has been accepted by the host and the guest is coming back here).
   */
    pageType: string
    /**
   * The payment method that is being requested. (card | applePay | googlePay)Card includes credit card and debit card.
   */
    paymentMethod: 'applepay' | 'card' | 'googlepay'
    /**
   * The payment provider that will handle processing the payment. (stripe)
   */
    paymentProvider: 'stripe'
    /**
   * The unique ID associated with an RV on the booking.
   */
    rvId?: string

  }
  'BookingPaymentInfoSubmitClicked [v2]': {

    /**
   * The unique ID associated with the booking request that got the user to the payment screen.
   */
    bookingId?: number
    /**
   * The CTA that got the user to the payment screen. See CTAs.
   */
    cta: string
    /**
   * The ISO 4217 currency that will be submitted for payments.
   */
    currency?: 'CAD' | 'USD' | 'aud' | 'cad' | 'eur' | 'gbp' | 'nzd' | 'usd'
    /**
   * Whether or not the payment form was submitted with an address_city.
   */
    hasAddressCity?: boolean
    /**
   * Whether or not the payment form was submitted with an address_country.
   */
    hasAddressCountry?: boolean
    /**
   * Whether or not the payment form was submitted with an address_line1.
   */
    hasAddressLine1?: boolean
    /**
   * Whether or not the payment form was submitted with an address_line2.
   */
    hasAddressLine2?: boolean
    /**
   * Whether or not the payment form was submitted with an address_state.
   */
    hasAddressState?: boolean
    /**
   * Whether or not the payment form was submitted with a name.
   */
    hasCardholderName: boolean
    /**
   * Whether or not the payment form was submitted with a address_zip
   */
    hasZip: boolean
    /**
   * The screen that the user came from. See pageSources.
   */
    pageSource: string
    /**
   * One of bookingflow (when this page is part of the booking flow), failedpayment (when the payment is in a failed state), or requestaccepted (when the request has been accepted by the host and the guest is coming back here).
   */
    pageType: string
    /**
   * The payment method that is being requested. (card | applePay | googlePay)Card includes credit card and debit card.
   */
    paymentMethod: 'applepay' | 'card' | 'googlepay'
    /**
   * The payment provider that will handle processing the payment. (stripe)
   */
    paymentProvider: 'stripe'
    /**
   * Which promo code was used (only stored if the promo code is valid).
   */
    promoCode?: string
    /**
   * The unique ID associated with an RV on the booking.
   */
    rvId?: string

  }
  'BookingPaymentInfoSubmitClicked [v3]': {

    /**
   * The unique ID associated with the booking request that got the user to the payment screen.
   */
    bookingId?: number
    /**
   * The CTA that got the user to the payment screen. See CTAs.
   */
    cta: string
    /**
   * The ISO 4217 currency that will be submitted for payments.
   */
    currency: 'CAD' | 'USD' | 'aud' | 'cad' | 'eur' | 'gbp' | 'nzd' | 'usd'
    /**
   * Whether or not the payment form was submitted with an address_country.
   */
    hasAddressCountry?: boolean
    /**
   * Whether or not the payment form was submitted with a name.
   */
    hasCardholderName: boolean
    /**
   * Whether or not the payment form was submitted with a address_zip
   */
    hasZip: boolean
    /**
   * The screen that the user came from. See pageSources.
   */
    pageSource: string
    /**
   * One of bookingflow (when this page is part of the booking flow), failedpayment (when the payment is in a failed state), or requestaccepted (when the request has been accepted by the host and the guest is coming back here).
   */
    pageType: string
    /**
   * The payment method that is being requested. (card | applePay | googlePay)Card includes credit card and debit card.
   */
    paymentMethod: 'applepay' | 'card' | 'googlepay'
    /**
   * The payment provider that will handle processing the payment. (stripe)
   */
    paymentProvider: 'stripe'
    /**
   * Which promo code was used (only stored if the promo code is valid).
   */
    promoCode?: string
    /**
   * The unique ID associated with an RV on the booking.
   */
    rvId?: string

  }
  'BookingPaymentInfoSubmitFailed': {

    /**
   * The unique ID associated with the booking request that got the user to the payment screen.
   */
    bookingId?: number
    /**
   * The CTA that got the user to the payment screen. See CTAs.
   */
    cta: string
    /**
   * The ISO 4217 currency that will be submitted for payments.
   */
    currency: 'aud' | 'cad' | 'eur' | 'gbp' | 'nzd' | 'usd'
    /**
   * The decline code (if applicable).
   */
    declineCode?: string
    /**
   * The error code associated with the failure.
   */
    errorCode?: string
    /**
   * The source of the failure
   */
    failureSource: string
    /**
   * The screen that the user came from. See pageSources.
   */
    pageSource: string
    /**
   * One of bookingflow (when this page is part of the booking flow), failedpayment (when the payment is in a failed state), or requestaccepted (when the request has been accepted by the host and the guest is coming back here).
   */
    pageType: 'bookingflow' | 'failedpayment' | 'requestaccepted'
    /**
   * The payment method that is being requested.
   */
    paymentMethod: string
    /**
   * The payment provider that will handle processing the payment.
   */
    paymentProvider: string
    /**
   * The unique ID (UUID) associated with an RV on the booking.
   */
    rvId?: string

  }
  'BookingPaymentInfoSubmitFailed [v1]': {

    /**
   * The unique ID associated with the booking request that got the user to the payment screen.
   */
    bookingId?: number
    /**
   * The CTA that got the user to the payment screen. See CTAs.
   */
    cta: string
    /**
   * The ISO 4217 currency that will be submitted for payments.
   */
    currency: 'aud' | 'cad' | 'eur' | 'gbp' | 'nzd' | 'usd'
    /**
   * The decline code (if applicable).
   */
    declineCode?: string
    /**
   * The error code associated with the failure.
   */
    errorCode?: string
    /**
   * The source of the failure
   */
    failureSource: string
    /**
   * The screen that the user came from. See pageSources.
   */
    pageSource: string
    /**
   * One of bookingflow (when this page is part of the booking flow), failedpayment (when the payment is in a failed state), or requestaccepted (when the request has been accepted by the host and the guest is coming back here).
   */
    pageType: 'bookingflow' | 'failedpayment' | 'requestaccepted'
    /**
   * The payment method that is being requested.
   */
    paymentMethod: string
    /**
   * The payment provider that will handle processing the payment.
   */
    paymentProvider: string
    /**
   * The unique ID (UUID) associated with an RV on the booking.
   */
    rvId?: string

  }
  'BookingPaymentInfoSubmitted': {

    /**
   * The unique ID associated with the booking request that got the user to the payment screen.
   */
    bookingId?: number
    /**
   * The state of the booking as is represented on the backend before this event was submitted (or at the time)
   */
    bookingState: number
    /**
   * The method through which the booking was created. (note make sure to still track ezymatch even though it isn’t a official booking type in the backend)
   */
    bookingType: string
    /**
   * The total dollar value for the entire rental that is displayed.
   */
    bookingValue: number
    /**
   * The CTA that got the user to the payment screen. See CTAs.
   */
    cta: string
    /**
   * The ISO 4217 currency that will be submitted for payments.
   */
    currency: 'CAD' | 'USD' | 'aud' | 'cad' | 'eur' | 'gbp' | 'nzd' | 'usd'
    /**
   * If the listing has no FOMO tag then the result will be null. If the listing has tag, then the FOMO will be defined as described in the string
   */
    fomoTag?: string
    /**
   * Whether or not the payment form was submitted with an address_country.
   */
    hasAddressCountry?: boolean
    /**
   * Whether or not the payment form was submitted with a name.
   */
    hasCardholderName: boolean
    /**
   * whether or not this booking includes Delivery
   */
    hasDelivery: boolean
    /**
   * Whether the booking request has pets
   */
    hasPets: boolean
    /**
   * Whether or not the payment form was submitted with a address_zip
   */
    hasZip: boolean
    /**
   * Whether or not the PaymentForm is being viewed while the booking is in a state that is before acceptance.
   */
    isBeforeAcceptance: boolean
    /**
   * Whether the booking originated from an Ezymatch offer
   */
    isEzymatch: boolean
    /**
   * Whether or not the RV clicked was available because of the ShortStays feature.
   */
    isShortStay: boolean
    /**
   * The city that the listing is based in.
   */
    listingCity?: string
    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    listingCountry?: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * The region the listing is based in
   */
    listingRegion?: string
    /**
   * Rental category of vehicle booked.
   */
    listingType: string
    /**
   * The message from the user
   */
    message?: string
    /**
   * This is the nightly rate that is displayed next to the listing
   */
    nightlyRate: number
    /**
   * The total service fee amount RVezy will collect from the Host
   */
    ownerServiceFee: number
    /**
   * The screen that the user came from. See pageSources.
   */
    pageSource: string
    /**
   * One of bookingflow (when this page is part of the booking flow), failedpayment (when the payment is in a failed state), or requestaccepted (when the request has been accepted by the host and the guest is coming back here).
   */
    pageType: string
    /**
   * The payment method that is being requested. (card | applePay | googlePay)Card includes credit card and debit card.
   */
    paymentMethod: string
    /**
   * The payment provider that will handle processing the payment. (stripe)
   */
    paymentProvider: string
    /**
   * name of promo code being applied as shown on the price breakdown component
   */
    promoCode?: string
    /**
   * dollar value of the promo applied if there is one when the user views the payment form. (in the same currency that all other prices are displayed in)
   */
    promoDollarValue?: number
    /**
   * The host ID related to the RV related to the bookingId
   */
    receiverUserId: number
    /**
   * The total service fee amount RVezy will collect from the Guest
   */
    renterServiceFee: number
    /**
   * The unique ID associated with an RV on the booking.
   */
    rvId?: string
    /**
   * Specific RV type of vehicle booked.
   */
    rvType: string
    /**
   * This is the nightly rate that is displayed for the listing that has smart pricing
   */
    smartNightlyRate?: number | null
    /**
   * The total dollar value of the host payout for the entire rental.
   */
    totalPayout: number
    /**
   * Difference between start date and the current date. (how many days out does the trip start)
   */
    tripLeadTime: number
    /**
   * Difference between start date and end date. Effectively, the number of nights for a trip
   */
    tripLength: number

  }
  'BookingPaymentInfoSubmitted [v1]': {

    /**
   * The unique ID associated with the booking request that got the user to the payment screen.
   */
    bookingId?: number
    /**
   * The state of the booking as is represented on the backend before this event was submitted (or at the time)
   */
    bookingState: number
    /**
   * The method through which the booking was created. (note make sure to still track ezymatch even though it isn’t a official booking type in the backend)
   */
    bookingType?: string
    /**
   * The CTA that got the user to the payment screen. See CTAs.
   */
    cta: string
    /**
   * The ISO 4217 currency that will be submitted for payments.
   */
    currency?: 'CAD' | 'USD' | 'aud' | 'cad' | 'eur' | 'gbp' | 'nzd' | 'usd'
    /**
   * Whether or not the payment form was submitted with an address_city.
   */
    hasAddressCity?: boolean
    /**
   * Whether or not the payment form was submitted with an address_country.
   */
    hasAddressCountry?: boolean
    /**
   * Whether or not the payment form was submitted with an address_line1.
   */
    hasAddressLine1?: boolean
    /**
   * Whether or not the payment form was submitted with an address_line2.
   */
    hasAddressLine2?: boolean
    /**
   * Whether or not the payment form was submitted with an address_state.
   */
    hasAddressState?: boolean
    /**
   * Whether or not the payment form was submitted with a name.
   */
    hasCardholderName: boolean
    /**
   * whether or not this booking includes Delivery
   */
    hasDelivery: boolean
    /**
   * Whether the booking request has pets
   */
    hasPets: boolean
    /**
   * Whether or not the payment form was submitted with a address_zip
   */
    hasZip: boolean
    /**
   * Whether the booking originated from an Ezymatch offer
   */
    isEzymatch: boolean
    /**
   * The city that the listing is based in.
   */
    listingCity?: string
    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    listingCountry?: string
    /**
   * The region the listing is based in
   */
    listingRegion?: string
    /**
   * Rental category of vehicle booked.
   */
    listingType: string
    /**
   * The message from the user
   */
    message?: string
    /**
   * The screen that the user came from. See pageSources.
   */
    pageSource: string
    /**
   * One of bookingflow (when this page is part of the booking flow), failedpayment (when the payment is in a failed state), or requestaccepted (when the request has been accepted by the host and the guest is coming back here).
   */
    pageType: string
    /**
   * The payment method that is being requested. (card | applePay | googlePay)Card includes credit card and debit card.
   */
    paymentMethod: 'applepay' | 'card' | 'googlepay'
    /**
   * The payment provider that will handle processing the payment. (stripe)
   */
    paymentProvider: 'stripe'
    /**
   * The host ID related to the RV related to the bookingId
   */
    receiverUserId: number
    /**
   * The unique ID associated with an RV on the booking.
   */
    rvId?: string
    /**
   * Specific RV type of vehicle booked.
   */
    rvType: string
    /**
   * The total dollar value of the host payout for the entire rental.
   */
    totalPayout: number
    /**
   * Difference between start date and the current date. (how many days out does the trip start)
   */
    tripLeadTime: number

  }
  'BookingPaymentInfoSubmitted [v2]': {

    /**
   * The unique ID associated with the booking request that got the user to the payment screen.
   */
    bookingId?: number
    /**
   * The state of the booking as is represented on the backend before this event was submitted (or at the time)
   */
    bookingState: number
    /**
   * The method through which the booking was created. (note make sure to still track ezymatch even though it isn’t a official booking type in the backend)
   */
    bookingType: string
    /**
   * The total dollar value for the entire rental that is displayed.
   */
    bookingValue: number
    /**
   * The CTA that got the user to the payment screen. See CTAs.
   */
    cta: string
    /**
   * The ISO 4217 currency that will be submitted for payments.
   */
    currency?: 'CAD' | 'USD' | 'aud' | 'cad' | 'eur' | 'gbp' | 'nzd' | 'usd'
    /**
   * Whether or not the payment form was submitted with an address_city.
   */
    hasAddressCity?: boolean
    /**
   * Whether or not the payment form was submitted with an address_country.
   */
    hasAddressCountry?: boolean
    /**
   * Whether or not the payment form was submitted with an address_line1.
   */
    hasAddressLine1?: boolean
    /**
   * Whether or not the payment form was submitted with an address_line2.
   */
    hasAddressLine2?: boolean
    /**
   * Whether or not the payment form was submitted with an address_state.
   */
    hasAddressState?: boolean
    /**
   * Whether or not the payment form was submitted with a name.
   */
    hasCardholderName: boolean
    /**
   * whether or not this booking includes Delivery
   */
    hasDelivery: boolean
    /**
   * Whether the booking request has pets
   */
    hasPets: boolean
    /**
   * Whether or not the payment form was submitted with a address_zip
   */
    hasZip: boolean
    /**
   * Whether or not the PaymentForm is being viewed while the booking is in a state that is before acceptance.
   */
    isBeforeAcceptance: boolean
    /**
   * Whether the booking originated from an Ezymatch offer
   */
    isEzymatch: boolean
    /**
   * The city that the listing is based in.
   */
    listingCity?: string
    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    listingCountry?: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * The region the listing is based in
   */
    listingRegion?: string
    /**
   * Rental category of vehicle booked.
   */
    listingType: string
    /**
   * The message from the user
   */
    message?: string
    /**
   * The screen that the user came from. See pageSources.
   */
    pageSource: string
    /**
   * One of bookingflow (when this page is part of the booking flow), failedpayment (when the payment is in a failed state), or requestaccepted (when the request has been accepted by the host and the guest is coming back here).
   */
    pageType: string
    /**
   * The payment method that is being requested. (card | applePay | googlePay)Card includes credit card and debit card.
   */
    paymentMethod: string
    /**
   * The payment provider that will handle processing the payment. (stripe)
   */
    paymentProvider: string
    /**
   * name of promo code being applied as shown on the price breakdown component
   */
    promoCode?: string
    /**
   * dollar value of the promo applied if there is one when the user views the payment form. (in the same currency that all other prices are displayed in)
   */
    promoDollarValue?: number
    /**
   * The host ID related to the RV related to the bookingId
   */
    receiverUserId: number
    /**
   * The total service fee amount RVezy will collect from the Guest
   */
    renterServiceFee: number
    /**
   * The unique ID associated with an RV on the booking.
   */
    rvId?: string
    /**
   * Specific RV type of vehicle booked.
   */
    rvType: string
    /**
   * The total dollar value of the host payout for the entire rental.
   */
    totalPayout: number
    /**
   * Difference between start date and the current date. (how many days out does the trip start)
   */
    tripLeadTime: number

  }
  'BookingPaymentInfoSubmitted [v3]': {

    /**
   * The unique ID associated with the booking request that got the user to the payment screen.
   */
    bookingId?: number
    /**
   * The state of the booking as is represented on the backend before this event was submitted (or at the time)
   */
    bookingState: number
    /**
   * The method through which the booking was created. (note make sure to still track ezymatch even though it isn’t a official booking type in the backend)
   */
    bookingType: string
    /**
   * The total dollar value for the entire rental that is displayed.
   */
    bookingValue: number
    /**
   * The CTA that got the user to the payment screen. See CTAs.
   */
    cta: string
    /**
   * The ISO 4217 currency that will be submitted for payments.
   */
    currency?: 'CAD' | 'USD' | 'aud' | 'cad' | 'eur' | 'gbp' | 'nzd' | 'usd'
    /**
   * Whether or not the payment form was submitted with an address_city.
   */
    hasAddressCity?: boolean
    /**
   * Whether or not the payment form was submitted with an address_country.
   */
    hasAddressCountry?: boolean
    /**
   * Whether or not the payment form was submitted with an address_line1.
   */
    hasAddressLine1?: boolean
    /**
   * Whether or not the payment form was submitted with an address_line2.
   */
    hasAddressLine2?: boolean
    /**
   * Whether or not the payment form was submitted with an address_state.
   */
    hasAddressState?: boolean
    /**
   * Whether or not the payment form was submitted with a name.
   */
    hasCardholderName: boolean
    /**
   * whether or not this booking includes Delivery
   */
    hasDelivery: boolean
    /**
   * Whether the booking request has pets
   */
    hasPets: boolean
    /**
   * Whether or not the payment form was submitted with a address_zip
   */
    hasZip: boolean
    /**
   * Whether or not the PaymentForm is being viewed while the booking is in a state that is before acceptance.
   */
    isBeforeAcceptance: boolean
    /**
   * Whether the booking originated from an Ezymatch offer
   */
    isEzymatch: boolean
    /**
   * Whether or not the RV clicked was available because of the ShortStays feature.
   */
    isShortStay: boolean
    /**
   * The city that the listing is based in.
   */
    listingCity?: string
    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    listingCountry?: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * The region the listing is based in
   */
    listingRegion?: string
    /**
   * Rental category of vehicle booked.
   */
    listingType: string
    /**
   * The message from the user
   */
    message?: string
    /**
   * The screen that the user came from. See pageSources.
   */
    pageSource: string
    /**
   * One of bookingflow (when this page is part of the booking flow), failedpayment (when the payment is in a failed state), or requestaccepted (when the request has been accepted by the host and the guest is coming back here).
   */
    pageType: string
    /**
   * The payment method that is being requested. (card | applePay | googlePay)Card includes credit card and debit card.
   */
    paymentMethod: string
    /**
   * The payment provider that will handle processing the payment. (stripe)
   */
    paymentProvider: string
    /**
   * name of promo code being applied as shown on the price breakdown component
   */
    promoCode?: string
    /**
   * dollar value of the promo applied if there is one when the user views the payment form. (in the same currency that all other prices are displayed in)
   */
    promoDollarValue?: number
    /**
   * The host ID related to the RV related to the bookingId
   */
    receiverUserId: number
    /**
   * The total service fee amount RVezy will collect from the Guest
   */
    renterServiceFee: number
    /**
   * The unique ID associated with an RV on the booking.
   */
    rvId?: string
    /**
   * Specific RV type of vehicle booked.
   */
    rvType: string
    /**
   * The total dollar value of the host payout for the entire rental.
   */
    totalPayout: number
    /**
   * Difference between start date and the current date. (how many days out does the trip start)
   */
    tripLeadTime: number
    /**
   * Difference between start date and end date. Effectively, the number of nights for a trip
   */
    tripLength: number

  }
  'BookingPaymentInfoSubmitted [v4]': {

    /**
   * The unique ID associated with the booking request that got the user to the payment screen.
   */
    bookingId?: number
    /**
   * The state of the booking as is represented on the backend before this event was submitted (or at the time)
   */
    bookingState: number
    /**
   * The method through which the booking was created. (note make sure to still track ezymatch even though it isn’t a official booking type in the backend)
   */
    bookingType: string
    /**
   * The total dollar value for the entire rental that is displayed.
   */
    bookingValue: number
    /**
   * The CTA that got the user to the payment screen. See CTAs.
   */
    cta: string
    /**
   * The ISO 4217 currency that will be submitted for payments.
   */
    currency?: 'CAD' | 'USD' | 'aud' | 'cad' | 'eur' | 'gbp' | 'nzd' | 'usd'
    /**
   * Whether or not the payment form was submitted with an address_city.
   */
    hasAddressCity?: boolean
    /**
   * Whether or not the payment form was submitted with an address_country.
   */
    hasAddressCountry?: boolean
    /**
   * Whether or not the payment form was submitted with an address_line1.
   */
    hasAddressLine1?: boolean
    /**
   * Whether or not the payment form was submitted with an address_line2.
   */
    hasAddressLine2?: boolean
    /**
   * Whether or not the payment form was submitted with an address_state.
   */
    hasAddressState?: boolean
    /**
   * Whether or not the payment form was submitted with a name.
   */
    hasCardholderName: boolean
    /**
   * whether or not this booking includes Delivery
   */
    hasDelivery: boolean
    /**
   * Whether the booking request has pets
   */
    hasPets: boolean
    /**
   * Whether or not the payment form was submitted with a address_zip
   */
    hasZip: boolean
    /**
   * Whether or not the PaymentForm is being viewed while the booking is in a state that is before acceptance.
   */
    isBeforeAcceptance: boolean
    /**
   * Whether the booking originated from an Ezymatch offer
   */
    isEzymatch: boolean
    /**
   * Whether or not the RV clicked was available because of the ShortStays feature.
   */
    isShortStay: boolean
    /**
   * The city that the listing is based in.
   */
    listingCity?: string
    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    listingCountry?: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * The region the listing is based in
   */
    listingRegion?: string
    /**
   * Rental category of vehicle booked.
   */
    listingType: string
    /**
   * The message from the user
   */
    message?: string
    /**
   * This is the nightly rate that is displayed next to the listing
   */
    nightlyRate: number
    /**
   * The screen that the user came from. See pageSources.
   */
    pageSource: string
    /**
   * One of bookingflow (when this page is part of the booking flow), failedpayment (when the payment is in a failed state), or requestaccepted (when the request has been accepted by the host and the guest is coming back here).
   */
    pageType: string
    /**
   * The payment method that is being requested. (card | applePay | googlePay)Card includes credit card and debit card.
   */
    paymentMethod: string
    /**
   * The payment provider that will handle processing the payment. (stripe)
   */
    paymentProvider: string
    /**
   * name of promo code being applied as shown on the price breakdown component
   */
    promoCode?: string
    /**
   * dollar value of the promo applied if there is one when the user views the payment form. (in the same currency that all other prices are displayed in)
   */
    promoDollarValue?: number
    /**
   * The host ID related to the RV related to the bookingId
   */
    receiverUserId: number
    /**
   * The total service fee amount RVezy will collect from the Guest
   */
    renterServiceFee: number
    /**
   * The unique ID associated with an RV on the booking.
   */
    rvId?: string
    /**
   * Specific RV type of vehicle booked.
   */
    rvType: string
    /**
   * This is the nightly rate that is displayed for the listing that has smart pricing
   */
    smartNightlyRate: number
    /**
   * The total dollar value of the host payout for the entire rental.
   */
    totalPayout: number
    /**
   * Difference between start date and the current date. (how many days out does the trip start)
   */
    tripLeadTime: number
    /**
   * Difference between start date and end date. Effectively, the number of nights for a trip
   */
    tripLength: number

  }
  'BookingPaymentInfoSubmitted [v5]': {

    /**
   * The unique ID associated with the booking request that got the user to the payment screen.
   */
    bookingId?: number
    /**
   * The state of the booking as is represented on the backend before this event was submitted (or at the time)
   */
    bookingState: number
    /**
   * The method through which the booking was created. (note make sure to still track ezymatch even though it isn’t a official booking type in the backend)
   */
    bookingType: string
    /**
   * The total dollar value for the entire rental that is displayed.
   */
    bookingValue: number
    /**
   * The CTA that got the user to the payment screen. See CTAs.
   */
    cta: string
    /**
   * The ISO 4217 currency that will be submitted for payments.
   */
    currency?: 'CAD' | 'USD' | 'aud' | 'cad' | 'eur' | 'gbp' | 'nzd' | 'usd'
    /**
   * Whether or not the payment form was submitted with an address_city.
   */
    hasAddressCity?: boolean
    /**
   * Whether or not the payment form was submitted with an address_country.
   */
    hasAddressCountry?: boolean
    /**
   * Whether or not the payment form was submitted with an address_line1.
   */
    hasAddressLine1?: boolean
    /**
   * Whether or not the payment form was submitted with an address_line2.
   */
    hasAddressLine2?: boolean
    /**
   * Whether or not the payment form was submitted with an address_state.
   */
    hasAddressState?: boolean
    /**
   * Whether or not the payment form was submitted with a name.
   */
    hasCardholderName: boolean
    /**
   * whether or not this booking includes Delivery
   */
    hasDelivery: boolean
    /**
   * Whether the booking request has pets
   */
    hasPets: boolean
    /**
   * Whether or not the payment form was submitted with a address_zip
   */
    hasZip: boolean
    /**
   * Whether or not the PaymentForm is being viewed while the booking is in a state that is before acceptance.
   */
    isBeforeAcceptance: boolean
    /**
   * Whether the booking originated from an Ezymatch offer
   */
    isEzymatch: boolean
    /**
   * Whether or not the RV clicked was available because of the ShortStays feature.
   */
    isShortStay: boolean
    /**
   * The city that the listing is based in.
   */
    listingCity?: string
    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    listingCountry?: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * The region the listing is based in
   */
    listingRegion?: string
    /**
   * Rental category of vehicle booked.
   */
    listingType: string
    /**
   * The message from the user
   */
    message?: string
    /**
   * This is the nightly rate that is displayed next to the listing
   */
    nightlyRate: number
    /**
   * The screen that the user came from. See pageSources.
   */
    pageSource: string
    /**
   * One of bookingflow (when this page is part of the booking flow), failedpayment (when the payment is in a failed state), or requestaccepted (when the request has been accepted by the host and the guest is coming back here).
   */
    pageType: string
    /**
   * The payment method that is being requested. (card | applePay | googlePay)Card includes credit card and debit card.
   */
    paymentMethod: string
    /**
   * The payment provider that will handle processing the payment. (stripe)
   */
    paymentProvider: string
    /**
   * name of promo code being applied as shown on the price breakdown component
   */
    promoCode?: string
    /**
   * dollar value of the promo applied if there is one when the user views the payment form. (in the same currency that all other prices are displayed in)
   */
    promoDollarValue?: number
    /**
   * The host ID related to the RV related to the bookingId
   */
    receiverUserId: number
    /**
   * The total service fee amount RVezy will collect from the Guest
   */
    renterServiceFee: number
    /**
   * The unique ID associated with an RV on the booking.
   */
    rvId?: string
    /**
   * Specific RV type of vehicle booked.
   */
    rvType: string
    /**
   * This is the nightly rate that is displayed for the listing that has smart pricing
   */
    smartNightlyRate?: number
    /**
   * The total dollar value of the host payout for the entire rental.
   */
    totalPayout: number
    /**
   * Difference between start date and the current date. (how many days out does the trip start)
   */
    tripLeadTime: number
    /**
   * Difference between start date and end date. Effectively, the number of nights for a trip
   */
    tripLength: number

  }
  'BookingPaymentInfoSubmitted [v6]': {

    /**
   * The unique ID associated with the booking request that got the user to the payment screen.
   */
    bookingId?: number
    /**
   * The state of the booking as is represented on the backend before this event was submitted (or at the time)
   */
    bookingState: number
    /**
   * The method through which the booking was created. (note make sure to still track ezymatch even though it isn’t a official booking type in the backend)
   */
    bookingType: string
    /**
   * The total dollar value for the entire rental that is displayed.
   */
    bookingValue: number
    /**
   * The CTA that got the user to the payment screen. See CTAs.
   */
    cta: string
    /**
   * The ISO 4217 currency that will be submitted for payments.
   */
    currency: 'CAD' | 'USD' | 'aud' | 'cad' | 'eur' | 'gbp' | 'nzd' | 'usd'
    /**
   * Whether or not the payment form was submitted with an address_country.
   */
    hasAddressCountry?: boolean
    /**
   * Whether or not the payment form was submitted with a name.
   */
    hasCardholderName: boolean
    /**
   * whether or not this booking includes Delivery
   */
    hasDelivery: boolean
    /**
   * Whether the booking request has pets
   */
    hasPets: boolean
    /**
   * Whether or not the payment form was submitted with a address_zip
   */
    hasZip: boolean
    /**
   * Whether or not the PaymentForm is being viewed while the booking is in a state that is before acceptance.
   */
    isBeforeAcceptance: boolean
    /**
   * Whether the booking originated from an Ezymatch offer
   */
    isEzymatch: boolean
    /**
   * Whether or not the RV clicked was available because of the ShortStays feature.
   */
    isShortStay: boolean
    /**
   * The city that the listing is based in.
   */
    listingCity?: string
    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    listingCountry?: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * The region the listing is based in
   */
    listingRegion?: string
    /**
   * Rental category of vehicle booked.
   */
    listingType: string
    /**
   * The message from the user
   */
    message?: string
    /**
   * This is the nightly rate that is displayed next to the listing
   */
    nightlyRate: number
    /**
   * The total service fee amount RVezy will collect from the Host
   */
    ownerServiceFee: number
    /**
   * The screen that the user came from. See pageSources.
   */
    pageSource: string
    /**
   * One of bookingflow (when this page is part of the booking flow), failedpayment (when the payment is in a failed state), or requestaccepted (when the request has been accepted by the host and the guest is coming back here).
   */
    pageType: string
    /**
   * The payment method that is being requested. (card | applePay | googlePay)Card includes credit card and debit card.
   */
    paymentMethod: string
    /**
   * The payment provider that will handle processing the payment. (stripe)
   */
    paymentProvider: string
    /**
   * name of promo code being applied as shown on the price breakdown component
   */
    promoCode?: string
    /**
   * dollar value of the promo applied if there is one when the user views the payment form. (in the same currency that all other prices are displayed in)
   */
    promoDollarValue?: number
    /**
   * The host ID related to the RV related to the bookingId
   */
    receiverUserId: number
    /**
   * The total service fee amount RVezy will collect from the Guest
   */
    renterServiceFee: number
    /**
   * The unique ID associated with an RV on the booking.
   */
    rvId?: string
    /**
   * Specific RV type of vehicle booked.
   */
    rvType: string
    /**
   * This is the nightly rate that is displayed for the listing that has smart pricing
   */
    smartNightlyRate?: number | null
    /**
   * The total dollar value of the host payout for the entire rental.
   */
    totalPayout: number
    /**
   * Difference between start date and the current date. (how many days out does the trip start)
   */
    tripLeadTime: number
    /**
   * Difference between start date and end date. Effectively, the number of nights for a trip
   */
    tripLength: number

  }
  'BookingPaymentInfoSubmitted [v7]': {

    /**
   * The unique ID associated with the booking request that got the user to the payment screen.
   */
    bookingId?: number
    /**
   * The state of the booking as is represented on the backend before this event was submitted (or at the time)
   */
    bookingState: number
    /**
   * The method through which the booking was created. (note make sure to still track ezymatch even though it isn’t a official booking type in the backend)
   */
    bookingType: string
    /**
   * The total dollar value for the entire rental that is displayed.
   */
    bookingValue: number
    /**
   * The CTA that got the user to the payment screen. See CTAs.
   */
    cta: string
    /**
   * The ISO 4217 currency that will be submitted for payments.
   */
    currency: 'CAD' | 'USD' | 'aud' | 'cad' | 'eur' | 'gbp' | 'nzd' | 'usd'
    /**
   * If the listing has no FOMO tag then the result will be null. If the listing has tag, then the FOMO will be defined as described in the string
   */
    fomoTag?: string
    /**
   * Whether or not the payment form was submitted with an address_country.
   */
    hasAddressCountry?: boolean
    /**
   * Whether or not the payment form was submitted with a name.
   */
    hasCardholderName: boolean
    /**
   * whether or not this booking includes Delivery
   */
    hasDelivery: boolean
    /**
   * Whether the booking request has pets
   */
    hasPets: boolean
    /**
   * Whether or not the payment form was submitted with a address_zip
   */
    hasZip: boolean
    /**
   * Whether or not the PaymentForm is being viewed while the booking is in a state that is before acceptance.
   */
    isBeforeAcceptance: boolean
    /**
   * Whether the booking originated from an Ezymatch offer
   */
    isEzymatch: boolean
    /**
   * Whether or not the RV clicked was available because of the ShortStays feature.
   */
    isShortStay: boolean
    /**
   * The city that the listing is based in.
   */
    listingCity?: string
    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    listingCountry?: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * The region the listing is based in
   */
    listingRegion?: string
    /**
   * Rental category of vehicle booked.
   */
    listingType: string
    /**
   * The message from the user
   */
    message?: string
    /**
   * This is the nightly rate that is displayed next to the listing
   */
    nightlyRate: number
    /**
   * The total service fee amount RVezy will collect from the Host
   */
    ownerServiceFee: number
    /**
   * The screen that the user came from. See pageSources.
   */
    pageSource: string
    /**
   * One of bookingflow (when this page is part of the booking flow), failedpayment (when the payment is in a failed state), or requestaccepted (when the request has been accepted by the host and the guest is coming back here).
   */
    pageType: string
    /**
   * The payment method that is being requested. (card | applePay | googlePay)Card includes credit card and debit card.
   */
    paymentMethod: string
    /**
   * The payment provider that will handle processing the payment. (stripe)
   */
    paymentProvider: string
    /**
   * name of promo code being applied as shown on the price breakdown component
   */
    promoCode?: string
    /**
   * dollar value of the promo applied if there is one when the user views the payment form. (in the same currency that all other prices are displayed in)
   */
    promoDollarValue?: number
    /**
   * The host ID related to the RV related to the bookingId
   */
    receiverUserId: number
    /**
   * The total service fee amount RVezy will collect from the Guest
   */
    renterServiceFee: number
    /**
   * The unique ID associated with an RV on the booking.
   */
    rvId?: string
    /**
   * Specific RV type of vehicle booked.
   */
    rvType: string
    /**
   * This is the nightly rate that is displayed for the listing that has smart pricing
   */
    smartNightlyRate?: number | null
    /**
   * The total dollar value of the host payout for the entire rental.
   */
    totalPayout: number
    /**
   * Difference between start date and the current date. (how many days out does the trip start)
   */
    tripLeadTime: number
    /**
   * Difference between start date and end date. Effectively, the number of nights for a trip
   */
    tripLength: number

  }
  'BookingRequestGuestDeclined': {

    /**
   * The unique ID associated with the booking (same as booking number).
   */
    bookingId: number
    /**
   * The state of the booking as is represented on the backend before this response is triggered
   */
    bookingState: number
    /**
   * The method through which the booking was created.
   */
    bookingType: string
    /**
   * The decline reason entered by the guest if declined
   */
    declinedReason: string
    /**
   * The date that the requested booking is to end.
   */
    endDate: string
    /**
   * whether or not this booking request includes Delivery
   */
    hasDelivery: boolean
    /**
   * Whether the booking request has pets
   */
    hasPets: boolean
    /**
   * Whether the booking originated from an Ezymatch offer
   */
    isEzymatch: boolean
    /**
   * The city that the listing is based in.
   */
    listingCity: string
    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    listingCountry: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * The region the listing is based in
   */
    listingRegion: string
    /**
   * Rental category of vehicle booked.
   */
    listingType: string
    /**
   * The ID of the Host that is connected to this booking ID
   */
    receiverUserId: number
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId: string
    /**
   * Specific RV type of vehicle booked.
   */
    rvType: string
    /**
   * The date that the requested booking is to begin.
   */
    startDate: string
    /**
   * Difference between start date and the current date. (how many days out does the trip start)
   */
    tripLeadTime: number
    /**
   * Difference between start date and end date. Effectively, the number of nights for a trip
   */
    tripLength: number

  }
  'BookingRequestGuestDeclined [v1]': {

    /**
   * The unique ID associated with the booking (same as booking number).
   */
    bookingId: number
    /**
   * The state of the booking as is represented on the backend before this response is triggered
   */
    bookingState: number
    /**
   * The method through which the booking was created.
   */
    bookingType: string
    /**
   * The decline reason entered by the guest if declined
   */
    declinedReason: string
    /**
   * The date that the requested booking is to end.
   */
    endDate: string
    /**
   * whether or not this booking request includes Delivery
   */
    hasDelivery: boolean
    /**
   * Whether the booking request has pets
   */
    hasPets: boolean
    /**
   * Whether the booking originated from an Ezymatch offer
   */
    isEzymatch: boolean
    /**
   * The city that the listing is based in.
   */
    listingCity: string
    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    listingCountry: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * The region the listing is based in
   */
    listingRegion: string
    /**
   * Rental category of vehicle booked.
   */
    listingType: string
    /**
   * The ID of the Host that is connected to this booking ID
   */
    receiverUserId: number
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId: string
    /**
   * Specific RV type of vehicle booked.
   */
    rvType: string
    /**
   * The date that the requested booking is to begin.
   */
    startDate: string
    /**
   * Difference between start date and the current date. (how many days out does the trip start)
   */
    tripLeadTime: number
    /**
   * Difference between start date and end date. Effectively, the number of nights for a trip
   */
    tripLength: number

  }
  'BookingRequestHostResponded': {

    /**
   * The unique ID associated with the booking request.
   */
    bookingId: number
    /**
   * The response send by the owner.
   */
    bookingResponse: string
    /**
   * The state of the booking as is represented on the backend.
   */
    bookingState?: number
    /**
   * The status of the booking within the payment context. (0 = no payment information, 1 = future booking, 2 = past booking)
   */
    bookingStatus?: 'future' | 'nopayment' | 'past'
    /**
   * The method through which the booking was created. (note make sure to still track ezymatch even though it isn’t a official booking type in the backend)
   */
    bookingType: string
    /**
   * The main decline reason selected by the owner if declined
   */
    declinedReason?: string
    /**
   * The secondary decline reason selected by the owner (sub-reason)
   */
    declinedReasonDetails?: string
    /**
   * maximum distance in kilometers that the add-on is offering (ie. if I choose up to 100km option, this parameter shows 100km )
   */
    deliveryDistance?: number
    /**
   * The total price for delivery option selected
   */
    deliveryPrice?: number
    /**
   * The datetime that the requested booking is to end.
   */
    endDate?: string
    /**
   * The name of the festival or event that the guest has said they will be attending
   */
    festivalName?: string
    /**
   * whether or not this booking includes Delivery
   */
    hasDelivery: boolean
    /**
   * whether or not this Booking has payment information attached at time of host response
   */
    hasPaymentInfo: boolean
    /**
   * Whether the booking request has pets
   */
    hasPets: boolean
    /**
   * Whether the guest has experience towing a similar trailer (true = yes, false = no). If this question is not required on a booking request then this field should not be recorded as true or false
   */
    hasTowingExperience?: boolean
    /**
   * Whether the guest is attending a festival (true = yes, false = no). If this question is not required on a booking request then this field should not be recorded as true or false
   */
    isAttendingFestival?: boolean
    /**
   * Whether the booking originated from an Ezymatch offer
   */
    isEzymatch: boolean
    /**
   * whether or not this booking is planning on moving the RV after delivery or not. (based on the question asked on the first page of the booking flow)
   */
    isStationaryDelivery?: boolean
    /**
   * Whether or not the action was triggered automatically due to the system rules or if the host actually actioned the response. (for example: “canceled by system overlapping dates” and “instant book accept”
   */
    isSystemAuto: boolean
    /**
   * The city that the listing is based in.
   */
    listingCity?: string
    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    listingCountry?: string
    /**
   * The region the listing is based in
   */
    listingRegion?: string
    /**
   * Rental category of vehicle booked.
   */
    listingType: string
    /**
   * The account that is receiving the user-to-user interaction.
   */
    receiverUserId: number
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId: string
    /**
   * Specific RV type of vehicle booked.
   */
    rvType: string
    /**
   * The datetime that the requested booking is to begin.
   */
    startDate?: string
    /**
   * The total dollar value of the host payout for the entire rental.
   */
    totalPayout: number
    /**
   * Difference between start date and the current date. (how many days out does the trip start)
   */
    tripLeadTime: number
    /**
   * Difference between start date and end date. Effectively, the number of nights for a trip
   */
    tripLength: number

  }
  'BookingRequestHostResponded [v1]': {

    /**
   * The unique ID associated with the booking request.
   */
    bookingId: number
    /**
   * The response send by the owner.
   */
    bookingResponse: string
    /**
   * The state of the booking as is represented on the backend.
   */
    bookingState?: number
    /**
   * The status of the booking within the payment context. (0 = no payment information, 1 = future booking, 2 = past booking)
   */
    bookingStatus?: 'future' | 'nopayment' | 'past'
    /**
   * The method through which the booking was created. (note make sure to still track ezymatch even though it isn’t a official booking type in the backend)
   */
    bookingType: string
    /**
   * maximum distance in kilometers that the add-on is offering (ie. if I choose up to 100km option, this parameter shows 100km )
   */
    deliveryDistance?: number
    /**
   * The total price for delivery option selected
   */
    deliveryPrice?: number
    /**
   * The datetime that the requested booking is to end.
   */
    endDate?: string
    /**
   * The name of the festival or event that the guest has said they will be attending
   */
    festivalName?: string
    /**
   * whether or not this booking includes Delivery
   */
    hasDelivery: boolean
    /**
   * whether or not this Booking has payment information attached at time of host response
   */
    hasPaymentInfo: boolean
    /**
   * Whether the booking request has pets
   */
    hasPets: boolean
    /**
   * Whether the guest has experience towing a similar trailer (true = yes, false = no). If this question is not required on a booking request then this field should not be recorded as true or false
   */
    hasTowingExperience?: boolean
    /**
   * Whether the guest is attending a festival (true = yes, false = no). If this question is not required on a booking request then this field should not be recorded as true or false
   */
    isAttendingFestival?: boolean
    /**
   * Whether the booking originated from an Ezymatch offer
   */
    isEzymatch: boolean
    /**
   * whether or not this booking is planning on moving the RV after delivery or not. (based on the question asked on the first page of the booking flow)
   */
    isStationaryDelivery?: boolean
    /**
   * Whether or not the action was triggered automatically due to the system rules or if the host actually actioned the response. (for example: “canceled by system overlapping dates” and “instant book accept”
   */
    isSystemAuto: boolean
    /**
   * whether or not this Booking is a unique trip when it is created
   */
    isUniqueTrip: boolean
    /**
   * The city that the listing is based in.
   */
    listingCity?: string
    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    listingCountry?: string
    /**
   * The region the listing is based in
   */
    listingRegion?: string
    /**
   * Rental category of vehicle booked.
   */
    listingType: string
    /**
   * The account that is receiving the user-to-user interaction.
   */
    receiverUserId: number
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId: string
    /**
   * Specific RV type of vehicle booked.
   */
    rvType: string
    /**
   * The datetime that the requested booking is to begin.
   */
    startDate?: string
    /**
   * The total dollar value of the host payout for the entire rental.
   */
    totalPayout: number
    /**
   * Difference between start date and the current date. (how many days out does the trip start)
   */
    tripLeadTime: number
    /**
   * Difference between start date and end date. Effectively, the number of nights for a trip
   */
    tripLength: number

  }
  'BookingRequestHostResponded [v2]': {

    /**
   * The unique ID associated with the booking request.
   */
    bookingId: number
    /**
   * The response send by the owner.
   */
    bookingResponse: string
    /**
   * The state of the booking as is represented on the backend.
   */
    bookingState?: number
    /**
   * The status of the booking within the payment context. (0 = no payment information, 1 = future booking, 2 = past booking)
   */
    bookingStatus?: 'future' | 'nopayment' | 'past'
    /**
   * The method through which the booking was created. (note make sure to still track ezymatch even though it isn’t a official booking type in the backend)
   */
    bookingType: string
    /**
   * maximum distance in kilometers that the add-on is offering (ie. if I choose up to 100km option, this parameter shows 100km )
   */
    deliveryDistance?: number
    /**
   * The total price for delivery option selected
   */
    deliveryPrice?: number
    /**
   * The datetime that the requested booking is to end.
   */
    endDate?: string
    /**
   * The name of the festival or event that the guest has said they will be attending
   */
    festivalName?: string
    /**
   * whether or not this booking includes Delivery
   */
    hasDelivery: boolean
    /**
   * whether or not this Booking has payment information attached at time of host response
   */
    hasPaymentInfo: boolean
    /**
   * Whether the booking request has pets
   */
    hasPets: boolean
    /**
   * Whether the guest has experience towing a similar trailer (true = yes, false = no). If this question is not required on a booking request then this field should not be recorded as true or false
   */
    hasTowingExperience?: boolean
    /**
   * Whether the guest is attending a festival (true = yes, false = no). If this question is not required on a booking request then this field should not be recorded as true or false
   */
    isAttendingFestival?: boolean
    /**
   * Whether the booking originated from an Ezymatch offer
   */
    isEzymatch: boolean
    /**
   * whether or not this booking is planning on moving the RV after delivery or not. (based on the question asked on the first page of the booking flow)
   */
    isStationaryDelivery?: boolean
    /**
   * Whether or not the action was triggered automatically due to the system rules or if the host actually actioned the response. (for example: “canceled by system overlapping dates” and “instant book accept”
   */
    isSystemAuto: boolean
    /**
   * The city that the listing is based in.
   */
    listingCity?: string
    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    listingCountry?: string
    /**
   * The region the listing is based in
   */
    listingRegion?: string
    /**
   * Rental category of vehicle booked.
   */
    listingType: string
    /**
   * The account that is receiving the user-to-user interaction.
   */
    receiverUserId: number
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId: string
    /**
   * Specific RV type of vehicle booked.
   */
    rvType: string
    /**
   * The datetime that the requested booking is to begin.
   */
    startDate?: string
    /**
   * The total dollar value of the host payout for the entire rental.
   */
    totalPayout: number
    /**
   * Difference between start date and the current date. (how many days out does the trip start)
   */
    tripLeadTime: number
    /**
   * Difference between start date and end date. Effectively, the number of nights for a trip
   */
    tripLength: number

  }
  'BookingRequestHostResponded [v3]': {

    /**
   * The unique ID associated with the booking request.
   */
    bookingId: number
    /**
   * The response send by the owner.
   */
    bookingResponse: string
    /**
   * The state of the booking as is represented on the backend.
   */
    bookingState?: number
    /**
   * The status of the booking within the payment context. (0 = no payment information, 1 = future booking, 2 = past booking)
   */
    bookingStatus?: 'future' | 'nopayment' | 'past'
    /**
   * The method through which the booking was created. (note make sure to still track ezymatch even though it isn’t a official booking type in the backend)
   */
    bookingType: string
    /**
   * The main decline reason selected by the owner if declined
   */
    declinedReason?: string
    /**
   * The secondary decline reason selected by the owner (sub-reason)
   */
    declinedReasonDetails?: string
    /**
   * maximum distance in kilometers that the add-on is offering (ie. if I choose up to 100km option, this parameter shows 100km )
   */
    deliveryDistance?: number
    /**
   * The total price for delivery option selected
   */
    deliveryPrice?: number
    /**
   * The datetime that the requested booking is to end.
   */
    endDate?: string
    /**
   * The name of the festival or event that the guest has said they will be attending
   */
    festivalName?: string
    /**
   * whether or not this booking includes Delivery
   */
    hasDelivery: boolean
    /**
   * whether or not this Booking has payment information attached at time of host response
   */
    hasPaymentInfo: boolean
    /**
   * Whether the booking request has pets
   */
    hasPets: boolean
    /**
   * Whether the guest has experience towing a similar trailer (true = yes, false = no). If this question is not required on a booking request then this field should not be recorded as true or false
   */
    hasTowingExperience?: boolean
    /**
   * Whether the guest is attending a festival (true = yes, false = no). If this question is not required on a booking request then this field should not be recorded as true or false
   */
    isAttendingFestival?: boolean
    /**
   * Whether the booking originated from an Ezymatch offer
   */
    isEzymatch: boolean
    /**
   * whether or not this booking is planning on moving the RV after delivery or not. (based on the question asked on the first page of the booking flow)
   */
    isStationaryDelivery?: boolean
    /**
   * Whether or not the action was triggered automatically due to the system rules or if the host actually actioned the response. (for example: “canceled by system overlapping dates” and “instant book accept”
   */
    isSystemAuto: boolean
    /**
   * The city that the listing is based in.
   */
    listingCity?: string
    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    listingCountry?: string
    /**
   * The region the listing is based in
   */
    listingRegion?: string
    /**
   * Rental category of vehicle booked.
   */
    listingType: string
    /**
   * The account that is receiving the user-to-user interaction.
   */
    receiverUserId: number
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId: string
    /**
   * Specific RV type of vehicle booked.
   */
    rvType: string
    /**
   * The datetime that the requested booking is to begin.
   */
    startDate?: string
    /**
   * The total dollar value of the host payout for the entire rental.
   */
    totalPayout: number
    /**
   * Difference between start date and the current date. (how many days out does the trip start)
   */
    tripLeadTime: number
    /**
   * Difference between start date and end date. Effectively, the number of nights for a trip
   */
    tripLength: number

  }
  'BookingRequestSubmitted': {

    /**
   * The booking id of the request.
   */
    bookingId: number
    /**
   * The ISO 4217 currency code for the listing.
   */
    currency: 'AUD' | 'CAD' | 'EUR' | 'GBP' | 'NZD' | 'USD'
    /**
   * The datetime that the requested booking is to end.
   */
    endDate: string
    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    listingCountry: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * The region the listing is based in
   */
    listingRegion: string
    /**
   * The datetime that the requested booking is to begin.
   */
    startDate: string
    /**
   * The total dollar value for the entire booking that is displayed.
   */
    totalPrice: number

  }
  'BookingRequestSubmitted [v1]': {

    /**
   * The booking id of the request.
   */
    bookingId: number
    /**
   * The ISO 4217 currency code for the listing.
   */
    currency: 'AUD' | 'CAD' | 'EUR' | 'GBP' | 'NZD' | 'USD'
    /**
   * The datetime that the requested booking is to end.
   */
    endDate: string
    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    listingCountry: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * The region the listing is based in
   */
    listingRegion: string
    /**
   * The datetime that the requested booking is to begin.
   */
    startDate: string
    /**
   * The total dollar value for the entire booking that is displayed.
   */
    totalPrice: number

  }
  'BookingsPageViewed': {

    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country where the host is located
   */
    accountCountry?: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * the cta the user clicked on to get to this screen. (ie. was it from the inbox message, or the bookings/trips card or host dashboard card, etc. )
   */
    cta?: string
    /**
   * If user viewed the All tab
   */
    isAllTab: boolean
    /**
   * If user viewed the completed tab
   */
    isCompletedTab: boolean
    /**
   * If user viewed the confirmed tab
   */
    isConfirmedTab?: boolean
    /**
   * If user viewed the pending tab
   */
    isPendingTab?: boolean
    /**
   * the number of bookings listed in the bookings tab that is loaded. (should work if there is 0 cards?)
   */
    numberOfBookingCards?: number
    /**
   * The source screen that came before their next action if applicable
   */
    pageSource?: string
    /**
   * The user ID of the host viewing the bookings page
   */
    userId: number

  }
  'BookingsPageViewed [v1]': {

    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country where the host is located
   */
    accountCountry?: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * the cta the user clicked on to get to this screen. (ie. was it from the inbox message, or the bookings/trips card or host dashboard card, etc. )
   */
    cta?: string
    /**
   * If user viewed the All tab
   */
    isAllTab: boolean
    /**
   * If user viewed the completed tab
   */
    isCompletedTab: boolean
    /**
   * If user viewed the confirmed tab
   */
    isConfirmedTab?: boolean
    /**
   * If user viewed the pending tab
   */
    isPendingTab?: boolean
    /**
   * the number of bookings listed in the bookings tab that is loaded. (should work if there is 0 cards?)
   */
    numberOfBookingCards?: number
    /**
   * The source screen that came before their next action if applicable
   */
    pageSource?: string
    /**
   * The user ID of the host viewing the bookings page
   */
    userId: number

  }
  'BuyNowPayLaterContinueClicked': {

    /**
   * The unique ID associated with the booking request that got the user to the payment screen.
   */
    bookingId: number
    /**
   * The CTA that got the user to the payment screen.
   */
    cta?: string
    /**
   * The ISO 4217 currency that will be submitted for payments.
   */
    currency: string
    /**
   * The screen that the user came from.
   */
    pageSource?: string
    /**
   * For V1: requestaccepted (when the request has been accepted by the host and the guest is coming back here).For V2: potentially for: bookingflow (when this page is part of the booking flow)
   */
    pageType: string
    /**
   * The payment method that is being selected
   */
    paymentMethod: string
    /**
   * Which promo code was used (only send when valid).
   */
    promoCode?: string
    /**
   * The unique ID associated with an RV on the booking.
   */
    rvId: string

  }
  'BuyNowPayLaterContinueClicked [v1]': {

    /**
   * The unique ID associated with the booking request that got the user to the payment screen.
   */
    bookingId: number
    /**
   * The CTA that got the user to the payment screen.
   */
    cta?: string
    /**
   * The ISO 4217 currency that will be submitted for payments.
   */
    currency: string
    /**
   * The screen that the user came from.
   */
    pageSource?: string
    /**
   * For V1: requestaccepted (when the request has been accepted by the host and the guest is coming back here).For V2: potentially for: bookingflow (when this page is part of the booking flow)
   */
    pageType: string
    /**
   * The payment method that is being selected
   */
    paymentMethod: string
    /**
   * Which promo code was used (only send when valid).
   */
    promoCode?: string
    /**
   * The unique ID associated with an RV on the booking.
   */
    rvId: string

  }
  'BuyRvClicked': {

    /**
   * The location of the cta that was clicked
   */
    cta: string
    /**
   * The screen that the user came from. See pageSources.
   */
    pageSource: string

  }
  'BuyRvClicked [v1]': {

    /**
   * The location of the cta that was clicked
   */
    cta: string
    /**
   * The screen that the user came from. See pageSources.
   */
    pageSource: string

  }
  'CTAClicked': {

    /**
   * The name of the cta that was clicked
   */
    cta: string
    /**
   * The source screen that came before their next action.
   */
    pageSource: string

  }
  'CTAClicked [v1]': {

    /**
   * The name of the cta that was clicked
   */
    cta: string
    /**
   * The source screen that came before their next action.
   */
    pageSource: string

  }
  'CalendarConnectCtaClicked': {

    /**
   * How the user got to this screen
   */
    pageSource?: string
    /**
   * Which RV calendar the user wants to export
   */
    rvId: string

  }
  'CalendarConnectCtaClicked [v1]': {

    /**
   * How the user got to this screen
   */
    pageSource?: string
    /**
   * Which RV calendar the user wants to export
   */
    rvId: string

  }
  'CalendarConnectLinkCopied': {

    /**
   * How the user got to this screen
   */
    pageSource?: string
    /**
   * Which RV calendar the user wants to export
   */
    rvId: string

  }
  'CalendarConnectLinkCopied [v1]': {

    /**
   * How the user got to this screen
   */
    pageSource?: string
    /**
   * Which RV calendar the user wants to export
   */
    rvId: string

  }
  'CalendarConnectModalViewed': {

    /**
   * How the user got to this screen
   */
    pageSource?: string
    /**
   * Which RV this calendar sync modal is displaying for
   */
    rvId: string

  }
  'CalendarConnectModalViewed [v1]': {

    /**
   * How the user got to this screen
   */
    pageSource?: string
    /**
   * Which RV this calendar sync modal is displaying for
   */
    rvId: string

  }
  'CalendarImportFieldClicked': {

    /**
   * The screen that the user came from.
   */
    pageSource?: string
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId: string

  }
  'CalendarImportFieldClicked [v1]': {

    /**
   * The screen that the user came from.
   */
    pageSource?: string
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId: string

  }
  'CalendarImportModalViewed': {

    /**
   * The screen that the user came from.
   */
    pageSource?: string
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId: string

  }
  'CalendarImportModalViewed [v1]': {

    /**
   * The screen that the user came from.
   */
    pageSource?: string
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId: string

  }
  'CalendarImportSubmitted': {

    /**
   * The name of the RV in the calendar that is being imported.
   */
    importRvName?: string
    /**
   * The competitor from which the calendar was imported RVshare or Outdoorsy are the only two options for now.
   */
    importSource: 'Outdoorsy' | 'RVshare'
    /**
   * The screen that the user came from.
   */
    pageSource?: string
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId: string
    /**
   * The link that the user submits for the calendar
   */
    url: string

  }
  'CalendarImportSubmitted [v1]': {

    /**
   * The name of the RV in the calendar that is being imported.
   */
    importRvName?: string
    /**
   * The competitor from which the calendar was imported RVshare or Outdoorsy are the only two options for now.
   */
    importSource: 'Outdoorsy' | 'RVshare'
    /**
   * The screen that the user came from.
   */
    pageSource?: string
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId: string
    /**
   * The link that the user submits for the calendar
   */
    url: string

  }
  'CalendarSyncFailed': {

    /**
   * The failure type
   */
    failedType?: string
    /**
   * The name of the RV in the calendar that is being imported.
   */
    importRvName?: string
    /**
   * The competitor from which the calendar was imported RVshare or Outdoorsy are the only two options for now
   */
    importSource: string
    /**
   * True if this is the first time RVezy is importing/syncing this specific RV calendar link. (ie. at the time of import)
   */
    isFirstSync?: boolean
    /**
   * True if user has manually requested the calendar to sync vs automatically syncing every 24 hours
   */
    isManualSync: boolean
    /**
   * Which RV this calendar sync modal is displaying for. Present if the user gets to the modal from an RV listing.
   */
    rvId?: string
    /**
   * The link that the user submits for the calendar
   */
    url: string

  }
  'CalendarSyncFailed [v1]': {

    /**
   * The failure type
   */
    failedType?: string
    /**
   * The name of the RV in the calendar that is being imported.
   */
    importRvName?: string
    /**
   * The competitor from which the calendar was imported RVshare or Outdoorsy are the only two options for now
   */
    importSource: string
    /**
   * True if this is the first time RVezy is importing/syncing this specific RV calendar link. (ie. at the time of import)
   */
    isFirstSync?: boolean
    /**
   * True if user has manually requested the calendar to sync vs automatically syncing every 24 hours
   */
    isManualSync: boolean
    /**
   * Which RV this calendar sync modal is displaying for. Present if the user gets to the modal from an RV listing.
   */
    rvId?: string
    /**
   * The link that the user submits for the calendar
   */
    url: string

  }
  'CalendarSyncRemoved': {

    /**
   * The number of blocked days that were removed from the RV’s calendar due to removing the linked calendar
   */
    blockedDaysCount: number
    /**
   * The actual day/month/year of the blocked days being removed
   */
    blockedDaysList?: unknown[]
    /**
   * The name of the RV in the calendar that was imported.
   */
    importRvName?: string
    /**
   * The competitor from which the calendar was imported RVshare or Outdoorsy are the only two options for now
   */
    importSource: 'Outdoorsy' | 'RVshare'
    /**
   * Which RV this calendar sync modal is displaying for. Present if the user gets to the modal from an RV listing.
   */
    rvId?: string
    /**
   * The link that the user submits for the calendar
   */
    url: string

  }
  'CalendarSyncRemoved [v1]': {

    /**
   * The number of blocked days that were removed from the RV’s calendar due to removing the linked calendar
   */
    blockedDaysCount: number
    /**
   * The actual day/month/year of the blocked days being removed
   */
    blockedDaysList?: unknown[]
    /**
   * The name of the RV in the calendar that was imported.
   */
    importRvName?: string
    /**
   * The competitor from which the calendar was imported RVshare or Outdoorsy are the only two options for now
   */
    importSource: 'Outdoorsy' | 'RVshare'
    /**
   * Which RV this calendar sync modal is displaying for. Present if the user gets to the modal from an RV listing.
   */
    rvId?: string
    /**
   * The link that the user submits for the calendar
   */
    url: string

  }
  'CalendarSyncSuccessful': {

    /**
   * The number of new blocked days that are imported to the RV’s RVezy calendar due to this sync.
   */
    blockedDaysCount: number
    /**
   * The actual day/month/year of the new blocked days from this sync
   */
    blockedDaysList?: unknown[]
    /**
   * The name of the RV in the calendar that is being imported.
   */
    importRvName?: string
    /**
   * The competitor from which the calendar was imported RVshare or Outdoorsy are the only two options for now
   */
    importSource: 'Outdoorsy' | 'RVshare'
    /**
   * True if this is the first time RVezy is importing/syncing this specific RV calendar link. (ie. at the time of import)
   */
    isFirstSync?: boolean
    /**
   * True if user has manually requested the calendar to sync vs automatically syncing every 24 hours
   */
    isManualSync: boolean
    /**
   * Which RV this calendar sync modal is displaying for. Present if the user gets to the modal from an RV listing.
   */
    rvId?: string
    /**
   * The number of days that were previously blocked from this linked calendar that are now unblocked
   */
    unblockedDaysCount: number
    /**
   * The actual day/month/year of the un-blocked days being imported
   */
    unblockedDaysList?: unknown[]
    /**
   * The link that the user submits for the calendar
   */
    url: string

  }
  'CalendarSyncSuccessful [v1]': {

    /**
   * The number of new blocked days that are imported to the RV’s RVezy calendar due to this sync.
   */
    blockedDaysCount: number
    /**
   * The actual day/month/year of the new blocked days from this sync
   */
    blockedDaysList?: unknown[]
    /**
   * The name of the RV in the calendar that is being imported.
   */
    importRvName?: string
    /**
   * The competitor from which the calendar was imported RVshare or Outdoorsy are the only two options for now
   */
    importSource: 'Outdoorsy' | 'RVshare'
    /**
   * True if this is the first time RVezy is importing/syncing this specific RV calendar link. (ie. at the time of import)
   */
    isFirstSync?: boolean
    /**
   * True if user has manually requested the calendar to sync vs automatically syncing every 24 hours
   */
    isManualSync: boolean
    /**
   * Which RV this calendar sync modal is displaying for. Present if the user gets to the modal from an RV listing.
   */
    rvId?: string
    /**
   * The number of days that were previously blocked from this linked calendar that are now unblocked
   */
    unblockedDaysCount: number
    /**
   * The actual day/month/year of the un-blocked days being imported
   */
    unblockedDaysList?: unknown[]
    /**
   * The link that the user submits for the calendar
   */
    url: string

  }
  'CalendarTutorialClicked': {

    /**
   * Action that was taken on the tutorial bubble (3 things can happen: they click “next”, they click the “close” button, or click outside to box which dismisses the tutorial bubble)
   */
    action: string
    /**
   * Tutorials can have more than 1 page. this identifies which page they interacted with. Page 1 is the 1st tutorial bubble, page 2 is the 2nd tutorial bubble, page 3 is the next page in the 2nd tutorial bubble, page 4 is the last tutorial bubble
   */
    tutorialPage: number

  }
  'CalendarTutorialClicked [v1]': {

    /**
   * Action that was taken on the tutorial bubble (3 things can happen: they click “next”, they click the “close” button, or click outside to box which dismisses the tutorial bubble)
   */
    action: string
    /**
   * Tutorials can have more than 1 page. this identifies which page they interacted with. Page 1 is the 1st tutorial bubble, page 2 is the 2nd tutorial bubble, page 3 is the next page in the 2nd tutorial bubble, page 4 is the last tutorial bubble
   */
    tutorialPage: number

  }
  'CalendarUpdateSuccessful': {

    /**
   * The first date selected in a set.
   */
    firstDate: string
    /**
   * Whether or not the dates that were updated are available, regardless of state change.
   */
    isAvailable: boolean
    /**
   * The last date selected in a set. Can be the same as the firstDate. lastDate - firstDate + 1 = numDays
   */
    lastDate: string
    /**
   * The nightly rate for the updated dates
   */
    nightlyRate?: number | null
    /**
   * The number of days that were successfully updated
   */
    numDays: number
    /**
   * When present, send the price sent to the backend
   */
    price?: number
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId: string
    /**
   * Value of the availability fieldTrue if availableFalse if unavailable
   */
    updatedToAvailable?: boolean

  }
  'CalendarUpdateSuccessful [v1]': {

    /**
   * The last date selected in a set. Can be the same as the firstDate. lastDate - firstDate + 1 = numDays
   */
    firstDate?: string
    /**
   * Whether or not the dates that were updated are available, regardless of state change.
   */
    isAvailable: boolean
    /**
   * The first date selected in a set.
   */
    lastDate?: string
    /**
   * The nightly rate for the updated dates
   */
    nightlyRate?: number
    /**
   * The number of days that were successfully updated
   */
    numDays: number
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId: string
    /**
   * True if the dates availability changed from blocked to availableFalse if the dates availability changed from available to blockedNull if the dates availability was not changed (for example, only the price was updated)
   */
    updatedToAvailable?: boolean

  }
  'CalendarUpdateSuccessful [v2]': {

    /**
   * The last date selected in a set. Can be the same as the firstDate. lastDate - firstDate + 1 = numDays
   */
    firstDate?: string
    /**
   * Whether or not the dates that were updated are available, regardless of state change.
   */
    isAvailable: boolean
    /**
   * The first date selected in a set.
   */
    lastDate?: string
    /**
   * The nightly rate for the updated dates
   */
    nightlyRate?: number | null
    /**
   * The number of days that were successfully updated
   */
    numDays: number
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId: string
    /**
   * True if the dates availability changed from blocked to availableFalse if the dates availability changed from available to blockedNull if the dates availability was not changed (for example, only the price was updated)
   */
    updatedToAvailable?: boolean

  }
  'CalendarUpdateSuccessful [v3]': {

    /**
   * The first date selected in a set.
   */
    firstDate: string
    /**
   * Whether or not the dates that were updated are available, regardless of state change.
   */
    isAvailable: boolean
    /**
   * The last date selected in a set. Can be the same as the firstDate. lastDate - firstDate + 1 = numDays
   */
    lastDate: string
    /**
   * The nightly rate for the updated dates
   */
    nightlyRate?: number | null
    /**
   * The number of days that were successfully updated
   */
    numDays: number
    /**
   * When present, send the price sent to the backend
   */
    price?: number
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId: string
    /**
   * Value of the availability fieldTrue if availableFalse if unavailable
   */
    updatedToAvailable?: boolean

  }
  'Checkout Started': {

    /**
   * Store or affiliation from which this transaction occurred (for example, Google Store)
   */
    affiliation?: string
    /**
   * Transaction coupon redeemed with the transaction
   */
    coupon?: string
    /**
   * Currency code associated with the transaction
   */
    currency: string
    /**
   * Total discount associated with the transaction
   */
    discount?: number
    /**
   * Order/transaction ID
   */
    order_id: string
    /**
   * Products in the order
   */
    products: {
    /**
     * Brand associated with the product
     */
      brand?: string
      /**
     * Product category
     */
      category?: string
      /**
     * Image url of the product
     */
      image_url?: string
      /**
     * Name of the product
     */
      name?: string
      /**
     * Price ($) of the product being viewed
     */
      price: number
      /**
     * External id of the product
     */
      product_id: string
      /**
     * Quantity of a product
     */
      quantity: number
      /**
     * Sku of the product being viewed
     */
      sku: string
      /**
     * URL of the product page
     */
      url?: string
    }[]
    /**
   * Total tax associated with the transaction
   */
    tax?: number
    /**
   * Revenue ($) with discounts and coupons added in.
   */
    value: number

  }
  'Checkout Started [v1]': {

    /**
   * Store or affiliation from which this transaction occurred (for example, Google Store)
   */
    affiliation?: string
    /**
   * Transaction coupon redeemed with the transaction
   */
    coupon?: string
    /**
   * Currency code associated with the transaction
   */
    currency: string
    /**
   * Total discount associated with the transaction
   */
    discount?: number
    /**
   * Order/transaction ID
   */
    order_id: string
    /**
   * Products in the order
   */
    products: {
    /**
     * Brand associated with the product
     */
      brand?: string
      /**
     * Product category
     */
      category?: string
      /**
     * Image url of the product
     */
      image_url?: string
      /**
     * Name of the product
     */
      name?: string
      /**
     * Price ($) of the product being viewed
     */
      price: number
      /**
     * External id of the product
     */
      product_id: string
      /**
     * Quantity of a product
     */
      quantity: number
      /**
     * Sku of the product being viewed
     */
      sku: string
      /**
     * URL of the product page
     */
      url?: string
    }[]
    /**
   * Total tax associated with the transaction
   */
    tax?: number
    /**
   * Revenue ($) with discounts and coupons added in.
   */
    value: number

  }
  'CloseoutReviewed': {

    /**
   * The unique ID associated with the booking request.
   */
    bookingId: number

  }
  'CloseoutReviewed [v1]': {

    /**
   * The unique ID associated with the booking request.
   */
    bookingId: number

  }
  'CloseoutSubmitted': {

    /**
   * The score out of 5 for this review category
   */
    accuracyScore?: number
    /**
   * The unique ID associated with the booking (same as booking number).
   */
    bookingId: number
    /**
   * The state of the booking as is represented on the backend.
   */
    bookingState: number
    /**
   * The method through which the booking was created.
   */
    bookingType: string
    /**
   * The score out of 5 for this review category
   */
    cleanlinessScore?: number
    /**
   * The message sent by the host explaining the closeout charges.
   */
    closeoutExplanation?: string
    /**
   * The score out of 5 for this review category
   */
    communicationScore?: number
    /**
   * The ISO 4217 currency code displayed
   */
    currency: 'AUD' | 'CAD' | 'EUR' | 'GBP' | 'NZD' | 'USD'
    /**
   * The amount charged for the damage in the closeout charges
   */
    damageCharges?: number
    /**
   * The date that the requested booking is to end.
   */
    endDate: string
    /**
   * The amount charged for the generator usage in the closeout charges.
   */
    generatorCharges?: number
    /**
   * whether or not the booking had delivery
   */
    hasDelivery: boolean
    /**
   * The type of user viewing the booking. Depending upon this type, different options will be available on the page.
   */
    isOwner: boolean
    /**
   * The city that the listing is based in.
   */
    listingCity?: string
    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    listingCountry?: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * The region the listing is based in
   */
    listingRegion?: string
    /**
   * Rental category of vehicle booked.
   */
    listingType: 'motorhome' | 'rvcottage' | 'traveltrailer'
    /**
   * The amount charged for the mileage in the closeout charges
   */
    mileageCharges?: number
    /**
   * The amount charged for other charges in the closeout charges
   */
    otherCharges?: number
    /**
   * The score out of 5 for the overall review (for guests submitting reviews, this will be the average of the 4 category scores. For hosts )
   */
    overallReviewScore: number
    /**
   * The message left with the review that is meant only for the Host to see
   */
    privateReviewMessage?: string
    /**
   * The message left with the public review to be visible on the listing
   */
    publicReviewMessage?: string
    /**
   * The user ID related to the user the review is being made of. (ie. if the host is triggering a CloseoutSubmitted event, then the receiverUserId should be the guest user ID, the review submitted in this event is about the guest)
   */
    receiverUserId: number
    /**
   * The total rental price that is viewed by the Guest
   */
    rentalTotal: number
    /**
   * The unique ID associated with an RV.
   */
    rvId: string
    /**
   * Specific RV type of vehicle booked.
   */
    rvType:
      | 'campervan'
      | 'classa'
      | 'classb'
      | 'classc'
      | 'fifthwheel'
      | 'hybrid'
      | 'microtrailer'
      | 'rvcottage'
      | 'tenttrailer'
      | 'toyhauler'
      | 'traveltrailer'
      | 'truckcamper'
    /**
   * The date that the requested booking is to begin.
   */
    startDate: string
    /**
   * The total amount for all closeout charges being requested/charged to the guest during closeout
   */
    totalCloseoutCharge?: number
    /**
   * The score out of 5 for this review category
   */
    valueScore?: number

  }
  'CloseoutSubmitted [v1]': {

    /**
   * The score out of 5 for this review category
   */
    accuracyScore?: number
    /**
   * The unique ID associated with the booking (same as booking number).
   */
    bookingId: number
    /**
   * The state of the booking as is represented on the backend.
   */
    bookingState: number
    /**
   * The method through which the booking was created.
   */
    bookingType: string
    /**
   * The score out of 5 for this review category
   */
    cleanlinessScore?: number
    /**
   * The message sent by the host explaining the closeout charges.
   */
    closeoutExplanation?: string
    /**
   * The score out of 5 for this review category
   */
    communicationScore?: number
    /**
   * The ISO 4217 currency code displayed
   */
    currency: 'CAD' | 'USD' | 'aud' | 'cad' | 'eur' | 'gbp' | 'nzd' | 'usd'
    /**
   * The amount charged for the damage in the closeout charges
   */
    damageCharges?: number
    /**
   * The date that the requested booking is to end.
   */
    endDate: string
    /**
   * The amount charged for the generator usage in the closeout charges.
   */
    generatorCharges?: number
    /**
   * whether or not the booking had delivery
   */
    hasDelivery: boolean
    /**
   * The type of user viewing the booking. Depending upon this type, different options will be available on the page.
   */
    isOwner: boolean
    /**
   * The amount charged for the mileage in the closeout charges
   */
    mileageCharges?: number
    /**
   * The amount charged for other charges in the closeout charges
   */
    otherCharges?: number
    /**
   * The score out of 5 for the overall review (for guests submitting reviews, this will be the average of the 4 category scores. For hosts )
   */
    overallReviewScore: number
    /**
   * The message left with the review that is meant only for the Host to see
   */
    privateReviewMessage?: string
    /**
   * The message left with the public review to be visible on the listing
   */
    publicReviewMessage?: string
    /**
   * The user ID related to the user the review is being made of. (ie. if the host is triggering a CloseoutSubmitted event, then the receiverUserId should be the guest user ID, the review submitted in this event is about the guest)
   */
    receiverUserId: number
    /**
   * The total rental price that is viewed by the Guest
   */
    rentalTotal: number
    /**
   * The unique ID associated with an RV.
   */
    rvId: string
    /**
   * The date that the requested booking is to begin.
   */
    startDate: string
    /**
   * The total amount for all closeout charges being requested/charged to the guest during closeout
   */
    totalCloseoutCharge?: number
    /**
   * The score out of 5 for this review category
   */
    valueScore?: number

  }
  'CloseoutSubmitted [v2]': {

    /**
   * The score out of 5 for this review category
   */
    accuracyScore?: number
    /**
   * The unique ID associated with the booking (same as booking number).
   */
    bookingId: number
    /**
   * The state of the booking as is represented on the backend.
   */
    bookingState: number
    /**
   * The method through which the booking was created.
   */
    bookingType: string
    /**
   * The score out of 5 for this review category
   */
    cleanlinessScore?: number
    /**
   * The message sent by the host explaining the closeout charges.
   */
    closeoutExplanation?: string
    /**
   * The score out of 5 for this review category
   */
    communicationScore?: number
    /**
   * The ISO 4217 currency code displayed
   */
    currency: 'CAD' | 'USD' | 'aud' | 'cad' | 'eur' | 'gbp' | 'nzd' | 'usd'
    /**
   * The amount charged for the damage in the closeout charges
   */
    damageCharges?: number
    /**
   * The date that the requested booking is to end.
   */
    endDate: string
    /**
   * The amount charged for the generator usage in the closeout charges.
   */
    generatorCharges?: number
    /**
   * whether or not the booking had delivery
   */
    hasDelivery: boolean
    /**
   * The type of user viewing the booking. Depending upon this type, different options will be available on the page.
   */
    isOwner: boolean
    /**
   * The city that the listing is based in.
   */
    listingCity?: string
    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    listingCountry?: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * The region the listing is based in
   */
    listingRegion?: string
    /**
   * Rental category of vehicle booked.
   */
    listingType: 'motorhome' | 'rvcottage' | 'traveltrailer'
    /**
   * The amount charged for the mileage in the closeout charges
   */
    mileageCharges?: number
    /**
   * The amount charged for other charges in the closeout charges
   */
    otherCharges?: number
    /**
   * The score out of 5 for the overall review (for guests submitting reviews, this will be the average of the 4 category scores. For hosts )
   */
    overallReviewScore: number
    /**
   * The message left with the review that is meant only for the Host to see
   */
    privateReviewMessage?: string
    /**
   * The message left with the public review to be visible on the listing
   */
    publicReviewMessage?: string
    /**
   * The user ID related to the user the review is being made of. (ie. if the host is triggering a CloseoutSubmitted event, then the receiverUserId should be the guest user ID, the review submitted in this event is about the guest)
   */
    receiverUserId: number
    /**
   * The total rental price that is viewed by the Guest
   */
    rentalTotal: number
    /**
   * The unique ID associated with an RV.
   */
    rvId: string
    /**
   * Specific RV type of vehicle booked.
   */
    rvType:
      | 'campervan'
      | 'classa'
      | 'classb'
      | 'classc'
      | 'fifthwheel'
      | 'hybrid'
      | 'microtrailer'
      | 'rvcottage'
      | 'tenttrailer'
      | 'toyhauler'
      | 'traveltrailer'
      | 'truckcamper'
    /**
   * The date that the requested booking is to begin.
   */
    startDate: string
    /**
   * The total amount for all closeout charges being requested/charged to the guest during closeout
   */
    totalCloseoutCharge?: number
    /**
   * The score out of 5 for this review category
   */
    valueScore?: number

  }
  'CloseoutSubmitted [v3]': {

    /**
   * The score out of 5 for this review category
   */
    accuracyScore?: number
    /**
   * The unique ID associated with the booking (same as booking number).
   */
    bookingId: number
    /**
   * The state of the booking as is represented on the backend.
   */
    bookingState: number
    /**
   * The method through which the booking was created.
   */
    bookingType: string
    /**
   * The score out of 5 for this review category
   */
    cleanlinessScore?: number
    /**
   * The message sent by the host explaining the closeout charges.
   */
    closeoutExplanation?: string
    /**
   * The score out of 5 for this review category
   */
    communicationScore?: number
    /**
   * The ISO 4217 currency code displayed
   */
    currency: 'AUD' | 'CAD' | 'EUR' | 'GBP' | 'NZD' | 'USD'
    /**
   * The amount charged for the damage in the closeout charges
   */
    damageCharges?: number
    /**
   * The date that the requested booking is to end.
   */
    endDate: string
    /**
   * The amount charged for the generator usage in the closeout charges.
   */
    generatorCharges?: number
    /**
   * whether or not the booking had delivery
   */
    hasDelivery: boolean
    /**
   * The type of user viewing the booking. Depending upon this type, different options will be available on the page.
   */
    isOwner: boolean
    /**
   * The city that the listing is based in.
   */
    listingCity?: string
    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    listingCountry?: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * The region the listing is based in
   */
    listingRegion?: string
    /**
   * Rental category of vehicle booked.
   */
    listingType: 'motorhome' | 'rvcottage' | 'traveltrailer'
    /**
   * The amount charged for the mileage in the closeout charges
   */
    mileageCharges?: number
    /**
   * The amount charged for other charges in the closeout charges
   */
    otherCharges?: number
    /**
   * The score out of 5 for the overall review (for guests submitting reviews, this will be the average of the 4 category scores. For hosts )
   */
    overallReviewScore: number
    /**
   * The message left with the review that is meant only for the Host to see
   */
    privateReviewMessage?: string
    /**
   * The message left with the public review to be visible on the listing
   */
    publicReviewMessage?: string
    /**
   * The user ID related to the user the review is being made of. (ie. if the host is triggering a CloseoutSubmitted event, then the receiverUserId should be the guest user ID, the review submitted in this event is about the guest)
   */
    receiverUserId: number
    /**
   * The total rental price that is viewed by the Guest
   */
    rentalTotal: number
    /**
   * The unique ID associated with an RV.
   */
    rvId: string
    /**
   * Specific RV type of vehicle booked.
   */
    rvType:
      | 'campervan'
      | 'classa'
      | 'classb'
      | 'classc'
      | 'fifthwheel'
      | 'hybrid'
      | 'microtrailer'
      | 'rvcottage'
      | 'tenttrailer'
      | 'toyhauler'
      | 'traveltrailer'
      | 'truckcamper'
    /**
   * The date that the requested booking is to begin.
   */
    startDate: string
    /**
   * The total amount for all closeout charges being requested/charged to the guest during closeout
   */
    totalCloseoutCharge?: number
    /**
   * The score out of 5 for this review category
   */
    valueScore?: number

  }
  'CurrencySelectorClicked': {

    /**
   * The currency displayed before the user clicked on the selector
   */
    currencyDisplayed: string
    /**
   * The page on which the user clicked on the selector
   */
    currentPage?: string

  }
  'CurrencySelectorClicked [v1]': {

    /**
   * The currency displayed before the user clicked on the selector
   */
    currencyDisplayed: string
    /**
   * The page on which the user clicked on the selector
   */
    currentPage?: string

  }
  'CurrencyUpdated': {

    /**
   * The page on which the user clicked on the selector
   */
    currentPage?: string
    /**
   * The currency that was applied before the user select the new currency
   */
    previousCurrency: string
    /**
   * The currency applied after the user selects the currency
   */
    updatedCurrency: string

  }
  'CurrencyUpdated [v1]': {

    /**
   * The page on which the user clicked on the selector
   */
    currentPage?: string
    /**
   * The currency that was applied before the user select the new currency
   */
    previousCurrency: string
    /**
   * The currency applied after the user selects the currency
   */
    updatedCurrency: string

  }
  'DeliveryEducationalModalClicked': {

    /**
   * the action that was taken on the modal (really only two things that can happen, they click “next” or they click the “close” button)
   */
    action: string
    /**
   * There are three pages to the modal, which page is the click made on
   */
    modalPage: number
    /**
   * Which search experience the modal click through action has been taken on
   */
    pageSource: string

  }
  'DeliveryEducationalModalClicked [v1]': {

    /**
   * the action that was taken on the modal (really only two things that can happen, they click “next” or they click the “close” button)
   */
    action: string
    /**
   * There are three pages to the modal, which page is the click made on
   */
    modalPage: number
    /**
   * Which search experience the modal click through action has been taken on
   */
    pageSource: string

  }
  'DisputeChargesClicked': {

    /**
   * The unique booking number associated to the send money request the host is completing.
   */
    bookingId: number
    /**
   * The current booking stage
   */
    bookingStage: string
    /**
   * The end date of the booking at the time the host has clicked on “Send Money”
   */
    endDate: string
    /**
   * The explanation the host provided when requesting money from the quest
   */
    explanationProvided: string
    /**
   * Whether the host had the departure inspection completed at the time they requested money
   */
    hasDepartureInspectionComplete: boolean
    /**
   * Whether the host had the return inspection completed at the time they requested money
   */
    hasReturnInspectionComplete: boolean
    /**
   * Which additional charge did the host request
   */
    requestedChargesType: string
    /**
   * The start date of the booking at the time the host has clicked on “Send Money”
   */
    startDate: string
    /**
   * The combined total of all the requested charges the host has entered and requested from the guest
   */
    totalRequestedCharges: number

  }
  'DisputeChargesClicked [v1]': {

    /**
   * The unique booking number associated to the send money request the host is completing.
   */
    bookingId: number
    /**
   * The current booking stage
   */
    bookingStage: string
    /**
   * The end date of the booking at the time the host has clicked on “Send Money”
   */
    endDate: string
    /**
   * The explanation the host provided when requesting money from the quest
   */
    explanationProvided: string
    /**
   * Whether the host had the departure inspection completed at the time they requested money
   */
    hasDepartureInspectionComplete: boolean
    /**
   * Whether the host had the return inspection completed at the time they requested money
   */
    hasReturnInspectionComplete: boolean
    /**
   * Which additional charge did the host request
   */
    requestedChargesType: string
    /**
   * The start date of the booking at the time the host has clicked on “Send Money”
   */
    startDate: string
    /**
   * The combined total of all the requested charges the host has entered and requested from the guest
   */
    totalRequestedCharges: number

  }
  'DisputeChargesOpened': {

    /**
   * The unique Request Money ID associated to the money request the host if requiring from the guest
   */
    additionalBookingChargeId: number
    /**
   * The unique booking number associated to the send money request the host is completing.
   */
    bookingId: number
    /**
   * The current booking stage
   */
    bookingStage: string
    /**
   * The amount charged for the damage in the closeout charges
   */
    damageAmount?: number
    /**
   * The end date of the booking at the time the host has clicked on “Send Money”
   */
    endDate: string
    /**
   * Whether or not the guest provided proof when opening the dispute. did they attach an image, reciept or any other supporting document
   */
    evidenceUploaded: boolean
    /**
   * The explanation the host provided when requesting money from the quest
   */
    explanationProvided: string
    /**
   * The amount charged for the generator usage in the closeout charges
   */
    generatorAmount?: number
    /**
   * Whether the host had the departure inspection completed at the time they requested money
   */
    hasDepartureInspectionComplete: boolean
    /**
   * Whether the host had the return inspection completed at the time they requested money
   */
    hasReturnInspectionComplete: boolean
    /**
   * The amount charged for the mileage in the closeout charges
   */
    mileageAmount?: number
    /**
   * The amount charged for other charges in the closeout charges
   */
    otherAmount?: number
    /**
   * The unique ID of the owner of the listing renter has sent the booking request for.
   */
    ownerId: number
    /**
   * The ID of the guest that receives the special offer.
   */
    receiverUserId: number
    /**
   * The start date of the booking at the time the host has clicked on “Send Money”
   */
    startDate: string
    /**
   * The combined total of all the requested charges the host has entered and requested from the guest
   */
    totalRequestedCharges: number

  }
  'DisputeChargesOpened [v1]': {

    /**
   * The unique Request Money ID associated to the money request the host if requiring from the guest
   */
    additionalBookingChargeId: number
    /**
   * The unique booking number associated to the send money request the host is completing.
   */
    bookingId: number
    /**
   * The current booking stage
   */
    bookingStage: string
    /**
   * The amount charged for the damage in the closeout charges
   */
    damageAmount?: number
    /**
   * The end date of the booking at the time the host has clicked on “Send Money”
   */
    endDate: string
    /**
   * Whether or not the guest provided proof when opening the dispute. did they attach an image, reciept or any other supporting document
   */
    evidenceUploaded: boolean
    /**
   * The explanation the host provided when requesting money from the quest
   */
    explanationProvided: string
    /**
   * The amount charged for the generator usage in the closeout charges
   */
    generatorAmount?: number
    /**
   * Whether the host had the departure inspection completed at the time they requested money
   */
    hasDepartureInspectionComplete: boolean
    /**
   * Whether the host had the return inspection completed at the time they requested money
   */
    hasReturnInspectionComplete: boolean
    /**
   * The amount charged for the mileage in the closeout charges
   */
    mileageAmount?: number
    /**
   * The amount charged for other charges in the closeout charges
   */
    otherAmount?: number
    /**
   * The unique ID of the owner of the listing renter has sent the booking request for.
   */
    ownerId: number
    /**
   * The ID of the guest that receives the special offer.
   */
    receiverUserId: number
    /**
   * The start date of the booking at the time the host has clicked on “Send Money”
   */
    startDate: string
    /**
   * The combined total of all the requested charges the host has entered and requested from the guest
   */
    totalRequestedCharges: number

  }
  'DisputeSubmitted': {

    /**
   * The unique ID associated with the booking (same as booking number).
   */
    bookingId: number
    /**
   * The state of the booking as is represented on the backend.
   */
    bookingState: number
    /**
   * The message sent by the host explaining the closeout charges
   */
    closeoutExplanation?: string
    /**
   * The ISO 4217 currency code displayed
   */
    currency: 'AUD' | 'CAD' | 'EUR' | 'GBP' | 'NZD' | 'USD'
    /**
   * The amount charged for the damage in the closeout charges
   */
    damageCharges?: number
    /**
   * The message sent by the user with the dispute
   */
    disputeMessage?: string
    /**
   * The date that the requested booking is to end.
   */
    endDate: string
    /**
   * The amount charged for the generator usage in the closeout charges
   */
    generatorCharges?: number
    /**
   * whether or not the booking had delivery
   */
    hasDelivery: boolean
    /**
   * The type of user submitting the dispute
   */
    isOwner: boolean
    /**
   * The amount charged for the mileage in the closeout charges
   */
    mileageCharges?: number
    /**
   * The amount charged for other charges in the closeout charges
   */
    otherCharges?: number
    /**
   * The ID of the guest that receives the special offer.
   */
    receiverUserId: number
    /**
   * The total rental price that is viewed by the Guest
   */
    rentalTotal: number
    /**
   * The unique ID associated with an RV.
   */
    rvId: string
    /**
   * The date that the requested booking is to begin.
   */
    startDate: string
    /**
   * The total amount for all closeout charges being requested/charged to the guest during closeout
   */
    totalCloseoutCharge?: number

  }
  'DisputeSubmitted [v1]': {

    /**
   * The unique ID associated with the booking (same as booking number).
   */
    bookingId: number
    /**
   * The state of the booking as is represented on the backend.
   */
    bookingState: number
    /**
   * The message sent by the host explaining the closeout charges
   */
    closeoutExplanation?: string
    /**
   * The ISO 4217 currency code displayed
   */
    currency: 'CAD' | 'USD' | 'aud' | 'cad' | 'eur' | 'gbp' | 'nzd' | 'usd'
    /**
   * The amount charged for the damage in the closeout charges
   */
    damageCharges?: number
    /**
   * The message sent by the user with the dispute
   */
    disputeMessage?: string
    /**
   * The date that the requested booking is to end.
   */
    endDate: string
    /**
   * The amount charged for the generator usage in the closeout charges
   */
    generatorCharges?: number
    /**
   * whether or not the booking had delivery
   */
    hasDelivery: boolean
    /**
   * The type of user submitting the dispute
   */
    isOwner: boolean
    /**
   * The amount charged for the mileage in the closeout charges
   */
    mileageCharges?: number
    /**
   * The amount charged for other charges in the closeout charges
   */
    otherCharges?: number
    /**
   * The total rental price that is viewed by the Guest
   */
    rentalTotal: number
    /**
   * The unique ID associated with an RV.
   */
    rvId: string
    /**
   * The date that the requested booking is to begin.
   */
    startDate: string
    /**
   * The total amount for all closeout charges being requested/charged to the guest during closeout
   */
    totalCloseoutCharge?: number

  }
  'DisputeSubmitted [v2]': {

    /**
   * The unique ID associated with the booking (same as booking number).
   */
    bookingId: number
    /**
   * The state of the booking as is represented on the backend.
   */
    bookingState: number
    /**
   * The message sent by the host explaining the closeout charges
   */
    closeoutExplanation?: string
    /**
   * The ISO 4217 currency code displayed
   */
    currency: 'AUD' | 'CAD' | 'EUR' | 'GBP' | 'NZD' | 'USD'
    /**
   * The amount charged for the damage in the closeout charges
   */
    damageCharges?: number
    /**
   * The message sent by the user with the dispute
   */
    disputeMessage?: string
    /**
   * The date that the requested booking is to end.
   */
    endDate: string
    /**
   * The amount charged for the generator usage in the closeout charges
   */
    generatorCharges?: number
    /**
   * whether or not the booking had delivery
   */
    hasDelivery: boolean
    /**
   * The type of user submitting the dispute
   */
    isOwner: boolean
    /**
   * The amount charged for the mileage in the closeout charges
   */
    mileageCharges?: number
    /**
   * The amount charged for other charges in the closeout charges
   */
    otherCharges?: number
    /**
   * The ID of the guest that receives the special offer.
   */
    receiverUserId: number
    /**
   * The total rental price that is viewed by the Guest
   */
    rentalTotal: number
    /**
   * The unique ID associated with an RV.
   */
    rvId: string
    /**
   * The date that the requested booking is to begin.
   */
    startDate: string
    /**
   * The total amount for all closeout charges being requested/charged to the guest during closeout
   */
    totalCloseoutCharge?: number

  }
  'EditBookingAccepted': {

    /**
   * The unique ID associated with the active booking
   */
    bookingId: number
    /**
   * The ISO 4217 currency code displayed
   */
    currency: string
    /**
   * What type of change request was submitted by the guest.
   */
    editType: unknown[]
    /**
   * whether or not the user initiating the change request on the active booking.
   */
    isHost: boolean
    /**
   * The new end sate of the booking when the completing the edit.
   */
    newEndDate?: string
    /**
   * The total of adults and kids attached to booking once the request to edit is accepted
   */
    newNumberOfGuests?: number
    /**
   * The new payout after successfully accepting the guest’s edit request
   */
    newPayout: number
    /**
   * Whether or not the booking has pets attached once the request to edit is accepted
   */
    newPets?: boolean
    /**
   * The new start date of the booking made when completing the edit.
   */
    newStartDate?: string
    /**
   * The total of adults + kids that were attached to the booking for the request to edit was accepted
   */
    oldNumberOfGuests?: number
    /**
   * The payout before guest requested the edit
   */
    oldPayout: number
    /**
   * Did the booking have pets attached before the request to edit was accepted
   */
    oldPets?: boolean
    receiverUserId: number

  }
  'EditBookingAccepted [v1]': {

    /**
   * The unique ID associated with the active booking
   */
    bookingId: number
    /**
   * The ISO 4217 currency code displayed
   */
    currency: string
    /**
   * What type of change request was submitted by the guest.
   */
    editType: unknown[]
    /**
   * whether or not the user initiating the change request on the active booking.
   */
    isHost: boolean
    /**
   * The new end sate of the booking when the completing the edit.
   */
    newEndDate?: string
    /**
   * The total of adults and kids attached to booking once the request to edit is accepted
   */
    newNumberOfGuests?: number
    /**
   * The new payout after successfully accepting the guest’s edit request
   */
    newPayout: number
    /**
   * Whether or not the booking has pets attached once the request to edit is accepted
   */
    newPets?: boolean
    /**
   * The new start date of the booking made when completing the edit.
   */
    newStartDate?: string
    /**
   * The total of adults + kids that were attached to the booking for the request to edit was accepted
   */
    oldNumberOfGuests?: number
    /**
   * The payout before guest requested the edit
   */
    oldPayout: number
    /**
   * Did the booking have pets attached before the request to edit was accepted
   */
    oldPets?: boolean
    receiverUserId: number

  }
  'EditBookingActioned': {

    /**
   * The current selection of added add-ons included at the time of editing
   */
    addonsSelected?: unknown[]
    /**
   * The number of Adults listed at the time of editing
   */
    adults: number
    /**
   * The unique ID associated with the active booking
   */
    bookingId: number
    /**
   * The current booking stage before an edit is being made/requested
   */
    bookingStage: number
    /**
   * The booking type that is attached to the booking at to the time they make a selection. For example, [Normal, Instant, Invoice]
   */
    bookingType: unknown[]
    /**
   * The number of children listed at the time of editing
   */
    children?: number
    /**
   * The ISO 4217 currency code displayed
   */
    currency: string
    /**
   * Whether the user selected either ‘dates’ (if clicking ‘Change dates’) or ‘details’ (if clicking ‘Change details’ to edit number of guests and/or add-ons) through the edit booking modal
   */
    editType: string
    /**
   * The value of whether pets will be taken on the trip or not at the time of editing
   */
    pets?: boolean
    /**
   * The protection plan, either ‘Standard’ or ‘Premium’, that have been indicated at the time of editing
   */
    protectionPlan: string
    /**
   * Either motorhome or travel trailer
   */
    rentalType: string
    /**
   * If the user opted in for roadside assistance at the time of editing
   */
    roadsideAssistance: boolean
    /**
   * The total dollar value for the entire rental that is displayed before an edit is being made/requested
   */
    totalPrice: number
    /**
   * The end date of the booking/request before an edit is being made/reviewed
   */
    tripEndDate: string
    /**
   * The current start date of the booking at the time of editing
   */
    tripStartDate: string

  }
  'EditBookingActioned [v1]': {

    /**
   * The current selection of added add-ons included at the time of editing
   */
    addonsSelected?: unknown[]
    /**
   * The number of Adults listed at the time of editing
   */
    adults: number
    /**
   * The unique ID associated with the active booking
   */
    bookingId: number
    /**
   * The current booking stage before an edit is being made/requested
   */
    bookingStage: number
    /**
   * The booking type that is attached to the booking at to the time they make a selection. For example, [Normal, Instant, Invoice]
   */
    bookingType: unknown[]
    /**
   * The number of children listed at the time of editing
   */
    children?: number
    /**
   * The ISO 4217 currency code displayed
   */
    currency: string
    /**
   * Whether the user selected either ‘dates’ (if clicking ‘Change dates’) or ‘details’ (if clicking ‘Change details’ to edit number of guests and/or add-ons) through the edit booking modal
   */
    editType: string
    /**
   * The value of whether pets will be taken on the trip or not at the time of editing
   */
    pets?: boolean
    /**
   * The protection plan, either ‘Standard’ or ‘Premium’, that have been indicated at the time of editing
   */
    protectionPlan: string
    /**
   * Either motorhome or travel trailer
   */
    rentalType: string
    /**
   * If the user opted in for roadside assistance at the time of editing
   */
    roadsideAssistance: boolean
    /**
   * The total dollar value for the entire rental that is displayed before an edit is being made/requested
   */
    totalPrice: number
    /**
   * The end date of the booking/request before an edit is being made/reviewed
   */
    tripEndDate: string
    /**
   * The current start date of the booking at the time of editing
   */
    tripStartDate: string

  }
  'EditBookingClicked': {

    /**
   * The add-ons included in the request before an edit is being made/requested
   */
    addonsSelected?: unknown[]
    /**
   * The number of adults that have been indicated to be going on the trip before an edit is being made/requested
   */
    adults: number
    /**
   * The unique ID associated with the active booking
   */
    bookingId: number
    /**
   * The current booking stage before an edit is being made/requested
   */
    bookingStage: number
    /**
   * The number of children that have been indicated to be going on the trip  before an edit is being made/requested
   */
    children?: number
    /**
   * The ISO 4217 currency code displayed
   */
    currency: string
    /**
   * whether or not the user initiating the change request on the active booking.
   */
    isHost: boolean
    /**
   * If the user has indicated they will be taking pets or not before an edit is being made/requested
   */
    pets?: boolean
    /**
   * The protection plan, either ‘Standard’ or ‘Premium’, that have been indicated before an edit is being made/requested
   */
    protectionPlan: string
    /**
   * If the user opted in for roadside assistance before an edit is being made/requested
   */
    roadsideAssistance: boolean
    /**
   * The total dollar value for the entire rental that is displayed before an edit is being made/requested
   */
    totalPrice: number
    /**
   * The end date of the booking/request before an edit is being made/reviewed
   */
    tripEndDate: string
    /**
   * The start date of the booking/request before an edit is being made/requested
   */
    tripStartDate: string

  }
  'EditBookingClicked [v1]': {

    /**
   * The add-ons included in the request before an edit is being made/requested
   */
    addonsSelected?: unknown[]
    /**
   * The number of adults that have been indicated to be going on the trip before an edit is being made/requested
   */
    adults: number
    /**
   * The unique ID associated with the active booking
   */
    bookingId: number
    /**
   * The current booking stage before an edit is being made/requested
   */
    bookingStage: number
    /**
   * The number of children that have been indicated to be going on the trip  before an edit is being made/requested
   */
    children?: number
    /**
   * The ISO 4217 currency code displayed
   */
    currency: string
    /**
   * whether or not the user initiating the change request on the active booking.
   */
    isHost: boolean
    /**
   * If the user has indicated they will be taking pets or not before an edit is being made/requested
   */
    pets?: boolean
    /**
   * The protection plan, either ‘Standard’ or ‘Premium’, that have been indicated before an edit is being made/requested
   */
    protectionPlan: string
    /**
   * If the user opted in for roadside assistance before an edit is being made/requested
   */
    roadsideAssistance: boolean
    /**
   * The total dollar value for the entire rental that is displayed before an edit is being made/requested
   */
    totalPrice: number
    /**
   * The end date of the booking/request before an edit is being made/reviewed
   */
    tripEndDate: string
    /**
   * The start date of the booking/request before an edit is being made/requested
   */
    tripStartDate: string

  }
  'EditBookingDeclined': {

    /**
   * The unique ID associated with the booking.
   */
    bookingId: number
    /**
   * The ISO 4217 currency code displayed
   */
    currency: string
    /**
   * What type of change request was submitted by the guest.
   */
    editType: unknown[]
    /**
   * whether the user who is declining the request to edit the booking is a host or not
   */
    isHost: boolean
    /**
   * The new payout after successfully accepting the guest’s edit request
   */
    newPayout: number
    /**
   * The payout before guest requested the edit
   */
    oldPayout: number
    reasonDecline: string
    receiverUserId: number

  }
  'EditBookingDeclined [v1]': {

    /**
   * The unique ID associated with the booking.
   */
    bookingId: number
    /**
   * The ISO 4217 currency code displayed
   */
    currency: string
    /**
   * What type of change request was submitted by the guest.
   */
    editType: unknown[]
    /**
   * whether the user who is declining the request to edit the booking is a host or not
   */
    isHost: boolean
    /**
   * The new payout after successfully accepting the guest’s edit request
   */
    newPayout: number
    /**
   * The payout before guest requested the edit
   */
    oldPayout: number
    reasonDecline: string
    receiverUserId: number

  }
  'EditBookingExited': {

    /**
   * The new addons selected at the time of confirming the booking edit
   */
    addonsSelected: unknown[]
    /**
   * The number of Adults listed at the time of editing
   */
    adults: number
    /**
   * The unique ID associated with the active booking
   */
    bookingId: number
    /**
   * The current booking stage before an edit is being made/requested
   */
    bookingStage: number
    /**
   * The booking type that is attached to the booking at to the time they make a selection. For example, [Normal, Instant, Invoice]
   */
    bookingType: unknown[]
    /**
   * The number of children listed at the time of editing
   */
    children: number
    /**
   * Whether the user selected either ‘dates’ (if clicking ‘Change dates’) or ‘details’ (if clicking ‘Change details’ to edit number of guests and/or add-ons) through the edit booking modal
   */
    editType: string
    /**
   * The value of whether pets will be taken on the trip or not at the time of editing
   */
    pets: number
    /**
   * Either motorhome or travel trailer
   */
    rentalType: string
    /**
   * The current end date of the booking at the time the user selected to make an edit to the dates
   */
    tripEndDate: string
    /**
   * The current start date of the booking at the time the user selected to make an edit to the dates
   */
    tripStartDate: string

  }
  'EditBookingExited [v1]': {

    /**
   * The new addons selected at the time of confirming the booking edit
   */
    addonsSelected: unknown[]
    /**
   * The number of Adults listed at the time of editing
   */
    adults: number
    /**
   * The unique ID associated with the active booking
   */
    bookingId: number
    /**
   * The current booking stage before an edit is being made/requested
   */
    bookingStage: number
    /**
   * The booking type that is attached to the booking at to the time they make a selection. For example, [Normal, Instant, Invoice]
   */
    bookingType: unknown[]
    /**
   * The number of children listed at the time of editing
   */
    children: number
    /**
   * Whether the user selected either ‘dates’ (if clicking ‘Change dates’) or ‘details’ (if clicking ‘Change details’ to edit number of guests and/or add-ons) through the edit booking modal
   */
    editType: string
    /**
   * The value of whether pets will be taken on the trip or not at the time of editing
   */
    pets: number
    /**
   * Either motorhome or travel trailer
   */
    rentalType: string
    /**
   * The current end date of the booking at the time the user selected to make an edit to the dates
   */
    tripEndDate: string
    /**
   * The current start date of the booking at the time the user selected to make an edit to the dates
   */
    tripStartDate: string

  }
  'EditBookingOptionsClicked': {

    /**
   * The add-ons included in the request before an edit is being made/requested
   */
    addonsSelected?: unknown[]
    /**
   * The number of adults that have been indicated to be going on the trip before an edit is being made/requested
   */
    adults: number
    /**
   * The unique ID associated with the active booking
   */
    bookingId: number
    /**
   * The current booking stage before an edit is being made/requested
   */
    bookingStage: number
    /**
   * The booking type that is attached to the booking at to the time they make a selection.
   */
    bookingType: unknown[]
    /**
   * The number of children that have been indicated to be going on the trip  before an edit is being made/requested
   */
    children?: number
    /**
   * The ISO 4217 currency code displayed
   */
    currency: string
    /**
   * Whether the user selected either ‘dates’ (if clicking ‘Change dates’) or ‘details’ (if clicking ‘Change details’ to edit number of guests and/or add-ons) through the edit booking modal
   */
    editType: string
    /**
   * whether or not the user initiating the change request on the active booking.
   */
    isHost: boolean
    /**
   * If the user has indicated they will be taking pets or not before an edit is being made/requested
   */
    pets?: boolean
    /**
   * The protection plan, either ‘Standard’ or ‘Premium’, that have been indicated before an edit is being made/requested
   */
    protectionPlan: string
    /**
   * If the user opted in for roadside assistance before an edit is being made/requested
   */
    roadsideAssistance: boolean
    /**
   * the unique ID associated to the RV o the booking
   */
    rvId: string
    /**
   * The total dollar value for the entire rental that is displayed before an edit is being made/requested
   */
    totalPrice: number
    /**
   * The end date of the booking/request before an edit is being made/reviewed
   */
    tripEndDate: string
    /**
   * The start date of the booking/request before an edit is being made/requested
   */
    tripStartDate: string

  }
  'EditBookingOptionsClicked [v1]': {

    /**
   * The add-ons included in the request before an edit is being made/requested
   */
    addonsSelected?: unknown[]
    /**
   * The number of adults that have been indicated to be going on the trip before an edit is being made/requested
   */
    adults: number
    /**
   * The unique ID associated with the active booking
   */
    bookingId: number
    /**
   * The current booking stage before an edit is being made/requested
   */
    bookingStage: number
    /**
   * The booking type that is attached to the booking at to the time they make a selection.
   */
    bookingType: unknown[]
    /**
   * The number of children that have been indicated to be going on the trip  before an edit is being made/requested
   */
    children?: number
    /**
   * The ISO 4217 currency code displayed
   */
    currency: string
    /**
   * Whether the user selected either ‘dates’ (if clicking ‘Change dates’) or ‘details’ (if clicking ‘Change details’ to edit number of guests and/or add-ons) through the edit booking modal
   */
    editType: string
    /**
   * whether or not the user initiating the change request on the active booking.
   */
    isHost: boolean
    /**
   * If the user has indicated they will be taking pets or not before an edit is being made/requested
   */
    pets?: boolean
    /**
   * The protection plan, either ‘Standard’ or ‘Premium’, that have been indicated before an edit is being made/requested
   */
    protectionPlan: string
    /**
   * If the user opted in for roadside assistance before an edit is being made/requested
   */
    roadsideAssistance: boolean
    /**
   * the unique ID associated to the RV o the booking
   */
    rvId: string
    /**
   * The total dollar value for the entire rental that is displayed before an edit is being made/requested
   */
    totalPrice: number
    /**
   * The end date of the booking/request before an edit is being made/reviewed
   */
    tripEndDate: string
    /**
   * The start date of the booking/request before an edit is being made/requested
   */
    tripStartDate: string

  }
  'EditBookingReviewed': {

    /**
   * The unique ID associated with the active booking
   */
    bookingId: number
    /**
   * The ISO 4217 currency code displayed
   */
    currency: string
    /**
   * Whether the user selected either ‘dates’ (if clicking ‘Change dates’) or ‘details’ (if clicking ‘Change details’ to edit number of guests and/or add-ons) through the edit booking modal
   */
    editType: unknown[]
    /**
   * whether the user who is reviewing the change request to action is a host or not
   */
    isHost: boolean
    /**
   * The new dates that were selected once the user made a request to book
   */
    newDates: string
    /**
   * The suggested new payout after a user made an request to edit
   */
    newPayout: number
    /**
   * The total of the booking after a user made a request to edit
   */
    newTotal: number
    /**
   * The dates that were selected before a user made a request to edit
   */
    oldDates: string
    /**
   * The payout before the user made a request to edit
   */
    oldPayout: number
    /**
   * The total of the booking before a user made a request to edit
   */
    oldTotal: number

  }
  'EditBookingReviewed [v1]': {

    /**
   * The unique ID associated with the active booking
   */
    bookingId: number
    /**
   * The ISO 4217 currency code displayed
   */
    currency: string
    /**
   * Whether the user selected either ‘dates’ (if clicking ‘Change dates’) or ‘details’ (if clicking ‘Change details’ to edit number of guests and/or add-ons) through the edit booking modal
   */
    editType: unknown[]
    /**
   * whether the user who is reviewing the change request to action is a host or not
   */
    isHost: boolean
    /**
   * The new dates that were selected once the user made a request to book
   */
    newDates: string
    /**
   * The suggested new payout after a user made an request to edit
   */
    newPayout: number
    /**
   * The total of the booking after a user made a request to edit
   */
    newTotal: number
    /**
   * The dates that were selected before a user made a request to edit
   */
    oldDates: string
    /**
   * The payout before the user made a request to edit
   */
    oldPayout: number
    /**
   * The total of the booking before a user made a request to edit
   */
    oldTotal: number

  }
  'EditBookingSubmitted': {

    /**
   * The unique ID associated with the active booking
   */
    bookingId: number
    /**
   * The current booking stage before an edit is being made/requested
   */
    bookingStage: number
    /**
   * The booking type that is attached to the booking at to the time they make a selection. For example, [Normal, Instant, Invoice]
   */
    bookingType: unknown[]
    /**
   * The ISO 4217 currency code displayed
   */
    currency: string
    /**
   * Whether the user selected either ‘dates’ (if clicking ‘Change dates’) or ‘details’ (if clicking ‘Change details’ to edit number of guests and/or add-ons) through the edit booking modal
   */
    editType: string
    /**
   * whether or not the user who submitted the change request is a host or not
   */
    isHost: boolean
    /**
   * The new addons selected at the time of confirming the booking edit
   */
    newAddonsSelected?: unknown[]
    /**
   * The number of Adults listed at the time of editing
   */
    newAdults?: number
    /**
   * The number of children listed at the time of editing
   */
    newChildren?: number
    /**
   * The updated trip end date of the booking at the time of submitting the request to edit booking
   */
    newEndDate?: string
    /**
   * The value of whether pets will be taken on the trip or not at the time of editing
   */
    newPets?: boolean
    /**
   * The quoted rental price for total nights only that is displayed when user submits an edit
   */
    newRentalPrice?: number
    /**
   * The updated trip start date of the booking at the time of submitting the request to edit booking
   */
    newStartDate?: string
    /**
   * The total dollar value for the entire rental that is displayed before an edit is being made/requested
   */
    newTotalPrice?: number
    /**
   * The protection plan, either ‘Standard’ or ‘Premium’, that have been indicated at the time of editing
   */
    protectionPlan: string
    receiverUserId: number
    /**
   * If the user opted in for roadside assistance at the time of editing
   */
    roadsideAssistance: boolean
    /**
   * The unique ID associated with the RV.
   */
    rvId: string

  }
  'EditBookingSubmitted [v1]': {

    /**
   * The unique ID associated with the active booking
   */
    bookingId: number
    /**
   * The current booking stage before an edit is being made/requested
   */
    bookingStage: number
    /**
   * The booking type that is attached to the booking at to the time they make a selection. For example, [Normal, Instant, Invoice]
   */
    bookingType: unknown[]
    /**
   * The ISO 4217 currency code displayed
   */
    currency: string
    /**
   * Whether the user selected either ‘dates’ (if clicking ‘Change dates’) or ‘details’ (if clicking ‘Change details’ to edit number of guests and/or add-ons) through the edit booking modal
   */
    editType: string
    /**
   * whether or not the user who submitted the change request is a host or not
   */
    isHost: boolean
    /**
   * The new addons selected at the time of confirming the booking edit
   */
    newAddonsSelected?: unknown[]
    /**
   * The number of Adults listed at the time of editing
   */
    newAdults?: number
    /**
   * The number of children listed at the time of editing
   */
    newChildren?: number
    /**
   * The updated trip end date of the booking at the time of submitting the request to edit booking
   */
    newEndDate?: string
    /**
   * The value of whether pets will be taken on the trip or not at the time of editing
   */
    newPets?: boolean
    /**
   * The quoted rental price for total nights only that is displayed when user submits an edit
   */
    newRentalPrice?: number
    /**
   * The updated trip start date of the booking at the time of submitting the request to edit booking
   */
    newStartDate?: string
    /**
   * The total dollar value for the entire rental that is displayed before an edit is being made/requested
   */
    newTotalPrice?: number
    /**
   * The protection plan, either ‘Standard’ or ‘Premium’, that have been indicated at the time of editing
   */
    protectionPlan: string
    receiverUserId: number
    /**
   * If the user opted in for roadside assistance at the time of editing
   */
    roadsideAssistance: boolean
    /**
   * The unique ID associated with the RV.
   */
    rvId: string

  }
  'EditBookingSubmittedSuccessful': {

    /**
   * The unique ID associated with the active booking
   */
    bookingId: number
    /**
   * The current booking stage before an edit is being made/requested
   */
    bookingStage: number
    /**
   * The booking type that is attached to the booking at to the time they make a selection. For example, [Normal, Instant, Invoice]
   */
    bookingType: unknown[]
    /**
   * The ISO 4217 currency code displayed
   */
    currency: string
    /**
   * Whether the user selected either ‘dates’ (if clicking ‘Change dates’) or ‘details’ (if clicking ‘Change details’ to edit number of guests and/or add-ons) through the edit booking modal
   */
    editType: string
    /**
   * The new addons selected at the time of confirming the booking edit
   */
    newAddonsSelected: unknown[]
    /**
   * The number of Adults listed at the time of editing
   */
    newAdults: number
    /**
   * The number of children listed at the time of editing
   */
    newChildren: number
    /**
   * The updated trip end date of the booking at the time of successfully submitting the request for edit booking
   */
    newEndDate: string
    /**
   * The value of whether pets will be taken on the trip or not at the time of editing
   */
    newPets: number
    /**
   * The quoted rental price for total nights only that is displayed when user submits an edit
   */
    newRentalPrice: number
    /**
   * The updated trip start date of the booking at the time of successfully  submitting the request for edit booking
   */
    newStartDate: string
    /**
   * The total dollar value for the entire rental that is displayed before an edit is being made/requested
   */
    newTotalPrice: number
    /**
   * The protection plan, either ‘Standard’ or ‘Premium’, that have been indicated at the time of editing
   */
    protectionPlan: string
    /**
   * Either motorhome or travel trailer
   */
    rentalType: string
    /**
   * If the user opted in for roadside assistance
   */
    roadsideAssistance: boolean

  }
  'EditBookingSubmittedSuccessful [v1]': {

    /**
   * The unique ID associated with the active booking
   */
    bookingId: number
    /**
   * The current booking stage before an edit is being made/requested
   */
    bookingStage: number
    /**
   * The booking type that is attached to the booking at to the time they make a selection. For example, [Normal, Instant, Invoice]
   */
    bookingType: unknown[]
    /**
   * The ISO 4217 currency code displayed
   */
    currency: string
    /**
   * Whether the user selected either ‘dates’ (if clicking ‘Change dates’) or ‘details’ (if clicking ‘Change details’ to edit number of guests and/or add-ons) through the edit booking modal
   */
    editType: string
    /**
   * The new addons selected at the time of confirming the booking edit
   */
    newAddonsSelected: unknown[]
    /**
   * The number of Adults listed at the time of editing
   */
    newAdults: number
    /**
   * The number of children listed at the time of editing
   */
    newChildren: number
    /**
   * The updated trip end date of the booking at the time of successfully submitting the request for edit booking
   */
    newEndDate: string
    /**
   * The value of whether pets will be taken on the trip or not at the time of editing
   */
    newPets: number
    /**
   * The quoted rental price for total nights only that is displayed when user submits an edit
   */
    newRentalPrice: number
    /**
   * The updated trip start date of the booking at the time of successfully  submitting the request for edit booking
   */
    newStartDate: string
    /**
   * The total dollar value for the entire rental that is displayed before an edit is being made/requested
   */
    newTotalPrice: number
    /**
   * The protection plan, either ‘Standard’ or ‘Premium’, that have been indicated at the time of editing
   */
    protectionPlan: string
    /**
   * Either motorhome or travel trailer
   */
    rentalType: string
    /**
   * If the user opted in for roadside assistance
   */
    roadsideAssistance: boolean

  }
  'EditListingSaved': {

    /**
   * The current state of the RV’s published-ness.
   */
    isPublished: boolean
    /**
   * The page of the listing editing experience the user has saved edits on, except calendar.preferences|basics|details|pricing|photos|addons|earnmore|insurances
   */
    listingPage: 'addons' | 'basics' | 'details' | 'earnmore' | 'insurance' | 'photos' | 'preferences' | 'pricing'
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId: string

  }
  'EditListingSaved [v1]': {

    /**
   * The current state of the RV’s published-ness.
   */
    isPublished: boolean
    /**
   * The page of the listing editing experience the user has saved edits on, except calendar.preferences|basics|details|pricing|photos|addons|earnmore|insurances
   */
    listingPage: 'addons' | 'basics' | 'details' | 'earnmore' | 'insurance' | 'photos' | 'preferences' | 'pricing'
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId: string

  }
  'EditListingViewed': {

    /**
   * The current state of the RV’s snoozed-ness.
   */
    IsSuspended?: boolean
    /**
   * The current state of the RV’s published-ness.
   */
    isPublished?: boolean
    /**
   * The page of the listing editing experience the user is viewing, except calendar.
   */
    listingPage?:
      | 'addons'
      | 'basics'
      | 'calendar'
      | 'details'
      | 'earnmore'
      | 'insurance'
      | 'photos'
      | 'preferences'
      | 'pricing'
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId: string

  }
  'EditListingViewed [v1]': {

    /**
   * The current state of the RV’s snoozed-ness.
   */
    IsSuspended?: boolean
    /**
   * The current state of the RV’s published-ness.
   */
    isPublished?: boolean
    /**
   * The page of the listing editing experience the user is viewing, except calendar.
   */
    listingPage?: 'addons' | 'basics' | 'details' | 'earnmore' | 'insurance' | 'photos' | 'preferences' | 'pricing'
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId: string

  }
  'EditListingViewed [v2]': {

    /**
   * The current state of the RV’s snoozed-ness.
   */
    IsSuspended?: boolean
    /**
   * The current state of the RV’s published-ness.
   */
    isPublished?: boolean
    /**
   * The page of the listing editing experience the user is viewing, except calendar.
   */
    listingPage?:
      | 'addons'
      | 'basics'
      | 'calendar'
      | 'details'
      | 'earnmore'
      | 'insurance'
      | 'photos'
      | 'preferences'
      | 'pricing'
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId: string

  }
  'EditTripProtectionClicked': {

    /**
   * The add-ons included in the request before an edit is being made/requested
   */
    addonsSelected: unknown[]
    /**
   * The number of adults that have been indicated to be going on the trip before an edit is being made/requested
   */
    adults: number
    /**
   * The unique ID associated with the active booking
   */
    bookingId: number
    /**
   * The current booking stage before an edit is being made/requested
   */
    bookingStage: number
    /**
   * The number of children that have been indicated to be going on the trip  before an edit is being made/requested
   */
    children: number
    /**
   * The ISO 4217 currency code displayed
   */
    currency: string
    /**
   * If the user has indicated they will be taking pets or not before an edit is being made/requested
   */
    pets: number
    /**
   * The protection plan, either ‘Standard’ or ‘Premium’, that have been indicated before an edit is being made/requested
   */
    protectionPlan: string
    /**
   * If the user opted in for roadside assistance before an edit is being made/requested
   */
    roadsideAssistance: boolean
    /**
   * The total dollar value for the entire rental that is displayed before an edit is being made/requested
   */
    totalPrice: number
    /**
   * The end date of the booking/request before an edit is being made/reviewed
   */
    tripEndDate: string
    /**
   * The start date of the booking/request before an edit is being made/requested
   */
    tripStartDate: string

  }
  'EditTripProtectionClicked [v1]': {

    /**
   * The add-ons included in the request before an edit is being made/requested
   */
    addonsSelected: unknown[]
    /**
   * The number of adults that have been indicated to be going on the trip before an edit is being made/requested
   */
    adults: number
    /**
   * The unique ID associated with the active booking
   */
    bookingId: number
    /**
   * The current booking stage before an edit is being made/requested
   */
    bookingStage: number
    /**
   * The number of children that have been indicated to be going on the trip  before an edit is being made/requested
   */
    children: number
    /**
   * The ISO 4217 currency code displayed
   */
    currency: string
    /**
   * If the user has indicated they will be taking pets or not before an edit is being made/requested
   */
    pets: number
    /**
   * The protection plan, either ‘Standard’ or ‘Premium’, that have been indicated before an edit is being made/requested
   */
    protectionPlan: string
    /**
   * If the user opted in for roadside assistance before an edit is being made/requested
   */
    roadsideAssistance: boolean
    /**
   * The total dollar value for the entire rental that is displayed before an edit is being made/requested
   */
    totalPrice: number
    /**
   * The end date of the booking/request before an edit is being made/reviewed
   */
    tripEndDate: string
    /**
   * The start date of the booking/request before an edit is being made/requested
   */
    tripStartDate: string

  }
  'EditTripProtectionExited': {

    /**
   * The current selection of added add-ons included at the time user exits the flow
   */
    addonsSelected: unknown[]
    /**
   * The number of Adults listed at the time user exits the flow
   */
    adults: number
    /**
   * The unique ID associated with the active booking
   */
    bookingId: number
    /**
   * The current booking stage  at the time user exits the flow
   */
    bookingStage: number
    /**
   * The booking type that is attached to the booking at the time user exits the flow For example, [Normal, Instant, Invoice]
   */
    bookingType: unknown[]
    /**
   * The number of children listed  at the time user exits the flow
   */
    children: number
    /**
   * The ISO 4217 currency code displayed
   */
    currency: string
    /**
   * The value of whether pets will be taken on the trip or not at the time user exits the flow
   */
    pets: number
    /**
   * The protection plan, either ‘Standard’ or ‘Premium’, at the time user exits the flow
   */
    protectionPlan: string
    /**
   * Either motorhome or travel trailer
   */
    rentalType: string
    /**
   * If the user opted in for roadside assistance at the time user exits the flow
   */
    roadsideAssistance: boolean
    /**
   * The total dollar value for the entire rental  at the time user exits the flow
   */
    totalPrice: number
    /**
   * The current end date of the booking at the time user exits the flow
   */
    tripEndDate: string
    /**
   * The current start date of the booking at the time user exits the flow
   */
    tripStartDate: string

  }
  'EditTripProtectionExited [v1]': {

    /**
   * The current selection of added add-ons included at the time user exits the flow
   */
    addonsSelected: unknown[]
    /**
   * The number of Adults listed at the time user exits the flow
   */
    adults: number
    /**
   * The unique ID associated with the active booking
   */
    bookingId: number
    /**
   * The current booking stage  at the time user exits the flow
   */
    bookingStage: number
    /**
   * The booking type that is attached to the booking at the time user exits the flow For example, [Normal, Instant, Invoice]
   */
    bookingType: unknown[]
    /**
   * The number of children listed  at the time user exits the flow
   */
    children: number
    /**
   * The ISO 4217 currency code displayed
   */
    currency: string
    /**
   * The value of whether pets will be taken on the trip or not at the time user exits the flow
   */
    pets: number
    /**
   * The protection plan, either ‘Standard’ or ‘Premium’, at the time user exits the flow
   */
    protectionPlan: string
    /**
   * Either motorhome or travel trailer
   */
    rentalType: string
    /**
   * If the user opted in for roadside assistance at the time user exits the flow
   */
    roadsideAssistance: boolean
    /**
   * The total dollar value for the entire rental  at the time user exits the flow
   */
    totalPrice: number
    /**
   * The current end date of the booking at the time user exits the flow
   */
    tripEndDate: string
    /**
   * The current start date of the booking at the time user exits the flow
   */
    tripStartDate: string

  }
  'EditTripProtectionReviewed': {

    /**
   * The current selection of added add-ons included at the time of editing
   */
    addonsSelected: unknown[]
    /**
   * The number of Adults listed at the time of editing
   */
    adults: number
    /**
   * The unique ID associated with the active booking
   */
    bookingId: number
    /**
   * The current booking stage before an edit is being made/requested
   */
    bookingStage: number
    /**
   * The booking type that is attached to the booking at to the time they make a selection. For example, [Normal, Instant, Invoice]
   */
    bookingType: unknown[]
    /**
   * The number of children listed at the time of editing
   */
    children: number
    /**
   * The ISO 4217 currency code displayed
   */
    currency: string
    /**
   * The value of whether pets will be taken on the trip or not at the time of editing
   */
    pets: number
    /**
   * The protection plan, either ‘Standard’ or ‘Premium’, that have been indicated at the time of editing
   */
    protectionPlan: string
    /**
   * Either motorhome or travel trailer
   */
    rentalType: string
    /**
   * If the user opted in for roadside assistance at the time of editing
   */
    roadsideAssistance: boolean
    /**
   * The total dollar value for the entire rental that is displayed before an edit is being made/requested
   */
    totalPrice: number
    /**
   * The end date of the booking/request before an edit is being made/reviewed
   */
    tripEndDate: string
    /**
   * The current start date of the booking at the time of editing
   */
    tripStartDate: string

  }
  'EditTripProtectionReviewed [v1]': {

    /**
   * The current selection of added add-ons included at the time of editing
   */
    addonsSelected: unknown[]
    /**
   * The number of Adults listed at the time of editing
   */
    adults: number
    /**
   * The unique ID associated with the active booking
   */
    bookingId: number
    /**
   * The current booking stage before an edit is being made/requested
   */
    bookingStage: number
    /**
   * The booking type that is attached to the booking at to the time they make a selection. For example, [Normal, Instant, Invoice]
   */
    bookingType: unknown[]
    /**
   * The number of children listed at the time of editing
   */
    children: number
    /**
   * The ISO 4217 currency code displayed
   */
    currency: string
    /**
   * The value of whether pets will be taken on the trip or not at the time of editing
   */
    pets: number
    /**
   * The protection plan, either ‘Standard’ or ‘Premium’, that have been indicated at the time of editing
   */
    protectionPlan: string
    /**
   * Either motorhome or travel trailer
   */
    rentalType: string
    /**
   * If the user opted in for roadside assistance at the time of editing
   */
    roadsideAssistance: boolean
    /**
   * The total dollar value for the entire rental that is displayed before an edit is being made/requested
   */
    totalPrice: number
    /**
   * The end date of the booking/request before an edit is being made/reviewed
   */
    tripEndDate: string
    /**
   * The current start date of the booking at the time of editing
   */
    tripStartDate: string

  }
  'EditTripProtectionSubmitted': {

    /**
   * The current selection of added add-ons included at the time of editing
   */
    addonsSelected: unknown[]
    /**
   * The number of Adults listed at the time of editing
   */
    adults: number
    /**
   * The unique ID associated with the active booking
   */
    bookingId: number
    /**
   * The current booking stage before an edit is being made/requested
   */
    bookingStage: number
    /**
   * The booking type that is attached to the booking at to the time they make a selection. For example, [Normal, Instant, Invoice]
   */
    bookingType: unknown[]
    /**
   * The number of children listed at the time of editing
   */
    children: number
    /**
   * The ISO 4217 currency code displayed
   */
    currency: string
    /**
   * The updated protection plan, either ‘Standard’ or ‘Premium’, when submitting the edit
   */
    newProtectionPlan: string
    /**
   * The updated status on whether user has opted in for roadside assistance when submitting the edit
   */
    newRoadsideAssistance: boolean
    /**
   * The new total dollar value for the entire rental that is displayed at the time of submitting the booking edit
   */
    newTotalPrice: number
    /**
   * The value of whether pets will be taken on the trip or not at the time of editing
   */
    pets: number
    /**
   * Either motorhome or travel trailer
   */
    rentalType: string
    /**
   * The end date of the booking/request before an edit is being made/reviewed
   */
    tripEndDate: string
    /**
   * The current start date of the booking at the time of editing
   */
    tripStartDate: string

  }
  'EditTripProtectionSubmitted [v1]': {

    /**
   * The current selection of added add-ons included at the time of editing
   */
    addonsSelected: unknown[]
    /**
   * The number of Adults listed at the time of editing
   */
    adults: number
    /**
   * The unique ID associated with the active booking
   */
    bookingId: number
    /**
   * The current booking stage before an edit is being made/requested
   */
    bookingStage: number
    /**
   * The booking type that is attached to the booking at to the time they make a selection. For example, [Normal, Instant, Invoice]
   */
    bookingType: unknown[]
    /**
   * The number of children listed at the time of editing
   */
    children: number
    /**
   * The ISO 4217 currency code displayed
   */
    currency: string
    /**
   * The updated protection plan, either ‘Standard’ or ‘Premium’, when submitting the edit
   */
    newProtectionPlan: string
    /**
   * The updated status on whether user has opted in for roadside assistance when submitting the edit
   */
    newRoadsideAssistance: boolean
    /**
   * The new total dollar value for the entire rental that is displayed at the time of submitting the booking edit
   */
    newTotalPrice: number
    /**
   * The value of whether pets will be taken on the trip or not at the time of editing
   */
    pets: number
    /**
   * Either motorhome or travel trailer
   */
    rentalType: string
    /**
   * The end date of the booking/request before an edit is being made/reviewed
   */
    tripEndDate: string
    /**
   * The current start date of the booking at the time of editing
   */
    tripStartDate: string

  }
  'EditTripProtectionSubmittedSuccessful': {

    /**
   * The current selection of added add-ons included at the time of editing
   */
    addonsSelected: unknown[]
    /**
   * The number of Adults listed at the time of editing
   */
    adults: number
    /**
   * The unique ID associated with the active booking
   */
    bookingId: number
    /**
   * The current booking stage before an edit is being made/requested
   */
    bookingStage: number
    /**
   * The booking type that is attached to the booking at to the time they make a selection. For example, [Normal, Instant, Invoice]
   */
    bookingType: unknown[]
    /**
   * The number of children listed at the time of editing
   */
    children: number
    /**
   * The ISO 4217 currency code displayed
   */
    currency: string
    /**
   * The updated protection plan, either ‘Standard’ or ‘Premium’, when successfully submitting the edit
   */
    newProtectionPlan: string
    /**
   * The updated status on whether guest has opted in for roadside assistance after guest has successfully submitted the edit
   */
    newRoadsideAssistance: boolean
    /**
   * The new total dollar value for the entire rental that is displayed after the guest has successfully submitted the edit
   */
    newTotalPrice: number
    /**
   * The value of whether pets will be taken on the trip or not at the time of editing
   */
    pets: number
    /**
   * Either motorhome or travel trailer
   */
    rentalType: string
    /**
   * The end date of the booking/request before an edit is being made/reviewed
   */
    tripEndDate: string
    /**
   * The current start date of the booking at the time of editing
   */
    tripStartDate: string

  }
  'EditTripProtectionSubmittedSuccessful [v1]': {

    /**
   * The current selection of added add-ons included at the time of editing
   */
    addonsSelected: unknown[]
    /**
   * The number of Adults listed at the time of editing
   */
    adults: number
    /**
   * The unique ID associated with the active booking
   */
    bookingId: number
    /**
   * The current booking stage before an edit is being made/requested
   */
    bookingStage: number
    /**
   * The booking type that is attached to the booking at to the time they make a selection. For example, [Normal, Instant, Invoice]
   */
    bookingType: unknown[]
    /**
   * The number of children listed at the time of editing
   */
    children: number
    /**
   * The ISO 4217 currency code displayed
   */
    currency: string
    /**
   * The updated protection plan, either ‘Standard’ or ‘Premium’, when successfully submitting the edit
   */
    newProtectionPlan: string
    /**
   * The updated status on whether guest has opted in for roadside assistance after guest has successfully submitted the edit
   */
    newRoadsideAssistance: boolean
    /**
   * The new total dollar value for the entire rental that is displayed after the guest has successfully submitted the edit
   */
    newTotalPrice: number
    /**
   * The value of whether pets will be taken on the trip or not at the time of editing
   */
    pets: number
    /**
   * Either motorhome or travel trailer
   */
    rentalType: string
    /**
   * The end date of the booking/request before an edit is being made/reviewed
   */
    tripEndDate: string
    /**
   * The current start date of the booking at the time of editing
   */
    tripStartDate: string

  }
  'ExperimentViewed': {

    /**
   * The experiment's human-readable name
   */
    experimentName: string
    /**
   * The variation's human-readable name
   */
    variantName: string

  }
  'ExperimentViewed [v1]': {

    /**
   * The experiment's human-readable name
   */
    experimentName: string
    /**
   * The variation's human-readable name
   */
    variantName: string

  }
  'ExternalLinkClicked': {

    /**
   * The name of the external link the user clicks on
   */
    cta: string
    /**
   * The URL that the user was sent to
   */
    externalLink: string
    /**
   * if owner or not
   */
    isOwner?: boolean | null
    /**
   * The source screen that came before their next action.
   */
    pageSource: string

  }
  'ExternalLinkClicked [v1]': {

    /**
   * The name of the external link the user clicks on
   */
    cta: string
    /**
   * The URL that the user was sent to
   */
    externalLink: string
    /**
   * if owner or not
   */
    isOwner?: boolean
    /**
   * The source screen that came before their next action.
   */
    pageSource: string

  }
  'ExternalLinkClicked [v2]': {

    /**
   * The name of the external link the user clicks on
   */
    cta: string
    /**
   * The URL that the user was sent to
   */
    externalLink: string
    /**
   * if owner or not
   */
    isOwner?: boolean | null
    /**
   * The source screen that came before their next action.
   */
    pageSource: string

  }
  'EzyMatchReceived': {

    /**
   * The string that the Google Maps API returns as the name of the destination
   */
    destination?: string
    /**
   * The date that the requested booking is to end.
   */
    endDate: string
    /**
   * Whether the trip length is shorter than the RV’s minimum nights
   */
    isShortStay: boolean
    /**
   * The city that the listing is based in.
   */
    listingCity?: string
    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    listingCountry?: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * The region the listing is based in
   */
    listingRegion?: string
    /**
   * Rental category of vehicle booked.
   */
    listingType: string
    /**
   * The unique ID associated with the booking that triggered the ezy match to be sent to this host.
   */
    parentBookingId: number
    /**
   * The ID of the guest associated with the potential ezymatch
   */
    receiverUserId: number
    /**
   * The unique ID associated with an RV.
   */
    rvId: string
    /**
   * Specific RV type of vehicle booked.
   */
    rvType: string
    /**
   * The date that the requested booking is to begin.
   */
    startDate: string
    /**
   * Difference between start date and the current date. (how many days out does the trip start)
   */
    tripLeadTime: number
    /**
   * Difference between start date and end date. Effectively, the number of nights for a trip.
   */
    tripLength: number

  }
  'EzyMatchReceived [v1]': {

    /**
   * The string that the Google Maps API returns as the name of the destination
   */
    destination?: string
    /**
   * The date that the requested booking is to end.
   */
    endDate: string
    /**
   * Whether the trip length is shorter than the RV’s minimum nights
   */
    isShortStay: boolean
    /**
   * The city that the listing is based in.
   */
    listingCity?: string
    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    listingCountry?: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * The region the listing is based in
   */
    listingRegion?: string
    /**
   * Rental category of vehicle booked.
   */
    listingType: string
    /**
   * The unique ID associated with the booking that triggered the ezy match to be sent to this host.
   */
    parentBookingId: number
    /**
   * The ID of the guest associated with the potential ezymatch
   */
    receiverUserId: number
    /**
   * The unique ID associated with an RV.
   */
    rvId: string
    /**
   * Specific RV type of vehicle booked.
   */
    rvType: string
    /**
   * The date that the requested booking is to begin.
   */
    startDate: string
    /**
   * Difference between start date and the current date. (how many days out does the trip start)
   */
    tripLeadTime: number
    /**
   * Difference between start date and end date. Effectively, the number of nights for a trip.
   */
    tripLength: number

  }
  'FavoritesPageViewed': {

    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country where the host is located
   */
    accountCountry?: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * the cta the user clicked on to get to this screen. (ie. was it from the inbox message, or the bookings/trips card or host dashboard card, etc. )
   */
    cta?: string
    /**
   * the number of favorite lists created
   */
    hasFavoriteList?: {}
    /**
   * whether or not there are RVs added on this page as favorites
   */
    hasFavoriteRv?: boolean
    /**
   * The number of lists that are added on the page (favorited)
   */
    numberOfFavoriteLists?: number
    /**
   * The number of RVs that are on the page (favorited)
   */
    numberOfFavoriteRv?: number
    /**
   * The source screen that came before their next action if applicable
   */
    pageSource?: string
    /**
   * The user ID of the host viewing the bookings page
   */
    userId?: number

  }
  'FavoritesPageViewed [v1]': {

    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country where the host is located
   */
    accountCountry?: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * the cta the user clicked on to get to this screen. (ie. was it from the inbox message, or the bookings/trips card or host dashboard card, etc. )
   */
    cta?: string
    /**
   * the number of favorite lists created
   */
    hasFavoriteList?: unknown[]
    /**
   * whether or not there are RVs added on this page as favorites
   */
    hasFavoriteRv?: boolean
    /**
   * The number of lists that are added on the page (favorited)
   */
    numberOfFavoriteLists?: number
    /**
   * The number of RVs that are on the page (favorited)
   */
    numberOfFavoriteRv?: number
    /**
   * The source screen that came before their next action if applicable
   */
    pageSource?: string
    /**
   * The user ID of the host viewing the bookings page
   */
    userId?: number

  }
  'FavoritesPageViewed [v2]': {

    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country where the host is located
   */
    accountCountry?: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * the cta the user clicked on to get to this screen. (ie. was it from the inbox message, or the bookings/trips card or host dashboard card, etc. )
   */
    cta?: string
    /**
   * the number of favorite lists created
   */
    hasFavoriteList?: {}
    /**
   * whether or not there are RVs added on this page as favorites
   */
    hasFavoriteRv?: boolean
    /**
   * The number of lists that are added on the page (favorited)
   */
    numberOfFavoriteLists?: number
    /**
   * The number of RVs that are on the page (favorited)
   */
    numberOfFavoriteRv?: number
    /**
   * The source screen that came before their next action if applicable
   */
    pageSource?: string
    /**
   * The user ID of the host viewing the bookings page
   */
    userId?: number

  }
  'ForTodayCardClicked': {

    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    accountCountry?: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * The card name that hte host clicked on.Array of key values of the card type, name, total, and amount that is mentioned on the card for ex: booking request card for 6 requests with the total payout value of $xxx).
   */
    forTodayCardName?: {}
    /**
   * The source screen that came before their next action if applicable
   */
    pageSource?: string
    /**
   * The user ID of the user who clicked on the card
   */
    userId: number

  }
  'ForTodayCardClicked [v1]': {

    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    accountCountry?: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * The card name that hte host clicked on.Array of key values of the card type, name, total, and amount that is mentioned on the card for ex: booking request card for 6 requests with the total payout value of $xxx).
   */
    forTodayCardName?: {}
    /**
   * The source screen that came before their next action if applicable
   */
    pageSource?: string
    /**
   * The user ID of the user who clicked on the card
   */
    userId: number

  }
  'FullPaymentReminder': {

    /**
   * The unique ID associated with the booking request.
   */
    bookingId: number
    /**
   * The state of the booking as is represented on the backend.
   */
    bookingState?: number
    /**
   * The method through which the booking was created.
   */
    bookingType?: 'enquiry' | 'ezmatch' | 'instant' | 'normal'
    /**
   * The ISO 4217 currency code that is displayed.
   */
    currency: 'AUD' | 'CAD' | 'EUR' | 'GBP' | 'NZD' | 'USD'
    /**
   * The date on which the payment (for which the reminder is for) will be charged.
   */
    paymentDate: string
    /**
   * The total remaining payment left on this booking that should be charged through Stripe. This will always be 75% of rental amount plus security deposit since at this point, the initial payment should have been paid. This amount disregards any previous failed payment amounts.
   */
    remainingAmount: number
    /**
   * The amount that will be charged for the next payment for which the reminder is for. This amount is shown on the payment reminder sent to Guests. This amount disregards any previous failed payment amounts.
   */
    reminderAmount: number
    /**
   * The total amount that should be charged through Stripe on this booking until start of trip (this amount disregards Guests editing booking after this reminder or during trip). This will be total rental amount plus security deposit. This amount will always be the same across all payment reminders.
   */
    totalChargingAmount: number
    /**
   * The user ID of the the user (= Renter = Guest)
   */
    userId: number

  }
  'FullPaymentReminder [v1]': {

    /**
   * The unique ID associated with the booking request.
   */
    bookingId: number
    /**
   * The state of the booking as is represented on the backend.
   */
    bookingState?: number
    /**
   * The method through which the booking was created.
   */
    bookingType?: 'enquiry' | 'ezmatch' | 'instant' | 'normal'
    /**
   * The ISO 4217 currency code that is displayed.
   */
    currency: string
    /**
   * The date on which the payment (for which the reminder is for) will be charged.
   */
    paymentDate: string
    /**
   * The total remaining payment left on this booking that should be charged through Stripe. This will always be 75% of rental amount plus security deposit since at this point, the initial payment should have been paid. This amount disregards any previous failed payment amounts.
   */
    remainingAmount: number
    /**
   * The amount that will be charged for the next payment for which the reminder is for. This amount is shown on the payment reminder sent to Guests. This amount disregards any previous failed payment amounts.
   */
    reminderAmount: number
    /**
   * The total amount that should be charged through Stripe on this booking until start of trip (this amount disregards Guests editing booking after this reminder or during trip). This will be total rental amount plus security deposit. This amount will always be the same across all payment reminders.
   */
    totalChargingAmount: number
    /**
   * The user ID of the the user (= Renter = Guest)
   */
    userId: number

  }
  'FullPaymentReminder [v2]': {

    /**
   * The unique ID associated with the booking request.
   */
    bookingId: number
    /**
   * The state of the booking as is represented on the backend.
   */
    bookingState?: number
    /**
   * The method through which the booking was created.
   */
    bookingType?: 'enquiry' | 'ezmatch' | 'instant' | 'normal'
    /**
   * The ISO 4217 currency code that is displayed.
   */
    currency: 'AUD' | 'CAD' | 'EUR' | 'GBP' | 'NZD' | 'USD'
    /**
   * The date on which the payment (for which the reminder is for) will be charged.
   */
    paymentDate: string
    /**
   * The total remaining payment left on this booking that should be charged through Stripe. This will always be 75% of rental amount plus security deposit since at this point, the initial payment should have been paid. This amount disregards any previous failed payment amounts.
   */
    remainingAmount: number
    /**
   * The amount that will be charged for the next payment for which the reminder is for. This amount is shown on the payment reminder sent to Guests. This amount disregards any previous failed payment amounts.
   */
    reminderAmount: number
    /**
   * The total amount that should be charged through Stripe on this booking until start of trip (this amount disregards Guests editing booking after this reminder or during trip). This will be total rental amount plus security deposit. This amount will always be the same across all payment reminders.
   */
    totalChargingAmount: number
    /**
   * The user ID of the the user (= Renter = Guest)
   */
    userId: number

  }
  'GuestRequestMoneyEscalated': {

    /**
   * The unique booking number associated to the request money request the host is completing.
   */
    bookingId: number
    /**
   * The ID of the host that received the money request
   */
    ownerID: number
    /**
   * The total amount requested by the guest
   */
    totalRequestedCharges: number

  }
  'GuestRequestMoneyEscalated [v1]': {

    /**
   * The unique booking number associated to the request money request the host is completing.
   */
    bookingId: number
    /**
   * The ID of the host that received the money request
   */
    ownerID: number
    /**
   * The total amount requested by the guest
   */
    totalRequestedCharges: number

  }
  'GuestRequestMoneySent': {

    /**
   * The unique booking number associated to the request money request the host is completing.
   */
    bookingId: number
    /**
   * The ID of the host that receives the money request
   */
    ownerId: number
    /**
   * The total amount requested by the guest
   */
    totalRequestedCharges: number

  }
  'GuestRequestMoneySent [v1]': {

    /**
   * The unique booking number associated to the request money request the host is completing.
   */
    bookingId: number
    /**
   * The ID of the host that receives the money request
   */
    ownerId: number
    /**
   * The total amount requested by the guest
   */
    totalRequestedCharges: number

  }
  'HelpCenterClicked': {

    /**
   * The source screen that came before their next action.
   */
    pageSource: string

  }
  'HelpCenterClicked [v1]': {

    /**
   * The source screen that came before their next action.
   */
    pageSource: string

  }
  'HostAvailabilityUpdated': {

    /**
   * The new advanced notice to book the RV - this is in days
   */
    advanceNotice?: number
    /**
   * The availability preference that the host updated.
   */
    availabilityPreference: string
    /**
   * The new availability window allowed to book the RV - this is in months
   */
    availabilityWindow?: number
    /**
   * The number of new available days
   */
    availableDaysCount?: number
    /**
   * The new time window selected.
   */
    dropoffTimeWindow?: unknown[]
    /**
   * The current state of the RV’s published-ness.
   */
    isPublished: boolean
    /**
   * Whether or not the user is a Superhost
   */
    isSuperhost: boolean
    /**
   * The new minimum number of nights selected
   */
    minimumNights?: number
    /**
   * The new time window selected.
   */
    pickupTimeWindow?: unknown[]
    /**
   * The number of nights selected by the host when setting their preparation time preference.
   */
    preparationNightsCount?: number
    /**
   * The time window that the buffer time applies to for bookings, i.e. before, after, or both before and after.
   */
    preparationTimeWindow?: string
    /**
   * The new rental season applied
   */
    rentalSeason?: unknown[]
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId: string
    /**
   * The user ID
   */
    userId: number

  }
  'HostAvailabilityUpdated [v1]': {

    /**
   * The new advanced notice to book the RV - this is in days
   */
    advanceNotice?: number
    /**
   * The availability preference that the host updated.
   */
    availabilityPreference: string
    /**
   * The new availability window allowed to book the RV - this is in months
   */
    availabilityWindow?: number
    /**
   * The number of new available days
   */
    availableDaysCount?: string
    /**
   * The new time window selected.
   */
    dropoffTimeWindow?: unknown[]
    /**
   * The current state of the RV’s published-ness.
   */
    isPublished: boolean
    /**
   * Whether or not the user is a Superhost
   */
    isSuperhost: boolean
    /**
   * The new minimum number of nights selected
   */
    minimumNights?: number
    /**
   * The new time window selected.
   */
    pickupTimeWindow?: unknown[]
    /**
   * The new rental season applied
   */
    rentalSeason?: unknown[]
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId: string
    /**
   * The user ID
   */
    userId: number

  }
  'HostAvailabilityUpdated [v2]': {

    /**
   * The new advanced notice to book the RV - this is in days
   */
    advanceNotice?: number
    /**
   * The availability preference that the host updated.
   */
    availabilityPreference: string
    /**
   * The new availability window allowed to book the RV - this is in months
   */
    availabilityWindow?: number
    /**
   * The number of new available days
   */
    availableDaysCount?: number
    /**
   * The new time window selected.
   */
    dropoffTimeWindow?: unknown[]
    /**
   * The current state of the RV’s published-ness.
   */
    isPublished: boolean
    /**
   * Whether or not the user is a Superhost
   */
    isSuperhost: boolean
    /**
   * The new minimum number of nights selected
   */
    minimumNights?: number
    /**
   * The new time window selected.
   */
    pickupTimeWindow?: unknown[]
    /**
   * The new rental season applied
   */
    rentalSeason?: unknown[]
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId: string
    /**
   * The user ID
   */
    userId: number

  }
  'HostAvailabilityUpdated [v3]': {

    /**
   * The new advanced notice to book the RV - this is in days
   */
    advanceNotice?: number
    /**
   * The availability preference that the host updated.
   */
    availabilityPreference: string
    /**
   * The new availability window allowed to book the RV - this is in months
   */
    availabilityWindow?: number
    /**
   * The number of new available days
   */
    availableDaysCount?: number
    /**
   * The new time window selected.
   */
    dropoffTimeWindow?: unknown[]
    /**
   * The current state of the RV’s published-ness.
   */
    isPublished: boolean
    /**
   * Whether or not the user is a Superhost
   */
    isSuperhost: boolean
    /**
   * The new minimum number of nights selected
   */
    minimumNights?: number
    /**
   * The new time window selected.
   */
    pickupTimeWindow?: unknown[]
    /**
   * The number of nights selected by the host when setting their preparation time preference.
   */
    preparationNightsCount?: number
    /**
   * The time window that the buffer time applies to for bookings, i.e. before, after, or both before and after.
   */
    preparationTimeWindow?: string
    /**
   * The new rental season applied
   */
    rentalSeason?: unknown[]
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId: string
    /**
   * The user ID
   */
    userId: number

  }
  'HostAvailabilityViewed': {

    /**
   * The current state of the RV’s published-ness.
   */
    isPublished: boolean
    /**
   * Whether or not the user is a Superhost
   */
    isSuperhost: boolean
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId: string
    /**
   * The user ID
   */
    userId: number

  }
  'HostAvailabilityViewed [v1]': {

    /**
   * The current state of the RV’s published-ness.
   */
    isPublished: boolean
    /**
   * Whether or not the user is a Superhost
   */
    isSuperhost: boolean
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId: string
    /**
   * The user ID
   */
    userId: number

  }
  'HostDashboardCtaClicked': {

    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    accountCountry?: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * the cta the user clicked on in this screen. (“View all bookings”, or any other cta that might be added later on this screen)
   */
    cta: string
    /**
   * The source screen that came before their next action.
   */
    pageSource: string
    /**
   * the ID of the user who clicked on the CTA
   */
    userId: number

  }
  'HostDashboardCtaClicked [v1]': {

    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    accountCountry?: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * the cta the user clicked on in this screen. (“View all bookings”, or any other cta that might be added later on this screen)
   */
    cta: string
    /**
   * The source screen that came before their next action.
   */
    pageSource: string
    /**
   * the ID of the user who clicked on the CTA
   */
    userId: number

  }
  'HostDashboardViewed': {

    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    accountCountry?: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * If any of the “For today” card is presented to the host, list which one(s) it is and list any value included on the card if applicableArray of key values of the card type, name, total, and amount that is mentioned on the card for ex: booking request card for 6 requests with the total payout value of $xxx). If section is empty, return “0” (is this doable)
   */
    forTodayCardDisplayed?: unknown[]
    /**
   * whether or not the notifications bell has a red badge for new notifications
   */
    hasNewNotificationsBadge?: boolean
    /**
   * If any of the metrics is presented to the host, list which one(s) it is and the percentage??
   */
    hostMetricsDisplayed?: unknown[]
    /**
   * Whether or not the host is a Superhost
   */
    isSuperhost?: boolean
    /**
   * If any of the “Next steps” card is presented to the host, list which one(s) it is.Array of key values  of the card type, name that is mentioned on the cardIf section is empty, return “0” (is this doable)
   */
    nextStepsCardDisplayed?: unknown[]
    /**
   * The source screen that came before their next action if applicable
   */
    pageSource?: string
    /**
   * How many of superhost conditions have been achieved (that are visible on the superhost “meter” bar)
   */
    superhostStepsAchieved?: number
    /**
   * If any of the “Tips and resources” card is presented to the host, list which one(s) it is.Array of key values  of the card type, name that is mentioned on the cardIf section is empty, return “0” (is this doable)
   */
    tipsAndResourcesCardDisplayed?: unknown[]
    /**
   * The user ID of the the host viewing the dashboard
   */
    userId?: number

  }
  'HostDashboardViewed [v1]': {

    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    accountCountry?: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * If any of the “For today” card is presented to the host, list which one(s) it is and list any value included on the card if applicableArray of key values of the card type, name, total, and amount that is mentioned on the card for ex: booking request card for 6 requests with the total payout value of $xxx). If section is empty, return “0” (is this doable)
   */
    forTodayCardDisplayed?: unknown[]
    /**
   * whether or not the notifications bell has a red badge for new notifications
   */
    hasNewNotificationsBadge?: boolean
    /**
   * If any of the metrics is presented to the host, list which one(s) it is and the percentage??
   */
    hostMetricsDisplayed?: unknown[]
    /**
   * Whether or not the host is a Superhost
   */
    isSuperhost?: boolean
    /**
   * If any of the “Next steps” card is presented to the host, list which one(s) it is.Array of key values  of the card type, name that is mentioned on the cardIf section is empty, return “0” (is this doable)
   */
    nextStepsCardDisplayed?: unknown[]
    /**
   * The source screen that came before their next action if applicable
   */
    pageSource?: string
    /**
   * How many of superhost conditions have been achieved (that are visible on the superhost “meter” bar)
   */
    superhostStepsAchieved?: number
    /**
   * If any of the “Tips and resources” card is presented to the host, list which one(s) it is.Array of key values  of the card type, name that is mentioned on the cardIf section is empty, return “0” (is this doable)
   */
    tipsAndResourcesCardDisplayed?: unknown[]
    /**
   * The user ID of the the host viewing the dashboard
   */
    userId?: number

  }
  'HostEditBookingAccepted': {

    /**
   * The unique ID associated with the booking.
   */
    bookingId: number
    /**
   * What type of change request was submitted by the guest
   */
    editType: unknown[]
    /**
   * The new end date of the booking when completing the edit.
   */
    newEndDate?: string
    /**
   * The new start date of the booking made when completing the edit.
   */
    newStartDate?: string

  }
  'HostEditBookingAccepted [v1]': {

    /**
   * The unique ID associated with the booking.
   */
    bookingId: number
    /**
   * What type of change request was submitted by the guest
   */
    editType: unknown[]
    /**
   * The new end date of the booking when completing the edit.
   */
    newEndDate?: string
    /**
   * The new start date of the booking made when completing the edit.
   */
    newStartDate?: string

  }
  'HostEditBookingDeclinedSuccessful': {

    /**
   * The unique ID associated with the booking.
   */
    bookingId: number
    /**
   * The ISO 4217 currency code displayed
   */
    currency: string
    /**
   * What type of change request was submitted by the guest
   */
    editType: unknown[]
    /**
   * The suggested new payout after guest requested the edit
   */
    newPayout: number
    /**
   * The payout before guest requested the edit
   */
    oldPayout: number
    /**
   * The reason host is declining the edit booking request, provided by the host
   */
    reasonDecline: string

  }
  'HostEditBookingDeclinedSuccessful [v1]': {

    /**
   * The unique ID associated with the booking.
   */
    bookingId: number
    /**
   * The ISO 4217 currency code displayed
   */
    currency: string
    /**
   * What type of change request was submitted by the guest
   */
    editType: unknown[]
    /**
   * The suggested new payout after guest requested the edit
   */
    newPayout: number
    /**
   * The payout before guest requested the edit
   */
    oldPayout: number
    /**
   * The reason host is declining the edit booking request, provided by the host
   */
    reasonDecline: string

  }
  'HostEditBookingReponded': {

    /**
   * The unique ID associated with the booking.
   */
    bookingId: number
    /**
   * The ISO 4217 currency code displayed
   */
    currency: string
    /**
   * What type of change request was submitted by the guest
   */
    editType: unknown[]
    /**
   * The suggested new payout after guest requested the edit
   */
    newPayout: number
    /**
   * The payout before guest requested the edit
   */
    oldPayout: number

  }
  'HostEditBookingReponded [v1]': {

    /**
   * The unique ID associated with the booking.
   */
    bookingId: number
    /**
   * The ISO 4217 currency code displayed
   */
    currency: string
    /**
   * What type of change request was submitted by the guest
   */
    editType: unknown[]
    /**
   * The suggested new payout after guest requested the edit
   */
    newPayout: number
    /**
   * The payout before guest requested the edit
   */
    oldPayout: number

  }
  'HostEditBookingViewed': {

    /**
   * The unique ID associated with the booking.
   */
    bookingId: number
    /**
   * The ISO 4217 currency code displayed
   */
    currency: string
    /**
   * What type of change request was submitted by the guest
   */
    editType: unknown[]
    /**
   * The suggested new payout after guest requested the edit
   */
    newPayout: number
    /**
   * The payout before guest requested the edit
   */
    oldPayout: number

  }
  'HostEditBookingViewed [v1]': {

    /**
   * The unique ID associated with the booking.
   */
    bookingId: number
    /**
   * The ISO 4217 currency code displayed
   */
    currency: string
    /**
   * What type of change request was submitted by the guest
   */
    editType: unknown[]
    /**
   * The suggested new payout after guest requested the edit
   */
    newPayout: number
    /**
   * The payout before guest requested the edit
   */
    oldPayout: number

  }
  'HostInsightsPageViewed': {

    /**
   * Acceptance rate is a percentage. Expected values should be from 0 - 100
   */
    acceptanceRate: number
    /**
   * Total number of cancelled bookings
   */
    cancellations: number
    /**
   * Total number of confirmed bookings
   */
    confirmedBookings: number
    /**
   * Whether or not the host is a Superhost
   */
    isSuperhost: boolean
    /**
   * Response rate is a percentage. Expected values should be from 0 - 100
   */
    responseRate: number
    /**
   * How many of superhost conditions have been achieved (that are visible on the superhost “meter” bar)
   */
    superhostStepsAchieved: number

  }
  'HostInsightsPageViewed [v1]': {

    /**
   * If any of the metrics is presented to the host, list which one(s) it is and the percentage??
   */
    hostMetricsDisplayed?: unknown[]
    /**
   * Whether or not the host is a Superhost
   */
    isSuperhost: boolean
    /**
   * How many of superhost conditions have been achieved (that are visible on the superhost “meter” bar)
   */
    superhostStepsAchieved: number

  }
  'HostInsightsPageViewed [v2]': {

    /**
   * Acceptance rate is a percentage. Expected values should be from 0 - 100
   */
    acceptanceRate: number
    /**
   * Total number of cancelled bookings
   */
    cancellations: number
    /**
   * Total number of confirmed bookings
   */
    confirmedBookings: number
    /**
   * Whether or not the host is a Superhost
   */
    isSuperhost: boolean
    /**
   * Response rate is a percentage. Expected values should be from 0 - 100
   */
    responseRate: number
    /**
   * How many of superhost conditions have been achieved (that are visible on the superhost “meter” bar)
   */
    superhostStepsAchieved: number

  }
  'HostPerformanceTargetAchieved': {

    /**
   * The city that the listing is based in.
   */
    accountCity?: string
    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    accountCountry: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * The region the listing is based in
   */
    accountRegion?: string
    /**
   * Whether or not the host has achieved all target for the host analytics
   */
    hasAchievedAllTargets: boolean
    /**
   * Whether or not the host has achieved the specific target for the analytic in question (ie. is the number host score for this analytic displayed as green=True or red = False)
   */
    hasAchievedHostAcceptanceTarget: boolean
    /**
   * Whether or not the host has achieved the specific target for the analytic in question (ie. is the number host score for this analytic displayed as green=True or red = False)
   */
    hasAchievedHostCancellationTarget: boolean
    /**
   * Whether or not the host has achieved the specific target for the analytic in question (ie. is the number host score for this analytic displayed as green=True or red = False)
   */
    hasAchievedHostResponseTarget: boolean
    /**
   * The host score for the analytic in question. (what the host sees in the “you” side of the host analytics board on the host dashboard)
   */
    hostAcceptanceScore?: number
    /**
   * The host target for the analytic in question. (what the host sees in the “Target” side of the host analytics board on the host dashboard)
   */
    hostAcceptanceTarget: number
    /**
   * The host score for the analytic in question. (what the host sees in the “you” side of the host analytics board on the host dashboard)
   */
    hostCancellationScore?: number
    /**
   * The host target for the analytic in question. (what the host sees in the “Target” side of the host analytics board on the host dashboard)
   */
    hostCancellationTarget: number
    /**
   * The host score for the analytic in question. (what the host sees in the “you” side of the host analytics board on the host dashboard)
   */
    hostResponseScore?: number
    /**
   * The host target for the analytic in question. (what the host sees in the “Target” side of the host analytics board on the host dashboard)
   */
    hostResponseTarget: number
    /**
   * The host analytic target being achieved that actually triggered this event
   */
    hostTargetTypeAchieved: unknown[]

  }
  'HostPerformanceTargetAchieved [v1]': {

    /**
   * The city that the listing is based in.
   */
    accountCity?: string
    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    accountCountry: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * The region the listing is based in
   */
    accountRegion?: string
    /**
   * Whether or not the host has achieved all target for the host analytics
   */
    hasAchievedAllTargets: boolean
    /**
   * Whether or not the host has achieved the specific target for the analytic in question (ie. is the number host score for this analytic displayed as green=True or red = False)
   */
    hasAchievedHostAcceptanceTarget: boolean
    /**
   * Whether or not the host has achieved the specific target for the analytic in question (ie. is the number host score for this analytic displayed as green=True or red = False)
   */
    hasAchievedHostCancellationTarget: boolean
    /**
   * Whether or not the host has achieved the specific target for the analytic in question (ie. is the number host score for this analytic displayed as green=True or red = False)
   */
    hasAchievedHostResponseTarget: boolean
    /**
   * The host score for the analytic in question. (what the host sees in the “you” side of the host analytics board on the host dashboard)
   */
    hostAcceptanceScore?: number
    /**
   * The host target for the analytic in question. (what the host sees in the “Target” side of the host analytics board on the host dashboard)
   */
    hostAcceptanceTarget: number
    /**
   * The host score for the analytic in question. (what the host sees in the “you” side of the host analytics board on the host dashboard)
   */
    hostCancellationScore?: number
    /**
   * The host target for the analytic in question. (what the host sees in the “Target” side of the host analytics board on the host dashboard)
   */
    hostCancellationTarget: number
    /**
   * The host score for the analytic in question. (what the host sees in the “you” side of the host analytics board on the host dashboard)
   */
    hostResponseScore?: number
    /**
   * The host target for the analytic in question. (what the host sees in the “Target” side of the host analytics board on the host dashboard)
   */
    hostResponseTarget: number
    /**
   * The host analytic target being achieved that actually triggered this event
   */
    hostTargetTypeAchieved: unknown[]

  }
  'HostPerformanceTargetLost': {

    /**
   * The city that the listing is based in.
   */
    accountCity?: string
    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    accountCountry: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * The region the listing is based in
   */
    accountRegion?: string
    /**
   * Whether or not the host has achieved the specific target for the analytic in question (ie. is the number host score for this analytic displayed as green=True or red = False)
   */
    hasAchievedHostAcceptanceTarget: boolean
    /**
   * Whether or not the host has achieved the specific target for the analytic in question (ie. is the number host score for this analytic displayed as green=True or red = False)
   */
    hasAchievedHostCancellationTarget: boolean
    /**
   * Whether or not the host has achieved the specific target for the analytic in question (ie. is the number host score for this analytic displayed as green=True or red = False)
   */
    hasAchievedHostResponseTarget: boolean
    /**
   * Whether or not the host has any achieved targets for the host analytics  (True = all analytics are red)
   */
    hasNoAchievedTargets: boolean
    /**
   * The host score for the analytic in question. (what the host sees in the “you” side of the host analytics board on the host dashboard)
   */
    hostAcceptanceScore?: number
    /**
   * The host target for the analytic in question. (what the host sees in the “Target” side of the host analytics board on the host dashboard)
   */
    hostAcceptanceTarget: number
    /**
   * The host score for the analytic in question. (what the host sees in the “you” side of the host analytics board on the host dashboard)
   */
    hostCancellationScore?: number
    /**
   * The host target for the analytic in question. (what the host sees in the “Target” side of the host analytics board on the host dashboard)
   */
    hostCancellationTarget: number
    /**
   * The host score for the analytic in question. (what the host sees in the “you” side of the host analytics board on the host dashboard)
   */
    hostResponseScore?: number
    /**
   * The host target for the analytic in question. (what the host sees in the “Target” side of the host analytics board on the host dashboard)
   */
    hostResponseTarget: number
    /**
   * The host analytic target being lost that actually triggered this event
   */
    hostTargetTypeLost: unknown[]

  }
  'HostPerformanceTargetLost [v1]': {

    /**
   * The city that the listing is based in.
   */
    accountCity?: string
    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    accountCountry: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * The region the listing is based in
   */
    accountRegion?: string
    /**
   * Whether or not the host has achieved the specific target for the analytic in question (ie. is the number host score for this analytic displayed as green=True or red = False)
   */
    hasAchievedHostAcceptanceTarget: boolean
    /**
   * Whether or not the host has achieved the specific target for the analytic in question (ie. is the number host score for this analytic displayed as green=True or red = False)
   */
    hasAchievedHostCancellationTarget: boolean
    /**
   * Whether or not the host has achieved the specific target for the analytic in question (ie. is the number host score for this analytic displayed as green=True or red = False)
   */
    hasAchievedHostResponseTarget: boolean
    /**
   * Whether or not the host has any achieved targets for the host analytics  (True = all analytics are red)
   */
    hasNoAchievedTargets: boolean
    /**
   * The host score for the analytic in question. (what the host sees in the “you” side of the host analytics board on the host dashboard)
   */
    hostAcceptanceScore?: number
    /**
   * The host target for the analytic in question. (what the host sees in the “Target” side of the host analytics board on the host dashboard)
   */
    hostAcceptanceTarget: number
    /**
   * The host score for the analytic in question. (what the host sees in the “you” side of the host analytics board on the host dashboard)
   */
    hostCancellationScore?: number
    /**
   * The host target for the analytic in question. (what the host sees in the “Target” side of the host analytics board on the host dashboard)
   */
    hostCancellationTarget: number
    /**
   * The host score for the analytic in question. (what the host sees in the “you” side of the host analytics board on the host dashboard)
   */
    hostResponseScore?: number
    /**
   * The host target for the analytic in question. (what the host sees in the “Target” side of the host analytics board on the host dashboard)
   */
    hostResponseTarget: number
    /**
   * The host analytic target being lost that actually triggered this event
   */
    hostTargetTypeLost: unknown[]

  }
  'IdVerificationCreditConsentClicked': {

    /**
   * Whether the user was verified through the new Merge Verification flow (that combines both ID and driver verification) or through the ‘Add Driver’ flow
   */
    addDriverFlow: boolean
    /**
   * The timestamp in which the user gave consent by clicking on “continue” which should include the date and time.
   */
    timeStamp: string
    /**
   * The userID associated to the verification link created
   */
    userID: number
    /**
   * The vouched job identification number that is created upon completion
   */
    vouchedJobId?: string

  }
  'IdVerificationCreditConsentClicked [v1]': {

    /**
   * Whether the user was verified through the new Merge Verification flow (that combines both ID and driver verification) or through the ‘Add Driver’ flow
   */
    addDriverFlow: boolean
    /**
   * The timestamp in which the user gave consent by clicking on “continue” which should include the date and time.
   */
    timeStamp: string
    /**
   * The userID associated to the verification link created
   */
    userID: number
    /**
   * The vouched job identification number that is created upon completion
   */
    vouchedJobId?: string

  }
  'IdVerificationSuccessful': {

    /**
   * Whether the user was verified through the new Merge Verification flow (that combines both ID and driver verification) or through the ‘Add Driver’ flow
   */
    addDriverFlow: boolean
    /**
   * The userId of the user taking the admin action. Usually via the Operations Dashboard. Does not include masquerading.
   */
    adminUserId?: number
    /**
   * Whether or not this specific verification failed crosscheck.
   */
    crosscheckFail: boolean
    /**
   * Whether or not the action was taken by an admin user. Usually via the Operations Dashboard. Does not include instances where the action was taken through masquerading.
   */
    isAdminAction?: boolean
    /**
   * Whether or not the ID uploaded is an expired document
   */
    isExpired: boolean
    /**
   * The userID associated to the verification link created
   */
    userID: string
    /**
   * The vouched job identification number that is created upon completion
   */
    vouchedJobId?: string

  }
  'IdVerificationSuccessful [v1]': {

    /**
   * Whether the user was verified through the new Merge Verification flow (that combines both ID and driver verification) or through the ‘Add Driver’ flow
   */
    addDriverFlow: boolean
    /**
   * The userId of the user taking the admin action. Usually via the Operations Dashboard. Does not include masquerading.
   */
    adminUserId?: number
    /**
   * The last time that the email address was seen as according to Vouched crosscheck data. May not always be returned by Vouched.
   */
    emailDaysFirstSeen?: number
    /**
   * Whether or not the action was taken by an admin user. Usually via the Operations Dashboard. Does not include instances where the action was taken through masquerading.
   */
    isAdminAction?: boolean
    /**
   * The ID verification provider being used.
   */
    verificationProvider?: 'verx' | 'vouched'
    /**
   * The Vouched job identification number.
   */
    vouchedJobId?: string

  }
  'IdVerificationSuccessful [v2]': {

    /**
   * Whether the user was verified through the new Merge Verification flow (that combines both ID and driver verification) or through the ‘Add Driver’ flow
   */
    addDriverFlow: boolean
    /**
   * The userId of the user taking the admin action. Usually via the Operations Dashboard. Does not include masquerading.
   */
    adminUserId?: number
    /**
   * Whether or not this specific verification failed crosscheck.
   */
    crosscheckFail: boolean
    /**
   * Whether or not the action was taken by an admin user. Usually via the Operations Dashboard. Does not include instances where the action was taken through masquerading.
   */
    isAdminAction?: boolean
    /**
   * Whether or not the ID uploaded is an expired document
   */
    isExpired: boolean
    /**
   * The userID associated to the verification link created
   */
    userID: string
    /**
   * The vouched job identification number that is created upon completion
   */
    vouchedJobId?: string

  }
  'InboxCardClicked': {

    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country where the user is located
   */
    accountCountry?: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * The booking label that defines which status the booking is in
   */
    bookingLabel: string
    /**
   * the cta the user clicked on to get to this screen. (ie. was it from the inbox message, or the bookings/trips card or host dashboard card, etc. )
   */
    cta?: string
    /**
   * The date that the requested booking is to end.
   */
    endDate: string
    /**
   * if the user who clicked o nthe card is an owner
   */
    isOwner: boolean
    /**
   * If the message is for an inquiry
   */
    isUnansweredInquiry?: boolean
    /**
   * If the message is for a booking in AOA
   */
    isUnapprovedBookingRequest?: boolean
    /**
   * If the message is unread
   */
    isUnreadMessage?: boolean
    /**
   * The last time that a message was received by the user viewing.
   */
    lastMessageReceived: string
    /**
   * The source screen that came before their next action if applicable
   */
    pageSource?: string
    /**
   * The date that the requested booking is to begin.
   */
    startDate: string
    /**
   * The user ID of the user who clicked on the card
   */
    userId: number

  }
  'InboxCardClicked [v1]': {

    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country where the user is located
   */
    accountCountry?: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * The booking label that defines which status the booking is in
   */
    bookingLabel: string
    /**
   * the cta the user clicked on to get to this screen. (ie. was it from the inbox message, or the bookings/trips card or host dashboard card, etc. )
   */
    cta?: string
    /**
   * The date that the requested booking is to end.
   */
    endDate: string
    /**
   * if the user who clicked o nthe card is an owner
   */
    isOwner: boolean
    /**
   * If the message is for an inquiry
   */
    isUnansweredInquiry?: boolean
    /**
   * If the message is for a booking in AOA
   */
    isUnapprovedBookingRequest?: boolean
    /**
   * If the message is unread
   */
    isUnreadMessage?: boolean
    /**
   * The last time that a message was received by the user viewing.
   */
    lastMessageReceived: string
    /**
   * The source screen that came before their next action if applicable
   */
    pageSource?: string
    /**
   * The date that the requested booking is to begin.
   */
    startDate: string
    /**
   * The user ID of the user who clicked on the card
   */
    userId: number

  }
  'InboxCtaClicked': {

    /**
   * The unique ID associated with the booking (same as booking number).
   */
    bookingId: number
    /**
   * The state of the booking as is represented on the backend.
   */
    bookingState: number
    /**
   * the cta the user clicked on in this screen. (ie. did they click on “Accept” or any other available sticky cta at the bottom of the screen)
   */
    cta: string
    /**
   * The user type, if known. The user is the person visiting the profile page.
   */
    isOwner?: boolean
    /**
   * The number of messages that have been received by the user viewing
   */
    numMessagesReceived: number
    /**
   * The number of messages that have been sent by the user viewing.
   */
    numMessagesSent: number
    /**
   * Each time a different party messages, the turn count is incremented by one. E.g. If A messages B then B messages A, the turn count is 2. If A messages B, then A messages B again, then A messages B again, the turn count is 1 (because B has not yet had a “turn”). A code snippet can most likely be reused from ‘MessageSent’ event
   */
    numTurns: number
    /**
   * The Id of the user whose profile is being viewed.
   */
    receiverUserId: number
    /**
   * The unique ID associated with an RV.
   */
    rvId: string

  }
  'InboxCtaClicked [v1]': {

    /**
   * The unique ID associated with the booking (same as booking number).
   */
    bookingId: number
    /**
   * The state of the booking as is represented on the backend.
   */
    bookingState: number
    /**
   * the cta the user clicked on in this screen. (ie. did they click on “Accept” or any other available sticky cta at the bottom of the screen)
   */
    cta: string
    /**
   * The user type, if known. The user is the person visiting the profile page.
   */
    isOwner?: boolean
    /**
   * The number of messages that have been received by the user viewing
   */
    numMessagesReceived: number
    /**
   * The number of messages that have been sent by the user viewing.
   */
    numMessagesSent: number
    /**
   * Each time a different party messages, the turn count is incremented by one. E.g. If A messages B then B messages A, the turn count is 2. If A messages B, then A messages B again, then A messages B again, the turn count is 1 (because B has not yet had a “turn”). A code snippet can most likely be reused from ‘MessageSent’ event
   */
    numTurns: number
    /**
   * The Id of the user whose profile is being viewed.
   */
    receiverUserId: number
    /**
   * The unique ID associated with an RV.
   */
    rvId: string

  }
  'InboxPageViewed': {

    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country where the user is located if available
   */
    accountCountry?: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * the cta the user clicked on to get to this screen. (ie. was it from the inbox message, or the bookings/trips card or host dashboard card, etc. )
   */
    cta?: string
    /**
   * If there are unanswered inquiries
   */
    hasUnansweredInquiries?: boolean
    /**
   * If there are new unread messages
   */
    hasUnreadMessages?: boolean
    /**
   * If user viewed the All tab
   */
    isAllTab: boolean
    isArchivedTab: boolean
    isInquiriesTab: boolean
    /**
   * The type of user viewing the booking. Depending upon this type, different options will be available on the page.
   */
    isOwner?: boolean
    /**
   * If user viewed the Requests tab
   */
    isRequestsTab: boolean
    /**
   * the number of conversations listed (message cards) in the inbox page
   */
    numberOfMessageCards?: number
    /**
   * Number of unanswered inquires
   */
    numberOfUnansweredInquiries?: number
    /**
   * Number of unapproved booking requests (bookings in AOA)
   */
    numberOfUnapprovedBookingRequest?: number
    /**
   * Number of unread messages
   */
    numberOfUnreadMessages?: number
    /**
   * The source screen that came before their next action if applicable
   */
    pageSource?: string
    /**
   * The user ID of the user viewing the inbox if they are logged in
   */
    userId?: number

  }
  'InboxPageViewed [v1]': {

    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country where the user is located if available
   */
    accountCountry?: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * the cta the user clicked on to get to this screen. (ie. was it from the inbox message, or the bookings/trips card or host dashboard card, etc. )
   */
    cta?: string
    /**
   * If there are unanswered inquiries
   */
    hasUnansweredInquiries?: boolean
    /**
   * If there are new unread messages
   */
    hasUnreadMessages?: boolean
    /**
   * If user viewed the All tab
   */
    isAllTab: boolean
    isArchivedTab: boolean
    isInquiriesTab: boolean
    /**
   * The type of user viewing the booking. Depending upon this type, different options will be available on the page.
   */
    isOwner?: boolean
    /**
   * If user viewed the Requests tab
   */
    isRequestsTab: boolean
    /**
   * the number of conversations listed (message cards) in the inbox page
   */
    numberOfMessageCards?: number
    /**
   * Number of unanswered inquires
   */
    numberOfUnansweredInquiries?: number
    /**
   * Number of unapproved booking requests (bookings in AOA)
   */
    numberOfUnapprovedBookingRequest?: number
    /**
   * Number of unread messages
   */
    numberOfUnreadMessages?: number
    /**
   * The source screen that came before their next action if applicable
   */
    pageSource?: string
    /**
   * The user ID of the user viewing the inbox if they are logged in
   */
    userId?: number

  }
  'InquirySent': {

    /**
   * The unique ID associated with the booking (same as booking number).
   */
    bookingId: number
    /**
   * The quoted price for cleaning.
   */
    cleaningPrice?: number
    /**
   * The ISO 4217 currency code displayed
   */
    currency: 'AUD' | 'CAD' | 'EUR' | 'GBP' | 'NZD' | 'USD'
    /**
   * The string that the Google Maps API returns as the name of the destination
   */
    destination?: string
    /**
   * The latitude of the destination as returned from the Google Maps API)
   */
    destinationLat?: number
    /**
   * The longitude of the destination as returned from the Google Maps API)
   */
    destinationLon?: number
    /**
   * The destination types as returned from google maps API. (e.g. campground, rv_park, park, amusement_park, locality)
   */
    destinationTypes?: unknown[]
    /**
   * The date that the requested booking is to end.
   */
    endDate: string
    /**
   * The quoted price for insurance.
   */
    insurancePrice: number
    /**
   * Whether or not the RV clicked was available because of the ShortStays feature.
   */
    isShortStay: boolean
    /**
   * Whether or not the host being sent the inquiry has the Superhost status
   */
    isSuperhost: boolean
    /**
   * The city that the listing is based in.
   */
    listingCity?: string
    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    listingCountry?: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * The region the listing is based in
   */
    listingRegion?: string
    /**
   * Rental category of vehicle booked.
   */
    listingType: string
    /**
   * The message attached to the booking. Applies to all booking types.
   */
    message?: string
    /**
   * The ID of the host that currently owns the RV.
   */
    receiverUserId: number
    /**
   * The quoted rental price for total nights only that is displayed.
   */
    rentalPrice: number
    /**
   * The quoted price for roadside assistance.
   */
    roadsidePrice: number
    /**
   * The unique ID associated with an RV.
   */
    rvId: string
    /**
   * Specific RV type of vehicle booked.
   */
    rvType: string
    /**
   * The quoted security deposit that will be taken on the security deposit date.
   */
    securityDepositPrice: number
    /**
   * The quoted service fee paid to RVezy.
   */
    servicePrice: number
    /**
   * The date that the requested booking is to begin.
   */
    startDate: string
    /**
   * The total dollar value of the host payout for the entire rental.
   */
    totalPayout: number
    /**
   * The total dollar value for the entire rental that is displayed.
   */
    totalPrice: number
    /**
   * Difference between start date and the current date. (how many days out does the trip start)
   */
    tripLeadTime: number
    /**
   * Difference between start date and end date. Effectively, the number of nights for a trip.
   */
    tripLength: number

  }
  'InquirySent [v1]': {

    /**
   * The unique ID associated with the booking (same as booking number).
   */
    bookingId: number
    /**
   * The quoted price for cleaning.
   */
    cleaningPrice?: number
    /**
   * The ISO 4217 currency code displayed
   */
    currency: string
    /**
   * The string that the Google Maps API returns as the name of the destination
   */
    destination?: string
    /**
   * The latitude of the destination as returned from the Google Maps API)
   */
    destinationLat?: number
    /**
   * The longitude of the destination as returned from the Google Maps API)
   */
    destinationLon?: number
    /**
   * The destination types as returned from google maps API. (e.g. campground, rv_park, park, amusement_park, locality)
   */
    destinationTypes?: unknown[]
    /**
   * The date that the requested booking is to end.
   */
    endDate: string
    /**
   * The quoted price for insurance.
   */
    insurancePrice: number
    /**
   * Whether or not the RV clicked was available because of the ShortStays feature.
   */
    isShortStay: boolean
    /**
   * The city that the listing is based in.
   */
    listingCity?: string
    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    listingCountry?: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * The region the listing is based in
   */
    listingRegion?: string
    /**
   * Rental category of vehicle booked.
   */
    listingType: string
    /**
   * The message attached to the booking. Applies to all booking types.
   */
    message?: string
    /**
   * The ID of the host that currently owns the RV.
   */
    receiverUserId: number
    /**
   * The quoted rental price for total nights only that is displayed.
   */
    rentalPrice: number
    /**
   * The quoted price for roadside assistance.
   */
    roadsidePrice: number
    /**
   * The unique ID associated with an RV.
   */
    rvId: string
    /**
   * Specific RV type of vehicle booked.
   */
    rvType: string
    /**
   * The quoted security deposit that will be taken on the security deposit date.
   */
    securityDepositPrice: number
    /**
   * The quoted service fee paid to RVezy.
   */
    servicePrice: number
    /**
   * The date that the requested booking is to begin.
   */
    startDate: string
    /**
   * The total dollar value of the host payout for the entire rental.
   */
    totalPayout: number
    /**
   * The total dollar value for the entire rental that is displayed.
   */
    totalPrice: number
    /**
   * Difference between start date and the current date. (how many days out does the trip start)
   */
    tripLeadTime: number
    /**
   * Difference between start date and end date. Effectively, the number of nights for a trip.
   */
    tripLength: number

  }
  'InquirySent [v2]': {

    /**
   * The unique ID associated with the booking (same as booking number).
   */
    bookingId: number
    /**
   * The quoted price for cleaning.
   */
    cleaningPrice?: number
    /**
   * The ISO 4217 currency code displayed
   */
    currency: 'AUD' | 'CAD' | 'EUR' | 'GBP' | 'NZD' | 'USD'
    /**
   * The string that the Google Maps API returns as the name of the destination
   */
    destination?: string
    /**
   * The latitude of the destination as returned from the Google Maps API)
   */
    destinationLat?: number
    /**
   * The longitude of the destination as returned from the Google Maps API)
   */
    destinationLon?: number
    /**
   * The destination types as returned from google maps API. (e.g. campground, rv_park, park, amusement_park, locality)
   */
    destinationTypes?: unknown[]
    /**
   * The date that the requested booking is to end.
   */
    endDate: string
    /**
   * The quoted price for insurance.
   */
    insurancePrice: number
    /**
   * Whether or not the RV clicked was available because of the ShortStays feature.
   */
    isShortStay: boolean
    /**
   * Whether or not the host being sent the inquiry has the Superhost status
   */
    isSuperhost: boolean
    /**
   * The city that the listing is based in.
   */
    listingCity?: string
    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    listingCountry?: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * The region the listing is based in
   */
    listingRegion?: string
    /**
   * Rental category of vehicle booked.
   */
    listingType: string
    /**
   * The message attached to the booking. Applies to all booking types.
   */
    message?: string
    /**
   * The ID of the host that currently owns the RV.
   */
    receiverUserId: number
    /**
   * The quoted rental price for total nights only that is displayed.
   */
    rentalPrice: number
    /**
   * The quoted price for roadside assistance.
   */
    roadsidePrice: number
    /**
   * The unique ID associated with an RV.
   */
    rvId: string
    /**
   * Specific RV type of vehicle booked.
   */
    rvType: string
    /**
   * The quoted security deposit that will be taken on the security deposit date.
   */
    securityDepositPrice: number
    /**
   * The quoted service fee paid to RVezy.
   */
    servicePrice: number
    /**
   * The date that the requested booking is to begin.
   */
    startDate: string
    /**
   * The total dollar value of the host payout for the entire rental.
   */
    totalPayout: number
    /**
   * The total dollar value for the entire rental that is displayed.
   */
    totalPrice: number
    /**
   * Difference between start date and the current date. (how many days out does the trip start)
   */
    tripLeadTime: number
    /**
   * Difference between start date and end date. Effectively, the number of nights for a trip.
   */
    tripLength: number

  }
  'InspectionFormClicked': {

    /**
   * The unique booking number associated to the request money request the host is completing.
   */
    bookingId: number
    /**
   * The current booking stage
   */
    bookingStage: string
    /**
   * The end date of the booking at the time the host has clicked on “Request Money”
   */
    endDate: string
    /**
   * The inspection form in the Departure inspection
   */
    isDepartureInspection: boolean
    /**
   * The inspection form in the return inspection
   */
    isReturnInspection: boolean
    /**
   * The unique ID of the owner of the listing renter has sent the booking request for.
   */
    ownerId: number
    /**
   * The screen that the user came from. See pageSources.
   */
    pageSource: string
    /**
   * The unique ID of the renter that sent the booking request for the listing.
   */
    renterId: number
    /**
   * The unique ID associated with an RV.
   */
    rvId?: string
    /**
   * The start date of the booking at the time the host has clicked on “Request Money”
   */
    startDate: string

  }
  'InspectionFormClicked [v1]': {

    /**
   * The unique booking number associated to the request money request the host is completing.
   */
    bookingId: number
    /**
   * The current booking stage
   */
    bookingStage: string
    /**
   * The end date of the booking at the time the host has clicked on “Request Money”
   */
    endDate: string
    /**
   * The inspection form in the Departure inspection
   */
    isDepartureInspection: boolean
    /**
   * The inspection form in the return inspection
   */
    isReturnInspection: boolean
    /**
   * The unique ID of the owner of the listing renter has sent the booking request for.
   */
    ownerId: number
    /**
   * The screen that the user came from. See pageSources.
   */
    pageSource: string
    /**
   * The unique ID of the renter that sent the booking request for the listing.
   */
    renterId: number
    /**
   * The unique ID associated with an RV.
   */
    rvId?: string
    /**
   * The start date of the booking at the time the host has clicked on “Request Money”
   */
    startDate: string

  }
  'InspectionFormComplete': {

    /**
   * The number of photos uploaded on an inspection
   */
    amountPhotosAdded: number
    /**
   * Booking ID associated with the rental agreement
   */
    bookingId: number
    /**
   * If  “Yes, there’s damage” is selected in the inspection
   */
    damageReported: boolean
    /**
   * The inspection form in the Departure inspection
   */
    isDepartureInspection: boolean
    /**
   * The inspection form in the return inspection
   */
    isReturnInspection: boolean
    /**
   * The unique ID of the owner of the listing renter has sent the booking request for.
   */
    ownerId: number
    /**
   * The unique ID of the renter that sent the booking request for the listing.
   */
    renterId: number
    /**
   *  The unique ID associated with an RV.
   */
    rvId?: string

  }
  'InspectionFormComplete [v1]': {

    /**
   * The number of photos uploaded on an inspection
   */
    amountPhotosAdded: number
    /**
   * Booking ID associated with the rental agreement
   */
    bookingId: number
    /**
   * If  “Yes, there’s damage” is selected in the inspection
   */
    damageReported: boolean
    /**
   * The inspection form in the Departure inspection
   */
    isDepartureInspection: boolean
    /**
   * The inspection form in the return inspection
   */
    isReturnInspection: boolean
    /**
   * The unique ID of the owner of the listing renter has sent the booking request for.
   */
    ownerId: number
    /**
   * The unique ID of the renter that sent the booking request for the listing.
   */
    renterId: number
    /**
   *  The unique ID associated with an RV.
   */
    rvId?: string

  }
  'InspectionFormViewed': {

    /**
   * The unique booking number associated to the send money request the host is completing.
   */
    bookingId: number
    /**
   * The current booking stage
   */
    bookingStage: string
    /**
   * The end date of the booking at the time the host has clicked on “Send Money”
   */
    endDate: string
    /**
   *  The inspection form in the Departure inspection
   */
    isDepartureInspection: boolean
    /**
   *  The inspection form in the return inspection
   */
    isReturnInspection: boolean
    /**
   * The unique ID of the owner of the listing renter has sent the booking request for.
   */
    ownerId: number
    /**
   * The screen that the user came from. See pageSources.
   */
    pageSource: string
    /**
   * The unique ID of the renter that sent the booking request for the listing.
   */
    renterId: number
    /**
   * The unique ID associated with an RV.
   */
    rvId?: string
    /**
   * The start date of the booking at the time the host has clicked on “Send Money”
   */
    startDate: string

  }
  'InspectionFormViewed [v1]': {

    /**
   * The unique booking number associated to the send money request the host is completing.
   */
    bookingId: number
    /**
   * The current booking stage
   */
    bookingStage: string
    /**
   * The end date of the booking at the time the host has clicked on “Send Money”
   */
    endDate: string
    /**
   *  The inspection form in the Departure inspection
   */
    isDepartureInspection: boolean
    /**
   *  The inspection form in the return inspection
   */
    isReturnInspection: boolean
    /**
   * The unique ID of the owner of the listing renter has sent the booking request for.
   */
    ownerId: number
    /**
   * The screen that the user came from. See pageSources.
   */
    pageSource: string
    /**
   * The unique ID of the renter that sent the booking request for the listing.
   */
    renterId: number
    /**
   * The unique ID associated with an RV.
   */
    rvId?: string
    /**
   * The start date of the booking at the time the host has clicked on “Send Money”
   */
    startDate: string

  }
  'InspectionStartClicked': {

    /**
   * The unique booking number associated to the request money request the host is completing.
   */
    bookingId: number
    /**
   * The current booking stage
   */
    bookingStage: string
    /**
   * The end date of the booking at the time the host has clicked on “Request Money”
   */
    endDate: string
    /**
   * The inspection form in the Departure inspection
   */
    isDepartureInspection: boolean
    /**
   * The inspection form in the return inspection
   */
    isReturnInspection: boolean
    /**
   * The unique ID of the owner of the listing renter has sent the booking request for.
   */
    ownerId: number
    /**
   * The unique ID of the renter that sent the booking request for the listing.
   */
    renterId: number
    /**
   * The unique ID associated with an RV.
   */
    rvId?: string
    /**
   * The start date of the booking at the time the host has clicked on “Request Money”
   */
    startDate: string

  }
  'InspectionStartClicked [v1]': {

    /**
   * The unique booking number associated to the request money request the host is completing.
   */
    bookingId: number
    /**
   * The current booking stage
   */
    bookingStage: string
    /**
   * The end date of the booking at the time the host has clicked on “Request Money”
   */
    endDate: string
    /**
   * The inspection form in the Departure inspection
   */
    isDepartureInspection: boolean
    /**
   * The inspection form in the return inspection
   */
    isReturnInspection: boolean
    /**
   * The unique ID of the owner of the listing renter has sent the booking request for.
   */
    ownerId: number
    /**
   * The unique ID of the renter that sent the booking request for the listing.
   */
    renterId: number
    /**
   * The unique ID associated with an RV.
   */
    rvId?: string
    /**
   * The start date of the booking at the time the host has clicked on “Request Money”
   */
    startDate: string

  }
  'ListingApproved': {

    /**
   * The userId of the user taking the admin action. Usually via the Operations Dashboard. Does not include masquerading.
   */
    adminUserId?: number
    /**
   * Whether or not the action was taken by an admin user. Usually via the Operations Dashboard. Does not include instances where the action was taken through masquerading.
   */
    isAdminAction: boolean
    /**
   * When an action is completed automatically rather than by a human.
   */
    isAutomatic?: boolean
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId: string
    /**
   * Categories that OS uses to tag RVs that can be verified but who they still want to reach out to because of a certain concern they have with the RV listing (for example: needs better pictures or opted out of insurance)
   */
    verificationNotes?: {}

  }
  'ListingApproved [v1]': {

    /**
   * The userId of the user taking the admin action. Usually via the Operations Dashboard. Does not include masquerading.
   */
    adminUserId?: number
    /**
   * Whether or not the action was taken by an admin user. Usually via the Operations Dashboard. Does not include instances where the action was taken through masquerading.
   */
    isAdminAction: boolean
    /**
   * When an action is completed automatically rather than by a human.
   */
    isAutomatic?: boolean
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId: string
    /**
   * Categories that OS uses to tag RVs that can be verified but who they still want to reach out to because of a certain concern they have with the RV listing (for example: needs better pictures or opted out of insurance)
   */
    verificationNotes?: {}

  }
  'ListingClicked': {

    cta?: string
    /**
   * Whether or not the distance is shown for the listing.
   */
    distanceShown: boolean
    /**
   * If the listing has no FOMO tag then the result will be null. If the listing has tag, then the FOMO will be defined as described in the string
   */
    fomoTag?: string
    /**
   * Whether or not the RV clicked has the weekly or monthly discount displayed on the nightly price. Note: If there are no dates applied, don’t return this parameter.
   */
    hasDiscount?: boolean
    /**
   * Whether or not the RV clicked has flexible dates displayed on the listing card
   */
    hasFlexibleDates?: boolean
    /**
   * Whether the map was open or not when the listing was clicked.
   */
    isMapOpen: boolean
    /**
   * Whether or not the RV clicked was available because of the ShortStays feature.
   */
    isShortStay: boolean
    /**
   * Whether or not the RV clicked has the Superhost badge on the card
   */
    isSuperhost: boolean
    /**
   * What variant of the listing card was clicked
   */
    listCardVariant: 'gallery' | 'map'
    /**
   * The column in the gallery grid where the listing was clicked.
   */
    listColumnNumber: number
    /**
   * The row in the gallery grid where the listing was clicked
   */
    listRowNumber: number
    pageSource: string
    /**
   * path that relates to the exact photo that is now being shown (reflecting the path column we have for that photo in this table)
   */
    photoPath: string
    /**
   * the position of the photo when the user clicks on the listing card. (ie. if the user is on photo number 3 and then clicks on the listing card, then this parameter should return 3.)  array index +1
   */
    photoPosition?: number
    /**
   * Array of objects containing nested properties for each listing in the array.
   */
    rv: {
    /**
     * Currency of listing price.
     */
      currency: 'CAD' | 'USD' | 'cad' | 'usd'
      /**
     * Distance from center point of user's search
     */
      distanceKm?: number
      /**
     * The unit of measurement for distance values.
     */
      distanceUnit: 'km' | 'mi' | 'miles'
      /**
     * URL of hero image.
     */
      heroImage: string
      /**
     * Array of attributes of the hero image.
     */
      imageAttributes?: string[]
      /**
     * Whether or not the listing is favorited by the user.
     */
      isFavourite: boolean
      /**
     * Whether or not the listing is featured.
     */
      isFeatured: boolean
      /**
     * Whether or not the listing has instant book activated.
     */
      isInstantBook: boolean
      /**
     * Position in the listing set of the listing.
     */
      listPosition?: number
      /**
     * City where the listing is located.
     */
      listingCity: string
      /**
     * Country where the listing is located
     */
      listingCountry: 'CA' | 'US'
      /**
     * Region/state/province the listing is located.
     */
      listingRegion: string
      /**
     * How many sleeping spots the listing has
     */
      listingSleepingSpots: number
      /**
     * Class of vehicle of the listing.
     */
      listingType:
        | 'Campervan'
        | 'ClassA'
        | 'ClassB'
        | 'ClassC'
        | 'FifthWheel'
        | 'Hybrid'
        | 'MicroTrailer'
        | 'MotorHome'
        | 'RVCottage'
        | 'TentTrailer'
        | 'ToyHauler'
        | 'Trailer'
        | 'TravelTrailer'
        | 'TruckCamper'
        | 'VintageMotorHome'
        | 'VintageTrailer'
      /**
     * Base price of the listing.
     */
      nightlyRate: number
      /**
     * Number of reviews the listing has.
     */
      numReviews: number | null
      /**
     * Type of vehicle of the listing.
     */
      rentalType: 'Motorized' | 'RV Cottage' | 'Towable'
      /**
     * Whether or not reviews were shown on the card for this listing.
     */
      reviewsShown: boolean
      /**
     * ID of the listing.
     */
      rvId: string
      /**
     * Name of the listing.
     */
      rvName: string
      /**
     * This is the nightly rate that is displayed for the listing that has smart pricing
     */
      smartNightlyRate?: number | null
      /**
     * Star rating of the listing.
     */
      starRating?: number
      undatedTripEnd?: string
      undatedTripStart?: string
    }
    /**
   * The RV type that the listing they are clicking
   */
    rvType: string

  }
  'ListingClicked [v1]': {

    cta: string
    /**
   * Whether or not the distance is shown for the listing.
   */
    distanceShown: boolean
    /**
   * Whether the map was open or not when the listing was clicked.
   */
    isMapOpen: boolean
    /**
   * What variant of the listing card was clicked
   */
    listCardVariant: 'gallery' | 'map'
    /**
   * The column in the gallery grid where the listing was clicked.
   */
    listColumnNumber: number
    /**
   * The row in the gallery grid where the listing was clicked
   */
    listRowNumber: number
    pageSource: string
    /**
   * path that relates to the exact photo that is now being shown (reflecting the path column we have for that photo in this table)
   */
    photoPath: string
    /**
   * the position of the photo when the user clicks on the listing card. (ie. if the user is on photo number 3 and then clicks on the listing card, then this parameter should return 3.)  array index +1
   */
    photoPosition?: number
    requestId: string
    /**
   * Array of objects containing nested properties for each listing in the array.
   */
    rv: {
    /**
     * Currency of listing price.
     */
      currency: 'CAD' | 'USD' | 'cad' | 'usd'
      /**
     * Distance from center point of user's search
     */
      distanceKm: number
      /**
     * The unit of measurement for distance values.
     */
      distanceUnit: 'km' | 'mi'
      /**
     * URL of hero image.
     */
      heroImage: string
      /**
     * Array of attributes of the hero image.
     */
      imageAttributes?: string[]
      /**
     * Whether or not the listing is favorited by the user.
     */
      isFavourite: boolean
      /**
     * Whether or not the listing is featured.
     */
      isFeatured: boolean
      /**
     * Whether or not the listing has instant book activated.
     */
      isInstantBook: boolean
      /**
     * Position in the listing set of the listing.
     */
      listPosition: number
      /**
     * City where the listing is located.
     */
      listingCity: string
      /**
     * Country where the listing is located
     */
      listingCountry: 'CA' | 'US'
      /**
     * Region/state/province the listing is located.
     */
      listingRegion: string
      /**
     * How many sleeping spots the listing has
     */
      listingSleepingSpots: number
      /**
     * Class of vehicle of the listing.
     */
      listingType:
        | 'Campervan'
        | 'ClassA'
        | 'ClassB'
        | 'ClassC'
        | 'FifthWheel'
        | 'Hybrid'
        | 'MicroTrailer'
        | 'MotorHome'
        | 'RVCottage'
        | 'TentTrailer'
        | 'ToyHauler'
        | 'Trailer'
        | 'TravelTrailer'
        | 'TruckCamper'
        | 'VintageMotorHome'
        | 'VintageTrailer'
      /**
     * Base price of the listing.
     */
      nightlyRate: number
      /**
     * Number of reviews the listing has.
     */
      numReviews: number
      /**
     * Type of vehicle of the listing.
     */
      rentalType: 'Motorized' | 'RV Cottage' | 'Towable'
      /**
     * ID of the listing.
     */
      rvId: string
      /**
     * Name of the listing.
     */
      rvName: string
      /**
     * Star rating of the listing.
     */
      starRating: number
    }

  }
  'ListingClicked [v2]': {

    cta: string
    /**
   * Whether or not the distance is shown for the listing.
   */
    distanceShown: boolean
    /**
   * Whether or not the RV clicked has the weekly or monthly discount displayed on the nightly price. Note: If there are no dates applied, don’t return this parameter.
   */
    hasDiscount?: boolean
    /**
   * Whether or not the RV clicked has flexible dates displayed on the listing card
   */
    hasFlexibleDates?: boolean
    /**
   * Whether the map was open or not when the listing was clicked.
   */
    isMapOpen: boolean
    /**
   * Whether or not the RV clicked was available because of the ShortStays feature.
   */
    isShortStay: boolean
    /**
   * Whether or not the RV clicked has the Superhost badge on the card
   */
    isSuperhost: boolean
    /**
   * What variant of the listing card was clicked
   */
    listCardVariant: 'gallery' | 'map'
    /**
   * The column in the gallery grid where the listing was clicked.
   */
    listColumnNumber: number
    /**
   * The row in the gallery grid where the listing was clicked
   */
    listRowNumber: number
    pageSource: string
    /**
   * path that relates to the exact photo that is now being shown (reflecting the path column we have for that photo in this table)
   */
    photoPath: string
    /**
   * the position of the photo when the user clicks on the listing card. (ie. if the user is on photo number 3 and then clicks on the listing card, then this parameter should return 3.)  array index +1
   */
    photoPosition?: number
    /**
   * The rental type that the listing they are clicking
   */
    rentalType: string
    requestId: string
    /**
   * Array of objects containing nested properties for each listing in the array.
   */
    rv: {
    /**
     * Currency of listing price.
     */
      currency: 'CAD' | 'USD' | 'cad' | 'usd'
      /**
     * Distance from center point of user's search
     */
      distanceKm: number
      /**
     * The unit of measurement for distance values.
     */
      distanceUnit: 'km' | 'mi'
      /**
     * URL of hero image.
     */
      heroImage: string
      /**
     * Array of attributes of the hero image.
     */
      imageAttributes?: string[]
      /**
     * Whether or not the listing is favorited by the user.
     */
      isFavourite: boolean
      /**
     * Whether or not the listing is featured.
     */
      isFeatured: boolean
      /**
     * Whether or not the listing has instant book activated.
     */
      isInstantBook: boolean
      /**
     * Position in the listing set of the listing.
     */
      listPosition: number
      /**
     * City where the listing is located.
     */
      listingCity: string
      /**
     * Country where the listing is located
     */
      listingCountry: 'CA' | 'US'
      /**
     * Region/state/province the listing is located.
     */
      listingRegion: string
      /**
     * How many sleeping spots the listing has
     */
      listingSleepingSpots: number
      /**
     * Class of vehicle of the listing.
     */
      listingType:
        | 'Campervan'
        | 'ClassA'
        | 'ClassB'
        | 'ClassC'
        | 'FifthWheel'
        | 'Hybrid'
        | 'MicroTrailer'
        | 'MotorHome'
        | 'RVCottage'
        | 'TentTrailer'
        | 'ToyHauler'
        | 'Trailer'
        | 'TravelTrailer'
        | 'TruckCamper'
        | 'VintageMotorHome'
        | 'VintageTrailer'
      /**
     * Base price of the listing.
     */
      nightlyRate: number
      /**
     * Number of reviews the listing has.
     */
      numReviews: number
      /**
     * Type of vehicle of the listing.
     */
      rentalType: 'Motorized' | 'RV Cottage' | 'Towable'
      /**
     * ID of the listing.
     */
      rvId: string
      /**
     * Name of the listing.
     */
      rvName: string
      /**
     * Star rating of the listing.
     */
      starRating: number
      undatedTripEnd?: string
      undatedTripStart?: string
    }
    /**
   * The RV type that the listing they are clicking
   */
    rvType: string

  }
  'ListingClicked [v3]': {

    cta: string
    /**
   * Whether or not the distance is shown for the listing.
   */
    distanceShown: boolean
    /**
   * Whether or not the RV clicked has the weekly or monthly discount displayed on the nightly price. Note: If there are no dates applied, don’t return this parameter.
   */
    hasDiscount?: boolean
    /**
   * Whether or not the RV clicked has flexible dates displayed on the listing card
   */
    hasFlexibleDates?: boolean
    /**
   * Whether the map was open or not when the listing was clicked.
   */
    isMapOpen: boolean
    /**
   * Whether or not the RV clicked was available because of the ShortStays feature.
   */
    isShortStay: boolean
    /**
   * Whether or not the RV clicked has the Superhost badge on the card
   */
    isSuperhost: boolean
    /**
   * What variant of the listing card was clicked
   */
    listCardVariant: 'gallery' | 'map'
    /**
   * The column in the gallery grid where the listing was clicked.
   */
    listColumnNumber: number
    /**
   * The row in the gallery grid where the listing was clicked
   */
    listRowNumber: number
    pageSource: string
    /**
   * path that relates to the exact photo that is now being shown (reflecting the path column we have for that photo in this table)
   */
    photoPath: string
    /**
   * the position of the photo when the user clicks on the listing card. (ie. if the user is on photo number 3 and then clicks on the listing card, then this parameter should return 3.)  array index +1
   */
    photoPosition?: number
    /**
   * The rental type that the listing they are clicking
   */
    rentalType: string
    requestId: string
    /**
   * Array of objects containing nested properties for each listing in the array.
   */
    rv: {
    /**
     * Currency of listing price.
     */
      currency: 'CAD' | 'USD' | 'cad' | 'usd'
      /**
     * Distance from center point of user's search
     */
      distanceKm: number
      /**
     * The unit of measurement for distance values.
     */
      distanceUnit: 'km' | 'mi'
      /**
     * URL of hero image.
     */
      heroImage: string
      /**
     * Array of attributes of the hero image.
     */
      imageAttributes?: string[]
      /**
     * Whether or not the listing is favorited by the user.
     */
      isFavourite: boolean
      /**
     * Whether or not the listing is featured.
     */
      isFeatured: boolean
      /**
     * Whether or not the listing has instant book activated.
     */
      isInstantBook: boolean
      /**
     * Position in the listing set of the listing.
     */
      listPosition: number
      /**
     * City where the listing is located.
     */
      listingCity: string
      /**
     * Country where the listing is located
     */
      listingCountry: 'CA' | 'US'
      /**
     * Region/state/province the listing is located.
     */
      listingRegion: string
      /**
     * How many sleeping spots the listing has
     */
      listingSleepingSpots: number
      /**
     * Class of vehicle of the listing.
     */
      listingType:
        | 'Campervan'
        | 'ClassA'
        | 'ClassB'
        | 'ClassC'
        | 'FifthWheel'
        | 'Hybrid'
        | 'MicroTrailer'
        | 'MotorHome'
        | 'RVCottage'
        | 'TentTrailer'
        | 'ToyHauler'
        | 'Trailer'
        | 'TravelTrailer'
        | 'TruckCamper'
        | 'VintageMotorHome'
        | 'VintageTrailer'
      /**
     * Base price of the listing.
     */
      nightlyRate: number
      /**
     * Number of reviews the listing has.
     */
      numReviews: number
      /**
     * Type of vehicle of the listing.
     */
      rentalType: 'Motorized' | 'RV Cottage' | 'Towable'
      /**
     * ID of the listing.
     */
      rvId: string
      /**
     * Name of the listing.
     */
      rvName: string
      /**
     * This is the nightly rate that is displayed for the listing that has smart pricing
     */
      smartNightlyRate: number
      /**
     * Star rating of the listing.
     */
      starRating: number
      undatedTripEnd?: string
      undatedTripStart?: string
    }
    /**
   * The RV type that the listing they are clicking
   */
    rvType: string

  }
  'ListingClicked [v4]': {

    cta?: string
    /**
   * Whether or not the distance is shown for the listing.
   */
    distanceShown: boolean
    /**
   * Whether or not the RV clicked has the weekly or monthly discount displayed on the nightly price. Note: If there are no dates applied, don’t return this parameter.
   */
    hasDiscount?: boolean
    /**
   * Whether or not the RV clicked has flexible dates displayed on the listing card
   */
    hasFlexibleDates?: boolean
    /**
   * Whether the map was open or not when the listing was clicked.
   */
    isMapOpen: boolean
    /**
   * Whether or not the RV clicked was available because of the ShortStays feature.
   */
    isShortStay: boolean
    /**
   * Whether or not the RV clicked has the Superhost badge on the card
   */
    isSuperhost: boolean
    /**
   * What variant of the listing card was clicked
   */
    listCardVariant: 'gallery' | 'map'
    /**
   * The column in the gallery grid where the listing was clicked.
   */
    listColumnNumber: number
    /**
   * The row in the gallery grid where the listing was clicked
   */
    listRowNumber: number
    pageSource: string
    /**
   * path that relates to the exact photo that is now being shown (reflecting the path column we have for that photo in this table)
   */
    photoPath: string
    /**
   * the position of the photo when the user clicks on the listing card. (ie. if the user is on photo number 3 and then clicks on the listing card, then this parameter should return 3.)  array index +1
   */
    photoPosition?: number
    /**
   * Array of objects containing nested properties for each listing in the array.
   */
    rv: {
    /**
     * Currency of listing price.
     */
      currency: 'CAD' | 'USD' | 'cad' | 'usd'
      /**
     * Distance from center point of user's search
     */
      distanceKm: number
      /**
     * The unit of measurement for distance values.
     */
      distanceUnit: 'km' | 'mi'
      /**
     * URL of hero image.
     */
      heroImage: string
      /**
     * Array of attributes of the hero image.
     */
      imageAttributes?: string[]
      /**
     * Whether or not the listing is favorited by the user.
     */
      isFavourite: boolean
      /**
     * Whether or not the listing is featured.
     */
      isFeatured: boolean
      /**
     * Whether or not the listing has instant book activated.
     */
      isInstantBook: boolean
      /**
     * Position in the listing set of the listing.
     */
      listPosition: number
      /**
     * City where the listing is located.
     */
      listingCity: string
      /**
     * Country where the listing is located
     */
      listingCountry: 'CA' | 'US'
      /**
     * Region/state/province the listing is located.
     */
      listingRegion: string
      /**
     * How many sleeping spots the listing has
     */
      listingSleepingSpots: number
      /**
     * Class of vehicle of the listing.
     */
      listingType:
        | 'Campervan'
        | 'ClassA'
        | 'ClassB'
        | 'ClassC'
        | 'FifthWheel'
        | 'Hybrid'
        | 'MicroTrailer'
        | 'MotorHome'
        | 'RVCottage'
        | 'TentTrailer'
        | 'ToyHauler'
        | 'Trailer'
        | 'TravelTrailer'
        | 'TruckCamper'
        | 'VintageMotorHome'
        | 'VintageTrailer'
      /**
     * Base price of the listing.
     */
      nightlyRate: number
      /**
     * Number of reviews the listing has.
     */
      numReviews: number | null
      /**
     * Type of vehicle of the listing.
     */
      rentalType: 'Motorized' | 'RV Cottage' | 'Towable'
      /**
     * Whether or not reviews were shown on the card for this listing.
     */
      reviewsShown: boolean
      /**
     * ID of the listing.
     */
      rvId: string
      /**
     * Name of the listing.
     */
      rvName: string
      /**
     * This is the nightly rate that is displayed for the listing that has smart pricing
     */
      smartNightlyRate: number | null
      /**
     * Star rating of the listing.
     */
      starRating: number
      undatedTripEnd?: string
      undatedTripStart?: string
    }
    /**
   * The RV type that the listing they are clicking
   */
    rvType: string

  }
  'ListingClicked [v5]': {

    cta?: string
    /**
   * Whether or not the distance is shown for the listing.
   */
    distanceShown: boolean
    /**
   * Whether or not the RV clicked has the weekly or monthly discount displayed on the nightly price. Note: If there are no dates applied, don’t return this parameter.
   */
    hasDiscount?: boolean
    /**
   * Whether or not the RV clicked has flexible dates displayed on the listing card
   */
    hasFlexibleDates?: boolean
    /**
   * Whether the map was open or not when the listing was clicked.
   */
    isMapOpen: boolean
    /**
   * Whether or not the RV clicked was available because of the ShortStays feature.
   */
    isShortStay: boolean
    /**
   * Whether or not the RV clicked has the Superhost badge on the card
   */
    isSuperhost: boolean
    /**
   * What variant of the listing card was clicked
   */
    listCardVariant: 'gallery' | 'map'
    /**
   * The column in the gallery grid where the listing was clicked.
   */
    listColumnNumber: number
    /**
   * The row in the gallery grid where the listing was clicked
   */
    listRowNumber: number
    pageSource: string
    /**
   * path that relates to the exact photo that is now being shown (reflecting the path column we have for that photo in this table)
   */
    photoPath: string
    /**
   * the position of the photo when the user clicks on the listing card. (ie. if the user is on photo number 3 and then clicks on the listing card, then this parameter should return 3.)  array index +1
   */
    photoPosition?: number
    /**
   * Array of objects containing nested properties for each listing in the array.
   */
    rv: {
    /**
     * Currency of listing price.
     */
      currency: 'CAD' | 'USD' | 'cad' | 'usd'
      /**
     * Distance from center point of user's search
     */
      distanceKm: number
      /**
     * The unit of measurement for distance values.
     */
      distanceUnit: 'km' | 'mi'
      /**
     * URL of hero image.
     */
      heroImage: string
      /**
     * Array of attributes of the hero image.
     */
      imageAttributes?: string[]
      /**
     * Whether or not the listing is favorited by the user.
     */
      isFavourite: boolean
      /**
     * Whether or not the listing is featured.
     */
      isFeatured: boolean
      /**
     * Whether or not the listing has instant book activated.
     */
      isInstantBook: boolean
      /**
     * Position in the listing set of the listing.
     */
      listPosition: number
      /**
     * City where the listing is located.
     */
      listingCity: string
      /**
     * Country where the listing is located
     */
      listingCountry: 'CA' | 'US'
      /**
     * Region/state/province the listing is located.
     */
      listingRegion: string
      /**
     * How many sleeping spots the listing has
     */
      listingSleepingSpots: number
      /**
     * Class of vehicle of the listing.
     */
      listingType:
        | 'Campervan'
        | 'ClassA'
        | 'ClassB'
        | 'ClassC'
        | 'FifthWheel'
        | 'Hybrid'
        | 'MicroTrailer'
        | 'MotorHome'
        | 'RVCottage'
        | 'TentTrailer'
        | 'ToyHauler'
        | 'Trailer'
        | 'TravelTrailer'
        | 'TruckCamper'
        | 'VintageMotorHome'
        | 'VintageTrailer'
      /**
     * Base price of the listing.
     */
      nightlyRate: number
      /**
     * Number of reviews the listing has.
     */
      numReviews: number | null
      /**
     * Type of vehicle of the listing.
     */
      rentalType: 'Motorized' | 'RV Cottage' | 'Towable'
      /**
     * Whether or not reviews were shown on the card for this listing.
     */
      reviewsShown: boolean
      /**
     * ID of the listing.
     */
      rvId: string
      /**
     * Name of the listing.
     */
      rvName: string
      /**
     * This is the nightly rate that is displayed for the listing that has smart pricing
     */
      smartNightlyRate?: number | null
      /**
     * Star rating of the listing.
     */
      starRating: number
      undatedTripEnd?: string
      undatedTripStart?: string
    }
    /**
   * The RV type that the listing they are clicking
   */
    rvType: string

  }
  'ListingClicked [v6]': {

    cta?: string
    /**
   * Whether or not the distance is shown for the listing.
   */
    distanceShown: boolean
    /**
   * If the listing has no FOMO tag then the result will be null. If the listing has tag, then the FOMO will be defined as described in the string
   */
    fomoTag?: string
    /**
   * Whether or not the RV clicked has the weekly or monthly discount displayed on the nightly price. Note: If there are no dates applied, don’t return this parameter.
   */
    hasDiscount?: boolean
    /**
   * Whether or not the RV clicked has flexible dates displayed on the listing card
   */
    hasFlexibleDates?: boolean
    /**
   * Whether the map was open or not when the listing was clicked.
   */
    isMapOpen: boolean
    /**
   * Whether or not the RV clicked was available because of the ShortStays feature.
   */
    isShortStay: boolean
    /**
   * Whether or not the RV clicked has the Superhost badge on the card
   */
    isSuperhost: boolean
    /**
   * What variant of the listing card was clicked
   */
    listCardVariant: 'gallery' | 'map'
    /**
   * The column in the gallery grid where the listing was clicked.
   */
    listColumnNumber: number
    /**
   * The row in the gallery grid where the listing was clicked
   */
    listRowNumber: number
    pageSource: string
    /**
   * path that relates to the exact photo that is now being shown (reflecting the path column we have for that photo in this table)
   */
    photoPath: string
    /**
   * the position of the photo when the user clicks on the listing card. (ie. if the user is on photo number 3 and then clicks on the listing card, then this parameter should return 3.)  array index +1
   */
    photoPosition?: number
    /**
   * Array of objects containing nested properties for each listing in the array.
   */
    rv: {
    /**
     * Currency of listing price.
     */
      currency: 'CAD' | 'USD' | 'cad' | 'usd'
      /**
     * Distance from center point of user's search
     */
      distanceKm?: number
      /**
     * The unit of measurement for distance values.
     */
      distanceUnit: 'km' | 'mi' | 'miles'
      /**
     * URL of hero image.
     */
      heroImage: string
      /**
     * Array of attributes of the hero image.
     */
      imageAttributes?: string[]
      /**
     * Whether or not the listing is favorited by the user.
     */
      isFavourite: boolean
      /**
     * Whether or not the listing is featured.
     */
      isFeatured: boolean
      /**
     * Whether or not the listing has instant book activated.
     */
      isInstantBook: boolean
      /**
     * Position in the listing set of the listing.
     */
      listPosition?: number
      /**
     * City where the listing is located.
     */
      listingCity: string
      /**
     * Country where the listing is located
     */
      listingCountry: 'CA' | 'US'
      /**
     * Region/state/province the listing is located.
     */
      listingRegion: string
      /**
     * How many sleeping spots the listing has
     */
      listingSleepingSpots: number
      /**
     * Class of vehicle of the listing.
     */
      listingType:
        | 'Campervan'
        | 'ClassA'
        | 'ClassB'
        | 'ClassC'
        | 'FifthWheel'
        | 'Hybrid'
        | 'MicroTrailer'
        | 'MotorHome'
        | 'RVCottage'
        | 'TentTrailer'
        | 'ToyHauler'
        | 'Trailer'
        | 'TravelTrailer'
        | 'TruckCamper'
        | 'VintageMotorHome'
        | 'VintageTrailer'
      /**
     * Base price of the listing.
     */
      nightlyRate: number
      /**
     * Number of reviews the listing has.
     */
      numReviews: number | null
      /**
     * Type of vehicle of the listing.
     */
      rentalType: 'Motorized' | 'RV Cottage' | 'Towable'
      /**
     * Whether or not reviews were shown on the card for this listing.
     */
      reviewsShown: boolean
      /**
     * ID of the listing.
     */
      rvId: string
      /**
     * Name of the listing.
     */
      rvName: string
      /**
     * This is the nightly rate that is displayed for the listing that has smart pricing
     */
      smartNightlyRate?: number | null
      /**
     * Star rating of the listing.
     */
      starRating?: number
      undatedTripEnd?: string
      undatedTripStart?: string
    }
    /**
   * The RV type that the listing they are clicking
   */
    rvType: string

  }
  'ListingDeleted': {

    /**
   * Internal userID of the RVezy agent that approved the verification of the user’s ID.
   */
    adminUserId?: number
    /**
   * Whether or not the publishing event was triggered by Admin.
   */
    isAdminAction: boolean
    /**
   * The reason selected when deleting the RV
   */
    listingDeleteReason: string
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId: string

  }
  'ListingDeleted [v1]': {

    /**
   * Internal userID of the RVezy agent that approved the verification of the user’s ID.
   */
    adminUserId?: number
    /**
   * Whether or not the publishing event was triggered by Admin.
   */
    isAdminAction: boolean
    /**
   * The reason selected when deleting the RV
   */
    listingDeleteReason: string
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId: string

  }
  'ListingDraftCreated': {

    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId: string

  }
  'ListingDraftCreated [v1]': {

    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId: string

  }
  'ListingPhotoUpdated': {

    /**
   * The CTA that got the user to this screen.
   */
    cta?: string
    /**
   * Whether or not the associated listing is in a draft state. Different from isPublished.
   */
    isDraft?: boolean
    /**
   * The number of photos existing after the update was made.
   */
    listingPhotos: number
    /**
   * The screen that the user came from.
   */
    pageSource?: string
    /**
   * The type of update that was made to the RV’s photos.
   */
    photoUpdateType: 'add' | 'edit' | 'remove' | 'reorder'
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId: string

  }
  'ListingPhotoUpdated [v1]': {

    /**
   * The CTA that got the user to this screen.
   */
    cta?: string
    /**
   * Whether or not the associated listing is in a draft state. Different from isPublished.
   */
    isDraft?: boolean
    /**
   * The number of photos existing after the update was made.
   */
    listingPhotos: number
    /**
   * The screen that the user came from.
   */
    pageSource?: string
    /**
   * The type of update that was made to the RV’s photos.
   */
    photoUpdateType: 'add' | 'edit' | 'remove' | 'reorder'
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId: string

  }
  'ListingPublished': {

    /**
   * The userId of the user taking the admin action. Usually via the Operations Dashboard. Does not include masquerading.
   */
    adminUserId?: number
    /**
   * Whether or not the action was taken by an admin user. Usually via the Operations Dashboard. Does not include instances where the action was taken through masquerading.
   */
    isAdminAction?: boolean
    /**
   * Whether or not it is the first time this listing is published. (if the RV has been un-published and re-published this would be false)
   */
    isFirstPublish?: boolean
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId: string

  }
  'ListingPublished [v1]': {

    /**
   * The userId of the user taking the admin action. Usually via the Operations Dashboard. Does not include masquerading.
   */
    adminUserId?: number
    /**
   * Whether or not the action was taken by an admin user. Usually via the Operations Dashboard. Does not include instances where the action was taken through masquerading.
   */
    isAdminAction?: boolean
    /**
   * Whether or not it is the first time this listing is published. (if the RV has been un-published and re-published this would be false)
   */
    isFirstPublish?: boolean
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId: string

  }
  'ListingSetPresented': {

    /**
   * The CTA that got the user to this screen. See CTAs.
   */
    cta?: string
    /**
   * The page number corresponding to the pagination index of the gallery on which the listing set was presented.
   */
    listingPageNumber: number
    /**
   * The count of pages in the pagination index returned with the listing set.
   */
    listingPageSize: number
    /**
   * Array of objects containing nested properties for each listing in the array.
   */
    listings: {
      currency: 'CAD' | 'USD' | 'cad' | 'usd'
      distanceKm: number
      distanceUnit: 'km' | 'mi'
      /**
     * If the listing has no FOMO tag then the result will be null. If the listing has tag, then the FOMO will be defined as described in the string
     */
      fomoTag?: string
      hasDelivery: boolean
      heroImage: string
      imageAttributes?: string[]
      isFavourite: boolean
      isFeatured: boolean
      isInstantBook: boolean
      listPosition: number
      listingCity: string
      listingCountry: 'CA' | 'US'
      listingRegion: string
      listingSleepingSpots: number
      listingType:
        | 'Campervan'
        | 'ClassA'
        | 'ClassB'
        | 'ClassC'
        | 'FifthWheel'
        | 'Hybrid'
        | 'MicroTrailer'
        | 'MotorHome'
        | 'RVCottage'
        | 'TentTrailer'
        | 'ToyHauler'
        | 'Trailer'
        | 'TravelTrailer'
        | 'TruckCamper'
        | 'VintageMotorHome'
        | 'VintageTrailer'
      nightlyRate: number
      numReviews: number
      rentalType: 'Motorized' | 'RV Cottage' | 'Towable'
      /**
     * Whether or not reviews were shown on the card for this listing.
     */
      reviewsShown: boolean
      rvId: string
      rvName: string
      starRating: number
      undatedTripEnd?: string
      undatedTripStart?: string
    }[]
    pageSource: string

  }
  'ListingSetPresented [v1]': {

    cta: string
    /**
   * Array of objects containing nested properties for each listing in the array.
   */
    listings: {
      currency: 'CAD' | 'USD' | 'cad' | 'usd'
      distanceKm: number
      distanceUnit: 'km' | 'mi'
      hasDelivery: boolean
      heroImage: string
      imageAttributes?: string[]
      isFavourite: boolean
      isFeatured: boolean
      isInstantBook: boolean
      listPosition: number
      listingCity: string
      listingCountry: 'CA' | 'US'
      listingRegion: string
      listingSleepingSpots: number
      listingType:
        | 'Campervan'
        | 'ClassA'
        | 'ClassB'
        | 'ClassC'
        | 'FifthWheel'
        | 'Hybrid'
        | 'MicroTrailer'
        | 'MotorHome'
        | 'RVCottage'
        | 'TentTrailer'
        | 'ToyHauler'
        | 'Trailer'
        | 'TravelTrailer'
        | 'TruckCamper'
        | 'VintageMotorHome'
        | 'VintageTrailer'
      nightlyRate: number
      numReviews: number
      rentalType: 'Motorized' | 'RV Cottage' | 'Towable'
      rvId: string
      rvName: string
      starRating: number
      undatedTripEnd?: string
      undatedTripStart?: string
    }[]
    pageSource: string
    requestId: string

  }
  'ListingSetPresented [v2]': {

    /**
   * The algorithm that is returning the results. Maps loosely to CTAs for listingViewed.
   */
    algorithm: string
    /**
   * The CTA that got the user to this screen. See CTAs.
   */
    cta?: string
    /**
   * The page number corresponding to the pagination index of the gallery on which the listing set was presented.
   */
    listingPageNumber: number
    /**
   * The count of pages in the pagination index returned with the listing set.
   */
    listingPageSize: number
    /**
   * Array of objects containing nested properties for each listing in the array.
   */
    listings: {
      currency: 'CAD' | 'USD' | 'cad' | 'usd'
      distanceKm: number
      distanceUnit: 'km' | 'mi'
      hasDelivery: boolean
      heroImage: string
      imageAttributes?: string[]
      isFavourite: boolean
      isFeatured: boolean
      isInstantBook: boolean
      listPosition: number
      listingCity: string
      listingCountry: 'CA' | 'US'
      listingRegion: string
      listingSleepingSpots: number
      listingType:
        | 'Campervan'
        | 'ClassA'
        | 'ClassB'
        | 'ClassC'
        | 'FifthWheel'
        | 'Hybrid'
        | 'MicroTrailer'
        | 'MotorHome'
        | 'RVCottage'
        | 'TentTrailer'
        | 'ToyHauler'
        | 'Trailer'
        | 'TravelTrailer'
        | 'TruckCamper'
        | 'VintageMotorHome'
        | 'VintageTrailer'
      nightlyRate: number
      numReviews: number
      rentalType: 'Motorized' | 'RV Cottage' | 'Towable'
      /**
     * Whether or not reviews were shown on the card for this listing.
     */
      reviewsShown: boolean
      rvId: string
      rvName: string
      starRating: number
      undatedTripEnd?: string
      undatedTripStart?: string
    }[]
    pageSource: string

  }
  'ListingSetPresented [v3]': {

    /**
   * The CTA that got the user to this screen. See CTAs.
   */
    cta?: string
    /**
   * The page number corresponding to the pagination index of the gallery on which the listing set was presented.
   */
    listingPageNumber: number
    /**
   * The count of pages in the pagination index returned with the listing set.
   */
    listingPageSize: number
    /**
   * Array of objects containing nested properties for each listing in the array.
   */
    listings: {
      currency: 'CAD' | 'USD' | 'cad' | 'usd'
      distanceKm: number
      distanceUnit: 'km' | 'mi'
      hasDelivery: boolean
      heroImage: string
      imageAttributes?: string[]
      isFavourite: boolean
      isFeatured: boolean
      isInstantBook: boolean
      listPosition: number
      listingCity: string
      listingCountry: 'CA' | 'US'
      listingRegion: string
      listingSleepingSpots: number
      listingType:
        | 'Campervan'
        | 'ClassA'
        | 'ClassB'
        | 'ClassC'
        | 'FifthWheel'
        | 'Hybrid'
        | 'MicroTrailer'
        | 'MotorHome'
        | 'RVCottage'
        | 'TentTrailer'
        | 'ToyHauler'
        | 'Trailer'
        | 'TravelTrailer'
        | 'TruckCamper'
        | 'VintageMotorHome'
        | 'VintageTrailer'
      nightlyRate: number
      numReviews: number
      rentalType: 'Motorized' | 'RV Cottage' | 'Towable'
      /**
     * Whether or not reviews were shown on the card for this listing.
     */
      reviewsShown: boolean
      rvId: string
      rvName: string
      starRating: number
      undatedTripEnd?: string
      undatedTripStart?: string
    }[]
    pageSource: string

  }
  'ListingSetPresented [v4]': {

    /**
   * The CTA that got the user to this screen. See CTAs.
   */
    cta?: string
    /**
   * The page number corresponding to the pagination index of the gallery on which the listing set was presented.
   */
    listingPageNumber: number
    /**
   * The count of pages in the pagination index returned with the listing set.
   */
    listingPageSize: number
    /**
   * Array of objects containing nested properties for each listing in the array.
   */
    listings: {
      currency: 'CAD' | 'USD' | 'cad' | 'usd'
      distanceKm: number
      distanceUnit: 'km' | 'mi'
      /**
     * If the listing has no FOMO tag then the result will be null. If the listing has tag, then the FOMO will be defined as described in the string
     */
      fomoTag?: string
      hasDelivery: boolean
      heroImage: string
      imageAttributes?: string[]
      isFavourite: boolean
      isFeatured: boolean
      isInstantBook: boolean
      listPosition: number
      listingCity: string
      listingCountry: 'CA' | 'US'
      listingRegion: string
      listingSleepingSpots: number
      listingType:
        | 'Campervan'
        | 'ClassA'
        | 'ClassB'
        | 'ClassC'
        | 'FifthWheel'
        | 'Hybrid'
        | 'MicroTrailer'
        | 'MotorHome'
        | 'RVCottage'
        | 'TentTrailer'
        | 'ToyHauler'
        | 'Trailer'
        | 'TravelTrailer'
        | 'TruckCamper'
        | 'VintageMotorHome'
        | 'VintageTrailer'
      nightlyRate: number
      numReviews: number
      rentalType: 'Motorized' | 'RV Cottage' | 'Towable'
      /**
     * Whether or not reviews were shown on the card for this listing.
     */
      reviewsShown: boolean
      rvId: string
      rvName: string
      starRating: number
      undatedTripEnd?: string
      undatedTripStart?: string
    }[]
    pageSource: string

  }
  'ListingSetViewed': {

    cta?: string
    /**
   * The page number corresponding to the pagination index of the gallery on which the listing set was presented.
   */
    listingPageNumber: number
    /**
   * The count of pages in the pagination index returned with the listing set.
   */
    listingPageSize: number
    /**
   * Array of objects containing nested properties for each listing in the array.
   */
    listings: {
      currency: 'CAD' | 'USD' | 'cad' | 'usd'
      distanceKm?: number
      distanceUnit: 'km' | 'mi' | 'miles'
      /**
     * If the listing has no FOMO tag then the result will be null. If the listing has tag, then the FOMO will be defined as described in the string
     */
      fomoTag?: string
      hasDelivery: boolean
      heroImage: string
      imageAttributes?: string[]
      isFavourite: boolean
      isFeatured: boolean
      isInstantBook: boolean
      listPosition?: number
      listingCity: string
      listingCountry: 'CA' | 'US'
      listingRegion: string
      listingSleepingSpots: number
      listingType:
        | 'Campervan'
        | 'ClassA'
        | 'ClassB'
        | 'ClassC'
        | 'FifthWheel'
        | 'Hybrid'
        | 'MicroTrailer'
        | 'MotorHome'
        | 'RVCottage'
        | 'TentTrailer'
        | 'ToyHauler'
        | 'Trailer'
        | 'TravelTrailer'
        | 'TruckCamper'
        | 'VintageMotorHome'
        | 'VintageTrailer'
      nightlyRate: number
      numReviews: number
      rentalType: 'Motorized' | 'RV Cottage' | 'Towable'
      /**
     * Whether or not reviews were shown on the card for this listing.
     */
      reviewsShown: boolean
      rvId: string
      rvName: string
      /**
     * This is the nightly rate that is displayed for the listing that has smart pricing
     */
      smartNightlyRate?: number | null
      starRating: number
      undatedTripEnd?: string
      undatedTripStart?: string
    }[]
    pageSource: string

  }
  'ListingSetViewed [v1]': {

    cta: string
    /**
   * Array of objects containing nested properties for each listing in the array.
   */
    listings: {
      currency: 'CAD' | 'USD' | 'cad' | 'usd'
      distanceKm: number
      distanceUnit: 'km' | 'mi'
      hasDelivery: boolean
      heroImage: string
      imageAttributes?: string[]
      isFavourite: boolean
      isFeatured: boolean
      isInstantBook: boolean
      listPosition: number
      listingCity: string
      listingCountry: 'CA' | 'US'
      listingRegion: string
      listingSleepingSpots: number
      listingType:
        | 'Campervan'
        | 'ClassA'
        | 'ClassB'
        | 'ClassC'
        | 'FifthWheel'
        | 'Hybrid'
        | 'MicroTrailer'
        | 'MotorHome'
        | 'RVCottage'
        | 'TentTrailer'
        | 'ToyHauler'
        | 'Trailer'
        | 'TravelTrailer'
        | 'TruckCamper'
        | 'VintageMotorHome'
        | 'VintageTrailer'
      nightlyRate: number
      numReviews: number
      rentalType: 'Motorized' | 'RV Cottage' | 'Towable'
      rvId: string
      rvName: string
      starRating: number
      undatedTripEnd?: string
      undatedTripStart?: string
    }[]
    pageSource: string
    requestId: string

  }
  'ListingSetViewed [v2]': {

    cta: string
    /**
   * Array of objects containing nested properties for each listing in the array.
   */
    listings: {
      currency: 'CAD' | 'USD' | 'cad' | 'usd'
      distanceKm: number
      distanceUnit: 'km' | 'mi'
      hasDelivery: boolean
      heroImage: string
      imageAttributes?: string[]
      isFavourite: boolean
      isFeatured: boolean
      isInstantBook: boolean
      listPosition: number
      listingCity: string
      listingCountry: 'CA' | 'US'
      listingRegion: string
      listingSleepingSpots: number
      listingType:
        | 'Campervan'
        | 'ClassA'
        | 'ClassB'
        | 'ClassC'
        | 'FifthWheel'
        | 'Hybrid'
        | 'MicroTrailer'
        | 'MotorHome'
        | 'RVCottage'
        | 'TentTrailer'
        | 'ToyHauler'
        | 'Trailer'
        | 'TravelTrailer'
        | 'TruckCamper'
        | 'VintageMotorHome'
        | 'VintageTrailer'
      nightlyRate: number
      numReviews: number
      rentalType: 'Motorized' | 'RV Cottage' | 'Towable'
      rvId: string
      rvName: string
      starRating: number
      undatedTripEnd?: string
      undatedTripStart?: string
    }[]
    pageSource: string
    requestId: string
    /**
   * This is the nightly rate that is displayed for the listing that has smart pricing
   */
    smartNightlyRate: number

  }
  'ListingSetViewed [v3]': {

    cta?: string
    /**
   * The page number corresponding to the pagination index of the gallery on which the listing set was presented.
   */
    listingPageNumber: number
    /**
   * The count of pages in the pagination index returned with the listing set.
   */
    listingPageSize: number
    /**
   * Array of objects containing nested properties for each listing in the array.
   */
    listings: {
      currency: 'CAD' | 'USD' | 'cad' | 'usd'
      distanceKm: number
      distanceUnit: 'km' | 'mi'
      hasDelivery: boolean
      heroImage: string
      imageAttributes?: string[]
      isFavourite: boolean
      isFeatured: boolean
      isInstantBook: boolean
      listPosition: number
      listingCity: string
      listingCountry: 'CA' | 'US'
      listingRegion: string
      listingSleepingSpots: number
      listingType:
        | 'Campervan'
        | 'ClassA'
        | 'ClassB'
        | 'ClassC'
        | 'FifthWheel'
        | 'Hybrid'
        | 'MicroTrailer'
        | 'MotorHome'
        | 'RVCottage'
        | 'TentTrailer'
        | 'ToyHauler'
        | 'Trailer'
        | 'TravelTrailer'
        | 'TruckCamper'
        | 'VintageMotorHome'
        | 'VintageTrailer'
      nightlyRate: number
      numReviews: number
      rentalType: 'Motorized' | 'RV Cottage' | 'Towable'
      /**
     * Whether or not reviews were shown on the card for this listing.
     */
      reviewsShown: boolean
      rvId: string
      rvName: string
      /**
     * This is the nightly rate that is displayed for the listing that has smart pricing
     */
      smartNightlyRate: number | null
      starRating: number
      undatedTripEnd?: string
      undatedTripStart?: string
    }[]
    pageSource: string

  }
  'ListingSetViewed [v4]': {

    cta?: string
    /**
   * The page number corresponding to the pagination index of the gallery on which the listing set was presented.
   */
    listingPageNumber: number
    /**
   * The count of pages in the pagination index returned with the listing set.
   */
    listingPageSize: number
    /**
   * Array of objects containing nested properties for each listing in the array.
   */
    listings: {
      currency: 'CAD' | 'USD' | 'cad' | 'usd'
      distanceKm: number
      distanceUnit: 'km' | 'mi'
      hasDelivery: boolean
      heroImage: string
      imageAttributes?: string[]
      isFavourite: boolean
      isFeatured: boolean
      isInstantBook: boolean
      listPosition: number
      listingCity: string
      listingCountry: 'CA' | 'US'
      listingRegion: string
      listingSleepingSpots: number
      listingType:
        | 'Campervan'
        | 'ClassA'
        | 'ClassB'
        | 'ClassC'
        | 'FifthWheel'
        | 'Hybrid'
        | 'MicroTrailer'
        | 'MotorHome'
        | 'RVCottage'
        | 'TentTrailer'
        | 'ToyHauler'
        | 'Trailer'
        | 'TravelTrailer'
        | 'TruckCamper'
        | 'VintageMotorHome'
        | 'VintageTrailer'
      nightlyRate: number
      numReviews: number
      rentalType: 'Motorized' | 'RV Cottage' | 'Towable'
      /**
     * Whether or not reviews were shown on the card for this listing.
     */
      reviewsShown: boolean
      rvId: string
      rvName: string
      /**
     * This is the nightly rate that is displayed for the listing that has smart pricing
     */
      smartNightlyRate?: number | null
      starRating: number
      undatedTripEnd?: string
      undatedTripStart?: string
    }[]
    pageSource: string

  }
  'ListingSetViewed [v5]': {

    cta?: string
    /**
   * The page number corresponding to the pagination index of the gallery on which the listing set was presented.
   */
    listingPageNumber: number
    /**
   * The count of pages in the pagination index returned with the listing set.
   */
    listingPageSize: number
    /**
   * Array of objects containing nested properties for each listing in the array.
   */
    listings: {
      currency: 'CAD' | 'USD' | 'cad' | 'usd'
      distanceKm?: number
      distanceUnit: 'km' | 'mi' | 'miles'
      /**
     * If the listing has no FOMO tag then the result will be null. If the listing has tag, then the FOMO will be defined as described in the string
     */
      fomoTag?: string
      hasDelivery: boolean
      heroImage: string
      imageAttributes?: string[]
      isFavourite: boolean
      isFeatured: boolean
      isInstantBook: boolean
      listPosition?: number
      listingCity: string
      listingCountry: 'CA' | 'US'
      listingRegion: string
      listingSleepingSpots: number
      listingType:
        | 'Campervan'
        | 'ClassA'
        | 'ClassB'
        | 'ClassC'
        | 'FifthWheel'
        | 'Hybrid'
        | 'MicroTrailer'
        | 'MotorHome'
        | 'RVCottage'
        | 'TentTrailer'
        | 'ToyHauler'
        | 'Trailer'
        | 'TravelTrailer'
        | 'TruckCamper'
        | 'VintageMotorHome'
        | 'VintageTrailer'
      nightlyRate: number
      numReviews: number
      rentalType: 'Motorized' | 'RV Cottage' | 'Towable'
      /**
     * Whether or not reviews were shown on the card for this listing.
     */
      reviewsShown: boolean
      rvId: string
      rvName: string
      /**
     * This is the nightly rate that is displayed for the listing that has smart pricing
     */
      smartNightlyRate?: number | null
      starRating: number
      undatedTripEnd?: string
      undatedTripStart?: string
    }[]
    pageSource: string

  }
  'ListingStepSubmitted': {

    /**
   * Whether or not the RV listing is registered as a business for tax purposes (in Canada), as selected in the listing flow
   */
    isBusiness?: boolean
    /**
   * Whether or not the RV listing is featured as selected in the listing flow
   */
    isFeatured?: boolean
    /**
   * A list of the amenities of the accommodations.
   */
    listingAmenities?: unknown[] | null
    /**
   * The nightly base price of the listing.
   */
    listingBasePrice?: number
    /**
   * The city that the listing is based in as selected in the listing flow.
   */
    listingCity?: string
    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    listingCountry?: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * Whether or not the listing offers delivery.
   */
    listingDeliveryOffered?: boolean
    /**
   * Whether or not the listing bills for generator usage.
   */
    listingGeneratorUsage?: boolean
    /**
   * RV Length in feet.
   */
    listingLength?: number
    /**
   * A list of the amenities of the location of the accommodations.
   */
    listingLocationAmenities?: unknown[] | null
    /**
   * The full name of the manufacturer entered.
   */
    listingManufacturer?: string
    /**
   * The name of the listing as is shown displayed in the app.
   */
    listingName?: string
    /**
   * The number of photos uploaded in the listing flow.
   */
    listingPhotos?: number
    /**
   * The region the listing is based in as selected in the listing flow.
   */
    listingRegion?: string
    /**
   * The number of people that the listing sleeps.
   */
    listingSleepingSpots?: number
    /**
   * Indicates the name assigned to the step in the flow of the listing of an RV.
   */
    listingStepName: string
    /**
   * Indicates the progress of the listing through the flow. Only counts up based upon the linear listing flow (e.g. does not increment when pressing “back”) (out of 100)
   */
    listingStepProgress: number
    /**
   * The type of listing as selected in the listing flow. The type of RV (e.g. Class A, Class B, Class C, Fifth Wheel, TentTrailer, Travel Trailer, etc.).
   */
    listingType?:
      | 'campervan'
      | 'classa'
      | 'classb'
      | 'classc'
      | 'fifthwheel'
      | 'hybrid'
      | 'microtrailer'
      | 'rvcottage'
      | 'tenttrailer'
      | 'toyhauler'
      | 'traveltrailer'
      | 'truckcamper'
    /**
   * Whether or not the listing offers unlimited mileage.
   */
    listingUnlimitedMileage?: boolean
    /**
   * The model year of the listing.
   */
    listingYear?: number
    /**
   * Details pertaining to the listing in question.
   */
    rentalType: 'motorhome' | 'rvcottage' | 'traveltrailer' | null
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId: string

  }
  'ListingStepSubmitted [v1]': {

    /**
   * Whether or not the RV listing is registered as a business for tax purposes (in Canada), as selected in the listing flow
   */
    isBusiness?: boolean
    /**
   * Whether or not the RV listing is featured as selected in the listing flow
   */
    isFeatured?: boolean
    /**
   * A list of the amenities of the accommodations.
   */
    listingAmenities?: unknown[] | null
    /**
   * The nightly base price of the listing.
   */
    listingBasePrice?: number
    /**
   * The city that the listing is based in as selected in the listing flow.
   */
    listingCity?: string
    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    listingCountry?: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * Whether or not the listing offers delivery.
   */
    listingDeliveryOffered?: boolean
    /**
   * Whether or not the listing bills for generator usage.
   */
    listingGeneratorUsage?: boolean
    /**
   * RV Length in feet.
   */
    listingLength?: number
    /**
   * A list of the amenities of the location of the accommodations.
   */
    listingLocationAmenities?: unknown[] | null
    /**
   * The full name of the manufacturer entered.
   */
    listingManufacturer?: string
    /**
   * The name of the listing as is shown displayed in the app.
   */
    listingName?: string
    /**
   * The number of photos uploaded in the listing flow.
   */
    listingPhotos?: number
    /**
   * The region the listing is based in as selected in the listing flow.
   */
    listingRegion?: string
    /**
   * The number of people that the listing sleeps.
   */
    listingSleepingSpots?: number
    /**
   * Indicates the name assigned to the step in the flow of the listing of an RV.
   */
    listingStepName: string
    /**
   * Indicates the progress of the listing through the flow. Only counts up based upon the linear listing flow (e.g. does not increment when pressing “back”) (out of 100)
   */
    listingStepProgress: number
    /**
   * The type of listing as selected in the listing flow. The type of RV (e.g. Class A, Class B, Class C, Fifth Wheel, TentTrailer, Travel Trailer, etc.).
   */
    listingType?:
      | 'campervan'
      | 'classa'
      | 'classb'
      | 'classc'
      | 'fifthwheel'
      | 'hybrid'
      | 'microtrailer'
      | 'rvcottage'
      | 'tenttrailer'
      | 'toyhauler'
      | 'traveltrailer'
      | 'truckcamper'
    /**
   * Whether or not the listing offers unlimited mileage.
   */
    listingUnlimitedMileage?: boolean
    /**
   * The model year of the listing.
   */
    listingYear?: number
    /**
   * Details pertaining to the listing in question.
   */
    rentalType: 'motorhome' | 'rvcottage' | 'traveltrailer'
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId: string

  }
  'ListingStepSubmitted [v2]': {

    /**
   * Whether or not the RV listing is registered as a business for tax purposes (in Canada), as selected in the listing flow
   */
    isBusiness?: boolean
    /**
   * Whether or not the RV listing is featured as selected in the listing flow
   */
    isFeatured?: boolean
    /**
   * A list of the amenities of the accommodations.
   */
    listingAmenities?: unknown[] | null
    /**
   * The nightly base price of the listing.
   */
    listingBasePrice?: number
    /**
   * The city that the listing is based in as selected in the listing flow.
   */
    listingCity?: string
    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    listingCountry?: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * Whether or not the listing offers delivery.
   */
    listingDeliveryOffered?: boolean
    /**
   * Whether or not the listing bills for generator usage.
   */
    listingGeneratorUsage?: boolean
    /**
   * RV Length in feet.
   */
    listingLength?: number
    /**
   * A list of the amenities of the location of the accommodations.
   */
    listingLocationAmenities?: unknown[] | null
    /**
   * The full name of the manufacturer entered.
   */
    listingManufacturer?: string
    /**
   * The name of the listing as is shown displayed in the app.
   */
    listingName?: string
    /**
   * The number of photos uploaded in the listing flow.
   */
    listingPhotos?: number
    /**
   * The region the listing is based in as selected in the listing flow.
   */
    listingRegion?: string
    /**
   * The number of people that the listing sleeps.
   */
    listingSleepingSpots?: number
    /**
   * Indicates the name assigned to the step in the flow of the listing of an RV.
   */
    listingStepName: string
    /**
   * Indicates the progress of the listing through the flow. Only counts up based upon the linear listing flow (e.g. does not increment when pressing “back”) (out of 100)
   */
    listingStepProgress: number
    /**
   * The type of listing as selected in the listing flow. The type of RV (e.g. Class A, Class B, Class C, Fifth Wheel, TentTrailer, Travel Trailer, etc.).
   */
    listingType?:
      | 'campervan'
      | 'classa'
      | 'classb'
      | 'classc'
      | 'fifthwheel'
      | 'hybrid'
      | 'microtrailer'
      | 'rvcottage'
      | 'tenttrailer'
      | 'toyhauler'
      | 'traveltrailer'
      | 'truckcamper'
    /**
   * Whether or not the listing offers unlimited mileage.
   */
    listingUnlimitedMileage?: boolean
    /**
   * The model year of the listing.
   */
    listingYear?: number
    /**
   * Details pertaining to the listing in question.
   */
    rentalType: 'motorhome' | 'rvcottage' | 'traveltrailer' | null
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId: string

  }
  'ListingStepViewed': {

    /**
   * A list of the amenities of the accommodations.
   */
    listingAmenities?: unknown[] | null
    /**
   * The nightly base price of the listing.
   */
    listingBasePrice?: number
    /**
   * The city that the listing is based in as selected in the listing flow.
   */
    listingCity?: string
    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    listingCountry?: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * Whether or not the listing offers delivery.
   */
    listingDeliveryOffered?: boolean
    /**
   * Whether or not the listing bills for generator usage.
   */
    listingGeneratorUsage?: boolean
    /**
   * RV Length in feet.
   */
    listingLength?: number
    /**
   * A list of the amenities of the location of the accommodations.
   */
    listingLocationAmenities?: unknown[] | null
    /**
   * The full name of the manufacturer entered.
   */
    listingManufacturer?: string
    /**
   * The name of the listing as is shown displayed in the app.
   */
    listingName?: string
    /**
   * The number of photos uploaded in the listing flow.
   */
    listingPhotos?: number
    /**
   * The region the listing is based in as selected in the listing flow.
   */
    listingRegion?: string
    /**
   * The number of people that the listing sleeps.
   */
    listingSleepingSpots?: number
    /**
   * Details pertaining to the listing in question.
   */
    listingType: 'motorhome' | 'rvcottage' | 'traveltrailer'
    /**
   * Whether or not the listing offers unlimited mileage.
   */
    listingUnlimitedMileage?: boolean
    /**
   * The model year of the listing.
   */
    listingYear?: number
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId: string
    /**
   * Indicates the name assigned to the step in the flow of the listing of an RV. 1:1 relationship with stepNumber unless a new flow is being tested.
   */
    stepName?: string
    /**
   * Indicates the step in the flow of listing an RV. Only counts up based upon the linear listing flow (e.g. does not increment when pressing “back”). 1-based counting.
   */
    stepNumber?: number

  }
  'ListingStepViewed [v1]': {

    /**
   * A list of the amenities of the accommodations.
   */
    listingAmenities?: unknown[] | null
    /**
   * The nightly base price of the listing.
   */
    listingBasePrice?: number
    /**
   * The city that the listing is based in as selected in the listing flow.
   */
    listingCity?: string
    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    listingCountry?: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * Whether or not the listing offers delivery.
   */
    listingDeliveryOffered?: boolean
    /**
   * Whether or not the listing bills for generator usage.
   */
    listingGeneratorUsage?: boolean
    /**
   * RV Length in feet.
   */
    listingLength?: number
    /**
   * A list of the amenities of the location of the accommodations.
   */
    listingLocationAmenities?: unknown[] | null
    /**
   * The full name of the manufacturer entered.
   */
    listingManufacturer?: string
    /**
   * The name of the listing as is shown displayed in the app.
   */
    listingName?: string
    /**
   * The number of photos uploaded in the listing flow.
   */
    listingPhotos?: number
    /**
   * The region the listing is based in as selected in the listing flow.
   */
    listingRegion?: string
    /**
   * The number of people that the listing sleeps.
   */
    listingSleepingSpots?: number
    /**
   * Details pertaining to the listing in question.
   */
    listingType: 'motorhome' | 'rvcottage' | 'traveltrailer'
    /**
   * Whether or not the listing offers unlimited mileage.
   */
    listingUnlimitedMileage?: boolean
    /**
   * The model year of the listing.
   */
    listingYear?: number
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId: string
    /**
   * Indicates the name assigned to the step in the flow of the listing of an RV. 1:1 relationship with stepNumber unless a new flow is being tested.
   */
    stepName?: string
    /**
   * Indicates the step in the flow of listing an RV. Only counts up based upon the linear listing flow (e.g. does not increment when pressing “back”). 1-based counting.
   */
    stepNumber?: number

  }
  'ListingSuccessful': {

    /**
   * A list of the amenities of the accommodations.
   */
    listingAmenities?: unknown[] | null
    /**
   * The nightly base price of the listing.
   */
    listingBasePrice?: number
    /**
   * The city that the listing is based in as selected in the listing flow.
   */
    listingCity?: string
    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    listingCountry?: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * Whether or not the listing offers delivery.
   */
    listingDeliveryOffered?: boolean
    /**
   * Whether or not the listing bills for generator usage.
   */
    listingGeneratorUsage?: boolean
    /**
   * RV Length in feet.
   */
    listingLength?: number
    /**
   * A list of the amenities of the location of the accommodations.
   */
    listingLocationAmenities?: unknown[] | null
    /**
   * The full name of the manufacturer entered.
   */
    listingManufacturer?: string
    /**
   * The name of the listing as is shown displayed in the app.
   */
    listingName?: string
    /**
   * The number of photos uploaded in the listing flow.
   */
    listingPhotos?: number
    /**
   * The region the listing is based in as selected in the listing flow.
   */
    listingRegion?: string
    /**
   * The number of people that the listing sleeps.
   */
    listingSleepingSpots?: number
    /**
   * Details pertaining to the listing in question.
   */
    listingType: 'motorhome' | 'rvcottage' | 'traveltrailer'
    /**
   * Whether or not the listing offers unlimited mileage.
   */
    listingUnlimitedMileage?: boolean
    /**
   * The model year of the listing.
   */
    listingYear?: number
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId: string

  }
  'ListingSuccessful [v1]': {

    /**
   * A list of the amenities of the accommodations.
   */
    listingAmenities?: unknown[] | null
    /**
   * The nightly base price of the listing.
   */
    listingBasePrice?: number
    /**
   * The city that the listing is based in as selected in the listing flow.
   */
    listingCity?: string
    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    listingCountry?: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * Whether or not the listing offers delivery.
   */
    listingDeliveryOffered?: boolean
    /**
   * Whether or not the listing bills for generator usage.
   */
    listingGeneratorUsage?: boolean
    /**
   * RV Length in feet.
   */
    listingLength?: number
    /**
   * A list of the amenities of the location of the accommodations.
   */
    listingLocationAmenities?: unknown[] | null
    /**
   * The full name of the manufacturer entered.
   */
    listingManufacturer?: string
    /**
   * The name of the listing as is shown displayed in the app.
   */
    listingName?: string
    /**
   * The number of photos uploaded in the listing flow.
   */
    listingPhotos?: number
    /**
   * The region the listing is based in as selected in the listing flow.
   */
    listingRegion?: string
    /**
   * The number of people that the listing sleeps.
   */
    listingSleepingSpots?: number
    /**
   * Details pertaining to the listing in question.
   */
    listingType: 'motorhome' | 'rvcottage' | 'traveltrailer'
    /**
   * Whether or not the listing offers unlimited mileage.
   */
    listingUnlimitedMileage?: boolean
    /**
   * The model year of the listing.
   */
    listingYear?: number
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId: string

  }
  'ListingUnpublished': {

    /**
   * Internal userID of the RVezy agent that unpublished the listing
   */
    adminUserId?: number
    /**
   * Whether or not the unpublishing event was triggered by Admin.
   */
    isAdminAction: boolean
    /**
   * Whether or not the unpublishing event was triggered automatically (for example, deleting the RV, cancelling booking because RV is being sold, etc.)
   */
    isAutomatic: boolean
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId: string
    /**
   * The reason for unpublishing as entered by the admin or host.
   */
    unpublishReason: string

  }
  'ListingUnpublished [v1]': {

    /**
   * Internal userID of the RVezy agent that unpublished the listing
   */
    adminUserId?: number
    /**
   * Whether or not the unpublishing event was triggered by Admin.
   */
    isAdminAction: boolean
    /**
   * Whether or not the unpublishing event was triggered automatically (for example, deleting the RV, cancelling booking because RV is being sold, etc.)
   */
    isAutomatic: boolean
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId: string
    /**
   * The reason for unpublishing as entered by the admin or host.
   */
    unpublishReason: string

  }
  'ListingVerificationFailed': {

    /**
   * The userId of the user taking the admin action. Usually via the Operations Dashboard. Does not include masquerading.
   */
    adminUserId?: number
    /**
   * Whether or not the action was taken by an admin user. Usually via the Operations Dashboard. Does not include instances where the action was taken through masquerading.
   */
    isAdminAction: boolean
    /**
   * When an action is completed automatically rather than by a human.
   */
    isAutomatic?: boolean
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId: string
    /**
   * Reason for why the listing verification failed
   */
    verificationReason?: string

  }
  'ListingVerificationFailed [v1]': {

    /**
   * The userId of the user taking the admin action. Usually via the Operations Dashboard. Does not include masquerading.
   */
    adminUserId?: number
    /**
   * Whether or not the action was taken by an admin user. Usually via the Operations Dashboard. Does not include instances where the action was taken through masquerading.
   */
    isAdminAction: boolean
    /**
   * When an action is completed automatically rather than by a human.
   */
    isAutomatic?: boolean
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId: string
    /**
   * Reason for why the listing verification failed
   */
    verificationReason?: string

  }
  'ListingVerificationSuccessful': {

    /**
   * The userId of the user taking the admin action. Usually via the Operations Dashboard. Does not include masquerading.
   */
    adminUserId?: number
    /**
   * Whether or not the action was taken by an admin user. Usually via the Operations Dashboard. Does not include instances where the action was taken through masquerading.
   */
    isAdminAction: boolean
    /**
   * When an action is completed automatically rather than by a human.
   */
    isAutomatic?: boolean
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId: string
    /**
   * A list of the verification tips that OS has selected in ops dashboard as part of the verification successful action.
   */
    verificationTips?: unknown[]

  }
  'ListingVerificationSuccessful [v1]': {

    /**
   * The userId of the user taking the admin action. Usually via the Operations Dashboard. Does not include masquerading.
   */
    adminUserId?: number
    /**
   * Whether or not the action was taken by an admin user. Usually via the Operations Dashboard. Does not include instances where the action was taken through masquerading.
   */
    isAdminAction: boolean
    /**
   * When an action is completed automatically rather than by a human.
   */
    isAutomatic?: boolean
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId: string
    /**
   * A list of the verification tips that OS has selected in ops dashboard as part of the verification successful action.
   */
    verificationTips?: unknown[]

  }
  'ListingViewed': {

    /**
   * The quoted price for cleaning.
   */
    cleaningPrice?: number
    /**
   * The CTA that got the user to this screen.
   */
    cta?: string
    /**
   * The ISO 4217 currency code that is displayed.
   */
    currency?: 'CAD' | 'USD' | 'aud' | 'cad' | 'eur' | 'gbp' | 'nzd' | 'usd'
    /**
   * The message in the delivery notes for the listing
   */
    deliveryNotes?: string
    /**
   * The date entered in the “When are you going?” component as the trip end date
   */
    endDate?: string
    /**
   * If the listing has no FOMO tag then the result will be null. If the listing has tag, then the FOMO will be defined as described in the string
   */
    fomoTag?: string
    /**
   * Whether or not the listing has delivery notes as displayed on the RV listing page.
   */
    hasDeliveryNotes: boolean
    /**
   * The quoted price for insurance.
   */
    insurancePrice?: number
    /**
   * Whether or not the RV listing is activated (ie. has ever received a payment for a booking).
   */
    isActivated?: boolean
    /**
   * Whether or not the RV listing has been favourited by the viewer (the heart at the top of the pictures is selected or not)
   */
    isFavourite?: boolean
    /**
   * Whether or not the RV listing is featured as displayed on the RV listing
   */
    isFeatured?: boolean
    /**
   * Whether or not the RV listing has Instant book enabled as displayed on the RV listing
   */
    isInstantBook?: boolean
    /**
   * Whether or not the RV clicked has the Superhost badge on the card
   */
    isSuperhost?: boolean
    /**
   * A list of the amenities of the accommodations.
   */
    listingAmenities?: unknown[] | null
    /**
   * The nightly base price of the listing.
   */
    listingBasePrice?: number
    /**
   * The city that the listing is based in as selected in the listing flow.
   */
    listingCity?: string
    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    listingCountry?: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * Whether or not the listing offers delivery.
   */
    listingDeliveryOffered?: boolean
    /**
   * The number of characters of the description as displayed on the RV listing page
   */
    listingDescriptionChars?: number
    /**
   * A list of the amenities of the location of the accommodations.
   */
    listingLocationAmenities?: unknown[] | null
    /**
   * The name of the listing as is shown displayed in the app.
   */
    listingName?: string
    /**
   * The number of photos uploaded in the listing flow.
   */
    listingPhotos?: number
    /**
   * The region the listing is based in as selected in the listing flow.
   */
    listingRegion?: string
    /**
   * The number of people that the listing sleeps.
   */
    listingSleepingSpots?: number
    /**
   * This is the nightly rate that is displayed next to the listing
   */
    nightlyRate: number
    /**
   * The number of reviews of the listing as displayed on the RV listing page
   */
    numReviews?: number
    /**
   * The screen that the user came from.
   */
    pageSource?: string
    /**
   * The quoted rental price for total nights only that is displayed.
   */
    rentalPrice?: number
    /**
   * The rental type that the listing they are viewing at the moment the listing page is fully loaded
   */
    rentalType: string
    /**
   * The response rate of the owner at the time the event fires.
   */
    responseRate?: number
    /**
   * The quoted price for roadside assistance.
   */
    roadsidePrice?: number | null
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId: string
    /**
   * The RV type of the listing they are viewing at the moment the listing page is fully loaded
   */
    rvType: string
    /**
   * The location that is being searched, as per the text box (in the search bar above the listing page)
   */
    searchCity?: string | null
    /**
   * The location that is being searched, as per the text box. (in the search bar above the listing page)
   */
    searchCountry?: string | null
    /**
   * The location that is being searched, as per the text box. (in the search bar above the listing page)
   */
    searchRegion?: string | null
    /**
   * The quoted service fee paid to RVezy by the renter.
   */
    servicePrice?: number
    /**
   * This is the nightly rate that is displayed for the listing that has smart pricing
   */
    smartNightlyRate?: number | null
    /**
   * The star rating for the listing as displayed on the RV listing
   */
    starRating?: number
    /**
   * The date entered in the “When are you going?” component as the trip start date
   */
    startDate?: string
    /**
   * The total dollar value for the entire booking that is displayed.
   */
    totalPrice?: number
    /**
   * Difference between start date and end date entered in the “When are you going?” component. Effectively, the number of nights for a trip
   */
    tripLength?: number

  }
  'ListingViewed [v1]': {

    /**
   * The quoted price for cleaning.
   */
    cleaningPrice?: number
    /**
   * The CTA that got the user to this screen.
   */
    cta?: string
    /**
   * The ISO 4217 currency code that is displayed.
   */
    currency?: 'CAD' | 'USD' | 'aud' | 'cad' | 'eur' | 'gbp' | 'nzd' | 'usd'
    /**
   * The message in the delivery notes for the listing
   */
    deliveryNotes?: string
    /**
   * The date entered in the “When are you going?” component as the trip end date
   */
    endDate?: string
    /**
   * Whether or not the listing has delivery notes as displayed on the RV listing page.
   */
    hasDeliveryNotes: boolean
    /**
   * The quoted price for insurance.
   */
    insurancePrice?: number
    /**
   * Whether or not the RV listing is activated (ie. has ever received a payment for a booking).
   */
    isActivated?: boolean
    /**
   * Whether or not the RV listing has been favourited by the viewer (the heart at the top of the pictures is selected or not)
   */
    isFavourite?: boolean
    /**
   * Whether or not the RV listing is featured as displayed on the RV listing
   */
    isFeatured?: boolean
    /**
   * Whether or not the RV listing has Instant book enabled as displayed on the RV listing
   */
    isInstantBook?: boolean
    /**
   * Whether or not the RV clicked has the Superhost badge on the card
   */
    isSuperhost?: boolean
    /**
   * A list of the amenities of the accommodations.
   */
    listingAmenities?: unknown[] | null
    /**
   * The nightly base price of the listing.
   */
    listingBasePrice?: number
    /**
   * The city that the listing is based in as selected in the listing flow.
   */
    listingCity?: string
    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    listingCountry?: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * Whether or not the listing offers delivery.
   */
    listingDeliveryOffered?: boolean
    /**
   * The number of characters of the description as displayed on the RV listing page
   */
    listingDescriptionChars?: number
    /**
   * A list of the amenities of the location of the accommodations.
   */
    listingLocationAmenities?: unknown[] | null
    /**
   * The name of the listing as is shown displayed in the app.
   */
    listingName?: string
    /**
   * The number of photos uploaded in the listing flow.
   */
    listingPhotos?: number
    /**
   * The region the listing is based in as selected in the listing flow.
   */
    listingRegion?: string
    /**
   * The number of people that the listing sleeps.
   */
    listingSleepingSpots?: number
    /**
   * The number of reviews of the listing as displayed on the RV listing page
   */
    numReviews?: number
    /**
   * The screen that the user came from.
   */
    pageSource?: string
    /**
   * The quoted rental price for total nights only that is displayed.
   */
    rentalPrice?: number
    /**
   * The rental type that the listing they are viewing at the moment the listing page is fully loaded
   */
    rentalType: string
    /**
   * The response rate of the owner at the time the event fires.
   */
    responseRate?: number
    /**
   * The quoted price for roadside assistance.
   */
    roadsidePrice?: number | null
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId: string
    /**
   * The RV type of the listing they are viewing at the moment the listing page is fully loaded
   */
    rvType: string
    /**
   * The location that is being searched, as per the text box (in the search bar above the listing page)
   */
    searchCity?: string | null
    /**
   * The location that is being searched, as per the text box. (in the search bar above the listing page)
   */
    searchCountry?: string | null
    /**
   * The location that is being searched, as per the text box. (in the search bar above the listing page)
   */
    searchRegion?: string | null
    /**
   * The quoted service fee paid to RVezy by the renter.
   */
    servicePrice?: number
    /**
   * The star rating for the listing as displayed on the RV listing
   */
    starRating?: number
    /**
   * The date entered in the “When are you going?” component as the trip start date
   */
    startDate?: string
    /**
   * The total dollar value for the entire booking that is displayed.
   */
    totalPrice?: number
    /**
   * Difference between start date and end date entered in the “When are you going?” component. Effectively, the number of nights for a trip
   */
    tripLength?: number

  }
  'ListingViewed [v2]': {

    /**
   * The quoted price for cleaning.
   */
    cleaningPrice?: number
    /**
   * The CTA that got the user to this screen.
   */
    cta?: string
    /**
   * The ISO 4217 currency code that is displayed.
   */
    currency?: 'CAD' | 'USD' | 'aud' | 'cad' | 'eur' | 'gbp' | 'nzd' | 'usd'
    /**
   * The message in the delivery notes for the listing
   */
    deliveryNotes?: string
    /**
   * The date entered in the “When are you going?” component as the trip end date
   */
    endDate?: string
    /**
   * Whether or not the listing has delivery notes as displayed on the RV listing page.
   */
    hasDeliveryNotes: boolean
    /**
   * The quoted price for insurance.
   */
    insurancePrice?: number
    /**
   * Whether or not the RV listing is activated (ie. has ever received a payment for a booking).
   */
    isActivated?: boolean
    /**
   * Whether or not the RV listing has been favourited by the viewer (the heart at the top of the pictures is selected or not)
   */
    isFavourite?: boolean
    /**
   * Whether or not the RV listing is featured as displayed on the RV listing
   */
    isFeatured?: boolean
    /**
   * Whether or not the RV listing has Instant book enabled as displayed on the RV listing
   */
    isInstantBook?: boolean
    /**
   * Whether or not the RV clicked has the Superhost badge on the card
   */
    isSuperhost?: boolean
    /**
   * A list of the amenities of the accommodations.
   */
    listingAmenities?: unknown[] | null
    /**
   * The nightly base price of the listing.
   */
    listingBasePrice?: number
    /**
   * The city that the listing is based in as selected in the listing flow.
   */
    listingCity?: string
    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    listingCountry?: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * Whether or not the listing offers delivery.
   */
    listingDeliveryOffered?: boolean
    /**
   * The number of characters of the description as displayed on the RV listing page
   */
    listingDescriptionChars?: number
    /**
   * A list of the amenities of the location of the accommodations.
   */
    listingLocationAmenities?: unknown[] | null
    /**
   * The name of the listing as is shown displayed in the app.
   */
    listingName?: string
    /**
   * The number of photos uploaded in the listing flow.
   */
    listingPhotos?: number
    /**
   * The region the listing is based in as selected in the listing flow.
   */
    listingRegion?: string
    /**
   * The number of people that the listing sleeps.
   */
    listingSleepingSpots?: number
    /**
   * This is the nightly rate that is displayed next to the listing
   */
    nightlyRate: number
    /**
   * The number of reviews of the listing as displayed on the RV listing page
   */
    numReviews?: number
    /**
   * The screen that the user came from.
   */
    pageSource?: string
    /**
   * The quoted rental price for total nights only that is displayed.
   */
    rentalPrice?: number
    /**
   * The rental type that the listing they are viewing at the moment the listing page is fully loaded
   */
    rentalType: string
    /**
   * The response rate of the owner at the time the event fires.
   */
    responseRate?: number
    /**
   * The quoted price for roadside assistance.
   */
    roadsidePrice?: number | null
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId: string
    /**
   * The RV type of the listing they are viewing at the moment the listing page is fully loaded
   */
    rvType: string
    /**
   * The location that is being searched, as per the text box (in the search bar above the listing page)
   */
    searchCity?: string | null
    /**
   * The location that is being searched, as per the text box. (in the search bar above the listing page)
   */
    searchCountry?: string | null
    /**
   * The location that is being searched, as per the text box. (in the search bar above the listing page)
   */
    searchRegion?: string | null
    /**
   * The quoted service fee paid to RVezy by the renter.
   */
    servicePrice?: number
    /**
   * This is the nightly rate that is displayed for the listing that has smart pricing
   */
    smartNightlyRate: number
    /**
   * The star rating for the listing as displayed on the RV listing
   */
    starRating?: number
    /**
   * The date entered in the “When are you going?” component as the trip start date
   */
    startDate?: string
    /**
   * The total dollar value for the entire booking that is displayed.
   */
    totalPrice?: number
    /**
   * Difference between start date and end date entered in the “When are you going?” component. Effectively, the number of nights for a trip
   */
    tripLength?: number

  }
  'ListingViewed [v3]': {

    /**
   * The quoted price for cleaning.
   */
    cleaningPrice?: number
    /**
   * The CTA that got the user to this screen.
   */
    cta?: string
    /**
   * The ISO 4217 currency code that is displayed.
   */
    currency?: 'CAD' | 'USD' | 'aud' | 'cad' | 'eur' | 'gbp' | 'nzd' | 'usd'
    /**
   * The message in the delivery notes for the listing
   */
    deliveryNotes?: string
    /**
   * The date entered in the “When are you going?” component as the trip end date
   */
    endDate?: string
    /**
   * If the listing has no FOMO tag then the result will be null. If the listing has tag, then the FOMO will be defined as described in the string
   */
    fomoTag?: string
    /**
   * Whether or not the listing has delivery notes as displayed on the RV listing page.
   */
    hasDeliveryNotes: boolean
    /**
   * The quoted price for insurance.
   */
    insurancePrice?: number
    /**
   * Whether or not the RV listing is activated (ie. has ever received a payment for a booking).
   */
    isActivated?: boolean
    /**
   * Whether or not the RV listing has been favourited by the viewer (the heart at the top of the pictures is selected or not)
   */
    isFavourite?: boolean
    /**
   * Whether or not the RV listing is featured as displayed on the RV listing
   */
    isFeatured?: boolean
    /**
   * Whether or not the RV listing has Instant book enabled as displayed on the RV listing
   */
    isInstantBook?: boolean
    /**
   * Whether or not the RV clicked has the Superhost badge on the card
   */
    isSuperhost?: boolean
    /**
   * A list of the amenities of the accommodations.
   */
    listingAmenities?: unknown[] | null
    /**
   * The nightly base price of the listing.
   */
    listingBasePrice?: number
    /**
   * The city that the listing is based in as selected in the listing flow.
   */
    listingCity?: string
    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    listingCountry?: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * Whether or not the listing offers delivery.
   */
    listingDeliveryOffered?: boolean
    /**
   * The number of characters of the description as displayed on the RV listing page
   */
    listingDescriptionChars?: number
    /**
   * A list of the amenities of the location of the accommodations.
   */
    listingLocationAmenities?: unknown[] | null
    /**
   * The name of the listing as is shown displayed in the app.
   */
    listingName?: string
    /**
   * The number of photos uploaded in the listing flow.
   */
    listingPhotos?: number
    /**
   * The region the listing is based in as selected in the listing flow.
   */
    listingRegion?: string
    /**
   * The number of people that the listing sleeps.
   */
    listingSleepingSpots?: number
    /**
   * This is the nightly rate that is displayed next to the listing
   */
    nightlyRate: number
    /**
   * The number of reviews of the listing as displayed on the RV listing page
   */
    numReviews?: number
    /**
   * The screen that the user came from.
   */
    pageSource?: string
    /**
   * The quoted rental price for total nights only that is displayed.
   */
    rentalPrice?: number
    /**
   * The rental type that the listing they are viewing at the moment the listing page is fully loaded
   */
    rentalType: string
    /**
   * The response rate of the owner at the time the event fires.
   */
    responseRate?: number
    /**
   * The quoted price for roadside assistance.
   */
    roadsidePrice?: number | null
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId: string
    /**
   * The RV type of the listing they are viewing at the moment the listing page is fully loaded
   */
    rvType: string
    /**
   * The location that is being searched, as per the text box (in the search bar above the listing page)
   */
    searchCity?: string | null
    /**
   * The location that is being searched, as per the text box. (in the search bar above the listing page)
   */
    searchCountry?: string | null
    /**
   * The location that is being searched, as per the text box. (in the search bar above the listing page)
   */
    searchRegion?: string | null
    /**
   * The quoted service fee paid to RVezy by the renter.
   */
    servicePrice?: number
    /**
   * This is the nightly rate that is displayed for the listing that has smart pricing
   */
    smartNightlyRate?: number | null
    /**
   * The star rating for the listing as displayed on the RV listing
   */
    starRating?: number
    /**
   * The date entered in the “When are you going?” component as the trip start date
   */
    startDate?: string
    /**
   * The total dollar value for the entire booking that is displayed.
   */
    totalPrice?: number
    /**
   * Difference between start date and end date entered in the “When are you going?” component. Effectively, the number of nights for a trip
   */
    tripLength?: number

  }
  'LocationPermissionOptionSelected': {

    /**
   * Whether the user selected allow (or allow just once) or not. FYI - we’re unable to distinguish between 'allow' and 'allow just once'.
   */
    isAllowed: boolean
    /**
   * If the user is an owner.
   */
    isOwner: boolean
    /**
   * The page where the modal is displayed to the user.
   */
    pageSource: string

  }
  'LocationPermissionOptionSelected [v1]': {

    /**
   * Whether the user selected allow (or allow just once) or not. FYI - we’re unable to distinguish between 'allow' and 'allow just once'.
   */
    isAllowed: boolean
    /**
   * If the user is an owner.
   */
    isOwner: boolean
    /**
   * The page where the modal is displayed to the user.
   */
    pageSource: string

  }
  'LocationPermissionRequestViewed': {

    /**
   * If the user is an owner
   */
    isOwner: boolean
    /**
   * The page where the modal is displayed to the user.
   */
    pageSource: string
    /**
   * If the user has previously allowed permission (if not the first time) the last time they responded to the permission modal.
   */
    wasPreviouslyAllowed?: boolean

  }
  'LocationPermissionRequestViewed [v1]': {

    /**
   * If the user is an owner
   */
    isOwner: boolean
    /**
   * The page where the modal is displayed to the user.
   */
    pageSource: string
    /**
   * If the user has previously allowed permission (if not the first time) the last time they responded to the permission modal.
   */
    wasPreviouslyAllowed?: boolean

  }
  'LocationShared': {

    /**
   * The altitude above mean sea level associated with a location, measured in meters.
   */
    altitude?: number
    /**
   * The validity of the altitude values, and their estimated uncertainty, measured in meters.
   */
    altitudeAccuracy?: number
    /**
   * The unique booking ID associated with the trip.
   */
    bookingId: number
    /**
   * The radius of uncertainty for the location, measured in meters.
   */
    coordinateAccuracy: number
    /**
   * The direction in which the device is traveling, measured in degrees and relative to due north.
   */
    course?: number
    /**
   * The accuracy of the course value, measured in degrees.
   */
    courseAccuracy?: number
    /**
   * Timestamp of when the location was tracked.
   */
    createdAt: string
    /**
   * If the user is an owner
   */
    isOwner: boolean
    /**
   * The latitude associated with the location
   */
    latitude: number
    /**
   * The longitude associated with the location
   */
    longitude: number
    /**
   * The instantaneous speed of the device, measured in meters per second.
   */
    speed?: number
    /**
   * The instantaneous speed of the device, measured in meters per second.
   */
    speedAccuracy?: number

  }
  'LocationShared [v1]': {

    /**
   * The altitude above mean sea level associated with a location, measured in meters.
   */
    altitude?: number
    /**
   * The validity of the altitude values, and their estimated uncertainty, measured in meters.
   */
    altitudeAccuracy?: number
    /**
   * The unique booking ID associated with the trip.
   */
    bookingId: number
    /**
   * The radius of uncertainty for the location, measured in meters.
   */
    coordinateAccuracy: number
    /**
   * The direction in which the device is traveling, measured in degrees and relative to due north.
   */
    course?: number
    /**
   * The accuracy of the course value, measured in degrees.
   */
    courseAccuracy?: number
    /**
   * Timestamp of when the location was tracked.
   */
    createdAt: string
    /**
   * If the user is an owner
   */
    isOwner: boolean
    /**
   * The latitude associated with the location
   */
    latitude: number
    /**
   * The longitude associated with the location
   */
    longitude: number
    /**
   * The instantaneous speed of the device, measured in meters per second.
   */
    speed?: number
    /**
   * The instantaneous speed of the device, measured in meters per second.
   */
    speedAccuracy?: number

  }
  'LoginSuccessful': {

    /**
   * The screen that the user came from.
   */
    pageSource: string
    /**
   * Where the user will be redirected to once the login is successful. If no explicit redirect, this should be the same page the user is on.
   */
    redirect?: string
    /**
   * The sign up type that was used to originally signup. Can be fb, google, apple, email.
   */
    signupType: 'apple' | 'email' | 'fb' | 'google'

  }
  'LoginSuccessful [v1]': {

    /**
   * The screen that the user came from.
   */
    pageSource: string
    /**
   * Where the user will be redirected to once the login is successful. If no explicit redirect, this should be the same page the user is on.
   */
    redirect?: string
    /**
   * The sign up type that was used to originally signup. Can be fb, google, apple, email.
   */
    signupType: 'apple' | 'email' | 'fb' | 'google'

  }
  'MessageSent': {

    /**
   * The type of automated message being sent. As of this writing there are only 2 options system = any automated message sent that is reporting on a status change of something related to the booking (change request, request money, etc. ) introduction = a host that has setup the intro message template to be sent out automatically when a new request is received. (is Automatic parameter should also be true for this message type) If isAutomatic is false, than automatedMessageType should not be defined.
   */
    automatedMessageType?: string
    /**
   * The unique ID associated with the booking request.
   */
    bookingId?: number
    /**
   * The state of the booking as is represented on the backend.
   */
    bookingState: number
    /**
   * the type of booking at the time of message
   */
    bookingType?: string
    /**
   * If a message was sent that had an image attached to the message or the message that was sent only included an image attachment
   */
    imageAttached: boolean
    /**
   * When an action is completed automatically rather than by a human.
   */
    isAutomatic: boolean
    /**
   * Whether or not the message is the first one within the context in which it is being sent (e.g. a booking).
   */
    isFirstMessage: boolean
    /**
   * Where the trip currently sits under “My Trips”.
   */
    isUpcomingBooking: boolean
    /**
   * The message that is actually being sent.
   */
    message: string
    /**
   * Where the conversation currently sits in the inbox.
   */
    messageLocation: 'archived' | 'enquiry' | 'request'
    /**
   * Each time a different party messages, the turn count is incremented by one. E.g. If A messages B then B messages A, the turn count is 2. If A messages B, then A messages B again, then A messages B again, the turn count is 1 (because B has not yet had a “turn”).
   */
    numTurns: number
    /**
   * The screen that the user came from.
   */
    pageSource: string
    /**
   * The account that is receiving the user-to-user interaction.
   */
    receiverUserId: number

  }
  'MessageSent [v1]': {

    /**
   * The unique ID associated with the booking request.
   */
    bookingId?: number
    /**
   * When an action is completed automatically rather than by a human.
   */
    isAutomatic?: boolean
    /**
   * Whether or not the message is the first one within the context in which it is being sent (e.g. a booking).
   */
    isFirstMessage: boolean
    /**
   * Where the trip currently sits under “My Trips”.
   */
    isUpcomingBooking: boolean
    /**
   * The message that is actually being sent.
   */
    message: string
    /**
   * Where the conversation currently sits in the inbox.
   */
    messageLocation: 'archived' | 'enquiry' | 'request'
    /**
   * The screen that the user came from.
   */
    pageSource: string
    /**
   * The account that is receiving the user-to-user interaction.
   */
    receiverUserId: number

  }
  'MessageSent [v2]': {

    /**
   * The unique ID associated with the booking request.
   */
    bookingId?: number
    /**
   * The state of the booking as is represented on the backend.
   */
    bookingState: number
    /**
   * the type of booking at the time of message
   */
    bookingType?: string
    /**
   * If a message was sent that had an image attached to the message or the message that was sent only included an image attachment
   */
    imageAttached: boolean
    /**
   * When an action is completed automatically rather than by a human.
   */
    isAutomatic: boolean
    /**
   * Whether or not the message is the first one within the context in which it is being sent (e.g. a booking).
   */
    isFirstMessage: boolean
    /**
   * Where the trip currently sits under “My Trips”.
   */
    isUpcomingBooking: boolean
    /**
   * The message that is actually being sent.
   */
    message: string
    /**
   * Where the conversation currently sits in the inbox.
   */
    messageLocation: 'archived' | 'enquiry' | 'request'
    /**
   * Each time a different party messages, the turn count is incremented by one. E.g. If A messages B then B messages A, the turn count is 2. If A messages B, then A messages B again, then A messages B again, the turn count is 1 (because B has not yet had a “turn”).
   */
    numTurns: number
    /**
   * The screen that the user came from.
   */
    pageSource: string
    /**
   * The account that is receiving the user-to-user interaction.
   */
    receiverUserId: number

  }
  'MessageSent [v3]': {

    /**
   * The type of automated message being sent. As of this writing there are only 2 options system = any automated message sent that is reporting on a status change of something related to the booking (change request, request money, etc. ) introduction = a host that has setup the intro message template to be sent out automatically when a new request is received. (is Automatic parameter should also be true for this message type) If isAutomatic is false, than automatedMessageType should not be defined.
   */
    automatedMessageType?: string
    /**
   * The unique ID associated with the booking request.
   */
    bookingId?: number
    /**
   * The state of the booking as is represented on the backend.
   */
    bookingState: number
    /**
   * the type of booking at the time of message
   */
    bookingType?: string
    /**
   * If a message was sent that had an image attached to the message or the message that was sent only included an image attachment
   */
    imageAttached: boolean
    /**
   * When an action is completed automatically rather than by a human.
   */
    isAutomatic: boolean
    /**
   * Whether or not the message is the first one within the context in which it is being sent (e.g. a booking).
   */
    isFirstMessage: boolean
    /**
   * Where the trip currently sits under “My Trips”.
   */
    isUpcomingBooking: boolean
    /**
   * The message that is actually being sent.
   */
    message: string
    /**
   * Where the conversation currently sits in the inbox.
   */
    messageLocation: 'archived' | 'enquiry' | 'request'
    /**
   * Each time a different party messages, the turn count is incremented by one. E.g. If A messages B then B messages A, the turn count is 2. If A messages B, then A messages B again, then A messages B again, the turn count is 1 (because B has not yet had a “turn”).
   */
    numTurns: number
    /**
   * The screen that the user came from.
   */
    pageSource: string
    /**
   * The account that is receiving the user-to-user interaction.
   */
    receiverUserId: number

  }
  'MessageTemplateSelected': {

    /**
   * The bookingId that is the context for the message.
   */
    bookingId: number
    /**
   * The state of the booking as is represented on the backend.
   */
    bookingState: number
    /**
   * the type of booking at the time of message
   */
    bookingType?: string
    /**
   * Whether or not this booking is an ezymatch booking
   */
    isEzymatch?: boolean
    /**
   * The body of the message template selected
   */
    messageTemplateMessage: string
    /**
   * The title of the message template being used.
   */
    messageTemplateTitle: string

  }
  'MessageTemplateSelected [v1]': {

    /**
   * The bookingId that is the context for the message.
   */
    bookingId: number
    /**
   * The state of the booking as is represented on the backend.
   */
    bookingState: number
    /**
   * the type of booking at the time of message
   */
    bookingType: string
    /**
   * Whether or not this booking is an ezymatch booking
   */
    isEzymatch: boolean
    /**
   * The body of the message template selected
   */
    messageTemplateMessage: string
    /**
   * The title of the message template being used.
   */
    messageTemplateTitle: string

  }
  'MessageTemplateSelected [v2]': {

    /**
   * The bookingId that is the context for the message.
   */
    bookingId: number
    /**
   * The state of the booking as is represented on the backend.
   */
    bookingState: number
    /**
   * the type of booking at the time of message
   */
    bookingType?: string
    /**
   * Whether or not this booking is an ezymatch booking
   */
    isEzymatch?: boolean
    /**
   * The body of the message template selected
   */
    messageTemplateMessage: string
    /**
   * The title of the message template being used.
   */
    messageTemplateTitle: string

  }
  'MorePageViewed': {

    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country where the host is located
   */
    accountCountry?: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * The name of the banner presented to the user on the More page
   */
    bannerPresented?: string
    /**
   * the cta the user clicked on to get to this screen. (ie. was it from the inbox message, or the bookings/trips card or host dashboard card, etc. )
   */
    cta?: string
    /**
   * If the user is a host or not
   */
    isOwner?: boolean
    /**
   * The source screen that came before their next action if applicable
   */
    pageSource?: string
    /**
   * The user ID of the host viewing the bookings page
   */
    userId?: number

  }
  'MorePageViewed [v1]': {

    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country where the host is located
   */
    accountCountry?: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * The name of the banner presented to the user on the More page
   */
    bannerPresented?: string
    /**
   * the cta the user clicked on to get to this screen. (ie. was it from the inbox message, or the bookings/trips card or host dashboard card, etc. )
   */
    cta?: string
    /**
   * If the user is a host or not
   */
    isOwner?: boolean
    /**
   * The source screen that came before their next action if applicable
   */
    pageSource?: string
    /**
   * The user ID of the host viewing the bookings page
   */
    userId?: number

  }
  'NavigationBarClicked': {

    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country where the user is located (if available)
   */
    accountCountry?: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * whether or not the user clicked on the bookings icon
   */
    isBookingsButton?: boolean
    /**
   * whether or not the user clicked on the calendar icon
   */
    isCalendarButton?: boolean
    /**
   * whether or not the user clicked on the favorite icon
   */
    isFavoritesButon?: boolean
    /**
   * whether or not the user clicked on the help icon available to the user if they are logged out
   */
    isHelpButton?: boolean
    /**
   * whether or not the user clicked on the home icon
   */
    isHomeButton?: boolean
    /**
   * If the account is switched to travel mode or hosting mode
   */
    isHostingMode?: boolean
    /**
   * Whether or not the user clicked on the calendar icon
   */
    isInboxButton?: boolean
    /**
   * whether or not the user clicked on the more icon
   */
    isMoreButton?: boolean
    /**
   * The user type. The user is the person clicking on the card.
   */
    isOwner?: boolean
    /**
   * whether or not the user clicked on the trips icon
   */
    isTripsButton?: boolean
    /**
   * The source screen where the user clicked on the navigation bar
   */
    pageSource?: string
    /**
   * The user ID of the the user clicking on navigation bar if available. (users can interact with the navigation bar without being logged in)
   */
    userId?: number

  }
  'NavigationBarClicked [v1]': {

    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country where the user is located (if available)
   */
    accountCountry?: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * whether or not the user clicked on the bookings icon
   */
    isBookingsButton?: boolean
    /**
   * whether or not the user clicked on the calendar icon
   */
    isCalendarButton?: boolean
    /**
   * whether or not the user clicked on the favorite icon
   */
    isFavoritesButon?: boolean
    /**
   * whether or not the user clicked on the help icon available to the user if they are logged out
   */
    isHelpButton?: boolean
    /**
   * whether or not the user clicked on the home icon
   */
    isHomeButton?: boolean
    /**
   * If the account is switched to travel mode or hosting mode
   */
    isHostingMode?: boolean
    /**
   * Whether or not the user clicked on the calendar icon
   */
    isInboxButton?: boolean
    /**
   * whether or not the user clicked on the more icon
   */
    isMoreButton?: boolean
    /**
   * The user type. The user is the person clicking on the card.
   */
    isOwner?: boolean
    /**
   * whether or not the user clicked on the trips icon
   */
    isTripsButton?: boolean
    /**
   * The source screen where the user clicked on the navigation bar
   */
    pageSource?: string
    /**
   * The user ID of the the user clicking on navigation bar if available. (users can interact with the navigation bar without being logged in)
   */
    userId?: string

  }
  'NavigationBarClicked [v2]': {

    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country where the user is located (if available)
   */
    accountCountry?: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * whether or not the user clicked on the bookings icon
   */
    isBookingsButton?: boolean
    /**
   * whether or not the user clicked on the calendar icon
   */
    isCalendarButton?: boolean
    /**
   * whether or not the user clicked on the favorite icon
   */
    isFavoritesButon?: boolean
    /**
   * whether or not the user clicked on the help icon available to the user if they are logged out
   */
    isHelpButton?: boolean
    /**
   * whether or not the user clicked on the home icon
   */
    isHomeButton?: boolean
    /**
   * If the account is switched to travel mode or hosting mode
   */
    isHostingMode?: boolean
    /**
   * Whether or not the user clicked on the calendar icon
   */
    isInboxButton?: boolean
    /**
   * whether or not the user clicked on the more icon
   */
    isMoreButton?: boolean
    /**
   * The user type. The user is the person clicking on the card.
   */
    isOwner?: boolean
    /**
   * whether or not the user clicked on the trips icon
   */
    isTripsButton?: boolean
    /**
   * The source screen where the user clicked on the navigation bar
   */
    pageSource?: string
    /**
   * The user ID of the the user clicking on navigation bar if available. (users can interact with the navigation bar without being logged in)
   */
    userId?: number

  }
  'NextStepsCardClicked': {

    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    accountCountry?: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * The card name that the host clicked on.Array of key values of the card type, name that is mentioned on the card
   */
    nextStepsCardName?: unknown[]
    /**
   * The source screen that came before their next action if applicable
   */
    pageSource?: string
    /**
   * The user ID of the user who clicked on the card
   */
    userId: number

  }
  'NextStepsCardClicked [v1]': {

    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    accountCountry?: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * The card name that the host clicked on.Array of key values of the card type, name that is mentioned on the card
   */
    nextStepsCardName?: unknown[]
    /**
   * The source screen that came before their next action if applicable
   */
    pageSource?: string
    /**
   * The user ID of the user who clicked on the card
   */
    userId: number

  }
  'NextStepsCardClosed': {

    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    accountCountry?: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * The card name that the host closed by clicking on the “x”.Array of key values of the card type, name that is mentioned on the card
   */
    nextStepsCardName?: unknown[]
    /**
   * The source screen that came before their next action if applicable
   */
    pageSource?: string
    /**
   * The user ID of the user who clicked on the card
   */
    userId: number

  }
  'NextStepsCardClosed [v1]': {

    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    accountCountry?: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * The card name that the host closed by clicking on the “x”.Array of key values of the card type, name that is mentioned on the card
   */
    nextStepsCardName?: unknown[]
    /**
   * The source screen that came before their next action if applicable
   */
    pageSource?: string
    /**
   * The user ID of the user who clicked on the card
   */
    userId: number

  }
  'NotificationsIconClicked': {

    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    accountCountry?: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * Whether or not there was a badge indicating new notifications
   */
    hasNewNotificationBadge?: boolean
    /**
   * The user type. The user is the person clicking on the notification center bell
   */
    isOwner: boolean
    /**
   * Number of notifications indicated on the badge
   */
    newNotificationBadgeNumber?: number
    /**
   * The source screen that came before their next action if applicable
   */
    pageSource?: string
    /**
   * The user ID of the user who clicked on the notification bell
   */
    userId: number

  }
  'NotificationsIconClicked [v1]': {

    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    accountCountry?: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * Whether or not there was a badge indicating new notifications
   */
    hasNewNotificationBadge?: boolean
    /**
   * The user type. The user is the person clicking on the notification center bell
   */
    isOwner: boolean
    /**
   * Number of notifications indicated on the badge
   */
    newNotificationBadgeNumber?: number
    /**
   * The source screen that came before their next action if applicable
   */
    pageSource?: string
    /**
   * The user ID of the user who clicked on the notification bell
   */
    userId: number

  }
  'NotificationsViewed': {

    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    accountCountry?: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * What the call to action was for the user to get to the notification page (e.g. notification bell in the host dashboard, other ctas might be added later)
   */
    cta?: string
    /**
   * Whether or not there are any notifications on the page that were added BEFORE current day
   */
    hasExistingNotificaion?: boolean
    /**
   * Whether or not there are any notifications on the page that were added on the current day
   */
    hasNewNotification?: boolean
    /**
   * The user type. The user is the person clicking on the notification center bell
   */
    isOwner?: boolean
    /**
   * The notification title as mentioned on the page/card
   */
    notifications?: unknown[]
    /**
   * The source screen that came before their next action
   */
    pageSource: string
    /**
   * Number of notifications on the page
   */
    totalNotifications?: number
    /**
   * The user ID of the user who clicked on the notification bell
   */
    userId: number

  }
  'NotificationsViewed [v1]': {

    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    accountCountry?: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * What the call to action was for the user to get to the notification page (e.g. notification bell in the host dashboard, other ctas might be added later)
   */
    cta?: string
    /**
   * Whether or not there are any notifications on the page that were added BEFORE current day
   */
    hasExistingNotificaion?: boolean
    /**
   * Whether or not there are any notifications on the page that were added on the current day
   */
    hasNewNotification?: boolean
    /**
   * The user type. The user is the person clicking on the notification center bell
   */
    isOwner?: boolean
    /**
   * The notification title as mentioned on the page/card
   */
    notifications?: unknown[]
    /**
   * The source screen that came before their next action
   */
    pageSource: string
    /**
   * Number of notifications on the page
   */
    totalNotifications?: number
    /**
   * The user ID of the user who clicked on the notification bell
   */
    userId: number

  }
  'OpenAppBannerClicked': {

    /**
   * The OS on which the App is donwloaded (ios or android)
   */
    os: 'android' | 'ios'

  }
  'OpenAppBannerClicked [v1]': {

    /**
   * The OS on which the App is donwloaded (ios or android)
   */
    os: 'android' | 'ios'

  }
  'Order Completed': {

    /**
   * Store or affiliation from which this transaction occurred (for example, Google Store)
   */
    affiliation?: string
    /**
   * Checkout ID
   */
    checkout_id: string
    /**
   * Transaction coupon redeemed with the transaction
   */
    coupon?: string | null
    /**
   * Currency code associated with the transaction
   */
    currency: string
    /**
   * Total discount associated with the transaction
   */
    discount?: number | null
    /**
   * Order/transaction ID
   */
    order_id: string
    /**
   * Products in the order
   */
    products: {
    /**
     * Brand associated with the product
     */
      brand?: string
      /**
     * Product category
     */
      category?: string
      /**
     * Image url of the product
     */
      image_url?: string
      /**
     * Name of the product
     */
      name?: string
      /**
     * Price ($) of the product being viewed
     */
      price: number
      /**
     * External id of the product
     */
      product_id: string
      /**
     * Quantity of a product
     */
      quantity?: number
      /**
     * Sku of the product being viewed
     */
      sku?: string
      /**
     * URL of the product page
     */
      url?: string
    }[]
    /**
   * Order total after discounts but before taxes and shipping
   */
    subtotal?: number
    /**
   * Total tax associated with the transaction
   */
    tax?: number
    /**
   * Revenue ($) with discounts and coupons added in.
   */
    total: number

  }
  'Order Completed [v1]': {

    /**
   * Store or affiliation from which this transaction occurred (for example, Google Store)
   */
    affiliation?: string
    /**
   * Checkout ID
   */
    checkout_id: string
    /**
   * Transaction coupon redeemed with the transaction
   */
    coupon?: string | null
    /**
   * Currency code associated with the transaction
   */
    currency: string
    /**
   * Total discount associated with the transaction
   */
    discount?: number | null
    /**
   * Order/transaction ID
   */
    order_id: string
    /**
   * Products in the order
   */
    products: {
    /**
     * Brand associated with the product
     */
      brand?: string
      /**
     * Product category
     */
      category?: string
      /**
     * Image url of the product
     */
      image_url?: string
      /**
     * Name of the product
     */
      name?: string
      /**
     * Price ($) of the product being viewed
     */
      price: number
      /**
     * External id of the product
     */
      product_id: string
      /**
     * Quantity of a product
     */
      quantity?: number
      /**
     * Sku of the product being viewed
     */
      sku?: string
      /**
     * URL of the product page
     */
      url?: string
    }[]
    /**
   * Order total after discounts but before taxes and shipping
   */
    subtotal?: number
    /**
   * Total tax associated with the transaction
   */
    tax?: number
    /**
   * Revenue ($) with discounts and coupons added in.
   */
    total: number

  }
  'OwnerCalendarViewed': {

    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId: string

  }
  'OwnerCalendarViewed [v1]': {

    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId: string

  }
  'OwnerCancellationModalClosed': {

    /**
   * The unique ID associated with the booking request.
   */
    bookingId: number
    /**
   * The method through which the booking was created.
   */
    bookingType?: 'enquiry' | 'ezmatch' | 'instant' | 'normal'
    /**
   * The action that the user took to exit the process.Any of: cancelcomplete (“Done” clicked at the final summary step), cancelerror (“Exit” clicked at the final summary step), close (X is clicked at any step), clickoutside (area outside of modal is clicked at any step), back (“Go back” clicked, back button pressed or back gesture is recorded at any step), changemind (“I changed my mind” clicked at step 3)
   */
    response: 'back' | 'cancelcomplete' | 'cancelerror' | 'changemind' | 'clickoutside' | 'close'
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId: string
    /**
   * The possible steps are:Modal opened (open)Cancel form: are you sure you want to cancel? (cancelform)Calendar for RV sale scenario (calendar)Message the Renter (message)You're about to cancel (confirm)Booking cancelled (summary)
   */
    stepName: string

  }
  'OwnerCancellationModalClosed [v1]': {

    /**
   * The unique ID associated with the booking request.
   */
    bookingId: number
    /**
   * The method through which the booking was created.
   */
    bookingType?: 'enquiry' | 'ezmatch' | 'instant' | 'normal'
    /**
   * The action that the user took to exit the process.Any of: cancelcomplete (“Done” clicked at the final summary step), cancelerror (“Exit” clicked at the final summary step), close (X is clicked at any step), clickoutside (area outside of modal is clicked at any step), back (“Go back” clicked, back button pressed or back gesture is recorded at any step), changemind (“I changed my mind” clicked at step 3)
   */
    response: 'back' | 'cancelcomplete' | 'cancelerror' | 'changemind' | 'clickoutside' | 'close'
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId: string
    /**
   * The possible steps are:Modal opened (open)Cancel form: are you sure you want to cancel? (cancelform)Calendar for RV sale scenario (calendar)Message the Renter (message)You're about to cancel (confirm)Booking cancelled (summary)
   */
    stepName: string

  }
  'OwnerCancellationModalViewed': {

    /**
   * The unique ID associated with the booking request.
   */
    bookingId: number
    /**
   * The method through which the booking was created.
   */
    bookingType?: 'enquiry' | 'ezmatch' | 'instant' | 'normal'
    /**
   * Free text if the reason is “other”
   */
    cancellationOtherDescription?: string
    /**
   * The main reason from the drop-down list “Why are you cancelling?”if we don’t have data, we don’t send data
   */
    cancellationReason?: string
    /**
   * Content of the field with a subreason.It is a dropdown list for most cancellation reasons, a date if the reason is RV sold and free text if the reason is “Other”
   */
    cancellationSubreason?: string
    /**
   * Content of the message to renter from Message the renter step
   */
    message?: string
    /**
   * Amount of the lost payout as shown to the owner
   */
    payoutAmount: number
    /**
   * Currency of the lost payout as shown to the owner. We can take country of origin
   */
    payoutCurrency?: string
    /**
   * Datetime when the request was places - in UTC timezone
   */
    requestDate?: string
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId: string
    /**
   * The datetime that the requested booking is to begin.
   */
    startDate?: string
    /**
   * The possible steps are:Modal opened (open)Cancel form: are you sure you want to cancel? (cancelform)Calendar for RV sale scenario (calendar)Message the Renter (message)You're about to cancel (confirm)Booking cancelled (summary)payoutguaranteewarning
   */
    stepName: string

  }
  'OwnerCancellationModalViewed [v1]': {

    /**
   * The unique ID associated with the booking request.
   */
    bookingId: number
    /**
   * The method through which the booking was created.
   */
    bookingType?: 'enquiry' | 'ezmatch' | 'instant' | 'normal'
    /**
   * Free text if the reason is “other”
   */
    cancellationOtherDescription?: string
    /**
   * The main reason from the drop-down list “Why are you cancelling?”if we don’t have data, we don’t send data
   */
    cancellationReason?: string
    /**
   * Content of the field with a subreason.It is a dropdown list for most cancellation reasons, a date if the reason is RV sold and free text if the reason is “Other”
   */
    cancellationSubreason?: string
    /**
   * Content of the message to renter from Message the renter step
   */
    message?: string
    /**
   * Amount of the lost payout as shown to the owner
   */
    payoutAmount: number
    /**
   * Currency of the lost payout as shown to the owner. We can take country of origin
   */
    payoutCurrency?: string
    /**
   * Datetime when the request was places - in UTC timezone
   */
    requestDate?: string
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId: string
    /**
   * The datetime that the requested booking is to begin.
   */
    startDate?: string
    /**
   * The possible steps are:Modal opened (open)Cancel form: are you sure you want to cancel? (cancelform)Calendar for RV sale scenario (calendar)Message the Renter (message)You're about to cancel (confirm)Booking cancelled (summary)payoutguaranteewarning
   */
    stepName: string

  }
  'Page Viewed': {

    name?: string
    path?: string
    referrer?: string
    search?: string | null
    title?: string
    url?: string

  }
  'Page Viewed [v1]': {

    name?: string
    path?: string
    referrer?: string
    search?: string | null
    title?: string
    url?: string

  }
  'PayInFullTapped': {

    /**
   * The unique ID associated with the booking request.
   */
    bookingId: number
    /**
   * The total rental amount of the booking when the user taps on the “pay in full” option
   */
    totalRentalAmount?: number

  }
  'PayInFullTapped [v1]': {

    /**
   * The unique ID associated with the booking request.
   */
    bookingId: number
    /**
   * The total rental amount of the booking when the user taps on the “pay in full” option
   */
    totalRentalAmount?: number

  }
  'PayWithPaypalClicked': {

    /**
   * The bookingId associated to the reservation
   */
    bookingId: number
    /**
   * The state of the booking as is represented on the backend.
   */
    bookingState: number
    /**
   * The method through which the booking was created. (note make sure to still track ezymatch even though it isn’t a official booking type in the backend)
   */
    bookingType: string
    /**
   * The ISO 4217 currency that will be submitted for payments.
   */
    currency: 'aud' | 'cad' | 'eur' | 'gbp' | 'nzd' | 'usd'
    /**
   * Whether the booking originated from an Ezymatch offer
   */
    isEzymatch: boolean
    /**
   * The total rental amount of the booking when the user clicks on Pay with PayPal
   */
    totalRentalAmount: number
    /**
   * Difference between start date and the current date. (how many days out does the trip start)
   */
    tripLeadTime: number

  }
  'PayWithPaypalClicked [v1]': {

    /**
   * The bookingId associated to the reservation
   */
    bookingId: number
    /**
   * The state of the booking as is represented on the backend.
   */
    bookingState: number
    /**
   * The method through which the booking was created. (note make sure to still track ezymatch even though it isn’t a official booking type in the backend)
   */
    bookingType: string
    /**
   * The ISO 4217 currency that will be submitted for payments.
   */
    currency: 'aud' | 'cad' | 'eur' | 'gbp' | 'nzd' | 'usd'
    /**
   * Whether the booking originated from an Ezymatch offer
   */
    isEzymatch: boolean
    /**
   * The total rental amount of the booking when the user clicks on Pay with PayPal
   */
    totalRentalAmount: number
    /**
   * Difference between start date and the current date. (how many days out does the trip start)
   */
    tripLeadTime: number

  }
  'PaymentUpdateSubmitted': {

    /**
   * The unique ID associated with the booking request.
   */
    bookingId: number
    /**
   * The state of the booking as is represented on the backend.
   */
    bookingState?: number
    /**
   * The method through which the booking was created.
   */
    bookingType?: 'enquiry' | 'instant' | 'invoice' | 'normal'
    /**
   * The CTA that got the user to this screen (either “Retry payment” / “View details” (on the red Stripe_error_message banner) from Booking Details page, or “Update“ from Payment Methods page).
   */
    cta?: string
    /**
   * The ISO 4217 currency code that is displayed.
   */
    currency?: 'aud' | 'cad' | 'eur' | 'gbp' | 'nzd' | 'usd'
    /**
   * When the user is viewing this page due to a failed payment, then it is true.When the user is viewing this page ot add a payment method without have a failed payment, then it is false
   */
    hasFailedPayment: boolean
    /**
   * The screen that the user came from (either Payment Methods or Booking Details page).
   */
    pageSource?: string
    /**
   * The total amount that will be charged through Stripe on this booking until start of trip (if Guests edit booking after this reminder or during trip, this amount will not be accurate). This will be total rental amount plus security deposit. This amount will be always the same across all payment reminders.
   */
    totalChargingAmount?: number

  }
  'PaymentUpdateSubmitted [v1]': {

    /**
   * The unique ID associated with the booking request.
   */
    bookingId: number
    /**
   * The state of the booking as is represented on the backend.
   */
    bookingState?: number
    /**
   * The method through which the booking was created.
   */
    bookingType?: 'enquiry' | 'ezmatch' | 'instant' | 'normal'
    /**
   * The CTA that got the user to this screen (either “Retry payment” / “View details” (on the red Stripe_error_message banner) from Booking Details page, or “Update“ from Payment Methods page).
   */
    cta: string
    /**
   * The ISO 4217 currency code that is displayed.
   */
    currency: 'aud' | 'cad' | 'eur' | 'gbp' | 'nzd' | 'usd'
    /**
   * The screen that the user came from (either Payment Methods or Booking Details page).
   */
    pageSource: string
    /**
   * The total amount that will be charged through Stripe on this booking until start of trip (if Guests edit booking after this reminder or during trip, this amount will not be accurate). This will be total rental amount plus security deposit. This amount will be always the same across all payment reminders.
   */
    totalChargingAmount: number

  }
  'PaymentUpdateSubmitted [v2]': {

    /**
   * The unique ID associated with the booking request.
   */
    bookingId: number
    /**
   * The state of the booking as is represented on the backend.
   */
    bookingState?: number
    /**
   * The method through which the booking was created.
   */
    bookingType?: 'enquiry' | 'instant' | 'invoice' | 'normal'
    /**
   * The CTA that got the user to this screen (either “Retry payment” / “View details” (on the red Stripe_error_message banner) from Booking Details page, or “Update“ from Payment Methods page).
   */
    cta?: string
    /**
   * The ISO 4217 currency code that is displayed.
   */
    currency?: 'aud' | 'cad' | 'eur' | 'gbp' | 'nzd' | 'usd'
    /**
   * When the user is viewing this page due to a failed payment, then it is true.When the user is viewing this page ot add a payment method without have a failed payment, then it is false
   */
    hasFailedPayment: boolean
    /**
   * The screen that the user came from (either Payment Methods or Booking Details page).
   */
    pageSource?: string
    /**
   * The total amount that will be charged through Stripe on this booking until start of trip (if Guests edit booking after this reminder or during trip, this amount will not be accurate). This will be total rental amount plus security deposit. This amount will be always the same across all payment reminders.
   */
    totalChargingAmount?: number

  }
  'PaymentUpdateSubmittedSuccessful': {

    /**
   * The unique ID associated with the booking request.
   */
    bookingId: number
    /**
   * The state of the booking as is represented on the backend.
   */
    bookingState?: number
    /**
   * The method through which the booking was created.
   */
    bookingType?: 'enquiry' | 'instant' | 'invoice' | 'normal'
    /**
   * The CTA that got the user to this screen (either “Retry payment” / “View details” (on the red Stripe_error_message banner) from Booking Details page, or “Update“ from Payment Methods page).
   */
    cta?: string
    /**
   * The ISO 4217 currency code that is displayed.
   */
    currency: 'aud' | 'cad' | 'eur' | 'gbp' | 'nzd' | 'usd'
    /**
   * The screen that the user came from (either Payment Methods or Booking Details page).
   */
    pageSource?: string
    /**
   * The total amount that will be charged through Stripe on this booking until start of trip (if Guests edit booking after this reminder or during trip, this amount will not be accurate). This will be total rental amount plus security deposit. This amount will be always the same across all payment reminders.
   */
    totalChargingAmount: number

  }
  'PaymentUpdateSubmittedSuccessful [v1]': {

    /**
   * The unique ID associated with the booking request.
   */
    bookingId: number
    /**
   * The state of the booking as is represented on the backend.
   */
    bookingState?: number
    /**
   * The method through which the booking was created.
   */
    bookingType?: 'enquiry' | 'instant' | 'invoice' | 'normal'
    /**
   * The CTA that got the user to this screen (either “Retry payment” / “View details” (on the red Stripe_error_message banner) from Booking Details page, or “Update“ from Payment Methods page).
   */
    cta?: string
    /**
   * The ISO 4217 currency code that is displayed.
   */
    currency: 'aud' | 'cad' | 'eur' | 'gbp' | 'nzd' | 'usd'
    /**
   * The screen that the user came from (either Payment Methods or Booking Details page).
   */
    pageSource?: string
    /**
   * The total amount that will be charged through Stripe on this booking until start of trip (if Guests edit booking after this reminder or during trip, this amount will not be accurate). This will be total rental amount plus security deposit. This amount will be always the same across all payment reminders.
   */
    totalChargingAmount: number

  }
  'PaymentUpdateSuccessful': {

    /**
   * The unique ID associated with the booking request.
   */
    bookingId: number
    /**
   * The state of the booking as is represented on the backend.
   */
    bookingState?: number
    /**
   * The method through which the booking was created.
   */
    bookingType?: 'enquiry' | 'instant' | 'invoice' | 'normal'
    /**
   * The CTA that got the user to this screen (either “Retry payment” / “View details” (on the red Stripe_error_message banner) from Booking Details page, or “Update“ from Payment Methods page).
   */
    cta?: string
    /**
   * The ISO 4217 currency code that is displayed.
   */
    currency?: 'aud' | 'cad' | 'eur' | 'gbp' | 'nzd' | 'usd'
    /**
   * The screen that the user came from (either Payment Methods or Booking Details page).
   */
    pageSource?: string
    /**
   * The total amount that will be charged through Stripe on this booking until start of trip (if Guests edit booking after this reminder or during trip, this amount will not be accurate). This will be total rental amount plus security deposit. This amount will be always the same across all payment reminders.
   */
    totalChargingAmount?: number

  }
  'PaymentUpdateSuccessful [v1]': {

    /**
   * The unique ID associated with the booking request.
   */
    bookingId: number
    /**
   * The state of the booking as is represented on the backend.
   */
    bookingState?: number
    /**
   * The method through which the booking was created.
   */
    bookingType?: 'enquiry' | 'ezmatch' | 'instant' | 'normal'
    /**
   * The CTA that got the user to this screen (either “Retry payment” / “View details” (on the red Stripe_error_message banner) from Booking Details page, or “Update“ from Payment Methods page).
   */
    cta?: string
    /**
   * The ISO 4217 currency code that is displayed.
   */
    currency: 'aud' | 'cad' | 'eur' | 'gbp' | 'nzd' | 'usd'
    /**
   * The screen that the user came from (either Payment Methods or Booking Details page).
   */
    pageSource?: string
    /**
   * The total amount that will be charged through Stripe on this booking until start of trip (if Guests edit booking after this reminder or during trip, this amount will not be accurate). This will be total rental amount plus security deposit. This amount will be always the same across all payment reminders.
   */
    totalChargingAmount: number

  }
  'PaymentUpdateSuccessful [v2]': {

    /**
   * The unique ID associated with the booking request.
   */
    bookingId: number
    /**
   * The state of the booking as is represented on the backend.
   */
    bookingState?: number
    /**
   * The method through which the booking was created.
   */
    bookingType?: 'enquiry' | 'instant' | 'invoice' | 'normal'
    /**
   * The CTA that got the user to this screen (either “Retry payment” / “View details” (on the red Stripe_error_message banner) from Booking Details page, or “Update“ from Payment Methods page).
   */
    cta?: string
    /**
   * The ISO 4217 currency code that is displayed.
   */
    currency?: 'aud' | 'cad' | 'eur' | 'gbp' | 'nzd' | 'usd'
    /**
   * The screen that the user came from (either Payment Methods or Booking Details page).
   */
    pageSource?: string
    /**
   * The total amount that will be charged through Stripe on this booking until start of trip (if Guests edit booking after this reminder or during trip, this amount will not be accurate). This will be total rental amount plus security deposit. This amount will be always the same across all payment reminders.
   */
    totalChargingAmount?: number

  }
  'PaymentUpdateViewed': {

    /**
   * The unique ID associated with the booking request.
   */
    bookingId: number
    /**
   * The state of the booking as is represented on the backend.
   */
    bookingState?: number
    /**
   * The method through which the booking was created.
   */
    bookingType?: 'enquiry' | 'instant' | 'invoice' | 'normal'
    /**
   * The CTA that got the user to this screen (either “Retry payment” / “View details” (on the red Stripe_error_message banner) from Booking Details page, or “Update“ from Payment Methods page).
   */
    cta?: string
    /**
   * The ISO 4217 currency code that is displayed.
   */
    currency?: 'aud' | 'cad' | 'eur' | 'gbp' | 'nzd' | 'usd'
    /**
   * When the user is viewing this page due to a failed payment, then it is true.When the user is viewing this page ot add a payment method without have a failed payment, then it is false
   */
    hasFailedPayment: boolean
    /**
   * The screen that the user came from (either Payment Methods or Booking Details page).
   */
    pageSource?: string
    /**
   * The total amount that will be charged through Stripe on this booking until start of trip (if Guests edit booking after this reminder or during trip, this amount will not be accurate). This will be total rental amount plus security deposit. This amount will be always the same across all payment reminders.
   */
    totalChargingAmount?: number

  }
  'PaymentUpdateViewed [v1]': {

    /**
   * The unique ID associated with the booking request.
   */
    bookingId: number
    /**
   * The state of the booking as is represented on the backend.
   */
    bookingState?: number
    /**
   * The method through which the booking was created.
   */
    bookingType?: 'enquiry' | 'ezmatch' | 'instant' | 'normal'
    /**
   * The CTA that got the user to this screen (either “Retry payment” / “View details” (on the red Stripe_error_message banner) from Booking Details page, or “Update“ from Payment Methods page).
   */
    cta: string
    /**
   * The ISO 4217 currency code that is displayed.
   */
    currency: 'aud' | 'cad' | 'eur' | 'gbp' | 'nzd' | 'usd'
    /**
   * The screen that the user came from (either Payment Methods or Booking Details page).
   */
    pageSource: string
    /**
   * The total amount that will be charged through Stripe on this booking until start of trip (if Guests edit booking after this reminder or during trip, this amount will not be accurate). This will be total rental amount plus security deposit. This amount will be always the same across all payment reminders.
   */
    totalChargingAmount: number

  }
  'PaymentUpdateViewed [v2]': {

    /**
   * The unique ID associated with the booking request.
   */
    bookingId: number
    /**
   * The state of the booking as is represented on the backend.
   */
    bookingState?: number
    /**
   * The method through which the booking was created.
   */
    bookingType?: 'enquiry' | 'instant' | 'invoice' | 'normal'
    /**
   * The CTA that got the user to this screen (either “Retry payment” / “View details” (on the red Stripe_error_message banner) from Booking Details page, or “Update“ from Payment Methods page).
   */
    cta?: string
    /**
   * The ISO 4217 currency code that is displayed.
   */
    currency?: 'aud' | 'cad' | 'eur' | 'gbp' | 'nzd' | 'usd'
    /**
   * When the user is viewing this page due to a failed payment, then it is true.When the user is viewing this page ot add a payment method without have a failed payment, then it is false
   */
    hasFailedPayment: boolean
    /**
   * The screen that the user came from (either Payment Methods or Booking Details page).
   */
    pageSource?: string
    /**
   * The total amount that will be charged through Stripe on this booking until start of trip (if Guests edit booking after this reminder or during trip, this amount will not be accurate). This will be total rental amount plus security deposit. This amount will be always the same across all payment reminders.
   */
    totalChargingAmount?: number

  }
  'PayoutGuaranteeAdded': {

    /**
   * The unique ID associated with the booking (same as booking number).
   */
    bookingId: number
    /**
   * The state of the booking as is represented on the backend when the event happens
   */
    bookingState: number
    /**
   * The ISO 4217 currency code displayed
   */
    currency: 'AUD' | 'CAD' | 'EUR' | 'GBP' | 'NZD' | 'USD'
    /**
   * The date that the requested booking is to end.
   */
    endDate: string
    /**
   * whether or not this listing includes Delivery
   */
    hasDelivery: boolean
    /**
   * Whether or not the event was triggered automatically (payout guarantee automatically added to the booking because the toggle is on)
   */
    isAutomatic: boolean
    /**
   * The city that the listing is based in.
   */
    listingCity: string
    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    listingCountry: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * The region the listing is based in
   */
    listingRegion: string
    /**
   * Rental category of vehicle booked.
   */
    listingType: string
    /**
   * The unique ID of the RV, as is assigned and stored by the backend
   */
    rvId: string
    /**
   * The date that the requested booking is to begin.
   */
    startDate: string
    /**
   * The total dollar value of the host payout for the entire after payout guarantee is added
   */
    totalPayout: number
    /**
   * Difference between start date and the current date. (how many days out does the trip start)
   */
    tripLeadTime: number

  }
  'PayoutGuaranteeAdded [v1]': {

    /**
   * The unique ID associated with the booking (same as booking number).
   */
    bookingId: number
    /**
   * The state of the booking as is represented on the backend when the event happens
   */
    bookingState: number
    /**
   * The ISO 4217 currency code displayed
   */
    currency: string
    /**
   * The date that the requested booking is to end.
   */
    endDate: string
    /**
   * whether or not this listing includes Delivery
   */
    hasDelivery: boolean
    /**
   * The city that the listing is based in.
   */
    listingCity: string
    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    listingCountry: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * The region the listing is based in
   */
    listingRegion: string
    /**
   * Rental category of vehicle booked.
   */
    listingType: string
    /**
   * The unique ID of the RV, as is assigned and stored by the backend
   */
    rvId: string
    /**
   * The date that the requested booking is to begin.
   */
    startDate: string
    /**
   * The total dollar value of the host payout for the entire after payout guarantee is added
   */
    totalPayout: number
    /**
   * Difference between start date and the current date. (how many days out does the trip start)
   */
    tripLeadTime: number

  }
  'PayoutGuaranteeAdded [v2]': {

    /**
   * Whether or not the event was triggered automatically (payout guarantee automatically added to the booking because the toggle is on)
   */
    IsAutomatic: boolean
    /**
   * The unique ID associated with the booking (same as booking number).
   */
    bookingId: number
    /**
   * The state of the booking as is represented on the backend when the event happens
   */
    bookingState: number
    /**
   * The ISO 4217 currency code displayed
   */
    currency: string
    /**
   * The date that the requested booking is to end.
   */
    endDate: string
    /**
   * whether or not this listing includes Delivery
   */
    hasDelivery: boolean
    /**
   * The city that the listing is based in.
   */
    listingCity: string
    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    listingCountry: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * The region the listing is based in
   */
    listingRegion: string
    /**
   * Rental category of vehicle booked.
   */
    listingType: string
    /**
   * The unique ID of the RV, as is assigned and stored by the backend
   */
    rvId: string
    /**
   * The date that the requested booking is to begin.
   */
    startDate: string
    /**
   * The total dollar value of the host payout for the entire after payout guarantee is added
   */
    totalPayout: number
    /**
   * Difference between start date and the current date. (how many days out does the trip start)
   */
    tripLeadTime: number

  }
  'PayoutGuaranteeAdded [v3]': {

    /**
   * The unique ID associated with the booking (same as booking number).
   */
    bookingId: number
    /**
   * The state of the booking as is represented on the backend when the event happens
   */
    bookingState: number
    /**
   * The ISO 4217 currency code displayed
   */
    currency: 'AUD' | 'CAD' | 'EUR' | 'GBP' | 'NZD' | 'USD'
    /**
   * The date that the requested booking is to end.
   */
    endDate: string
    /**
   * whether or not this listing includes Delivery
   */
    hasDelivery: boolean
    /**
   * Whether or not the event was triggered automatically (payout guarantee automatically added to the booking because the toggle is on)
   */
    isAutomatic: boolean
    /**
   * The city that the listing is based in.
   */
    listingCity: string
    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    listingCountry: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * The region the listing is based in
   */
    listingRegion: string
    /**
   * Rental category of vehicle booked.
   */
    listingType: string
    /**
   * The unique ID of the RV, as is assigned and stored by the backend
   */
    rvId: string
    /**
   * The date that the requested booking is to begin.
   */
    startDate: string
    /**
   * The total dollar value of the host payout for the entire after payout guarantee is added
   */
    totalPayout: number
    /**
   * Difference between start date and the current date. (how many days out does the trip start)
   */
    tripLeadTime: number

  }
  'PayoutGuaranteeModalViewed': {

    /**
   * The unique ID associated with the booking (same as booking number).
   */
    bookingId: number
    /**
   * The state of the booking as is represented on the backend when the event happens
   */
    bookingState: number
    /**
   * The CTA that is prompting the modal to popup. (example clicking on the “guarantee your payout” on side bar pops up the modal
   */
    cta?: string
    /**
   * The ISO 4217 currency code displayed
   */
    currency: string
    /**
   * The date that the requested booking is to end.
   */
    endDate: string
    /**
   * whether or not this listing includes Delivery
   */
    hasDelivery: boolean
    /**
   * The city that the listing is based in.
   */
    listingCity: string
    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    listingCountry: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * The region the listing is based in
   */
    listingRegion: string
    /**
   * Rental category of vehicle booked.
   */
    listingType: string
    /**
   * The unique ID of the RV, as is assigned and stored by the backend
   */
    rvId: string
    /**
   * The date that the requested booking is to begin.
   */
    startDate: string
    /**
   * The total dollar value of the host payout at time of the event
   */
    totalPayout: number
    /**
   * Difference between start date and the current date. (how many days out does the trip start)
   */
    tripLeadTime: number

  }
  'PayoutGuaranteeModalViewed [v1]': {

    /**
   * The unique ID associated with the booking (same as booking number).
   */
    bookingId: number
    /**
   * The state of the booking as is represented on the backend when the event happens
   */
    bookingState: number
    /**
   * The CTA that is prompting the modal to popup. (example clicking on the “guarantee your payout” on side bar pops up the modal
   */
    cta?: string
    /**
   * The ISO 4217 currency code displayed
   */
    currency: string
    /**
   * The date that the requested booking is to end.
   */
    endDate: string
    /**
   * whether or not this listing includes Delivery
   */
    hasDelivery: boolean
    /**
   * The city that the listing is based in.
   */
    listingCity: string
    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    listingCountry: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * The region the listing is based in
   */
    listingRegion: string
    /**
   * Rental category of vehicle booked.
   */
    listingType: string
    /**
   * The unique ID of the RV, as is assigned and stored by the backend
   */
    rvId: string
    /**
   * The date that the requested booking is to begin.
   */
    startDate: string
    /**
   * The total dollar value of the host payout at time of the event
   */
    totalPayout: number
    /**
   * Difference between start date and the current date. (how many days out does the trip start)
   */
    tripLeadTime: number

  }
  'PayoutGuaranteeSettingToggled': {

    /**
   * The current state of the toggle button - The state of the toggle button after toggling it
   */
    isToggleOn: boolean
    /**
   * The city that the listing is based in.
   */
    listingCity: string
    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    listingCountry: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * The region the listing is based in
   */
    listingRegion: string
    /**
   * Rental category of vehicle booked.
   */
    listingType: string
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId: string
    /**
   * The RV type of the listing they are viewing at the moment the listing page is fully loaded
   */
    rvType: string

  }
  'PayoutGuaranteeSettingToggled [v1]': {

    /**
   * The current state of the toggle button - The state of the toggle button after toggling it
   */
    isToggleOn: boolean
    /**
   * The city that the listing is based in.
   */
    listingCity: string
    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    listingCountry: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * The region the listing is based in
   */
    listingRegion: string
    /**
   * Rental category of vehicle booked.
   */
    listingType: string
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId: string
    /**
   * The RV type of the listing they are viewing at the moment the listing page is fully loaded
   */
    rvType: string

  }
  'PayoutIssueSuccessful': {

    /**
   * Internal userID of the RVezy agent that triggered the payout
   */
    adminUserId?: number
    /**
   * The unique ID associated with the booking (same as booking number).
   */
    bookingId: number
    /**
   * The ISO 4217 currency code displayed
   */
    currency: 'AUD' | 'CAD' | 'EUR' | 'GBP' | 'NZD' | 'USD'
    /**
   * Whether or not the the payout event was triggered by Admin.
   */
    isAdminAction: boolean
    /**
   * Whether or not the event was triggered automatically (payout guarantee automatically issued to the host or manually by Admin)
   */
    isAutomatic: boolean
    isPayoutGuarantee: boolean
    /**
   * The city that the listing is based in.
   */
    listingCity: string
    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    listingCountry: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * The region the listing is based in
   */
    listingRegion: string
    /**
   * The unique ID of the RV, as is assigned and stored by the backend
   */
    rvId: string
    /**
   * The total dollar value of the host payout for the entire rental.
   */
    totalPayout: number

  }
  'PayoutIssueSuccessful [v1]': {

    /**
   * Internal userID of the RVezy agent that triggered the payout
   */
    adminUserId?: number
    /**
   * The unique ID associated with the booking (same as booking number).
   */
    bookingId: number
    /**
   * The ISO 4217 currency code displayed
   */
    currency: string
    /**
   * Whether or not the the payout event was triggered by Admin.
   */
    isAdminAction: boolean
    /**
   * Whether or not the event was triggered automatically (payout guarantee automatically issued to the host or manually by Admin)
   */
    isAutomatic: boolean
    isPayoutGuarantee: boolean
    /**
   * The city that the listing is based in.
   */
    listingCity: string
    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    listingCountry: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * The region the listing is based in
   */
    listingRegion: string
    /**
   * The unique ID of the RV, as is assigned and stored by the backend
   */
    rvId: string
    /**
   * The total dollar value of the host payout for the entire rental.
   */
    totalPayout: number

  }
  'PayoutIssueSuccessful [v2]': {

    /**
   * Internal userID of the RVezy agent that triggered the payout
   */
    adminUserId?: number
    /**
   * The unique ID associated with the booking (same as booking number).
   */
    bookingId: number
    /**
   * The ISO 4217 currency code displayed
   */
    currency: 'AUD' | 'CAD' | 'EUR' | 'GBP' | 'NZD' | 'USD'
    /**
   * Whether or not the the payout event was triggered by Admin.
   */
    isAdminAction: boolean
    /**
   * Whether or not the event was triggered automatically (payout guarantee automatically issued to the host or manually by Admin)
   */
    isAutomatic: boolean
    isPayoutGuarantee: boolean
    /**
   * The city that the listing is based in.
   */
    listingCity: string
    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    listingCountry: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * The region the listing is based in
   */
    listingRegion: string
    /**
   * The unique ID of the RV, as is assigned and stored by the backend
   */
    rvId: string
    /**
   * The total dollar value of the host payout for the entire rental.
   */
    totalPayout: number

  }
  'PhotoCarouselUpdateSuccessful': {

    /**
   * what kind of action triggered the photo to update. A scroll action, or a click
   */
    actionType?: string
    /**
   * where the photo carousel that is being clicked on is located (listing Page, Search listing card, map listing card)
   */
    pageSource: string
    /**
   * the total size of the list of photos available to be displayed
   */
    photoListSize?: number
    /**
   * An array for photoPath & photoListPosition
   */
    photos: {
    /**
     * the position of the photo when the user clicks on the listing card. (ie. if the user is on photo number 3 and then clicks on the listing card, then this parameter should return 3.) array index +1
     */
      photoListPosition: number
      /**
     * path that relates to the exact photo that is now being shown (reflecting the path column we have for that photo in this table)
     */
      photoPath: string
    }[]
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId: string

  }
  'PhotoCarouselUpdateSuccessful [v1]': {

    /**
   * what kind of action triggered the photo to update. A scroll action, or a click
   */
    actionType?: string
    /**
   * where the photo carousel that is being clicked on is located (listing Page, Search listing card, map listing card)
   */
    pageSource: string
    /**
   * the position of the photo when the user clicks on the listing card. (ie. if the user is on photo number 3 and then clicks on the listing card, then this parameter should return 3.) array index +1
   */
    photoListPosition: number
    /**
   * the total size of the list of photos available to be displayed
   */
    photoListSize?: number
    /**
   * path that relates to the exact photo that is now being shown (reflecting the path column we have for that photo in this table)
   */
    photoPath: string
    /**
   * The unique ID of the listingSet request. Reused for ListingSetViewed and ListingSetPresented. (should be able to corelate between events)
   */
    requestId?: string
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId: string

  }
  'PhotoCarouselUpdateSuccessful [v2]': {

    /**
   * what kind of action triggered the photo to update. A scroll action, or a click
   */
    actionType?: string
    /**
   * where the photo carousel that is being clicked on is located (listing Page, Search listing card, map listing card)
   */
    pageSource: string
    /**
   * the total size of the list of photos available to be displayed
   */
    photoListSize?: number
    /**
   * An array for photoPath & photoListPosition
   */
    photos: {
    /**
     * the position of the photo when the user clicks on the listing card. (ie. if the user is on photo number 3 and then clicks on the listing card, then this parameter should return 3.) array index +1
     */
      photoListPosition: number
      /**
     * path that relates to the exact photo that is now being shown (reflecting the path column we have for that photo in this table)
     */
      photoPath: string
    }[]
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId: string

  }
  'PhotoLightBoxUpdateSuccessful': {

    /**
   * what kind of action triggered the photo to update. A swipe, mouse click, keyboard arrow click. Please add other available options
   */
    actionType?: string
    /**
   * where the photo lightbox that is being clicked on is located (rv-rental-alias, rv-rental-country-region-city, rv-rental-country-region)
   */
    pageSource: string
    /**
   * the position of the photo when the user clicks on the listing card. (ie. if the user is on photo number 3 and then clicks on the listing card, then this parameter should return 3.) array index +1
   */
    photoListPosition: number
    /**
   * the total size of the list of photos available to be displayed
   */
    photoListSize?: number
    /**
   * path that relates to the exact photo that is now being shown (reflecting the path column we have for that photo in this table)
   */
    photoPath?: string
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId: string

  }
  'PhotoLightBoxUpdateSuccessful [v1]': {

    /**
   * what kind of action triggered the photo to update. A swipe, mouse click, keyboard arrow click. Please add other available options
   */
    actionType?: string
    /**
   * where the photo lightbox that is being clicked on is located (rv-rental-alias, rv-rental-country-region-city, rv-rental-country-region)
   */
    pageSource: string
    /**
   * the position of the photo when the user clicks on the listing card. (ie. if the user is on photo number 3 and then clicks on the listing card, then this parameter should return 3.) array index +1
   */
    photoListPosition: number
    /**
   * the total size of the list of photos available to be displayed
   */
    photoListSize?: number
    /**
   * path that relates to the exact photo that is now being shown (reflecting the path column we have for that photo in this table)
   */
    photoPath?: string
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId: string

  }
  'PointOfInterestViewed': {

    /**
   * The action being applied to the page being viewed
   */
    action?: string
    /**
   * The type of point of interest page being viewed
   */
    component: string
    /**
   * The page number
   */
    pageNumber?: number
    /**
   * The source screen that came before their next action.
   */
    pageSource: string
    /**
   * The unique ID given to all point of interests
   */
    pointOfInterestId: string

  }
  'PointOfInterestViewed [v1]': {

    /**
   * The action being applied to the page being viewed
   */
    action?: string
    /**
   * The type of point of interest page being viewed
   */
    component: string
    /**
   * The page number
   */
    pageNumber?: number
    /**
   * The source screen that came before their next action.
   */
    pageSource: string
    /**
   * The unique ID given to all point of interests
   */
    pointOfInterestId: string

  }
  'PreApproveInquiryClicked': {

    /**
   * The unique ID associated with the booking request.
   */
    bookingId: number
    /**
   * Total messages sent within this booking id by the time the host clicks the “Pre-approve or decline” button. A code snippet can most likely be reused from ‘MessageSent’ event
   */
    numMessages: number
    /**
   * Each time a different party messages, the turn count is incremented by one. E.g. If A messages B then B messages A, the turn count is 2. If A messages B, then A messages B again, then A messages B again, the turn count is 1 (because B has not yet had a “turn”). A code snippet can most likely be reused from ‘MessageSent’ event
   */
    numTurns: number
    /**
   * The unique guest ID associated with the booking id.
   */
    otherUserId?: number

  }
  'PreApproveInquiryClicked [v1]': {

    /**
   * The unique ID associated with the booking request.
   */
    bookingId: number
    /**
   * Total messages sent within this booking id by the time the host clicks the “Pre-approve or decline” button. A code snippet can most likely be reused from ‘MessageSent’ event
   */
    numMessages: number
    /**
   * Each time a different party messages, the turn count is incremented by one. E.g. If A messages B then B messages A, the turn count is 2. If A messages B, then A messages B again, then A messages B again, the turn count is 1 (because B has not yet had a “turn”). A code snippet can most likely be reused from ‘MessageSent’ event
   */
    numTurns: number
    /**
   * The unique guest ID associated with the booking id.
   */
    otherUserId?: number

  }
  'Product Added': {

    /**
   * Brand associated with the product
   */
    brand?: string
    /**
   * Cart ID to which the product was added to
   */
    cart_id?: string
    /**
   * Product category being viewed
   */
    category?: string
    /**
   * Coupon code associated with a product
   */
    coupon?: string | null
    /**
   * Currency code associated with the transaction
   */
    currency: string
    /**
   * Image url of the product
   */
    image_url?: string | null
    /**
   * Name of the product being viewed
   */
    name?: string
    /**
   * Position in the product list
   */
    position?: string
    /**
   * Price ($) of the product being viewed
   */
    price?: number
    /**
   * Database id of the product being viewed
   */
    product_id: string
    /**
   * Quantity of a product
   */
    quantity?: number
    /**
   * Sku of the product being viewed
   */
    sku?: string
    /**
   * URL of the product page
   */
    url?: string
    /**
   * Revenue ($) with discounts and coupons added in.
   */
    value: number
    /**
   * Variant of the product
   */
    variant?: string

  }
  'Product Added [v1]': {

    /**
   * Brand associated with the product
   */
    brand?: string
    /**
   * Cart ID to which the product was added to
   */
    cart_id?: string
    /**
   * Product category being viewed
   */
    category?: string
    /**
   * Coupon code associated with a product
   */
    coupon?: string | null
    /**
   * Currency code associated with the transaction
   */
    currency: string
    /**
   * Image url of the product
   */
    image_url?: string | null
    /**
   * Name of the product being viewed
   */
    name?: string
    /**
   * Position in the product list
   */
    position?: string
    /**
   * Price ($) of the product being viewed
   */
    price?: number
    /**
   * Database id of the product being viewed
   */
    product_id: string
    /**
   * Quantity of a product
   */
    quantity?: number
    /**
   * Sku of the product being viewed
   */
    sku?: string
    /**
   * URL of the product page
   */
    url?: string
    /**
   * Revenue ($) with discounts and coupons added in.
   */
    value: number
    /**
   * Variant of the product
   */
    variant?: string

  }
  'Product List Filtered': {

    /**
   * Product category being viewed
   */
    category?: string
    /**
   * Product filters that the customer is using
   */
    filters: {
    /**
     * Id of the filter type that the customer is using
     */
      type: string
      /**
     * Id of the selection that the customer chose
     */
      value: string
    }[]
    /**
   * Product list being viewed
   */
    list_id?: string
    /**
   * Products displayed in the product list
   */
    products: {
    /**
     * Brand associated with the product
     */
      brand?: string
      /**
     * Product category being viewed
     */
      category?: string
      /**
     * Coupon code associated with a product (for example, MAY_DEALS_3)
     */
      coupon?: string
      /**
     * Image url of the product
     */
      image_url?: string
      /**
     * Name of the product being viewed
     */
      name: string
      /**
     * Position in the product list (ex. 3)
     */
      position?: number
      /**
     * Price ($) of the product being viewed
     */
      price?: number
      /**
     * Product id displayed on the list
     */
      product_id: string
      /**
     * Quantity of a product
     */
      quantity?: number
      /**
     * Sku of the product being viewed
     */
      sku?: string
      /**
     * URL of the product page
     */
      url: string
      /**
     * Variant of the product
     */
      variant?: string
    }[]
    sorts?: {
    /**
     * Id of the sort type that the customer is using
     */
      type: string
      /**
     * Id of the selection type the the customer is using (ascending, descending)
     */
      value: string
    }[]

  }
  'Product List Filtered [v1]': {

    /**
   * Product category being viewed
   */
    category?: string
    /**
   * Product filters that the customer is using
   */
    filters: {
    /**
     * Id of the filter type that the customer is using
     */
      type: string
      /**
     * Id of the selection that the customer chose
     */
      value: string
    }[]
    /**
   * Product list being viewed
   */
    list_id?: string
    /**
   * Products displayed in the product list
   */
    products: {
    /**
     * Brand associated with the product
     */
      brand?: string
      /**
     * Product category being viewed
     */
      category?: string
      /**
     * Coupon code associated with a product (for example, MAY_DEALS_3)
     */
      coupon?: string
      /**
     * Image url of the product
     */
      image_url?: string
      /**
     * Name of the product being viewed
     */
      name: string
      /**
     * Position in the product list (ex. 3)
     */
      position?: number
      /**
     * Price ($) of the product being viewed
     */
      price?: number
      /**
     * Product id displayed on the list
     */
      product_id: string
      /**
     * Quantity of a product
     */
      quantity?: number
      /**
     * Sku of the product being viewed
     */
      sku?: string
      /**
     * URL of the product page
     */
      url: string
      /**
     * Variant of the product
     */
      variant?: string
    }[]
    sorts?: {
    /**
     * Id of the sort type that the customer is using
     */
      type: string
      /**
     * Id of the selection type the the customer is using (ascending, descending)
     */
      value: string
    }[]

  }
  'Product List Viewed': {

    /**
   * Product category being viewed
   */
    category?: string
    /**
   * Product list being viewed
   */
    list_id?: string
    /**
   * Products displayed in the product list
   */
    products: {
    /**
     * Brand associated with the product
     */
      brand?: string
      /**
     * Product category being viewed
     */
      category?: string
      /**
     * Coupon code associated with a product (for example, MAY_DEALS_3)
     */
      coupon?: string
      /**
     * Product currency
     */
      currency?: string
      /**
     * Image url of the product
     */
      image_url?: string
      /**
     * Name of the product being viewed
     */
      name: string
      /**
     * Position in the product list (ex. 3)
     */
      position?: number
      /**
     * Price ($) of the product being viewed
     */
      price?: number
      /**
     * Product id displayed on the list
     */
      product_id: string
      /**
     * Quantity of a product
     */
      quantity?: number
      /**
     * Sku of the product being viewed
     */
      sku?: string
      /**
     * URL of the product page
     */
      url: string
      /**
     * Variant of the product
     */
      variant?: string
    }[]

  }
  'Product List Viewed [v1]': {

    /**
   * Product category being viewed
   */
    category?: string
    /**
   * Product list being viewed
   */
    list_id?: string
    /**
   * Products displayed in the product list
   */
    products: {
    /**
     * Brand associated with the product
     */
      brand?: string
      /**
     * Product category being viewed
     */
      category?: string
      /**
     * Coupon code associated with a product (for example, MAY_DEALS_3)
     */
      coupon?: string
      /**
     * Product currency
     */
      currency?: string
      /**
     * Image url of the product
     */
      image_url?: string
      /**
     * Name of the product being viewed
     */
      name: string
      /**
     * Position in the product list (ex. 3)
     */
      position?: number
      /**
     * Price ($) of the product being viewed
     */
      price?: number
      /**
     * Product id displayed on the list
     */
      product_id: string
      /**
     * Quantity of a product
     */
      quantity?: number
      /**
     * Sku of the product being viewed
     */
      sku?: string
      /**
     * URL of the product page
     */
      url: string
      /**
     * Variant of the product
     */
      variant?: string
    }[]

  }
  'Product Viewed': {

    /**
   * Brand associated with the product
   */
    brand: string
    /**
   * Cart ID to which the product was added to
   */
    cart_id?: string
    /**
   * Product category being viewed
   */
    category: string
    /**
   * Coupon code associated with a product (for example, MAY_DEALS_3)
   */
    coupon?: string
    /**
   * Currency of the transaction
   */
    currency: string
    /**
   * Image url of the product
   */
    image_url?: string
    /**
   * Name of the product being viewed
   */
    name: string
    /**
   * Position in the product list (ex. 3)
   */
    position?: number
    /**
   * Price ($) of the product being viewed
   */
    price?: number
    /**
   * Database id of the product being viewed
   */
    product_id: string
    /**
   * Quantity of a product
   */
    quantity?: number
    /**
   * Sku of the product being viewed
   */
    sku?: string
    /**
   * URL of the product page
   */
    url: string
    /**
   * Total value of the product after quantity
   */
    value: number
    /**
   * Variant of the product
   */
    variant?: string

  }
  'Product Viewed [v1]': {

    /**
   * Brand associated with the product
   */
    brand: string
    /**
   * Cart ID to which the product was added to
   */
    cart_id?: string
    /**
   * Product category being viewed
   */
    category: string
    /**
   * Coupon code associated with a product (for example, MAY_DEALS_3)
   */
    coupon?: string
    /**
   * Currency of the transaction
   */
    currency: string
    /**
   * Image url of the product
   */
    image_url?: string
    /**
   * Name of the product being viewed
   */
    name: string
    /**
   * Position in the product list (ex. 3)
   */
    position?: number
    /**
   * Price ($) of the product being viewed
   */
    price?: number
    /**
   * Database id of the product being viewed
   */
    product_id: string
    /**
   * Quantity of a product
   */
    quantity?: number
    /**
   * Sku of the product being viewed
   */
    sku?: string
    /**
   * URL of the product page
   */
    url: string
    /**
   * Total value of the product after quantity
   */
    value: number
    /**
   * Variant of the product
   */
    variant?: string

  }
  'Products Searched': {

    /**
   * Query the user searched with
   */
    query: string | null

  }
  'Products Searched [v1]': {

    /**
   * Query the user searched with
   */
    query: string | null

  }
  'ProfileViewed': {

    /**
   * the cta the user clicked on to get to this screen. (ie. was it on the avatar, did they click on “view profile”, etc. )
   */
    cta: string
    /**
   * Whether or not there is a joining date displayed on the profile page
   */
    hasJoinedDate: boolean
    /**
   * Whether or not the profile owner wrote anything in the “About” section on the profile page
   */
    hasProfileDescription: boolean
    /**
   * Whether there is a profile photo or not on the profile page.
   */
    hasProfilePhoto: boolean
    /**
   * Whether or not the page includes a reviews'rating average on the profile page
   */
    hasReviewsAverage: boolean
    /**
   * Whether or not the profile is verified on the profile page
   */
    hasVerificationBadge: boolean
    /**
   * Whether or not the profile view is in editable when the user is viewing it (ie. are they viewing their own profile)
   */
    isEditable: boolean
    /**
   * Whether or not the type of profile the user is viewing is a host profile.
   */
    isHostProfile: boolean
    /**
   * The user type, if known. The user is the person visiting the profile page.
   */
    isOwner?: boolean
    /**
   * Whether or not the host profile being viewed has the Superhost badge
   */
    isSuperhost: boolean
    /**
   * the year that the user joined RVezy as displayed on the profile page
   */
    joinedYear?: number
    /**
   * Number of reviews displayed on the profile page. if none displayed, this parameter should be 0
   */
    numberOfReviews: number
    /**
   * The pagesource that the user came from to get to this screen.
   */
    pageSource: string
    /**
   * The Id of the user whose profile is being viewed.
   */
    receiverUserId: number
    /**
   * The response rate of the user as displayed on the profile page.
   */
    responseRate?: number
    /**
   * Number of listing displayed on the profile page. if none displayed, this parameter should be 0.
   */
    rvListingsDisplayed: number

  }
  'ProfileViewed [v1]': {

    /**
   * the cta the user clicked on to get to this screen. (ie. was it on the avatar, did they click on “view profile”, etc. )
   */
    cta: string
    /**
   * Whether or not there is a joining date displayed on the profile page
   */
    hasJoinedDate: boolean
    /**
   * Whether or not the profile owner wrote anything in the “About” section on the profile page
   */
    hasProfileDescription: boolean
    /**
   * Whether there is a profile photo or not on the profile page.
   */
    hasProfilePhoto: boolean
    /**
   * Whether or not the page includes a reviews'rating average on the profile page
   */
    hasReviewsAverage: boolean
    /**
   * Whether or not the profile is verified on the profile page
   */
    hasVerificationBadge: boolean
    /**
   * Whether or not the profile view is in editable when the user is viewing it (ie. are they viewing their own profile)
   */
    isEditable: boolean
    /**
   * Whether or not the type of profile the user is viewing is a host profile.
   */
    isHostProfile: boolean
    /**
   * The user type, if known. The user is the person visiting the profile page.
   */
    isOwner?: boolean
    /**
   * Whether or not the host profile being viewed has the Superhost badge
   */
    isSuperhost: boolean
    /**
   * the year that the user joined RVezy as displayed on the profile page
   */
    joinedYear?: number
    /**
   * Number of reviews displayed on the profile page. if none displayed, this parameter should be 0
   */
    numberOfReviews: number
    /**
   * The pagesource that the user came from to get to this screen.
   */
    pageSource: string
    /**
   * The Id of the user whose profile is being viewed.
   */
    receiverUserId: number
    /**
   * The response rate of the user as displayed on the profile page.
   */
    responseRate?: number
    /**
   * Number of listing displayed on the profile page. if none displayed, this parameter should be 0.
   */
    rvListingsDisplayed: number

  }
  'PromoBannerClicked': {

    /**
   * The URL that the user was sent to
   */
    externalLink: string
    /**
   * If the user is a host or a guest
   */
    isOwner?: boolean
    /**
   * The source screen that came before their next action.
   */
    pageSource: string
    /**
   * the name of the short link
   */
    slug: string
    /**
   * UserID of the logged in user
   */
    userId?: number

  }
  'PromoBannerClicked [v1]': {

    /**
   * The URL that the user was sent to
   */
    externalLink: string
    /**
   * If the user is a host or a guest
   */
    isOwner?: boolean
    /**
   * The source screen that came before their next action.
   */
    pageSource: string
    /**
   * the name of the short link
   */
    slug: string
    /**
   * UserID of the logged in user
   */
    userId?: number

  }
  'RVezyApplicationInstalled': {

  }
  'RVezyApplicationInstalled [v1]': {

  }
  'RVezyApplicationOpened': {

  }
  'RVezyApplicationOpened [v1]': {

  }
  'ReferralPurchaseCompleted': {

    /**
   * The booking id
   */
    bookingId?: number
    /**
   * The value of the booking (GMV)
   */
    bookingValue?: number
    /**
   * The currency of the booking
   */
    currency?: 'AUD' | 'CAD' | 'EUR' | 'GBP' | 'NZD' | 'USD'
    /**
   * The email address of the user claiming the referral code.
   */
    email: string
    /**
   * The first name of the user
   */
    firstName?: string
    /**
   * The full name of the user
   */
    fullName?: string
    /**
   * The last name of the user
   */
    lastName?: string
    /**
   * The referral code being claimed
   */
    referralCode: string
    /**
   * The referral code vendor (ex: FriendBuy)
   */
    vendor?: string

  }
  'ReferralPurchaseCompleted [v1]': {

    /**
   * The booking id
   */
    bookingId?: number
    /**
   * The value of the booking (GMV)
   */
    bookingValue?: number
    /**
   * The currency of the booking
   */
    currency?: 'cad' | 'usd'
    /**
   * The email address of the user claiming the referral code.
   */
    email: string
    /**
   * The first name of the user
   */
    firstName?: string
    /**
   * The full name of the user
   */
    fullName?: string
    /**
   * The last name of the user
   */
    lastName?: string
    /**
   * The referral code being claimed
   */
    referralCode: string
    /**
   * The referral code vendor (ex: FriendBuy)
   */
    vendor?: string

  }
  'ReferralPurchaseCompleted [v2]': {

    /**
   * The booking id
   */
    bookingId?: number
    /**
   * The value of the booking (GMV)
   */
    bookingValue?: number
    /**
   * The currency of the booking
   */
    currency?: 'AUD' | 'CAD' | 'EUR' | 'GBP' | 'NZD' | 'USD'
    /**
   * The email address of the user claiming the referral code.
   */
    email: string
    /**
   * The first name of the user
   */
    firstName?: string
    /**
   * The full name of the user
   */
    fullName?: string
    /**
   * The last name of the user
   */
    lastName?: string
    /**
   * The referral code being claimed
   */
    referralCode: string
    /**
   * The referral code vendor (ex: FriendBuy)
   */
    vendor?: string

  }
  'ReferralRewardDistributed': {

    /**
   * The user who advocated for this referral
   */
    advocateUserId: number
    /**
   * The friend who consumed this referral
   */
    friendUserId: number
    /**
   * The name of the referral vendor (ex: FriendBuy)
   */
    referralVendor: string
    /**
   * The value or amount of the reward (ex: 50)
   */
    rewardAmount?: number
    /**
   * The type represented by the amount (Value, Percentage)
   */
    rewardAmountType?: 'Percentage' | 'Value'
    /**
   * Which point in the flow the reward was triggered (ex: Purchase, Signup, Other)
   */
    rewardTrigger: 'Other' | 'Purchase' | 'Signup'
    /**
   * The type of award being distributed (ex: Payout, AccountCredit, Other)
   */
    rewardType: 'AccountCredit' | 'Other' | 'Payout'
    /**
   * The type of user the reward went to (ex: Advocate or Friend)
   */
    rewardedTo: 'Advocate' | 'Friend'
    /**
   * The user which the reward was distributed to
   */
    rewardedToUserId: number

  }
  'ReferralRewardDistributed [v1]': {

    /**
   * The user who advocated for this referral
   */
    advocateUserId: number
    /**
   * The friend who consumed this referral
   */
    friendUserId: number
    /**
   * The name of the referral vendor (ex: FriendBuy)
   */
    referralVendor: string
    /**
   * The value or amount of the reward (ex: 50)
   */
    rewardAmount?: number
    /**
   * The type represented by the amount (Value, Percentage)
   */
    rewardAmountType?: 'Percentage' | 'Value'
    /**
   * Which point in the flow the reward was triggered (ex: Purchase, Signup, Other)
   */
    rewardTrigger: 'Other' | 'Purchase' | 'Signup'
    /**
   * The type of award being distributed (ex: Payout, AccountCredit, Other)
   */
    rewardType: 'AccountCredit' | 'Other' | 'Payout'
    /**
   * The type of user the reward went to (ex: Advocate or Friend)
   */
    rewardedTo: 'Advocate' | 'Friend'
    /**
   * The user which the reward was distributed to
   */
    rewardedToUserId: number

  }
  'RenterCancellationModalClosed': {

    /**
   * The unique ID associated with the booking request.
   */
    bookingId: number
    /**
   * Enum for the parent cancellation reason.
   */
    cancellationReason?: string
    /**
   * The CTA that got the user to this screen.
   */
    cta?: string
    /**
   * The screen that the user came from.
   */
    pageSource?: string
    /**
   * How the modal was dismissed by the user.
   */
    response: 'cancel' | 'cancelcomplete' | 'cancelerror' | 'clickoutside' | 'close' | 'continue'
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId: string
    /**
   * The time the user spends on this page in seconds.
   */
    viewSeconds?: number

  }
  'RenterCancellationModalClosed [v1]': {

    /**
   * The unique ID associated with the booking request.
   */
    bookingId: number
    /**
   * Enum for the parent cancellation reason.
   */
    cancellationReason?: string
    /**
   * The CTA that got the user to this screen.
   */
    cta?: string
    /**
   * The screen that the user came from.
   */
    pageSource?: string
    /**
   * How the modal was dismissed by the user.
   */
    response: 'cancel' | 'cancelcomplete' | 'cancelerror' | 'clickoutside' | 'close' | 'continue'
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId: string
    /**
   * The time the user spends on this page in seconds.
   */
    viewSeconds?: number

  }
  'RenterCancellationModalReasonSelected': {

    /**
   * The unique ID associated with the booking request.
   */
    bookingId: number
    /**
   * Enum for the parent cancellation reason.
   */
    cancellationReason: string
    /**
   * The CTA that got the user to this screen.
   */
    cta?: string
    /**
   * The screen that the user came from.
   */
    pageSource?: string
    /**
   * The time the user spends on this page in seconds.
   */
    viewSeconds?: number

  }
  'RenterCancellationModalReasonSelected [v1]': {

    /**
   * The unique ID associated with the booking request.
   */
    bookingId: number
    /**
   * Enum for the parent cancellation reason.
   */
    cancellationReason: string
    /**
   * The CTA that got the user to this screen.
   */
    cta?: string
    /**
   * The screen that the user came from.
   */
    pageSource?: string
    /**
   * The time the user spends on this page in seconds.
   */
    viewSeconds?: number

  }
  'RenterCancellationModalViewed': {

    /**
   * The unique ID associated with the booking request.
   */
    bookingId: number
    /**
   * The cancellation policy that is to be applied and is communicated to the user.
   */
    cancellationPolicy?: string
    /**
   * The CTA that got the user to this screen.
   */
    cta: string
    /**
   * The ISO 4217 currency code that is displayed.
   */
    currency: 'aud' | 'cad' | 'eur' | 'gbp' | 'nzd' | 'usd'
    /**
   * The datetime that the requested booking is to end.
   */
    endDate: string
    /**
   * The screen that the user came from.
   */
    pageSource: string
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId: string
    /**
   * The datetime that the requested booking is to begin.
   */
    startDate: string
    /**
   * The total that has been paid by the renter to-date.
   */
    totalPaid: number

  }
  'RenterCancellationModalViewed [v1]': {

    /**
   * The unique ID associated with the booking request.
   */
    bookingId: number
    /**
   * The cancellation policy that is to be applied and is communicated to the user.
   */
    cancellationPolicy?: string
    /**
   * The CTA that got the user to this screen.
   */
    cta: string
    /**
   * The ISO 4217 currency code that is displayed.
   */
    currency: 'aud' | 'cad' | 'eur' | 'gbp' | 'nzd' | 'usd'
    /**
   * The datetime that the requested booking is to end.
   */
    endDate: string
    /**
   * The screen that the user came from.
   */
    pageSource: string
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId: string
    /**
   * The datetime that the requested booking is to begin.
   */
    startDate: string
    /**
   * The total that has been paid by the renter to-date.
   */
    totalPaid: number

  }
  'RequestBookingBasicsSubmitted': {

    /**
   * The number of adults that the requested booking will have.
   */
    adults: number
    /**
   * The number of children that the requested booking will have.
   */
    children: number
    /**
   * The quoted price for cleaning.
   */
    cleaningPrice?: number
    /**
   * The ISO 4217 currency code displayed
   */
    currency: string
    /**
   * maximum distance in kilometers that the add-on is offering (ie. if I choose up to 100km option, this parameter shows 100km )
   */
    deliveryDistance?: number
    /**
   * The total price for delivery option selected
   */
    deliveryPrice?: number
    /**
   * The string that the Google Maps API returns as the name of the destination
   */
    destination?: string
    /**
   * The latitude of the destinationa as returned from the Google Maps API)
   */
    destinationLat?: number
    /**
   * The longitude of the destination a as returned from the Google Maps API)
   */
    destinationLon?: number
    /**
   * The destination types as returned from google maps API. (e.g. campground, rv_park, park, amusement_park, locality)
   */
    destinationTypes?: unknown[]
    /**
   * The extra price per KM that is charged above the freeDistanceKms.
   */
    distancePriceKms?: number | null
    /**
   * The date that the requested booking is to end.
   */
    endDate: string
    /**
   * The name of the festival or event that the guest has said they will be attending
   */
    festivalName?: string
    /**
   * If the listing has no FOMO tag then the result will be null. If the listing has tag, then the FOMO will be defined as described in the string
   */
    fomoTag?: string
    /**
   * The total number of free kilometers included for the RV. Natural rounding and conversion to KMs if quoted in miles.
   */
    freeDistanceKms?: number | null
    /**
   * The number of free generator hours for the entire rental (not daily).
   */
    freeGeneratorHours?: number | null
    /**
   * If the rental charges per hour for generator usage
   */
    generatorPriceHourly?: number | null
    /**
   * whether or not this booking request includes Delivery
   */
    hasDelivery: boolean
    /**
   * Whether the booking request has pets
   */
    hasPets: boolean
    /**
   * Whether the guest has experience towing a similar trailer (true = yes, false = no). If this question is not required on a booking request then this field should not be recorded as true or false
   */
    hasTowingExperience?: boolean
    /**
   * The quoted price for insurance.
   */
    insurancePrice: number | null
    /**
   * Whether the guest is attending a festival (true = yes, false = no). If this question is not required on a booking request then this field should not be recorded as true or false
   */
    isAttendingFestival?: boolean
    /**
   * whether or not the user is logged into an account when this event happens
   */
    isLoggedIn: boolean
    /**
   * whether or not this booking is planning on moving the RV after delivery or not. (based on the question asked on the first page of the booking flow)
   */
    isStationaryAfterDelivery?: boolean | null
    /**
   * The city that the listing is based in.
   */
    listingCity?: string
    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    listingCountry?: 'AU' | 'CA' | 'DE' | 'FR' | 'GB' | 'IT' | 'NZ' | 'US'
    /**
   * The region the listing is based in
   */
    listingRegion?: string
    /**
   * This is the nightly rate that is displayed next to the listing
   */
    nightlyRate: number
    /**
   * The previous page the user was on when they clicked to start the request to book flow (ex. Listing Page, Initial Inquiry, Inquiry Booking Details)
   */
    pageSource: string
    /**
   * The quoted rental price for total nights only that is displayed.
   */
    rentalPrice: number
    /**
   * The quoted price for roadside assistance.
   */
    roadsidePrice: number
    /**
   * The unique ID associated with an RV.
   */
    rvId: string
    /**
   * The quoted security deposit that will be taken on the security deposit date.
   */
    securityDepositPrice: number
    /**
   * The quoted service fee paid to RVezy.
   */
    servicePrice: number
    /**
   * This is the nightly rate that is displayed for the listing that has smart pricing
   */
    smartNightlyRate?: number | null
    /**
   * The date that the requested booking is to begin.
   */
    startDate: string
    /**
   * The total dollar value for the entire rental that is displayed.
   */
    totalPrice: number
    /**
   * The number of characters of the trip description entered in the introduce yourself text field
   */
    tripDescriptionChars?: number
    /**
   * Difference between start date and the current date. (how many days out does the trip start)
   */
    tripLeadTime: number
    /**
   * Difference between start date and end date. Effectively, the number of nights for a trip
   */
    tripLength: number

  }
  'RequestBookingBasicsSubmitted [v1]': {

    /**
   * The number of adults that the requested booking will have.
   */
    adults: number
    /**
   * The number of children that the requested booking will have.
   */
    children: number
    /**
   * The quoted price for cleaning.
   */
    cleaningPrice?: number
    /**
   * The ISO 4217 currency code displayed
   */
    currency: string
    /**
   * maximum distance in kilometers that the add-on is offering (ie. if I choose up to 100km option, this parameter shows 100km )
   */
    deliveryDistance?: number
    /**
   * The total price for delivery option selected
   */
    deliveryPrice?: number
    /**
   * The string that the Google Maps API returns as the name of the destination
   */
    destination?: string
    /**
   * The latitude of the destinationa as returned from the Google Maps API)
   */
    destinationLat?: number
    /**
   * The longitude of the destination a as returned from the Google Maps API)
   */
    destinationLon?: number
    /**
   * The destination types as returned from google maps API. (e.g. campground, rv_park, park, amusement_park, locality)
   */
    destinationTypes?: unknown[]
    /**
   * The extra price per KM that is charged above the freeDistanceKms.
   */
    distancePriceKms?: number
    /**
   * The date that the requested booking is to end.
   */
    endDate: string
    /**
   * The total number of free kilometers included for the RV. Natural rounding and conversion to KMs if quoted in miles.
   */
    freeDistanceKms: number
    /**
   * The number of free generator hours for the entire rental (not daily).
   */
    freeGeneratorHours?: number
    /**
   * If the rental charges per hour for generator usage
   */
    generatorPriceHourly?: number
    /**
   * whether or not this booking request includes Delivery
   */
    hasDelivery: boolean
    /**
   * The quoted price for insurance.
   */
    insurancePrice: number
    /**
   * whether or not the user is logged into an account when this event happens
   */
    isLoggedIn: boolean
    /**
   * whether or not this booking is planning on moving the RV after delivery or not. (based on the question asked on the first page of the booking flow)
   */
    isStationaryAfterDelivery?: string
    /**
   * The previous page the user was on when they clicked to start the request to book flow (ex. Listing Page, Initial Inquiry, Inquiry Booking Details)
   */
    pageSource: unknown[]
    /**
   * The quoted rental price for total nights only that is displayed.
   */
    rentalPrice: number
    /**
   * The quoted price for roadside assistance.
   */
    roadsidePrice: number
    /**
   * The unique ID associated with an RV.
   */
    rvId: string
    /**
   * The quoted security deposit that will be taken on the security deposit date.
   */
    securityDepositPrice: number
    /**
   * The quoted service fee paid to RVezy.
   */
    servicePrice: number
    /**
   * The date that the requested booking is to begin.
   */
    startDate: string
    /**
   * The total dollar value for the entire rental that is displayed.
   */
    totalPrice: number
    /**
   * The number of characters of the trip description entered in the introduce yourself text field
   */
    tripDescriptionChars?: number

  }
  'RequestBookingBasicsSubmitted [v2]': {

    /**
   * The number of adults that the requested booking will have.
   */
    adults: number
    /**
   * The number of children that the requested booking will have.
   */
    children: number
    /**
   * The quoted price for cleaning.
   */
    cleaningPrice?: number
    /**
   * The ISO 4217 currency code displayed
   */
    currency: string
    /**
   * maximum distance in kilometers that the add-on is offering (ie. if I choose up to 100km option, this parameter shows 100km )
   */
    deliveryDistance?: number
    /**
   * The total price for delivery option selected
   */
    deliveryPrice?: number
    /**
   * The string that the Google Maps API returns as the name of the destination
   */
    destination?: string
    /**
   * The latitude of the destinationa as returned from the Google Maps API)
   */
    destinationLat?: number
    /**
   * The longitude of the destination a as returned from the Google Maps API)
   */
    destinationLon?: number
    /**
   * The destination types as returned from google maps API. (e.g. campground, rv_park, park, amusement_park, locality)
   */
    destinationTypes?: unknown[]
    /**
   * The extra price per KM that is charged above the freeDistanceKms.
   */
    distancePriceKms?: number
    /**
   * The date that the requested booking is to end.
   */
    endDate: string
    /**
   * The name of the festival or event that the guest has said they will be attending
   */
    festivalName?: string
    /**
   * The total number of free kilometers included for the RV. Natural rounding and conversion to KMs if quoted in miles.
   */
    freeDistanceKms: number
    /**
   * The number of free generator hours for the entire rental (not daily).
   */
    freeGeneratorHours?: number
    /**
   * If the rental charges per hour for generator usage
   */
    generatorPriceHourly?: number
    /**
   * whether or not this booking request includes Delivery
   */
    hasDelivery: boolean
    /**
   * Whether the booking request has pets
   */
    hasPets: boolean
    /**
   * Whether the guest has experience towing a similar trailer (true = yes, false = no). If this question is not required on a booking request then this field should not be recorded as true or false
   */
    hasTowingExperience?: boolean
    /**
   * The quoted price for insurance.
   */
    insurancePrice: number
    /**
   * Whether the guest is attending a festival (true = yes, false = no). If this question is not required on a booking request then this field should not be recorded as true or false
   */
    isAttendingFestival?: boolean
    /**
   * whether or not the user is logged into an account when this event happens
   */
    isLoggedIn: boolean
    /**
   * whether or not this booking is planning on moving the RV after delivery or not. (based on the question asked on the first page of the booking flow)
   */
    isStationaryAfterDelivery?: boolean
    /**
   * The city that the listing is based in.
   */
    listingCity?: string
    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    listingCountry?: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * The region the listing is based in
   */
    listingRegion?: string
    /**
   * The previous page the user was on when they clicked to start the request to book flow (ex. Listing Page, Initial Inquiry, Inquiry Booking Details)
   */
    pageSource: unknown[]
    /**
   * The quoted rental price for total nights only that is displayed.
   */
    rentalPrice: number
    /**
   * The quoted price for roadside assistance.
   */
    roadsidePrice: number
    /**
   * The unique ID associated with an RV.
   */
    rvId: string
    /**
   * The quoted security deposit that will be taken on the security deposit date.
   */
    securityDepositPrice: number
    /**
   * The quoted service fee paid to RVezy.
   */
    servicePrice: number
    /**
   * The date that the requested booking is to begin.
   */
    startDate: string
    /**
   * The total dollar value for the entire rental that is displayed.
   */
    totalPrice: number
    /**
   * The number of characters of the trip description entered in the introduce yourself text field
   */
    tripDescriptionChars?: number
    /**
   * Difference between start date and the current date. (how many days out does the trip start)
   */
    tripLeadTime: number
    /**
   * Difference between start date and end date. Effectively, the number of nights for a trip
   */
    tripLength: number

  }
  'RequestBookingBasicsSubmitted [v3]': {

    /**
   * The number of adults that the requested booking will have.
   */
    adults: number
    /**
   * The number of children that the requested booking will have.
   */
    children: number
    /**
   * The quoted price for cleaning.
   */
    cleaningPrice?: number
    /**
   * The ISO 4217 currency code displayed
   */
    currency: string
    /**
   * maximum distance in kilometers that the add-on is offering (ie. if I choose up to 100km option, this parameter shows 100km )
   */
    deliveryDistance?: number
    /**
   * The total price for delivery option selected
   */
    deliveryPrice?: number
    /**
   * The string that the Google Maps API returns as the name of the destination
   */
    destination?: string
    /**
   * The latitude of the destinationa as returned from the Google Maps API)
   */
    destinationLat?: number
    /**
   * The longitude of the destination a as returned from the Google Maps API)
   */
    destinationLon?: number
    /**
   * The destination types as returned from google maps API. (e.g. campground, rv_park, park, amusement_park, locality)
   */
    destinationTypes?: unknown[]
    /**
   * The extra price per KM that is charged above the freeDistanceKms.
   */
    distancePriceKms?: number
    /**
   * The date that the requested booking is to end.
   */
    endDate: string
    /**
   * The name of the festival or event that the guest has said they will be attending
   */
    festivalName?: string
    /**
   * The total number of free kilometers included for the RV. Natural rounding and conversion to KMs if quoted in miles.
   */
    freeDistanceKms: number
    /**
   * The number of free generator hours for the entire rental (not daily).
   */
    freeGeneratorHours?: number
    /**
   * If the rental charges per hour for generator usage
   */
    generatorPriceHourly?: number
    /**
   * whether or not this booking request includes Delivery
   */
    hasDelivery: boolean
    /**
   * Whether the booking request has pets
   */
    hasPets: boolean
    /**
   * Whether the guest has experience towing a similar trailer (true = yes, false = no). If this question is not required on a booking request then this field should not be recorded as true or false
   */
    hasTowingExperience?: boolean
    /**
   * The quoted price for insurance.
   */
    insurancePrice: number
    /**
   * Whether the guest is attending a festival (true = yes, false = no). If this question is not required on a booking request then this field should not be recorded as true or false
   */
    isAttendingFestival?: boolean
    /**
   * whether or not the user is logged into an account when this event happens
   */
    isLoggedIn: boolean
    /**
   * whether or not this booking is planning on moving the RV after delivery or not. (based on the question asked on the first page of the booking flow)
   */
    isStationaryAfterDelivery?: boolean
    /**
   * The city that the listing is based in.
   */
    listingCity?: string
    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    listingCountry?: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * The region the listing is based in
   */
    listingRegion?: string
    /**
   * This is the nightly rate that is displayed next to the listing
   */
    nightlyRate: number
    /**
   * The previous page the user was on when they clicked to start the request to book flow (ex. Listing Page, Initial Inquiry, Inquiry Booking Details)
   */
    pageSource: unknown[]
    /**
   * The quoted rental price for total nights only that is displayed.
   */
    rentalPrice: number
    /**
   * The quoted price for roadside assistance.
   */
    roadsidePrice: number
    /**
   * The unique ID associated with an RV.
   */
    rvId: string
    /**
   * The quoted security deposit that will be taken on the security deposit date.
   */
    securityDepositPrice: number
    /**
   * The quoted service fee paid to RVezy.
   */
    servicePrice: number
    /**
   * This is the nightly rate that is displayed for the listing that has smart pricing
   */
    smartNightlyRate: number
    /**
   * The date that the requested booking is to begin.
   */
    startDate: string
    /**
   * The total dollar value for the entire rental that is displayed.
   */
    totalPrice: number
    /**
   * The number of characters of the trip description entered in the introduce yourself text field
   */
    tripDescriptionChars?: number
    /**
   * Difference between start date and the current date. (how many days out does the trip start)
   */
    tripLeadTime: number
    /**
   * Difference between start date and end date. Effectively, the number of nights for a trip
   */
    tripLength: number

  }
  'RequestBookingBasicsSubmitted [v4]': {

    /**
   * The number of adults that the requested booking will have.
   */
    adults: number
    /**
   * The number of children that the requested booking will have.
   */
    children: number
    /**
   * The quoted price for cleaning.
   */
    cleaningPrice?: number
    /**
   * The ISO 4217 currency code displayed
   */
    currency: string
    /**
   * maximum distance in kilometers that the add-on is offering (ie. if I choose up to 100km option, this parameter shows 100km )
   */
    deliveryDistance?: number
    /**
   * The total price for delivery option selected
   */
    deliveryPrice?: number
    /**
   * The string that the Google Maps API returns as the name of the destination
   */
    destination?: string
    /**
   * The latitude of the destinationa as returned from the Google Maps API)
   */
    destinationLat?: number
    /**
   * The longitude of the destination a as returned from the Google Maps API)
   */
    destinationLon?: number
    /**
   * The destination types as returned from google maps API. (e.g. campground, rv_park, park, amusement_park, locality)
   */
    destinationTypes?: unknown[]
    /**
   * The extra price per KM that is charged above the freeDistanceKms.
   */
    distancePriceKms?: number | null
    /**
   * The date that the requested booking is to end.
   */
    endDate: string
    /**
   * The name of the festival or event that the guest has said they will be attending
   */
    festivalName?: string
    /**
   * The total number of free kilometers included for the RV. Natural rounding and conversion to KMs if quoted in miles.
   */
    freeDistanceKms?: number | null
    /**
   * The number of free generator hours for the entire rental (not daily).
   */
    freeGeneratorHours?: number | null
    /**
   * If the rental charges per hour for generator usage
   */
    generatorPriceHourly?: number | null
    /**
   * whether or not this booking request includes Delivery
   */
    hasDelivery: boolean
    /**
   * Whether the booking request has pets
   */
    hasPets: boolean
    /**
   * Whether the guest has experience towing a similar trailer (true = yes, false = no). If this question is not required on a booking request then this field should not be recorded as true or false
   */
    hasTowingExperience?: boolean
    /**
   * The quoted price for insurance.
   */
    insurancePrice: number | null
    /**
   * Whether the guest is attending a festival (true = yes, false = no). If this question is not required on a booking request then this field should not be recorded as true or false
   */
    isAttendingFestival?: boolean
    /**
   * whether or not the user is logged into an account when this event happens
   */
    isLoggedIn: boolean
    /**
   * whether or not this booking is planning on moving the RV after delivery or not. (based on the question asked on the first page of the booking flow)
   */
    isStationaryAfterDelivery?: boolean | null
    /**
   * The city that the listing is based in.
   */
    listingCity?: string
    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    listingCountry?: 'AU' | 'CA' | 'DE' | 'FR' | 'GB' | 'IT' | 'NZ' | 'US'
    /**
   * The region the listing is based in
   */
    listingRegion?: string
    /**
   * This is the nightly rate that is displayed next to the listing
   */
    nightlyRate: number
    /**
   * The previous page the user was on when they clicked to start the request to book flow (ex. Listing Page, Initial Inquiry, Inquiry Booking Details)
   */
    pageSource: string
    /**
   * The quoted rental price for total nights only that is displayed.
   */
    rentalPrice: number
    /**
   * The quoted price for roadside assistance.
   */
    roadsidePrice: number
    /**
   * The unique ID associated with an RV.
   */
    rvId: string
    /**
   * The quoted security deposit that will be taken on the security deposit date.
   */
    securityDepositPrice: number
    /**
   * The quoted service fee paid to RVezy.
   */
    servicePrice: number
    /**
   * This is the nightly rate that is displayed for the listing that has smart pricing
   */
    smartNightlyRate?: number | null
    /**
   * The date that the requested booking is to begin.
   */
    startDate: string
    /**
   * The total dollar value for the entire rental that is displayed.
   */
    totalPrice: number
    /**
   * The number of characters of the trip description entered in the introduce yourself text field
   */
    tripDescriptionChars?: number
    /**
   * Difference between start date and the current date. (how many days out does the trip start)
   */
    tripLeadTime: number
    /**
   * Difference between start date and end date. Effectively, the number of nights for a trip
   */
    tripLength: number

  }
  'RequestBookingBasicsSubmitted [v5]': {

    /**
   * The number of adults that the requested booking will have.
   */
    adults: number
    /**
   * The number of children that the requested booking will have.
   */
    children: number
    /**
   * The quoted price for cleaning.
   */
    cleaningPrice?: number
    /**
   * The ISO 4217 currency code displayed
   */
    currency: string
    /**
   * maximum distance in kilometers that the add-on is offering (ie. if I choose up to 100km option, this parameter shows 100km )
   */
    deliveryDistance?: number
    /**
   * The total price for delivery option selected
   */
    deliveryPrice?: number
    /**
   * The string that the Google Maps API returns as the name of the destination
   */
    destination?: string
    /**
   * The latitude of the destinationa as returned from the Google Maps API)
   */
    destinationLat?: number
    /**
   * The longitude of the destination a as returned from the Google Maps API)
   */
    destinationLon?: number
    /**
   * The destination types as returned from google maps API. (e.g. campground, rv_park, park, amusement_park, locality)
   */
    destinationTypes?: unknown[]
    /**
   * The extra price per KM that is charged above the freeDistanceKms.
   */
    distancePriceKms?: number | null
    /**
   * The date that the requested booking is to end.
   */
    endDate: string
    /**
   * The name of the festival or event that the guest has said they will be attending
   */
    festivalName?: string
    /**
   * If the listing has no FOMO tag then the result will be null. If the listing has tag, then the FOMO will be defined as described in the string
   */
    fomoTag?: string
    /**
   * The total number of free kilometers included for the RV. Natural rounding and conversion to KMs if quoted in miles.
   */
    freeDistanceKms?: number | null
    /**
   * The number of free generator hours for the entire rental (not daily).
   */
    freeGeneratorHours?: number | null
    /**
   * If the rental charges per hour for generator usage
   */
    generatorPriceHourly?: number | null
    /**
   * whether or not this booking request includes Delivery
   */
    hasDelivery: boolean
    /**
   * Whether the booking request has pets
   */
    hasPets: boolean
    /**
   * Whether the guest has experience towing a similar trailer (true = yes, false = no). If this question is not required on a booking request then this field should not be recorded as true or false
   */
    hasTowingExperience?: boolean
    /**
   * The quoted price for insurance.
   */
    insurancePrice: number | null
    /**
   * Whether the guest is attending a festival (true = yes, false = no). If this question is not required on a booking request then this field should not be recorded as true or false
   */
    isAttendingFestival?: boolean
    /**
   * whether or not the user is logged into an account when this event happens
   */
    isLoggedIn: boolean
    /**
   * whether or not this booking is planning on moving the RV after delivery or not. (based on the question asked on the first page of the booking flow)
   */
    isStationaryAfterDelivery?: boolean | null
    /**
   * The city that the listing is based in.
   */
    listingCity?: string
    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    listingCountry?: 'AU' | 'CA' | 'DE' | 'FR' | 'GB' | 'IT' | 'NZ' | 'US'
    /**
   * The region the listing is based in
   */
    listingRegion?: string
    /**
   * This is the nightly rate that is displayed next to the listing
   */
    nightlyRate: number
    /**
   * The previous page the user was on when they clicked to start the request to book flow (ex. Listing Page, Initial Inquiry, Inquiry Booking Details)
   */
    pageSource: string
    /**
   * The quoted rental price for total nights only that is displayed.
   */
    rentalPrice: number
    /**
   * The quoted price for roadside assistance.
   */
    roadsidePrice: number
    /**
   * The unique ID associated with an RV.
   */
    rvId: string
    /**
   * The quoted security deposit that will be taken on the security deposit date.
   */
    securityDepositPrice: number
    /**
   * The quoted service fee paid to RVezy.
   */
    servicePrice: number
    /**
   * This is the nightly rate that is displayed for the listing that has smart pricing
   */
    smartNightlyRate?: number | null
    /**
   * The date that the requested booking is to begin.
   */
    startDate: string
    /**
   * The total dollar value for the entire rental that is displayed.
   */
    totalPrice: number
    /**
   * The number of characters of the trip description entered in the introduce yourself text field
   */
    tripDescriptionChars?: number
    /**
   * Difference between start date and the current date. (how many days out does the trip start)
   */
    tripLeadTime: number
    /**
   * Difference between start date and end date. Effectively, the number of nights for a trip
   */
    tripLength: number

  }
  'RequestBookingBasicsViewed': {

    /**
   * The number of adults that the requested booking will have.
   */
    adults: number
    /**
   * The number of children that the requested booking will have.
   */
    children: number
    /**
   * The quoted price for cleaning.
   */
    cleaningPrice?: number | null
    /**
   * The ISO 4217 currency code displayed
   */
    currency: string
    /**
   * The extra price per KM that is charged above the freeDistanceKms.
   */
    distancePriceKms?: number | null
    /**
   * The date that the requested booking is to end.
   */
    endDate: string
    /**
   * If the listing has no FOMO tag then the result will be null. If the listing has tag, then the FOMO will be defined as described in the string
   */
    fomoTag?: string
    /**
   * The total number of free kilometers included for the RV. Natural rounding and conversion to KMs if quoted in miles.
   */
    freeDistanceKms?: number | null
    /**
   * The number of free generator hours for the entire rental (not daily).
   */
    freeGeneratorHours?: number | null
    /**
   * If the rental charges per hour for generator usage, the price per hour.
   */
    generatorPriceHourly?: number | null
    /**
   * The quoted price for insurance.
   */
    insurancePrice: number
    /**
   * The city that the listing is based in.
   */
    listingCity?: string
    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    listingCountry?: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * The region the listing is based in
   */
    listingRegion?: string
    /**
   * Details pertaining to the listing in question.
   */
    listingType: 'motorhome' | 'rvcottage' | 'traveltrailer'
    /**
   * This is the nightly rate that is displayed next to the listing
   */
    nightlyRate: number
    /**
   * Time in seconds from when a page started to load to when it finished loading - new, to be added after Sep 26
   */
    pageLoadSpeed?: number | null
    /**
   * The previous page the user was on when they clicked to start the request to book flow (ex. Listing Page, Initial Inquiry, Inquiry Booking Details)
   */
    pageSource?: string
    /**
   * The quoted rental price for total nights only that is displayed.
   */
    rentalPrice: number
    /**
   * The quoted price for roadside assistance.
   */
    roadsidePrice: number
    /**
   * The unique ID associated with an RV.
   */
    rvId: string
    /**
   * Specific RV type of vehicle booked.
   */
    rvType: string
    /**
   * The quoted security deposit that will be taken on the security deposit date.
   */
    securityDepositPrice: number
    /**
   * The quoted service fee paid to RVezy.
   */
    servicePrice: number
    /**
   * This is the nightly rate that is displayed for the listing that has smart pricing
   */
    smartNightlyRate?: number | null
    /**
   * The date that the requested booking is to begin.
   */
    startDate: string
    /**
   * The total dollar value for the entire rental that is displayed.
   */
    totalPrice: number

  }
  'RequestBookingBasicsViewed [v1]': {

    /**
   * The number of adults that the requested booking will have.
   */
    adults: number
    /**
   * The number of children that the requested booking will have.
   */
    children: number
    /**
   * The quoted price for cleaning.
   */
    cleaningPrice: number
    /**
   * The ISO 4217 currency code displayed
   */
    currency: string
    /**
   * The extra price per KM that is charged above the freeDistanceKms.
   */
    distancePriceKms?: number
    /**
   * The date that the requested booking is to end.
   */
    endDate: string
    /**
   * The total number of free kilometers included for the RV. Natural rounding and conversion to KMs if quoted in miles.
   */
    freeDistanceKms: number
    /**
   * The number of free generator hours for the entire rental (not daily).
   */
    freeGeneratorHours?: number
    /**
   * If the rental charges per hour for generator usage, the price per hour.
   */
    generatorPriceHourly?: number
    /**
   * The quoted price for insurance.
   */
    insurancePrice: number
    /**
   * The quoted rental price for total nights only that is displayed.
   */
    rentalPrice: number
    /**
   * The quoted price for roadside assistance.
   */
    roadsidePrice: number
    /**
   * The unique ID associated with an RV.
   */
    rvId: string
    /**
   * The quoted security deposit that will be taken on the security deposit date.
   */
    securityDepositPrice: number
    /**
   * The quoted service fee paid to RVezy.
   */
    servicePrice: number
    /**
   * The date that the requested booking is to begin.
   */
    startDate: string
    /**
   * The total dollar value for the entire rental that is displayed.
   */
    totalPrice: number

  }
  'RequestBookingBasicsViewed [v2]': {

    /**
   * The number of adults that the requested booking will have.
   */
    adults: number
    /**
   * The number of children that the requested booking will have.
   */
    children: number
    /**
   * The quoted price for cleaning.
   */
    cleaningPrice: number
    /**
   * The ISO 4217 currency code displayed
   */
    currency: string
    /**
   * The extra price per KM that is charged above the freeDistanceKms.
   */
    distancePriceKms?: number
    /**
   * The date that the requested booking is to end.
   */
    endDate: string
    /**
   * The total number of free kilometers included for the RV. Natural rounding and conversion to KMs if quoted in miles.
   */
    freeDistanceKms: number
    /**
   * The number of free generator hours for the entire rental (not daily).
   */
    freeGeneratorHours?: number
    /**
   * If the rental charges per hour for generator usage, the price per hour.
   */
    generatorPriceHourly?: number
    /**
   * The quoted price for insurance.
   */
    insurancePrice: number
    /**
   * This is the nightly rate that is displayed next to the listing
   */
    nightlyRate: number
    /**
   * The quoted rental price for total nights only that is displayed.
   */
    rentalPrice: number
    /**
   * The quoted price for roadside assistance.
   */
    roadsidePrice: number
    /**
   * The unique ID associated with an RV.
   */
    rvId: string
    /**
   * The quoted security deposit that will be taken on the security deposit date.
   */
    securityDepositPrice: number
    /**
   * The quoted service fee paid to RVezy.
   */
    servicePrice: number
    /**
   * This is the nightly rate that is displayed for the listing that has smart pricing
   */
    smartNightlyRate: number
    /**
   * The date that the requested booking is to begin.
   */
    startDate: string
    /**
   * The total dollar value for the entire rental that is displayed.
   */
    totalPrice: number

  }
  'RequestBookingBasicsViewed [v3]': {

    /**
   * The number of adults that the requested booking will have.
   */
    adults: number
    /**
   * The number of children that the requested booking will have.
   */
    children: number
    /**
   * The quoted price for cleaning.
   */
    cleaningPrice?: number | null
    /**
   * The ISO 4217 currency code displayed
   */
    currency: string
    /**
   * The extra price per KM that is charged above the freeDistanceKms.
   */
    distancePriceKms?: number | null
    /**
   * The date that the requested booking is to end.
   */
    endDate: string
    /**
   * The total number of free kilometers included for the RV. Natural rounding and conversion to KMs if quoted in miles.
   */
    freeDistanceKms: number | null
    /**
   * The number of free generator hours for the entire rental (not daily).
   */
    freeGeneratorHours?: number | null
    /**
   * If the rental charges per hour for generator usage, the price per hour.
   */
    generatorPriceHourly?: number | null
    /**
   * The quoted price for insurance.
   */
    insurancePrice: number
    /**
   * This is the nightly rate that is displayed next to the listing
   */
    nightlyRate: number
    /**
   * Time in seconds from when a page started to load to when it finished loading - new, to be added after Sep 26
   */
    pageLoadSpeed?: number | null
    /**
   * The quoted rental price for total nights only that is displayed.
   */
    rentalPrice: number
    /**
   * The quoted price for roadside assistance.
   */
    roadsidePrice: number
    /**
   * The unique ID associated with an RV.
   */
    rvId: string
    /**
   * The quoted security deposit that will be taken on the security deposit date.
   */
    securityDepositPrice: number
    /**
   * The quoted service fee paid to RVezy.
   */
    servicePrice: number
    /**
   * This is the nightly rate that is displayed for the listing that has smart pricing
   */
    smartNightlyRate?: number | null
    /**
   * The date that the requested booking is to begin.
   */
    startDate: string
    /**
   * The total dollar value for the entire rental that is displayed.
   */
    totalPrice: number

  }
  'RequestBookingBasicsViewed [v4]': {

    /**
   * The number of adults that the requested booking will have.
   */
    adults: number
    /**
   * The number of children that the requested booking will have.
   */
    children: number
    /**
   * The quoted price for cleaning.
   */
    cleaningPrice?: number | null
    /**
   * The ISO 4217 currency code displayed
   */
    currency: string
    /**
   * The extra price per KM that is charged above the freeDistanceKms.
   */
    distancePriceKms?: number | null
    /**
   * The date that the requested booking is to end.
   */
    endDate: string
    /**
   * The total number of free kilometers included for the RV. Natural rounding and conversion to KMs if quoted in miles.
   */
    freeDistanceKms?: number | null
    /**
   * The number of free generator hours for the entire rental (not daily).
   */
    freeGeneratorHours?: number | null
    /**
   * If the rental charges per hour for generator usage, the price per hour.
   */
    generatorPriceHourly?: number | null
    /**
   * The quoted price for insurance.
   */
    insurancePrice: number
    /**
   * This is the nightly rate that is displayed next to the listing
   */
    nightlyRate: number
    /**
   * Time in seconds from when a page started to load to when it finished loading - new, to be added after Sep 26
   */
    pageLoadSpeed?: number | null
    /**
   * The previous page the user was on when they clicked to start the request to book flow (ex. Listing Page, Initial Inquiry, Inquiry Booking Details)
   */
    pageSource?: string
    /**
   * The quoted rental price for total nights only that is displayed.
   */
    rentalPrice: number
    /**
   * The quoted price for roadside assistance.
   */
    roadsidePrice: number
    /**
   * The unique ID associated with an RV.
   */
    rvId: string
    /**
   * The quoted security deposit that will be taken on the security deposit date.
   */
    securityDepositPrice: number
    /**
   * The quoted service fee paid to RVezy.
   */
    servicePrice: number
    /**
   * This is the nightly rate that is displayed for the listing that has smart pricing
   */
    smartNightlyRate?: number | null
    /**
   * The date that the requested booking is to begin.
   */
    startDate: string
    /**
   * The total dollar value for the entire rental that is displayed.
   */
    totalPrice: number

  }
  'RequestBookingBasicsViewed [v5]': {

    /**
   * The number of adults that the requested booking will have.
   */
    adults: number
    /**
   * The number of children that the requested booking will have.
   */
    children: number
    /**
   * The quoted price for cleaning.
   */
    cleaningPrice?: number | null
    /**
   * The ISO 4217 currency code displayed
   */
    currency: string
    /**
   * The extra price per KM that is charged above the freeDistanceKms.
   */
    distancePriceKms?: number | null
    /**
   * The date that the requested booking is to end.
   */
    endDate: string
    /**
   * If the listing has no FOMO tag then the result will be null. If the listing has tag, then the FOMO will be defined as described in the string
   */
    fomoTag?: string
    /**
   * The total number of free kilometers included for the RV. Natural rounding and conversion to KMs if quoted in miles.
   */
    freeDistanceKms?: number | null
    /**
   * The number of free generator hours for the entire rental (not daily).
   */
    freeGeneratorHours?: number | null
    /**
   * If the rental charges per hour for generator usage, the price per hour.
   */
    generatorPriceHourly?: number | null
    /**
   * The quoted price for insurance.
   */
    insurancePrice: number
    /**
   * This is the nightly rate that is displayed next to the listing
   */
    nightlyRate: number
    /**
   * Time in seconds from when a page started to load to when it finished loading - new, to be added after Sep 26
   */
    pageLoadSpeed?: number | null
    /**
   * The previous page the user was on when they clicked to start the request to book flow (ex. Listing Page, Initial Inquiry, Inquiry Booking Details)
   */
    pageSource?: string
    /**
   * The quoted rental price for total nights only that is displayed.
   */
    rentalPrice: number
    /**
   * The quoted price for roadside assistance.
   */
    roadsidePrice: number
    /**
   * The unique ID associated with an RV.
   */
    rvId: string
    /**
   * The quoted security deposit that will be taken on the security deposit date.
   */
    securityDepositPrice: number
    /**
   * The quoted service fee paid to RVezy.
   */
    servicePrice: number
    /**
   * This is the nightly rate that is displayed for the listing that has smart pricing
   */
    smartNightlyRate?: number | null
    /**
   * The date that the requested booking is to begin.
   */
    startDate: string
    /**
   * The total dollar value for the entire rental that is displayed.
   */
    totalPrice: number

  }
  'RequestBookingBasicsViewed [v6]': {

    /**
   * The number of adults that the requested booking will have.
   */
    adults: number
    /**
   * The number of children that the requested booking will have.
   */
    children: number
    /**
   * The quoted price for cleaning.
   */
    cleaningPrice?: number | null
    /**
   * The ISO 4217 currency code displayed
   */
    currency: string
    /**
   * The extra price per KM that is charged above the freeDistanceKms.
   */
    distancePriceKms?: number | null
    /**
   * The date that the requested booking is to end.
   */
    endDate: string
    /**
   * If the listing has no FOMO tag then the result will be null. If the listing has tag, then the FOMO will be defined as described in the string
   */
    fomoTag?: string
    /**
   * The total number of free kilometers included for the RV. Natural rounding and conversion to KMs if quoted in miles.
   */
    freeDistanceKms?: number | null
    /**
   * The number of free generator hours for the entire rental (not daily).
   */
    freeGeneratorHours?: number | null
    /**
   * If the rental charges per hour for generator usage, the price per hour.
   */
    generatorPriceHourly?: number | null
    /**
   * The quoted price for insurance.
   */
    insurancePrice: number
    /**
   * The city that the listing is based in.
   */
    listingCity?: string
    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    listingCountry?: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * The region the listing is based in
   */
    listingRegion?: string
    /**
   * Details pertaining to the listing in question.
   */
    listingType: 'motorhome' | 'rvcottage' | 'traveltrailer'
    /**
   * This is the nightly rate that is displayed next to the listing
   */
    nightlyRate: number
    /**
   * Time in seconds from when a page started to load to when it finished loading - new, to be added after Sep 26
   */
    pageLoadSpeed?: number | null
    /**
   * The previous page the user was on when they clicked to start the request to book flow (ex. Listing Page, Initial Inquiry, Inquiry Booking Details)
   */
    pageSource?: string
    /**
   * The quoted rental price for total nights only that is displayed.
   */
    rentalPrice: number
    /**
   * The quoted price for roadside assistance.
   */
    roadsidePrice: number
    /**
   * The unique ID associated with an RV.
   */
    rvId: string
    /**
   * Specific RV type of vehicle booked.
   */
    rvType: string
    /**
   * The quoted security deposit that will be taken on the security deposit date.
   */
    securityDepositPrice: number
    /**
   * The quoted service fee paid to RVezy.
   */
    servicePrice: number
    /**
   * This is the nightly rate that is displayed for the listing that has smart pricing
   */
    smartNightlyRate?: number | null
    /**
   * The date that the requested booking is to begin.
   */
    startDate: string
    /**
   * The total dollar value for the entire rental that is displayed.
   */
    totalPrice: number

  }
  'RequestBookingEnhanceViewed': {

    /**
   * The addons that are available for the RV, passed in as a set of key value pairs.
   */
    addons?: {
    /**
     * The name of the addon being displayed.
     */
      name?: string
      /**
     * The price for each pricePer.
     */
      price?: number
      /**
     * How the pricing is calculated.
     */
      pricePer?: 'km' | 'litre' | 'night' | 'trip' | 'unit'
    }[]
    /**
   * The number of adults that the requested booking will have.
   */
    adults: number
    /**
   * The method through which the booking was created.
   */
    bookingType: 'enquiry' | 'ezmatch' | 'instant' | 'normal'
    /**
   * The number of children that the requested booking will have.
   */
    children: number
    /**
   * The quoted price for cleaning.
   */
    cleaningPrice?: number
    /**
   * The ISO 4217 currency code that is displayed.
   */
    currency: 'CAD' | 'USD' | 'aud' | 'cad' | 'eur' | 'gbp' | 'nzd' | 'usd'
    /**
   * The extra price per KM that is charged above the freeDistanceKms.
   */
    distancePriceKms?: number
    /**
   * The datetime that the requested booking is to end.
   */
    endDate: string
    /**
   * If the listing has no FOMO tag then the result will be null. If the listing has tag, then the FOMO will be defined as described in the string
   */
    fomoTag?: string
    /**
   * The total number of free kilometers included for the RV. Natural rounding and conversion to KMs if quoted in miles.
   */
    freeDistanceKms?: number | null
    /**
   * The number of free generator hours for the entire rental (not daily).
   */
    freeGeneratorHours?: number | null
    /**
   * If the rental charges per hour for generator usage, the price per hour.
   */
    generatorPriceHourly?: number
    /**
   * Whether or not the booking has roadside on it.
   */
    hasRoadside: boolean
    /**
   * The quoted price for insurance.
   */
    insurancePrice: number | null
    /**
   * The insurance level selected selection when arriving at the page.
   */
    insuranceType?: 'basic' | null | 'premium' | 'standard' | 'stationary'
    /**
   * The city that the listing is based in.
   */
    listingCity?: string
    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    listingCountry?: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * The region the listing is based in
   */
    listingRegion?: string
    /**
   * Details pertaining to the listing in question.
   */
    listingType: 'motorhome' | 'rvcottage' | 'traveltrailer'
    /**
   * This is the nightly rate that is displayed next to the listing
   */
    nightlyRate: number
    /**
   * Time in seconds from when a page started to load to when it finished loading
   */
    pageLoadSpeed?: number
    /**
   * The quoted rental price for total nights only that is displayed.
   */
    rentalPrice: number
    /**
   * The quoted price for roadside assistance.
   */
    roadsidePrice: number | null
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId: string
    /**
   * Specific RV type of vehicle booked.
   */
    rvType: string
    /**
   * The quoted security deposit that will be taken on the security deposit date.
   */
    securityDepositPrice: number
    /**
   * The quoted service fee paid to RVezy by the renter.
   */
    servicePrice: number
    /**
   * This is the nightly rate that is displayed for the listing that has smart pricing
   */
    smartNightlyRate?: number | null
    /**
   * The datetime that the requested booking is to begin.
   */
    startDate: string
    /**
   * The total dollar value for the entire booking that is displayed.
   */
    totalPrice: number
    /**
   * Difference between start date and end date. Effectively, the number of nights for a trip
   */
    tripLength: number

  }
  'RequestBookingEnhanceViewed [v1]': {

    /**
   * The addons that are available for the RV, passed in as a set of key value pairs.
   */
    addons?: {
    /**
     * The name of the addon being displayed.
     */
      name?: string
      /**
     * The price for each pricePer.
     */
      price?: {}
      /**
     * How the pricing is calculated.
     */
      pricePer?: 'km' | 'litre' | 'night' | 'trip' | 'unit'
    }[]
    /**
   * The number of adults that the requested booking will have.
   */
    adults: number
    /**
   * The number of children that the requested booking will have.
   */
    children: number
    /**
   * The quoted price for cleaning.
   */
    cleaningPrice?: number
    /**
   * The ISO 4217 currency code that is displayed.
   */
    currency: 'CAD' | 'USD' | 'aud' | 'cad' | 'eur' | 'gbp' | 'nzd' | 'usd'
    /**
   * The extra price per KM that is charged above the freeDistanceKms.
   */
    distancePriceKms?: number
    /**
   * The datetime that the requested booking is to end.
   */
    endDate: string
    /**
   * The total number of free kilometers included for the RV. Natural rounding and conversion to KMs if quoted in miles.
   */
    freeDistanceKms?: number
    /**
   * The number of free generator hours for the entire rental (not daily).
   */
    freeGeneratorHours?: number
    /**
   * If the rental charges per hour for generator usage, the price per hour.
   */
    generatorPriceHourly?: number
    /**
   * Whether or not the booking has roadside on it.
   */
    hasRoadside: boolean
    /**
   * The quoted price for insurance.
   */
    insurancePrice?: number
    /**
   * The insurance level selected selection when arriving at the page.
   */
    insuranceType: 'basic' | null | 'premium' | 'standard' | 'stationary'
    /**
   * Time in seconds from when a page started to load to when it finished loading
   */
    pageLoadSpeed?: number
    /**
   * The quoted rental price for total nights only that is displayed.
   */
    rentalPrice: number
    /**
   * The quoted price for roadside assistance.
   */
    roadsidePrice: number | null
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId: string
    /**
   * The quoted security deposit that will be taken on the security deposit date.
   */
    securityDepositPrice: number
    /**
   * The quoted service fee paid to RVezy by the renter.
   */
    servicePrice: number
    /**
   * The datetime that the requested booking is to begin.
   */
    startDate: string
    /**
   * The total dollar value for the entire booking that is displayed.
   */
    totalPrice: number
    /**
   * Difference between start date and end date. Effectively, the number of nights for a trip
   */
    tripLength: number

  }
  'RequestBookingEnhanceViewed [v2]': {

    /**
   * The addons that are available for the RV, passed in as a set of key value pairs.
   */
    addons?: {
    /**
     * The name of the addon being displayed.
     */
      name?: string
      /**
     * The price for each pricePer.
     */
      price?: {}
      /**
     * How the pricing is calculated.
     */
      pricePer?: 'km' | 'litre' | 'night' | 'trip' | 'unit'
    }[]
    /**
   * The number of adults that the requested booking will have.
   */
    adults: number
    /**
   * The number of children that the requested booking will have.
   */
    children: number
    /**
   * The quoted price for cleaning.
   */
    cleaningPrice?: number
    /**
   * The ISO 4217 currency code that is displayed.
   */
    currency: 'CAD' | 'USD' | 'aud' | 'cad' | 'eur' | 'gbp' | 'nzd' | 'usd'
    /**
   * The extra price per KM that is charged above the freeDistanceKms.
   */
    distancePriceKms?: number
    /**
   * The datetime that the requested booking is to end.
   */
    endDate: string
    /**
   * The total number of free kilometers included for the RV. Natural rounding and conversion to KMs if quoted in miles.
   */
    freeDistanceKms?: number
    /**
   * The number of free generator hours for the entire rental (not daily).
   */
    freeGeneratorHours?: number
    /**
   * If the rental charges per hour for generator usage, the price per hour.
   */
    generatorPriceHourly?: number
    /**
   * Whether or not the booking has roadside on it.
   */
    hasRoadside: boolean
    /**
   * The quoted price for insurance.
   */
    insurancePrice?: number
    /**
   * The insurance level selected selection when arriving at the page.
   */
    insuranceType: 'basic' | null | 'premium' | 'standard' | 'stationary'
    /**
   * This is the nightly rate that is displayed next to the listing
   */
    nightlyRate: number
    /**
   * Time in seconds from when a page started to load to when it finished loading
   */
    pageLoadSpeed?: number
    /**
   * The quoted rental price for total nights only that is displayed.
   */
    rentalPrice: number
    /**
   * The quoted price for roadside assistance.
   */
    roadsidePrice: number | null
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId: string
    /**
   * The quoted security deposit that will be taken on the security deposit date.
   */
    securityDepositPrice: number
    /**
   * The quoted service fee paid to RVezy by the renter.
   */
    servicePrice: number
    /**
   * This is the nightly rate that is displayed for the listing that has smart pricing
   */
    smartNightlyRate: number
    /**
   * The datetime that the requested booking is to begin.
   */
    startDate: string
    /**
   * The total dollar value for the entire booking that is displayed.
   */
    totalPrice: number
    /**
   * Difference between start date and end date. Effectively, the number of nights for a trip
   */
    tripLength: number

  }
  'RequestBookingEnhanceViewed [v3]': {

    /**
   * The addons that are available for the RV, passed in as a set of key value pairs.
   */
    addons?: {
    /**
     * The name of the addon being displayed.
     */
      name?: string
      /**
     * The price for each pricePer.
     */
      price?: number
      /**
     * How the pricing is calculated.
     */
      pricePer?: 'km' | 'litre' | 'night' | 'trip' | 'unit'
    }[]
    /**
   * The number of adults that the requested booking will have.
   */
    adults: number
    /**
   * The method through which the booking was created.
   */
    bookingType: 'enquiry' | 'ezmatch' | 'instant' | 'normal'
    /**
   * The number of children that the requested booking will have.
   */
    children: number
    /**
   * The quoted price for cleaning.
   */
    cleaningPrice?: number
    /**
   * The ISO 4217 currency code that is displayed.
   */
    currency: 'CAD' | 'USD' | 'aud' | 'cad' | 'eur' | 'gbp' | 'nzd' | 'usd'
    /**
   * The extra price per KM that is charged above the freeDistanceKms.
   */
    distancePriceKms?: number
    /**
   * The datetime that the requested booking is to end.
   */
    endDate: string
    /**
   * The total number of free kilometers included for the RV. Natural rounding and conversion to KMs if quoted in miles.
   */
    freeDistanceKms?: number | null
    /**
   * The number of free generator hours for the entire rental (not daily).
   */
    freeGeneratorHours?: number | null
    /**
   * If the rental charges per hour for generator usage, the price per hour.
   */
    generatorPriceHourly?: number
    /**
   * Whether or not the booking has roadside on it.
   */
    hasRoadside: boolean
    /**
   * The quoted price for insurance.
   */
    insurancePrice: number | null
    /**
   * The insurance level selected selection when arriving at the page.
   */
    insuranceType: 'basic' | null | 'premium' | 'standard' | 'stationary'
    /**
   * This is the nightly rate that is displayed next to the listing
   */
    nightlyRate: number
    /**
   * Time in seconds from when a page started to load to when it finished loading
   */
    pageLoadSpeed?: number
    /**
   * The quoted rental price for total nights only that is displayed.
   */
    rentalPrice: number
    /**
   * The quoted price for roadside assistance.
   */
    roadsidePrice: number | null
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId: string
    /**
   * The quoted security deposit that will be taken on the security deposit date.
   */
    securityDepositPrice: number
    /**
   * The quoted service fee paid to RVezy by the renter.
   */
    servicePrice: number
    /**
   * This is the nightly rate that is displayed for the listing that has smart pricing
   */
    smartNightlyRate?: number | null
    /**
   * The datetime that the requested booking is to begin.
   */
    startDate: string
    /**
   * The total dollar value for the entire booking that is displayed.
   */
    totalPrice: number
    /**
   * Difference between start date and end date. Effectively, the number of nights for a trip
   */
    tripLength: number

  }
  'RequestBookingEnhanceViewed [v4]': {

    /**
   * The addons that are available for the RV, passed in as a set of key value pairs.
   */
    addons?: {
    /**
     * The name of the addon being displayed.
     */
      name?: string
      /**
     * The price for each pricePer.
     */
      price?: number
      /**
     * How the pricing is calculated.
     */
      pricePer?: 'km' | 'litre' | 'night' | 'trip' | 'unit'
    }[]
    /**
   * The number of adults that the requested booking will have.
   */
    adults: number
    /**
   * The method through which the booking was created.
   */
    bookingType: 'enquiry' | 'ezmatch' | 'instant' | 'normal'
    /**
   * The number of children that the requested booking will have.
   */
    children: number
    /**
   * The quoted price for cleaning.
   */
    cleaningPrice?: number
    /**
   * The ISO 4217 currency code that is displayed.
   */
    currency: 'CAD' | 'USD' | 'aud' | 'cad' | 'eur' | 'gbp' | 'nzd' | 'usd'
    /**
   * The extra price per KM that is charged above the freeDistanceKms.
   */
    distancePriceKms?: number
    /**
   * The datetime that the requested booking is to end.
   */
    endDate: string
    /**
   * If the listing has no FOMO tag then the result will be null. If the listing has tag, then the FOMO will be defined as described in the string
   */
    fomoTag?: string
    /**
   * The total number of free kilometers included for the RV. Natural rounding and conversion to KMs if quoted in miles.
   */
    freeDistanceKms?: number | null
    /**
   * The number of free generator hours for the entire rental (not daily).
   */
    freeGeneratorHours?: number | null
    /**
   * If the rental charges per hour for generator usage, the price per hour.
   */
    generatorPriceHourly?: number
    /**
   * Whether or not the booking has roadside on it.
   */
    hasRoadside: boolean
    /**
   * The quoted price for insurance.
   */
    insurancePrice: number | null
    /**
   * The insurance level selected selection when arriving at the page.
   */
    insuranceType?: 'basic' | null | 'premium' | 'standard' | 'stationary'
    /**
   * The city that the listing is based in.
   */
    listingCity?: string
    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    listingCountry?: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * The region the listing is based in
   */
    listingRegion?: string
    /**
   * Details pertaining to the listing in question.
   */
    listingType: 'motorhome' | 'rvcottage' | 'traveltrailer'
    /**
   * This is the nightly rate that is displayed next to the listing
   */
    nightlyRate: number
    /**
   * Time in seconds from when a page started to load to when it finished loading
   */
    pageLoadSpeed?: number
    /**
   * The quoted rental price for total nights only that is displayed.
   */
    rentalPrice: number
    /**
   * The quoted price for roadside assistance.
   */
    roadsidePrice: number | null
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId: string
    /**
   * Specific RV type of vehicle booked.
   */
    rvType: string
    /**
   * The quoted security deposit that will be taken on the security deposit date.
   */
    securityDepositPrice: number
    /**
   * The quoted service fee paid to RVezy by the renter.
   */
    servicePrice: number
    /**
   * This is the nightly rate that is displayed for the listing that has smart pricing
   */
    smartNightlyRate?: number | null
    /**
   * The datetime that the requested booking is to begin.
   */
    startDate: string
    /**
   * The total dollar value for the entire booking that is displayed.
   */
    totalPrice: number
    /**
   * Difference between start date and end date. Effectively, the number of nights for a trip
   */
    tripLength: number

  }
  'RequestBookingSent': {

    /**
   * The total price for all selected addons.
   */
    addonPrice?: number
    /**
   * The addons that are available for the RV, passed in as a set of key value pairs.
   */
    addons?: {
    /**
     * The name of the addon being displayed.
     */
      name?: string
      /**
     * The price for each pricePer.
     */
      price?: number
      /**
     * How the pricing is calculated.
     */
      pricePer?: 'km' | 'litre' | 'night' | 'trip' | 'unit'
    }[]
    /**
   * The number of adults that the requested booking will have.
   */
    adults: number
    /**
   * The unique ID associated with the booking request.
   */
    bookingId: number
    /**
   * The state of the booking as is represented on the backend.
   */
    bookingState: number
    /**
   * The method through which the booking was created.
   */
    bookingType: 'enquiry' | 'ezmatch' | 'instant' | 'normal'
    /**
   * The number of children that the requested booking will have.
   */
    children: number
    /**
   * The quoted price for cleaning.
   */
    cleaningPrice?: number
    /**
   * The ISO 4217 currency code that is displayed.
   */
    currency: 'AUD' | 'CAD' | 'EUR' | 'GBP' | 'NZD' | 'USD'
    /**
   * maximum distance in kilometers that the add-on is offering (ie. if I choose up to 100km option, this parameter shows 100km )
   */
    deliveryDistance?: number
    /**
   * The total price for delivery option selected
   */
    deliveryPrice?: number
    /**
   * The string that the Google Maps API returns as the name of the destination
   */
    destination?: string
    /**
   * The latitude of the destinationa as returned from the Google Maps API)
   */
    destinationLat?: number
    /**
   * The longitude of the destinationa as returned from the Google Maps API)
   */
    destinationLon?: number
    /**
   * The destination types as returned from google maps API. (e.g. campground, rv_park, park, amusement_park, locality)
   */
    destinationTypes?: unknown[]
    /**
   * The extra price per KM that is charged above the freeDistanceKms.
   */
    distancePriceKms?: number
    /**
   * The datetime that the requested booking is to end.
   */
    endDate: string
    /**
   * The name of the festival or event that the guest has said they will be attending
   */
    festivalName?: string
    /**
   * If the listing has no FOMO tag then the result will be null. If the listing has tag, then the FOMO will be defined as described in the string
   */
    fomoTag?: string
    /**
   * The total number of free kilometers included for the RV. Natural rounding and conversion to KMs if quoted in miles.
   */
    freeDistanceKms: number | null
    /**
   * The number of free generator hours for the entire rental (not daily).
   */
    freeGeneratorHours?: number
    /**
   * If the rental charges per hour for generator usage, the price per hour.
   */
    generatorPriceHourly?: number
    /**
   * whether or not this booking request includes Delivery
   */
    hasDelivery: boolean
    /**
   * Whether the booking request has pets
   */
    hasPets: boolean
    /**
   * Whether the guest has experience towing a similar trailer (true = yes, false = no). If this question is not required on a booking request then this field should not be recorded as true or false
   */
    hasTowingExperience?: boolean
    /**
   * The quoted price for insurance.
   */
    insurancePrice: number
    /**
   * Whether or not the RV listing is activated (ie. has ever received a payment for a booking)
   */
    isActivated?: boolean
    /**
   * Whether the guest is attending a festival (true = yes, false = no). If this question is not required on a booking request then this field should not be recorded as true or false
   */
    isAttendingFestival?: boolean
    /**
   * Whether the booking originated from an Ezymatch offer
   */
    isEzymatch: boolean
    /**
   * whether or not this it the first event of this type for this RV
   */
    isFirst?: boolean
    /**
   * Whether or not the RV clicked was available because of the ShortStays feature.
   */
    isShortStay: boolean
    /**
   * whether or not this booking is planning on moving the RV after delivery or not. (based on the question asked on the first page of the booking flow)
   */
    isStationaryAfterDelivery?: boolean
    /**
   * Whether or not the RV clicked has the Superhost badge on the card
   */
    isSuperhost: boolean
    /**
   * The city that the listing is based in.
   */
    listingCity?: string
    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    listingCountry?: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * The region the listing is based in
   */
    listingRegion?: string
    /**
   * Details pertaining to the listing in question.
   */
    listingType: 'motorhome' | 'rvcottage' | 'traveltrailer'
    /**
   * The message attached to the booking. Applies to all booking types.
   */
    message?: string
    /**
   * This is the nightly rate that is displayed next to the listing
   */
    nightlyRate: number
    /**
   * The number of drivers that have been added to the booking.
   */
    numDrivers: number
    /**
   * The account that is receiving the user-to-user interaction.
   */
    receiverUserId: number
    /**
   * The quoted rental price for total nights only that is displayed.
   */
    rentalPrice: number
    /**
   * The quoted price for roadside assistance.
   */
    roadsidePrice: number
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId: string
    /**
   * Specific RV type of vehicle booked.
   */
    rvType: string
    /**
   * The quoted security deposit that will be taken on the security deposit date.
   */
    securityDepositPrice: number
    /**
   * The quoted service fee paid to RVezy by the renter.
   */
    servicePrice: number
    /**
   * This is the nightly rate that is displayed for the listing that has smart pricing
   */
    smartNightlyRate?: number | null
    /**
   * The datetime that the requested booking is to begin.
   */
    startDate: string
    /**
   * The total dollar value of the host payout for the entire rental.
   */
    totalPayout: number
    /**
   * The total dollar value for the entire booking that is displayed.
   */
    totalPrice: number
    /**
   * Difference between start date and the current date. (how many days out does the trip start)
   */
    tripLeadTime: number
    /**
   * Difference between start date and end date. Effectively, the number of nights for a trip
   */
    tripLength: number
    /**
   * The user ID of the the user. (the renter)
   */
    userId: number

  }
  'RequestBookingSent [v1]': {

    /**
   * The total price for all selected addons.
   */
    addonPrice?: number
    /**
   * The addons that are available for the RV, passed in as a set of key value pairs.
   */
    addons?: {
    /**
     * The name of the addon being displayed.
     */
      name?: string
      /**
     * The price for each pricePer.
     */
      price?: {}
      /**
     * How the pricing is calculated.
     */
      pricePer?: 'km' | 'litre' | 'night' | 'trip' | 'unit'
    }[]
    /**
   * The number of adults that the requested booking will have.
   */
    adults: number
    /**
   * The unique ID associated with the booking request.
   */
    bookingId: number
    /**
   * The state of the booking as is represented on the backend.
   */
    bookingState: number
    /**
   * The method through which the booking was created.
   */
    bookingType?: 'enquiry' | 'ezmatch' | 'instant' | 'normal'
    /**
   * The number of children that the requested booking will have.
   */
    children: number
    /**
   * The quoted price for cleaning.
   */
    cleaningPrice?: number
    /**
   * The call to action that led to this booking request, as passed by the front end.
   */
    cta: string
    /**
   * The ISO 4217 currency code that is displayed.
   */
    currency: 'aud' | 'cad' | 'eur' | 'gbp' | 'nzd' | 'usd'
    /**
   * maximum distance in kilometers that the add-on is offering (ie. if I choose up to 100km option, this parameter shows 100km )
   */
    deliveryDistance?: number
    /**
   * The total price for delivery option selected
   */
    deliveryPrice?: number
    /**
   * The string that the Google Maps API returns as the name of the destination
   */
    destination?: string
    /**
   * The latitude of the destinationa as returned from the Google Maps API)
   */
    destinationLat?: number
    /**
   * The longitude of the destinationa as returned from the Google Maps API)
   */
    destinationLon?: number
    /**
   * The destination types as returned from google maps API. (e.g. campground, rv_park, park, amusement_park, locality)
   */
    destinationTypes?: unknown[]
    /**
   * The extra price per KM that is charged above the freeDistanceKms.
   */
    distancePriceKms?: number
    /**
   * The datetime that the requested booking is to end.
   */
    endDate: string
    /**
   * The name of the festival or event that the guest has said they will be attending
   */
    festivalName?: string
    /**
   * The total number of free kilometers included for the RV. Natural rounding and conversion to KMs if quoted in miles.
   */
    freeDistanceKms: number
    /**
   * The number of free generator hours for the entire rental (not daily).
   */
    freeGeneratorHours?: number
    /**
   * If the rental charges per hour for generator usage, the price per hour.
   */
    generatorPriceHourly?: number
    /**
   * whether or not this booking request includes Delivery
   */
    hasDelivery: boolean
    /**
   * Whether the booking request has pets
   */
    hasPets: boolean
    /**
   * Whether the guest has experience towing a similar trailer (true = yes, false = no). If this question is not required on a booking request then this field should not be recorded as true or false
   */
    hasTowingExperience?: boolean
    /**
   * The quoted price for insurance.
   */
    insurancePrice: number
    /**
   * Whether or not the RV listing is activated (ie. has ever received a payment for a booking)
   */
    isActivated?: boolean
    /**
   * Whether the guest is attending a festival (true = yes, false = no). If this question is not required on a booking request then this field should not be recorded as true or false
   */
    isAttendingFestival?: boolean
    /**
   * Whether the booking originated from an Ezymatch offer
   */
    isEzymatch: boolean
    /**
   * whether or not this it the first event of this type for this RV
   */
    isFirst?: boolean
    /**
   * whether or not this booking is planning on moving the RV after delivery or not. (based on the question asked on the first page of the booking flow)
   */
    isStationaryDelivery?: boolean
    /**
   * The city that the listing is based in.
   */
    listingCity?: string
    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    listingCountry?: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * The region the listing is based in
   */
    listingRegion?: string
    /**
   * Details pertaining to the listing in question.
   */
    listingType: 'motorhome' | 'rvcottage' | 'traveltrailer'
    /**
   * The message attached to the booking. Applies to all booking types.
   */
    message?: string
    /**
   * The number of drivers that have been added to the booking.
   */
    numDrivers: number
    /**
   * The pageSource that led to this booking request, as passed by the front end.
   */
    pageSource: string
    /**
   * The account that is receiving the user-to-user interaction.
   */
    receiverUserId: number
    /**
   * The quoted rental price for total nights only that is displayed.
   */
    rentalPrice: number
    /**
   * The quoted price for roadside assistance.
   */
    roadsidePrice: number | null
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId: string
    /**
   * Specific RV type of vehicle booked.
   */
    rvType: string
    /**
   * The quoted security deposit that will be taken on the security deposit date.
   */
    securityDepositPrice: number
    /**
   * The quoted service fee paid to RVezy by the renter.
   */
    servicePrice: number
    /**
   * The datetime that the requested booking is to begin.
   */
    startDate: string
    /**
   * The total dollar value of the host payout for the entire rental.
   */
    totalPayout: number
    /**
   * The total dollar value for the entire booking that is displayed.
   */
    totalPrice: number
    /**
   * Difference between start date and the current date. (how many days out does the trip start)
   */
    tripLeadTime: number
    /**
   * Difference between start date and end date. Effectively, the number of nights for a trip
   */
    tripLength: number
    /**
   * The user ID of the the user. (the renter)
   */
    userId: string

  }
  'RequestBookingSent [v3]': {

    /**
   * The total price for all selected addons.
   */
    addonPrice?: number
    /**
   * The addons that are available for the RV, passed in as a set of key value pairs.
   */
    addons?: {
    /**
     * The name of the addon being displayed.
     */
      name?: string
      /**
     * The price for each pricePer.
     */
      price?: {}
      /**
     * How the pricing is calculated.
     */
      pricePer?: 'km' | 'litre' | 'night' | 'trip' | 'unit'
    }[]
    /**
   * The number of adults that the requested booking will have.
   */
    adults: number
    /**
   * The unique ID associated with the booking request.
   */
    bookingId: number
    /**
   * The state of the booking as is represented on the backend.
   */
    bookingState: number
    /**
   * The method through which the booking was created.
   */
    bookingType?: 'enquiry' | 'ezmatch' | 'instant' | 'normal'
    /**
   * The number of children that the requested booking will have.
   */
    children: number
    /**
   * The quoted price for cleaning.
   */
    cleaningPrice?: number
    /**
   * The ISO 4217 currency code that is displayed.
   */
    currency: 'AUD' | 'CAD' | 'EUR' | 'GBP' | 'NZD' | 'USD'
    /**
   * maximum distance in kilometers that the add-on is offering (ie. if I choose up to 100km option, this parameter shows 100km )
   */
    deliveryDistance?: number
    /**
   * The total price for delivery option selected
   */
    deliveryPrice?: number
    /**
   * The string that the Google Maps API returns as the name of the destination
   */
    destination?: string
    /**
   * The latitude of the destinationa as returned from the Google Maps API)
   */
    destinationLat?: number
    /**
   * The longitude of the destinationa as returned from the Google Maps API)
   */
    destinationLon?: number
    /**
   * The destination types as returned from google maps API. (e.g. campground, rv_park, park, amusement_park, locality)
   */
    destinationTypes?: unknown[]
    /**
   * The extra price per KM that is charged above the freeDistanceKms.
   */
    distancePriceKms?: number
    /**
   * The datetime that the requested booking is to end.
   */
    endDate: string
    /**
   * The name of the festival or event that the guest has said they will be attending
   */
    festivalName?: string
    /**
   * The total number of free kilometers included for the RV. Natural rounding and conversion to KMs if quoted in miles.
   */
    freeDistanceKms: number
    /**
   * The number of free generator hours for the entire rental (not daily).
   */
    freeGeneratorHours?: number
    /**
   * If the rental charges per hour for generator usage, the price per hour.
   */
    generatorPriceHourly?: number
    /**
   * whether or not this booking request includes Delivery
   */
    hasDelivery: boolean
    /**
   * Whether the booking request has pets
   */
    hasPets: boolean
    /**
   * Whether the guest has experience towing a similar trailer (true = yes, false = no). If this question is not required on a booking request then this field should not be recorded as true or false
   */
    hasTowingExperience?: boolean
    /**
   * The quoted price for insurance.
   */
    insurancePrice: number
    /**
   * Whether or not the RV listing is activated (ie. has ever received a payment for a booking)
   */
    isActivated?: boolean
    /**
   * Whether the guest is attending a festival (true = yes, false = no). If this question is not required on a booking request then this field should not be recorded as true or false
   */
    isAttendingFestival?: boolean
    /**
   * Whether the booking originated from an Ezymatch offer
   */
    isEzymatch: boolean
    /**
   * whether or not this it the first event of this type for this RV
   */
    isFirst?: boolean
    /**
   * Whether or not the RV clicked was available because of the ShortStays feature.
   */
    isShortStay: boolean
    /**
   * whether or not this booking is planning on moving the RV after delivery or not. (based on the question asked on the first page of the booking flow)
   */
    isStationaryDelivery?: boolean
    /**
   * Whether or not the RV clicked has the Superhost badge on the card
   */
    isSuperhost: boolean
    /**
   * The city that the listing is based in.
   */
    listingCity?: string
    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    listingCountry?: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * The region the listing is based in
   */
    listingRegion?: string
    /**
   * Details pertaining to the listing in question.
   */
    listingType: 'motorhome' | 'rvcottage' | 'traveltrailer'
    /**
   * The message attached to the booking. Applies to all booking types.
   */
    message?: string
    /**
   * The number of drivers that have been added to the booking.
   */
    numDrivers: number
    /**
   * The account that is receiving the user-to-user interaction.
   */
    receiverUserId: number
    /**
   * The quoted rental price for total nights only that is displayed.
   */
    rentalPrice: number
    /**
   * The quoted price for roadside assistance.
   */
    roadsidePrice: number | null
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId: string
    /**
   * Specific RV type of vehicle booked.
   */
    rvType: string
    /**
   * The quoted security deposit that will be taken on the security deposit date.
   */
    securityDepositPrice: number
    /**
   * The quoted service fee paid to RVezy by the renter.
   */
    servicePrice: number
    /**
   * The datetime that the requested booking is to begin.
   */
    startDate: string
    /**
   * The total dollar value of the host payout for the entire rental.
   */
    totalPayout: number
    /**
   * The total dollar value for the entire booking that is displayed.
   */
    totalPrice: number
    /**
   * Difference between start date and the current date. (how many days out does the trip start)
   */
    tripLeadTime: number
    /**
   * Difference between start date and end date. Effectively, the number of nights for a trip
   */
    tripLength: number
    /**
   * The user ID of the the user. (the renter)
   */
    userId: number

  }
  'RequestBookingSent [v4]': {

    /**
   * The total price for all selected addons.
   */
    addonPrice?: number
    /**
   * The addons that are available for the RV, passed in as a set of key value pairs.
   */
    addons?: {
    /**
     * The name of the addon being displayed.
     */
      name?: string
      /**
     * The price for each pricePer.
     */
      price?: {}
      /**
     * How the pricing is calculated.
     */
      pricePer?: 'km' | 'litre' | 'night' | 'trip' | 'unit'
    }[]
    /**
   * The number of adults that the requested booking will have.
   */
    adults: number
    /**
   * The unique ID associated with the booking request.
   */
    bookingId: number
    /**
   * The state of the booking as is represented on the backend.
   */
    bookingState: number
    /**
   * The method through which the booking was created.
   */
    bookingType?: 'enquiry' | 'ezmatch' | 'instant' | 'normal'
    /**
   * The number of children that the requested booking will have.
   */
    children: number
    /**
   * The quoted price for cleaning.
   */
    cleaningPrice?: number
    /**
   * The ISO 4217 currency code that is displayed.
   */
    currency: 'AUD' | 'CAD' | 'EUR' | 'GBP' | 'NZD' | 'USD'
    /**
   * maximum distance in kilometers that the add-on is offering (ie. if I choose up to 100km option, this parameter shows 100km )
   */
    deliveryDistance?: number
    /**
   * The total price for delivery option selected
   */
    deliveryPrice?: number
    /**
   * The string that the Google Maps API returns as the name of the destination
   */
    destination?: string
    /**
   * The latitude of the destinationa as returned from the Google Maps API)
   */
    destinationLat?: number
    /**
   * The longitude of the destinationa as returned from the Google Maps API)
   */
    destinationLon?: number
    /**
   * The destination types as returned from google maps API. (e.g. campground, rv_park, park, amusement_park, locality)
   */
    destinationTypes?: unknown[]
    /**
   * The extra price per KM that is charged above the freeDistanceKms.
   */
    distancePriceKms?: number
    /**
   * The datetime that the requested booking is to end.
   */
    endDate: string
    /**
   * The name of the festival or event that the guest has said they will be attending
   */
    festivalName?: string
    /**
   * The total number of free kilometers included for the RV. Natural rounding and conversion to KMs if quoted in miles.
   */
    freeDistanceKms: number
    /**
   * The number of free generator hours for the entire rental (not daily).
   */
    freeGeneratorHours?: number
    /**
   * If the rental charges per hour for generator usage, the price per hour.
   */
    generatorPriceHourly?: number
    /**
   * whether or not this booking request includes Delivery
   */
    hasDelivery: boolean
    /**
   * Whether the booking request has pets
   */
    hasPets: boolean
    /**
   * Whether the guest has experience towing a similar trailer (true = yes, false = no). If this question is not required on a booking request then this field should not be recorded as true or false
   */
    hasTowingExperience?: boolean
    /**
   * The quoted price for insurance.
   */
    insurancePrice: number
    /**
   * Whether or not the RV listing is activated (ie. has ever received a payment for a booking)
   */
    isActivated?: boolean
    /**
   * Whether the guest is attending a festival (true = yes, false = no). If this question is not required on a booking request then this field should not be recorded as true or false
   */
    isAttendingFestival?: boolean
    /**
   * Whether the booking originated from an Ezymatch offer
   */
    isEzymatch: boolean
    /**
   * whether or not this it the first event of this type for this RV
   */
    isFirst?: boolean
    /**
   * Whether or not the RV clicked was available because of the ShortStays feature.
   */
    isShortStay: boolean
    /**
   * whether or not this booking is planning on moving the RV after delivery or not. (based on the question asked on the first page of the booking flow)
   */
    isStationaryDelivery?: boolean
    /**
   * Whether or not the RV clicked has the Superhost badge on the card
   */
    isSuperhost: boolean
    /**
   * The city that the listing is based in.
   */
    listingCity?: string
    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    listingCountry?: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * The region the listing is based in
   */
    listingRegion?: string
    /**
   * Details pertaining to the listing in question.
   */
    listingType: 'motorhome' | 'rvcottage' | 'traveltrailer'
    /**
   * The message attached to the booking. Applies to all booking types.
   */
    message?: string
    /**
   * This is the nightly rate that is displayed next to the listing
   */
    nightlyRate: number
    /**
   * The number of drivers that have been added to the booking.
   */
    numDrivers: number
    /**
   * The account that is receiving the user-to-user interaction.
   */
    receiverUserId: number
    /**
   * The quoted rental price for total nights only that is displayed.
   */
    rentalPrice: number
    /**
   * The quoted price for roadside assistance.
   */
    roadsidePrice: number | null
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId: string
    /**
   * Specific RV type of vehicle booked.
   */
    rvType: string
    /**
   * The quoted security deposit that will be taken on the security deposit date.
   */
    securityDepositPrice: number
    /**
   * The quoted service fee paid to RVezy by the renter.
   */
    servicePrice: number
    /**
   * This is the nightly rate that is displayed for the listing that has smart pricing
   */
    smartNightlyRate: number
    /**
   * The datetime that the requested booking is to begin.
   */
    startDate: string
    /**
   * The total dollar value of the host payout for the entire rental.
   */
    totalPayout: number
    /**
   * The total dollar value for the entire booking that is displayed.
   */
    totalPrice: number
    /**
   * Difference between start date and the current date. (how many days out does the trip start)
   */
    tripLeadTime: number
    /**
   * Difference between start date and end date. Effectively, the number of nights for a trip
   */
    tripLength: number
    /**
   * The user ID of the the user. (the renter)
   */
    userId: number

  }
  'RequestBookingSent [v5]': {

    /**
   * The total price for all selected addons.
   */
    addonPrice?: number
    /**
   * The addons that are available for the RV, passed in as a set of key value pairs.
   */
    addons?: {
    /**
     * The name of the addon being displayed.
     */
      name?: string
      /**
     * The price for each pricePer.
     */
      price?: number
      /**
     * How the pricing is calculated.
     */
      pricePer?: 'km' | 'litre' | 'night' | 'trip' | 'unit'
    }[]
    /**
   * The number of adults that the requested booking will have.
   */
    adults: number
    /**
   * The unique ID associated with the booking request.
   */
    bookingId: number
    /**
   * The state of the booking as is represented on the backend.
   */
    bookingState: number
    /**
   * The method through which the booking was created.
   */
    bookingType: 'enquiry' | 'ezmatch' | 'instant' | 'normal'
    /**
   * The number of children that the requested booking will have.
   */
    children: number
    /**
   * The quoted price for cleaning.
   */
    cleaningPrice?: number
    /**
   * The ISO 4217 currency code that is displayed.
   */
    currency: 'AUD' | 'CAD' | 'EUR' | 'GBP' | 'NZD' | 'USD'
    /**
   * maximum distance in kilometers that the add-on is offering (ie. if I choose up to 100km option, this parameter shows 100km )
   */
    deliveryDistance?: number
    /**
   * The total price for delivery option selected
   */
    deliveryPrice?: number
    /**
   * The string that the Google Maps API returns as the name of the destination
   */
    destination?: string
    /**
   * The latitude of the destinationa as returned from the Google Maps API)
   */
    destinationLat?: number
    /**
   * The longitude of the destinationa as returned from the Google Maps API)
   */
    destinationLon?: number
    /**
   * The destination types as returned from google maps API. (e.g. campground, rv_park, park, amusement_park, locality)
   */
    destinationTypes?: unknown[]
    /**
   * The extra price per KM that is charged above the freeDistanceKms.
   */
    distancePriceKms?: number
    /**
   * The datetime that the requested booking is to end.
   */
    endDate: string
    /**
   * The name of the festival or event that the guest has said they will be attending
   */
    festivalName?: string
    /**
   * The total number of free kilometers included for the RV. Natural rounding and conversion to KMs if quoted in miles.
   */
    freeDistanceKms: number
    /**
   * The number of free generator hours for the entire rental (not daily).
   */
    freeGeneratorHours?: number
    /**
   * If the rental charges per hour for generator usage, the price per hour.
   */
    generatorPriceHourly?: number
    /**
   * whether or not this booking request includes Delivery
   */
    hasDelivery: boolean
    /**
   * Whether the booking request has pets
   */
    hasPets: boolean
    /**
   * Whether the guest has experience towing a similar trailer (true = yes, false = no). If this question is not required on a booking request then this field should not be recorded as true or false
   */
    hasTowingExperience?: boolean
    /**
   * The quoted price for insurance.
   */
    insurancePrice: number
    /**
   * Whether or not the RV listing is activated (ie. has ever received a payment for a booking)
   */
    isActivated?: boolean
    /**
   * Whether the guest is attending a festival (true = yes, false = no). If this question is not required on a booking request then this field should not be recorded as true or false
   */
    isAttendingFestival?: boolean
    /**
   * Whether the booking originated from an Ezymatch offer
   */
    isEzymatch: boolean
    /**
   * whether or not this it the first event of this type for this RV
   */
    isFirst?: boolean
    /**
   * Whether or not the RV clicked was available because of the ShortStays feature.
   */
    isShortStay: boolean
    /**
   * whether or not this booking is planning on moving the RV after delivery or not. (based on the question asked on the first page of the booking flow)
   */
    isStationaryAfterDelivery?: boolean
    /**
   * Whether or not the RV clicked has the Superhost badge on the card
   */
    isSuperhost: boolean
    /**
   * The city that the listing is based in.
   */
    listingCity?: string
    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    listingCountry?: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * The region the listing is based in
   */
    listingRegion?: string
    /**
   * Details pertaining to the listing in question.
   */
    listingType: 'motorhome' | 'rvcottage' | 'traveltrailer'
    /**
   * The message attached to the booking. Applies to all booking types.
   */
    message?: string
    /**
   * This is the nightly rate that is displayed next to the listing
   */
    nightlyRate: number
    /**
   * The number of drivers that have been added to the booking.
   */
    numDrivers: number
    /**
   * The account that is receiving the user-to-user interaction.
   */
    receiverUserId: number
    /**
   * The quoted rental price for total nights only that is displayed.
   */
    rentalPrice: number
    /**
   * The quoted price for roadside assistance.
   */
    roadsidePrice: number | null
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId: string
    /**
   * Specific RV type of vehicle booked.
   */
    rvType: string
    /**
   * The quoted security deposit that will be taken on the security deposit date.
   */
    securityDepositPrice: number
    /**
   * The quoted service fee paid to RVezy by the renter.
   */
    servicePrice: number
    /**
   * This is the nightly rate that is displayed for the listing that has smart pricing
   */
    smartNightlyRate?: number | null
    /**
   * The datetime that the requested booking is to begin.
   */
    startDate: string
    /**
   * The total dollar value of the host payout for the entire rental.
   */
    totalPayout: number
    /**
   * The total dollar value for the entire booking that is displayed.
   */
    totalPrice: number
    /**
   * Difference between start date and the current date. (how many days out does the trip start)
   */
    tripLeadTime: number
    /**
   * Difference between start date and end date. Effectively, the number of nights for a trip
   */
    tripLength: number
    /**
   * The user ID of the the user. (the renter)
   */
    userId: number

  }
  'RequestBookingSent [v6]': {

    /**
   * The total price for all selected addons.
   */
    addonPrice?: number
    /**
   * The addons that are available for the RV, passed in as a set of key value pairs.
   */
    addons?: {
    /**
     * The name of the addon being displayed.
     */
      name?: string
      /**
     * The price for each pricePer.
     */
      price?: number
      /**
     * How the pricing is calculated.
     */
      pricePer?: 'km' | 'litre' | 'night' | 'trip' | 'unit'
    }[]
    /**
   * The number of adults that the requested booking will have.
   */
    adults: number
    /**
   * The unique ID associated with the booking request.
   */
    bookingId: number
    /**
   * The state of the booking as is represented on the backend.
   */
    bookingState: number
    /**
   * The method through which the booking was created.
   */
    bookingType: 'enquiry' | 'ezmatch' | 'instant' | 'normal'
    /**
   * The number of children that the requested booking will have.
   */
    children: number
    /**
   * The quoted price for cleaning.
   */
    cleaningPrice?: number
    /**
   * The ISO 4217 currency code that is displayed.
   */
    currency: 'AUD' | 'CAD' | 'EUR' | 'GBP' | 'NZD' | 'USD'
    /**
   * maximum distance in kilometers that the add-on is offering (ie. if I choose up to 100km option, this parameter shows 100km )
   */
    deliveryDistance?: number
    /**
   * The total price for delivery option selected
   */
    deliveryPrice?: number
    /**
   * The string that the Google Maps API returns as the name of the destination
   */
    destination?: string
    /**
   * The latitude of the destinationa as returned from the Google Maps API)
   */
    destinationLat?: number
    /**
   * The longitude of the destinationa as returned from the Google Maps API)
   */
    destinationLon?: number
    /**
   * The destination types as returned from google maps API. (e.g. campground, rv_park, park, amusement_park, locality)
   */
    destinationTypes?: unknown[]
    /**
   * The extra price per KM that is charged above the freeDistanceKms.
   */
    distancePriceKms?: number
    /**
   * The datetime that the requested booking is to end.
   */
    endDate: string
    /**
   * The name of the festival or event that the guest has said they will be attending
   */
    festivalName?: string
    /**
   * If the listing has no FOMO tag then the result will be null. If the listing has tag, then the FOMO will be defined as described in the string
   */
    fomoTag?: string
    /**
   * The total number of free kilometers included for the RV. Natural rounding and conversion to KMs if quoted in miles.
   */
    freeDistanceKms: number
    /**
   * The number of free generator hours for the entire rental (not daily).
   */
    freeGeneratorHours?: number
    /**
   * If the rental charges per hour for generator usage, the price per hour.
   */
    generatorPriceHourly?: number
    /**
   * whether or not this booking request includes Delivery
   */
    hasDelivery: boolean
    /**
   * Whether the booking request has pets
   */
    hasPets: boolean
    /**
   * Whether the guest has experience towing a similar trailer (true = yes, false = no). If this question is not required on a booking request then this field should not be recorded as true or false
   */
    hasTowingExperience?: boolean
    /**
   * The quoted price for insurance.
   */
    insurancePrice: number
    /**
   * Whether or not the RV listing is activated (ie. has ever received a payment for a booking)
   */
    isActivated?: boolean
    /**
   * Whether the guest is attending a festival (true = yes, false = no). If this question is not required on a booking request then this field should not be recorded as true or false
   */
    isAttendingFestival?: boolean
    /**
   * Whether the booking originated from an Ezymatch offer
   */
    isEzymatch: boolean
    /**
   * whether or not this it the first event of this type for this RV
   */
    isFirst?: boolean
    /**
   * Whether or not the RV clicked was available because of the ShortStays feature.
   */
    isShortStay: boolean
    /**
   * whether or not this booking is planning on moving the RV after delivery or not. (based on the question asked on the first page of the booking flow)
   */
    isStationaryAfterDelivery?: boolean
    /**
   * Whether or not the RV clicked has the Superhost badge on the card
   */
    isSuperhost: boolean
    /**
   * The city that the listing is based in.
   */
    listingCity?: string
    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    listingCountry?: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * The region the listing is based in
   */
    listingRegion?: string
    /**
   * Details pertaining to the listing in question.
   */
    listingType: 'motorhome' | 'rvcottage' | 'traveltrailer'
    /**
   * The message attached to the booking. Applies to all booking types.
   */
    message?: string
    /**
   * This is the nightly rate that is displayed next to the listing
   */
    nightlyRate: number
    /**
   * The number of drivers that have been added to the booking.
   */
    numDrivers: number
    /**
   * The account that is receiving the user-to-user interaction.
   */
    receiverUserId: number
    /**
   * The quoted rental price for total nights only that is displayed.
   */
    rentalPrice: number
    /**
   * The quoted price for roadside assistance.
   */
    roadsidePrice: number | null
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId: string
    /**
   * Specific RV type of vehicle booked.
   */
    rvType: string
    /**
   * The quoted security deposit that will be taken on the security deposit date.
   */
    securityDepositPrice: number
    /**
   * The quoted service fee paid to RVezy by the renter.
   */
    servicePrice: number
    /**
   * This is the nightly rate that is displayed for the listing that has smart pricing
   */
    smartNightlyRate?: number | null
    /**
   * The datetime that the requested booking is to begin.
   */
    startDate: string
    /**
   * The total dollar value of the host payout for the entire rental.
   */
    totalPayout: number
    /**
   * The total dollar value for the entire booking that is displayed.
   */
    totalPrice: number
    /**
   * Difference between start date and the current date. (how many days out does the trip start)
   */
    tripLeadTime: number
    /**
   * Difference between start date and end date. Effectively, the number of nights for a trip
   */
    tripLength: number
    /**
   * The user ID of the the user. (the renter)
   */
    userId: number

  }
  'RequestBookingSent [v7]': {

    /**
   * The total price for all selected addons.
   */
    addonPrice?: number
    /**
   * The addons that are available for the RV, passed in as a set of key value pairs.
   */
    addons?: {
    /**
     * The name of the addon being displayed.
     */
      name?: string
      /**
     * The price for each pricePer.
     */
      price?: number
      /**
     * How the pricing is calculated.
     */
      pricePer?: 'km' | 'litre' | 'night' | 'trip' | 'unit'
    }[]
    /**
   * The number of adults that the requested booking will have.
   */
    adults: number
    /**
   * The unique ID associated with the booking request.
   */
    bookingId: number
    /**
   * The state of the booking as is represented on the backend.
   */
    bookingState: number
    /**
   * The method through which the booking was created.
   */
    bookingType: 'enquiry' | 'ezmatch' | 'instant' | 'normal'
    /**
   * The number of children that the requested booking will have.
   */
    children: number
    /**
   * The quoted price for cleaning.
   */
    cleaningPrice?: number
    /**
   * The ISO 4217 currency code that is displayed.
   */
    currency: 'AUD' | 'CAD' | 'EUR' | 'GBP' | 'NZD' | 'USD'
    /**
   * maximum distance in kilometers that the add-on is offering (ie. if I choose up to 100km option, this parameter shows 100km )
   */
    deliveryDistance?: number
    /**
   * The total price for delivery option selected
   */
    deliveryPrice?: number
    /**
   * The string that the Google Maps API returns as the name of the destination
   */
    destination?: string
    /**
   * The latitude of the destinationa as returned from the Google Maps API)
   */
    destinationLat?: number
    /**
   * The longitude of the destinationa as returned from the Google Maps API)
   */
    destinationLon?: number
    /**
   * The destination types as returned from google maps API. (e.g. campground, rv_park, park, amusement_park, locality)
   */
    destinationTypes?: unknown[]
    /**
   * The extra price per KM that is charged above the freeDistanceKms.
   */
    distancePriceKms?: number
    /**
   * The datetime that the requested booking is to end.
   */
    endDate: string
    /**
   * The name of the festival or event that the guest has said they will be attending
   */
    festivalName?: string
    /**
   * If the listing has no FOMO tag then the result will be null. If the listing has tag, then the FOMO will be defined as described in the string
   */
    fomoTag?: string
    /**
   * The total number of free kilometers included for the RV. Natural rounding and conversion to KMs if quoted in miles.
   */
    freeDistanceKms: number | null
    /**
   * The number of free generator hours for the entire rental (not daily).
   */
    freeGeneratorHours?: number
    /**
   * If the rental charges per hour for generator usage, the price per hour.
   */
    generatorPriceHourly?: number
    /**
   * whether or not this booking request includes Delivery
   */
    hasDelivery: boolean
    /**
   * Whether the booking request has pets
   */
    hasPets: boolean
    /**
   * Whether the guest has experience towing a similar trailer (true = yes, false = no). If this question is not required on a booking request then this field should not be recorded as true or false
   */
    hasTowingExperience?: boolean
    /**
   * The quoted price for insurance.
   */
    insurancePrice: number
    /**
   * Whether or not the RV listing is activated (ie. has ever received a payment for a booking)
   */
    isActivated?: boolean
    /**
   * Whether the guest is attending a festival (true = yes, false = no). If this question is not required on a booking request then this field should not be recorded as true or false
   */
    isAttendingFestival?: boolean
    /**
   * Whether the booking originated from an Ezymatch offer
   */
    isEzymatch: boolean
    /**
   * whether or not this it the first event of this type for this RV
   */
    isFirst?: boolean
    /**
   * Whether or not the RV clicked was available because of the ShortStays feature.
   */
    isShortStay: boolean
    /**
   * whether or not this booking is planning on moving the RV after delivery or not. (based on the question asked on the first page of the booking flow)
   */
    isStationaryAfterDelivery?: boolean
    /**
   * Whether or not the RV clicked has the Superhost badge on the card
   */
    isSuperhost: boolean
    /**
   * The city that the listing is based in.
   */
    listingCity?: string
    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    listingCountry?: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * The region the listing is based in
   */
    listingRegion?: string
    /**
   * Details pertaining to the listing in question.
   */
    listingType: 'motorhome' | 'rvcottage' | 'traveltrailer'
    /**
   * The message attached to the booking. Applies to all booking types.
   */
    message?: string
    /**
   * This is the nightly rate that is displayed next to the listing
   */
    nightlyRate: number
    /**
   * The number of drivers that have been added to the booking.
   */
    numDrivers: number
    /**
   * The account that is receiving the user-to-user interaction.
   */
    receiverUserId: number
    /**
   * The quoted rental price for total nights only that is displayed.
   */
    rentalPrice: number
    /**
   * The quoted price for roadside assistance.
   */
    roadsidePrice: number
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId: string
    /**
   * Specific RV type of vehicle booked.
   */
    rvType: string
    /**
   * The quoted security deposit that will be taken on the security deposit date.
   */
    securityDepositPrice: number
    /**
   * The quoted service fee paid to RVezy by the renter.
   */
    servicePrice: number
    /**
   * This is the nightly rate that is displayed for the listing that has smart pricing
   */
    smartNightlyRate?: number | null
    /**
   * The datetime that the requested booking is to begin.
   */
    startDate: string
    /**
   * The total dollar value of the host payout for the entire rental.
   */
    totalPayout: number
    /**
   * The total dollar value for the entire booking that is displayed.
   */
    totalPrice: number
    /**
   * Difference between start date and the current date. (how many days out does the trip start)
   */
    tripLeadTime: number
    /**
   * Difference between start date and end date. Effectively, the number of nights for a trip
   */
    tripLength: number
    /**
   * The user ID of the the user. (the renter)
   */
    userId: number

  }
  'RequestBookingSuccessfulViewed': {

    /**
   * The number of adults that the requested booking will have.
   */
    adults?: number
    /**
   * The unique ID associated with the booking request.
   */
    bookingId: number
    /**
   * The state of the booking as is represented on the backend.
   */
    bookingState?: number
    /**
   * The number of children that the requested booking will have.
   */
    children?: number
    cta?: string
    /**
   * The datetime that the requested booking is to end.
   */
    endDate?: string
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId: string
    /**
   * The datetime that the requested booking is to begin.
   */
    startDate?: string

  }
  'RequestBookingSuccessfulViewed [v1]': {

    /**
   * The number of adults that the requested booking will have.
   */
    adults?: number
    /**
   * The unique ID associated with the booking request.
   */
    bookingId: number
    /**
   * The state of the booking as is represented on the backend.
   */
    bookingState?: number
    /**
   * The number of children that the requested booking will have.
   */
    children?: number
    cta?: string
    /**
   * The datetime that the requested booking is to end.
   */
    endDate?: string
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId: string
    /**
   * The datetime that the requested booking is to begin.
   */
    startDate?: string

  }
  'RequestMoneyChargeFailed': {

    /**
   * The unique Request Money ID associated to the money requesting the host is requiring from the guest
   */
    additionalBookingChargeId: number
    /**
   * The unique booking number associated to the send money request the host is completing.
   */
    bookingId: number
    /**
   * The current booking stage
   */
    bookingStage: string
    /**
   * The ISO 4217 currency that will be submitted for payments.
   */
    currency: string
    /**
   * The amount charged for the damage in the closeout charges.
   */
    damageAmount?: number
    /**
   * The end date of the booking at the time the host has clicked on “Send Money”
   */
    endDate: string
    /**
   * Whether or not at the time of submitting the request did the host include evidence of the charges
   */
    evidenceUploaded: boolean
    /**
   * The standardized code that the payment provider uses to indicate why the payment failed. reason from stripe.
   */
    failCode: string
    /**
   * The amount charged for the generator usage in the closeout charges
   */
    generatorAmount?: number
    /**
   * Whether or not the host had the departure inspection completed at the time of requesting money
   */
    hasDepartureInspectionComplete: boolean
    /**
   * Whether or not the host had the Return inspection completed at the time of requesting money
   */
    hasReturnInspectionComplete: boolean
    /**
   * The amount charged for the mileage in the closeout charges
   */
    mileageAmount?: number
    /**
   * The amount charged for other charges in the closeout charges
   */
    otherAmount?: number
    /**
   * The unique ID of the owner of the listing renter has sent the booking request for.
   */
    ownerId: number
    /**
   * The ID of the guest that receives the special offer.
   */
    receiverUserId: number
    /**
   * The start date of the booking at the time the host has clicked on “Send Money”
   */
    startDate: string
    /**
   * The combined total of all the requested charges the host has entered and requested from the guest
   */
    totalRequestedCharges: number

  }
  'RequestMoneyChargeFailed [v1]': {

    /**
   * The unique Request Money ID associated to the money requesting the host is requiring from the guest
   */
    additionalBookingChargeId: number
    /**
   * The unique booking number associated to the send money request the host is completing.
   */
    bookingId: number
    /**
   * The current booking stage
   */
    bookingStage: string
    /**
   * The ISO 4217 currency that will be submitted for payments.
   */
    currency: string
    /**
   * The amount charged for the damage in the closeout charges.
   */
    damageAmount?: number
    /**
   * The end date of the booking at the time the host has clicked on “Send Money”
   */
    endDate: string
    /**
   * Whether or not at the time of submitting the request did the host include evidence of the charges
   */
    evidenceUploaded: boolean
    /**
   * The standardized code that the payment provider uses to indicate why the payment failed. reason from stripe.
   */
    failCode: string
    /**
   * The amount charged for the generator usage in the closeout charges
   */
    generatorAmount?: number
    /**
   * Whether or not the host had the departure inspection completed at the time of requesting money
   */
    hasDepartureInspectionComplete: boolean
    /**
   * Whether or not the host had the Return inspection completed at the time of requesting money
   */
    hasReturnInspectionComplete: boolean
    /**
   * The amount charged for the mileage in the closeout charges
   */
    mileageAmount?: number
    /**
   * The amount charged for other charges in the closeout charges
   */
    otherAmount?: number
    /**
   * The unique ID of the owner of the listing renter has sent the booking request for.
   */
    ownerId: number
    /**
   * The ID of the guest that receives the special offer.
   */
    receiverUserId: number
    /**
   * The start date of the booking at the time the host has clicked on “Send Money”
   */
    startDate: string
    /**
   * The combined total of all the requested charges the host has entered and requested from the guest
   */
    totalRequestedCharges: number

  }
  'RequestMoneyClicked': {

    /**
   * The unique booking number associated to the request money request the host is completing.
   */
    bookingId: number
    /**
   * The current booking stage.
   */
    bookingStage: string
    /**
   * The end date of the booking at the time the host has clicked on “Request Money”
   */
    endDate: string
    /**
   * The start date of the booking at the time the host has clicked on “Request Money”
   */
    startDate: string

  }
  'RequestMoneyClicked [v1]': {

    /**
   * The unique booking number associated to the request money request the host is completing.
   */
    bookingId: number
    /**
   * The current booking stage.
   */
    bookingStage: string
    /**
   * The end date of the booking at the time the host has clicked on “Request Money”
   */
    endDate: string
    /**
   * The start date of the booking at the time the host has clicked on “Request Money”
   */
    startDate: string

  }
  'RequestMoneyReviewed': {

    /**
   * The unique booking number associated to the send money request the host is completing.
   */
    bookingId: number
    /**
   * The current booking stage
   */
    bookingStage: string
    /**
   * The amount charged for the damage in the closeout charges.
   */
    damageCharges?: number
    /**
   * The end date of the booking at the time the host has clicked on “Send Money”
   */
    endDate: string
    /**
   * The explanation the host provided when requesting money from the quest
   */
    explanationProvided: string
    /**
   * The amount charged for the generator usage in the closeout charges
   */
    generatorCharges?: number
    /**
   * Whether the host had the departure inspection completed at the time they requested money
   */
    hasDepartureInspectionComplete: boolean
    /**
   * Whether the host had the return inspection completed at the time they requested money
   */
    hasReturnInspectionComplete: boolean
    /**
   * The amount charged for the mileage in the closeout charges
   */
    mileageCharges?: number
    /**
   * The amount charged for other charges in the closeout charges
   */
    otherCharges?: number
    /**
   * The start date of the booking at the time the host has clicked on “Send Money”
   */
    startDate: string
    /**
   * The combined total of all the requested charges the host has entered and requested from the guest
   */
    totalRequestedCharges: number

  }
  'RequestMoneyReviewed [v1]': {

    /**
   * The unique booking number associated to the send money request the host is completing.
   */
    bookingId: number
    /**
   * The current booking stage
   */
    bookingStage: string
    /**
   * The amount charged for the damage in the closeout charges.
   */
    damageCharges?: number
    /**
   * The end date of the booking at the time the host has clicked on “Send Money”
   */
    endDate: string
    /**
   * The explanation the host provided when requesting money from the quest
   */
    explanationProvided: string
    /**
   * The amount charged for the generator usage in the closeout charges
   */
    generatorCharges?: number
    /**
   * Whether the host had the departure inspection completed at the time they requested money
   */
    hasDepartureInspectionComplete: boolean
    /**
   * Whether the host had the return inspection completed at the time they requested money
   */
    hasReturnInspectionComplete: boolean
    /**
   * The amount charged for the mileage in the closeout charges
   */
    mileageCharges?: number
    /**
   * The amount charged for other charges in the closeout charges
   */
    otherCharges?: number
    /**
   * The start date of the booking at the time the host has clicked on “Send Money”
   */
    startDate: string
    /**
   * The combined total of all the requested charges the host has entered and requested from the guest
   */
    totalRequestedCharges: number

  }
  'RequestMoneySent': {

    /**
   * The unique Request Money ID associated to the money request the host if requiring from the guest
   */
    additionalBookingChargeId: number
    /**
   * The unique booking number associated to the request money request the host is completing.
   */
    bookingId: number
    /**
   * The current booking stage
   */
    bookingStage: string
    /**
   * The amount charged for the damage in the closeout charges
   */
    damageAmount?: number
    /**
   * The end date of the booking at the time the host has submitted their money request
   */
    endDate: string
    /**
   * Whether or not at the time of submitting the request did the host include evidence of the charges
   */
    evidenceUploaded: boolean
    /**
   * The explanation for the request money.
   */
    explanationProvided: string
    /**
   * The amount charged for the generator usage in the closeout charges
   */
    generatorAmount?: number
    /**
   * Whether the host had the departure inspection completed at the time they requested money
   */
    hasDepartureInspectionComplete: boolean
    /**
   * Whether the host had the return inspection completed at the time they requested money
   */
    hasReturnInspectionComplete: boolean
    /**
   * The type of user who has initiated requesting money
   */
    isOwner: boolean
    /**
   * The amount charged for the mileage in the closeout charges
   */
    mileageAmount?: number
    /**
   * The amount charged for other charges in the closeout charges
   */
    otherAmount?: number
    /**
   * The unique ID of the owner of the listing renter has sent the booking request for.
   */
    ownerId: number
    /**
   * The ID of the guest that receives the special offer.
   */
    receiverUserId: number
    /**
   * The start date of the booking at the time the host has submitted their money request
   */
    startDate: string
    /**
   * The combined total of all the requested charges the host has entered and requested from the guest
   */
    totalRequestedCharges: number

  }
  'RequestMoneySent [v1]': {

    /**
   * The unique Request Money ID associated to the money request the host if requiring from the guest
   */
    additionalBookingChargeId: number
    /**
   * The unique booking number associated to the request money request the host is completing.
   */
    bookingId: number
    /**
   * The current booking stage
   */
    bookingStage: string
    /**
   * The amount charged for the damage in the closeout charges
   */
    damageAmount?: number
    /**
   * The end date of the booking at the time the host has submitted their money request
   */
    endDate: string
    /**
   * Whether or not at the time of submitting the request did the host include evidence of the charges
   */
    evidenceUploaded: boolean
    /**
   * The explanation for the request money.
   */
    explanationProvided: string
    /**
   * The amount charged for the generator usage in the closeout charges
   */
    generatorAmount?: number
    /**
   * Whether the host had the departure inspection completed at the time they requested money
   */
    hasDepartureInspectionComplete: boolean
    /**
   * Whether the host had the return inspection completed at the time they requested money
   */
    hasReturnInspectionComplete: boolean
    /**
   * The type of user who has initiated requesting money
   */
    isOwner: boolean
    /**
   * The amount charged for the mileage in the closeout charges
   */
    mileageAmount?: number
    /**
   * The amount charged for other charges in the closeout charges
   */
    otherAmount?: number
    /**
   * The unique ID of the owner of the listing renter has sent the booking request for.
   */
    ownerId: number
    /**
   * The ID of the guest that receives the special offer.
   */
    receiverUserId: number
    /**
   * The start date of the booking at the time the host has submitted their money request
   */
    startDate: string
    /**
   * The combined total of all the requested charges the host has entered and requested from the guest
   */
    totalRequestedCharges: number

  }
  'RequestMoneySuccessful': {

    /**
   * The unique Request Money ID associated to the money requesting the host is requiring from the guest
   */
    additionalBookingChargeId: number
    /**
   * The unique booking number associated to the send money request the host is completing.
   */
    bookingId: number
    /**
   * The current booking stage
   */
    bookingStage: string
    /**
   * The amount charged for the damage in the closeout charges.
   */
    damageAmount?: number
    /**
   * The end date of the booking at the time the host has clicked on “Send Money”
   */
    endDate: string
    /**
   * The explanation the host provided when requesting money from the quest
   */
    explanationProvided: string
    /**
   * The amount charged for the generator usage in the closeout charges
   */
    generatorAmount?: number
    /**
   * Whether or not the host had the departure inspection completed at the time of requesting money
   */
    hasDepartureInspectionComplete: boolean
    /**
   * Whether or not the host had the Return inspection completed at the time of requesting money
   */
    hasReturnInspectionComplete: boolean
    /**
   * The amount charged for the mileage in the closeout charges
   */
    mileageAmount?: number
    /**
   * The amount charged for other charges in the closeout charges
   */
    otherAmount?: number
    /**
   * The combined total of all the requested + the service fee and taxes deducted from the charges
   */
    ownerPayoutTotal: number
    /**
   * The start date of the booking at the time the host has clicked on “Send Money”
   */
    startDate: string
    /**
   * The combined total of all the requested + the service fee and taxes included from the guest POV
   */
    totalPaymentReceived: number
    /**
   * The combined total of all the requested charges the host has entered and requested from the guest
   */
    totalRequestedCharges: number

  }
  'RequestMoneySuccessful [v1]': {

    /**
   * The unique Request Money ID associated to the money requesting the host is requiring from the guest
   */
    additionalBookingChargeId: number
    /**
   * The unique booking number associated to the send money request the host is completing.
   */
    bookingId: number
    /**
   * The current booking stage
   */
    bookingStage: string
    /**
   * The amount charged for the damage in the closeout charges.
   */
    damageAmount?: number
    /**
   * The end date of the booking at the time the host has clicked on “Send Money”
   */
    endDate: string
    /**
   * The explanation the host provided when requesting money from the quest
   */
    explanationProvided: string
    /**
   * The amount charged for the generator usage in the closeout charges
   */
    generatorAmount?: number
    /**
   * Whether or not the host had the departure inspection completed at the time of requesting money
   */
    hasDepartureInspectionComplete: boolean
    /**
   * Whether or not the host had the Return inspection completed at the time of requesting money
   */
    hasReturnInspectionComplete: boolean
    /**
   * The amount charged for the mileage in the closeout charges
   */
    mileageAmount?: number
    /**
   * The amount charged for other charges in the closeout charges
   */
    otherAmount?: number
    /**
   * The combined total of all the requested + the service fee and taxes deducted from the charges
   */
    ownerPayoutTotal: number
    /**
   * The start date of the booking at the time the host has clicked on “Send Money”
   */
    startDate: string
    /**
   * The combined total of all the requested + the service fee and taxes included from the guest POV
   */
    totalPaymentReceived: number
    /**
   * The combined total of all the requested charges the host has entered and requested from the guest
   */
    totalRequestedCharges: number

  }
  'ReviewRequestSubmitted': {

    /**
   * Array of key value pair of the addon type (e.g. icon), name, price, and pricing type that is added to the booking. NOTE: “Struct” is a BigQuery data type, and is ingestible as a JSON object
   */
    addons?: {
    /**
     * The name of the addon being displayed.
     */
      name?: string
      /**
     * The price for each pricePer.
     */
      price?: number
      /**
     * How the pricing is calculated.
     */
      pricePer?: 'km' | 'litre' | 'night' | 'trip' | 'unit'
    }[]
    /**
   * This is the total of the add-ons selected by the guest
   */
    addonsPrice?: number
    /**
   * The number of adults that the requested booking will have.
   */
    adults: number
    /**
   * The number of children that the requested booking will have.
   */
    children: number
    /**
   * The quoted price for cleaning.
   */
    cleaningPrice?: number
    /**
   * The ISO 4217 currency code displayed
   */
    currency: 'AUD' | 'CAD' | 'EUR' | 'GBP' | 'NZD' | 'USD'
    /**
   * maximum distance in kilometers that the add-on is offering (ie. if I choose up to 100km option, this parameter shows 100km )
   */
    deliveryDistance?: number
    /**
   * The total price for delivery option selected
   */
    deliveryPrice?: number
    /**
   * The string that the Google Maps API returns as the name of the destination
   */
    destination: string
    /**
   * The latitude of the destinationa as returned from the Google Maps API)
   */
    destinationLat: number
    /**
   * The longitude of the destination a as returned from the Google Maps API)
   */
    destinationLon: number
    /**
   * The destination types as returned from google maps API. (e.g. campground, rv_park, park, amusement_park, locality)
   */
    destinationTypes: unknown[]
    /**
   * The extra price per KM that is charged above the freeDistanceKms.
   */
    distancePriceKms?: number
    /**
   * The date that the requested booking is to end.
   */
    endDate: string
    /**
   * The total number of free kilometers included for the RV. Natural rounding and conversion to KMs if quoted in miles.
   */
    freeDistanceKms: number | null
    /**
   * The number of free generator hours for the entire rental (not daily).
   */
    freeGeneratorHours?: number
    /**
   * If the rental charges per hour for generator usage, the
   */
    generatorPriceHourly?: number
    /**
   * whether or not this booking request includes Delivery
   */
    hasDelivery: boolean
    /**
   * The quoted price for insurance.
   */
    insurancePrice: number
    /**
   * This is the insurance protection plan the guest has selected for their booking. by default it is set to standard. options include: basic, standard, premium, stationary
   */
    insuranceType: string
    /**
   * The city that the listing is based in.
   */
    listingCity?: string
    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    listingCountry?: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * The region the listing is based in
   */
    listingRegion?: string
    /**
   * This is the nightly rate that is displayed next to the listing
   */
    nightlyRate: number
    /**
   * The previous page the user was on when they clicked to start the request to book flow (ex. Listing Page, Initial Inquiry, Inquiry Booking Details)
   */
    pageSource: string
    /**
   * The quoted rental price for total nights only that is displayed.
   */
    rentalPrice: number
    /**
   * The quoted price for roadside assistance.
   */
    roadsidePrice: number
    /**
   * The unique ID associated with an RV.
   */
    rvId: string
    /**
   * This is the selection the guest chose on how they want to get the RV. The options include Pickup, Delivery and DeliveryWStationary
   */
    rvUsage: string
    /**
   * The quoted security deposit that will be taken on the security deposit date.
   */
    securityDepositPrice: number
    /**
   * The quoted service fee paid to RVezy.
   */
    servicePrice: number
    /**
   * This is the nightly rate that is displayed for the listing that has smart pricing
   */
    smartNightlyRate?: number | null
    /**
   * The date that the requested booking is to begin.
   */
    startDate: string
    /**
   * The total dollar value for the entire rental that is displayed.
   */
    totalPrice: number
    /**
   * Difference between start date and the current date. (how many days out does the trip start)
   */
    tripLeadTime: number
    /**
   * Difference between start date and end date. Effectively, the number of nights for a trip
   */
    tripLength: number

  }
  'ReviewRequestSubmitted [v1]': {

    /**
   * Array of key value pair of the addon type (e.g. icon), name, price, and pricing type that is added to the booking. NOTE: “Struct” is a BigQuery data type, and is ingestible as a JSON object
   */
    addons?: {
    /**
     * The name of the addon being displayed.
     */
      name?: string
      /**
     * The price for each pricePer.
     */
      price?: {}
      /**
     * How the pricing is calculated.
     */
      pricePer?: 'km' | 'litre' | 'night' | 'trip' | 'unit'
    }[]
    /**
   * This is the total of the add-ons selected by the guest
   */
    addonsPrice?: number
    /**
   * The number of adults that the requested booking will have.
   */
    adults: number
    /**
   * The number of children that the requested booking will have.
   */
    children: number
    /**
   * The quoted price for cleaning.
   */
    cleaningPrice?: number
    /**
   * The ISO 4217 currency code displayed
   */
    currency: 'AUD' | 'CAD' | 'EUR' | 'GBP' | 'NZD'
    /**
   * maximum distance in kilometers that the add-on is offering (ie. if I choose up to 100km option, this parameter shows 100km )
   */
    deliveryDistance?: number
    /**
   * The total price for delivery option selected
   */
    deliveryPrice?: number
    /**
   * The string that the Google Maps API returns as the name of the destination
   */
    destination: string
    /**
   * The latitude of the destinationa as returned from the Google Maps API)
   */
    destinationLat: number
    /**
   * The longitude of the destination a as returned from the Google Maps API)
   */
    destinationLon: number
    /**
   * The destination types as returned from google maps API. (e.g. campground, rv_park, park, amusement_park, locality)
   */
    destinationTypes: unknown[]
    /**
   * The extra price per KM that is charged above the freeDistanceKms.
   */
    distancePriceKms?: number
    /**
   * The date that the requested booking is to end.
   */
    endDate: string
    /**
   * The total number of free kilometers included for the RV. Natural rounding and conversion to KMs if quoted in miles.
   */
    freeDistanceKms: number
    /**
   * The number of free generator hours for the entire rental (not daily).
   */
    freeGeneratorHours?: number
    /**
   * If the rental charges per hour for generator usage, the
   */
    generatorPriceHourly?: number
    /**
   * whether or not this booking request includes Delivery
   */
    hasDelivery: boolean
    /**
   * The quoted price for insurance.
   */
    insurancePrice: number
    /**
   * This is the insurance protection plan the guest has selected for their booking. by default it is set to standard. options include: basic, standard, premium, stationary
   */
    insuranceType: string
    /**
   * The city that the listing is based in.
   */
    listingCity?: string
    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    listingCountry?: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * The region the listing is based in
   */
    listingRegion?: string
    /**
   * This is the nightly rate that is displayed next to the listing
   */
    nightlyRate: number
    /**
   * The previous page the user was on when they clicked to start the request to book flow (ex. Listing Page, Initial Inquiry, Inquiry Booking Details)
   */
    pageSource: string
    /**
   * The quoted rental price for total nights only that is displayed.
   */
    rentalPrice: number
    /**
   * The quoted price for roadside assistance.
   */
    roadsidePrice: number
    /**
   * The unique ID associated with an RV.
   */
    rvId: string
    /**
   * The quoted security deposit that will be taken on the security deposit date.
   */
    securityDepositPrice: number
    /**
   * The quoted service fee paid to RVezy.
   */
    servicePrice: number
    /**
   * This is the nightly rate that is displayed for the listing that has smart pricing
   */
    smartNightlyRate?: number
    /**
   * The date that the requested booking is to begin.
   */
    startDate: string
    /**
   * The total dollar value for the entire rental that is displayed.
   */
    totalPrice: number
    /**
   * The number of characters of the trip description entered in the introduce yourself text field
   */
    tripDescriptionChars?: number
    /**
   * Difference between start date and the current date. (how many days out does the trip start)
   */
    tripLeadTime: number
    /**
   * Difference between start date and end date. Effectively, the number of nights for a trip
   */
    tripLength: number

  }
  'ReviewRequestSubmitted [v2]': {

    /**
   * Array of key value pair of the addon type (e.g. icon), name, price, and pricing type that is added to the booking. NOTE: “Struct” is a BigQuery data type, and is ingestible as a JSON object
   */
    addons?: {
    /**
     * The name of the addon being displayed.
     */
      name?: string
      /**
     * The price for each pricePer.
     */
      price?: number
      /**
     * How the pricing is calculated.
     */
      pricePer?: 'km' | 'litre' | 'night' | 'trip' | 'unit'
    }[]
    /**
   * This is the total of the add-ons selected by the guest
   */
    addonsPrice?: number
    /**
   * The number of adults that the requested booking will have.
   */
    adults: number
    /**
   * The number of children that the requested booking will have.
   */
    children: number
    /**
   * The quoted price for cleaning.
   */
    cleaningPrice?: number
    /**
   * The ISO 4217 currency code displayed
   */
    currency: 'AUD' | 'CAD' | 'EUR' | 'GBP' | 'NZD' | 'USD'
    /**
   * maximum distance in kilometers that the add-on is offering (ie. if I choose up to 100km option, this parameter shows 100km )
   */
    deliveryDistance?: number
    /**
   * The total price for delivery option selected
   */
    deliveryPrice?: number
    /**
   * The string that the Google Maps API returns as the name of the destination
   */
    destination: string
    /**
   * The latitude of the destinationa as returned from the Google Maps API)
   */
    destinationLat: number
    /**
   * The longitude of the destination a as returned from the Google Maps API)
   */
    destinationLon: number
    /**
   * The destination types as returned from google maps API. (e.g. campground, rv_park, park, amusement_park, locality)
   */
    destinationTypes: unknown[]
    /**
   * The extra price per KM that is charged above the freeDistanceKms.
   */
    distancePriceKms?: number
    /**
   * The date that the requested booking is to end.
   */
    endDate: string
    /**
   * The total number of free kilometers included for the RV. Natural rounding and conversion to KMs if quoted in miles.
   */
    freeDistanceKms: number
    /**
   * The number of free generator hours for the entire rental (not daily).
   */
    freeGeneratorHours?: number
    /**
   * If the rental charges per hour for generator usage, the
   */
    generatorPriceHourly?: number
    /**
   * whether or not this booking request includes Delivery
   */
    hasDelivery: boolean
    /**
   * The quoted price for insurance.
   */
    insurancePrice: number
    /**
   * This is the insurance protection plan the guest has selected for their booking. by default it is set to standard. options include: basic, standard, premium, stationary
   */
    insuranceType: string
    /**
   * The city that the listing is based in.
   */
    listingCity?: string
    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    listingCountry?: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * The region the listing is based in
   */
    listingRegion?: string
    /**
   * This is the nightly rate that is displayed next to the listing
   */
    nightlyRate: number
    /**
   * The previous page the user was on when they clicked to start the request to book flow (ex. Listing Page, Initial Inquiry, Inquiry Booking Details)
   */
    pageSource: string
    /**
   * The quoted rental price for total nights only that is displayed.
   */
    rentalPrice: number
    /**
   * The quoted price for roadside assistance.
   */
    roadsidePrice: number
    /**
   * The unique ID associated with an RV.
   */
    rvId: string
    /**
   * This is the selection the guest chose on how they want to get the RV. The options include Pickup, Delivery and DeliveryWStationary
   */
    rvUsage: string
    /**
   * The quoted security deposit that will be taken on the security deposit date.
   */
    securityDepositPrice: number
    /**
   * The quoted service fee paid to RVezy.
   */
    servicePrice: number
    /**
   * This is the nightly rate that is displayed for the listing that has smart pricing
   */
    smartNightlyRate?: number | null
    /**
   * The date that the requested booking is to begin.
   */
    startDate: string
    /**
   * The total dollar value for the entire rental that is displayed.
   */
    totalPrice: number
    /**
   * Difference between start date and the current date. (how many days out does the trip start)
   */
    tripLeadTime: number
    /**
   * Difference between start date and end date. Effectively, the number of nights for a trip
   */
    tripLength: number

  }
  'ReviewRequestSubmitted [v3]': {

    /**
   * Array of key value pair of the addon type (e.g. icon), name, price, and pricing type that is added to the booking. NOTE: “Struct” is a BigQuery data type, and is ingestible as a JSON object
   */
    addons?: {
    /**
     * The name of the addon being displayed.
     */
      name?: string
      /**
     * The price for each pricePer.
     */
      price?: number
      /**
     * How the pricing is calculated.
     */
      pricePer?: 'km' | 'litre' | 'night' | 'trip' | 'unit'
    }[]
    /**
   * This is the total of the add-ons selected by the guest
   */
    addonsPrice?: number
    /**
   * The number of adults that the requested booking will have.
   */
    adults: number
    /**
   * The number of children that the requested booking will have.
   */
    children: number
    /**
   * The quoted price for cleaning.
   */
    cleaningPrice?: number
    /**
   * The ISO 4217 currency code displayed
   */
    currency: 'AUD' | 'CAD' | 'EUR' | 'GBP' | 'NZD' | 'USD'
    /**
   * maximum distance in kilometers that the add-on is offering (ie. if I choose up to 100km option, this parameter shows 100km )
   */
    deliveryDistance?: number
    /**
   * The total price for delivery option selected
   */
    deliveryPrice?: number
    /**
   * The string that the Google Maps API returns as the name of the destination
   */
    destination: string
    /**
   * The latitude of the destinationa as returned from the Google Maps API)
   */
    destinationLat: number
    /**
   * The longitude of the destination a as returned from the Google Maps API)
   */
    destinationLon: number
    /**
   * The destination types as returned from google maps API. (e.g. campground, rv_park, park, amusement_park, locality)
   */
    destinationTypes: unknown[]
    /**
   * The extra price per KM that is charged above the freeDistanceKms.
   */
    distancePriceKms?: number
    /**
   * The date that the requested booking is to end.
   */
    endDate: string
    /**
   * The total number of free kilometers included for the RV. Natural rounding and conversion to KMs if quoted in miles.
   */
    freeDistanceKms: number | null
    /**
   * The number of free generator hours for the entire rental (not daily).
   */
    freeGeneratorHours?: number
    /**
   * If the rental charges per hour for generator usage, the
   */
    generatorPriceHourly?: number
    /**
   * whether or not this booking request includes Delivery
   */
    hasDelivery: boolean
    /**
   * The quoted price for insurance.
   */
    insurancePrice: number
    /**
   * This is the insurance protection plan the guest has selected for their booking. by default it is set to standard. options include: basic, standard, premium, stationary
   */
    insuranceType: string
    /**
   * The city that the listing is based in.
   */
    listingCity?: string
    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    listingCountry?: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * The region the listing is based in
   */
    listingRegion?: string
    /**
   * This is the nightly rate that is displayed next to the listing
   */
    nightlyRate: number
    /**
   * The previous page the user was on when they clicked to start the request to book flow (ex. Listing Page, Initial Inquiry, Inquiry Booking Details)
   */
    pageSource: string
    /**
   * The quoted rental price for total nights only that is displayed.
   */
    rentalPrice: number
    /**
   * The quoted price for roadside assistance.
   */
    roadsidePrice: number
    /**
   * The unique ID associated with an RV.
   */
    rvId: string
    /**
   * This is the selection the guest chose on how they want to get the RV. The options include Pickup, Delivery and DeliveryWStationary
   */
    rvUsage: string
    /**
   * The quoted security deposit that will be taken on the security deposit date.
   */
    securityDepositPrice: number
    /**
   * The quoted service fee paid to RVezy.
   */
    servicePrice: number
    /**
   * This is the nightly rate that is displayed for the listing that has smart pricing
   */
    smartNightlyRate?: number | null
    /**
   * The date that the requested booking is to begin.
   */
    startDate: string
    /**
   * The total dollar value for the entire rental that is displayed.
   */
    totalPrice: number
    /**
   * Difference between start date and the current date. (how many days out does the trip start)
   */
    tripLeadTime: number
    /**
   * Difference between start date and end date. Effectively, the number of nights for a trip
   */
    tripLength: number

  }
  'ReviewRequestViewed': {

    /**
   * Array of key value pair of the addon type (e.g. icon), name, price, and pricing type that is added to the booking. NOTE: “Struct” is a BigQuery data type, and is ingestible as a JSON object
   */
    addons?: {
    /**
     * The name of the addon being displayed.
     */
      name?: string
      /**
     * The price for each pricePer.
     */
      price?: number
      /**
     * How the pricing is calculated.
     */
      pricePer?: 'km' | 'litre' | 'night' | 'trip' | 'unit'
    }[]
    /**
   * This is the total of the add-ons selected by the guest
   */
    addonsPrice?: number
    /**
   * The number of adults that the requested booking will have.
   */
    adults: number
    /**
   * The number of children that the requested booking will have.
   */
    children: number
    /**
   * The quoted price for cleaning.
   */
    cleaningPrice?: number
    /**
   * The ISO 4217 currency code displayed
   */
    currency: 'AUD' | 'CAD' | 'EUR' | 'GBP' | 'NZD' | 'USD'
    /**
   * The extra price per KM that is charged above the freeDistanceKms.
   */
    distancePriceKms?: number
    /**
   * The date that the requested booking is to end.
   */
    endDate: string
    /**
   * The total number of free kilometers included for the RV. Natural rounding and conversion to KMs if quoted in miles.
   */
    freeDistanceKms: number | null
    /**
   * The number of free generator hours for the entire rental (not daily).
   */
    freeGeneratorHours?: number
    /**
   * If the rental charges per hour for generator usage, the
   */
    generatorPriceHourly?: number
    /**
   * The quoted price for insurance.
   */
    insurancePrice: number
    /**
   * This is the nightly rate that is displayed next to the listing
   */
    nightlyRate: number
    /**
   * Time in seconds from when a page started to load to when it finished loading
   */
    pageLoadSpeed?: number
    /**
   * The previous page the user was on when they clicked to start the request to book flow (ex. Listing Page, Initial Inquiry, Inquiry Booking Details)
   */
    pageSource: string
    /**
   * If the guest has selected pets to be joining them on their trip or not at the time they land on the review page.
   */
    pets?: boolean
    /**
   * The quoted rental price for total nights only that is displayed.
   */
    rentalPrice: number
    /**
   * The quoted price for roadside assistance.
   */
    roadsidePrice: number
    /**
   * The unique ID associated with an RV.
   */
    rvId: string
    /**
   * This is the selection the guest chose on how they want to get the RV. The options include Pickup, Delivery and DeliveryWStationary
   */
    rvUsage: string
    /**
   * The quoted security deposit that will be taken on the security deposit date.
   */
    securityDepositPrice: number
    /**
   * The quoted service fee paid to RVezy.
   */
    servicePrice: number
    /**
   * This is the nightly rate that is displayed for the listing that has smart pricing
   */
    smartNightlyRate?: number | null
    /**
   * The date that the requested booking is to begin.
   */
    startDate: string
    /**
   * The total dollar value for the entire rental that is displayed.
   */
    totalPrice: number
    /**
   * Difference between start date and end date. Effectively, the number of nights for a trip
   */
    tripLength: number

  }
  'ReviewRequestViewed [v1]': {

    /**
   * Array of key value pair of the addon type (e.g. icon), name, price, and pricing type that is added to the booking. NOTE: “Struct” is a BigQuery data type, and is ingestible as a JSON object
   */
    addons?: {
    /**
     * The name of the addon being displayed.
     */
      name?: string
      /**
     * The price for each pricePer.
     */
      price?: {}
      /**
     * How the pricing is calculated.
     */
      pricePer?: 'km' | 'litre' | 'night' | 'trip' | 'unit'
    }[]
    /**
   * This is the total of the add-ons selected by the guest
   */
    addonsPrice?: number
    /**
   * The number of adults that the requested booking will have.
   */
    adults: number
    /**
   * The number of children that the requested booking will have.
   */
    children: number
    /**
   * The quoted price for cleaning.
   */
    cleaningPrice?: number
    /**
   * The ISO 4217 currency code displayed
   */
    currency: 'AUD' | 'CAD' | 'EUR' | 'GBP' | 'NZD'
    /**
   * The extra price per KM that is charged above the freeDistanceKms.
   */
    distancePriceKms?: number
    /**
   * The date that the requested booking is to end.
   */
    endDate: string
    /**
   * The total number of free kilometers included for the RV. Natural rounding and conversion to KMs if quoted in miles.
   */
    freeDistanceKms: number
    /**
   * The number of free generator hours for the entire rental (not daily).
   */
    freeGeneratorHours?: number
    /**
   * If the rental charges per hour for generator usage, the
   */
    generatorPriceHourly?: number
    /**
   * The quoted price for insurance.
   */
    insurancePrice: number
    /**
   * This is the nightly rate that is displayed next to the listing
   */
    nightlyRate: number
    /**
   * Time in seconds from when a page started to load to when it finished loading
   */
    pageLoadSpeed?: number
    /**
   * The previous page the user was on when they clicked to start the request to book flow (ex. Listing Page, Initial Inquiry, Inquiry Booking Details)
   */
    pageSource: string
    /**
   * If the guest has selected pets to be joining them on their trip or not at the time they land on the review page.
   */
    pets?: boolean
    /**
   * The quoted rental price for total nights only that is displayed.
   */
    rentalPrice: number
    /**
   * The quoted price for roadside assistance.
   */
    roadsidePrice: number
    /**
   * The unique ID associated with an RV.
   */
    rvId: string
    /**
   * The quoted security deposit that will be taken on the security deposit date.
   */
    securityDepositPrice: number
    /**
   * The quoted service fee paid to RVezy.
   */
    servicePrice: number
    /**
   * This is the nightly rate that is displayed for the listing that has smart pricing
   */
    smartNightlyRate?: number
    /**
   * The date that the requested booking is to begin.
   */
    startDate: string
    /**
   * The total dollar value for the entire rental that is displayed.
   */
    totalPrice: number
    /**
   * Difference between start date and end date. Effectively, the number of nights for a trip
   */
    tripLength: number

  }
  'ReviewRequestViewed [v2]': {

    /**
   * Array of key value pair of the addon type (e.g. icon), name, price, and pricing type that is added to the booking. NOTE: “Struct” is a BigQuery data type, and is ingestible as a JSON object
   */
    addons?: {
    /**
     * The name of the addon being displayed.
     */
      name?: string
      /**
     * The price for each pricePer.
     */
      price?: number
      /**
     * How the pricing is calculated.
     */
      pricePer?: 'km' | 'litre' | 'night' | 'trip' | 'unit'
    }[]
    /**
   * This is the total of the add-ons selected by the guest
   */
    addonsPrice?: number
    /**
   * The number of adults that the requested booking will have.
   */
    adults: number
    /**
   * The number of children that the requested booking will have.
   */
    children: number
    /**
   * The quoted price for cleaning.
   */
    cleaningPrice?: number
    /**
   * The ISO 4217 currency code displayed
   */
    currency: 'AUD' | 'CAD' | 'EUR' | 'GBP' | 'NZD' | 'USD'
    /**
   * The extra price per KM that is charged above the freeDistanceKms.
   */
    distancePriceKms?: number
    /**
   * The date that the requested booking is to end.
   */
    endDate: string
    /**
   * The total number of free kilometers included for the RV. Natural rounding and conversion to KMs if quoted in miles.
   */
    freeDistanceKms: number
    /**
   * The number of free generator hours for the entire rental (not daily).
   */
    freeGeneratorHours?: number
    /**
   * If the rental charges per hour for generator usage, the
   */
    generatorPriceHourly?: number
    /**
   * The quoted price for insurance.
   */
    insurancePrice: number
    /**
   * This is the nightly rate that is displayed next to the listing
   */
    nightlyRate: number
    /**
   * Time in seconds from when a page started to load to when it finished loading
   */
    pageLoadSpeed?: number
    /**
   * The previous page the user was on when they clicked to start the request to book flow (ex. Listing Page, Initial Inquiry, Inquiry Booking Details)
   */
    pageSource: string
    /**
   * If the guest has selected pets to be joining them on their trip or not at the time they land on the review page.
   */
    pets?: boolean
    /**
   * The quoted rental price for total nights only that is displayed.
   */
    rentalPrice: number
    /**
   * The quoted price for roadside assistance.
   */
    roadsidePrice: number
    /**
   * The unique ID associated with an RV.
   */
    rvId: string
    /**
   * This is the selection the guest chose on how they want to get the RV. The options include Pickup, Delivery and DeliveryWStationary
   */
    rvUsage: string
    /**
   * The quoted security deposit that will be taken on the security deposit date.
   */
    securityDepositPrice: number
    /**
   * The quoted service fee paid to RVezy.
   */
    servicePrice: number
    /**
   * This is the nightly rate that is displayed for the listing that has smart pricing
   */
    smartNightlyRate?: number | null
    /**
   * The date that the requested booking is to begin.
   */
    startDate: string
    /**
   * The total dollar value for the entire rental that is displayed.
   */
    totalPrice: number
    /**
   * Difference between start date and end date. Effectively, the number of nights for a trip
   */
    tripLength: number

  }
  'ReviewRequestViewed [v3]': {

    /**
   * Array of key value pair of the addon type (e.g. icon), name, price, and pricing type that is added to the booking. NOTE: “Struct” is a BigQuery data type, and is ingestible as a JSON object
   */
    addons?: {
    /**
     * The name of the addon being displayed.
     */
      name?: string
      /**
     * The price for each pricePer.
     */
      price?: number
      /**
     * How the pricing is calculated.
     */
      pricePer?: 'km' | 'litre' | 'night' | 'trip' | 'unit'
    }[]
    /**
   * This is the total of the add-ons selected by the guest
   */
    addonsPrice?: number
    /**
   * The number of adults that the requested booking will have.
   */
    adults: number
    /**
   * The number of children that the requested booking will have.
   */
    children: number
    /**
   * The quoted price for cleaning.
   */
    cleaningPrice?: number
    /**
   * The ISO 4217 currency code displayed
   */
    currency: 'AUD' | 'CAD' | 'EUR' | 'GBP' | 'NZD' | 'USD'
    /**
   * The extra price per KM that is charged above the freeDistanceKms.
   */
    distancePriceKms?: number
    /**
   * The date that the requested booking is to end.
   */
    endDate: string
    /**
   * The total number of free kilometers included for the RV. Natural rounding and conversion to KMs if quoted in miles.
   */
    freeDistanceKms: number | null
    /**
   * The number of free generator hours for the entire rental (not daily).
   */
    freeGeneratorHours?: number
    /**
   * If the rental charges per hour for generator usage, the
   */
    generatorPriceHourly?: number
    /**
   * The quoted price for insurance.
   */
    insurancePrice: number
    /**
   * This is the nightly rate that is displayed next to the listing
   */
    nightlyRate: number
    /**
   * Time in seconds from when a page started to load to when it finished loading
   */
    pageLoadSpeed?: number
    /**
   * The previous page the user was on when they clicked to start the request to book flow (ex. Listing Page, Initial Inquiry, Inquiry Booking Details)
   */
    pageSource: string
    /**
   * If the guest has selected pets to be joining them on their trip or not at the time they land on the review page.
   */
    pets?: boolean
    /**
   * The quoted rental price for total nights only that is displayed.
   */
    rentalPrice: number
    /**
   * The quoted price for roadside assistance.
   */
    roadsidePrice: number
    /**
   * The unique ID associated with an RV.
   */
    rvId: string
    /**
   * This is the selection the guest chose on how they want to get the RV. The options include Pickup, Delivery and DeliveryWStationary
   */
    rvUsage: string
    /**
   * The quoted security deposit that will be taken on the security deposit date.
   */
    securityDepositPrice: number
    /**
   * The quoted service fee paid to RVezy.
   */
    servicePrice: number
    /**
   * This is the nightly rate that is displayed for the listing that has smart pricing
   */
    smartNightlyRate?: number | null
    /**
   * The date that the requested booking is to begin.
   */
    startDate: string
    /**
   * The total dollar value for the entire rental that is displayed.
   */
    totalPrice: number
    /**
   * Difference between start date and end date. Effectively, the number of nights for a trip
   */
    tripLength: number

  }
  'SearchFilterMenuOpened': {

    /**
   * The name of the menu that was opened by the user.
   */
    menuName: 'Drivable' | 'Filters' | 'Towable' | 'dates' | 'guests' | 'more filters' | 'rv types'

  }
  'SearchFilterMenuOpened [v1]': {

    /**
   * the list of filters available to choose from on the menu that was opened. On mobile, I’d expect this list to be much bigger than on desktop since more of these filters will be included in the More filters menu. For desktop, if a user clicks on guests menu. I’d expect menuName to be Guests, and the menuFilters to be [Adult,children,PetFriendly] (if pet friendly is available in the guest menu for that user.
   */
    menuFilters: {
    /**
     * No of Adults filtered
     */
      Adults?: number
      /**
     * If Delivery filter was selected
     */
      Delivery: boolean
      /**
     * If Instant book filter was selected
     */
      InstantBook: boolean
      /**
     * If Pet friendly filter was selected
     */
      PetFriendly: boolean
      /**
     * No of Children filtered
     */
      children?: number
      /**
     * The vehicle type of the RV
     */
      rvType: string
    }
    /**
   * The name of the menu that was opened by the user.
   */
    menuName: string

  }
  'SearchFilterMenuOpened [v2]': {

    /**
   * The name of the menu that was opened by the user.
   */
    menuName: 'Drivable' | 'Filters' | 'Towable' | 'dates' | 'guests' | 'more filters' | 'rv types'

  }
  'SearchViewed': {

    /**
   * The number of adults that the RV must sleep.
   */
    adults?: number
    /**
   * Whether or not the airport pickup flag is set in the search.
   */
    airportpickup?: boolean
    /**
   * The list of amenities that are selected in search options.
   */
    amenities?: unknown[]
    /**
   * Whether or not the budget friendly filter was applied.
   */
    budgetFriendly: boolean
    /**
   * The number of children that the RV must sleep.
   */
    children?: number
    /**
   * What the call to action was for the user to get to the search page (e.g. search, showmore, viewallrentals, rvfilter)
   */
    cta?: string
    /**
   * difference between start date and current local time (time zone of IP)
   */
    daysOut?: number
    /**
   * Whether or not the delivery flag is set in the search.
   */
    delivery: boolean
    /**
   * The destination type as returned from google maps API. (e.g. campground, rv_park, park, amusement_park & locality)
   */
    destinationTypes?: unknown[]
    /**
   * The date that the search for listing availbility ends upon (exclusive).
   */
    endDate?: string | null
    /**
   * Whether or not the experience not required filter is enabled
   */
    experienceNotRequired?: boolean
    /**
   * Whether or not the festival and event friendly filter is enabled
   */
    festivalAndEventsFriendly?: boolean
    /**
   * Whether or not the instant book flag is set in the search.
   */
    instant: boolean
    /**
   * Whether or not a menu filter was applied to trigger the search.
   */
    isMenuFilterApplied: boolean
    /**
   * The listing category (e.g. TravelTrailer, Motorhome, RVCottage).
   */
    listingType?: string
    /**
   * The maximum length of the RV.
   */
    maxLength?: number
    /**
   * The maximum year of the RV.
   */
    maxRvYear?: number
    /**
   * The maximum weight of the RV.
   */
    maxWeight?: number
    /**
   * Whether or not the midweek deals filter is applied.
   */
    midweekDeals: boolean
    /**
   * The minimum length of the RV.
   */
    minLength?: number
    /**
   * The minimum year of the RV.
   */
    minRvYear?: number
    /**
   * The minimum weight of the RV.
   */
    minWeight?: number
    /**
   * The total number of possible results returned from the backend (not representative of those actually shown).
   */
    numResults: number
    /**
   * The total number of possible results displayed on screen.
   */
    numResultsDisplayed: number
    /**
   * From where the user got to the search page (e.g. home, Top25)
   */
    pageSource: string
    /**
   * The nightly price maximum.
   */
    priceMax?: number
    /**
   * The nightly price minimum.
   */
    priceMin?: number
    /**
   * The unique ID of the listingSet request. Reused for ListingSetViewed and ListingSetPresented. (should be able to coorelate between events to determine which RVs were actually shown in the this SearchViewed event)
   */
    requestId?: string
    /**
   * The RV Manufacturer that is inputed as a search filter. If no RV Manufacturer inputed in field, this parameter should be blank
   */
    rvManufacturer?: string
    /**
   * The type of RV (e.g. Class A, Class B, Class C, Fifth Wheel, TentTrailer, Travel Trailer, etc.) that are selected in search filters.
   */
    rvType?: unknown[]
    /**
   * The location that is being searched, as per the text box.
   */
    searchAddress?: string
    /**
   * The city that is being searched.
   */
    searchCity?: string
    /**
   * The country that is being searched.
   */
    searchCountry?: string
    /**
   * The North East latitude that is being searched, regardless of whether or not is actually provided as an input (E.g. if city/state/country is provided).
   */
    searchLatNE?: number
    /**
   * The South West latitude that is being searched, regardless of whether or not is actually provided as an input (E.g. if city/state/country is provided).
   */
    searchLatSW?: number
    /**
   * The North East longitude that is being searched, regardless of whether or not is actually provided as an input (E.g. if city/state/country is provided).
   */
    searchLonNE?: number
    /**
   * The South West longitude that is being searched, regardless of whether or not is actually provided as an input (E.g. if city/state/country is provided).
   */
    searchLonSW?: number
    /**
   * The page of results that this search viewed event was triggered on.
   */
    searchPage: number
    /**
   * The ISO-3166-2 region code that is being searched.
   */
    searchRegion?: string
    /**
   * Whether or not the map was visible/shown with this search. (based on the show/hide Map button at the top right of the search results page)
   */
    showMap: boolean
    /**
   * The date that the search for listing availability begins upon (inclusive).
   */
    startDate?: string | null
    /**
   * difference between start date and end date
   */
    tripLength?: number

  }
  'SearchViewed [v1]': {

    /**
   * The number of adults that the RV must sleep.
   */
    adults?: number
    /**
   * Whether or not the airport pickup flag is set in the search.
   */
    airportpickup?: boolean
    /**
   * The list of amenities that are selected in search options.
   */
    amenities?: unknown[]
    /**
   * The number of children that the RV must sleep.
   */
    children?: number
    /**
   * difference between start date and current local time (time zone of IP)
   */
    daysOut?: number
    /**
   * Whether or not the delivery flag is set in the search.
   */
    delivery: boolean
    /**
   * The destination type as returned from google maps API. (e.g. campground, rv_park, park, amusement_park & locality)
   */
    destinationTypes?: unknown[]
    /**
   * The date that the search for listing availbility ends upon (exclusive).
   */
    endDate?: string | null
    /**
   * Whether or not the instant book flag is set in the search.
   */
    instant: boolean
    /**
   * The listing category (e.g. TravelTrailer, Motorhome, RVCottage).
   */
    listingType?: string
    /**
   * The maximum length of the RV.
   */
    maxLength?: number
    /**
   * The maximum weight of the RV.
   */
    maxWeight?: number
    /**
   * The minimum length of the RV.
   */
    minLength?: number
    /**
   * The minimum weight of the RV.
   */
    minWeight?: number
    /**
   * The total number of possible results returned from the backend (not representative of those actually shown).
   */
    numResults: number
    /**
   * The total number of possible results displayed on screen.
   */
    numResultsDisplayed: number
    /**
   * From where the user got to the search page (e.g. home, Top25)
   */
    pageSource: string
    /**
   * The nightly price maximum.
   */
    priceMax?: number
    /**
   * The nightly price minimum.
   */
    priceMin?: number
    /**
   * The unique ID of the listingSet request. Reused for ListingSetViewed and ListingSetPresented. (should be able to coorelate between events to determine which RVs were actually shown in the this SearchViewed event)
   */
    requestId?: string
    /**
   * The type of RV (e.g. Class A, Class B, Class C, Fifth Wheel, TentTrailer, Travel Trailer, etc.) that are selected in search filters.
   */
    rvType?: unknown[]
    /**
   * The location that is being searched, as per the text box.
   */
    searchAddress?: string
    /**
   * The city that is being searched.
   */
    searchCity?: string
    /**
   * The country that is being searched.
   */
    searchCountry?: string
    /**
   * The North East latitude that is being searched, regardless of whether or not is actually provided as an input (E.g. if city/state/country is provided).
   */
    searchLatNE?: number
    /**
   * The South West latitude that is being searched, regardless of whether or not is actually provided as an input (E.g. if city/state/country is provided).
   */
    searchLatSW?: number
    /**
   * The North East longitude that is being searched, regardless of whether or not is actually provided as an input (E.g. if city/state/country is provided).
   */
    searchLonNE?: number
    /**
   * The South West longitude that is being searched, regardless of whether or not is actually provided as an input (E.g. if city/state/country is provided).
   */
    searchLonSW?: number
    /**
   * The page of results that this search viewed event was triggered on.
   */
    searchPage: number
    /**
   * The ISO-3166-2 region code that is being searched.
   */
    searchRegion?: string
    /**
   * Whether or not the map was visible/shown with this search. (based on the show/hide Map button at the top right of the search results page)
   */
    showMap: boolean
    /**
   * The date that the search for listing availability begins upon (inclusive).
   */
    startDate?: string | null
    /**
   * difference between start date and end date
   */
    tripLength?: number

  }
  'SearchViewed [v2]': {

    /**
   * The number of adults that the RV must sleep.
   */
    adults?: number
    /**
   * Whether or not the airport pickup flag is set in the search.
   */
    airportpickup?: boolean
    /**
   * The list of amenities that are selected in search options.
   */
    amenities?: unknown[]
    /**
   * The number of children that the RV must sleep.
   */
    children?: number
    /**
   * What the call to action was for the user to get to the search page (e.g. search, showmore, viewallrentals, rvfilter)
   */
    cta: string
    /**
   * If selected, the amount of days that they are flexible shifting their selected dates by (+ or - 3 days)
   */
    dateFlexibility?: number
    /**
   * difference between start date and current local time (time zone of IP)
   */
    daysOut?: number
    /**
   * Whether or not the delivery flag is set in the search.
   */
    delivery: boolean
    /**
   * The destination type as returned from google maps API. (e.g. campground, rv_park, park, amusement_park & locality)
   */
    destinationTypes?: unknown[]
    /**
   * The date that the search for listing availbility ends upon (exclusive).
   */
    endDate?: string | null
    /**
   * Whether or not the instant book flag is set in the search.
   */
    instant: boolean
    /**
   * The listing category (e.g. TravelTrailer, Motorhome, RVCottage).
   */
    listingType?: string
    /**
   * The maximum length of the RV.
   */
    maxLength?: number
    /**
   * The maximum year of the RV.
   */
    maxRvYear?: number
    /**
   * The maximum weight of the RV.
   */
    maxWeight?: number
    /**
   * The minimum length of the RV.
   */
    minLength?: number
    /**
   * The minimum year of the RV.
   */
    minRvYear?: number
    /**
   * The minimum weight of the RV.
   */
    minWeight?: number
    /**
   * The total number of possible results returned from the backend (not representative of those actually shown).
   */
    numResults: number
    /**
   * The total number of possible results displayed on screen.
   */
    numResultsDisplayed: number
    /**
   * From where the user got to the search page (e.g. home, Top25)
   */
    pageSource: string
    /**
   * The nightly price maximum.
   */
    priceMax?: number
    /**
   * The nightly price minimum.
   */
    priceMin?: number
    /**
   * The unique ID of the listingSet request. Reused for ListingSetViewed and ListingSetPresented. (should be able to coorelate between events to determine which RVs were actually shown in the this SearchViewed event)
   */
    requestId?: string
    /**
   * The RV Manufacturer that is inputed as a search filter. If no RV Manufacturer inputed in field, this parameter should be blank
   */
    rvManufacturer?: string
    /**
   * The type of RV (e.g. Class A, Class B, Class C, Fifth Wheel, TentTrailer, Travel Trailer, etc.) that are selected in search filters.
   */
    rvType?: unknown[]
    /**
   * The location that is being searched, as per the text box.
   */
    searchAddress?: string
    /**
   * The city that is being searched.
   */
    searchCity?: string
    /**
   * The country that is being searched.
   */
    searchCountry?: string
    /**
   * The North East latitude that is being searched, regardless of whether or not is actually provided as an input (E.g. if city/state/country is provided).
   */
    searchLatNE?: number
    /**
   * The South West latitude that is being searched, regardless of whether or not is actually provided as an input (E.g. if city/state/country is provided).
   */
    searchLatSW?: number
    /**
   * The North East longitude that is being searched, regardless of whether or not is actually provided as an input (E.g. if city/state/country is provided).
   */
    searchLonNE?: number
    /**
   * The South West longitude that is being searched, regardless of whether or not is actually provided as an input (E.g. if city/state/country is provided).
   */
    searchLonSW?: number
    /**
   * The page of results that this search viewed event was triggered on.
   */
    searchPage: number
    /**
   * The ISO-3166-2 region code that is being searched.
   */
    searchRegion?: string
    /**
   * Whether or not the map was visible/shown with this search. (based on the show/hide Map button at the top right of the search results page)
   */
    showMap: boolean
    /**
   * The date that the search for listing availability begins upon (inclusive).
   */
    startDate?: string | null
    /**
   * difference between start date and end date
   */
    tripLength?: number

  }
  'SearchViewed [v3]': {

    /**
   * The number of adults that the RV must sleep.
   */
    adults?: number
    /**
   * Whether or not the airport pickup flag is set in the search.
   */
    airportpickup?: boolean
    /**
   * The list of amenities that are selected in search options.
   */
    amenities?: unknown[]
    /**
   * The number of children that the RV must sleep.
   */
    children?: number
    /**
   * What the call to action was for the user to get to the search page (e.g. search, showmore, viewallrentals, rvfilter)
   */
    cta: string
    /**
   * If selected, the amount of days that they are flexible shifting their selected dates by (+ or - 3 days)
   */
    dateFlexibility?: number
    /**
   * difference between start date and current local time (time zone of IP)
   */
    daysOut?: number
    /**
   * Whether or not the delivery flag is set in the search.
   */
    delivery: boolean
    /**
   * The destination type as returned from google maps API. (e.g. campground, rv_park, park, amusement_park & locality)
   */
    destinationTypes?: unknown[]
    /**
   * The date that the search for listing availbility ends upon (exclusive).
   */
    endDate?: string | null
    /**
   * Whether or not the experience not required filter is enabled
   */
    experienceNotRequired?: boolean
    /**
   * Whether or not the festival and event friendly filter is enabled
   */
    festivalAndEventsFriendly?: boolean
    /**
   * Whether or not the instant book flag is set in the search.
   */
    instant: boolean
    /**
   * The listing category (e.g. TravelTrailer, Motorhome, RVCottage).
   */
    listingType?: string
    /**
   * The maximum length of the RV.
   */
    maxLength?: number
    /**
   * The maximum year of the RV.
   */
    maxRvYear?: number
    /**
   * The maximum weight of the RV.
   */
    maxWeight?: number
    /**
   * The minimum length of the RV.
   */
    minLength?: number
    /**
   * The minimum year of the RV.
   */
    minRvYear?: number
    /**
   * The minimum weight of the RV.
   */
    minWeight?: number
    /**
   * The total number of possible results returned from the backend (not representative of those actually shown).
   */
    numResults: number
    /**
   * The total number of possible results displayed on screen.
   */
    numResultsDisplayed: number
    /**
   * From where the user got to the search page (e.g. home, Top25)
   */
    pageSource: string
    /**
   * The nightly price maximum.
   */
    priceMax?: number
    /**
   * The nightly price minimum.
   */
    priceMin?: number
    /**
   * The unique ID of the listingSet request. Reused for ListingSetViewed and ListingSetPresented. (should be able to coorelate between events to determine which RVs were actually shown in the this SearchViewed event)
   */
    requestId?: string
    /**
   * The RV Manufacturer that is inputed as a search filter. If no RV Manufacturer inputed in field, this parameter should be blank
   */
    rvManufacturer?: string
    /**
   * The type of RV (e.g. Class A, Class B, Class C, Fifth Wheel, TentTrailer, Travel Trailer, etc.) that are selected in search filters.
   */
    rvType?: unknown[]
    /**
   * The location that is being searched, as per the text box.
   */
    searchAddress?: string
    /**
   * The city that is being searched.
   */
    searchCity?: string
    /**
   * The country that is being searched.
   */
    searchCountry?: string
    /**
   * The North East latitude that is being searched, regardless of whether or not is actually provided as an input (E.g. if city/state/country is provided).
   */
    searchLatNE?: number
    /**
   * The South West latitude that is being searched, regardless of whether or not is actually provided as an input (E.g. if city/state/country is provided).
   */
    searchLatSW?: number
    /**
   * The North East longitude that is being searched, regardless of whether or not is actually provided as an input (E.g. if city/state/country is provided).
   */
    searchLonNE?: number
    /**
   * The South West longitude that is being searched, regardless of whether or not is actually provided as an input (E.g. if city/state/country is provided).
   */
    searchLonSW?: number
    /**
   * The page of results that this search viewed event was triggered on.
   */
    searchPage: number
    /**
   * The ISO-3166-2 region code that is being searched.
   */
    searchRegion?: string
    /**
   * Whether or not the map was visible/shown with this search. (based on the show/hide Map button at the top right of the search results page)
   */
    showMap: boolean
    /**
   * The date that the search for listing availability begins upon (inclusive).
   */
    startDate?: string | null
    /**
   * difference between start date and end date
   */
    tripLength?: number

  }
  'SearchViewed [v4]': {

    /**
   * The number of adults that the RV must sleep.
   */
    adults?: number
    /**
   * Whether or not the airport pickup flag is set in the search.
   */
    airportpickup?: boolean
    /**
   * The list of amenities that are selected in search options.
   */
    amenities?: unknown[]
    /**
   * The number of children that the RV must sleep.
   */
    children?: number
    /**
   * What the call to action was for the user to get to the search page (e.g. search, showmore, viewallrentals, rvfilter)
   */
    cta: string
    /**
   * If selected, the amount of days that they are flexible shifting their selected dates by (+ or - 3 days)
   */
    dateFlexibility?: number
    /**
   * difference between start date and current local time (time zone of IP)
   */
    daysOut?: number
    /**
   * Whether or not the delivery flag is set in the search.
   */
    delivery: boolean
    /**
   * The destination type as returned from google maps API. (e.g. campground, rv_park, park, amusement_park & locality)
   */
    destinationTypes?: unknown[]
    /**
   * The date that the search for listing availbility ends upon (exclusive).
   */
    endDate?: string | null
    /**
   * Whether or not the experience not required filter is enabled
   */
    experienceNotRequired?: boolean
    /**
   * Whether or not the festival and event friendly filter is enabled
   */
    festivalAndEventsFriendly?: boolean
    /**
   * When the flexible date UI is used for search, then return true. If else, return false.
   */
    flexibleDates: boolean
    /**
   * What months the user click on within the flexible dates UI when answering the question: “When do you want to go?” Return the first date of the month(s) selected.
   */
    flexibleMonths?: unknown[]
    /**
   * What did the user click on within the flexible dates UI when answering the question: “How long would you like to stay?”
   */
    flexibleType?: string
    /**
   * Whether or not the instant book flag is set in the search.
   */
    instant: boolean
    /**
   * The listing category (e.g. TravelTrailer, Motorhome, RVCottage).
   */
    listingType?: string
    /**
   * The maximum length of the RV.
   */
    maxLength?: number
    /**
   * The maximum year of the RV.
   */
    maxRvYear?: number
    /**
   * The maximum weight of the RV.
   */
    maxWeight?: number
    /**
   * The minimum length of the RV.
   */
    minLength?: number
    /**
   * The minimum year of the RV.
   */
    minRvYear?: number
    /**
   * The minimum weight of the RV.
   */
    minWeight?: number
    /**
   * The total number of possible results returned from the backend (not representative of those actually shown).
   */
    numResults: number
    /**
   * The total number of possible results displayed on screen.
   */
    numResultsDisplayed: number
    /**
   * From where the user got to the search page (e.g. home, Top25)
   */
    pageSource: string
    /**
   * The nightly price maximum.
   */
    priceMax?: number
    /**
   * The nightly price minimum.
   */
    priceMin?: number
    /**
   * The unique ID of the listingSet request. Reused for ListingSetViewed and ListingSetPresented. (should be able to coorelate between events to determine which RVs were actually shown in the this SearchViewed event)
   */
    requestId?: string
    /**
   * The RV Manufacturer that is inputed as a search filter. If no RV Manufacturer inputed in field, this parameter should be blank
   */
    rvManufacturer?: string
    /**
   * The type of RV (e.g. Class A, Class B, Class C, Fifth Wheel, TentTrailer, Travel Trailer, etc.) that are selected in search filters.
   */
    rvType?: unknown[]
    /**
   * The location that is being searched, as per the text box.
   */
    searchAddress?: string
    /**
   * The city that is being searched.
   */
    searchCity?: string
    /**
   * The country that is being searched.
   */
    searchCountry?: string
    /**
   * The North East latitude that is being searched, regardless of whether or not is actually provided as an input (E.g. if city/state/country is provided).
   */
    searchLatNE?: number
    /**
   * The South West latitude that is being searched, regardless of whether or not is actually provided as an input (E.g. if city/state/country is provided).
   */
    searchLatSW?: number
    /**
   * The North East longitude that is being searched, regardless of whether or not is actually provided as an input (E.g. if city/state/country is provided).
   */
    searchLonNE?: number
    /**
   * The South West longitude that is being searched, regardless of whether or not is actually provided as an input (E.g. if city/state/country is provided).
   */
    searchLonSW?: number
    /**
   * The page of results that this search viewed event was triggered on.
   */
    searchPage: number
    /**
   * The ISO-3166-2 region code that is being searched.
   */
    searchRegion?: string
    /**
   * Whether or not the map was visible/shown with this search. (based on the show/hide Map button at the top right of the search results page)
   */
    showMap: boolean
    /**
   * The date that the search for listing availability begins upon (inclusive).
   */
    startDate?: string | null
    /**
   * difference between start date and end date
   */
    tripLength?: number

  }
  'SearchViewed [v5]': {

    /**
   * The number of adults that the RV must sleep.
   */
    adults?: number
    /**
   * Whether or not the airport pickup flag is set in the search.
   */
    airportpickup?: boolean
    /**
   * The list of amenities that are selected in search options.
   */
    amenities?: unknown[]
    /**
   * The number of children that the RV must sleep.
   */
    children?: number
    /**
   * What the call to action was for the user to get to the search page (e.g. search, showmore, viewallrentals, rvfilter)
   */
    cta?: string
    /**
   * If selected, the amount of days that they are flexible shifting their selected dates by (+ or - 3 days)
   */
    dateFlexibility?: number
    /**
   * difference between start date and current local time (time zone of IP)
   */
    daysOut?: number
    /**
   * Whether or not the delivery flag is set in the search.
   */
    delivery: boolean
    /**
   * The destination type as returned from google maps API. (e.g. campground, rv_park, park, amusement_park & locality)
   */
    destinationTypes?: unknown[]
    /**
   * The date that the search for listing availbility ends upon (exclusive).
   */
    endDate?: string | null
    /**
   * Whether or not the experience not required filter is enabled
   */
    experienceNotRequired?: boolean
    /**
   * Whether or not the festival and event friendly filter is enabled
   */
    festivalAndEventsFriendly?: boolean
    /**
   * When the flexible date UI is used for search, then return true. If else, return false.
   */
    flexibleDates: boolean
    /**
   * What months the user click on within the flexible dates UI when answering the question: “When do you want to go?” Return the first date of the month(s) selected.
   */
    flexibleMonths?: unknown[]
    /**
   * What did the user click on within the flexible dates UI when answering the question: “How long would you like to stay?”
   */
    flexibleType?: string
    /**
   * Whether or not the instant book flag is set in the search.
   */
    instant: boolean
    /**
   * The listing category (e.g. TravelTrailer, Motorhome, RVCottage).
   */
    listingType?: string
    /**
   * The maximum length of the RV.
   */
    maxLength?: number
    /**
   * The maximum year of the RV.
   */
    maxRvYear?: number
    /**
   * The maximum weight of the RV.
   */
    maxWeight?: number
    /**
   * The minimum length of the RV.
   */
    minLength?: number
    /**
   * The minimum year of the RV.
   */
    minRvYear?: number
    /**
   * The minimum weight of the RV.
   */
    minWeight?: number
    /**
   * The total number of possible results returned from the backend (not representative of those actually shown).
   */
    numResults: number
    /**
   * The total number of possible results displayed on screen.
   */
    numResultsDisplayed: number
    /**
   * From where the user got to the search page (e.g. home, Top25)
   */
    pageSource: string
    /**
   * The nightly price maximum.
   */
    priceMax?: number
    /**
   * The nightly price minimum.
   */
    priceMin?: number
    /**
   * The unique ID of the listingSet request. Reused for ListingSetViewed and ListingSetPresented. (should be able to coorelate between events to determine which RVs were actually shown in the this SearchViewed event)
   */
    requestId?: string
    /**
   * The RV Manufacturer that is inputed as a search filter. If no RV Manufacturer inputed in field, this parameter should be blank
   */
    rvManufacturer?: string
    /**
   * The type of RV (e.g. Class A, Class B, Class C, Fifth Wheel, TentTrailer, Travel Trailer, etc.) that are selected in search filters.
   */
    rvType?: unknown[]
    /**
   * The location that is being searched, as per the text box.
   */
    searchAddress?: string
    /**
   * The city that is being searched.
   */
    searchCity?: string
    /**
   * The country that is being searched.
   */
    searchCountry?: string
    /**
   * The North East latitude that is being searched, regardless of whether or not is actually provided as an input (E.g. if city/state/country is provided).
   */
    searchLatNE?: number
    /**
   * The South West latitude that is being searched, regardless of whether or not is actually provided as an input (E.g. if city/state/country is provided).
   */
    searchLatSW?: number
    /**
   * The North East longitude that is being searched, regardless of whether or not is actually provided as an input (E.g. if city/state/country is provided).
   */
    searchLonNE?: number
    /**
   * The South West longitude that is being searched, regardless of whether or not is actually provided as an input (E.g. if city/state/country is provided).
   */
    searchLonSW?: number
    /**
   * The page of results that this search viewed event was triggered on.
   */
    searchPage: number
    /**
   * The ISO-3166-2 region code that is being searched.
   */
    searchRegion?: string
    /**
   * Whether or not the map was visible/shown with this search. (based on the show/hide Map button at the top right of the search results page)
   */
    showMap: boolean
    /**
   * The date that the search for listing availability begins upon (inclusive).
   */
    startDate?: string | null
    /**
   * difference between start date and end date
   */
    tripLength?: number

  }
  'SearchViewed [v6]': {

    /**
   * The number of adults that the RV must sleep.
   */
    adults?: number
    /**
   * Whether or not the airport pickup flag is set in the search.
   */
    airportpickup?: boolean
    /**
   * The list of amenities that are selected in search options.
   */
    amenities?: unknown[]
    /**
   * The number of children that the RV must sleep.
   */
    children?: number
    /**
   * What the call to action was for the user to get to the search page (e.g. search, showmore, viewallrentals, rvfilter)
   */
    cta?: string
    /**
   * difference between start date and current local time (time zone of IP)
   */
    daysOut?: number
    /**
   * Whether or not the delivery flag is set in the search.
   */
    delivery: boolean
    /**
   * The destination type as returned from google maps API. (e.g. campground, rv_park, park, amusement_park & locality)
   */
    destinationTypes?: unknown[]
    /**
   * The date that the search for listing availbility ends upon (exclusive).
   */
    endDate?: string | null
    /**
   * Whether or not the experience not required filter is enabled
   */
    experienceNotRequired?: boolean
    /**
   * Whether or not the festival and event friendly filter is enabled
   */
    festivalAndEventsFriendly?: boolean
    /**
   * Whether or not the instant book flag is set in the search.
   */
    instant: boolean
    /**
   * The listing category (e.g. TravelTrailer, Motorhome, RVCottage).
   */
    listingType?: string
    /**
   * The maximum length of the RV.
   */
    maxLength?: number
    /**
   * The maximum year of the RV.
   */
    maxRvYear?: number
    /**
   * The maximum weight of the RV.
   */
    maxWeight?: number
    /**
   * The minimum length of the RV.
   */
    minLength?: number
    /**
   * The minimum year of the RV.
   */
    minRvYear?: number
    /**
   * The minimum weight of the RV.
   */
    minWeight?: number
    /**
   * The total number of possible results returned from the backend (not representative of those actually shown).
   */
    numResults: number
    /**
   * The total number of possible results displayed on screen.
   */
    numResultsDisplayed: number
    /**
   * From where the user got to the search page (e.g. home, Top25)
   */
    pageSource: string
    /**
   * The nightly price maximum.
   */
    priceMax?: number
    /**
   * The nightly price minimum.
   */
    priceMin?: number
    /**
   * The unique ID of the listingSet request. Reused for ListingSetViewed and ListingSetPresented. (should be able to coorelate between events to determine which RVs were actually shown in the this SearchViewed event)
   */
    requestId?: string
    /**
   * The RV Manufacturer that is inputed as a search filter. If no RV Manufacturer inputed in field, this parameter should be blank
   */
    rvManufacturer?: string
    /**
   * The type of RV (e.g. Class A, Class B, Class C, Fifth Wheel, TentTrailer, Travel Trailer, etc.) that are selected in search filters.
   */
    rvType?: unknown[]
    /**
   * The location that is being searched, as per the text box.
   */
    searchAddress?: string
    /**
   * The city that is being searched.
   */
    searchCity?: string
    /**
   * The country that is being searched.
   */
    searchCountry?: string
    /**
   * The North East latitude that is being searched, regardless of whether or not is actually provided as an input (E.g. if city/state/country is provided).
   */
    searchLatNE?: number
    /**
   * The South West latitude that is being searched, regardless of whether or not is actually provided as an input (E.g. if city/state/country is provided).
   */
    searchLatSW?: number
    /**
   * The North East longitude that is being searched, regardless of whether or not is actually provided as an input (E.g. if city/state/country is provided).
   */
    searchLonNE?: number
    /**
   * The South West longitude that is being searched, regardless of whether or not is actually provided as an input (E.g. if city/state/country is provided).
   */
    searchLonSW?: number
    /**
   * The page of results that this search viewed event was triggered on.
   */
    searchPage: number
    /**
   * The ISO-3166-2 region code that is being searched.
   */
    searchRegion?: string
    /**
   * Whether or not the map was visible/shown with this search. (based on the show/hide Map button at the top right of the search results page)
   */
    showMap: boolean
    /**
   * The date that the search for listing availability begins upon (inclusive).
   */
    startDate?: string | null
    /**
   * difference between start date and end date
   */
    tripLength?: number

  }
  'SearchViewed [v7]': {

    /**
   * The number of adults that the RV must sleep.
   */
    adults?: number
    /**
   * Whether or not the airport pickup flag is set in the search.
   */
    airportpickup?: boolean
    /**
   * The list of amenities that are selected in search options.
   */
    amenities?: unknown[]
    /**
   * Whether or not the budget friendly filter was applied.
   */
    budgetFriendly: boolean
    /**
   * The number of children that the RV must sleep.
   */
    children?: number
    /**
   * What the call to action was for the user to get to the search page (e.g. search, showmore, viewallrentals, rvfilter)
   */
    cta?: string
    /**
   * difference between start date and current local time (time zone of IP)
   */
    daysOut?: number
    /**
   * Whether or not the delivery flag is set in the search.
   */
    delivery: boolean
    /**
   * The destination type as returned from google maps API. (e.g. campground, rv_park, park, amusement_park & locality)
   */
    destinationTypes?: unknown[]
    /**
   * The date that the search for listing availbility ends upon (exclusive).
   */
    endDate?: string | null
    /**
   * Whether or not the experience not required filter is enabled
   */
    experienceNotRequired?: boolean
    /**
   * Whether or not the festival and event friendly filter is enabled
   */
    festivalAndEventsFriendly?: boolean
    /**
   * Whether or not the instant book flag is set in the search.
   */
    instant: boolean
    /**
   * The listing category (e.g. TravelTrailer, Motorhome, RVCottage).
   */
    listingType?: string
    /**
   * The maximum length of the RV.
   */
    maxLength?: number
    /**
   * The maximum year of the RV.
   */
    maxRvYear?: number
    /**
   * The maximum weight of the RV.
   */
    maxWeight?: number
    /**
   * Whether or not the midweek deals filter is applied.
   */
    midweekDeals: boolean
    /**
   * The minimum length of the RV.
   */
    minLength?: number
    /**
   * The minimum year of the RV.
   */
    minRvYear?: number
    /**
   * The minimum weight of the RV.
   */
    minWeight?: number
    /**
   * The total number of possible results returned from the backend (not representative of those actually shown).
   */
    numResults: number
    /**
   * The total number of possible results displayed on screen.
   */
    numResultsDisplayed: number
    /**
   * From where the user got to the search page (e.g. home, Top25)
   */
    pageSource: string
    /**
   * The nightly price maximum.
   */
    priceMax?: number
    /**
   * The nightly price minimum.
   */
    priceMin?: number
    /**
   * The unique ID of the listingSet request. Reused for ListingSetViewed and ListingSetPresented. (should be able to coorelate between events to determine which RVs were actually shown in the this SearchViewed event)
   */
    requestId?: string
    /**
   * The RV Manufacturer that is inputed as a search filter. If no RV Manufacturer inputed in field, this parameter should be blank
   */
    rvManufacturer?: string
    /**
   * The type of RV (e.g. Class A, Class B, Class C, Fifth Wheel, TentTrailer, Travel Trailer, etc.) that are selected in search filters.
   */
    rvType?: unknown[]
    /**
   * The location that is being searched, as per the text box.
   */
    searchAddress?: string
    /**
   * The city that is being searched.
   */
    searchCity?: string
    /**
   * The country that is being searched.
   */
    searchCountry?: string
    /**
   * The North East latitude that is being searched, regardless of whether or not is actually provided as an input (E.g. if city/state/country is provided).
   */
    searchLatNE?: number
    /**
   * The South West latitude that is being searched, regardless of whether or not is actually provided as an input (E.g. if city/state/country is provided).
   */
    searchLatSW?: number
    /**
   * The North East longitude that is being searched, regardless of whether or not is actually provided as an input (E.g. if city/state/country is provided).
   */
    searchLonNE?: number
    /**
   * The South West longitude that is being searched, regardless of whether or not is actually provided as an input (E.g. if city/state/country is provided).
   */
    searchLonSW?: number
    /**
   * The page of results that this search viewed event was triggered on.
   */
    searchPage: number
    /**
   * The ISO-3166-2 region code that is being searched.
   */
    searchRegion?: string
    /**
   * Whether or not the map was visible/shown with this search. (based on the show/hide Map button at the top right of the search results page)
   */
    showMap: boolean
    /**
   * The date that the search for listing availability begins upon (inclusive).
   */
    startDate?: string | null
    /**
   * difference between start date and end date
   */
    tripLength?: number

  }
  'SearchViewed [v8]': {

    /**
   * The number of adults that the RV must sleep.
   */
    adults?: number
    /**
   * Whether or not the airport pickup flag is set in the search.
   */
    airportpickup?: boolean
    /**
   * The list of amenities that are selected in search options.
   */
    amenities?: unknown[]
    /**
   * Whether or not the budget friendly filter was applied.
   */
    budgetFriendly: boolean
    /**
   * The number of children that the RV must sleep.
   */
    children?: number
    /**
   * What the call to action was for the user to get to the search page (e.g. search, showmore, viewallrentals, rvfilter)
   */
    cta?: string
    /**
   * difference between start date and current local time (time zone of IP)
   */
    daysOut?: number
    /**
   * Whether or not the delivery flag is set in the search.
   */
    delivery: boolean
    /**
   * The destination type as returned from google maps API. (e.g. campground, rv_park, park, amusement_park & locality)
   */
    destinationTypes?: unknown[]
    /**
   * The date that the search for listing availbility ends upon (exclusive).
   */
    endDate?: string | null
    /**
   * Whether or not the experience not required filter is enabled
   */
    experienceNotRequired?: boolean
    /**
   * Whether or not the festival and event friendly filter is enabled
   */
    festivalAndEventsFriendly?: boolean
    /**
   * Whether or not the instant book flag is set in the search.
   */
    instant: boolean
    /**
   * Whether or not a menu filter was applied to trigger the search.
   */
    isMenuFilterApplied: boolean
    /**
   * The listing category (e.g. TravelTrailer, Motorhome, RVCottage).
   */
    listingType?: string
    /**
   * The maximum length of the RV.
   */
    maxLength?: number
    /**
   * The maximum year of the RV.
   */
    maxRvYear?: number
    /**
   * The maximum weight of the RV.
   */
    maxWeight?: number
    /**
   * Whether or not the midweek deals filter is applied.
   */
    midweekDeals: boolean
    /**
   * The minimum length of the RV.
   */
    minLength?: number
    /**
   * The minimum year of the RV.
   */
    minRvYear?: number
    /**
   * The minimum weight of the RV.
   */
    minWeight?: number
    /**
   * The total number of possible results returned from the backend (not representative of those actually shown).
   */
    numResults: number
    /**
   * The total number of possible results displayed on screen.
   */
    numResultsDisplayed: number
    /**
   * From where the user got to the search page (e.g. home, Top25)
   */
    pageSource: string
    /**
   * The nightly price maximum.
   */
    priceMax?: number
    /**
   * The nightly price minimum.
   */
    priceMin?: number
    /**
   * The unique ID of the listingSet request. Reused for ListingSetViewed and ListingSetPresented. (should be able to coorelate between events to determine which RVs were actually shown in the this SearchViewed event)
   */
    requestId?: string
    /**
   * The RV Manufacturer that is inputed as a search filter. If no RV Manufacturer inputed in field, this parameter should be blank
   */
    rvManufacturer?: string
    /**
   * The type of RV (e.g. Class A, Class B, Class C, Fifth Wheel, TentTrailer, Travel Trailer, etc.) that are selected in search filters.
   */
    rvType?: unknown[]
    /**
   * The location that is being searched, as per the text box.
   */
    searchAddress?: string
    /**
   * The city that is being searched.
   */
    searchCity?: string
    /**
   * The country that is being searched.
   */
    searchCountry?: string
    /**
   * The North East latitude that is being searched, regardless of whether or not is actually provided as an input (E.g. if city/state/country is provided).
   */
    searchLatNE?: number
    /**
   * The South West latitude that is being searched, regardless of whether or not is actually provided as an input (E.g. if city/state/country is provided).
   */
    searchLatSW?: number
    /**
   * The North East longitude that is being searched, regardless of whether or not is actually provided as an input (E.g. if city/state/country is provided).
   */
    searchLonNE?: number
    /**
   * The South West longitude that is being searched, regardless of whether or not is actually provided as an input (E.g. if city/state/country is provided).
   */
    searchLonSW?: number
    /**
   * The page of results that this search viewed event was triggered on.
   */
    searchPage: number
    /**
   * The ISO-3166-2 region code that is being searched.
   */
    searchRegion?: string
    /**
   * Whether or not the map was visible/shown with this search. (based on the show/hide Map button at the top right of the search results page)
   */
    showMap: boolean
    /**
   * The date that the search for listing availability begins upon (inclusive).
   */
    startDate?: string | null
    /**
   * difference between start date and end date
   */
    tripLength?: number

  }
  'SecurityDepositReminder': {

    /**
   * The unique ID associated with the booking request.
   */
    bookingId: number
    /**
   * The state of the booking as is represented on the backend.
   */
    bookingState?: number
    /**
   * The method through which the booking was created.
   */
    bookingType?: 'enquiry' | 'ezmatch' | 'instant' | 'normal'
    /**
   * The ISO 4217 currency code that is displayed.
   */
    currency: 'AUD' | 'CAD' | 'EUR' | 'GBP' | 'NZD' | 'USD'
    /**
   * The host associated with this booking.
   */
    ownerId: number
    /**
   * The date on which the payment (for which the reminder is for) will be charged.
   */
    paymentDate: string
    /**
   * The total remaining payment left on this booking that should be charged through Stripe. This will always be the amount of security deposit since at this point, the total rental price should have been paid for (initial and/or full payments). This amount disregards any previous failed payment amounts.
   */
    remainingAmount: number
    /**
   * The amount that will be charged for the next payment for which the reminder is for. This amount is shown on the payment reminder sent to Guests. This amount disregards any previous failed payment amounts.
   */
    reminderAmount: number
    /**
   * The total amount that should be charged through Stripe on this booking until start of trip (this amount disregards Guests editing booking after this reminder or during trip). This will be total rental amount plus security deposit. This amount will always be the same across all payment reminders.
   */
    totalChargingAmount: number
    /**
   * The user ID of the the user (= Renter = Guest)
   */
    userId: number

  }
  'SecurityDepositReminder [v1]': {

    /**
   * The unique ID associated with the booking request.
   */
    bookingId: number
    /**
   * The state of the booking as is represented on the backend.
   */
    bookingState?: number
    /**
   * The method through which the booking was created.
   */
    bookingType?: 'enquiry' | 'ezmatch' | 'instant' | 'normal'
    /**
   * The ISO 4217 currency code that is displayed.
   */
    currency: 'aud' | 'cad' | 'eur' | 'gbp' | 'nzd' | 'usd'
    /**
   * The date on which the payment (for which the reminder is for) will be charged.
   */
    paymentDate: string
    /**
   * The total remaining payment left on this booking that should be charged through Stripe. This will always be the amount of security deposit since at this point, the total rental price should have been paid for (initial and/or full payments). This amount disregards any previous failed payment amounts.
   */
    remainingAmount: number
    /**
   * The amount that will be charged for the next payment for which the reminder is for. This amount is shown on the payment reminder sent to Guests. This amount disregards any previous failed payment amounts.
   */
    reminderAmount: number
    /**
   * The total amount that should be charged through Stripe on this booking until start of trip (this amount disregards Guests editing booking after this reminder or during trip). This will be total rental amount plus security deposit. This amount will always be the same across all payment reminders.
   */
    totalChargingAmount: number
    /**
   * The user ID of the the user (= Renter = Guest)
   */
    userId: number

  }
  'SecurityDepositReminder [v2]': {

    /**
   * The unique ID associated with the booking request.
   */
    bookingId: number
    /**
   * The state of the booking as is represented on the backend.
   */
    bookingState?: number
    /**
   * The method through which the booking was created.
   */
    bookingType?: 'enquiry' | 'ezmatch' | 'instant' | 'normal'
    /**
   * The ISO 4217 currency code that is displayed.
   */
    currency: 'aud' | 'cad' | 'eur' | 'gbp' | 'nzd' | 'usd'
    /**
   * The host associated with this booking.
   */
    ownerId: number
    /**
   * The date on which the payment (for which the reminder is for) will be charged.
   */
    paymentDate: string
    /**
   * The total remaining payment left on this booking that should be charged through Stripe. This will always be the amount of security deposit since at this point, the total rental price should have been paid for (initial and/or full payments). This amount disregards any previous failed payment amounts.
   */
    remainingAmount: number
    /**
   * The amount that will be charged for the next payment for which the reminder is for. This amount is shown on the payment reminder sent to Guests. This amount disregards any previous failed payment amounts.
   */
    reminderAmount: number
    /**
   * The total amount that should be charged through Stripe on this booking until start of trip (this amount disregards Guests editing booking after this reminder or during trip). This will be total rental amount plus security deposit. This amount will always be the same across all payment reminders.
   */
    totalChargingAmount: number
    /**
   * The user ID of the the user (= Renter = Guest)
   */
    userId: number

  }
  'SecurityDepositReminder [v3]': {

    /**
   * The unique ID associated with the booking request.
   */
    bookingId: number
    /**
   * The state of the booking as is represented on the backend.
   */
    bookingState?: number
    /**
   * The method through which the booking was created.
   */
    bookingType?: 'enquiry' | 'ezmatch' | 'instant' | 'normal'
    /**
   * The ISO 4217 currency code that is displayed.
   */
    currency: 'AUD' | 'CAD' | 'EUR' | 'GBP' | 'NZD' | 'USD'
    /**
   * The host associated with this booking.
   */
    ownerId: number
    /**
   * The date on which the payment (for which the reminder is for) will be charged.
   */
    paymentDate: string
    /**
   * The total remaining payment left on this booking that should be charged through Stripe. This will always be the amount of security deposit since at this point, the total rental price should have been paid for (initial and/or full payments). This amount disregards any previous failed payment amounts.
   */
    remainingAmount: number
    /**
   * The amount that will be charged for the next payment for which the reminder is for. This amount is shown on the payment reminder sent to Guests. This amount disregards any previous failed payment amounts.
   */
    reminderAmount: number
    /**
   * The total amount that should be charged through Stripe on this booking until start of trip (this amount disregards Guests editing booking after this reminder or during trip). This will be total rental amount plus security deposit. This amount will always be the same across all payment reminders.
   */
    totalChargingAmount: number
    /**
   * The user ID of the the user (= Renter = Guest)
   */
    userId: number

  }
  'SellMyRvClicked': {

    /**
   * The unique ID of the owner of the listing renter has sent the booking request for.
   */
    ownerId: number
    /**
   * The screen that the user came from. See pageSources.
   */
    pageSource: string
    /**
   *  The unique ID associated with an RV.
   */
    rvId?: string

  }
  'SellMyRvClicked [v1]': {

    /**
   * The unique ID of the owner of the listing renter has sent the booking request for.
   */
    ownerId: number
    /**
   * The screen that the user came from. See pageSources.
   */
    pageSource: string
    /**
   *  The unique ID associated with an RV.
   */
    rvId?: string

  }
  'SendMessageClicked': {

    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country where the user is located
   */
    accountCountry?: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * the cta the user clicked on to get to this screen. (ie. was it from the inbox message, or the bookings/trips card or host dashboard card, etc. )
   */
    cta?: string
    /**
   * The date that the requested booking is to end.
   */
    endDate: string
    /**
   * if the user who clicked o nthe card is an owner
   */
    isOwner: boolean
    /**
   * The last time that a message was received by the user viewing.
   */
    lastMessageReceived: string
    /**
   * The source screen that came before their next action if applicable
   */
    pageSource?: string
    /**
   * The date that the requested booking is to begin.
   */
    startDate: string
    /**
   * The user ID of the user who clicked on the card
   */
    userId: number

  }
  'SendMessageClicked [v1]': {

    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country where the user is located
   */
    accountCountry?: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * the cta the user clicked on to get to this screen. (ie. was it from the inbox message, or the bookings/trips card or host dashboard card, etc. )
   */
    cta?: string
    /**
   * The date that the requested booking is to end.
   */
    endDate: string
    /**
   * if the user who clicked o nthe card is an owner
   */
    isOwner: boolean
    /**
   * The last time that a message was received by the user viewing.
   */
    lastMessageReceived: string
    /**
   * The source screen that came before their next action if applicable
   */
    pageSource?: string
    /**
   * The date that the requested booking is to begin.
   */
    startDate: string
    /**
   * The user ID of the user who clicked on the card
   */
    userId: number

  }
  'SendMoneyBookingClicked': {

    /**
   * The unique booking number associated to the send money request the host is completing.
   */
    bookingId: number
    /**
   * The current booking stage
   */
    bookingStage: string
    /**
   * The end date of the booking at the time the host has clicked on “Send Money”
   */
    endDate: string
    /**
   * The start date of the booking at the time the host has clicked on “Send Money"
   */
    startDate: string
    /**
   * The total payout to the host of the booking they are trying to send money from
   */
    totalPayoutOriginal: number

  }
  'SendMoneyBookingClicked [v1]': {

    /**
   * The unique booking number associated to the send money request the host is completing.
   */
    bookingId: number
    /**
   * The current booking stage
   */
    bookingStage: string
    /**
   * The end date of the booking at the time the host has clicked on “Send Money”
   */
    endDate: string
    /**
   * The start date of the booking at the time the host has clicked on “Send Money"
   */
    startDate: string
    /**
   * The total payout to the host of the booking they are trying to send money from
   */
    totalPayoutOriginal: number

  }
  'SendMoneyExited': {

    /**
   * The unique booking number associated to the send money request the host is attempting
   */
    bookingId: number
    /**
   * The current booking stage
   */
    bookingStage: string
    /**
   * The end date of the booking at the time the host has attempted to send money
   */
    endDate: string
    /**
   * The start date of the booking at the time the host has attempted to send money
   */
    startDate: string
    /**
   * The total payout to the host of the booking they have attempted to send money from
   */
    totalPayoutOriginal: number

  }
  'SendMoneyExited [v1]': {

    /**
   * The unique booking number associated to the send money request the host is attempting
   */
    bookingId: number
    /**
   * The current booking stage
   */
    bookingStage: string
    /**
   * The end date of the booking at the time the host has attempted to send money
   */
    endDate: string
    /**
   * The start date of the booking at the time the host has attempted to send money
   */
    startDate: string
    /**
   * The total payout to the host of the booking they have attempted to send money from
   */
    totalPayoutOriginal: number

  }
  'SendMoneyFailed': {

    /**
   * The total value the host has successfully sent to the guest from their payout. This value is always equal to or lower than totalOriginalPayout
   */
    amountSent: number
    /**
   * The unique booking number associated to the send money request the host has attempted
   */
    bookingId: number
    /**
   * The current booking stage
   */
    bookingStage: string
    /**
   * The end date of the booking at the time the host has attempted to send money
   */
    endDate: string
    /**
   * The verbose error or warning received from the process that prevented sending money from host to a guest
   */
    error: string
    /**
   * The error code, as an integer, returned from the response
   */
    errorCode?: number
    /**
   * The reason the host has provided to the guest surrounding the reason to send the guest money
   */
    message: string
    /**
   * The remaining payout after the value selected to send to the guest is subtracted from the total original payout. This value is the difference of totalOriginalPayout and moneySent
   */
    remainingPayout: number
    /**
   * The start date of the booking at the time the host has attempted to send money
   */
    startDate: string
    /**
   * The total payout to the owner prior to successfully sending money
   */
    totalPayoutOriginal: number

  }
  'SendMoneyFailed [v1]': {

    /**
   * The total value the host has successfully sent to the guest from their payout. This value is always equal to or lower than totalOriginalPayout
   */
    amountSent: number
    /**
   * The unique booking number associated to the send money request the host has attempted
   */
    bookingId: number
    /**
   * The current booking stage
   */
    bookingStage: string
    /**
   * The end date of the booking at the time the host has attempted to send money
   */
    endDate: string
    /**
   * The verbose error or warning received from the process that prevented sending money from host to a guest
   */
    error: string
    /**
   * The error code, as an integer, returned from the response
   */
    errorCode?: number
    /**
   * The reason the host has provided to the guest surrounding the reason to send the guest money
   */
    message: string
    /**
   * The remaining payout after the value selected to send to the guest is subtracted from the total original payout. This value is the difference of totalOriginalPayout and moneySent
   */
    remainingPayout: number
    /**
   * The start date of the booking at the time the host has attempted to send money
   */
    startDate: string
    /**
   * The total payout to the owner prior to successfully sending money
   */
    totalPayoutOriginal: number

  }
  'SendMoneyReviewed': {

    /**
   * The total value the host has input to be sent to the guest from their payout. This value is always equal to or lower than totalOriginalPayout
   */
    amountSent: number
    /**
   * The unique booking number associated to the send money request the host is completing
   */
    bookingId: number
    /**
   * The current booking stage
   */
    bookingStage: string
    /**
   * The end date of the booking at the time the host has clicked on “Send Money”
   */
    endDate: string
    /**
   * The reason the host has provided to the guest surrounding the reason to send the guest money
   */
    message: string
    /**
   * The start date of the booking at the time the host has clicked on “Send Money”
   */
    startDate: string
    /**
   * The total payout to the host of the booking they are trying to send money from
   */
    totalPayoutOriginal: number

  }
  'SendMoneyReviewed [v1]': {

    /**
   * The total value the host has input to be sent to the guest from their payout. This value is always equal to or lower than totalOriginalPayout
   */
    amountSent: number
    /**
   * The unique booking number associated to the send money request the host is completing
   */
    bookingId: number
    /**
   * The current booking stage
   */
    bookingStage: string
    /**
   * The end date of the booking at the time the host has clicked on “Send Money”
   */
    endDate: string
    /**
   * The reason the host has provided to the guest surrounding the reason to send the guest money
   */
    message: string
    /**
   * The start date of the booking at the time the host has clicked on “Send Money”
   */
    startDate: string
    /**
   * The total payout to the host of the booking they are trying to send money from
   */
    totalPayoutOriginal: number

  }
  'SendMoneySubmitted': {

    /**
   * The total value the host has input to be sent to the guest from their payout. This value is always equal to or lower than totalOriginalPayout
   */
    amountSent: number
    /**
   * The unique booking number associated to the send money request the host is completing
   */
    bookingId: number
    /**
   * The current booking stage
   */
    bookingStage: string
    /**
   * The end date of the booking at the time the host has clicked on “Send Money”
   */
    endDate: string
    /**
   * The reason the host has provided to the guest surrounding the reason to send the guest money
   */
    message: string
    /**
   * The remaining payout after the value selected to send to the guest is subtracted from the total original payout. This value is the difference of totalOriginalPayout and moneySent
   */
    remainingPayout: number
    /**
   * The start date of the booking at the time the host has clicked on “Send Money”
   */
    startDate: string
    /**
   * The total payout to the owner of the booking they are trying to send money from
   */
    totalPayoutOriginal: number

  }
  'SendMoneySubmitted [v1]': {

    /**
   * The total value the host has input to be sent to the guest from their payout. This value is always equal to or lower than totalOriginalPayout
   */
    amountSent: number
    /**
   * The unique booking number associated to the send money request the host is completing
   */
    bookingId: number
    /**
   * The current booking stage
   */
    bookingStage: string
    /**
   * The end date of the booking at the time the host has clicked on “Send Money”
   */
    endDate: string
    /**
   * The reason the host has provided to the guest surrounding the reason to send the guest money
   */
    message: string
    /**
   * The remaining payout after the value selected to send to the guest is subtracted from the total original payout. This value is the difference of totalOriginalPayout and moneySent
   */
    remainingPayout: number
    /**
   * The start date of the booking at the time the host has clicked on “Send Money”
   */
    startDate: string
    /**
   * The total payout to the owner of the booking they are trying to send money from
   */
    totalPayoutOriginal: number

  }
  'SendMoneySuccessful': {

    /**
   * The total value the host has successfully sent to the guest from their payout. This value is always equal to or lower than totalOriginalPayout
   */
    amountSent: number
    /**
   * The unique booking number associated to the send money request the host has completed
   */
    bookingId: number
    /**
   * The current booking stage
   */
    bookingStage: string
    /**
   * The end date of the booking at the time the host has successfully  sent money to the guest
   */
    endDate: string
    /**
   * The guest ID associated to the user in which the host is sending money to, in this case the guest.
   */
    guestId: number
    /**
   * The reason the host has provided to the guest surrounding the reason to send the guest money
   */
    message: string
    /**
   * The remaining payout after the value selected to send to the guest is subtracted from the total original payout. This value is the difference of totalOriginalPayout and moneySent
   */
    remainingPayout: number
    /**
   * The start date of the booking at the time the host has successfully  sent money to the guest
   */
    startDate: string
    /**
   * The total payout to the owner prior to successfully sending money
   */
    totalPayoutOriginal: number

  }
  'SendMoneySuccessful [v1]': {

    /**
   * The total value the host has successfully sent to the guest from their payout. This value is always equal to or lower than totalOriginalPayout
   */
    amountSent: number
    /**
   * The unique booking number associated to the send money request the host has completed
   */
    bookingId: number
    /**
   * The current booking stage
   */
    bookingStage: string
    /**
   * The end date of the booking at the time the host has successfully  sent money to the guest
   */
    endDate: string
    /**
   * The reason the host has provided to the guest surrounding the reason to send the guest money
   */
    message: string
    /**
   * The remaining payout after the value selected to send to the guest is subtracted from the total original payout. This value is the difference of totalOriginalPayout and moneySent
   */
    remainingPayout: number
    /**
   * The start date of the booking at the time the host has successfully  sent money to the guest
   */
    startDate: string
    /**
   * The total payout to the owner prior to successfully sending money
   */
    totalPayoutOriginal: number

  }
  'SendMoneySuccessful [v2]': {

    /**
   * The total value the host has successfully sent to the guest from their payout. This value is always equal to or lower than totalOriginalPayout
   */
    amountSent: number
    /**
   * The unique booking number associated to the send money request the host has completed
   */
    bookingId: number
    /**
   * The current booking stage
   */
    bookingStage: string
    /**
   * The end date of the booking at the time the host has successfully  sent money to the guest
   */
    endDate: string
    /**
   * The guest ID associated to the user in which the host is sending money to, in this case the guest.
   */
    guestId: number
    /**
   * The reason the host has provided to the guest surrounding the reason to send the guest money
   */
    message: string
    /**
   * The remaining payout after the value selected to send to the guest is subtracted from the total original payout. This value is the difference of totalOriginalPayout and moneySent
   */
    remainingPayout: number
    /**
   * The start date of the booking at the time the host has successfully  sent money to the guest
   */
    startDate: string
    /**
   * The total payout to the owner prior to successfully sending money
   */
    totalPayoutOriginal: number

  }
  'ShareButtonClicked': {

    /**
   * The unique ID associated with the booking (same as booking number).
   */
    bookingId?: number
    /**
   * The page from which the share button was clicked
   */
    page: string
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId?: string
    /**
   * The platform to which the Trip or Listing is being shared
   */
    type: string
    /**
   * The URL of RV Page
   */
    url: string
    /**
   * UserID of the person sharing the RV
   */
    userId?: number

  }
  'ShareButtonClicked [v1]': {

    /**
   * The unique ID associated with the booking (same as booking number).
   */
    bookingId?: number
    /**
   * The page from which the share button was clicked
   */
    page: string
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId?: string
    /**
   * The platform to which the Trip or Listing is being shared
   */
    type: string
    /**
   * The URL of RV Page
   */
    url: string
    /**
   * UserID of the person sharing the RV
   */
    userId?: number

  }
  'ShortLinkClicked': {

    cta: string
    destination: string
    pageSource: string
    slug: string

  }
  'ShortLinkClicked [v1]': {

    cta: string
    destination: string
    pageSource: string
    slug: string

  }
  'Signed Up': {

    context?: {
    /**
     * The id of the account the user is joining.
     */
      groupId?: string
    }
    /**
   * The email of the user.
   */
    email?: string
    /**
   * The first name of the user.
   */
    first_name?: string
    /**
   * The last name of the user.
   */
    last_name?: string
    /**
   * The phone number of the user.
   */
    phone?: string
    /**
   * The title of the user.
   */
    title?: string
    /**
   * The type of signup, e.g. invited, organic.
   */
    type: string
    /**
   * The username of the user.
   */
    username?: string

  }
  'Signed Up [v1]': {

    context?: {
    /**
     * The id of the account the user is joining.
     */
      groupId?: string
    }
    /**
   * The email of the user.
   */
    email?: string
    /**
   * The first name of the user.
   */
    first_name?: string
    /**
   * The last name of the user.
   */
    last_name?: string
    /**
   * The phone number of the user.
   */
    phone?: string
    /**
   * The title of the user.
   */
    title?: string
    /**
   * The type of signup, e.g. invited, organic.
   */
    type: string
    /**
   * The username of the user.
   */
    username?: string

  }
  'SignupExited': {

    /**
   * The user type that was indicated on sign up. Is only true if coming from an owner page or “I’m interested in listing my RV” are checked.
   */
    isOwner?: boolean
    /**
   * The action that the user took to exit the process.Any of: close (X is clicked), clickoutside (area outside of modal is clicked), back (back button pressed or back gesture is recorded), providerexit (some action was detected in the provider that indicated that the user did not complete successfully), login (clicked to go to login screen instead)
   */
    response: 'clickoutside' | 'close' | 'esc' | 'login' | 'navigation' | 'providerexit'
    /**
   * The sign up type that is being followed. Can be fb, google, apple, email.
   */
    signupType?: 'apple' | 'email' | 'fb' | 'google' | null

  }
  'SignupExited [v1]': {

    /**
   * The user type that was indicated on sign up. Is only true if coming from an owner page or “I’m interested in listing my RV” are checked.
   */
    isOwner?: boolean
    /**
   * The action that the user took to exit the process.Any of: close (X is clicked), clickoutside (area outside of modal is clicked), back (back button pressed or back gesture is recorded), providerexit (some action was detected in the provider that indicated that the user did not complete successfully), login (clicked to go to login screen instead)
   */
    response: 'clickoutside' | 'close' | 'esc' | 'login' | 'navigation' | 'providerexit'
    /**
   * The sign up type that is being followed. Can be fb, google, apple, email.
   */
    signupType?: 'apple' | 'email' | 'fb' | 'google'

  }
  'SignupExited [v2]': {

    /**
   * The user type that was indicated on sign up. Is only true if coming from an owner page or “I’m interested in listing my RV” are checked.
   */
    isOwner?: boolean
    /**
   * The action that the user took to exit the process.Any of: close (X is clicked), clickoutside (area outside of modal is clicked), back (back button pressed or back gesture is recorded), providerexit (some action was detected in the provider that indicated that the user did not complete successfully), login (clicked to go to login screen instead)
   */
    response: 'clickoutside' | 'close' | 'esc' | 'login' | 'navigation' | 'providerexit'
    /**
   * The sign up type that is being followed. Can be fb, google, apple, email.
   */
    signupType?: 'apple' | 'email' | 'fb' | 'google' | null

  }
  'SignupFailed': {

    /**
   * The verbose error or warning received from the process that prevented the signup from being successful, or if no response is received, the verbose error as is generated by the client (e.g. in the event of a timeout).
   */
    error: string
    /**
   * The error code, as an integer, returned from the response.
   */
    errorCode?: number
    /**
   * The human readable error reason. Usually mapped against an action to present to the user (e.g. string in an error message toast/modal).
   */
    failReason: string
    /**
   * The HTTP status code on the response from the backend, if any is received.
   */
    httpStatus?: number
    /**
   * The user type that was indicated on sign up. Is only true if coming from an owner page or “I’m interested in listing my RV” are checked.
   */
    isOwner?: boolean
    /**
   * The sign up type that is being followed. Can be fb, google, apple, email.
   */
    signupType: 'apple' | 'email' | 'fb' | 'google'

  }
  'SignupFailed [v1]': {

    /**
   * The verbose error or warning received from the process that prevented the signup from being successful, or if no response is received, the verbose error as is generated by the client (e.g. in the event of a timeout).
   */
    error: string
    /**
   * The error code, as an integer, returned from the response.
   */
    errorCode?: number
    /**
   * The human readable error reason. Usually mapped against an action to present to the user (e.g. string in an error message toast/modal).
   */
    failReason: string
    /**
   * The HTTP status code on the response from the backend, if any is received.
   */
    httpStatus?: number
    /**
   * The user type that was indicated on sign up. Is only true if coming from an owner page or “I’m interested in listing my RV” are checked.
   */
    isOwner?: boolean
    /**
   * The sign up type that is being followed. Can be fb, google, apple, email.
   */
    signupType: 'apple' | 'email' | 'fb' | 'google'

  }
  'SignupSubmitted': {

    /**
   * The CTA on the signup that is prompting somebody to sign up. Used for special signup offers.
   */
    cta?: string
    /**
   * The email address of the user who signed up.
   */
    email: string
    /**
   * The first name of the signup user.
   */
    firstName?: string
    /**
   * The last name of the signup user.
   */
    lastName?: string
    /**
   * The screen that the user came from.
   */
    pageSource?: string
    /**
   * The user type that was indicated on sign up. Is only true if coming from an owner page or “I’m interested in listing my RV” are checked.
   */
    signupAs: 'Other' | 'Owner' | 'Renter'
    /**
   * The sign up type that is being followed. Can be fb, google, apple, email.
   */
    signupType: 'apple' | 'email' | 'fb' | 'google'

  }
  'SignupSubmitted [v3]': {

    /**
   * The CTA on the signup that is prompting somebody to sign up. Used for special signup offers.
   */
    cta?: string
    /**
   * The email address of the user who signed up.
   */
    email: string
    /**
   * The first name of the signup user.
   */
    firstName?: string
    /**
   * The last name of the signup user.
   */
    lastName?: string
    /**
   * The screen that the user came from.
   */
    pageSource?: string
    /**
   * The user type that was indicated on sign up. Is only true if coming from an owner page or “I’m interested in listing my RV” are checked.
   */
    signupAs: 'Other' | 'Owner' | 'Renter'
    /**
   * The sign up type that is being followed. Can be fb, google, apple, email.
   */
    signupType: 'apple' | 'email' | 'fb' | 'google'

  }
  'SignupSuccessful': {

    /**
   * The CTA on the signup that is prompting somebody to sign up. Used for special signup offers.
   */
    cta?: string
    /**
   * The email address of the user who signed up.
   */
    email: string
    /**
   * The first name of the signup user.
   */
    firstName?: string
    /**
   * The full name of the signup user.
   */
    fullName?: string
    /**
   * The last name of the signup user.
   */
    lastName?: string
    /**
   * The screen that the user came from.
   */
    pageSource: string
    /**
   * The user type that was indicated on sign up. Is only true if coming from an owner page or “I’m interested in listing my RV” are checked.
   */
    signupAs: 'Other' | 'Owner' | 'Renter'
    /**
   * The sign up type that is being followed. Can be fb, google, apple, email.
   */
    signupType: 'apple' | 'email' | 'fb' | 'google'

  }
  'SignupSuccessful [v1]': {

    /**
   * The CTA on the signup that is prompting somebody to sign up. Used for special signup offers.
   */
    cta?: string
    /**
   * The user type that was indicated on sign up. Is only true if coming from an owner page or “I’m interested in listing my RV” are checked.
   */
    isOwner: boolean
    /**
   * The screen that the user came from.
   */
    pageSource: string
    /**
   * A referral code for platforms like FriendBuy
   */
    referralCode?: string
    /**
   * The vendor of the referral code (if applicable).  Example:  FriendBuy
   */
    referralCodeVendor?: string
    /**
   * ID of the signup session on the website (which should have the rvType and listingYear that the new user has inputted during signup flow)
   */
    sessionId?: string
    /**
   * The sign up type that is being followed. Can be fb, google, apple, email.
   */
    signupType: 'apple' | 'email' | 'fb' | 'google'
    /**
   * The ID of the user, corresponding to Profile ID in our user table
   */
    userId?: string

  }
  'SignupSuccessful [v2]': {

    /**
   * The CTA on the signup that is prompting somebody to sign up. Used for special signup offers.
   */
    cta?: string
    /**
   * The email address of the user who signed up.
   */
    email: string
    /**
   * The first name of the signup user.
   */
    firstName?: string
    /**
   * The full name of the signup user.
   */
    fullName?: string
    /**
   * The user type that was indicated on sign up. Is only true if coming from an owner page or “I’m interested in listing my RV” are checked.
   */
    isOwner: boolean
    /**
   * The last name of the signup user.
   */
    lastName?: string
    /**
   * The screen that the user came from.
   */
    pageSource: string
    /**
   * A referral code for platforms like FriendBuy
   */
    referralCode?: string
    /**
   * The vendor of the referral code (if applicable).  Example:  FriendBuy
   */
    referralCodeVendor?: string
    /**
   * ID of the signup session on the website (which should have the rvType and listingYear that the new user has inputted during signup flow)
   */
    sessionId?: string
    /**
   * The sign up type that is being followed. Can be fb, google, apple, email.
   */
    signupType: 'apple' | 'email' | 'fb' | 'google'
    /**
   * The ID of the user, corresponding to Profile ID in our user table
   */
    userId?: string

  }
  'SignupSuccessful [v3]': {

    /**
   * The CTA on the signup that is prompting somebody to sign up. Used for special signup offers.
   */
    cta?: string
    /**
   * The email address of the user who signed up.
   */
    email: string
    /**
   * The first name of the signup user.
   */
    firstName?: string
    /**
   * The full name of the signup user.
   */
    fullName?: string
    /**
   * The last name of the signup user.
   */
    lastName?: string
    /**
   * The screen that the user came from.
   */
    pageSource: string
    /**
   * The user type that was indicated on sign up. Is only true if coming from an owner page or “I’m interested in listing my RV” are checked.
   */
    signupAs: 'Other' | 'Owner' | 'Renter'
    /**
   * The sign up type that is being followed. Can be fb, google, apple, email.
   */
    signupType: 'apple' | 'email' | 'fb' | 'google'

  }
  'SignupViewed': {

    /**
   * The CTA that got the user to this screen.
   */
    cta?: string
    /**
   * The user type that was indicated on sign up. Is only true if coming from an owner page or “I’m interested in listing my RV” are checked.
   */
    isOwner?: boolean
    /**
   * The screen that the user came from.
   */
    pageSource: string
    /**
   * The sign up types that are available to be used and are shown on the screen. Can be fb, google, apple, email.
   */
    signupTypes: unknown[]

  }
  'SignupViewed [v1]': {

    /**
   * The CTA that got the user to this screen.
   */
    cta?: string
    /**
   * The user type that was indicated on sign up. Is only true if coming from an owner page or “I’m interested in listing my RV” are checked.
   */
    isOwner?: boolean
    /**
   * The screen that the user came from.
   */
    pageSource: string
    /**
   * The sign up types that are available to be used and are shown on the screen. Can be fb, google, apple, email.
   */
    signupTypes: unknown[]

  }
  'SnoozeClicked': {

    /**
   * The new state of the snooze feature after it has been toggled.
   */
    isSnoozed: boolean
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId?: string
    /**
   * What is being snoozed - the listing or the entire hosts’s account.
   */
    snoozeType: 'listing' | 'profile'

  }
  'SnoozeClicked [v1]': {

    /**
   * The new state of the snooze feature after it has been toggled.
   */
    isSnoozed: boolean
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId?: string
    /**
   * What is being snoozed - the listing or the entire hosts’s account.
   */
    snoozeType: 'listing' | 'profile'

  }
  'SortMenuClosed': {

  }
  'SortMenuClosed [v1]': {

  }
  'SortMenuViewed': {

  }
  'SortMenuViewed [v1]': {

  }
  'SortOptionClicked': {

    /**
   * The selected sorting option.
   */
    sortOption: 'distanceasc' | 'priceasc' | 'pricedesc' | 'recommended'

  }
  'SortOptionClicked [v1]': {

    /**
   * The selected sorting option.
   */
    sortOption: 'distanceasc' | 'priceasc' | 'pricedesc' | 'recommended'

  }
  'SpecialOfferFormSubmittedSuccessfully': {

    /**
   * The total auto-populated price for all selected addons in the price section of the special offer form when submitted
   */
    addOnPrice?: number
    /**
   * Array of key value pair of the addon type (e.g. icon), name, price, and pricing type that is added to the form when submitted. NOTE: “Struct” is a BigQuery data type, and is ingestible as a JSON object
   */
    addOns?: unknown[]
    /**
   * The unique ID associated with the booking (same as booking number).
   */
    bookingId: number
    /**
   * The state of the booking when the form was submitted.
   */
    bookingState: number
    /**
   * The method through which the booking was created.
   */
    bookingType: string
    /**
   * The ISO 4217 currency code displayed on hte form
   */
    currency: string
    /**
   * The selected delivery and their rate when the form was submitted
   */
    delivery?: {}
    /**
   * The date that the requested booking is to end when form was submitted.
   */
    endDate: string
    /**
   * Whether the booking originated from an Ezymatch offer
   */
    isEzymatch: boolean
    /**
   * The city that the listing is based in.
   */
    listingCity?: string
    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    listingCountry?: string
    /**
   * The region the listing is based in
   */
    listingRegion?: string
    /**
   * Rental category of vehicle booked.
   */
    listingType: string
    /**
   * The message added into the form when submitted. If the form used is generated through the Pre-approve CTA then this field will not appear on the form
   */
    message?: string
    /**
   * The ID of the guest that receives the special offer.
   */
    receiverUserId: number
    /**
   * The quoted rental price for total nights only that is displayed when submitted.
   */
    rentalPrice: number
    /**
   * The unique ID associated with an RV.
   */
    rvId: string
    /**
   * Specific RV type of vehicle booked.
   */
    rvType: string
    /**
   * The date that the requested booking is to begin when form was submitted.
   */
    startDate: string
    /**
   * The total dollar value of the host payout visible on the special offer form when submitted
   */
    totalPayout: number
    /**
   * Difference between start date and the current date. (how many days out does the trip start)
   */
    tripLeadTime: number
    /**
   * Difference between start date and end date. Effectively, the number of nights for a trip
   */
    tripLength: number

  }
  'SpecialOfferFormSubmittedSuccessfully [v1]': {

    /**
   * The total auto-populated price for all selected addons in the price section of the special offer form when submitted
   */
    addOnPrice?: number
    /**
   * Array of key value pair of the addon type (e.g. icon), name, price, and pricing type that is added to the form when submitted. NOTE: “Struct” is a BigQuery data type, and is ingestible as a JSON object
   */
    addOns?: unknown[]
    /**
   * The unique ID associated with the booking (same as booking number).
   */
    bookingId: number
    /**
   * The state of the booking when the form was submitted.
   */
    bookingState: number
    /**
   * The method through which the booking was created.
   */
    bookingType: string
    /**
   * The ISO 4217 currency code displayed on hte form
   */
    currency: string
    /**
   * The selected delivery and their rate when the form was submitted
   */
    delivery?: {}
    /**
   * The date that the requested booking is to end when form was submitted.
   */
    endDate: string
    /**
   * Whether the booking originated from an Ezymatch offer
   */
    isEzymatch: boolean
    /**
   * The city that the listing is based in.
   */
    listingCity?: string
    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    listingCountry?: string
    /**
   * The region the listing is based in
   */
    listingRegion?: string
    /**
   * Rental category of vehicle booked.
   */
    listingType: string
    /**
   * The message added into the form when submitted. If the form used is generated through the Pre-approve CTA then this field will not appear on the form
   */
    message?: string
    /**
   * The ID of the guest that receives the special offer.
   */
    receiverUserId: number
    /**
   * The quoted rental price for total nights only that is displayed when submitted.
   */
    rentalPrice: number
    /**
   * The unique ID associated with an RV.
   */
    rvId: string
    /**
   * Specific RV type of vehicle booked.
   */
    rvType: string
    /**
   * The date that the requested booking is to begin when form was submitted.
   */
    startDate: string
    /**
   * The total dollar value of the host payout visible on the special offer form when submitted
   */
    totalPayout: number
    /**
   * Difference between start date and the current date. (how many days out does the trip start)
   */
    tripLeadTime: number
    /**
   * Difference between start date and end date. Effectively, the number of nights for a trip
   */
    tripLength: number

  }
  'SpecialOfferFormViewed': {

    /**
   * The total auto-populated price for all selected addons in the price section
   */
    addOnPrice?: number
    /**
   * The auto-selected add-ons and their rateArray of key value pair of the addon type (e.g. icon), name, price, and pricing type that is added to the booking. NOTE: “Struct” is a BigQuery data type, and is ingestible as a JSON object
   */
    addOns?: unknown[]
    /**
   * The unique ID associated with the booking (same as booking number).
   */
    bookingId: number
    /**
   * The state of the booking as is represented on the backend.
   */
    bookingState: number
    /**
   * The method through which the booking was created.
   */
    bookingType: string
    /**
   * The call to action that led to this booking request, as passed by the front end.
   */
    cta?: string
    /**
   * The ISO 4217 currency code displayed
   */
    currency: string
    /**
   * The auto-selected delivery and their rateArray of key value pair of the delivery radius (e.g. icon), name, price
   */
    delivery?: {}
    /**
   * The auto-populated end date on the form
   */
    endDate: string
    /**
   * Whether the booking originated from an Ezymatch offer
   */
    isEzymatch: boolean
    /**
   * The city that the listing is based in.
   */
    listingCity?: string
    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    listingCountry?: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * The region the listing is based in
   */
    listingRegion?: string
    /**
   * Rental category of vehicle booked.
   */
    listingType: string
    /**
   * The auto-populated rental price for total nights
   */
    rentalPrice: number
    /**
   * The unique ID associated with an RV.
   */
    rvId: string
    /**
   * Specific RV type of vehicle booked.
   */
    rvType: string
    /**
   * The auto-populated start date on the form
   */
    startDate: string
    /**
   * The total dollar value of the host payout for the entire rental.
   */
    totalPayout: number
    /**
   * Difference between start date and the current date when the host is viewing the form. (how many days out does the trip start)
   */
    tripLeadTime: number
    /**
   * Difference between start date and end date. Effectively, the number of nights for a trip, based on the auto-populated dates
   */
    tripLength: number

  }
  'SpecialOfferFormViewed [v1]': {

    /**
   * The total auto-populated price for all selected addons in the price section
   */
    addOnPrice?: number
    /**
   * The auto-selected add-ons and their rateArray of key value pair of the addon type (e.g. icon), name, price, and pricing type that is added to the booking. NOTE: “Struct” is a BigQuery data type, and is ingestible as a JSON object
   */
    addOns?: {}
    /**
   * The unique ID associated with the booking (same as booking number).
   */
    bookingId: number
    /**
   * The state of the booking as is represented on the backend.
   */
    bookingState: number
    /**
   * The method through which the booking was created.
   */
    bookingType: string
    /**
   * The call to action that led to this booking request, as passed by the front end.
   */
    cta?: string
    /**
   * The ISO 4217 currency code displayed
   */
    currency: string
    /**
   * The auto-selected delivery and their rateArray of key value pair of the delivery radius (e.g. icon), name, price
   */
    delivery?: {}
    /**
   * The auto-populated end date on the form
   */
    endDate: string
    /**
   * Whether the booking originated from an Ezymatch offer
   */
    isEzymatch: boolean
    /**
   * The city that the listing is based in.
   */
    listingCity?: string
    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    listingCountry?: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * The region the listing is based in
   */
    listingRegion?: string
    /**
   * Rental category of vehicle booked.
   */
    listingType: string
    /**
   * The auto-populated rental price for total nights
   */
    rentalPrice: number
    /**
   * The unique ID associated with an RV.
   */
    rvId: string
    /**
   * Specific RV type of vehicle booked.
   */
    rvType: string
    /**
   * The auto-populated start date on the form
   */
    startDate: string
    /**
   * The total dollar value of the host payout for the entire rental.
   */
    totalPayout: number
    /**
   * Difference between start date and the current date when the host is viewing the form. (how many days out does the trip start)
   */
    tripLeadTime: number
    /**
   * Difference between start date and end date. Effectively, the number of nights for a trip, based on the auto-populated dates
   */
    tripLength: number

  }
  'SpecialOfferFormViewed [v2]': {

    /**
   * The total auto-populated price for all selected addons in the price section
   */
    addOnPrice?: number
    /**
   * The auto-selected add-ons and their rateArray of key value pair of the addon type (e.g. icon), name, price, and pricing type that is added to the booking. NOTE: “Struct” is a BigQuery data type, and is ingestible as a JSON object
   */
    addOns?: unknown[]
    /**
   * The unique ID associated with the booking (same as booking number).
   */
    bookingId: number
    /**
   * The state of the booking as is represented on the backend.
   */
    bookingState: number
    /**
   * The method through which the booking was created.
   */
    bookingType: string
    /**
   * The call to action that led to this booking request, as passed by the front end.
   */
    cta?: string
    /**
   * The ISO 4217 currency code displayed
   */
    currency: string
    /**
   * The auto-selected delivery and their rateArray of key value pair of the delivery radius (e.g. icon), name, price
   */
    delivery?: {}
    /**
   * The auto-populated end date on the form
   */
    endDate: string
    /**
   * Whether the booking originated from an Ezymatch offer
   */
    isEzymatch: boolean
    /**
   * The city that the listing is based in.
   */
    listingCity?: string
    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    listingCountry?: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * The region the listing is based in
   */
    listingRegion?: string
    /**
   * Rental category of vehicle booked.
   */
    listingType: string
    /**
   * The auto-populated rental price for total nights
   */
    rentalPrice: number
    /**
   * The unique ID associated with an RV.
   */
    rvId: string
    /**
   * Specific RV type of vehicle booked.
   */
    rvType: string
    /**
   * The auto-populated start date on the form
   */
    startDate: string
    /**
   * The total dollar value of the host payout for the entire rental.
   */
    totalPayout: number
    /**
   * Difference between start date and the current date when the host is viewing the form. (how many days out does the trip start)
   */
    tripLeadTime: number
    /**
   * Difference between start date and end date. Effectively, the number of nights for a trip, based on the auto-populated dates
   */
    tripLength: number

  }
  'SpecialOfferSent': {

    /**
   * The total price for all selected addons.
   */
    addonPrice?: number
    /**
   * Array of key value pair of the addon type (e.g. icon), name, price, and pricing type that is added to the booking. NOTE: “Struct” is a BigQuery data type, and is ingestible as a JSON object
   */
    addons?: unknown[]
    /**
   * The number of adults that the requested booking will have.
   */
    adults: number
    /**
   * The unique ID associated with the booking (same as booking number).
   */
    bookingId: number
    /**
   * The state of the booking as is represented on the backend.
   */
    bookingState: number
    /**
   * The method through which the booking was created.
   */
    bookingType?: string
    /**
   * The number of children that the requested booking will have.
   */
    children: number
    /**
   * The quoted price for cleaning.
   */
    cleaningPrice?: number
    /**
   * The ISO 4217 currency code displayed
   */
    currency: 'AUD' | 'CAD' | 'EUR' | 'GBP' | 'NZD' | 'USD'
    /**
   * maximum distance in kilometers that the add-on is offering (ie. if I choose up to 100km option, this parameter shows 100km )
   */
    deliveryDistance?: number
    /**
   * The total price for delivery option selected
   */
    deliveryPrice?: number
    /**
   * The string that the Google Maps API returns as the name of the destination
   */
    destination?: string
    /**
   * The extra price per KM that is charged above the freeDistanceKms.
   */
    distancePriceKms?: number
    /**
   * The date that the requested booking is to end.
   */
    endDate: string
    /**
   * The name of the festival or event that the guest has said they will be attending
   */
    festivalName?: string
    /**
   * The total number of free kilometers included for the RV. Natural rounding and conversion to KMs if quoted in miles.
   */
    freeDistanceKms: number | null
    /**
   * The number of free generator hours for the entire rental (not daily).
   */
    freeGeneratorHours?: number
    /**
   * If the rental charges per hour for generator usage.
   */
    generatorPriceHourly?: number
    /**
   * whether or not this booking request includes Delivery
   */
    hasDelivery: boolean
    /**
   * Whether the booking request has pets
   */
    hasPets: boolean
    /**
   * Whether the guest has experience towing a similar trailer (true = yes, false = no). If this question is not required on a booking request then this field should not be recorded as true or false
   */
    hasTowingExperience?: boolean
    /**
   * The quoted price for insurance.
   */
    insurancePrice: number
    /**
   * Whether the guest is attending a festival (true = yes, false = no). If this question is not required on a booking request then this field should not be recorded as true or false
   */
    isAttendingFestival?: boolean
    /**
   * Whether the booking originated from an Ezymatch offer
   */
    isEzymatch: boolean
    /**
   * whether or not this booking is planning on moving the RV after delivery or not. (based on the question asked on the first page of the booking flow)
   */
    isStationaryDelivery?: boolean
    /**
   * The city that the listing is based in.
   */
    listingCity?: string
    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    listingCountry?: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * The region the listing is based in
   */
    listingRegion?: string
    /**
   * Rental category of vehicle booked.
   */
    listingType: string
    /**
   * The message attached to the booking. Applies to all booking types.
   */
    message?: string
    /**
   * The number of drivers that have been added to the booking.
   */
    numDrivers: number
    /**
   * The ID of the guest that receives the special offer.
   */
    receiverUserId: number
    /**
   * The quoted rental price for total nights only that is displayed.
   */
    rentalPrice: number
    /**
   * The quoted price for roadside assistance.
   */
    roadsidePrice: number
    /**
   * Specific RV type of vehicle booked.
   */
    rvType: string
    /**
   * The unique ID associated with an RV.
   */
    rvid: string
    /**
   * The quoted security deposit that will be taken on the security deposit date.
   */
    securityDepositPrice: number
    /**
   * The quoted service fee paid to RVezy.
   */
    servicePrice: number
    /**
   * The date that the requested booking is to begin.
   */
    startDate: string
    /**
   * The total dollar value of the host payout for the entire rental.
   */
    totalPayout: number
    /**
   * The total dollar value for the entire rental that is displayed.
   */
    totalPrice: number
    /**
   * Difference between start date and the current date. (how many days out does the trip start)
   */
    tripLeadTime: number
    /**
   * Difference between start date and end date. Effectively, the number of nights for a trip
   */
    tripLength: number

  }
  'SpecialOfferSent [v1]': {

    /**
   * The total price for all selected addons.
   */
    addonPrice?: number
    /**
   * Array of key value pair of the addon type (e.g. icon), name, price, and pricing type that is added to the booking. NOTE: “Struct” is a BigQuery data type, and is ingestible as a JSON object
   */
    addons?: unknown[]
    /**
   * The number of adults that the requested booking will have.
   */
    adults: number
    /**
   * The unique ID associated with the booking (same as booking number).
   */
    bookingId: number
    /**
   * The state of the booking as is represented on the backend.
   */
    bookingState: number
    /**
   * The method through which the booking was created.
   */
    bookingType?: string
    /**
   * The number of children that the requested booking will have.
   */
    children: number
    /**
   * The quoted price for cleaning.
   */
    cleaningPrice?: number
    /**
   * The ISO 4217 currency code displayed
   */
    currency: string
    /**
   * maximum distance in kilometers that the add-on is offering (ie. if I choose up to 100km option, this parameter shows 100km )
   */
    deliveryDistance?: number
    /**
   * The total price for delivery option selected
   */
    deliveryPrice?: number
    /**
   * The string that the Google Maps API returns as the name of the destination
   */
    destination?: string
    /**
   * The extra price per KM that is charged above the freeDistanceKms.
   */
    distancePriceKms?: number
    /**
   * The date that the requested booking is to end.
   */
    endDate: string
    /**
   * The name of the festival or event that the guest has said they will be attending
   */
    festivalName?: string
    /**
   * The total number of free kilometers included for the RV. Natural rounding and conversion to KMs if quoted in miles.
   */
    freeDistanceKms: number
    /**
   * The number of free generator hours for the entire rental (not daily).
   */
    freeGeneratorHours?: number
    /**
   * If the rental charges per hour for generator usage.
   */
    generatorPriceHourly?: number
    /**
   * whether or not this booking request includes Delivery
   */
    hasDelivery: boolean
    /**
   * Whether the booking request has pets
   */
    hasPets: boolean
    /**
   * Whether the guest has experience towing a similar trailer (true = yes, false = no). If this question is not required on a booking request then this field should not be recorded as true or false
   */
    hasTowingExperience?: boolean
    /**
   * The quoted price for insurance.
   */
    insurancePrice: number
    /**
   * Whether the guest is attending a festival (true = yes, false = no). If this question is not required on a booking request then this field should not be recorded as true or false
   */
    isAttendingFestival?: boolean
    /**
   * Whether the booking originated from an Ezymatch offer
   */
    isEzymatch: boolean
    /**
   * whether or not this booking is planning on moving the RV after delivery or not. (based on the question asked on the first page of the booking flow)
   */
    isStationaryDelivery?: boolean
    /**
   * The city that the listing is based in.
   */
    listingCity?: string
    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    listingCountry?: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * The region the listing is based in
   */
    listingRegion?: string
    /**
   * Rental category of vehicle booked.
   */
    listingType: string
    /**
   * The message attached to the booking. Applies to all booking types.
   */
    message?: string
    /**
   * The number of drivers that have been added to the booking.
   */
    numDrivers: number
    /**
   * The ID of the guest that receives the special offer.
   */
    receiverUserId: number
    /**
   * The quoted rental price for total nights only that is displayed.
   */
    rentalPrice: number
    /**
   * The quoted price for roadside assistance.
   */
    roadsidePrice: number
    /**
   * Specific RV type of vehicle booked.
   */
    rvType: string
    /**
   * The unique ID associated with an RV.
   */
    rvid: string
    /**
   * The quoted security deposit that will be taken on the security deposit date.
   */
    securityDepositPrice: number
    /**
   * The quoted service fee paid to RVezy.
   */
    servicePrice: number
    /**
   * The date that the requested booking is to begin.
   */
    startDate: string
    /**
   * The total dollar value of the host payout for the entire rental.
   */
    totalPayout: number
    /**
   * The total dollar value for the entire rental that is displayed.
   */
    totalPrice: number
    /**
   * Difference between start date and the current date. (how many days out does the trip start)
   */
    tripLeadTime: number
    /**
   * Difference between start date and end date. Effectively, the number of nights for a trip
   */
    tripLength: number

  }
  'SpecialOfferSent [v2]': {

    /**
   * The total price for all selected addons.
   */
    addonPrice?: number
    /**
   * Array of key value pair of the addon type (e.g. icon), name, price, and pricing type that is added to the booking. NOTE: “Struct” is a BigQuery data type, and is ingestible as a JSON object
   */
    addons?: unknown[]
    /**
   * The number of adults that the requested booking will have.
   */
    adults: number
    /**
   * The unique ID associated with the booking (same as booking number).
   */
    bookingId: number
    /**
   * The state of the booking as is represented on the backend.
   */
    bookingState: number
    /**
   * The method through which the booking was created.
   */
    bookingType?: string
    /**
   * The number of children that the requested booking will have.
   */
    children: number
    /**
   * The quoted price for cleaning.
   */
    cleaningPrice?: number
    /**
   * The ISO 4217 currency code displayed
   */
    currency: 'AUD' | 'CAD' | 'EUR' | 'GBP' | 'NZD' | 'USD'
    /**
   * maximum distance in kilometers that the add-on is offering (ie. if I choose up to 100km option, this parameter shows 100km )
   */
    deliveryDistance?: number
    /**
   * The total price for delivery option selected
   */
    deliveryPrice?: number
    /**
   * The string that the Google Maps API returns as the name of the destination
   */
    destination?: string
    /**
   * The extra price per KM that is charged above the freeDistanceKms.
   */
    distancePriceKms?: number
    /**
   * The date that the requested booking is to end.
   */
    endDate: string
    /**
   * The name of the festival or event that the guest has said they will be attending
   */
    festivalName?: string
    /**
   * The total number of free kilometers included for the RV. Natural rounding and conversion to KMs if quoted in miles.
   */
    freeDistanceKms: number
    /**
   * The number of free generator hours for the entire rental (not daily).
   */
    freeGeneratorHours?: number
    /**
   * If the rental charges per hour for generator usage.
   */
    generatorPriceHourly?: number
    /**
   * whether or not this booking request includes Delivery
   */
    hasDelivery: boolean
    /**
   * Whether the booking request has pets
   */
    hasPets: boolean
    /**
   * Whether the guest has experience towing a similar trailer (true = yes, false = no). If this question is not required on a booking request then this field should not be recorded as true or false
   */
    hasTowingExperience?: boolean
    /**
   * The quoted price for insurance.
   */
    insurancePrice: number
    /**
   * Whether the guest is attending a festival (true = yes, false = no). If this question is not required on a booking request then this field should not be recorded as true or false
   */
    isAttendingFestival?: boolean
    /**
   * Whether the booking originated from an Ezymatch offer
   */
    isEzymatch: boolean
    /**
   * whether or not this booking is planning on moving the RV after delivery or not. (based on the question asked on the first page of the booking flow)
   */
    isStationaryDelivery?: boolean
    /**
   * The city that the listing is based in.
   */
    listingCity?: string
    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    listingCountry?: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * The region the listing is based in
   */
    listingRegion?: string
    /**
   * Rental category of vehicle booked.
   */
    listingType: string
    /**
   * The message attached to the booking. Applies to all booking types.
   */
    message?: string
    /**
   * The number of drivers that have been added to the booking.
   */
    numDrivers: number
    /**
   * The ID of the guest that receives the special offer.
   */
    receiverUserId: number
    /**
   * The quoted rental price for total nights only that is displayed.
   */
    rentalPrice: number
    /**
   * The quoted price for roadside assistance.
   */
    roadsidePrice: number
    /**
   * Specific RV type of vehicle booked.
   */
    rvType: string
    /**
   * The unique ID associated with an RV.
   */
    rvid: string
    /**
   * The quoted security deposit that will be taken on the security deposit date.
   */
    securityDepositPrice: number
    /**
   * The quoted service fee paid to RVezy.
   */
    servicePrice: number
    /**
   * The date that the requested booking is to begin.
   */
    startDate: string
    /**
   * The total dollar value of the host payout for the entire rental.
   */
    totalPayout: number
    /**
   * The total dollar value for the entire rental that is displayed.
   */
    totalPrice: number
    /**
   * Difference between start date and the current date. (how many days out does the trip start)
   */
    tripLeadTime: number
    /**
   * Difference between start date and end date. Effectively, the number of nights for a trip
   */
    tripLength: number

  }
  'SpecialOfferSent [v3]': {

    /**
   * The total price for all selected addons.
   */
    addonPrice?: number
    /**
   * Array of key value pair of the addon type (e.g. icon), name, price, and pricing type that is added to the booking. NOTE: “Struct” is a BigQuery data type, and is ingestible as a JSON object
   */
    addons?: unknown[]
    /**
   * The number of adults that the requested booking will have.
   */
    adults: number
    /**
   * The unique ID associated with the booking (same as booking number).
   */
    bookingId: number
    /**
   * The state of the booking as is represented on the backend.
   */
    bookingState: number
    /**
   * The method through which the booking was created.
   */
    bookingType?: string
    /**
   * The number of children that the requested booking will have.
   */
    children: number
    /**
   * The quoted price for cleaning.
   */
    cleaningPrice?: number
    /**
   * The ISO 4217 currency code displayed
   */
    currency: 'AUD' | 'CAD' | 'EUR' | 'GBP' | 'NZD' | 'USD'
    /**
   * maximum distance in kilometers that the add-on is offering (ie. if I choose up to 100km option, this parameter shows 100km )
   */
    deliveryDistance?: number
    /**
   * The total price for delivery option selected
   */
    deliveryPrice?: number
    /**
   * The string that the Google Maps API returns as the name of the destination
   */
    destination?: string
    /**
   * The extra price per KM that is charged above the freeDistanceKms.
   */
    distancePriceKms?: number
    /**
   * The date that the requested booking is to end.
   */
    endDate: string
    /**
   * The name of the festival or event that the guest has said they will be attending
   */
    festivalName?: string
    /**
   * The total number of free kilometers included for the RV. Natural rounding and conversion to KMs if quoted in miles.
   */
    freeDistanceKms: number | null
    /**
   * The number of free generator hours for the entire rental (not daily).
   */
    freeGeneratorHours?: number
    /**
   * If the rental charges per hour for generator usage.
   */
    generatorPriceHourly?: number
    /**
   * whether or not this booking request includes Delivery
   */
    hasDelivery: boolean
    /**
   * Whether the booking request has pets
   */
    hasPets: boolean
    /**
   * Whether the guest has experience towing a similar trailer (true = yes, false = no). If this question is not required on a booking request then this field should not be recorded as true or false
   */
    hasTowingExperience?: boolean
    /**
   * The quoted price for insurance.
   */
    insurancePrice: number
    /**
   * Whether the guest is attending a festival (true = yes, false = no). If this question is not required on a booking request then this field should not be recorded as true or false
   */
    isAttendingFestival?: boolean
    /**
   * Whether the booking originated from an Ezymatch offer
   */
    isEzymatch: boolean
    /**
   * whether or not this booking is planning on moving the RV after delivery or not. (based on the question asked on the first page of the booking flow)
   */
    isStationaryDelivery?: boolean
    /**
   * The city that the listing is based in.
   */
    listingCity?: string
    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    listingCountry?: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * The region the listing is based in
   */
    listingRegion?: string
    /**
   * Rental category of vehicle booked.
   */
    listingType: string
    /**
   * The message attached to the booking. Applies to all booking types.
   */
    message?: string
    /**
   * The number of drivers that have been added to the booking.
   */
    numDrivers: number
    /**
   * The ID of the guest that receives the special offer.
   */
    receiverUserId: number
    /**
   * The quoted rental price for total nights only that is displayed.
   */
    rentalPrice: number
    /**
   * The quoted price for roadside assistance.
   */
    roadsidePrice: number
    /**
   * Specific RV type of vehicle booked.
   */
    rvType: string
    /**
   * The unique ID associated with an RV.
   */
    rvid: string
    /**
   * The quoted security deposit that will be taken on the security deposit date.
   */
    securityDepositPrice: number
    /**
   * The quoted service fee paid to RVezy.
   */
    servicePrice: number
    /**
   * The date that the requested booking is to begin.
   */
    startDate: string
    /**
   * The total dollar value of the host payout for the entire rental.
   */
    totalPayout: number
    /**
   * The total dollar value for the entire rental that is displayed.
   */
    totalPrice: number
    /**
   * Difference between start date and the current date. (how many days out does the trip start)
   */
    tripLeadTime: number
    /**
   * Difference between start date and end date. Effectively, the number of nights for a trip
   */
    tripLength: number

  }
  'SuperHostLandingPageViewed': {

    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the page was visited from.
   */
    accountCountry?: string
    /**
   * Whether or not the user viewing the landing page is a superhost.
   */
    isSuperhost?: boolean
    /**
   * The page in which the hosts was viewing when they land on the superhost landing page
   */
    pageSource: string
    /**
   * The user ID of the user who landed on the superhost landing page.
   */
    userId?: number

  }
  'SuperHostLandingPageViewed [v1]': {

    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the page was visited from.
   */
    accountCountry?: string
    /**
   * Whether or not the user viewing the landing page is a superhost.
   */
    isSuperhost?: boolean
    /**
   * The page in which the hosts was viewing when they land on the superhost landing page
   */
    pageSource: string
    /**
   * The user ID of the user who landed on the superhost landing page.
   */
    userId?: number

  }
  'SuperhostLearnMoreClicked': {

    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    accountCountry?: string
    /**
   * Whether or not the user viewing the landing page is a superhost
   */
    isSuperhost?: boolean
    /**
   * The page in which the hosts was viewing when they clicked the learn more hyperlink.
   */
    pageSource?: string

  }
  'SuperhostLearnMoreClicked [v1]': {

    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    accountCountry?: string
    /**
   * Whether or not the user viewing the landing page is a superhost
   */
    isSuperhost?: boolean
    /**
   * The page in which the hosts was viewing when they clicked the learn more hyperlink.
   */
    pageSource?: string
    /**
   * The unique user Id of the host that just attained super host status.
   */
    userId: number | null

  }
  'SuperhostLearnMoreClicked [v2]': {

    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    accountCountry?: string
    /**
   * Whether or not the user viewing the landing page is a superhost
   */
    isSuperhost?: boolean
    /**
   * The page in which the hosts was viewing when they clicked the learn more hyperlink.
   */
    pageSource?: string

  }
  'SuperhostStatusAssessed': {

    /**
   * Whether or not the host was a superhost during the previous accessment. (1 is a superhost, 0 is not)
   */
    previousSuperhostStatus: boolean
    /**
   * The host's average review score of all their RVs. (out of 5)
   */
    reviewScore: number
    /**
   * Number of published RV listings owned by the host
   */
    rvCount: number
    /**
   * Number of months that a host has maintained superhost status in a row. Only include for hosts whose updatedSuperhostStatus is equal to 1.
   */
    superhostStreak?: number
    /**
   * Whether or not the host is a superhost after the latest update to their status. (1 is a superhost, 0 is not)
   */
    updatedSuperhostStatus: boolean

  }
  'SuperhostStatusAssessed [v1]': {

    /**
   * Whether or not the host was a superhost during the previous accessment. (1 is a superhost, 0 is not)
   */
    previousSuperhostStatus: boolean
    /**
   * The host's average review score of all their RVs. (out of 5)
   */
    reviewScore: number
    /**
   * Number of published RV listings owned by the host
   */
    rvCount: number
    /**
   * Number of months that a host has maintained superhost status in a row. Only include for hosts whose updatedSuperhostStatus is equal to 1.
   */
    superhostStreak?: number
    /**
   * Whether or not the host is a superhost after the latest update to their status. (1 is a superhost, 0 is not)
   */
    updatedSuperhostStatus: boolean

  }
  'TipsAndResourcesCardClicked': {

    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    accountCountry?: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * The source screen that came before their next action if applicable
   */
    pageSource?: string
    /**
   * The card title as presented on the card
   */
    tipsAndResourcesCardName: string
    /**
   * The user ID of the user who clicked on the card
   */
    userId?: number

  }
  'TipsAndResourcesCardClicked [v1]': {

    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    accountCountry?: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * The source screen that came before their next action if applicable
   */
    pageSource?: string
    /**
   * The card title as presented on the card
   */
    tipsAndResourcesCardName?: string
    /**
   * The user ID of the user who clicked on the card
   */
    userId: number

  }
  'TipsAndResourcesCardClicked [v2]': {

    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country that the listing is located in.
   */
    accountCountry?: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * The source screen that came before their next action if applicable
   */
    pageSource?: string
    /**
   * The card title as presented on the card
   */
    tipsAndResourcesCardName: string
    /**
   * The user ID of the user who clicked on the card
   */
    userId?: number

  }
  'TripCardClicked': {

    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country where the user is located
   */
    accountCountry?: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * The booking label that defines which status the booking is in
   */
    bookingLabel: string
    /**
   * the cta the user clicked on to get to this screen. (ie. was it from the inbox message, or the bookings/trips card or host dashboard card, etc. )
   */
    cta?: string
    /**
   * the number of nights as mentioned on the card clicked
   */
    numberOfNights: number
    /**
   * The source screen that came before their next action if applicable
   */
    pageSource?: string
    /**
   * The date that the requested booking is to begin.
   */
    startDate: string
    /**
   * The user ID of the user who clicked on the card
   */
    userId: number

  }
  'TripCardClicked [v1]': {

    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country where the user is located
   */
    accountCountry?: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * The booking label that defines which status the booking is in
   */
    bookingLabel: string
    /**
   * the cta the user clicked on to get to this screen. (ie. was it from the inbox message, or the bookings/trips card or host dashboard card, etc. )
   */
    cta?: string
    /**
   * the number of nights as mentioned on the card clicked
   */
    numberOfNights: number
    /**
   * The source screen that came before their next action if applicable
   */
    pageSource?: string
    /**
   * The date that the requested booking is to begin.
   */
    startDate: string
    /**
   * The user ID of the user who clicked on the card
   */
    userId: number

  }
  'TripEnded': {

    /**
   * The unique ID associated with the booking (same as booking number).
   */
    bookingId: number
    /**
   * The unique ID of the host/owner of the booking.
   */
    ownerId: number
    /**
   * The unique ID of the guest/renter of the booking.
   */
    renterId: number
    /**
   * The unique ID associated with the RV.
   */
    rvId: string

  }
  'TripEnded [v1]': {

    /**
   * The unique ID associated with the booking (same as booking number).
   */
    bookingId: number
    /**
   * The unique ID of the host/owner of the booking.
   */
    ownerId: number
    /**
   * The unique ID of the guest/renter of the booking.
   */
    renterId: number
    /**
   * The unique ID associated with the RV.
   */
    rvId: string

  }
  'TripQuotePresented': {

    /**
   * The total price for all selected addons.
   */
    addonPrice?: number
    /**
   * Array of key value pair of the addon type (e.g. icon), name, price, and pricing type that is added to the booking. NOTE: “Struct” is a BigQuery data type, and is ingestible as a JSON object
   */
    addons?: {
    /**
     * The name of the addon being displayed
     */
      name?: string
      /**
     * The price of each pricePer
     */
      price?: number
      /**
     * How the pricing is calculated
     */
      pricePer?: 'km' | 'litre' | 'night' | 'trip' | 'unit'
    }[]
    /**
   * The number of adults that the requested booking will have.
   */
    adults: number
    /**
   * The number of children that the requested booking will have.
   */
    children: number
    /**
   * The quoted price for cleaning.
   */
    cleaningPrice?: number
    /**
   * The ISO 4217 currency code displayed
   */
    currency: string
    /**
   * maximum distance in kilometers that the add-on is offering (ie. if I choose up to 100km option, this parameter shows 100km )
   */
    deliveryDistance?: number
    /**
   * The total price for delivery option selected
   */
    deliveryPrice?: number
    /**
   * The string that the Google Maps API returns as the name of the destination
   */
    destination?: string
    /**
   * The extra price per KM that is charged above the freeDistanceKms.
   */
    distancePriceKms?: number
    /**
   * The date that the requested booking is to end.
   */
    endDate: string
    /**
   * The total number of free kilometers included for the RV. Natural rounding and conversion to KMs if quoted in miles.
   */
    freeDistanceKms?: number | null
    /**
   * The number of free generator hours for the entire rental (not daily).
   */
    freeGeneratorHours?: number
    /**
   * If the rental charges per hour for generator usage, the
   */
    generatorPriceHourly?: number
    /**
   * Did the guest add delivery? Yes (1) or no (0)
   */
    hasDelivery: boolean
    /**
   * Whether the booking request has pets
   */
    hasPets: boolean
    /**
   * The quoted price for insurance.
   */
    insurancePrice: number
    /**
   * The type of insurance being quoted.
   */
    insuranceType: string
    /**
   * Whether or not the RV clicked was available because of the ShortStays feature.
   */
    isShortStay: boolean
    /**
   * whether or not this booking is planning on moving the RV after delivery or not. (based on the question asked on the first page of the booking flow)
   */
    isStationaryDelivery?: boolean
    /**
   * The total quoted discount that is displayed in blue.
   */
    monthlyDiscount?: number
    /**
   * The page the user was on when they got a trip quote presented (ex. Listing Page, Initial Inquiry, Booking flow pages)
   */
    pageSource: string
    /**
   * The quoted rental price per night that is displayed.
   */
    pricePerNight: number
    /**
   * The quoted rental price for total nights only that is displayed.
   */
    rentalPrice: number
    /**
   * The quoted price for roadside assistance.
   */
    roadsidePrice?: number
    /**
   * The unique ID associated with an RV.
   */
    rvId: string
    /**
   * The quoted security deposit that will be taken on the security deposit date.
   */
    securityDepositPrice: number
    /**
   * The quoted service fee paid to RVezy.
   */
    servicePrice: number
    /**
   * This is the nightly rate that is displayed for the listing that has smart pricing
   */
    smartNightlyRate: number
    /**
   * The date that the requested booking is to begin.
   */
    startDate: string
    /**
   * The total dollar value for the entire rental that is displayed.
   */
    totalPrice: number
    /**
   * Difference between start date and end date. Effectively, the number of nights for a trip
   */
    tripLength: number
    /**
   * The total quoted discount that is displayed in blue.
   */
    weeklyDiscount?: number

  }
  'TripQuotePresented [v1]': {

    /**
   * The total price for all selected addons.
   */
    addonPrice?: number
    /**
   * Array of key value pair of the addon type (e.g. icon), name, price, and pricing type that is added to the booking. NOTE: “Struct” is a BigQuery data type, and is ingestible as a JSON object
   */
    addons?: unknown[]
    /**
   * The number of adults that the requested booking will have.
   */
    adults: number
    /**
   * The number of children that the requested booking will have.
   */
    children: number
    /**
   * The quoted price for cleaning.
   */
    cleaningPrice?: number
    /**
   * The ISO 4217 currency code displayed
   */
    currency: string
    /**
   * maximum distance in kilometers that the add-on is offering (ie. if I choose up to 100km option, this parameter shows 100km )
   */
    deliveryDistance?: number
    /**
   * The total price for delivery option selected
   */
    deliveryPrice?: number
    /**
   * The string that the Google Maps API returns as the name of the destination
   */
    destination?: string
    /**
   * The extra price per KM that is charged above the freeDistanceKms.
   */
    distancePriceKms?: number
    /**
   * The date that the requested booking is to end.
   */
    endDate: string
    /**
   * The total number of free kilometers included for the RV. Natural rounding and conversion to KMs if quoted in miles.
   */
    freeDistanceKms?: number
    /**
   * The number of free generator hours for the entire rental (not daily).
   */
    freeGeneratorHours?: number
    /**
   * If the rental charges per hour for generator usage, the
   */
    generatorPriceHourly?: number
    /**
   * Did the guest add delivery? Yes (1) or no (0)
   */
    hasDelivery: boolean
    /**
   * Whether the booking request has pets
   */
    hasPets: boolean
    /**
   * The quoted price for insurance.
   */
    insurancePrice: number
    /**
   * The type of insurance being quoted.
   */
    insuranceType: string
    /**
   * Whether or not the RV clicked was available because of the ShortStays feature.
   */
    isShortStay: boolean
    /**
   * whether or not this booking is planning on moving the RV after delivery or not. (based on the question asked on the first page of the booking flow)
   */
    isStationaryDelivery?: boolean
    /**
   * The total quoted discount that is displayed in blue.
   */
    monthlyDiscount?: number
    /**
   * The page the user was on when they got a trip quote presented (ex. Listing Page, Initial Inquiry, Booking flow pages)
   */
    pageSource: string
    /**
   * The quoted rental price per night that is displayed.
   */
    pricePerNight: number
    /**
   * The quoted rental price for total nights only that is displayed.
   */
    rentalPrice: number
    /**
   * The quoted price for roadside assistance.
   */
    roadsidePrice?: number
    /**
   * The unique ID associated with an RV.
   */
    rvId: string
    /**
   * The quoted security deposit that will be taken on the security deposit date.
   */
    securityDepositPrice: number
    /**
   * The quoted service fee paid to RVezy.
   */
    servicePrice: number
    /**
   * The date that the requested booking is to begin.
   */
    startDate: string
    /**
   * The total dollar value for the entire rental that is displayed.
   */
    totalPrice: number
    /**
   * Difference between start date and end date. Effectively, the number of nights for a trip
   */
    tripLength: number
    /**
   * The total quoted discount that is displayed in blue.
   */
    weeklyDiscount?: number

  }
  'TripQuotePresented [v2]': {

    /**
   * The total price for all selected addons.
   */
    addonPrice?: number
    /**
   * Array of key value pair of the addon type (e.g. icon), name, price, and pricing type that is added to the booking. NOTE: “Struct” is a BigQuery data type, and is ingestible as a JSON object
   */
    addons?: unknown[]
    /**
   * The number of adults that the requested booking will have.
   */
    adults: number
    /**
   * The number of children that the requested booking will have.
   */
    children: number
    /**
   * The quoted price for cleaning.
   */
    cleaningPrice?: number
    /**
   * The ISO 4217 currency code displayed
   */
    currency: string
    /**
   * maximum distance in kilometers that the add-on is offering (ie. if I choose up to 100km option, this parameter shows 100km )
   */
    deliveryDistance?: number
    /**
   * The total price for delivery option selected
   */
    deliveryPrice?: number
    /**
   * The string that the Google Maps API returns as the name of the destination
   */
    destination?: string
    /**
   * The extra price per KM that is charged above the freeDistanceKms.
   */
    distancePriceKms?: number
    /**
   * The date that the requested booking is to end.
   */
    endDate: string
    /**
   * The total number of free kilometers included for the RV. Natural rounding and conversion to KMs if quoted in miles.
   */
    freeDistanceKms?: number
    /**
   * The number of free generator hours for the entire rental (not daily).
   */
    freeGeneratorHours?: number
    /**
   * If the rental charges per hour for generator usage, the
   */
    generatorPriceHourly?: number
    /**
   * Did the guest add delivery? Yes (1) or no (0)
   */
    hasDelivery: boolean
    /**
   * Whether the booking request has pets
   */
    hasPets: boolean
    /**
   * The quoted price for insurance.
   */
    insurancePrice: number
    /**
   * The type of insurance being quoted.
   */
    insuranceType: string
    /**
   * Whether or not the RV clicked was available because of the ShortStays feature.
   */
    isShortStay: boolean
    /**
   * whether or not this booking is planning on moving the RV after delivery or not. (based on the question asked on the first page of the booking flow)
   */
    isStationaryDelivery?: boolean
    /**
   * The total quoted discount that is displayed in blue.
   */
    monthlyDiscount?: number
    /**
   * The page the user was on when they got a trip quote presented (ex. Listing Page, Initial Inquiry, Booking flow pages)
   */
    pageSource: string
    /**
   * The quoted rental price per night that is displayed.
   */
    pricePerNight: number
    /**
   * The quoted rental price for total nights only that is displayed.
   */
    rentalPrice: number
    /**
   * The quoted price for roadside assistance.
   */
    roadsidePrice?: number
    /**
   * The unique ID associated with an RV.
   */
    rvId: string
    /**
   * The quoted security deposit that will be taken on the security deposit date.
   */
    securityDepositPrice: number
    /**
   * The quoted service fee paid to RVezy.
   */
    servicePrice: number
    /**
   * This is the nightly rate that is displayed for the listing that has smart pricing
   */
    smartNightlyRate: number
    /**
   * The date that the requested booking is to begin.
   */
    startDate: string
    /**
   * The total dollar value for the entire rental that is displayed.
   */
    totalPrice: number
    /**
   * Difference between start date and end date. Effectively, the number of nights for a trip
   */
    tripLength: number
    /**
   * The total quoted discount that is displayed in blue.
   */
    weeklyDiscount?: number

  }
  'TripQuotePresented [v3]': {

    /**
   * The total price for all selected addons.
   */
    addonPrice?: number
    /**
   * Array of key value pair of the addon type (e.g. icon), name, price, and pricing type that is added to the booking. NOTE: “Struct” is a BigQuery data type, and is ingestible as a JSON object
   */
    addons?: unknown[]
    /**
   * The number of adults that the requested booking will have.
   */
    adults: number
    /**
   * The number of children that the requested booking will have.
   */
    children: number
    /**
   * The quoted price for cleaning.
   */
    cleaningPrice?: number
    /**
   * The ISO 4217 currency code displayed
   */
    currency: string
    /**
   * The string that the Google Maps API returns as the name of the destination when a guest selects delivery.
   */
    deliveryDestination?: string
    /**
   * maximum distance in kilometers that the add-on is offering (ie. if I choose up to 100km option, this parameter shows 100km )
   */
    deliveryDistance?: number
    /**
   * The total price for delivery option selected
   */
    deliveryPrice?: number
    /**
   * The string that the Google Maps API returns as the name of the destination
   */
    destination?: string
    /**
   * The extra price per KM that is charged above the freeDistanceKms.
   */
    distancePriceKms?: number
    /**
   * The date that the requested booking is to end.
   */
    endDate: string
    /**
   * The total number of free kilometers included for the RV. Natural rounding and conversion to KMs if quoted in miles.
   */
    freeDistanceKms?: number
    /**
   * The number of free generator hours for the entire rental (not daily).
   */
    freeGeneratorHours?: number
    /**
   * If the rental charges per hour for generator usage, the
   */
    generatorPriceHourly?: number
    /**
   * Did the guest add delivery? Yes (1) or no (0)
   */
    hasDelivery: boolean
    /**
   * Whether the booking request has pets
   */
    hasPets: boolean
    /**
   * The quoted price for insurance.
   */
    insurancePrice: number
    /**
   * The type of insurance being quoted.
   */
    insuranceType: string
    /**
   * Whether or not the RV clicked was available because of the ShortStays feature.
   */
    isShortStay: boolean
    /**
   * whether or not this booking is planning on moving the RV after delivery or not. (based on the question asked on the first page of the booking flow)
   */
    isStationaryDelivery?: boolean
    /**
   * The total quoted discount that is displayed in blue.
   */
    monthlyDiscount?: number
    /**
   * The page the user was on when they got a trip quote presented (ex. Listing Page, Initial Inquiry, Booking flow pages)
   */
    pageSource: string
    /**
   * The option the guest chose to pickup the RV. They can choose to pickup or have it delivered. A RV may not offer delivery or only offer delivery
   */
    pickupType: string
    /**
   * The quoted rental price per night that is displayed.
   */
    pricePerNight: number
    /**
   * The type of insurance being quoted.
   */
    protectionPlan: string
    /**
   * The quoted rental price for total nights only that is displayed.
   */
    rentalPrice: number
    /**
   * The quoted price for roadside assistance.
   */
    roadsidePrice?: number
    /**
   * The unique ID associated with an RV.
   */
    rvId: string
    /**
   * The quoted security deposit that will be taken on the security deposit date.
   */
    securityDepositPrice: number
    /**
   * The quoted service fee paid to RVezy.
   */
    servicePrice: number
    /**
   * This is the nightly rate that is displayed for the listing that has smart pricing
   */
    smartNightlyRate: number
    /**
   * The date that the requested booking is to begin.
   */
    startDate: string
    /**
   * The total dollar value for the entire rental that is displayed.
   */
    totalPrice: number
    /**
   * Difference between start date and end date. Effectively, the number of nights for a trip
   */
    tripLength: number
    /**
   * The total quoted discount that is displayed in blue.
   */
    weeklyDiscount?: number

  }
  'TripQuotePresented [v4]': {

    /**
   * The total price for all selected addons.
   */
    addonPrice?: number
    /**
   * Array of key value pair of the addon type (e.g. icon), name, price, and pricing type that is added to the booking. NOTE: “Struct” is a BigQuery data type, and is ingestible as a JSON object
   */
    addons?: unknown[]
    /**
   * The number of adults that the requested booking will have.
   */
    adults: number
    /**
   * The number of children that the requested booking will have.
   */
    children: number
    /**
   * The quoted price for cleaning.
   */
    cleaningPrice?: number
    /**
   * The ISO 4217 currency code displayed
   */
    currency: string
    /**
   * The string that the Google Maps API returns as the name of the destination when a guest selects delivery.
   */
    deliveryDestination?: string
    /**
   * maximum distance in kilometers that the add-on is offering (ie. if I choose up to 100km option, this parameter shows 100km )
   */
    deliveryDistance?: number
    /**
   * The total price for delivery option selected
   */
    deliveryPrice?: number
    /**
   * The string that the Google Maps API returns as the name of the destination
   */
    destination?: string
    /**
   * The extra price per KM that is charged above the freeDistanceKms.
   */
    distancePriceKms?: number
    /**
   * The date that the requested booking is to end.
   */
    endDate: string
    /**
   * The total number of free kilometers included for the RV. Natural rounding and conversion to KMs if quoted in miles.
   */
    freeDistanceKms?: number
    /**
   * The number of free generator hours for the entire rental (not daily).
   */
    freeGeneratorHours?: number
    /**
   * If the rental charges per hour for generator usage, the
   */
    generatorPriceHourly?: number
    /**
   * Did the guest add delivery? Yes (1) or no (0)
   */
    hasDelivery: boolean
    /**
   * Whether the booking request has pets
   */
    hasPets: boolean
    /**
   * The quoted price for insurance.
   */
    insurancePrice: number
    /**
   * The type of insurance being quoted.
   */
    insuranceType: string
    /**
   * Whether or not the RV clicked was available because of the ShortStays feature.
   */
    isShortStay: boolean
    /**
   * whether or not this booking is planning on moving the RV after delivery or not. (based on the question asked on the first page of the booking flow)
   */
    isStationaryDelivery?: boolean
    /**
   * The total quoted discount that is displayed in blue.
   */
    monthlyDiscount?: number
    /**
   * The page the user was on when they got a trip quote presented (ex. Listing Page, Initial Inquiry, Booking flow pages)
   */
    pageSource: string
    /**
   * The quoted rental price per night that is displayed.
   */
    pricePerNight: number
    /**
   * The quoted rental price for total nights only that is displayed.
   */
    rentalPrice: number
    /**
   * The quoted price for roadside assistance.
   */
    roadsidePrice?: number
    /**
   * The unique ID associated with an RV.
   */
    rvId: string
    /**
   * The quoted security deposit that will be taken on the security deposit date.
   */
    securityDepositPrice: number
    /**
   * The quoted service fee paid to RVezy.
   */
    servicePrice: number
    /**
   * This is the nightly rate that is displayed for the listing that has smart pricing
   */
    smartNightlyRate: number
    /**
   * The date that the requested booking is to begin.
   */
    startDate: string
    /**
   * The total dollar value for the entire rental that is displayed.
   */
    totalPrice: number
    /**
   * Difference between start date and end date. Effectively, the number of nights for a trip
   */
    tripLength: number
    /**
   * The total quoted discount that is displayed in blue.
   */
    weeklyDiscount?: number

  }
  'TripQuotePresented [v5]': {

    /**
   * The total price for all selected addons.
   */
    addonPrice?: number
    /**
   * Array of key value pair of the addon type (e.g. icon), name, price, and pricing type that is added to the booking. NOTE: “Struct” is a BigQuery data type, and is ingestible as a JSON object
   */
    addons?: {
    /**
     * The name of the addon being displayed
     */
      name?: string
      /**
     * The price of each pricePer
     */
      price?: number
      /**
     * How the pricing is calculated
     */
      pricePer?: 'km' | 'litre' | 'night' | 'trip' | 'unit'
    }[]
    /**
   * The number of adults that the requested booking will have.
   */
    adults: number
    /**
   * The number of children that the requested booking will have.
   */
    children: number
    /**
   * The quoted price for cleaning.
   */
    cleaningPrice?: number
    /**
   * The ISO 4217 currency code displayed
   */
    currency: string
    /**
   * maximum distance in kilometers that the add-on is offering (ie. if I choose up to 100km option, this parameter shows 100km )
   */
    deliveryDistance?: number
    /**
   * The total price for delivery option selected
   */
    deliveryPrice?: number
    /**
   * The string that the Google Maps API returns as the name of the destination
   */
    destination?: string
    /**
   * The extra price per KM that is charged above the freeDistanceKms.
   */
    distancePriceKms?: number
    /**
   * The date that the requested booking is to end.
   */
    endDate: string
    /**
   * The total number of free kilometers included for the RV. Natural rounding and conversion to KMs if quoted in miles.
   */
    freeDistanceKms?: number
    /**
   * The number of free generator hours for the entire rental (not daily).
   */
    freeGeneratorHours?: number
    /**
   * If the rental charges per hour for generator usage, the
   */
    generatorPriceHourly?: number
    /**
   * Did the guest add delivery? Yes (1) or no (0)
   */
    hasDelivery: boolean
    /**
   * Whether the booking request has pets
   */
    hasPets: boolean
    /**
   * The quoted price for insurance.
   */
    insurancePrice: number
    /**
   * The type of insurance being quoted.
   */
    insuranceType: string
    /**
   * Whether or not the RV clicked was available because of the ShortStays feature.
   */
    isShortStay: boolean
    /**
   * whether or not this booking is planning on moving the RV after delivery or not. (based on the question asked on the first page of the booking flow)
   */
    isStationaryDelivery?: boolean
    /**
   * The total quoted discount that is displayed in blue.
   */
    monthlyDiscount?: number
    /**
   * The page the user was on when they got a trip quote presented (ex. Listing Page, Initial Inquiry, Booking flow pages)
   */
    pageSource: string
    /**
   * The quoted rental price per night that is displayed.
   */
    pricePerNight: number
    /**
   * The quoted rental price for total nights only that is displayed.
   */
    rentalPrice: number
    /**
   * The quoted price for roadside assistance.
   */
    roadsidePrice?: number
    /**
   * The unique ID associated with an RV.
   */
    rvId: string
    /**
   * The quoted security deposit that will be taken on the security deposit date.
   */
    securityDepositPrice: number
    /**
   * The quoted service fee paid to RVezy.
   */
    servicePrice: number
    /**
   * This is the nightly rate that is displayed for the listing that has smart pricing
   */
    smartNightlyRate: number
    /**
   * The date that the requested booking is to begin.
   */
    startDate: string
    /**
   * The total dollar value for the entire rental that is displayed.
   */
    totalPrice: number
    /**
   * Difference between start date and end date. Effectively, the number of nights for a trip
   */
    tripLength: number
    /**
   * The total quoted discount that is displayed in blue.
   */
    weeklyDiscount?: number

  }
  'TripQuotePresented [v6]': {

    /**
   * The total price for all selected addons.
   */
    addonPrice?: number
    /**
   * Array of key value pair of the addon type (e.g. icon), name, price, and pricing type that is added to the booking. NOTE: “Struct” is a BigQuery data type, and is ingestible as a JSON object
   */
    addons?: {
    /**
     * The name of the addon being displayed
     */
      name?: string
      /**
     * The price of each pricePer
     */
      price?: number
      /**
     * How the pricing is calculated
     */
      pricePer?: 'km' | 'litre' | 'night' | 'trip' | 'unit'
    }[]
    /**
   * The number of adults that the requested booking will have.
   */
    adults: number
    /**
   * The number of children that the requested booking will have.
   */
    children: number
    /**
   * The quoted price for cleaning.
   */
    cleaningPrice?: number
    /**
   * The ISO 4217 currency code displayed
   */
    currency: string
    /**
   * maximum distance in kilometers that the add-on is offering (ie. if I choose up to 100km option, this parameter shows 100km )
   */
    deliveryDistance?: number
    /**
   * The total price for delivery option selected
   */
    deliveryPrice?: number
    /**
   * The string that the Google Maps API returns as the name of the destination
   */
    destination?: string
    /**
   * The extra price per KM that is charged above the freeDistanceKms.
   */
    distancePriceKms?: number
    /**
   * The date that the requested booking is to end.
   */
    endDate: string
    /**
   * The total number of free kilometers included for the RV. Natural rounding and conversion to KMs if quoted in miles.
   */
    freeDistanceKms?: number | null
    /**
   * The number of free generator hours for the entire rental (not daily).
   */
    freeGeneratorHours?: number
    /**
   * If the rental charges per hour for generator usage, the
   */
    generatorPriceHourly?: number
    /**
   * Did the guest add delivery? Yes (1) or no (0)
   */
    hasDelivery: boolean
    /**
   * Whether the booking request has pets
   */
    hasPets: boolean
    /**
   * The quoted price for insurance.
   */
    insurancePrice: number
    /**
   * The type of insurance being quoted.
   */
    insuranceType: string
    /**
   * Whether or not the RV clicked was available because of the ShortStays feature.
   */
    isShortStay: boolean
    /**
   * whether or not this booking is planning on moving the RV after delivery or not. (based on the question asked on the first page of the booking flow)
   */
    isStationaryDelivery?: boolean
    /**
   * The total quoted discount that is displayed in blue.
   */
    monthlyDiscount?: number
    /**
   * The page the user was on when they got a trip quote presented (ex. Listing Page, Initial Inquiry, Booking flow pages)
   */
    pageSource: string
    /**
   * The quoted rental price per night that is displayed.
   */
    pricePerNight: number
    /**
   * The quoted rental price for total nights only that is displayed.
   */
    rentalPrice: number
    /**
   * The quoted price for roadside assistance.
   */
    roadsidePrice?: number
    /**
   * The unique ID associated with an RV.
   */
    rvId: string
    /**
   * The quoted security deposit that will be taken on the security deposit date.
   */
    securityDepositPrice: number
    /**
   * The quoted service fee paid to RVezy.
   */
    servicePrice: number
    /**
   * This is the nightly rate that is displayed for the listing that has smart pricing
   */
    smartNightlyRate: number
    /**
   * The date that the requested booking is to begin.
   */
    startDate: string
    /**
   * The total dollar value for the entire rental that is displayed.
   */
    totalPrice: number
    /**
   * Difference between start date and end date. Effectively, the number of nights for a trip
   */
    tripLength: number
    /**
   * The total quoted discount that is displayed in blue.
   */
    weeklyDiscount?: number

  }
  'TripQuoteViewed': {

    /**
   * The total price for all selected addons.
   */
    addonPrice?: number
    /**
   * Array of key value pair of the addon type (e.g. icon), name, price, and pricing type that is added to the booking. NOTE: “Struct” is a BigQuery data type, and is ingestible as a JSON object
   */
    addons?: {
    /**
     * The name of the addon being displayed
     */
      name?: string
      /**
     * The price of each pricePer
     */
      price?: number
      /**
     * How the pricing is calculated
     */
      pricePer?: string
    }[]
    /**
   * The number of adults that the requested booking will have.
   */
    adults: number
    /**
   * The number of children that the requested booking will have.
   */
    children: number
    /**
   * The quoted price for cleaning.
   */
    cleaningPrice?: number
    /**
   * The ISO 4217 currency code displayed
   */
    currency: string
    /**
   * maximum distance in kilometers that the add-on is offering (ie. if I choose up to 100km option, this parameter shows 100km )
   */
    deliveryDistance?: number
    /**
   * The total price for delivery option selected
   */
    deliveryPrice?: number
    /**
   * The string that the Google Maps API returns as the name of the destination
   */
    destination?: string
    /**
   * The extra price per KM that is charged above the freeDistanceKms.
   */
    distancePriceKms?: number
    /**
   * The date that the requested booking is to end.
   */
    endDate: string
    /**
   * The total number of free kilometers included for the RV. Natural rounding and conversion to KMs if quoted in miles.
   */
    freeDistanceKms?: number | null
    /**
   * The number of free generator hours for the entire rental (not daily).
   */
    freeGeneratorHours?: number
    /**
   * If the rental charges per hour for generator usage, the
   */
    generatorPriceHourly?: number
    /**
   * Did the guest add delivery? Yes (1) or no (0)
   */
    hasDelivery: boolean
    /**
   * Whether the booking request has pets
   */
    hasPets: boolean
    /**
   * The quoted price for insurance.
   */
    insurancePrice: number
    /**
   * The type of insurance being quoted.
   */
    insuranceType: string
    /**
   * Whether or not the RV clicked was available because of the ShortStays feature.
   */
    isShortStay: boolean
    /**
   * whether or not this booking is planning on moving the RV after delivery or not. (based on the question asked on the first page of the booking flow)
   */
    isStationaryDelivery?: boolean
    /**
   * The total quoted discount that is displayed in blue.
   */
    monthlyDiscount?: number
    /**
   * The page the user was on when they got a trip quote presented (ex. Listing Page, Initial Inquiry, Booking flow pages)
   */
    pageSource: string
    /**
   * The quoted rental price per night that is displayed.
   */
    pricePerNight: number
    /**
   * The quoted rental price for total nights only that is displayed.
   */
    rentalPrice: number
    /**
   * The quoted price for roadside assistance.
   */
    roadsidePrice?: number
    /**
   * The unique ID associated with an RV.
   */
    rvId: string
    /**
   * The quoted security deposit that will be taken on the security deposit date.
   */
    securityDepositPrice: number
    /**
   * The quoted service fee paid to RVezy.
   */
    servicePrice: number
    /**
   * This is the nightly rate that is displayed for the listing that has smart pricing
   */
    smartNightlyRate: number
    /**
   * The date that the requested booking is to begin.
   */
    startDate: string
    /**
   * The total dollar value for the entire rental that is displayed.
   */
    totalPrice: number
    /**
   * Difference between start date and end date. Effectively, the number of nights for a trip
   */
    tripLength: number
    /**
   * The total quoted discount that is displayed in blue.
   */
    weeklyDiscount?: number

  }
  'TripQuoteViewed [v1]': {

    /**
   * The total price for all selected addons.
   */
    addonPrice?: number
    /**
   * Array of key value pair of the addon type (e.g. icon), name, price, and pricing type that is added to the booking. NOTE: “Struct” is a BigQuery data type, and is ingestible as a JSON object
   */
    addons?: unknown[]
    /**
   * The number of adults that the requested booking will have.
   */
    adults: number
    /**
   * The number of children that the requested booking will have.
   */
    children: number
    /**
   * The quoted price for cleaning.
   */
    cleaningPrice?: number
    /**
   * The ISO 4217 currency code displayed
   */
    currency: string
    /**
   * maximum distance in kilometers that the add-on is offering (ie. if I choose up to 100km option, this parameter shows 100km )
   */
    deliveryDistance?: number
    /**
   * The total price for delivery option selected
   */
    deliveryPrice?: number
    /**
   * The string that the Google Maps API returns as the name of the destination
   */
    destination?: string
    /**
   * The extra price per KM that is charged above the freeDistanceKms.
   */
    distancePriceKms?: number
    /**
   * The date that the requested booking is to end.
   */
    endDate: string
    /**
   * The total number of free kilometers included for the RV. Natural rounding and conversion to KMs if quoted in miles.
   */
    freeDistanceKms?: number
    /**
   * The number of free generator hours for the entire rental (not daily).
   */
    freeGeneratorHours?: number
    /**
   * If the rental charges per hour for generator usage, the
   */
    generatorPriceHourly?: number
    /**
   * Did the guest add delivery? Yes (1) or no (0)
   */
    hasDelivery: boolean
    /**
   * Whether the booking request has pets
   */
    hasPets: boolean
    /**
   * The quoted price for insurance.
   */
    insurancePrice: number
    /**
   * The type of insurance being quoted.
   */
    insuranceType: string
    /**
   * Whether or not the RV clicked was available because of the ShortStays feature.
   */
    isShortStay: boolean
    /**
   * whether or not this booking is planning on moving the RV after delivery or not. (based on the question asked on the first page of the booking flow)
   */
    isStationaryDelivery?: boolean
    /**
   * The total quoted discount that is displayed in blue.
   */
    monthlyDiscount?: number
    /**
   * The page the user was on when they got a trip quote presented (ex. Listing Page, Initial Inquiry, Booking flow pages)
   */
    pageSource: string
    /**
   * The quoted rental price per night that is displayed.
   */
    pricePerNight: number
    /**
   * The quoted rental price for total nights only that is displayed.
   */
    rentalPrice: number
    /**
   * The quoted price for roadside assistance.
   */
    roadsidePrice?: number
    /**
   * The unique ID associated with an RV.
   */
    rvId: string
    /**
   * The quoted security deposit that will be taken on the security deposit date.
   */
    securityDepositPrice: number
    /**
   * The quoted service fee paid to RVezy.
   */
    servicePrice: number
    /**
   * The date that the requested booking is to begin.
   */
    startDate: string
    /**
   * The total dollar value for the entire rental that is displayed.
   */
    totalPrice: number
    /**
   * Difference between start date and end date. Effectively, the number of nights for a trip
   */
    tripLength: number
    /**
   * The total quoted discount that is displayed in blue.
   */
    weeklyDiscount?: number

  }
  'TripQuoteViewed [v2]': {

    /**
   * The total price for all selected addons.
   */
    addonPrice?: number
    /**
   * Array of key value pair of the addon type (e.g. icon), name, price, and pricing type that is added to the booking. NOTE: “Struct” is a BigQuery data type, and is ingestible as a JSON object
   */
    addons?: unknown[]
    /**
   * The number of adults that the requested booking will have.
   */
    adults: number
    /**
   * The number of children that the requested booking will have.
   */
    children: number
    /**
   * The quoted price for cleaning.
   */
    cleaningPrice?: number
    /**
   * The ISO 4217 currency code displayed
   */
    currency: string
    /**
   * maximum distance in kilometers that the add-on is offering (ie. if I choose up to 100km option, this parameter shows 100km )
   */
    deliveryDistance?: number
    /**
   * The total price for delivery option selected
   */
    deliveryPrice?: number
    /**
   * The string that the Google Maps API returns as the name of the destination
   */
    destination?: string
    /**
   * The extra price per KM that is charged above the freeDistanceKms.
   */
    distancePriceKms?: number
    /**
   * The date that the requested booking is to end.
   */
    endDate: string
    /**
   * The total number of free kilometers included for the RV. Natural rounding and conversion to KMs if quoted in miles.
   */
    freeDistanceKms?: number
    /**
   * The number of free generator hours for the entire rental (not daily).
   */
    freeGeneratorHours?: number
    /**
   * If the rental charges per hour for generator usage, the
   */
    generatorPriceHourly?: number
    /**
   * Did the guest add delivery? Yes (1) or no (0)
   */
    hasDelivery: boolean
    /**
   * Whether the booking request has pets
   */
    hasPets: boolean
    /**
   * The quoted price for insurance.
   */
    insurancePrice: number
    /**
   * The type of insurance being quoted.
   */
    insuranceType: string
    /**
   * Whether or not the RV clicked was available because of the ShortStays feature.
   */
    isShortStay: boolean
    /**
   * whether or not this booking is planning on moving the RV after delivery or not. (based on the question asked on the first page of the booking flow)
   */
    isStationaryDelivery?: boolean
    /**
   * The total quoted discount that is displayed in blue.
   */
    monthlyDiscount?: number
    /**
   * The page the user was on when they got a trip quote presented (ex. Listing Page, Initial Inquiry, Booking flow pages)
   */
    pageSource: string
    /**
   * The quoted rental price per night that is displayed.
   */
    pricePerNight: number
    /**
   * The quoted rental price for total nights only that is displayed.
   */
    rentalPrice: number
    /**
   * The quoted price for roadside assistance.
   */
    roadsidePrice?: number
    /**
   * The unique ID associated with an RV.
   */
    rvId: string
    /**
   * The quoted security deposit that will be taken on the security deposit date.
   */
    securityDepositPrice: number
    /**
   * The quoted service fee paid to RVezy.
   */
    servicePrice: number
    /**
   * This is the nightly rate that is displayed for the listing that has smart pricing
   */
    smartNightlyRate: number
    /**
   * The date that the requested booking is to begin.
   */
    startDate: string
    /**
   * The total dollar value for the entire rental that is displayed.
   */
    totalPrice: number
    /**
   * Difference between start date and end date. Effectively, the number of nights for a trip
   */
    tripLength: number
    /**
   * The total quoted discount that is displayed in blue.
   */
    weeklyDiscount?: number

  }
  'TripQuoteViewed [v3]': {

    /**
   * The total price for all selected addons.
   */
    addonPrice?: number
    /**
   * Array of key value pair of the addon type (e.g. icon), name, price, and pricing type that is added to the booking. NOTE: “Struct” is a BigQuery data type, and is ingestible as a JSON object
   */
    addons?: {
    /**
     * The name of the addon being displayed
     */
      name?: string
      /**
     * The price of each pricePer
     */
      price?: number
      /**
     * How the pricing is calculated
     */
      pricePer?: string
    }[]
    /**
   * The number of adults that the requested booking will have.
   */
    adults: number
    /**
   * The number of children that the requested booking will have.
   */
    children: number
    /**
   * The quoted price for cleaning.
   */
    cleaningPrice?: number
    /**
   * The ISO 4217 currency code displayed
   */
    currency: string
    /**
   * maximum distance in kilometers that the add-on is offering (ie. if I choose up to 100km option, this parameter shows 100km )
   */
    deliveryDistance?: number
    /**
   * The total price for delivery option selected
   */
    deliveryPrice?: number
    /**
   * The string that the Google Maps API returns as the name of the destination
   */
    destination?: string
    /**
   * The extra price per KM that is charged above the freeDistanceKms.
   */
    distancePriceKms?: number
    /**
   * The date that the requested booking is to end.
   */
    endDate: string
    /**
   * The total number of free kilometers included for the RV. Natural rounding and conversion to KMs if quoted in miles.
   */
    freeDistanceKms?: number
    /**
   * The number of free generator hours for the entire rental (not daily).
   */
    freeGeneratorHours?: number
    /**
   * If the rental charges per hour for generator usage, the
   */
    generatorPriceHourly?: number
    /**
   * Did the guest add delivery? Yes (1) or no (0)
   */
    hasDelivery: boolean
    /**
   * Whether the booking request has pets
   */
    hasPets: boolean
    /**
   * The quoted price for insurance.
   */
    insurancePrice: number
    /**
   * The type of insurance being quoted.
   */
    insuranceType: string
    /**
   * Whether or not the RV clicked was available because of the ShortStays feature.
   */
    isShortStay: boolean
    /**
   * whether or not this booking is planning on moving the RV after delivery or not. (based on the question asked on the first page of the booking flow)
   */
    isStationaryDelivery?: boolean
    /**
   * The total quoted discount that is displayed in blue.
   */
    monthlyDiscount?: number
    /**
   * The page the user was on when they got a trip quote presented (ex. Listing Page, Initial Inquiry, Booking flow pages)
   */
    pageSource: string
    /**
   * The quoted rental price per night that is displayed.
   */
    pricePerNight: number
    /**
   * The quoted rental price for total nights only that is displayed.
   */
    rentalPrice: number
    /**
   * The quoted price for roadside assistance.
   */
    roadsidePrice?: number
    /**
   * The unique ID associated with an RV.
   */
    rvId: string
    /**
   * The quoted security deposit that will be taken on the security deposit date.
   */
    securityDepositPrice: number
    /**
   * The quoted service fee paid to RVezy.
   */
    servicePrice: number
    /**
   * This is the nightly rate that is displayed for the listing that has smart pricing
   */
    smartNightlyRate: number
    /**
   * The date that the requested booking is to begin.
   */
    startDate: string
    /**
   * The total dollar value for the entire rental that is displayed.
   */
    totalPrice: number
    /**
   * Difference between start date and end date. Effectively, the number of nights for a trip
   */
    tripLength: number
    /**
   * The total quoted discount that is displayed in blue.
   */
    weeklyDiscount?: number

  }
  'TripQuoteViewed [v4]': {

    /**
   * The total price for all selected addons.
   */
    addonPrice?: number
    /**
   * Array of key value pair of the addon type (e.g. icon), name, price, and pricing type that is added to the booking. NOTE: “Struct” is a BigQuery data type, and is ingestible as a JSON object
   */
    addons?: {
    /**
     * The name of the addon being displayed
     */
      name?: string
      /**
     * The price of each pricePer
     */
      price?: number
      /**
     * How the pricing is calculated
     */
      pricePer?: string
    }[]
    /**
   * The number of adults that the requested booking will have.
   */
    adults: number
    /**
   * The number of children that the requested booking will have.
   */
    children: number
    /**
   * The quoted price for cleaning.
   */
    cleaningPrice?: number
    /**
   * The ISO 4217 currency code displayed
   */
    currency: string
    /**
   * maximum distance in kilometers that the add-on is offering (ie. if I choose up to 100km option, this parameter shows 100km )
   */
    deliveryDistance?: number
    /**
   * The total price for delivery option selected
   */
    deliveryPrice?: number
    /**
   * The string that the Google Maps API returns as the name of the destination
   */
    destination?: string
    /**
   * The extra price per KM that is charged above the freeDistanceKms.
   */
    distancePriceKms?: number
    /**
   * The date that the requested booking is to end.
   */
    endDate: string
    /**
   * The total number of free kilometers included for the RV. Natural rounding and conversion to KMs if quoted in miles.
   */
    freeDistanceKms?: number | null
    /**
   * The number of free generator hours for the entire rental (not daily).
   */
    freeGeneratorHours?: number
    /**
   * If the rental charges per hour for generator usage, the
   */
    generatorPriceHourly?: number
    /**
   * Did the guest add delivery? Yes (1) or no (0)
   */
    hasDelivery: boolean
    /**
   * Whether the booking request has pets
   */
    hasPets: boolean
    /**
   * The quoted price for insurance.
   */
    insurancePrice: number
    /**
   * The type of insurance being quoted.
   */
    insuranceType: string
    /**
   * Whether or not the RV clicked was available because of the ShortStays feature.
   */
    isShortStay: boolean
    /**
   * whether or not this booking is planning on moving the RV after delivery or not. (based on the question asked on the first page of the booking flow)
   */
    isStationaryDelivery?: boolean
    /**
   * The total quoted discount that is displayed in blue.
   */
    monthlyDiscount?: number
    /**
   * The page the user was on when they got a trip quote presented (ex. Listing Page, Initial Inquiry, Booking flow pages)
   */
    pageSource: string
    /**
   * The quoted rental price per night that is displayed.
   */
    pricePerNight: number
    /**
   * The quoted rental price for total nights only that is displayed.
   */
    rentalPrice: number
    /**
   * The quoted price for roadside assistance.
   */
    roadsidePrice?: number
    /**
   * The unique ID associated with an RV.
   */
    rvId: string
    /**
   * The quoted security deposit that will be taken on the security deposit date.
   */
    securityDepositPrice: number
    /**
   * The quoted service fee paid to RVezy.
   */
    servicePrice: number
    /**
   * This is the nightly rate that is displayed for the listing that has smart pricing
   */
    smartNightlyRate: number
    /**
   * The date that the requested booking is to begin.
   */
    startDate: string
    /**
   * The total dollar value for the entire rental that is displayed.
   */
    totalPrice: number
    /**
   * Difference between start date and end date. Effectively, the number of nights for a trip
   */
    tripLength: number
    /**
   * The total quoted discount that is displayed in blue.
   */
    weeklyDiscount?: number

  }
  'TripStarted': {

    /**
   * The unique ID associated with the booking (same as booking number).
   */
    bookingId: number
    /**
   * The unique ID of the host/owner of the booking.
   */
    ownerId: number
    /**
   * The unique ID of the guest/renter of the booking.
   */
    renterId: number
    /**
   * The unique ID associated with the RV.
   */
    rvId: string

  }
  'TripStarted [v1]': {

    /**
   * The unique ID associated with the booking (same as booking number).
   */
    bookingId: number
    /**
   * The unique ID of the host/owner of the booking.
   */
    ownerId: number
    /**
   * The unique ID of the guest/renter of the booking.
   */
    renterId: number
    /**
   * The unique ID associated with the RV.
   */
    rvId: string

  }
  'TripsPageViewed': {

    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country where the host is located
   */
    accountCountry?: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * the cta the user clicked on to get to this screen. (ie. was it from the inbox message, or the bookings/trips card or host dashboard card, etc. )
   */
    cta?: string
    /**
   * If user viewed the All tab
   */
    isAllTab?: boolean
    /**
   * If user viewed the completed tab
   */
    isCompletedTab?: boolean
    /**
   * If user viewed the confirmed tab
   */
    isConfirmedTab?: boolean
    /**
   * If user viewed the pending tab
   */
    isPendingTab?: boolean
    /**
   * the number of bookings listed in the bookings tab that is loaded. (should work if there is 0 cards?)
   */
    numberOfTripCards?: number
    /**
   * The source screen that came before their next action if applicable
   */
    pageSource?: string
    /**
   * The user ID of the host viewing the bookings page
   */
    userId?: number

  }
  'TripsPageViewed [v1]': {

    /**
   * The ISO 3166-1 alpha-2 country enum that represents the country where the host is located
   */
    accountCountry?: 'au' | 'ca' | 'de' | 'fr' | 'gb' | 'it' | 'nz' | 'us'
    /**
   * the cta the user clicked on to get to this screen. (ie. was it from the inbox message, or the bookings/trips card or host dashboard card, etc. )
   */
    cta?: string
    /**
   * If user viewed the All tab
   */
    isAllTab?: boolean
    /**
   * If user viewed the completed tab
   */
    isCompletedTab?: boolean
    /**
   * If user viewed the confirmed tab
   */
    isConfirmedTab?: boolean
    /**
   * If user viewed the pending tab
   */
    isPendingTab?: boolean
    /**
   * the number of bookings listed in the bookings tab that is loaded. (should work if there is 0 cards?)
   */
    numberOfTripCards?: number
    /**
   * The source screen that came before their next action if applicable
   */
    pageSource?: string
    /**
   * The user ID of the host viewing the bookings page
   */
    userId?: number

  }
  'UpsellBadgePresented': {

    /**
   * How many extra days is the user required to add to get the discount
   */
    extraDays: number
    /**
   * Price difference as shown on the upsell badge.
   */
    priceDifference: number
    /**
   * Type of discount/upsell.
   */
    upsellType: string
    /**
   * If the upsell badge is present (1) or not (0).
   */
    visible: boolean

  }
  'UpsellBadgePresented [v1]': {

    /**
   * How many extra days is the user required to add to get the discount
   */
    extraDays: number
    /**
   * Price difference as shown on the upsell badge.
   */
    priceDifference: number
    /**
   * Type of discount/upsell.
   */
    upsellType: string
    /**
   * If the upsell badge is present (1) or not (0).
   */
    visible: boolean

  }
  'ViewDetailsPriceBreakdownViewed': {

    /**
   * The total price for all selected addons.
   */
    addonPrice?: number
    /**
   * The number of adults that the requested booking will have.
   */
    adults?: number
    /**
   * The unique ID associated with the booking (same as booking number).
   */
    bookingID?: number
    /**
   * The number of children that the requested booking will have.
   */
    children?: number
    /**
   * The quoted price for cleaning.
   */
    cleaningPrice: number
    /**
   * The ISO 4217 currency code that is displayed.
   */
    currency: 'aud' | 'cad' | 'eur' | 'gbp' | 'nzd' | 'usd'
    /**
   * The extra price per KM that is charged above the freeDistanceKms.
   */
    distancePriceKms?: number
    /**
   * The datetime that the requested booking is to end.
   */
    endDate?: string
    /**
   * The total number of free kilometers included for the RV. Natural rounding and conversion to KMs if quoted in miles.
   */
    freeDistanceKms?: number
    /**
   * The number of free generator hours for the entire rental (not daily).
   */
    freeGeneratorHours?: number
    /**
   * If the rental charges per hour for generator usage, the price per hour.
   */
    generatorPriceHourly?: number
    /**
   * whether the user viewing the price details is an owner
   */
    hasDelivery: boolean
    /**
   * The quoted price for insurance.
   */
    insurancePrice?: number
    /**
   * whether the user viewing the price details is an owner
   */
    isOwner: boolean
    /**
   * The screen that the user came from.
   */
    pageSource: string
    /**
   * The quoted rental price for total nights only that is displayed.
   */
    rentalPrice: number
    /**
   * The quoted price for roadside assistance.
   */
    roadsidePrice?: number | null
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId: string
    /**
   * The quoted security deposit that will be taken on the security deposit date.
   */
    securityDepositPrice?: number
    /**
   * The quoted service fee paid to RVezy by the renter.
   */
    servicePrice: number
    /**
   * The datetime that the requested booking is to begin.
   */
    startDate?: string
    /**
   * The total dollar value for the entire booking that is displayed.
   */
    totalPrice: number
    /**
   * Difference between start date and end date for the requested booking. Effectively, the number of nights for a trip
   */
    tripLength: number

  }
  'ViewDetailsPriceBreakdownViewed [v1]': {

    /**
   * The total price for all selected addons.
   */
    addonPrice?: number
    /**
   * The number of adults that the requested booking will have.
   */
    adults?: number
    /**
   * The unique ID associated with the booking (same as booking number).
   */
    bookingID?: number
    /**
   * The number of children that the requested booking will have.
   */
    children?: number
    /**
   * The quoted price for cleaning.
   */
    cleaningPrice: number
    /**
   * The ISO 4217 currency code that is displayed.
   */
    currency: 'aud' | 'cad' | 'eur' | 'gbp' | 'nzd' | 'usd'
    /**
   * The extra price per KM that is charged above the freeDistanceKms.
   */
    distancePriceKms?: number
    /**
   * The datetime that the requested booking is to end.
   */
    endDate?: string
    /**
   * The total number of free kilometers included for the RV. Natural rounding and conversion to KMs if quoted in miles.
   */
    freeDistanceKms?: number
    /**
   * The number of free generator hours for the entire rental (not daily).
   */
    freeGeneratorHours?: number
    /**
   * If the rental charges per hour for generator usage, the price per hour.
   */
    generatorPriceHourly?: number
    /**
   * whether the user viewing the price details is an owner
   */
    hasDelivery: boolean
    /**
   * The quoted price for insurance.
   */
    insurancePrice?: number
    /**
   * whether the user viewing the price details is an owner
   */
    isOwner: boolean
    /**
   * The screen that the user came from.
   */
    pageSource: string
    /**
   * The quoted rental price for total nights only that is displayed.
   */
    rentalPrice: number
    /**
   * The quoted price for roadside assistance.
   */
    roadsidePrice?: number | null
    /**
   * The unique ID of the RV, as is assigned and stored by the backend.
   */
    rvId: string
    /**
   * The quoted security deposit that will be taken on the security deposit date.
   */
    securityDepositPrice?: number
    /**
   * The quoted service fee paid to RVezy by the renter.
   */
    servicePrice: number
    /**
   * The datetime that the requested booking is to begin.
   */
    startDate?: string
    /**
   * The total dollar value for the entire booking that is displayed.
   */
    totalPrice: number
    /**
   * Difference between start date and end date for the requested booking. Effectively, the number of nights for a trip
   */
    tripLength: number

  }
  'WebPushPermissionRequested': {

    /**
   * The CTA that got the user to this screen.
   */
    cta?: string
    /**
   * The screen that the user came from.
   */
    pageSource?: string

  }
  'WebPushPermissionRequested [v1]': {

    /**
   * The CTA that got the user to this screen.
   */
    cta?: string
    /**
   * The screen that the user came from.
   */
    pageSource?: string

  }
  'WebPushPermissionResponded': {

    /**
   * The CTA that got the user to this screen.
   */
    cta?: string
    /**
   * The screen that the user came from.
   */
    pageSource?: string
    /**
   * The action that the user took to exit the process.Any of: close (X is clicked), clickoutside (area outside of modal is clicked), back (back button pressed or back gesture is recorded), providerexit (some action was detected in the provider that indicated that the user did not complete successfully), login (clicked to go to login screen instead)
   */
    response: 'denied' | 'granted'

  }
  'WebPushPermissionResponded [v1]': {

    /**
   * The CTA that got the user to this screen.
   */
    cta?: string
    /**
   * The screen that the user came from.
   */
    pageSource?: string
    /**
   * The action that the user took to exit the process.Any of: close (X is clicked), clickoutside (area outside of modal is clicked), back (back button pressed or back gesture is recorded), providerexit (some action was detected in the provider that indicated that the user did not complete successfully), login (clicked to go to login screen instead)
   */
    response: 'denied' | 'granted'

  }
  'refundMethodSelected': {

    /**
   * The unique ID associated with the booking request.
   */
    bookingId: number
    /**
   * The method through which the booking was created.
   */
    bookingType?: 'enquiry' | 'ezmatch' | 'instant' | 'normal'
    /**
   * The amount shown to the Guest that they would receive in refund, if they choose ‘Original payment method’ as method of refund.
   */
    cashAmount: number
    /**
   * The amount shown to the Guest that they would receive in refund, if they choose ‘RVezy credit’ as method of refund.
   */
    creditAmount: number
    /**
   * The ISO 4217 currency code that is displayed.
   */
    currency: 'aud' | 'cad' | 'eur' | 'gbp' | 'nzd' | 'usd'
    /**
   * The refund method Guest submitted the request for.
   */
    methodSelected: string
    /**
   * The user ID of the the Guest
   */
    userId: string

  }
  'refundMethodSelected [v1]': {

    /**
   * The unique ID associated with the booking request.
   */
    bookingId: number
    /**
   * The method through which the booking was created.
   */
    bookingType?: 'enquiry' | 'ezmatch' | 'instant' | 'normal'
    /**
   * The amount shown to the Guest that they would receive in refund, if they choose ‘Original payment method’ as method of refund.
   */
    cashAmount: number
    /**
   * The amount shown to the Guest that they would receive in refund, if they choose ‘RVezy credit’ as method of refund.
   */
    creditAmount: number
    /**
   * The ISO 4217 currency code that is displayed.
   */
    currency: 'aud' | 'cad' | 'eur' | 'gbp' | 'nzd' | 'usd'
    /**
   * The refund method Guest submitted the request for.
   */
    methodSelected: string
    /**
   * The user ID of the the Guest
   */
    userId: string

  }
  'searchForRvClicked': {

    /**
   * The unique ID associated with the booking request.
   */
    bookingId: number
    /**
   * The method through which the booking was created.
   */
    bookingType?: 'enquiry' | 'ezmatch' | 'instant' | 'normal'
    /**
   * The CTA that got the user to this screen.
   */
    cta?: string
    /**
   * The ISO 4217 currency code that is displayed.
   */
    currency: 'aud' | 'cad' | 'eur' | 'gbp' | 'nzd' | 'usd'
    /**
   * The refund method Guest submitted the request for.
   */
    methodSelected: string
    /**
   * The screen that the user came from.
   */
    pageSource?: string
    /**
   * The user ID of the the user Guest
   */
    userId: string

  }
  'searchForRvClicked [v1]': {

    /**
   * The unique ID associated with the booking request.
   */
    bookingId: number
    /**
   * The method through which the booking was created.
   */
    bookingType?: 'enquiry' | 'ezmatch' | 'instant' | 'normal'
    /**
   * The CTA that got the user to this screen.
   */
    cta?: string
    /**
   * The ISO 4217 currency code that is displayed.
   */
    currency: 'aud' | 'cad' | 'eur' | 'gbp' | 'nzd' | 'usd'
    /**
   * The refund method Guest submitted the request for.
   */
    methodSelected: string
    /**
   * The screen that the user came from.
   */
    pageSource?: string
    /**
   * The user ID of the the user Guest
   */
    userId: string

  } }

export const PropertyMetadata = { 'AddFavouriteClicked': {
  name: 'AddFavouriteClicked',
  version: 1,
}, 'AddFavouriteClicked [v1]': {
  name: 'AddFavouriteClicked',
  version: 1,
}, 'AffiliateLinkClicked': {
  name: 'AffiliateLinkClicked',
  version: 1,
}, 'AffiliateLinkClicked [v1]': {
  name: 'AffiliateLinkClicked',
  version: 1,
}, 'AppBannerClicked': {
  name: 'AppBannerClicked',
  version: 2,
}, 'AppBannerClicked [v1]': {
  name: 'AppBannerClicked',
  version: 1,
}, 'AppBannerClicked [v2]': {
  name: 'AppBannerClicked',
  version: 2,
}, 'AppBannerClosed': {
  name: 'AppBannerClosed',
  version: 2,
}, 'AppBannerClosed [v1]': {
  name: 'AppBannerClosed',
  version: 1,
}, 'AppBannerClosed [v2]': {
  name: 'AppBannerClosed',
  version: 2,
}, 'AppRaterRateAppClicked': {
  name: 'AppRaterRateAppClicked',
  version: 1,
}, 'AppRaterRateAppClicked [v1]': {
  name: 'AppRaterRateAppClicked',
  version: 1,
}, 'AppRaterResponded': {
  name: 'AppRaterResponded',
  version: 1,
}, 'AppRaterResponded [v1]': {
  name: 'AppRaterResponded',
  version: 1,
}, 'AppRaterViewed': {
  name: 'AppRaterViewed',
  version: 1,
}, 'AppRaterViewed [v1]': {
  name: 'AppRaterViewed',
  version: 1,
}, 'Application Backgrounded': {
  name: 'Application Backgrounded',
  version: 1,
}, 'Application Backgrounded [v1]': {
  name: 'Application Backgrounded',
  version: 1,
}, 'Application Installed': {
  name: 'Application Installed',
  version: 1,
}, 'Application Installed [v1]': {
  name: 'Application Installed',
  version: 1,
}, 'Application Opened': {
  name: 'Application Opened',
  version: 1,
}, 'Application Opened [v1]': {
  name: 'Application Opened',
  version: 1,
}, 'Application Updated': {
  name: 'Application Updated',
  version: 1,
}, 'Application Updated [v1]': {
  name: 'Application Updated',
  version: 1,
}, 'BannerClicked': {
  name: 'BannerClicked',
  version: 1,
}, 'BannerClicked [v1]': {
  name: 'BannerClicked',
  version: 1,
}, 'BannerClosed': {
  name: 'BannerClosed',
  version: 1,
}, 'BannerClosed [v1]': {
  name: 'BannerClosed',
  version: 1,
}, 'BookingCancelled': {
  name: 'BookingCancelled',
  version: 4,
}, 'BookingCancelled [v1]': {
  name: 'BookingCancelled',
  version: 1,
}, 'BookingCancelled [v2]': {
  name: 'BookingCancelled',
  version: 2,
}, 'BookingCancelled [v3]': {
  name: 'BookingCancelled',
  version: 3,
}, 'BookingCancelled [v4]': {
  name: 'BookingCancelled',
  version: 4,
}, 'BookingCardClicked': {
  name: 'BookingCardClicked',
  version: 1,
}, 'BookingCardClicked [v1]': {
  name: 'BookingCardClicked',
  version: 1,
}, 'BookingDetailsCtaClicked': {
  name: 'BookingDetailsCtaClicked',
  version: 2,
}, 'BookingDetailsCtaClicked [v1]': {
  name: 'BookingDetailsCtaClicked',
  version: 1,
}, 'BookingDetailsCtaClicked [v2]': {
  name: 'BookingDetailsCtaClicked',
  version: 2,
}, 'BookingDetailsViewed': {
  name: 'BookingDetailsViewed',
  version: 4,
}, 'BookingDetailsViewed [v1]': {
  name: 'BookingDetailsViewed',
  version: 1,
}, 'BookingDetailsViewed [v2]': {
  name: 'BookingDetailsViewed',
  version: 2,
}, 'BookingDetailsViewed [v3]': {
  name: 'BookingDetailsViewed',
  version: 3,
}, 'BookingDetailsViewed [v4]': {
  name: 'BookingDetailsViewed',
  version: 4,
}, 'BookingPaymentDepositSuccessful': {
  name: 'BookingPaymentDepositSuccessful',
  version: 1,
}, 'BookingPaymentDepositSuccessful [v1]': {
  name: 'BookingPaymentDepositSuccessful',
  version: 1,
}, 'BookingPaymentFailed': {
  name: 'BookingPaymentFailed',
  version: 3,
}, 'BookingPaymentFailed [v1]': {
  name: 'BookingPaymentFailed',
  version: 1,
}, 'BookingPaymentFailed [v2]': {
  name: 'BookingPaymentFailed',
  version: 2,
}, 'BookingPaymentFailed [v3]': {
  name: 'BookingPaymentFailed',
  version: 3,
}, 'BookingPaymentFeeSuccessful': {
  name: 'BookingPaymentFeeSuccessful',
  version: 6,
}, 'BookingPaymentFeeSuccessful [v1]': {
  name: 'BookingPaymentFeeSuccessful',
  version: 1,
}, 'BookingPaymentFeeSuccessful [v2]': {
  name: 'BookingPaymentFeeSuccessful',
  version: 2,
}, 'BookingPaymentFeeSuccessful [v3]': {
  name: 'BookingPaymentFeeSuccessful',
  version: 3,
}, 'BookingPaymentFeeSuccessful [v4]': {
  name: 'BookingPaymentFeeSuccessful',
  version: 4,
}, 'BookingPaymentFeeSuccessful [v5]': {
  name: 'BookingPaymentFeeSuccessful',
  version: 5,
}, 'BookingPaymentFeeSuccessful [v6]': {
  name: 'BookingPaymentFeeSuccessful',
  version: 6,
}, 'BookingPaymentFormViewed': {
  name: 'BookingPaymentFormViewed',
  version: 6,
}, 'BookingPaymentFormViewed [v1]': {
  name: 'BookingPaymentFormViewed',
  version: 1,
}, 'BookingPaymentFormViewed [v2]': {
  name: 'BookingPaymentFormViewed',
  version: 2,
}, 'BookingPaymentFormViewed [v3]': {
  name: 'BookingPaymentFormViewed',
  version: 3,
}, 'BookingPaymentFormViewed [v4]': {
  name: 'BookingPaymentFormViewed',
  version: 4,
}, 'BookingPaymentFormViewed [v5]': {
  name: 'BookingPaymentFormViewed',
  version: 5,
}, 'BookingPaymentFormViewed [v6]': {
  name: 'BookingPaymentFormViewed',
  version: 6,
}, 'BookingPaymentInfoSubmitClicked': {
  name: 'BookingPaymentInfoSubmitClicked',
  version: 3,
}, 'BookingPaymentInfoSubmitClicked [v1]': {
  name: 'BookingPaymentInfoSubmitClicked',
  version: 1,
}, 'BookingPaymentInfoSubmitClicked [v2]': {
  name: 'BookingPaymentInfoSubmitClicked',
  version: 2,
}, 'BookingPaymentInfoSubmitClicked [v3]': {
  name: 'BookingPaymentInfoSubmitClicked',
  version: 3,
}, 'BookingPaymentInfoSubmitFailed': {
  name: 'BookingPaymentInfoSubmitFailed',
  version: 1,
}, 'BookingPaymentInfoSubmitFailed [v1]': {
  name: 'BookingPaymentInfoSubmitFailed',
  version: 1,
}, 'BookingPaymentInfoSubmitted': {
  name: 'BookingPaymentInfoSubmitted',
  version: 7,
}, 'BookingPaymentInfoSubmitted [v1]': {
  name: 'BookingPaymentInfoSubmitted',
  version: 1,
}, 'BookingPaymentInfoSubmitted [v2]': {
  name: 'BookingPaymentInfoSubmitted',
  version: 2,
}, 'BookingPaymentInfoSubmitted [v3]': {
  name: 'BookingPaymentInfoSubmitted',
  version: 3,
}, 'BookingPaymentInfoSubmitted [v4]': {
  name: 'BookingPaymentInfoSubmitted',
  version: 4,
}, 'BookingPaymentInfoSubmitted [v5]': {
  name: 'BookingPaymentInfoSubmitted',
  version: 5,
}, 'BookingPaymentInfoSubmitted [v6]': {
  name: 'BookingPaymentInfoSubmitted',
  version: 6,
}, 'BookingPaymentInfoSubmitted [v7]': {
  name: 'BookingPaymentInfoSubmitted',
  version: 7,
}, 'BookingRequestGuestDeclined': {
  name: 'BookingRequestGuestDeclined',
  version: 1,
}, 'BookingRequestGuestDeclined [v1]': {
  name: 'BookingRequestGuestDeclined',
  version: 1,
}, 'BookingRequestHostResponded': {
  name: 'BookingRequestHostResponded',
  version: 3,
}, 'BookingRequestHostResponded [v1]': {
  name: 'BookingRequestHostResponded',
  version: 1,
}, 'BookingRequestHostResponded [v2]': {
  name: 'BookingRequestHostResponded',
  version: 2,
}, 'BookingRequestHostResponded [v3]': {
  name: 'BookingRequestHostResponded',
  version: 3,
}, 'BookingRequestSubmitted': {
  name: 'BookingRequestSubmitted',
  version: 1,
}, 'BookingRequestSubmitted [v1]': {
  name: 'BookingRequestSubmitted',
  version: 1,
}, 'BookingsPageViewed': {
  name: 'BookingsPageViewed',
  version: 1,
}, 'BookingsPageViewed [v1]': {
  name: 'BookingsPageViewed',
  version: 1,
}, 'BuyNowPayLaterContinueClicked': {
  name: 'BuyNowPayLaterContinueClicked',
  version: 1,
}, 'BuyNowPayLaterContinueClicked [v1]': {
  name: 'BuyNowPayLaterContinueClicked',
  version: 1,
}, 'BuyRvClicked': {
  name: 'BuyRvClicked',
  version: 1,
}, 'BuyRvClicked [v1]': {
  name: 'BuyRvClicked',
  version: 1,
}, 'CTAClicked': {
  name: 'CTAClicked',
  version: 1,
}, 'CTAClicked [v1]': {
  name: 'CTAClicked',
  version: 1,
}, 'CalendarConnectCtaClicked': {
  name: 'CalendarConnectCtaClicked',
  version: 1,
}, 'CalendarConnectCtaClicked [v1]': {
  name: 'CalendarConnectCtaClicked',
  version: 1,
}, 'CalendarConnectLinkCopied': {
  name: 'CalendarConnectLinkCopied',
  version: 1,
}, 'CalendarConnectLinkCopied [v1]': {
  name: 'CalendarConnectLinkCopied',
  version: 1,
}, 'CalendarConnectModalViewed': {
  name: 'CalendarConnectModalViewed',
  version: 1,
}, 'CalendarConnectModalViewed [v1]': {
  name: 'CalendarConnectModalViewed',
  version: 1,
}, 'CalendarImportFieldClicked': {
  name: 'CalendarImportFieldClicked',
  version: 1,
}, 'CalendarImportFieldClicked [v1]': {
  name: 'CalendarImportFieldClicked',
  version: 1,
}, 'CalendarImportModalViewed': {
  name: 'CalendarImportModalViewed',
  version: 1,
}, 'CalendarImportModalViewed [v1]': {
  name: 'CalendarImportModalViewed',
  version: 1,
}, 'CalendarImportSubmitted': {
  name: 'CalendarImportSubmitted',
  version: 1,
}, 'CalendarImportSubmitted [v1]': {
  name: 'CalendarImportSubmitted',
  version: 1,
}, 'CalendarSyncFailed': {
  name: 'CalendarSyncFailed',
  version: 1,
}, 'CalendarSyncFailed [v1]': {
  name: 'CalendarSyncFailed',
  version: 1,
}, 'CalendarSyncRemoved': {
  name: 'CalendarSyncRemoved',
  version: 1,
}, 'CalendarSyncRemoved [v1]': {
  name: 'CalendarSyncRemoved',
  version: 1,
}, 'CalendarSyncSuccessful': {
  name: 'CalendarSyncSuccessful',
  version: 1,
}, 'CalendarSyncSuccessful [v1]': {
  name: 'CalendarSyncSuccessful',
  version: 1,
}, 'CalendarTutorialClicked': {
  name: 'CalendarTutorialClicked',
  version: 1,
}, 'CalendarTutorialClicked [v1]': {
  name: 'CalendarTutorialClicked',
  version: 1,
}, 'CalendarUpdateSuccessful': {
  name: 'CalendarUpdateSuccessful',
  version: 3,
}, 'CalendarUpdateSuccessful [v1]': {
  name: 'CalendarUpdateSuccessful',
  version: 1,
}, 'CalendarUpdateSuccessful [v2]': {
  name: 'CalendarUpdateSuccessful',
  version: 2,
}, 'CalendarUpdateSuccessful [v3]': {
  name: 'CalendarUpdateSuccessful',
  version: 3,
}, 'Checkout Started': {
  name: 'Checkout Started',
  version: 1,
}, 'Checkout Started [v1]': {
  name: 'Checkout Started',
  version: 1,
}, 'CloseoutReviewed': {
  name: 'CloseoutReviewed',
  version: 1,
}, 'CloseoutReviewed [v1]': {
  name: 'CloseoutReviewed',
  version: 1,
}, 'CloseoutSubmitted': {
  name: 'CloseoutSubmitted',
  version: 3,
}, 'CloseoutSubmitted [v1]': {
  name: 'CloseoutSubmitted',
  version: 1,
}, 'CloseoutSubmitted [v2]': {
  name: 'CloseoutSubmitted',
  version: 2,
}, 'CloseoutSubmitted [v3]': {
  name: 'CloseoutSubmitted',
  version: 3,
}, 'CurrencySelectorClicked': {
  name: 'CurrencySelectorClicked',
  version: 1,
}, 'CurrencySelectorClicked [v1]': {
  name: 'CurrencySelectorClicked',
  version: 1,
}, 'CurrencyUpdated': {
  name: 'CurrencyUpdated',
  version: 1,
}, 'CurrencyUpdated [v1]': {
  name: 'CurrencyUpdated',
  version: 1,
}, 'DeliveryEducationalModalClicked': {
  name: 'DeliveryEducationalModalClicked',
  version: 1,
}, 'DeliveryEducationalModalClicked [v1]': {
  name: 'DeliveryEducationalModalClicked',
  version: 1,
}, 'DisputeChargesClicked': {
  name: 'DisputeChargesClicked',
  version: 1,
}, 'DisputeChargesClicked [v1]': {
  name: 'DisputeChargesClicked',
  version: 1,
}, 'DisputeChargesOpened': {
  name: 'DisputeChargesOpened',
  version: 1,
}, 'DisputeChargesOpened [v1]': {
  name: 'DisputeChargesOpened',
  version: 1,
}, 'DisputeSubmitted': {
  name: 'DisputeSubmitted',
  version: 2,
}, 'DisputeSubmitted [v1]': {
  name: 'DisputeSubmitted',
  version: 1,
}, 'DisputeSubmitted [v2]': {
  name: 'DisputeSubmitted',
  version: 2,
}, 'EditBookingAccepted': {
  name: 'EditBookingAccepted',
  version: 1,
}, 'EditBookingAccepted [v1]': {
  name: 'EditBookingAccepted',
  version: 1,
}, 'EditBookingActioned': {
  name: 'EditBookingActioned',
  version: 1,
}, 'EditBookingActioned [v1]': {
  name: 'EditBookingActioned',
  version: 1,
}, 'EditBookingClicked': {
  name: 'EditBookingClicked',
  version: 1,
}, 'EditBookingClicked [v1]': {
  name: 'EditBookingClicked',
  version: 1,
}, 'EditBookingDeclined': {
  name: 'EditBookingDeclined',
  version: 1,
}, 'EditBookingDeclined [v1]': {
  name: 'EditBookingDeclined',
  version: 1,
}, 'EditBookingExited': {
  name: 'EditBookingExited',
  version: 1,
}, 'EditBookingExited [v1]': {
  name: 'EditBookingExited',
  version: 1,
}, 'EditBookingOptionsClicked': {
  name: 'EditBookingOptionsClicked',
  version: 1,
}, 'EditBookingOptionsClicked [v1]': {
  name: 'EditBookingOptionsClicked',
  version: 1,
}, 'EditBookingReviewed': {
  name: 'EditBookingReviewed',
  version: 1,
}, 'EditBookingReviewed [v1]': {
  name: 'EditBookingReviewed',
  version: 1,
}, 'EditBookingSubmitted': {
  name: 'EditBookingSubmitted',
  version: 1,
}, 'EditBookingSubmitted [v1]': {
  name: 'EditBookingSubmitted',
  version: 1,
}, 'EditBookingSubmittedSuccessful': {
  name: 'EditBookingSubmittedSuccessful',
  version: 1,
}, 'EditBookingSubmittedSuccessful [v1]': {
  name: 'EditBookingSubmittedSuccessful',
  version: 1,
}, 'EditListingSaved': {
  name: 'EditListingSaved',
  version: 1,
}, 'EditListingSaved [v1]': {
  name: 'EditListingSaved',
  version: 1,
}, 'EditListingViewed': {
  name: 'EditListingViewed',
  version: 2,
}, 'EditListingViewed [v1]': {
  name: 'EditListingViewed',
  version: 1,
}, 'EditListingViewed [v2]': {
  name: 'EditListingViewed',
  version: 2,
}, 'EditTripProtectionClicked': {
  name: 'EditTripProtectionClicked',
  version: 1,
}, 'EditTripProtectionClicked [v1]': {
  name: 'EditTripProtectionClicked',
  version: 1,
}, 'EditTripProtectionExited': {
  name: 'EditTripProtectionExited',
  version: 1,
}, 'EditTripProtectionExited [v1]': {
  name: 'EditTripProtectionExited',
  version: 1,
}, 'EditTripProtectionReviewed': {
  name: 'EditTripProtectionReviewed',
  version: 1,
}, 'EditTripProtectionReviewed [v1]': {
  name: 'EditTripProtectionReviewed',
  version: 1,
}, 'EditTripProtectionSubmitted': {
  name: 'EditTripProtectionSubmitted',
  version: 1,
}, 'EditTripProtectionSubmitted [v1]': {
  name: 'EditTripProtectionSubmitted',
  version: 1,
}, 'EditTripProtectionSubmittedSuccessful': {
  name: 'EditTripProtectionSubmittedSuccessful',
  version: 1,
}, 'EditTripProtectionSubmittedSuccessful [v1]': {
  name: 'EditTripProtectionSubmittedSuccessful',
  version: 1,
}, 'ExperimentViewed': {
  name: 'ExperimentViewed',
  version: 1,
}, 'ExperimentViewed [v1]': {
  name: 'ExperimentViewed',
  version: 1,
}, 'ExternalLinkClicked': {
  name: 'ExternalLinkClicked',
  version: 2,
}, 'ExternalLinkClicked [v1]': {
  name: 'ExternalLinkClicked',
  version: 1,
}, 'ExternalLinkClicked [v2]': {
  name: 'ExternalLinkClicked',
  version: 2,
}, 'EzyMatchReceived': {
  name: 'EzyMatchReceived',
  version: 1,
}, 'EzyMatchReceived [v1]': {
  name: 'EzyMatchReceived',
  version: 1,
}, 'FavoritesPageViewed': {
  name: 'FavoritesPageViewed',
  version: 2,
}, 'FavoritesPageViewed [v1]': {
  name: 'FavoritesPageViewed',
  version: 1,
}, 'FavoritesPageViewed [v2]': {
  name: 'FavoritesPageViewed',
  version: 2,
}, 'ForTodayCardClicked': {
  name: 'ForTodayCardClicked',
  version: 1,
}, 'ForTodayCardClicked [v1]': {
  name: 'ForTodayCardClicked',
  version: 1,
}, 'FullPaymentReminder': {
  name: 'FullPaymentReminder',
  version: 2,
}, 'FullPaymentReminder [v1]': {
  name: 'FullPaymentReminder',
  version: 1,
}, 'FullPaymentReminder [v2]': {
  name: 'FullPaymentReminder',
  version: 2,
}, 'GuestRequestMoneyEscalated': {
  name: 'GuestRequestMoneyEscalated',
  version: 1,
}, 'GuestRequestMoneyEscalated [v1]': {
  name: 'GuestRequestMoneyEscalated',
  version: 1,
}, 'GuestRequestMoneySent': {
  name: 'GuestRequestMoneySent',
  version: 1,
}, 'GuestRequestMoneySent [v1]': {
  name: 'GuestRequestMoneySent',
  version: 1,
}, 'HelpCenterClicked': {
  name: 'HelpCenterClicked',
  version: 1,
}, 'HelpCenterClicked [v1]': {
  name: 'HelpCenterClicked',
  version: 1,
}, 'HostAvailabilityUpdated': {
  name: 'HostAvailabilityUpdated',
  version: 3,
}, 'HostAvailabilityUpdated [v1]': {
  name: 'HostAvailabilityUpdated',
  version: 1,
}, 'HostAvailabilityUpdated [v2]': {
  name: 'HostAvailabilityUpdated',
  version: 2,
}, 'HostAvailabilityUpdated [v3]': {
  name: 'HostAvailabilityUpdated',
  version: 3,
}, 'HostAvailabilityViewed': {
  name: 'HostAvailabilityViewed',
  version: 1,
}, 'HostAvailabilityViewed [v1]': {
  name: 'HostAvailabilityViewed',
  version: 1,
}, 'HostDashboardCtaClicked': {
  name: 'HostDashboardCtaClicked',
  version: 1,
}, 'HostDashboardCtaClicked [v1]': {
  name: 'HostDashboardCtaClicked',
  version: 1,
}, 'HostDashboardViewed': {
  name: 'HostDashboardViewed',
  version: 1,
}, 'HostDashboardViewed [v1]': {
  name: 'HostDashboardViewed',
  version: 1,
}, 'HostEditBookingAccepted': {
  name: 'HostEditBookingAccepted',
  version: 1,
}, 'HostEditBookingAccepted [v1]': {
  name: 'HostEditBookingAccepted',
  version: 1,
}, 'HostEditBookingDeclinedSuccessful': {
  name: 'HostEditBookingDeclinedSuccessful',
  version: 1,
}, 'HostEditBookingDeclinedSuccessful [v1]': {
  name: 'HostEditBookingDeclinedSuccessful',
  version: 1,
}, 'HostEditBookingReponded': {
  name: 'HostEditBookingReponded',
  version: 1,
}, 'HostEditBookingReponded [v1]': {
  name: 'HostEditBookingReponded',
  version: 1,
}, 'HostEditBookingViewed': {
  name: 'HostEditBookingViewed',
  version: 1,
}, 'HostEditBookingViewed [v1]': {
  name: 'HostEditBookingViewed',
  version: 1,
}, 'HostInsightsPageViewed': {
  name: 'HostInsightsPageViewed',
  version: 2,
}, 'HostInsightsPageViewed [v1]': {
  name: 'HostInsightsPageViewed',
  version: 1,
}, 'HostInsightsPageViewed [v2]': {
  name: 'HostInsightsPageViewed',
  version: 2,
}, 'HostPerformanceTargetAchieved': {
  name: 'HostPerformanceTargetAchieved',
  version: 1,
}, 'HostPerformanceTargetAchieved [v1]': {
  name: 'HostPerformanceTargetAchieved',
  version: 1,
}, 'HostPerformanceTargetLost': {
  name: 'HostPerformanceTargetLost',
  version: 1,
}, 'HostPerformanceTargetLost [v1]': {
  name: 'HostPerformanceTargetLost',
  version: 1,
}, 'IdVerificationCreditConsentClicked': {
  name: 'IdVerificationCreditConsentClicked',
  version: 1,
}, 'IdVerificationCreditConsentClicked [v1]': {
  name: 'IdVerificationCreditConsentClicked',
  version: 1,
}, 'IdVerificationSuccessful': {
  name: 'IdVerificationSuccessful',
  version: 2,
}, 'IdVerificationSuccessful [v1]': {
  name: 'IdVerificationSuccessful',
  version: 1,
}, 'IdVerificationSuccessful [v2]': {
  name: 'IdVerificationSuccessful',
  version: 2,
}, 'InboxCardClicked': {
  name: 'InboxCardClicked',
  version: 1,
}, 'InboxCardClicked [v1]': {
  name: 'InboxCardClicked',
  version: 1,
}, 'InboxCtaClicked': {
  name: 'InboxCtaClicked',
  version: 1,
}, 'InboxCtaClicked [v1]': {
  name: 'InboxCtaClicked',
  version: 1,
}, 'InboxPageViewed': {
  name: 'InboxPageViewed',
  version: 1,
}, 'InboxPageViewed [v1]': {
  name: 'InboxPageViewed',
  version: 1,
}, 'InquirySent': {
  name: 'InquirySent',
  version: 2,
}, 'InquirySent [v1]': {
  name: 'InquirySent',
  version: 1,
}, 'InquirySent [v2]': {
  name: 'InquirySent',
  version: 2,
}, 'InspectionFormClicked': {
  name: 'InspectionFormClicked',
  version: 1,
}, 'InspectionFormClicked [v1]': {
  name: 'InspectionFormClicked',
  version: 1,
}, 'InspectionFormComplete': {
  name: 'InspectionFormComplete',
  version: 1,
}, 'InspectionFormComplete [v1]': {
  name: 'InspectionFormComplete',
  version: 1,
}, 'InspectionFormViewed': {
  name: 'InspectionFormViewed',
  version: 1,
}, 'InspectionFormViewed [v1]': {
  name: 'InspectionFormViewed',
  version: 1,
}, 'InspectionStartClicked': {
  name: 'InspectionStartClicked',
  version: 1,
}, 'InspectionStartClicked [v1]': {
  name: 'InspectionStartClicked',
  version: 1,
}, 'ListingApproved': {
  name: 'ListingApproved',
  version: 1,
}, 'ListingApproved [v1]': {
  name: 'ListingApproved',
  version: 1,
}, 'ListingClicked': {
  name: 'ListingClicked',
  version: 6,
}, 'ListingClicked [v1]': {
  name: 'ListingClicked',
  version: 1,
}, 'ListingClicked [v2]': {
  name: 'ListingClicked',
  version: 2,
}, 'ListingClicked [v3]': {
  name: 'ListingClicked',
  version: 3,
}, 'ListingClicked [v4]': {
  name: 'ListingClicked',
  version: 4,
}, 'ListingClicked [v5]': {
  name: 'ListingClicked',
  version: 5,
}, 'ListingClicked [v6]': {
  name: 'ListingClicked',
  version: 6,
}, 'ListingDeleted': {
  name: 'ListingDeleted',
  version: 1,
}, 'ListingDeleted [v1]': {
  name: 'ListingDeleted',
  version: 1,
}, 'ListingDraftCreated': {
  name: 'ListingDraftCreated',
  version: 1,
}, 'ListingDraftCreated [v1]': {
  name: 'ListingDraftCreated',
  version: 1,
}, 'ListingPhotoUpdated': {
  name: 'ListingPhotoUpdated',
  version: 1,
}, 'ListingPhotoUpdated [v1]': {
  name: 'ListingPhotoUpdated',
  version: 1,
}, 'ListingPublished': {
  name: 'ListingPublished',
  version: 1,
}, 'ListingPublished [v1]': {
  name: 'ListingPublished',
  version: 1,
}, 'ListingSetPresented': {
  name: 'ListingSetPresented',
  version: 4,
}, 'ListingSetPresented [v1]': {
  name: 'ListingSetPresented',
  version: 1,
}, 'ListingSetPresented [v2]': {
  name: 'ListingSetPresented',
  version: 2,
}, 'ListingSetPresented [v3]': {
  name: 'ListingSetPresented',
  version: 3,
}, 'ListingSetPresented [v4]': {
  name: 'ListingSetPresented',
  version: 4,
}, 'ListingSetViewed': {
  name: 'ListingSetViewed',
  version: 5,
}, 'ListingSetViewed [v1]': {
  name: 'ListingSetViewed',
  version: 1,
}, 'ListingSetViewed [v2]': {
  name: 'ListingSetViewed',
  version: 2,
}, 'ListingSetViewed [v3]': {
  name: 'ListingSetViewed',
  version: 3,
}, 'ListingSetViewed [v4]': {
  name: 'ListingSetViewed',
  version: 4,
}, 'ListingSetViewed [v5]': {
  name: 'ListingSetViewed',
  version: 5,
}, 'ListingStepSubmitted': {
  name: 'ListingStepSubmitted',
  version: 2,
}, 'ListingStepSubmitted [v1]': {
  name: 'ListingStepSubmitted',
  version: 1,
}, 'ListingStepSubmitted [v2]': {
  name: 'ListingStepSubmitted',
  version: 2,
}, 'ListingStepViewed': {
  name: 'ListingStepViewed',
  version: 1,
}, 'ListingStepViewed [v1]': {
  name: 'ListingStepViewed',
  version: 1,
}, 'ListingSuccessful': {
  name: 'ListingSuccessful',
  version: 1,
}, 'ListingSuccessful [v1]': {
  name: 'ListingSuccessful',
  version: 1,
}, 'ListingUnpublished': {
  name: 'ListingUnpublished',
  version: 1,
}, 'ListingUnpublished [v1]': {
  name: 'ListingUnpublished',
  version: 1,
}, 'ListingVerificationFailed': {
  name: 'ListingVerificationFailed',
  version: 1,
}, 'ListingVerificationFailed [v1]': {
  name: 'ListingVerificationFailed',
  version: 1,
}, 'ListingVerificationSuccessful': {
  name: 'ListingVerificationSuccessful',
  version: 1,
}, 'ListingVerificationSuccessful [v1]': {
  name: 'ListingVerificationSuccessful',
  version: 1,
}, 'ListingViewed': {
  name: 'ListingViewed',
  version: 3,
}, 'ListingViewed [v1]': {
  name: 'ListingViewed',
  version: 1,
}, 'ListingViewed [v2]': {
  name: 'ListingViewed',
  version: 2,
}, 'ListingViewed [v3]': {
  name: 'ListingViewed',
  version: 3,
}, 'LocationPermissionOptionSelected': {
  name: 'LocationPermissionOptionSelected',
  version: 1,
}, 'LocationPermissionOptionSelected [v1]': {
  name: 'LocationPermissionOptionSelected',
  version: 1,
}, 'LocationPermissionRequestViewed': {
  name: 'LocationPermissionRequestViewed',
  version: 1,
}, 'LocationPermissionRequestViewed [v1]': {
  name: 'LocationPermissionRequestViewed',
  version: 1,
}, 'LocationShared': {
  name: 'LocationShared',
  version: 1,
}, 'LocationShared [v1]': {
  name: 'LocationShared',
  version: 1,
}, 'LoginSuccessful': {
  name: 'LoginSuccessful',
  version: 1,
}, 'LoginSuccessful [v1]': {
  name: 'LoginSuccessful',
  version: 1,
}, 'MessageSent': {
  name: 'MessageSent',
  version: 3,
}, 'MessageSent [v1]': {
  name: 'MessageSent',
  version: 1,
}, 'MessageSent [v2]': {
  name: 'MessageSent',
  version: 2,
}, 'MessageSent [v3]': {
  name: 'MessageSent',
  version: 3,
}, 'MessageTemplateSelected': {
  name: 'MessageTemplateSelected',
  version: 2,
}, 'MessageTemplateSelected [v1]': {
  name: 'MessageTemplateSelected',
  version: 1,
}, 'MessageTemplateSelected [v2]': {
  name: 'MessageTemplateSelected',
  version: 2,
}, 'MorePageViewed': {
  name: 'MorePageViewed',
  version: 1,
}, 'MorePageViewed [v1]': {
  name: 'MorePageViewed',
  version: 1,
}, 'NavigationBarClicked': {
  name: 'NavigationBarClicked',
  version: 2,
}, 'NavigationBarClicked [v1]': {
  name: 'NavigationBarClicked',
  version: 1,
}, 'NavigationBarClicked [v2]': {
  name: 'NavigationBarClicked',
  version: 2,
}, 'NextStepsCardClicked': {
  name: 'NextStepsCardClicked',
  version: 1,
}, 'NextStepsCardClicked [v1]': {
  name: 'NextStepsCardClicked',
  version: 1,
}, 'NextStepsCardClosed': {
  name: 'NextStepsCardClosed',
  version: 1,
}, 'NextStepsCardClosed [v1]': {
  name: 'NextStepsCardClosed',
  version: 1,
}, 'NotificationsIconClicked': {
  name: 'NotificationsIconClicked',
  version: 1,
}, 'NotificationsIconClicked [v1]': {
  name: 'NotificationsIconClicked',
  version: 1,
}, 'NotificationsViewed': {
  name: 'NotificationsViewed',
  version: 1,
}, 'NotificationsViewed [v1]': {
  name: 'NotificationsViewed',
  version: 1,
}, 'OpenAppBannerClicked': {
  name: 'OpenAppBannerClicked',
  version: 1,
}, 'OpenAppBannerClicked [v1]': {
  name: 'OpenAppBannerClicked',
  version: 1,
}, 'Order Completed': {
  name: 'Order Completed',
  version: 1,
}, 'Order Completed [v1]': {
  name: 'Order Completed',
  version: 1,
}, 'OwnerCalendarViewed': {
  name: 'OwnerCalendarViewed',
  version: 1,
}, 'OwnerCalendarViewed [v1]': {
  name: 'OwnerCalendarViewed',
  version: 1,
}, 'OwnerCancellationModalClosed': {
  name: 'OwnerCancellationModalClosed',
  version: 1,
}, 'OwnerCancellationModalClosed [v1]': {
  name: 'OwnerCancellationModalClosed',
  version: 1,
}, 'OwnerCancellationModalViewed': {
  name: 'OwnerCancellationModalViewed',
  version: 1,
}, 'OwnerCancellationModalViewed [v1]': {
  name: 'OwnerCancellationModalViewed',
  version: 1,
}, 'Page Viewed': {
  name: 'Page Viewed',
  version: 1,
}, 'Page Viewed [v1]': {
  name: 'Page Viewed',
  version: 1,
}, 'PayInFullTapped': {
  name: 'PayInFullTapped',
  version: 1,
}, 'PayInFullTapped [v1]': {
  name: 'PayInFullTapped',
  version: 1,
}, 'PayWithPaypalClicked': {
  name: 'PayWithPaypalClicked',
  version: 1,
}, 'PayWithPaypalClicked [v1]': {
  name: 'PayWithPaypalClicked',
  version: 1,
}, 'PaymentUpdateSubmitted': {
  name: 'PaymentUpdateSubmitted',
  version: 2,
}, 'PaymentUpdateSubmitted [v1]': {
  name: 'PaymentUpdateSubmitted',
  version: 1,
}, 'PaymentUpdateSubmitted [v2]': {
  name: 'PaymentUpdateSubmitted',
  version: 2,
}, 'PaymentUpdateSubmittedSuccessful': {
  name: 'PaymentUpdateSubmittedSuccessful',
  version: 1,
}, 'PaymentUpdateSubmittedSuccessful [v1]': {
  name: 'PaymentUpdateSubmittedSuccessful',
  version: 1,
}, 'PaymentUpdateSuccessful': {
  name: 'PaymentUpdateSuccessful',
  version: 2,
}, 'PaymentUpdateSuccessful [v1]': {
  name: 'PaymentUpdateSuccessful',
  version: 1,
}, 'PaymentUpdateSuccessful [v2]': {
  name: 'PaymentUpdateSuccessful',
  version: 2,
}, 'PaymentUpdateViewed': {
  name: 'PaymentUpdateViewed',
  version: 2,
}, 'PaymentUpdateViewed [v1]': {
  name: 'PaymentUpdateViewed',
  version: 1,
}, 'PaymentUpdateViewed [v2]': {
  name: 'PaymentUpdateViewed',
  version: 2,
}, 'PayoutGuaranteeAdded': {
  name: 'PayoutGuaranteeAdded',
  version: 3,
}, 'PayoutGuaranteeAdded [v1]': {
  name: 'PayoutGuaranteeAdded',
  version: 1,
}, 'PayoutGuaranteeAdded [v2]': {
  name: 'PayoutGuaranteeAdded',
  version: 2,
}, 'PayoutGuaranteeAdded [v3]': {
  name: 'PayoutGuaranteeAdded',
  version: 3,
}, 'PayoutGuaranteeModalViewed': {
  name: 'PayoutGuaranteeModalViewed',
  version: 1,
}, 'PayoutGuaranteeModalViewed [v1]': {
  name: 'PayoutGuaranteeModalViewed',
  version: 1,
}, 'PayoutGuaranteeSettingToggled': {
  name: 'PayoutGuaranteeSettingToggled',
  version: 1,
}, 'PayoutGuaranteeSettingToggled [v1]': {
  name: 'PayoutGuaranteeSettingToggled',
  version: 1,
}, 'PayoutIssueSuccessful': {
  name: 'PayoutIssueSuccessful',
  version: 2,
}, 'PayoutIssueSuccessful [v1]': {
  name: 'PayoutIssueSuccessful',
  version: 1,
}, 'PayoutIssueSuccessful [v2]': {
  name: 'PayoutIssueSuccessful',
  version: 2,
}, 'PhotoCarouselUpdateSuccessful': {
  name: 'PhotoCarouselUpdateSuccessful',
  version: 2,
}, 'PhotoCarouselUpdateSuccessful [v1]': {
  name: 'PhotoCarouselUpdateSuccessful',
  version: 1,
}, 'PhotoCarouselUpdateSuccessful [v2]': {
  name: 'PhotoCarouselUpdateSuccessful',
  version: 2,
}, 'PhotoLightBoxUpdateSuccessful': {
  name: 'PhotoLightBoxUpdateSuccessful',
  version: 1,
}, 'PhotoLightBoxUpdateSuccessful [v1]': {
  name: 'PhotoLightBoxUpdateSuccessful',
  version: 1,
}, 'PointOfInterestViewed': {
  name: 'PointOfInterestViewed',
  version: 1,
}, 'PointOfInterestViewed [v1]': {
  name: 'PointOfInterestViewed',
  version: 1,
}, 'PreApproveInquiryClicked': {
  name: 'PreApproveInquiryClicked',
  version: 1,
}, 'PreApproveInquiryClicked [v1]': {
  name: 'PreApproveInquiryClicked',
  version: 1,
}, 'Product Added': {
  name: 'Product Added',
  version: 1,
}, 'Product Added [v1]': {
  name: 'Product Added',
  version: 1,
}, 'Product List Filtered': {
  name: 'Product List Filtered',
  version: 1,
}, 'Product List Filtered [v1]': {
  name: 'Product List Filtered',
  version: 1,
}, 'Product List Viewed': {
  name: 'Product List Viewed',
  version: 1,
}, 'Product List Viewed [v1]': {
  name: 'Product List Viewed',
  version: 1,
}, 'Product Viewed': {
  name: 'Product Viewed',
  version: 1,
}, 'Product Viewed [v1]': {
  name: 'Product Viewed',
  version: 1,
}, 'Products Searched': {
  name: 'Products Searched',
  version: 1,
}, 'Products Searched [v1]': {
  name: 'Products Searched',
  version: 1,
}, 'ProfileViewed': {
  name: 'ProfileViewed',
  version: 1,
}, 'ProfileViewed [v1]': {
  name: 'ProfileViewed',
  version: 1,
}, 'PromoBannerClicked': {
  name: 'PromoBannerClicked',
  version: 1,
}, 'PromoBannerClicked [v1]': {
  name: 'PromoBannerClicked',
  version: 1,
}, 'RVezyApplicationInstalled': {
  name: 'RVezyApplicationInstalled',
  version: 1,
}, 'RVezyApplicationInstalled [v1]': {
  name: 'RVezyApplicationInstalled',
  version: 1,
}, 'RVezyApplicationOpened': {
  name: 'RVezyApplicationOpened',
  version: 1,
}, 'RVezyApplicationOpened [v1]': {
  name: 'RVezyApplicationOpened',
  version: 1,
}, 'ReferralPurchaseCompleted': {
  name: 'ReferralPurchaseCompleted',
  version: 2,
}, 'ReferralPurchaseCompleted [v1]': {
  name: 'ReferralPurchaseCompleted',
  version: 1,
}, 'ReferralPurchaseCompleted [v2]': {
  name: 'ReferralPurchaseCompleted',
  version: 2,
}, 'ReferralRewardDistributed': {
  name: 'ReferralRewardDistributed',
  version: 1,
}, 'ReferralRewardDistributed [v1]': {
  name: 'ReferralRewardDistributed',
  version: 1,
}, 'RenterCancellationModalClosed': {
  name: 'RenterCancellationModalClosed',
  version: 1,
}, 'RenterCancellationModalClosed [v1]': {
  name: 'RenterCancellationModalClosed',
  version: 1,
}, 'RenterCancellationModalReasonSelected': {
  name: 'RenterCancellationModalReasonSelected',
  version: 1,
}, 'RenterCancellationModalReasonSelected [v1]': {
  name: 'RenterCancellationModalReasonSelected',
  version: 1,
}, 'RenterCancellationModalViewed': {
  name: 'RenterCancellationModalViewed',
  version: 1,
}, 'RenterCancellationModalViewed [v1]': {
  name: 'RenterCancellationModalViewed',
  version: 1,
}, 'RequestBookingBasicsSubmitted': {
  name: 'RequestBookingBasicsSubmitted',
  version: 5,
}, 'RequestBookingBasicsSubmitted [v1]': {
  name: 'RequestBookingBasicsSubmitted',
  version: 1,
}, 'RequestBookingBasicsSubmitted [v2]': {
  name: 'RequestBookingBasicsSubmitted',
  version: 2,
}, 'RequestBookingBasicsSubmitted [v3]': {
  name: 'RequestBookingBasicsSubmitted',
  version: 3,
}, 'RequestBookingBasicsSubmitted [v4]': {
  name: 'RequestBookingBasicsSubmitted',
  version: 4,
}, 'RequestBookingBasicsSubmitted [v5]': {
  name: 'RequestBookingBasicsSubmitted',
  version: 5,
}, 'RequestBookingBasicsViewed': {
  name: 'RequestBookingBasicsViewed',
  version: 6,
}, 'RequestBookingBasicsViewed [v1]': {
  name: 'RequestBookingBasicsViewed',
  version: 1,
}, 'RequestBookingBasicsViewed [v2]': {
  name: 'RequestBookingBasicsViewed',
  version: 2,
}, 'RequestBookingBasicsViewed [v3]': {
  name: 'RequestBookingBasicsViewed',
  version: 3,
}, 'RequestBookingBasicsViewed [v4]': {
  name: 'RequestBookingBasicsViewed',
  version: 4,
}, 'RequestBookingBasicsViewed [v5]': {
  name: 'RequestBookingBasicsViewed',
  version: 5,
}, 'RequestBookingBasicsViewed [v6]': {
  name: 'RequestBookingBasicsViewed',
  version: 6,
}, 'RequestBookingEnhanceViewed': {
  name: 'RequestBookingEnhanceViewed',
  version: 4,
}, 'RequestBookingEnhanceViewed [v1]': {
  name: 'RequestBookingEnhanceViewed',
  version: 1,
}, 'RequestBookingEnhanceViewed [v2]': {
  name: 'RequestBookingEnhanceViewed',
  version: 2,
}, 'RequestBookingEnhanceViewed [v3]': {
  name: 'RequestBookingEnhanceViewed',
  version: 3,
}, 'RequestBookingEnhanceViewed [v4]': {
  name: 'RequestBookingEnhanceViewed',
  version: 4,
}, 'RequestBookingSent': {
  name: 'RequestBookingSent',
  version: 7,
}, 'RequestBookingSent [v1]': {
  name: 'RequestBookingSent',
  version: 1,
}, 'RequestBookingSent [v3]': {
  name: 'RequestBookingSent',
  version: 3,
}, 'RequestBookingSent [v4]': {
  name: 'RequestBookingSent',
  version: 4,
}, 'RequestBookingSent [v5]': {
  name: 'RequestBookingSent',
  version: 5,
}, 'RequestBookingSent [v6]': {
  name: 'RequestBookingSent',
  version: 6,
}, 'RequestBookingSent [v7]': {
  name: 'RequestBookingSent',
  version: 7,
}, 'RequestBookingSuccessfulViewed': {
  name: 'RequestBookingSuccessfulViewed',
  version: 1,
}, 'RequestBookingSuccessfulViewed [v1]': {
  name: 'RequestBookingSuccessfulViewed',
  version: 1,
}, 'RequestMoneyChargeFailed': {
  name: 'RequestMoneyChargeFailed',
  version: 1,
}, 'RequestMoneyChargeFailed [v1]': {
  name: 'RequestMoneyChargeFailed',
  version: 1,
}, 'RequestMoneyClicked': {
  name: 'RequestMoneyClicked',
  version: 1,
}, 'RequestMoneyClicked [v1]': {
  name: 'RequestMoneyClicked',
  version: 1,
}, 'RequestMoneyReviewed': {
  name: 'RequestMoneyReviewed',
  version: 1,
}, 'RequestMoneyReviewed [v1]': {
  name: 'RequestMoneyReviewed',
  version: 1,
}, 'RequestMoneySent': {
  name: 'RequestMoneySent',
  version: 1,
}, 'RequestMoneySent [v1]': {
  name: 'RequestMoneySent',
  version: 1,
}, 'RequestMoneySuccessful': {
  name: 'RequestMoneySuccessful',
  version: 1,
}, 'RequestMoneySuccessful [v1]': {
  name: 'RequestMoneySuccessful',
  version: 1,
}, 'ReviewRequestSubmitted': {
  name: 'ReviewRequestSubmitted',
  version: 3,
}, 'ReviewRequestSubmitted [v1]': {
  name: 'ReviewRequestSubmitted',
  version: 1,
}, 'ReviewRequestSubmitted [v2]': {
  name: 'ReviewRequestSubmitted',
  version: 2,
}, 'ReviewRequestSubmitted [v3]': {
  name: 'ReviewRequestSubmitted',
  version: 3,
}, 'ReviewRequestViewed': {
  name: 'ReviewRequestViewed',
  version: 3,
}, 'ReviewRequestViewed [v1]': {
  name: 'ReviewRequestViewed',
  version: 1,
}, 'ReviewRequestViewed [v2]': {
  name: 'ReviewRequestViewed',
  version: 2,
}, 'ReviewRequestViewed [v3]': {
  name: 'ReviewRequestViewed',
  version: 3,
}, 'SearchFilterMenuOpened': {
  name: 'SearchFilterMenuOpened',
  version: 2,
}, 'SearchFilterMenuOpened [v1]': {
  name: 'SearchFilterMenuOpened',
  version: 1,
}, 'SearchFilterMenuOpened [v2]': {
  name: 'SearchFilterMenuOpened',
  version: 2,
}, 'SearchViewed': {
  name: 'SearchViewed',
  version: 8,
}, 'SearchViewed [v1]': {
  name: 'SearchViewed',
  version: 1,
}, 'SearchViewed [v2]': {
  name: 'SearchViewed',
  version: 2,
}, 'SearchViewed [v3]': {
  name: 'SearchViewed',
  version: 3,
}, 'SearchViewed [v4]': {
  name: 'SearchViewed',
  version: 4,
}, 'SearchViewed [v5]': {
  name: 'SearchViewed',
  version: 5,
}, 'SearchViewed [v6]': {
  name: 'SearchViewed',
  version: 6,
}, 'SearchViewed [v7]': {
  name: 'SearchViewed',
  version: 7,
}, 'SearchViewed [v8]': {
  name: 'SearchViewed',
  version: 8,
}, 'SecurityDepositReminder': {
  name: 'SecurityDepositReminder',
  version: 3,
}, 'SecurityDepositReminder [v1]': {
  name: 'SecurityDepositReminder',
  version: 1,
}, 'SecurityDepositReminder [v2]': {
  name: 'SecurityDepositReminder',
  version: 2,
}, 'SecurityDepositReminder [v3]': {
  name: 'SecurityDepositReminder',
  version: 3,
}, 'SellMyRvClicked': {
  name: 'SellMyRvClicked',
  version: 1,
}, 'SellMyRvClicked [v1]': {
  name: 'SellMyRvClicked',
  version: 1,
}, 'SendMessageClicked': {
  name: 'SendMessageClicked',
  version: 1,
}, 'SendMessageClicked [v1]': {
  name: 'SendMessageClicked',
  version: 1,
}, 'SendMoneyBookingClicked': {
  name: 'SendMoneyBookingClicked',
  version: 1,
}, 'SendMoneyBookingClicked [v1]': {
  name: 'SendMoneyBookingClicked',
  version: 1,
}, 'SendMoneyExited': {
  name: 'SendMoneyExited',
  version: 1,
}, 'SendMoneyExited [v1]': {
  name: 'SendMoneyExited',
  version: 1,
}, 'SendMoneyFailed': {
  name: 'SendMoneyFailed',
  version: 1,
}, 'SendMoneyFailed [v1]': {
  name: 'SendMoneyFailed',
  version: 1,
}, 'SendMoneyReviewed': {
  name: 'SendMoneyReviewed',
  version: 1,
}, 'SendMoneyReviewed [v1]': {
  name: 'SendMoneyReviewed',
  version: 1,
}, 'SendMoneySubmitted': {
  name: 'SendMoneySubmitted',
  version: 1,
}, 'SendMoneySubmitted [v1]': {
  name: 'SendMoneySubmitted',
  version: 1,
}, 'SendMoneySuccessful': {
  name: 'SendMoneySuccessful',
  version: 2,
}, 'SendMoneySuccessful [v1]': {
  name: 'SendMoneySuccessful',
  version: 1,
}, 'SendMoneySuccessful [v2]': {
  name: 'SendMoneySuccessful',
  version: 2,
}, 'ShareButtonClicked': {
  name: 'ShareButtonClicked',
  version: 1,
}, 'ShareButtonClicked [v1]': {
  name: 'ShareButtonClicked',
  version: 1,
}, 'ShortLinkClicked': {
  name: 'ShortLinkClicked',
  version: 1,
}, 'ShortLinkClicked [v1]': {
  name: 'ShortLinkClicked',
  version: 1,
}, 'Signed Up': {
  name: 'Signed Up',
  version: 1,
}, 'Signed Up [v1]': {
  name: 'Signed Up',
  version: 1,
}, 'SignupExited': {
  name: 'SignupExited',
  version: 2,
}, 'SignupExited [v1]': {
  name: 'SignupExited',
  version: 1,
}, 'SignupExited [v2]': {
  name: 'SignupExited',
  version: 2,
}, 'SignupFailed': {
  name: 'SignupFailed',
  version: 1,
}, 'SignupFailed [v1]': {
  name: 'SignupFailed',
  version: 1,
}, 'SignupSubmitted': {
  name: 'SignupSubmitted',
  version: 3,
}, 'SignupSubmitted [v3]': {
  name: 'SignupSubmitted',
  version: 3,
}, 'SignupSuccessful': {
  name: 'SignupSuccessful',
  version: 3,
}, 'SignupSuccessful [v1]': {
  name: 'SignupSuccessful',
  version: 1,
}, 'SignupSuccessful [v2]': {
  name: 'SignupSuccessful',
  version: 2,
}, 'SignupSuccessful [v3]': {
  name: 'SignupSuccessful',
  version: 3,
}, 'SignupViewed': {
  name: 'SignupViewed',
  version: 1,
}, 'SignupViewed [v1]': {
  name: 'SignupViewed',
  version: 1,
}, 'SnoozeClicked': {
  name: 'SnoozeClicked',
  version: 1,
}, 'SnoozeClicked [v1]': {
  name: 'SnoozeClicked',
  version: 1,
}, 'SortMenuClosed': {
  name: 'SortMenuClosed',
  version: 1,
}, 'SortMenuClosed [v1]': {
  name: 'SortMenuClosed',
  version: 1,
}, 'SortMenuViewed': {
  name: 'SortMenuViewed',
  version: 1,
}, 'SortMenuViewed [v1]': {
  name: 'SortMenuViewed',
  version: 1,
}, 'SortOptionClicked': {
  name: 'SortOptionClicked',
  version: 1,
}, 'SortOptionClicked [v1]': {
  name: 'SortOptionClicked',
  version: 1,
}, 'SpecialOfferFormSubmittedSuccessfully': {
  name: 'SpecialOfferFormSubmittedSuccessfully',
  version: 1,
}, 'SpecialOfferFormSubmittedSuccessfully [v1]': {
  name: 'SpecialOfferFormSubmittedSuccessfully',
  version: 1,
}, 'SpecialOfferFormViewed': {
  name: 'SpecialOfferFormViewed',
  version: 2,
}, 'SpecialOfferFormViewed [v1]': {
  name: 'SpecialOfferFormViewed',
  version: 1,
}, 'SpecialOfferFormViewed [v2]': {
  name: 'SpecialOfferFormViewed',
  version: 2,
}, 'SpecialOfferSent': {
  name: 'SpecialOfferSent',
  version: 3,
}, 'SpecialOfferSent [v1]': {
  name: 'SpecialOfferSent',
  version: 1,
}, 'SpecialOfferSent [v2]': {
  name: 'SpecialOfferSent',
  version: 2,
}, 'SpecialOfferSent [v3]': {
  name: 'SpecialOfferSent',
  version: 3,
}, 'SuperHostLandingPageViewed': {
  name: 'SuperHostLandingPageViewed',
  version: 1,
}, 'SuperHostLandingPageViewed [v1]': {
  name: 'SuperHostLandingPageViewed',
  version: 1,
}, 'SuperhostLearnMoreClicked': {
  name: 'SuperhostLearnMoreClicked',
  version: 2,
}, 'SuperhostLearnMoreClicked [v1]': {
  name: 'SuperhostLearnMoreClicked',
  version: 1,
}, 'SuperhostLearnMoreClicked [v2]': {
  name: 'SuperhostLearnMoreClicked',
  version: 2,
}, 'SuperhostStatusAssessed': {
  name: 'SuperhostStatusAssessed',
  version: 1,
}, 'SuperhostStatusAssessed [v1]': {
  name: 'SuperhostStatusAssessed',
  version: 1,
}, 'TipsAndResourcesCardClicked': {
  name: 'TipsAndResourcesCardClicked',
  version: 2,
}, 'TipsAndResourcesCardClicked [v1]': {
  name: 'TipsAndResourcesCardClicked',
  version: 1,
}, 'TipsAndResourcesCardClicked [v2]': {
  name: 'TipsAndResourcesCardClicked',
  version: 2,
}, 'TripCardClicked': {
  name: 'TripCardClicked',
  version: 1,
}, 'TripCardClicked [v1]': {
  name: 'TripCardClicked',
  version: 1,
}, 'TripEnded': {
  name: 'TripEnded',
  version: 1,
}, 'TripEnded [v1]': {
  name: 'TripEnded',
  version: 1,
}, 'TripQuotePresented': {
  name: 'TripQuotePresented',
  version: 6,
}, 'TripQuotePresented [v1]': {
  name: 'TripQuotePresented',
  version: 1,
}, 'TripQuotePresented [v2]': {
  name: 'TripQuotePresented',
  version: 2,
}, 'TripQuotePresented [v3]': {
  name: 'TripQuotePresented',
  version: 3,
}, 'TripQuotePresented [v4]': {
  name: 'TripQuotePresented',
  version: 4,
}, 'TripQuotePresented [v5]': {
  name: 'TripQuotePresented',
  version: 5,
}, 'TripQuotePresented [v6]': {
  name: 'TripQuotePresented',
  version: 6,
}, 'TripQuoteViewed': {
  name: 'TripQuoteViewed',
  version: 4,
}, 'TripQuoteViewed [v1]': {
  name: 'TripQuoteViewed',
  version: 1,
}, 'TripQuoteViewed [v2]': {
  name: 'TripQuoteViewed',
  version: 2,
}, 'TripQuoteViewed [v3]': {
  name: 'TripQuoteViewed',
  version: 3,
}, 'TripQuoteViewed [v4]': {
  name: 'TripQuoteViewed',
  version: 4,
}, 'TripStarted': {
  name: 'TripStarted',
  version: 1,
}, 'TripStarted [v1]': {
  name: 'TripStarted',
  version: 1,
}, 'TripsPageViewed': {
  name: 'TripsPageViewed',
  version: 1,
}, 'TripsPageViewed [v1]': {
  name: 'TripsPageViewed',
  version: 1,
}, 'UpsellBadgePresented': {
  name: 'UpsellBadgePresented',
  version: 1,
}, 'UpsellBadgePresented [v1]': {
  name: 'UpsellBadgePresented',
  version: 1,
}, 'ViewDetailsPriceBreakdownViewed': {
  name: 'ViewDetailsPriceBreakdownViewed',
  version: 1,
}, 'ViewDetailsPriceBreakdownViewed [v1]': {
  name: 'ViewDetailsPriceBreakdownViewed',
  version: 1,
}, 'WebPushPermissionRequested': {
  name: 'WebPushPermissionRequested',
  version: 1,
}, 'WebPushPermissionRequested [v1]': {
  name: 'WebPushPermissionRequested',
  version: 1,
}, 'WebPushPermissionResponded': {
  name: 'WebPushPermissionResponded',
  version: 1,
}, 'WebPushPermissionResponded [v1]': {
  name: 'WebPushPermissionResponded',
  version: 1,
}, 'refundMethodSelected': {
  name: 'refundMethodSelected',
  version: 1,
}, 'refundMethodSelected [v1]': {
  name: 'refundMethodSelected',
  version: 1,
}, 'searchForRvClicked': {
  name: 'searchForRvClicked',
  version: 1,
}, 'searchForRvClicked [v1]': {
  name: 'searchForRvClicked',
  version: 1,
} }
