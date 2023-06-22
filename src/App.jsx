import React, { useEffect, useState } from 'react'
import { fetchDataFromApi } from './utils/api'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getApiConfiguration, getGenres } from './store/homeSlice'
import Home from './Pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Details from './Pages/Details'
import P404 from '../src/Pages/P404'
import Explore from '../src/Pages/Explore'
import Searchresult from '../src/Pages/Searchresult'
const App = () => {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);
  const x = useSelector((state) => state.home)
  //console.log(x);
  //const [data, setdata] = useState([])
  useEffect(() => {
    fetchApiConfig();

  }, []);
  const fetchApiConfig = () => {
    fetchDataFromApi("/configuration").then((res) => {
      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
      }
      //console.log(res);
      dispatch(getApiConfiguration(url));
    })
  }
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>

        <Route path='/' element={
          <Home />
        } />
        <Route path='/:mediaType/:id' element={<Details />} />
        <Route path="/search/:query" element={<Searchresult />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
        <Route path="*" element={<P404 />} />





      </Routes>
      <Footer />
    </BrowserRouter>



  )
}

export default App