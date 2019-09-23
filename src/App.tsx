import React from 'react'
import { Provider } from 'mobx-react'
import { rootStore } from './store/root.store'
import Todo from './views/Todo/Todo'

const App: React.FC = () => {
  return (
    <Provider rootStore={rootStore}>
      <Todo />
    </Provider>
  )
}

export default App
