import { LanguageProvider } from '@/context/LanguageContext'
import React from 'react'
import Header from '@/components/Header'
import ContactFooter from '@/components/Contact'
import SelectionsPage from '@/components/SelectionsPage'
import { AppProps } from 'next/app';

const page = ({pageProps}:AppProps) => {
  return (
    <div>
      <LanguageProvider>
         <Header {...pageProps} />
         <SelectionsPage  {...pageProps} />
         <ContactFooter  {...pageProps} />
      </LanguageProvider>
    </div>
  )
}

export default page
