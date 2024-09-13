import './App.css';
import Header from "./components/Header/Header";
import CCList from "./components/CoreConcept/CCList";
import Examples from "./components/Examples/Examples";


function App() {


    return (
        <>  {/* <Fragment>[not shown on dom] <div> because React needs a parent tag for its child */}
            <Header></Header>
            <main>
                <CCList/>
                <Examples/>
            </main>
        </>
    );
}

export default App;
