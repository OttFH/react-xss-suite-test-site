import {Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import EscapingComment from './pages/EscapingComment';
import EscapingHref from './pages/EscapingHref';
import EscapingOnload from './pages/EscapingOnload';
import ToHome from './components/ToHome';
import Footer from './components/Footer';
import EscapingTag from './pages/EscapingTag';
import EscapingValue from './pages/EscapingValue';
import SimpleTag from './pages/SimpleTag';
import SimpleValue from './pages/SimpleValue';
import SimpleComment from './pages/SimpleComment';
import PostData from './pages/PostData';
import ReadData from './pages/ReadData';

import './App.css';

function App() {
    return (
        <>
            <div className="container">
                <ToHome/>

                <Switch>
                    <Route path="/escapingComment" component={EscapingComment}/>
                    <Route path="/escapingHref" component={EscapingHref}/>
                    <Route path="/escapingOnload" component={EscapingOnload}/>
                    <Route path="/escapingTag" component={EscapingTag}/>
                    <Route path="/escapingValue" component={EscapingValue}/>
                    <Route path="/simpleComment" component={SimpleComment}/>
                    <Route path="/simpleTag" component={SimpleTag}/>
                    <Route path="/simpleValue" component={SimpleValue}/>
                    <Route path="/postData" component={PostData}/>
                    <Route path="/readData" component={ReadData}/>
                    <Route path="/" component={Home}/>
                </Switch>
            </div>

            <Footer/>
        </>
    );
}

export default App;
