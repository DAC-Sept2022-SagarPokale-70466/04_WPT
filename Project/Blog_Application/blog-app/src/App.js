import logo from './logo.svg';
import { Button } from 'reactstrap';
import Base from './Components/Base';
import SingUp from './Pages/SignUp';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import LogIn from './Pages/Login';
import About from './Pages/About';
import SignUp from './Pages/SignUp';
import Service from './Pages/Services';
import { ToastContainer, toast } from 'react-toastify';
import PrivateRoute from './Components/PrivateRoute';
import UserDashboard from './Pages/user-routes/UserDashboard';
import ProfileInfo from './Pages/user-routes/ProfileInfo';
import PostPage from './Pages/postPage';
import Categories from './Pages/Categories';
import UserProvider from './context/UserProvider';
import UpdateBlog from './Pages/UpdateBlog';

function App() {
  return (
    <UserProvider>
      <BrowserRouter>

        <ToastContainer position='bottom-center' />
        <Routes>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/signUp' element={<SignUp />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/login' element={<LogIn />}></Route>
          <Route path='/service' element={<Service />}></Route>
          <Route path='/posts/:postId' element={<PostPage />}></Route>
          <Route path='/categories/:categoryId' element={<Categories />}></Route>
          <Route path='/user' element={<PrivateRoute />}>
            <Route path='dashboard' element={<UserDashboard />}></Route>
            <Route path='profileinfo/:userId' element={<ProfileInfo />}></Route>
            <Route path='update-blog/:blogId' element={<UpdateBlog  />}></Route>
          </Route>


          <Route path='/' element={<Home />}></Route>
        </Routes>

      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
