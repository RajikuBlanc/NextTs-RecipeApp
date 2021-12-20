import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      <main className='min-h-screen max-w-full flex justify-center items-center'>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
