import { useHistory } from "react-router-dom";



export const Dashboard = () => {

    const history = useHistory();
    return (
        <div>
            <img/>
            <button onClick={()=> history.push("/")}>Logout</button>
        </div>
    )
}