import './Our_story.css';
import Header from "../Header/Header";
import Banner from "../Banner/Banner";
import Different from "../Different/Different";
import Join from "../Join/Join";
import imageArticle1 from '../../assets/image/rightImage2.png';
import imageArticle2 from '../../assets/image/imageBlockChair.png';
import imageArticle3 from '../../assets/image/imageArticle3.png';

const Our_story = () => {
    return (
        <div className='Our_story'>
            <Banner/>
            <Header/>
            <div className='articles'>
                <div className='title'>A brand built on the love of craftmanship,
                    quality and outstanding customer service</div>
                <div className='articles-grid'>
                    <div className='article'>
                        <div>From a studio in London to a global brand with
                            over 400 outlets</div>
                        <div>When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market. </div>
                        <div>Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</div>
                        <div>Get in touch</div>
                    </div>
                    <img src={imageArticle1} alt='imageArticle1'/>
                    <img src={imageArticle2} alt='imageArticle2'/>
                    <div className='article'>
                        <div>Our service isn’t just personal, it’s actually
                            hyper personally exquisite</div>
                        <div>When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.</div>
                        <div>Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</div>
                        <div>Get in touch</div>
                    </div>
                    <div className='article'>
                        <div>It started with a small idea</div>
                        <div>A global brand with local beginnings, our story begain in a small studio in South London in early 2014</div>
                        <div>View collection</div>
                    </div>
                    <img src={imageArticle3} alt='imageArticle3'/>
                </div>
            </div>
            <Different/>
            <Join/>
        </div>
    )
}

export default Our_story;