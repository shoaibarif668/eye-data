import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import PageLoader from "../components/common/loader/page-loader";

const Navbar = dynamic(() => import('../components/navbar'), {
    suspense: true,
})
const TopNavbar = dynamic(() => import('../components/topnavbar'), {
    suspense: true,
})
const HeroPage = dynamic(() => import('../components/hero'), {
    suspense: true,
})
const SearchForm = dynamic(() => import('../components/searchform'), {
    suspense: true,
})
const AboutUs = dynamic(() => import('../components/aboutus'), {
    suspense: true,
})
const Categories = dynamic(() => import('../components/categories'), {
    suspense: true,
})
const ClinicsSection = dynamic(() => import('../components/clinicssection'), {
    suspense: true,
})
const LabSection = dynamic(() => import('../components/labsection'), {
    suspense: true,
})
const BlogList = dynamic(() => import('../components/blog-list'), {
    suspense: true,
})
const Doctor = dynamic(() => import('../components/doctor'), {
    suspense: true,
})
const Footer = dynamic(() => import('../components/footer/footer'), {
    suspense: true,
})
const Subscribe = dynamic(() => import('../components/subscribe'), {
    suspense: true,
})
const DownloadApp = dynamic(() => import('../components/downloadapp'), {
    suspense: true,
})

export default function Home() {
  return (
    <>
        <Suspense fallback={ <PageLoader/>}>
            <TopNavbar/>
            <Navbar/>
              <HeroPage/>
              <SearchForm/>
            <AboutUs/>
            <Categories/>
            <DownloadApp/>
            <ClinicsSection/>
            <LabSection/>
              <Doctor/>
              <BlogList/>
              <Subscribe/>
              <Footer/>
        </Suspense>
    </>
    // <div className='w-full  bg-blue-500 flex justify-center  items-center '>
    //   <div className='h-1/2 w-1/2 bg-amber-500 flex justify-center items-center'>
    //     Hello world
    //   </div>

    // </div>
  )
}
