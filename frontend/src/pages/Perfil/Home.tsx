
import { Link } from "react-router-dom";
import Menu from "./Menu";

function Home() {


    return (
        <>          
            <div className="flex">
                <Menu/>

                <div className="flex-1">
                    <div className="p-10">
                        <h1 className="text-2xl font-bold">Home</h1>
                    </div>
                </div>
            </div>


        </>
    );
}

export default Home;
