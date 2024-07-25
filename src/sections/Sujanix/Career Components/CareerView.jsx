import Footer from "src/layouts/main/footer";
import Header from "src/layouts/main/header";
import CareerLandingPage from "src/pages/career/landing";

import TravelLandingToursByCity from "src/sections/_travel/landing/travel-landing-tours-by-city";

export default function CareerView(){
    const Perks = [
        {
            id: '1',
            coverUrl: "https://cdn-icons-png.flaticon.com/128/3135/3135673.png",
            location: "Competitive salary"
        },
        {
            id: '2',
            coverUrl: "https://cdn-icons-png.flaticon.com/128/4348/4348530.png",
            location: "Sick and “life happens” days"
        },
        {
            id: '3',
            coverUrl: "https://cdn-icons-png.flaticon.com/128/3126/3126507.png",
            location: "Paid holidays"
        },
        {
            id: '4',
            coverUrl: "https://cdn-icons-png.flaticon.com/128/3060/3060795.png",
            location: "Paid parental leave"
        },
        {
            id: '5',
            coverUrl: "https://cdn-icons-png.flaticon.com/128/7268/7268463.png",
            location: "Paid training programs"
        },
        {
            id: '6',
            coverUrl: "https://cdn-icons-png.flaticon.com/128/2666/2666513.png",
            location: "Regular Rewards and benefits"
        },
        {
            id: '7',
            coverUrl: "https://cdn-icons-png.flaticon.com/128/2686/2686222.png",
            location: "Periodic activities"
        },
        {
            id: '8',
            coverUrl: "https://cdn-icons-png.flaticon.com/128/5455/5455731.png",
            location: "Work on exciting clients"
        },
        {
            id: '9',
            coverUrl: "https://cdn-icons-png.flaticon.com/128/7145/7145099.png",
            location: "No stressful commute"
        },
        {
            id: '10',
            coverUrl: "https://cdn-icons-png.flaticon.com/128/13068/13068207.png",
            location: "Medical Benefits"
        },
        {
            id: '11',
            coverUrl: "https://cdn-icons-png.flaticon.com/128/2831/2831143.png",
            location: "No committees "
        },
        {
            id: '12',
            coverUrl: "https://cdn-icons-png.flaticon.com/128/14118/14118830.png",
            location: "Flexible work timings"
        },
    ]
    return(

    <>
    <Header/><br/><br/><br/>
    <CareerLandingPage/>
    <TravelLandingToursByCity tours={Perks}/>
    <Footer/>
    </>
    )
}