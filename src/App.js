import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navBar/NavBar';
import { Route, Routes } from 'react-router-dom';
import { Products } from './pages/products';
import { Home } from './pages/home';
import { Footer } from './components/footer/Footer';
import { Contact } from './pages/contact';
import { Services } from './pages/services';
import { Blog } from './pages/blog';

function App() {
    return (
        <div className="display-div">
            <Routes>
                <Route path="/" element={<NavBar />}>
                    <Route path='/' element={<Home />} />
                    <Route path='/products*' element={<Products />} />
                    <Route path='/services' element={<Services/>} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/blog' element={<Blog />} />
                </Route>
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
