import { PrepositionWord } from '~/lib/enums/index.js'
import { locationName, locationWithPreposition } from '~/lib/PointOfInterest/PointOfInterestHelpers.js'

const prepositions = {
  en: {
    [PrepositionWord.In]: () => 'in',
    [PrepositionWord.Near]: () => 'near',
    [PrepositionWord.From]: () => 'from',
  },
  fr: {
    [PrepositionWord.In]: () => 'à',
    [PrepositionWord.Near]: (name) => (/^[aeiou]/i.test(name) ? 'près d\'' : 'près de'),
    [PrepositionWord.From]: (name) => (/^[aeiou]/i.test(name) ? 'd\'' : 'de'),
  },
}

const prepositionExceptions = {
  en: {},
  fr: {
    '0f7fefb8-b8e5-459b-a7fb-21487535cea9': { in: 'à l\'', near: 'près de l\'' },
    '96cf557f-c106-4d8d-92a3-8d154e3d1b94': { in: 'en', near: 'près d\'' },
    '6207d354-e321-4f14-902d-df1b758e8eaa': { in: 'au', near: 'près du' },
    '5624e67c-e8c3-4c33-a8b2-2c0e1716c4d2': { in: 'au', near: 'près du' },
    '542de1f1-dcdd-4649-b5ef-71df89865365': { in: 'au', near: 'près du' },
    '857d1b8e-efdc-47b8-af0d-4ae07b610f03': { in: 'en', near: 'près de la' },
    '5e87124a-ab56-4b81-ba0d-d73d3aad7fb2': { in: 'au', near: 'près du' },
    'b4fc7fb8-5e08-4f05-8ac5-a34a5ea9be44': { in: 'en', near: 'près de l\'' },
    '72f19f88-9eff-4044-9135-19b5d447c3f2': { in: 'au', near: 'près du' },
    '8721dbf2-051e-4d1a-96f5-306fbd67740e': { in: 'en' },
    'f835c64c-904b-4900-b34c-ef643cb64843': { in: 'au', near: 'près du' },
    '1f04c133-14f1-42ae-856e-001f081f14a9': { in: 'dans les', near: 'près des' },
    '7968da5a-41c6-4653-8e9e-f131131c689e': { in: 'en', near: 'près de la' },
    '7bdaf3b0-8a17-42bf-abcc-b78e6274a387': { in: 'au', near: 'près du' },
    '3f99f1c9-a75a-456d-891f-cc53d84d6832': { in: 'au', near: 'près du' },
    'ee57bfcf-1e6b-4271-93ce-a03880bcbdc1': { in: 'au', near: 'près du' },
    'd7140c0c-ccc7-4e0e-8f32-36e0682239e6': { in: 'au', near: 'près du' },
    '3da83eaa-80b7-40ae-8867-cf937c811e4a': { in: 'au', near: 'près du' },
    'a449e072-5b2b-49d6-9cae-5baf059ba63f': { in: 'au', near: 'près du' },
    'a34590d1-4155-449f-8225-a7f5cb57c6af': { in: 'au' },
    '082795d7-6db1-40f1-963b-476db204558f': { in: 'au', near: 'près du' },
    'd1e7f382-1f4e-4f7d-9594-ba975e68636e': { in: 'au', near: 'près du' },
    '9a9ee45c-8db1-49e1-8106-5ecb3b35fbd9': { in: 'au', near: 'près du' },
    '87d6968b-80b1-41b8-9232-fdf6952f6e57': { in: 'au', near: 'près du' },
    '08b2c205-a2f9-4a31-a2e0-755bcbbb6ab4': { in: 'au', near: 'près du' },
    '6267fe2a-79f3-4444-bb30-8b0334b94316': { in: 'au', near: 'près du' },
    'b5a01557-41a2-496c-901b-9647e07ee851': { in: 'au', near: 'près du' },
    '8a439fbb-27df-41ca-9a08-1553e61a6406': { in: 'au', near: 'près du' },
    'cdcb52fb-0343-4ca7-933b-4bbfb33dfbf2': { in: 'au', near: 'près du' },
    '7e3379fc-733b-494b-b6c1-ddd80f05fbbf': { in: 'au', near: 'près du' },
    '07cc76b4-5231-41b4-902a-2345cdc755d3': { in: 'au', near: 'près du' },
    '2cfeebf3-f114-441b-a7ee-5cee89778c13': { in: 'au', near: 'près du' },
    '737bc961-97b9-4149-bf91-fc152fa6b4fa': { in: 'au', near: 'près du' },
    '91960f53-4329-47dc-9149-43aaf0f5d982': { in: 'au', near: 'près du' },
    '8f104305-ae11-4a88-96d2-52a875fc983d': { in: 'au', near: 'près du' },
    'a078dda9-830b-4874-8c57-5a26eeac5bae': { in: 'au', near: 'près du' },
    'c01f2888-fede-4a04-bf28-2a5ae163d7dd': { in: 'au', near: 'près du' },
    '4715a3b0-d29b-412a-9a85-28f9e2a4ae06': { in: 'au', near: 'près du' },
    '4af640c7-6a98-4339-bc33-abfd988d20a1': { in: 'au', near: 'près du' },
    '7e7ae79d-b6dd-4c59-96cf-8a20c926ed1d': { in: 'aux', near: 'près des' },
    '83f7a078-837c-4e2b-9136-794d352b8435': { in: 'en', near: 'près de l\'' },
    '65edcdf0-8c36-47cf-8932-2a6f93150d1a': { in: 'en', near: 'près de l\'' },
    '90407a95-6e01-4175-bb4c-fd3f9318751d': { in: 'en', near: 'près de l\'' },
    '8bf21ed3-3986-47c5-b892-53097db6c4cc': { in: 'en', near: 'près de l\'' },
    'c2746bf6-1599-4640-92c3-7fad72fcf607': { in: 'en', near: 'près de la' },
    '2d39b26d-48cc-475b-85f4-3ec939032421': { in: 'en', near: 'près de la' },
    '31718313-bf14-4879-a50f-797d205ab1db': { in: 'en', near: 'près de la' },
    '8baf1d96-098a-416c-8a70-97cf5a4f82f0': { in: 'en', near: 'près de l\'' },
    '70c654e0-fa3f-4242-9bd6-85a9a93f33a5': { in: 'en', near: 'près de l\'' },
    '4a2c053d-2342-42fd-9fbc-90fcb70a53a3': { in: 'en', near: 'près de l\'' },
    '34e4a3b4-0064-46d1-b477-75fee5fd605d': { in: 'en', near: 'près de l\'' },
    '0fc5d935-7a9b-4c4b-9287-ef4d3c83f449': { in: 'en', near: 'près de la' },
    'edc6bcd9-9265-4b7d-80db-7d3603d6f8a9': { in: 'en', near: 'près de la' },
    '78265b85-334e-4a3b-ac3f-8b487d243c73': { in: 'en', near: 'près de l\'' },
    '9dc5a88a-0325-42c5-afcf-0ac881bcc36f': { in: 'en', near: 'près de l\'' },
    '00dfd483-59b1-4a5d-85b8-204375fbe731': { in: 'en', near: 'près de l\'' },
    'c657be6a-7974-4e12-82e5-ae123065f124': { in: 'en', near: 'près de la ' },
    'c6db35d5-1f59-4d25-b31e-a7b80e2d20fe': { in: 'en', near: 'près de la' },
    'f5c959f4-393c-4dfc-b489-6380285c4e04': { in: 'au', near: 'près du' },
    'ea3c3de9-4cf3-42b3-a9cf-f2510589f084': { in: 'en', near: 'près de la' },
    'e6fb360f-63c6-4200-84fc-4de5d988898d': { in: 'en', near: 'près de la' },
    '62b5cd7c-bf3e-4f52-9799-3f706edf76ff': { near: 'près du' },
    'ef464e99-ad7d-4401-b3c7-6d200a3a03a4': { near: 'près d\'' },
  },
}

export function withPreposition({ locale, pointOfInterest, useNearby = false, preposition = null }) {
  return locationWithPreposition({
    pointOfInterest,
    prepositions: prepositions[locale],
    preposition,
    prepositionExceptions: prepositionExceptions[locale]?.[pointOfInterest.Id],
    useNearby,
  })
}

export function name({ pointOfInterest, includeParent, abbreviatedParent }) {
  return locationName({
    pointOfInterest,
    includeParent,
    abbreviatedParent,
  })
}
