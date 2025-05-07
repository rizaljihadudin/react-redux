import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router'
import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './counterSlice.js'
import Counter from './Counter.jsx'
import { todoListSlice } from './todoListSlice.js'
import ListTodo from './ListTodo.jsx'
import AddTodo from './AddTodo.jsx'
import UpdateTodo from './UpdateTodo.jsx'


// Store tempat penyimpanan global untuk state aplikasi dalam arsitektur Redux, wajib menambahkan reducers
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    todoList : todoListSlice.reducer
  }
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path='/counter' element={
            <>
              <Counter />
              <Counter />
            </>
          } />
          <Route path='/todolist'>
            <Route index element={<ListTodo />}/>
            <Route path="add" element={<AddTodo />}/>
            <Route path=":id/edit" element={<UpdateTodo />}/>

          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
