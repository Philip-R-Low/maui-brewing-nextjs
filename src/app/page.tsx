import TopMenu from '@/components/TopMenu';
import CenterText from '@/components/CenterText';
import BottomMenu from '@/components/BottomMenu';


/** The Home page. */
const Home = () => (
  <main className={`d-flex flex-column min-vh-100`}>
    <TopMenu />
    <CenterText />
    <BottomMenu />
  </main>
);

export default Home;
