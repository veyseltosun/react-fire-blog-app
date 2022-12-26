
import BlogCard from './BlogCard';

const CardList = ({dumyData, favored, setFavored }) => {
    return (


        <div  style={{display: "flex", flexDirection:"column" }} >
            {
                dumyData.map((card, index) => {
                    return (
                        <BlogCard key={card.index}  fovered={favored} setFavored={setFavored} />
                    )
                })

            }
        </div>
    )
    
};

export default CardList