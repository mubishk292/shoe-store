import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom'
import axios from 'axios';
import { useEffect , useState } from 'react';

import Header from './components/header/header'
import Signup from './components/signupLogin/signup'
import Login from './components/signupLogin/login'
import Dashboard from './components/dashboard/dashboard'
import LaunchPage from './components/launchPage/launchpage'
import LaunchShoe from './components/launchPage/launchShoe'
import Cart from './components/Cart/cart'
import myStore from './store/store';
import CreateAd from './components/createAd/createAd';

export default () => {

  let [shoesAd , setShoesAd] = useState([]);

  useEffect(()=>{
    axios.get('/ads-list').then((resp)=>{
      setShoesAd(resp.data)
    })
  },[])

  useEffect(() => {
    async function checkToken() {
      try {
        let resp = await axios.post('/check-session', { nishani: localStorage.getItem('myToken') });
        
        if (resp.data.name) {
          myStore.dispatch({
            type: "LOGIN",
            user: resp.data
          });
        }

      }catch (e) {

      }
    }
    checkToken();

  }, []);

  return <div>
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/create-ad' element={<CreateAd />} />
        <Route path='/launch' element={<LaunchPage data={shoesAd} />} />
        <Route path='/launch/:title' element={<LaunchShoe data={shoesAd} />} />
        <Route path='/cart' element={<Cart  />} />
      </Routes>
    </BrowserRouter>
  </div>
} 