export default function auth () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: 'Manoj Kumar',
        avatar: '',
        uid: 'immanoj16',
      })
    }, 2000)
  })
}

export const checkIfAuthed = (store) => {
  // Ignore firebase
  console.log(store)
  return store.getState().isAuthed
}
