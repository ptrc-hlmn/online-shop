import './../css/Content.css';
import TopNav from "./TopNav";
import Navbar from "./Navbar";
import Items from "./Items";

let Content = () => {
    return (
        <div className='content'>
            <TopNav />
            <Navbar />
            <Items />
        </div>
    );
};

export default Content;