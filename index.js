import React, { 
  useState, 
  useEffect, 
  useLayoutEffect, 
  useCallback, 
  useMemo } from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class App extends React.Component {
  constructor() {
      super()
      this.state = {
        messageList: '',
        author: '',
        films: [],
        test: {
          message: '',
          authors: ''
        }
      }
      //this.state.messageList = ['author:', ' Bot,', ' text:', ' Hi how can I help']
  }

  FuncMessageListUser = (User) => {
    
    console.log('new message', User);

    this.setState({
    author: this.state.author + ' User',
    messageList: this.state.messageList  + ' Здравствуйте, мне нужна помощь службы поддержки'
    
      
    });
  
  };

  FuncMessageListUser2 = (User) => {
    
    console.log('new message', User);

    this.setState({
    author: this.state.author + ' User',
    messageList: this.state.messageList  + ' Подскажите пожалуйста баланс моей карты ..4576'
    
      
    });
  
  };

  FuncMessageListBot = (Bot) => {
    
    console.log('new message', Bot);
    this.setState({
      author: this.state.author = ' Bot',
      messageList: this.state.messageList  = ' Здравствуйте, я Олег, чем могу вам помочь'
       
     });
  
  }

  FuncMessageListBot2 = (Bot) => {
    
    console.log('new message', Bot);
    this.setState({
      author: this.state.author = ' Bot',
      messageList: this.state.messageList  = ' Баланс вашего счета 46 201,99 $'
       
     });
  
  }

  addFilm = () => {
    
   
    this.setState({
      films: [...this.state.films, ' Матрица '],
     });
  
  }

  addFilm2 = () => {
    
   
    this.setState({
      films: [...this.state.films, ' Матрица 2 '],
     });
  
  }

  removeFilm = (filmName) => {
    
   
    this.setState({
      films: this.state.films.filter(film => film !== filmName),
     });
  
  }

  FuncMessageTest = (message, authors) => {
   
    this.setState({
     test: {
       ...this.state.test,
       message: this.state.message = " Здравствуйте меня зовут Максим и у меня есть вопрос ",
       authors: this.state.author =  'Пользователь: Maksim'
     }
       
     });
  
     
  }

  FuncMessageTest2 = (message, authors) => {
   
    this.setState({
     test: {
       ...this.state.test,
       message: this.state.message = " Здравствуйте меня зовут Олег, внимательно слушаю ваш вопрос ",
       authors: this.state.author =  'Пользователь: Bot Oleg'
     }
       
     });
  
     
  }

  FuncMessageTest3 = (message, authors) => {
   
    this.setState({
     test: {
       ...this.state.test,
       message: this.state.message = " Я хотел бы узнать за что у меня была списана сумма 1500 р. сегодня ",
       authors: this.state.author =  'Пользователь: Maksim'
     }
       
     });
  
     
  }
  FuncMessageTest4 = (message, authors) => {
   
    this.setState({
     test: {
       ...this.state.test,
       message: this.state.message = " Вижу что списание было за Вашу подписку оформленную на сайте Apple ",
       authors: this.state.author =  'Bot Oleg'
     }
       
     });
  
     
  }



  render() {
    const { messageList, author, films, test } = this.state;
    return (
      
      <div className="messages">
        <h1>App class component:</h1>
        <h1 className="title">Сообщение: {messageList} <br></br> </h1>
        <h2 className="title"> Автор: {author} <br></br></h2>
        <button className="btn" onClick={() => this.FuncMessageListUser("User")}>User Задать вопрос № 1</button>
        <button className="btn" onClick={() => this.FuncMessageListBot("Bot")}> Bot ответить на вопрос № 1</button>
        <button className="btn" onClick={() => this.FuncMessageListUser2("User")}>User Задать вопрос № 2</button>
        <button className="btn" onClick={() => this.FuncMessageListBot2("Bot")}> Bot ответить на вопрос № 2</button>
<hr />


        <button className="btn" onClick={() => this.addFilm("Film")}> Добавить фильм</button>
        <button  className="btn" onClick={() => this.addFilm2("Film")}> Добавить фильм 2</button>
       
        <h3 className="title" >Films</h3>
        {films.map((film) => (
        <div className="messages">
        <h4>{ film }</h4>
        <button className="btn" onClick={() => this.removeFilm(film)}> Удалить фильм</button>
        </div>
        ))}

<hr /> 
          <h1 className="title">{test.message}</h1>
          <h1 className="title">{test.authors}</h1>
          
          <button className="btn" onClick={() => this.FuncMessageTest()}>Вопрос от Максима</button>
          <button className="btn" onClick={() => this.FuncMessageTest2()}>Ответ роботизированной системы</button>
          <button className="btn" onClick={() => this.FuncMessageTest3()}>Вопрос от Максима № 2</button>
          <button className="btn" onClick={() => this.FuncMessageTest4()}>Ответ роботизированной системы № 2</button>
       
      </div>
    )
  }

}
  <hr />

const FunctonComponentApp = () => {
  const [message, setMessage] = useState('Добро пожаловать в FuncApp!');
  const [user, setUser] = useState([' Maksim: ' ]);
  const [bot, setBot] = useState([' Bot Oleg: ' ]);
  const [quests] = useState(['']);
  const [whitespace] = useState([user.join('')]);
  const [whitespace2] = useState([bot.join('')]);
  const [exit, setExit] = useState(['Вы вышли из чата'])

 

  const addUser = () => {
    setUser([...user, (' Здравствуйте, у меня вопрос по моему кредиту ')])
   
}
  const addBot = () => {
  setBot([...bot, (' Вижу что вам выдан кредит на 295 000 р., что вас интересует? ')])
}

const addUser2 = () => {
  setUser([whitespace, (String (' Подскажите мне сумму для досрочного погашения '))])
  
  
}
const addBot2 = () => {
  setBot([whitespace2, (String (' Вам нужно внести 35 767,78 р до 14.03.2022 '))])
  
}

const removeExit = () => {
  console.log('EXIT', exit)
  setBot([...exit, (String (' Всего доброго!!! '))])
  
}

/*const removeExit = () => {
  
  setExit([...quests, exit,  (String ("Спасибо за обращение"))])
  console.log('EXIT')
}*/







/*const removeUser = (questsName) => {
  setQuests([...quests.filter(quest => quest !== questsName)])
}*/





  return (
  <div className="function">
    <h1 >Сhat messeger FuncApp</h1>
    <h2>{ message } </h2>
    <button  onClick={() => setMessage(<p>'Bot Oleg: Приветствую тебя Максим!!!'</p>)}>Ответим на сообщение</button>
    <button  onClick={() => setMessage(<p>'Bot Oleg: Извините очень много обращений нужно подождать'</p>)}>Отказ от ответа</button>
    <div className = "radius">
    <h4 className = "user">Пользователь {user + ' -  в сети'} </h4>
    <h4 className = "bot">Администратор {bot + ' -  в сети'} </h4>
    </div>
   
    



        <h3>Добро пожаловать в чат, если у вас есть вопрос, задайте.</h3>
        {quests.map((quest) => (
        <div>
        <h4>{ quest }</h4>
        <button className="button" onClick={addUser}>Задать вопрос № 1</button>
        <button className="button" onClick={addBot}>Бот ответить на вопрос № 1</button>
        <button className="button" onClick={addUser2}>Задать вопрос № 1</button>
        <button className="button" onClick={addBot2}>Бот ответить на вопрос № 1</button>
        <button className="buttons" onClick={removeExit}> Выйти из чата</button>
        </div>
        ))}

  </div>
  );

};





ReactDOM.render(
  <React.StrictMode>
    <FunctonComponentApp />
   
  </React.StrictMode>,
  document.getElementById('root')
);
