import About from "./Sections/About";
import Activities from "./Sections/Activities";
import Doctrine from "./Sections/Doctrine";
import Leadership from "./Sections/Leadership";
import Sermons from "./Sections/Sermons";

function Home() {
    return (
        <>
            <About />
            <Activities />
            <Leadership />
            <Doctrine />
            <Sermons />            
        </>
    );
}

export default Home;
