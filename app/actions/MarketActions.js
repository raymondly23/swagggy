import dispatcher from '../dispatcher'

export function createPost(item) {
  dispatcher.dispatch({
    type: 'CREATE_POST',
    item
  })
}