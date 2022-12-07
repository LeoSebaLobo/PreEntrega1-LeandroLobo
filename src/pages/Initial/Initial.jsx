import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../../containers/Header/Header';

import ItemDetailContainer from '../../containers/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from '../../containers/ItemListContainer';
import Layout from '../../containers/Layout';

export const Initial =() =>{

  const Greeting = ["Welcome"];
  const Title = ["Another shop store"]
  const Pag = ["This is a Category"]

  const Categories = [
    { name: "Hombre", id: 0, route: "/category/men's clothing" },
    { name: "Mujer", id: 1, route: "/category/women's clothing" },
    { name: "Electronica", id: 2, route: "/category/electronics" },
    { name: "Joyeria", id: 3, route: "/category/jewelery" }];

  return (
    <>
      <BrowserRouter>
        <Layout>
          <Header categories={Categories} />
          <Routes>
            <Route path="/" element={<ItemListContainer greeting={Greeting} title={Title} />}/>
            <Route path="/category/:id" element={<ItemListContainer greeting={Greeting} pag={Pag} />}/>
            <Route path="/:id" element={<ItemDetailContainer />}/>
          </Routes>
        </Layout> 
      </BrowserRouter>
    </>
  )
}

export default Initial;
