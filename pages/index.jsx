import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from './components/navbar'
import TopNavbar from './components/topnavbar'
import HeroPage from './components/hero'
import SearchForm from './components/searchform'
import AboutUs from './components/aboutus'
import Categories from './components/categories'
import DownloadApp from './components/downloadapp'
import ClinicsSection from './components/clinicssection'
import LabSection from './components/labsection'

// imagesimports



export default function Home() {
  return (
    <div>
      <TopNavbar/>
      <Navbar/>
      <HeroPage/>
      <SearchForm/>
      <AboutUs/>
      <Categories/>
      <DownloadApp/>
      <ClinicsSection/>
      <LabSection/>

    </div>
    // <div className='w-full  bg-blue-500 flex justify-center  items-center '>
    //   <div className='h-1/2 w-1/2 bg-amber-500 flex justify-center items-center'>
    //     Hello world
    //   </div>

    // </div>
  )
}
