let googlemaps

/** @deprecated use `useGoogleMap.ts` composable instead */
export default async function (apiKey = window.$nuxt.$config.public.google.mapsApiKey, ignoreRouteCheck = false) {
  if (!ignoreRouteCheck && ['callback'].includes(window.$nuxt.getRouteBaseName())) {
    return
  }

  if (!googlemaps) {
    const { Loader } = await import('@googlemaps/js-api-loader')

    const loader = new Loader({
      apiKey,
      libraries: ['places', 'geocoding'],
      defer: true,
      async: true,
    })

    const places = loader.importLibrary('places')
    const geocoding = loader.importLibrary('geocoding')
    const maps = loader.importLibrary('maps')
    const marker = loader.importLibrary('marker')

    const { AutocompleteService } = await places
    const { Geocoder } = await geocoding
    const { Map } = await maps
    const { AdvancedMarkerElement } = await marker

    googlemaps = {
      autocomplete: new AutocompleteService(),
      geocoding: new Geocoder(),
      map: Map,
      marker: AdvancedMarkerElement,
    }
  }

  /** @deprecated use `useGoogleMap.ts` composable instead */
  const placePredictions = (input, countries, types = null, exludeTypes = []) => {
    return new Promise((resolve) => {
      googlemaps.autocomplete.getPlacePredictions(
        {
          input,
          componentRestrictions: {
            country: countries,
          },
          types,
        },
        (predictions, status) => {
          if (status === 'OK') {
            if (exludeTypes?.length) {
              // Exclude irrelevant types
              predictions = predictions.filter((prediction) => {
                return !prediction.types.some((t) => exludeTypes.includes(t))
              })
            }

            resolve(predictions)
          }

          resolve([])
        },
      )
    })
  }

  /** @deprecated use `useGoogleMap.ts` composable instead */
  const geocoder = ({ placeId, address }) => {
    return new Promise((resolve, reject) => {
      try {
        googlemaps.geocoding.geocode(
          {
            address,
            placeId,
          },
          (results, status) => {
            if (status === 'OK') {
              resolve(results)
            }
            resolve([])
          },
        )
      }
      catch (err) {
        reject(err)
      }
    })
  }

  /** @deprecated use `useGoogleMap.ts` composable instead */
  const map = (element, mapOptions = {}) => {
    return new googlemaps.map(element, mapOptions)
  }

  /** @deprecated use `useGoogleMap.ts` composable instead */
  const advancedMarker = ({ map, position, content }) => {
    return new googlemaps.marker({
      map,
      position,
      content,
    })
  }

  return {
    placePredictions,
    geocoder,
    map,
    advancedMarker,
  }
}
