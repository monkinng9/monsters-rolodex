import './App.css';
import CardList from './components/card-list/card-list.component'
// https://jsonplaceholder.typicode.com/users | monster json

const App = () => {
  return (
    <div className='App'>
		<h1 className='app-title'>Hello Friends</h1>
        <input type='search' placeholder='Search Friends' className='monsters-search-box'></input>
        <CardList/>
	</div>    
  );
};

export default App;