import { useRouter } from 'next/router'
import Head from 'next/head'
import DefaultErrorPage from 'next/error'
import builderConfig from '@config/builder'
import Footer from '@components/footer/Footer'
import PrimaryHeader from '@components/primary-header/PrimaryHeader'
import SecondaryHeader from '@components/secondary-header/SecondaryHeader'
import Certified from '@components/certified-swag-section/certified'
import StackCards from '../components/StackCards/StackCards'
import Product from '../components/products-final-builder-component/Product'
import Input from '../components/input/Input'
import Loaders from '@components/loaders/Loaders'
import '@builder.io/widgets/dist/lib/builder-widgets-async'
import {
  BuilderComponent,
  builder,
  useIsPreviewing,
  Builder,
} from '@builder.io/react'
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

Builder.registerComponent(Product, {
  name: 'Products-page',
})

Builder.registerComponent(Input, {
  name: 'Services-Input',
})

Builder.registerComponent(StackCards, {
  name: 'StackCards',
})

export default function Page({ page }) {
  const router = useRouter()
  const isPreviewingInBuilder = useIsPreviewing()
  const show404 = !page && !isPreviewingInBuilder

  if (router.isFallback) {
    return (
      <>
        <Loaders />
      </>
    )
  }

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap&family=DM+Sans:ital,opsz,wght@0,9..40,100;0,9..40,200;0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;0,9..40,800;0,9..40,900;0,9..40,1000;1,9..40,100;1,9..40,200;1,9..40,300;1,9..40,400;1,9..40,500;1,9..40,600;1,9..40,700;1,9..40,800;1,9..40,900;1,9..40,1000"
          rel="stylesheet"
        />
        <link
          rel="icon"
          href="/favicon.ico"
          type="image/x-icon"
          sizes="32x32"
        />
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
