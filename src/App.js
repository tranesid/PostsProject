import logo from './logo.svg';
import './App.css';
import Posts from "./Posts"



let user = [
  { id: 1, name: "Pippin", text: "MEOWZA!!! I found some crazy catnip! Finders, keepers! ;) ", initialLikes: 2},
  { id: 2, name: "Midna", text: "I saw Pippin acting meowy strange earlier.. stranger than usual! I wonder what he's on about..", initialLikes: 3 },
  { id: 3, name: "Max", text: "Paw-don me, but has anyone seen my catnip?! #FUR REAL!"},
  { id: 4, name: "Navea", text: "I can't wait to have a nap after my nap.. #Lookin' good, feline good", initialLikes: 3},
];


function App() {
  const renderUsers = () => {
    return user.map((user) => {
      return (
        <Posts
          key={user.id}
          name={user.name}
          text={user.text}
          initialLikes={user.initialLikes}
        />
      );
    });
  };

  return (
    <>
    <img className='img' src='./images/IMG_5714.png'></img>
    <img className='img' src='./images/IMG_5469.png'></img>
    <img className='img' src='./images/IMG_5146.png'></img>
    <img className='img' src='./images/IMG_4532.png'></img>
    <img className='img' src='./images/IMG_5933.png'></img>
    <img className='img' src='./images/IMG_5256.png'></img>
    <img className='img' src='./images/IMG_3564.png'></img>
    
    <h1>Kitty Book</h1>

    <p style={{textAlign: 'center'}}>Where Cats Make Friends!</p>
    <p style={{textAlign: 'center', fontSize: '2em', textDecoration: 'underline'}}>Recent Posts</p>
    {renderUsers()}

    </>
  )};

export default App;
