import ReactDOM from 'react-dom/client';
// import Contact from './Contact';
//import Home from './Home';
// import Demo from './Demo';
// import Company from './Company';
// import Sample from './Sample';
// import User from './User';
// import Sunbeam from './Sunbeam';
// import Parent from './Parent';
// import Register from './Register';
// import JavaProjectWithReact from './JavaProjectWithReact';
// import Dashboard from './Dashboard';

// import Book from './Book';

// import Meals from './LetsCreateOwn/Meals';

import MainUI from './LetsCreateOwn/MainUI';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
                <BrowserRouter>
                <MainUI/>
                </BrowserRouter>);
// root.render(<Home/>);
