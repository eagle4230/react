import './App.css';
import { Header } from './Components/Header/Header';
import { Footer } from './Components/Footer/Footer';
import { Product } from './Components/Product/Product';
import { Form } from './Components/Message/Message';

const headerData = {
  sitename: 'Заголовок сайта',
  title: 'Подзаголовок',
  nav: [
    { "link": "nav1", "text": "my link 1" },
    { "link": "nav2", "text": "my link 2" },
    { "link": "nav3", "text": "my link 3" }
  ]
};

const products = [
  { "title": "apple", "price": 330, "image": "https://cdn0.iconfinder.com/data/icons/fruity-3/512/Apple-512.png" },
  { "title": "pear", "price": 420, "image": "https://cdn0.iconfinder.com/data/icons/fruity-3/512/Pear-512.png" }
];

export const App = () => {
  return (
    <>
      <Header data={headerData} />
      <div className='catalog'>
        {products.map(item => <Product key={item.title} title={item.title} price={item.price} image={item.image} />)}
      </div>
      <Form />
      <Footer />
    </>
  );
}
