import { useNavigate } from "react-router-dom";
import styles from "./home.css"

const Home=()=>{
    const navigate=useNavigate();
    const handleCreateRoom=()=>{
        navigate(`/room/${Date.now()}`);
        console.log(Date.now())
    };
    return<div>
        <div className="main">
            <div className="heading"><h1 className="zoomwave"><span className="z">Z</span>oom <span className="w">W</span>ave</h1></div>
            <div className="one">
                <div className="two"> 
                    <h1 className="welcome">Welcome !</h1>           
                    <button className="create" onClick={handleCreateRoom}>Create Room</button>
                </div>
            </div>

        </div>
    </div>
}
export default Home;