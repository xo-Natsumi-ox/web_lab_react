import React, {useMemo, useState} from 'react';
import Header from "../components/Header";
import {ContainerStyle} from "../styles/General.styled";
import logo from "../images/logo.png";
import { 
    HomeMainBlockStyle, HomeMainTextTitleStyle, HomeItemsUlStyle, HomeMainImgStyle, HomeButtonBlockStyle, HomeButtonStyle
} from "../styles/Home.styled";
import HomeItem from "../components/HomeItem";



function Home() {

    const [items, setItems] = useState([
        {
            id: 1,
            img: "http://192.168.1.103:12345/wall-e.png",
            title: "Wall-e",
            itemParagraphs: "A robot Wall-E who fell in love and is ready to go anywhere for her"
        },
        {
            id: 2,

            img: "http://192.168.1.103:12345/peterpan.png",
            title: "Peter Pan",
            itemParagraphs: "Fly away with the company of young kids, feel like a child again"
        },
        {
            id: 3,
            img: "http://192.168.1.103:12345/umbrella.png",
            title: "Umbrella Academy",
            itemParagraphs: "Logo of one of the newest netflix series 'Umbrella Academy`"
        },
        {
            id: 4,
            img: "http://192.168.1.103:12345/path.png",
            title: "Path",
            itemParagraphs: "For people who are very worried about the future path and just want to get into one of the fantasy worlds"

        },
        {
            id: 5,
            img: "http://192.168.1.103:12345/olaf.png",
            title: "Olaf",
            itemParagraphs: "Very funny snowman from Disney cartoon 'frozen'"

        }
    ]);

    let [showMore, setShowMore] = useState({
        button: false,
        slicesNum: 1,
        currentSliceIdx: 0
    });

    let itemsSlices = useMemo(() => {
        let slices = [];
        let idx = 0;
        let slice;
        let button = false;
        let slicesNum = 0;
        while (idx < items.length) {
            slice = items.slice(idx, idx + 3);
            slices.push(slice);
            idx += 3;
            slicesNum += 1;
        }
        if (slicesNum > 1) {
            button = true;
        }
        setShowMore({...showMore, button:button, slicesNum: slicesNum});
        return slices;
    }, [items]);

    const [itemsToShow, setItemsToShow] = useState([...itemsSlices[0]]);

    const showMoreHomeItems = () => {
        let button = true;
        let currentSliceIdx = showMore.currentSliceIdx;
        if (currentSliceIdx < showMore.slicesNum - 1) {
            currentSliceIdx = currentSliceIdx + 1;
            setItemsToShow([...itemsToShow, ...itemsSlices[currentSliceIdx]]);
        }
        setShowMore({...showMore, button:button, currentSliceIdx: currentSliceIdx})
    }

    return (
        <>
            <Header search={false}/>
                <ContainerStyle>
                    <HomeMainBlockStyle>
                        <HomeMainImgStyle src={logo}/>
                        <div>
                            <HomeMainTextTitleStyle>
                                Movie clothes
                            </HomeMainTextTitleStyle>
                                Lots of clothes of any type and size with different prints from your favorite movies. Just for you!
                        </div>
                    </HomeMainBlockStyle>

                        <HomeItemsUlStyle>
                            {itemsToShow.map((item) => (
                                <HomeItem key={item.id} item={item}/>
                            ))}
                        </HomeItemsUlStyle>

                        <HomeButtonBlockStyle>
                            <HomeButtonStyle onClick={showMoreHomeItems}>Show smore</HomeButtonStyle>
                        </HomeButtonBlockStyle>
                </ContainerStyle>
        </>
    );
}

export default Home;