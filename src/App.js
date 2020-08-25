import React, {Component} from 'react';
import List from './list';
import STORE from './store';

class App extends Component {
  static defaultProps = {
    store: {
      lists: [],
      allCards: {},
    }
  };

  render() {
    const { store } = this.props
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {store.lists.map(list => (
            <List
              key={list.id}
              header={list.header}
              cards={list.cardIds.map(id => store.allCards[id])}
            />
          ))}
        </div>
      </main>

    );
  }
}

// function App(props) {
//   const STORE = props.STORE;
//   const cardsArr = [];
//     for (let i = 0; i < STORE.lists.length; i++){
//         let objArr = [];
//       // get the objects from allCards
//         for (let key in STORE.allCards) {
//           if (STORE.lists[i].cardIds.includes(key)) {
//             objArr.push(STORE.allCards[key]);
//           }
//         }
//         cardsArr.push(
//             <List key={STORE.lists[i].id} header={STORE.lists[i].header} cards={objArr} />
//         )
//     }


//   return (
//     <main className='App'>
//       <header class="App-header">
//         <h1>Trelloyes!</h1>
//       </header>
//       <div class="App-list">
//         {cardsArr}
//       </div>
//     </main>
//   );
// }

export default App;