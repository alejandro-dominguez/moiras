import HeroCarouselSever from '@/components/homeComponents/heroComponents/HeroCarouselSever';
import FeaturedProductsContainer from '@/components/homeComponents/featuredProductsComponents/FeaturedProductsContainer';
import SpotLightSectionContainer from '@/components/homeComponents/spotLightSectionComponents/SpotLightSectionContainer';
import BestSellersContainer from '@/components/homeComponents/bestSellersComponents/BestSellersContainer';

const Home = () => {
    return (
        <>
            <HeroCarouselSever />
            <FeaturedProductsContainer />
            <SpotLightSectionContainer />
            <BestSellersContainer />
        </>
    )
}

export default Home;
