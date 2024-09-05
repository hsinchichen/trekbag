import BackgroundHeading from './BackgroundHeading';
import Footer from './Footer';
import Header from './Header';
import ItemList from './ItemList';
import SideBar from './SideBar';
import ItemsContentProvider from '../contexts/itemsContentProvider';

function App() {
  return (
    <>
      <BackgroundHeading />
      <main>
        <ItemsContentProvider>
          <Header />
          <ItemList />
          <SideBar />
        </ItemsContentProvider>
      </main>
      <Footer />
    </>
  );
}

export default App;
