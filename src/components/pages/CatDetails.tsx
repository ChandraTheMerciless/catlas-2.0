import { useParams } from "react-router-dom";

const CatDetails = () => {
    const {id} = useParams();

    return (
        <div>
            <h1>Cat Details</h1>

            <p>cat id = {id}</p>
        </div>
    )
}

export default CatDetails;