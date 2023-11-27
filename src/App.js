import './App.css';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [currentScreen, setCurrentScreen] = useState(1);
  const [currentQuestion,SetCurrentQuestion] = useState(1);
  const [currentAnswer,SetCurrentAnswer] = useState('');
  const [registeredUsers, setRegisteredUsers] = useState([]);
  const [wronganswers, setWrongAnswers] = useState([]);
  const [count,setCount] = useState(0);
  const cookies = document.cookie.split('; ');
  const experienciaCompletadaCookie = cookies.find(cookie => cookie.includes('experienciaCompletada'));
 /// console.log(experienciaCompletadaCookie)
  const listTexts = [
    'In October 2021, FAB became the first Gulf Cooperation Council (GCC) bank to become signatories of the NZBA. In H1 2023, we announced our first wave of disclosures for three high-emitting sectors: oil & gas, power, and aviation. The interim target for aviation reduction in financed intensity by 2030 is:',
    'Carbon markets are trading systems in which carbon credits – certificates representing quantities of GHGs that have been kept out of the air or removed from it – are sold and bought. There are two types of carbon emissions trading systems:',
    'In 2021, FAB launched a new ESG Strategy designed to accelerate growth in areas that are most pertinent to emerging sustainability opportunities and challenges. As part of the strategy, FAB have committed to lend, invest and facilitate sustainable and transition finance of (__________) by 2030:',
    'The Mastercard Priceless Planet Coalition UAE project with Emirates Nature-WWf aims to regenerate the following',
    'By taking The SME Climate pledge, SMEs will be committing to the following climate actions',
    'The national tree of the United Arab Emirates is the',
  ];

  const matrizTextos = [
    ['-15%', '-7%','-64%', '-33%'],
    ['Compliance and Voluntary Markets', 'Collaboration and Voluntary Markets','Compliance and Venture Markets', 'Cooperative and Voluntary Markets'],
    ['USD 75 billion', 'USD 5 billion','USD 77 billion', 'USD 7 billion'],
    ['Ghaf tree', 'Coral reef','Mangrove', 'Date palms'],
    ['Halve their greenhouse gas emissions before 2030', 'Achieve net-zero emissions before 2050','Disclose their progress on a yearly basis', 'All the above'],
    ['Ghaf tree', 'Date palm','Sidra tree', 'Arabian Gum Tree'],
  ];

  const titulos = ['FAB\'s net-zero timeline zone',
  'Carbon Markets zone','Sustainable Finance zone','FAB + Mastercard Priceless Planet','SME Climate Hub zone','Social zone'];

  const RigthAns = [ '-15%','Compliance and Voluntary Markets','USD 75 billion','Mangrove','All the above','Ghaf tree']
  



  function next() {
    setCurrentScreen(currentScreen + 1);
  }
  function nextQuestion () {
    handleRegister();
    SetCurrentQuestion(currentQuestion+1);
    if (currentQuestion === 6){
      setCurrentScreen(4);
    }
  }

  function handleAnswerClick(answer) {
    SetCurrentAnswer(answer);
  }

  const handleRegister = () => {
  const newUser = {currentAnswer};
  const wrongans={currentQuestion};
  setRegisteredUsers([...registeredUsers, newUser]);
  if (RigthAns[currentQuestion-1] === currentAnswer ){
    console.log('correcto'); setCount(count+1);
  } else {setWrongAnswers([...wronganswers,wrongans])}
    
    SetCurrentAnswer('');
  };

  function reset(){
    setCurrentScreen(3);
    SetCurrentQuestion(1);
    SetCurrentAnswer('');
    setRegisteredUsers([]);
    setCount(0);
    setWrongAnswers([]);
  }

  function set(){
    setCurrentScreen(1);
    SetCurrentQuestion(1);
    SetCurrentAnswer('');
    setRegisteredUsers([]);
    setCount(0);
  }


  function setCookie(){
    document.cookie = 'experienciaCompletada=true; expires=Fri, 31 Dec 9999 23:59:59 GMT';
    console.log('cookie settiada')
  
  }



  return (
    <div>

      {currentScreen === 1 ? (
        <div>
          <img src="images/frame1.png" style={{ width: '100%', height: '100%', position: 'absolute' }} alt="" />
          <img src="images/boton.png" style={{ width: '60%', height: '7%', left: '20%', top: '76%', position: 'absolute' }} alt=""
           onClick={() => { next();}}/>
        </div>
      ) : null}

      {currentScreen === 2 ? (
        <div>
          <img src="images/frame3.png" style={{ width: '100%', height: '100%', position: 'absolute' }} alt="" />
          <img src="images/boton.png" style={{ width: '40%', height: '10%', left: '70%', top: '90%', position: 'absolute' }}
            alt="" onClick={() => { next();}}/>
        </div>
      ) : null}

      {currentScreen === 3 ? (

        <div  >
        <img src="images/frame4.png" style={{ width: '100%', height: '100%', position: 'absolute' }} alt="" />
        <h1 style={{width:'60%',height:'2.12%',left:'20%',top:'15%',position:'absolute',color:'#00468C',fontFamily:'Graphik Trial',fontWeight:'700',wordWrap:'break-word',textAlign:'center'}}> {titulos[currentQuestion-1] }</h1>
        <p style={{width:'70%',height:'6%',left:'14%',top:'25%',position:'absolute',color:'#637488',fontFamily:'Graphik Trial',fontWeDight:'400',wordBreak:'break-word'}} > {listTexts[currentQuestion-1]}  </p>
        <Button className='botones' class="btn btn-primary" type="button" style={{width:'74.8%',height:'6%',left:'14.5%',top:'51.7%',position:'absolute',fontFamily: 'Graphik Trial',fontWeight: '500'}}
        onClick={() => {handleAnswerClick(matrizTextos[currentQuestion - 1][0])}}>{matrizTextos[currentQuestion - 1][0]}</Button>
        <Button className='botones' class="btn btn-primary" type="button" style={{width:'74.8%',height:'6%',left:'14.5%',top:'60.12%',position:'absolute',fontFamily: 'Graphik Trial',fontWeight: '500'}}
        onClick={() => {handleAnswerClick(matrizTextos[currentQuestion - 1][1])}}>{matrizTextos[currentQuestion - 1][1]}</Button>
        <Button className='botones' class="btn btn-primary" type="button" style={{width:'74.8%',height:'6%',left:'14.5%',top:'68.52%',position:'absolute',fontFamily: 'Graphik Trial',fontWeight: '500'}}
        onClick={() => {handleAnswerClick(matrizTextos[currentQuestion - 1][2])}}>{matrizTextos[currentQuestion - 1][2]}</Button>
        <Button className='botones' class="btn btn-primary" type="button" style={{width:'74.8%',height:'6%',left:'14.5%',top:'76.91%',position:'absolute',fontFamily: 'Graphik Trial',fontWeight: '500'}}
        onClick={() => {handleAnswerClick(matrizTextos[currentQuestion - 1][3])}}>{matrizTextos[currentQuestion - 1][3]}</Button>
        <img src="images/boton.png" style={{ width: '10%', height: '4%', left: '86%', top: '92%', position: 'absolute' }} alt="" onClick={() =>
        [nextQuestion()]}
          />
       </div>

      ) : null}

      {currentScreen === 4 ? (
      <div>
         {console.log(wronganswers)}
        {count === 6 && experienciaCompletadaCookie ?
        <div>
        <img src="images/frame7.png" style={{ width: '100%', height: '100%', position: 'absolute' }} alt="" />
        </div>
        :null}
        {count === 6 && (!experienciaCompletadaCookie) ? 
        <div>
        <img src="images/frame5.png" style={{ width: '100%', height: '100%', position: 'absolute' }} alt="" />
        <img src="images/boton.png" style={{ width: '52%', height: '6%', left: '24%', top: '83%', position: 'absolute' }}
        alt="" onClick={() => [setCurrentScreen(5)]} />
        </div>
        :null}
        {count < 6 ? (
        <div>
        <img src="images/frame6.png" style={{ width: '100%', height: '100%', position: 'absolute' }} alt="" />
        <div>
        <h1 style={{width:'56%',left:'22%',top:'34%',position:'absolute',color: '#414042',
        fontFamily: 'Graphik Trial',fontWeight: '700',wordWrap: 'break-word',backgroundColor:'#EBECF0',padding:'0',borderRadius:'10px' ,textAlign:'center' }}>{count}/6</h1>
        </div>

        <img src="images/boton.png" style={{ width: '70%', height: 'auto',top:'85%',left:'15%',position: 'absolute' }} alt="" onClick={() => [reset()]}/>
        <div style={{position:'absolute',width:'70%',top:'54%',left:'10%',  textAlign: 'center'}}>
        <ul>
        <ul style={{position: 'relative' ,backgroundColor:'#EBECF0',padding:'0',borderRadius:'10px',marginBottom:'20px',
        listStyle:'none',color:'#5B748A',fontFamily: 'Graphik Trial',
        fontWeight: '500',wordWrap: 'break-word' }}>
        {wronganswers.map((objeto, index) => (
          <li key={index}>
            Question:  {objeto.currentQuestion}
          </li>
        ))}
      </ul>
      </ul>
        </div>
        </div>
        ):null}
      </div>
      ) : null}

      {currentScreen === 5 ? (
        <div>
      <img src="images/frame8.png" style={{ width: '100%', height: '100%', position: 'absolute' }} alt="" />
      <img src="images/fabcoin.png" style={{ width: '60%', height: '40%', left: '20%', top: '40%', position: 'absolute' }}
        alt="" onDoubleClick={() => [setCookie(),set()]} />
      </div>
      ):null}
    </div>
  );
}
export default App;



