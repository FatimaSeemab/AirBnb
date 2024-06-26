import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/Banner'
import SmallCard from '../components/SmallCard'
import MediumCard from '../components/MediumCard'
import LargeCard from '../components/LargeCard'
import Footer from '../components/Footer'
export default function Home({exploreData,cardsData}:{exploreData:any,cardsData:any}) {

  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header placeholder={""}/>
      <Banner />
      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>
          <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {exploreData?.map(({img,distance,location}:{img:any,distance:any,location:any})=>(
            <SmallCard key={img} img={img} distance={distance} location={location}/>
          ))}
          </div>

        </section>
        <section>
          <h2 className="text-4xl font-semibold py-8">
              Live Anywhere
          </h2>
          <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3'>
          {
            cardsData.map(({img,title}:{img:any,title:any})=>(
            <MediumCard key={img} img={img} title={title}/>
             ))
          }
          </div>
        </section>

        <LargeCard img="https://links.papareact.com/4cj" title="The Greatest Outdoors" description="Wishlists curated by Airbnb" buttontext="Get Inspired"/>
      </main>
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const exploreData=await fetch("https://links.papareact.com/pyp").
  then(
    (res)=>res.json()
  );
  const cardsData=await fetch("https://links.papareact.com/zp1").
  then(
    (res)=>res.json()
  );
  return {
    props:{
      exploreData,
      cardsData
    }
  }
}