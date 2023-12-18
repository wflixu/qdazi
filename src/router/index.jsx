import { createHashRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { Layout } from "../pages/Layout";
import { ErrorPage } from './../pages/Error'
import { Todo } from '../pages/todo/Todo'
import { Message } from '../pages/message/Message'
import { My } from '../pages/my/My'
import {Login} from '../pages/auth/Login'

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: 'home',
        index: true,
        element: <Home />
      },
      
      {
        path: 'todo',
        index: true,
        element: <Todo />
      },
      {
        path: 'message',
        index: true,
        element: <Message />
      },
      {
        path: 'my',
        index: true,
        element: <My />
      },
    ],
    errorElement: <ErrorPage />,
  },
  {
    path: '/login',
    element: <Login />
  },
]);


export {
  router
}
