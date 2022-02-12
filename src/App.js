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
  // const shoes_ad = [
  //    {
  //     title: 'Nike',
  //     name: "Nike",
  //     img: "https://s.alicdn.com/@sc04/kf/H174c2eaf5521444cab51f2f7e093d63d4.jpg_300x300.jpg",
  //     description: "4 Colors Soft And easy to walk",
  //     price: "10$"
  //   },
  //    {
  //     title: 'Puma',

  //     name: 'Puma',
  //     img: 'https://s.alicdn.com/@sc04/kf/Hb2969a8722ab4982a05c005d14a0e5f8A.jpg_300x300.jpg',
  //     description: " 7 Colors Soft And comfort and support",
  //     price: '8$'
  //   },
  //   {
  //     title: 'Adidas',
      
  //     name: 'Adiddas',
  //     img: 'https://s.alicdn.com/@sc04/kf/He8ecaa18cba24cd19f04f88cbbf8c2e0K.jpg_300x300.jpg',
  //     description: ' 5 colors use for running Comfortable ',
  //     price: '7$'
  //   },
  //    {
  //     title: 'Sporty-Fit',

  //     name: "Nike",
  //     img: "https://s.alicdn.com/@sc04/kf/Hab657f582bf34c1591f843db089a2661K.jpg_300x300.jpg",
  //     description: "Popular selling hiking running shoes",
  //     price: '12$'
  //   },
  //   {
  //     title: 'Energy-Shoes',

  //     name: 'Puma',
  //     img: 'https://s.alicdn.com/@sc04/kf/Hd3e2b1aa03c04abc85883f9b2e084ca8z.jpg_300x300.jpg',
  //     description: "Calzado deportive comfortable rubber shoes",
  //     price: '9$'
  //   },
    // "Active-Footing": {
    //   name: 'Adiddas',
    //   img: 'https://s.alicdn.com/@sc04/kf/Hc3852b947c9e455f8e77b4e7c3805ab2t.jpg_300x300.jpg',
    //   description: 'Shockproof breathable Male sneakers',
    //   price: '7$'
    // },
    // "Fit-Feet": {
    //   name: "Nike",
    //   img: "	https://s.alicdn.com/@sc04/kf/Hd15429566f2044fba19a28e5fd461e63V.jpg_300x300.jpg",
    //   description: "Breathless Running sneaker wind casual",
    //   price: '13$'
    // },
    // "Sneakerjunkies": {
    //   name: 'Puma',
    //   img: '	https://s.alicdn.com/@sc04/kf/He0cac83ca75e40ecb771591528cfdb71C.jpg_300x300.jpg',
    //   description: "Footwear arrival hot casual shot shoes",
    //   price: '6$'
    // },
    // "Shoegazing": {
    //   name: 'Adiddas',
    //   img: '	https://s.alicdn.com/@sc04/kf/H57b488e414fe40fdaf7307f351990affa.jpeg_300x300.jpeg',
    //   description: 'Soccer Chaussures BasketBall shoes',
    //   price: '7$'
    // },
    // "Classy-Shoes": {
    //   name: "Nike",
    //   img: "	https://s.alicdn.com/@sc04/kf/H3585ff00a8524e6cb7659239735dd59ch.jpg_300x300.jpg",
    //   description: "Casual Fashion trend sneaker",
    //   price: '9$'
    // },
    // "Fashion-Feet": {
    //   name: 'Puma',
    //   img: 'https://s.alicdn.com/@sc04/kf/HTB1dY2sX5nrK1Rjy1Xcq6yeDVXa8.jpg_300x300.jpg',
    //   description: "New Men's plush sportwear shoes",
    //   price: '8$'
    // },
    // "Optimum-Footwear": {
    //   name: 'Adiddas',
    //   img: 'https://s.alicdn.com/@sc04/kf/Hccc3d8de583549b3bd0c391f4ae63631Q.jpg_300x300.jpg',
    //   description: 'Top Mens Casual sports shoes',
    //   price: '12$'
    // }
  // ]

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