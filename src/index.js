import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import styles from './index.module.css';//такой подход нужен для того чтобы стили не перезатерлись при работе в команде

console.log("styles", styles);

const Parent = () => {
  const age = '34 years';
  const films = [
    {title:"film1",years:2020}, 
    {title:"film2",years:2021}
  ];

  const contact = "Adress: Moskow, Rublevskoe highway, 31, telephone: +7(495)499-00-00";

  const product = [
    {type: "telephone",model: "HONOR", price: "200$"},
    {type: "screen",model: "SAMSUNG", price: "230$"}
]
 
  

  const handleClick = () => {
    console.log("Click");
  }

  return (
    <div className={styles.test}>
    <h1>Parent</h1>
    <ClassComponent age={age} films={films} handleClick={handleClick} contact={contact} />
   <hr />
   <FunctionComponent age={age} films={films} handleClick={handleClick}/>
   <hr />
   <ComponentWitoutJSX/>
   <hr />
   <MessageComponent product={product}/>
   <hr />
    </div>
  )
}

const FilmsList = ({films, title}) => {
  return (
    <div>
      <h1>{title}</h1>
      <hr />
    {films.map((film) => {
    return (
    <div> 
      <h2>Title: {film.title}</h2>
      <h2>Years: {film.years} </h2>
    </div>
  );
  })}
  </div>
  );
}

const ProductList = ({products, title}) => {
  return (
    <div>
      <h1>{title}</h1>
      <hr />
    {products.map((product) => {
    return (
    <div> 
      <h2>Type: {product.type}</h2>
      <h2>Model: {product.model} </h2>
      <h2>Price: {product.price} </h2>
    </div>
  );
  })}
  </div>
  );
}

function MessageComponent({product}) {
    return(
    <div className={styles.title}> 
    <h1> Наши товары(передано с помощью props В MessageComponents)</h1>
    <ProductList products={product} title="Products"/>
    </div>
    );
  }


const ComponentWitoutJSX = () => {
  return React.createElement("div", null, React.createElement("h1", null, "Welcome to react ComponentWitoutJSX"))
} //в такой компонент браузер модифицирует наш код созданый на классовом или функциолнальном подходе


class ClassComponent extends React.Component {
  
  render() {
    console.log("this", this.props);
    const { age, films, contact } = this.props;
    return(<div>
    <h1> Welcome to react class Component</h1>
    <h2>Age: {age}</h2>
    <h2 className={styles.title}>Contacts(передано с помощью props): {contact}</h2>
    <FilmsList films={films} title="Films from Class"/>
    </div>
    );
  }

}

function FunctionComponent({age, films, handleClick}) {
  //console.log("props", props);
    return(
    <div> 
    <h1 onClick={handleClick}> Welcome to react function Component (click)</h1>
    <h2>Age: { age }</h2>
    <FilmsList films={films} title="Films from Class"/>
    </div>
    );
  }

 
  
  
  

ReactDOM.render(
  <React.StrictMode>
  
   
   <Parent/>
  </React.StrictMode>,
  document.getElementById('root')
);
