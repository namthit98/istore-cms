import React, { useEffect, useState, ChangeEvent } from 'react'
import { Row, Col, Input, List, Button } from 'antd'
import { RootStore } from '../../store/root.store'
import { inject, observer } from 'mobx-react'
import { ITodo } from '../../store/todo.store'

interface IProps {
  rootStore?: RootStore
}

const Todo: React.FC<IProps> = inject('rootStore')(
  observer(({ rootStore }) => {
    const todoStore = rootStore!.todoStore
    const [inputText, setInputText] = useState<string>('')

    const handleChangInput = (e: ChangeEvent<HTMLInputElement>) => {
      setInputText(e.target.value)
    }

    const handleSubmit = () => {
      todoStore.createTodo(
        {
          title: inputText,
        },
        () => {
          setInputText('')
        },
      )
    }

    const handleDelete = (todo: ITodo) => {
      todoStore.deleteTodo(todo, () => {
        console.log('Xoas thanh cong')
      })
    }

    const renderTodos = (todos: ITodo[]) => {
      return (
        <List>
          {todos.map((todo: ITodo) => {
            return (
              <List.Item
                key={todo._id}
                actions={[
                  <Button type="primary" key="list-loadmore-edit">
                    edit
                  </Button>,
                  <Button
                    onClick={() => handleDelete(todo)}
                    type="danger"
                    key="list-loadmore-delete"
                  >
                    delete
                  </Button>,
                ]}
              >
                <strong>{todo.title}</strong>
              </List.Item>
            )
          })}
        </List>
      )
    }

    useEffect(() => {
      todoStore.fetchTodos(() => {
        console.log('okiii')
      })
    }, [todoStore])

    return (
      <React.Fragment>
        <Row gutter={24}>
          <Col span={12} offset={6}>
            <h1>Todo</h1>
          </Col>
          <Col span={12} offset={6}>
            <Col span={20}>
              <Input placeholder="Input todo" value={inputText} onChange={handleChangInput} />
            </Col>
            <Col span={4}>
              <Button onClick={handleSubmit}>Submit</Button>
            </Col>
          </Col>
        </Row>

        <Row gutter={24} type="flex" justify="center">
          {renderTodos(todoStore.todos)}
        </Row>
      </React.Fragment>
    )
  }),
)

export default Todo
