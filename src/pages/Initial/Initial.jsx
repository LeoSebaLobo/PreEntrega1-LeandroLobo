import Layout from '../../components/Layout/Layout';
import NavBar from '../../components/NavBar/NavBar';
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer';

export const Initial =() =>{
  const Menus = ['Celulares', 'Fundas', 'Accesorios', 'Audio', 'Servicios', 'Contacto'];
  return (
    <Layout>
      <NavBar menus={Menus} />
        <ItemListContainer 
          greeting={'Bienvenidos!'} 
          title={'Fix And Buy'}
          phrase={'El Lugar donde encontras todo para tu telefono!!'}/> 
    </Layout> 
  )
}

export default Initial;

