import React, {Component} from 'react';
import Card from './card';
import STORE from './store';
// import { render } from '@testing-library/react';

class List extends Component {
    static defaultProps = {
        cards: [],
        header: '',
        
    }
    
    render() {

        const arr = [];
        for (let i = 0; i < this.props.cards.length; i++){
            arr.push(
                <Card key={this.props.cards[i].id} title={this.props.cards[i].title} content={this.props.cards[i].content} />
            )
        }
// OR
/* this.props.cards.map(el => {
<Card key={el.id} title={el.title} content={el.content}
})
*/
    return (
        <section className="List">
        <header className="List-header">
        <h2>{this.props.header}</h2>
        </header>
        <div className="List-cards">
            {arr}
         </div>
         </section>
        
    )
  }
}

export default List;