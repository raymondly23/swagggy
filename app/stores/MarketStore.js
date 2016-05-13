import { EventEmitter } from "events"
import dispatcher from '../dispatcher'

class MarketStore extends EventEmitter {
  constructor() {
    super()
    this.sell = [
      {
        date: 'today', 
        seller: 'swagggyray', 
        item: 'yeezy', 
        size: '9', 
        id: 1
      },
      {
        date: 'yesterday', 
        seller: 'swagggyray', 
        item: "1's" , 
        size: 9, 
        id: 2
      }
    ]
  }

    sellShoe(item) {
      const id = Date.now()
      item.id = id
      this.sell.push(item)
      this.emit("change")
    }

    getAll() {
      return this.sell
    }

    handleActions(action) {
      switch(action.type) {
        case 'CREATE_POST' : {
          this.sellShoe(action)
        }
      }
    }

  }

  const marketStore = new MarketStore
  dispatcher.register(marketStore.handleActions.bind(marketStore))
  window.dispatcher = dispatcher

  export default marketStore