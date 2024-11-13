import { useState } from 'react';
import { Card, CardContent, Typography, Button } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import NewsModel from './NewsModel'; // Import the modal component

// Define the type for the news item
interface NewsItem {
    title: string;
    content: string;
    url: string;
    imageUrl: string;
}

// Define the newsItems array
const newsItems: NewsItem[] = [
    { title: 'Nature’s Nemesis? Yellowstone’s Billion-Kilo Emission Crisis', content: 'Individuals rely on the natural systems composed of trees, grasslands, and bushes to absorb carbon from the air and sequester it beneath the surface, a critical process in  climate catastrophe.', url: 'https://scitechdaily.com/natures-nemesis-yellowstones-billion-kilo-emission-crisis/', imageUrl: 'https://scitechdaily.com/images/Visitors-Walking-on-a-Boardwalk-in-Yellowstone-National-Park-scaled.jpg' },
    { title: 'Ambassador Hashmi stresses upon commitments to reduce carbon emission', content: 'Ambassador of Pakistan to Nepal Abrar Hashmi said that developing nations like Pakistan and Nepal bore the brunt of carbon emissions', url: 'https://www.nation.com.pk/14-Apr-2024/ambassador-stresses-upon-commitments-to-reduce-carbon-emission', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsmsY65i4EODQR9X6k3LnTitNt0DPMl_0qdA&s' },
    { title: 'Canadian conservationists push emission limits for wildfire reduction', content: 'A study published last May in the journal Environmental Research Letters used climate, burned area, and global energy balance models to determine what contribution carbon emissions had on increases in vapor pressure deficit (VPD)', url: 'https://wildfiretoday.com/2024/04/12/canadian-conservationists-push-emission-limits-for-wildfire-reduction/#:~:text=Nearly%20a%20year%20later%2C%20Climate,for%20nationwide%20carbon%20emission%20limits.&text=%E2%80%9CTo%20cap%20wildfires%20and%20other,Network%20Executive%20Director%20Caroline%20Brouillette.', imageUrl: 'https://i0.wp.com/wildfiretoday.com/wp-content/uploads/2024/04/NASAsmoke.jpg?w=720&ssl=1' },
    { title: 'UK sets ambitious target to slash carbon emissions by 78% by 2035', content: 'The UK government has set a legally binding target to cut carbon emissions by 78% by 2035 compared to 1990 levels.', url: 'https://www.gov.uk/government/news/uk-enshrines-new-target-in-law-to-slash-emissions-by-78-by-2035', imageUrl: 'https://pbs.twimg.com/media/EzfCXBOXEAEb6Qh.jpg:large' },
    { title: 'Tesla CEO Elon Musk tweets support for carbon tax', content: 'Tesla CEO Elon Musk has publicly voiced his support for a carbon tax, calling it a "good plan" to combat climate change.', url: 'https://www.cnbc.com/2021/02/12/elon-musk-reducing-greenhouse-gas-emissions-with-a-carbon-tax.html', imageUrl: 'https://image.cnbcfm.com/api/v1/image/106832688-Thumbnail-Explains-Carbon-Trading-01-CLEAN-jpg?v=1611951591' },
    { title: 'Global CO2 Emissions Hit Record High in 2023, IEA Says', content: 'Global carbon-dioxide emissions reached a record  hampered to the International Energy Agency.', url: 'https://www.wsj.com/articles/global-co2-emissions-hit-record-high-in-2023-iea-says-ea522461', imageUrl: 'https://dims.apnews.com/dims4/default/9853c78/2147483647/strip/true/crop/3000x1971+0+0/resize/599x394!/quality/90/?url=https%3A%2F%2Fstorage.googleapis.com%2Fafs-prod%2Fmedia%2Fc57db1f325014819ab23f7d65631f73f%2F3000.jpeg' },
];

const News = () => {
    const [selectedItem, setSelectedItem] = useState<NewsItem | null>(null);
    useNavigate();
    const handleReadMoreButton = (url: string) => {
        window.open(url, '_blank'); // Open the news link in a new tab
    };

    const truncateContent = (content: string, length: number) => {
        const words = content.split(' ');
        if (words.length > length) {
            return words.slice(0, length).join(' ') + '...';
        } else {
            return content;
        }
    };

    return (
        <div style={{margin: '0 5%'}}>
            <Typography variant="h4" style={{marginBottom: '60px'}}>Latest News</Typography>
            <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
                {[0, 1].map((row) => (
                    <div key={row} style={{display: 'flex', gap: '30px'}}>
                        {newsItems.slice(row * 3, (row + 1) * 3).map((item, index) => (
                            <div key={index} style={{flex: 1, transition: 'transform 0.3s ease'}}>
                                <Card
                                    className="news-card"
                                    style={{
                                        border: '1px solid #ccc',
                                        borderRadius: '5px',
                                        overflow: 'hidden',
                                        transform: 'scale(1)',
                                        transition: 'transform 0.3s ease',
                                        cursor: 'pointer',
                                    }}
                                    onMouseEnter={() => {
                                        const cards = document.querySelectorAll('.news-card');
                                        cards.forEach((card) => {
                                            if (card instanceof HTMLElement) {
                                                card.style.transform = 'scale(0.95)';
                                            }
                                        });
                                    }}
                                    onMouseLeave={() => {
                                        const cards = document.querySelectorAll('.news-card');
                                        cards.forEach((card) => {
                                            if (card instanceof HTMLElement) {
                                                card.style.transform = 'scale(1)';
                                            }
                                        });
                                    }}
                                >
                                    <img
                                        src={item.imageUrl}
                                        alt={item.title}
                                        style={{
                                            width: '100%',
                                            height: '200px',
                                            objectFit: 'cover',
                                            borderTopLeftRadius: '5px',
                                            borderTopRightRadius: '5px'
                                        }}
                                    />
                                    <CardContent style={{padding: '20px'}}>
                                        <Typography variant="h6">{item.title}</Typography>
                                        <Typography variant="body2">{truncateContent(item.content, 20)}</Typography>
                                        <Button variant="contained" color="primary"
                                                onClick={() => handleReadMoreButton(item.url)}>Read more</Button>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            {selectedItem && <NewsModel open={true} handleClose={() => setSelectedItem(null)} item={selectedItem}/>}
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

            <br/>
            <br/>

        </div>
    );
};

export default News;