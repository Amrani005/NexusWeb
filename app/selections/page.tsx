import { LanguageProvider } from '@/context/LanguageContext'
import Header from '@/components/Header'
import ContactFooter from '@/components/Contact'
import SelectionsPage from '@/components/SelectionsPage'
import { AppProps } from 'next/app';
import React, { Suspense } from 'react';

const page = ({pageProps}:AppProps) => {
  return (
    <div>
      <Suspense fallback={<div>Loading your selection...</div>}>
        {/* This is the component from your build error.
          Next.js will now load it on the client, fixing the build.
        */}
        <SelectionsPage />
        <ContactFooter {...pageProps}/>
      </Suspense>
    </div>
  )
}

export default page
