
import BlogCard from './BlogCard';

const CardList = ({dumyData, favored, setFavored, handleFavored }) => {
    console.log("list " , favored)
    return (


        <div  style={{display: "flex", flexDirection:"column" }} >
            {
                dumyData.map((card, index) => {
                    return (
                        <BlogCard key={index}  fovered={favored} setFavored={setFavored}  handleFavored={handleFavored}/>
                    )
                })

            }
        </div>
    )
    
};

export default CardList