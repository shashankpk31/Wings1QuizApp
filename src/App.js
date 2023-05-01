import './App.css';
import Quiz from './components/Quiz';
import Header from './components/Header';
import QuesList from './Questions.json'
import Footer from './components/Footer';


function App() {

  return (
    <div className="QuizApp">
      <Header />
      <Quiz questions={QuesList.questions.sort(() => Math.random() - Math.random()).slice(0, 40)}/>
      <Footer />
    </div>
  );
}

export default App;
