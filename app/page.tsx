import ContactFooter from "@/components/Contact";
import Hero from "@/components/Hero";
import Image from "next/image";
import Header from "@/components/Header";
import Pricing from "@/components/Pricing";
import Selections from "@/components/Selections";
import Services from "@/components/Services";
import Approach from "@/components/Approach";
import { LanguageProvider } from '../context/LanguageContext';
import { AppProps } from 'next/app';


export default function Home({ pageProps}:AppProps) {
  return (
    <div className="w-[39rem] lg:w-full ">
      <LanguageProvider>
       <Header {...pageProps}/>
       <Hero {...pageProps}/>
       <Services {...pageProps} />
       <Selections {...pageProps}/>
       <Approach {...pageProps}/>
       <Pricing {...pageProps}/>
       <ContactFooter {...pageProps}/>
      </LanguageProvider>
      
    </div>
  );
}
