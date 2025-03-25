import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import HomeSectionCard from '../HomeSectionCards/HomeSectionCard';

const HomeSectionCarousel = () => {
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5.5 },
    };

    const items = [1,1,1,1,1].map((item) => <HomeSectionCard />)

    return (
        <div>
            <AliceCarousel
                items={items}
                disableButtonsControls
                autoPlay
                autoPlayInterval={1600}
                infinite
                responsive={responsive}
            />
        </div>
    )
}

export default HomeSectionCarousel