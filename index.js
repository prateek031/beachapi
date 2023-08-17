const express = require("express");
const app = express();
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true
    })
)
const  beachesData = [
    {
        "id": 1,
        "location": "Champagne Beach",
        "country": "Greece",
        "imgurl": "https://media.istockphoto.com/id/1204708865/photo/champagne-beach-vanuatu-espiritu-santo-island-near-luganville-south-pacific.jpg?s=612x612&w=0&k=20&c=RT3M-xxg38t6Jz0P6DMehqfyPdwQNFfLqywUCwTUi-c=",
        "rating": 4,
        "price": 10,
        "discription": "Champagne Beach is a popular beach located on the island of Espiritu Santo in Vanuatu. The beach is famous for its crystal clear waters and powdery white sands, which is one of the best in the South Pacific region. It is visited regularly by tourists and cruise boats from Australia.[citation needed Local Children Champagne Beach is located in adjacent and close proximity to Hog Harbour village on the northeast of Santo"
    },

    {
        "id": 2,
        "location": "Bondi Beach",
        "country": "Australia",
        "imgurl": "https://i.redd.it/l9s3nmhkk6w21.jpg",
        "rating": 4,
        "price": 10,
        "discription": "Bondi Beach: One of the Best in The World! It is well known for its scenic beauty, vibrant atmosphere, and surf culture. Bondi Beach has been a popular tourist destination for over a century and attracts millions of visitors each year for its soft golden sand, clear blue waters, and nearby cafes, restaurants and shops"
    },

    {
        "id": 3,
        "location": "Ora Beach",
        "country": "Indonesia",
        "imgurl": "https://www.nativeindonesia.com/foto/pantai-ora/Bersantai-Menikmati-Alam.jpg",
        "rating": 4,
        "price": 10,
        "discription": "There's something about a good beach that enlivens the senses: the briny scent of salt in the air, the calming murmur of waves, the gentle nip of sand whipped up by the soft breeze. A favourite beach is like a favourite poem – individual, important and something that makes our hearts sing, and now more than ever we are dreaming of days spent wriggling our toes in the sand and wallowing in salty water.Instead of the typical sandy spots dotted with sun umbrellas and gaggles of tourists, we've sought out spaces that you may have to venture a little further for, but that remain incredibly beautiful and very often crowd-free. From the most exquisite beaches in Europe to far-flung stretches in Asia, Africa and more, these are the best beaches in the world."
    },

    {
        "id": 4,
        "location": " Rangali Islands",
        "country": " Maldives",
        "imgurl": "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
        "rating": 4,
        "price": 10,
        "discription": "The Maldives is one of the popular holiday locations and so is Rangali Island, one of the island. It is great getaway if travelers are looking for a luxurious island holiday . Travelers can plan their whole trip around the Rangali Island. It is a home to one of the most unique hotels of all times, The Conrad Hotel.It is the only one. This island has no population and hence can be a “king's getaway” at Rangali island resort. Enjoy the beauty of nature, untouched and amazing nature. Traveler is also enjoyed attractive ocean sports at this resort. They offer a variety of ocean sports for everyone to enjoy."
    },

    {
        "id": 5,
        "location": "New Beach",
        "country": "Sir Lanka",
        "imgurl": "https://images.unsplash.com/photo-1590523278191-995cbcda646b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80",
        "rating": 4,
        "price": 10,
        "discription": "Sri Lanka's tropical beaches are unanimously adored. Crafted from a 1340km (833-mile) coastline, its countless topographically varied beaches, coves and bays attract sun-seekers, fun lovers and surfers throughout the year. Wildlife plays its part too- beaches are vital nesting grounds for endangered marine turtles, while blue whales are sighted at sea."
    },



];
app.listen(3000, () => {
    console.log("connected ")
});
app.get('/', (req, res) => {
    res.status(200).json( beachesData);
})