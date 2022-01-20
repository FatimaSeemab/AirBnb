import Header from "../components/Header";
import Footer from "../components/Footer";
import InfoCard from "../components/InfoCard";
import Map from "../components/Map";
import { useRouter } from "next/router";
import {format} from "date-fns";
import getCenter from "geolib/es/getCenter";

function Search({searchResults}) {
    const router=useRouter();
    const {location,startDate,endDate,noOfGuests}=router.query;
    const formattedStartDate=format(new Date(startDate),"dd MMM yy");
    const formattedEndDate=format(new Date(endDate),"dd MMM yy");
    const range =`${formattedStartDate}-${formattedEndDate}`;
    console.log(searchResults);
   return (
        <div>
            <Header placeholder={`${location} | ${startDate} |${endDate}`}/>
            <main className="flex">  
                <section className="flex-grow py-14 px-6">
                    <p className="text-xs ">
                    300+ Stays - {range} - for {noOfGuests} guests</p>
                    <h1 className="text-3xl font-semibold mt-2 mb-6"> Stays in {location}</h1>
                    
                    <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
                        <p className="button">
                            Cancellation Flexibility
                        </p>
                        <p className="button">
                            Type of Place
                        </p>
                        <p className="button">
                            Price 
                        </p>
                        <p className="button">
                           Rooms and Beds
                        </p>
                        <p className="button">
                           More Filter
                        </p>
                    </div>
                    
                    <div className="flex flex-col">

                        {searchResults.map(({img,title,description,location,star,price,total})=>(
                        <InfoCard 
                        key={img}
                        img={img} location={location}
                        title={title}
                        description={description}
                        star={star}
                        price={price}
                        total={total}/>
                        // <h1>gggg</h1>

                    ))}
                    </div>
  
                    </section>
                    <section className="hidden
                     md:inline-flex md:min-w-[600px]"
                    > 
                        <Map searchResults={searchResults}/>
                    </section>
                </main>
            <Footer />
        </div>
    )
}

export default Search;
export async function getServerSideProps(){
    const searchResults=await fetch("https://links.papareact.com/isz").then
    (res=>res.json());
    return{
      props:{
          searchResults
        },
    }
}
