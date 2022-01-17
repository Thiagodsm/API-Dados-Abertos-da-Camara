import React, {useState, useEffect} from 'react';
import apiNews from '../api/APIUtils';

function Home() {

    const[CardData, setCardData] = useState({});

    useEffect(() => {
        apiNews.getNews().then((response) =>{
            setCardData(response.data);
            console.log(response.data);
        });
    }, []);


    return (
        <div>
            <h1>Home</h1>
        </div>
    )
}

export default Home
