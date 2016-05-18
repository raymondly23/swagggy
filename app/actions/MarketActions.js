import dispatcher from '../dispatcher'

export function createPost(item) {
  item.type = 'CREATE_POST'
  dispatcher.dispatch({
    item
  })
}