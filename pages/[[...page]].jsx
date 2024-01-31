import { useRouter } from 'next/router'
import {
  BuilderComponent,
  builder,
  useIsPreviewing,
  Builder,
} from '@builder.io/react'
import DefaultErrorPage from 'next/error'
import Head from 'next/head'
import builderConfig from '@config/builder'
// loading widgets dynamically to reduce bundle size, will only be included in bundle when is used in the content
import '@builder.io/widgets/dist/lib/builder-widgets-async'
import Footer from '@components/footer/Footer'
import PrimaryHeader from '@components/primary-header/PrimaryHeader'
import SecondaryHeader from '@components/secondary-header/SecondaryHeader'
import Certified from '@components/certified-swag-section/certified'
builder.init(builderConfig.apiKey)

export async function getStaticProps({ params }) {
  const page =
    (await builder
      .get('page', {
        userAttributes: {
          urlPath: '/' + (params?.page?.join('/') || ''),
        },
      })
      .toPromise()) || null

  return {
    props: {
      page,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 5 seconds
    // revalidate: 5,
  }
}

export async function getStaticPaths() {
  const pages = await builder.getAll('page', {
    options: { noTargeting: true },
    omit: 'data.blocks',
  })

  return {
    paths: pages.map((page) => `${page.data?.url}`),
    fallback: true,
  }
}

Builder.registerComponent(Footer, {
  name: 'Footer',
})

Builder.registerComponent(PrimaryHeader, {
  name: 'PrimaryHeader',
})

Builder.registerComponent(SecondaryHeader, {
  name: 'SecondaryHeader',
})

Builder.registerComponent(Certified, {
  name: 'Certified',
})

export default function Page({ page }) {
  const router = useRouter()
  const isPreviewingInBuilder = useIsPreviewing()
  const show404 = !page && !isPreviewingInBuilder

  if (router.isFallback) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {!page && <meta name="robots" content="noindex" />}
      </Head>
      {show404 ? (
        <DefaultErrorPage statusCode={404} suppressHydrationWarning />
      ) : (
        <BuilderComponent
          model="page"
          content={page}
          suppressHydrationWarning
        />
      )}
    </>
  )
}
