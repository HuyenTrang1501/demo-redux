import React, { useState, useEffect } from 'react'
import ModalExample from '../components/common/Modal'
import store from '../redux/store'
import {
  Table,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  CardTitle
} from 'reactstrap'
import {
  deleteTodo,
  updateTodo,
  createTodo,
} from '../redux/actionCreator/todoActionCreator'

function Todo(props) {
  const { todo } = props
  const [openModal, setOpenModal] = useState(false)
  const [openModalCreate, setOpenModalCreate] = useState(false)
  const [updateId, setUpdateId] = useState('')
  const [inputValue, setInputValue] = useState({
    id: '',
    department_name: '',
    department_phone: '',
    department_manager: '',
    department_manager_other: '',
  })
  const [inputCreateValue, setInputCreateValue] = useState({
    id: '',
    department_name: '',
    department_phone: '',
    department_manager: '',
    department_manager_other: '',
  })
  const onDeleteItem = async (id) => {
    // eslint-disable-next-line no-restricted-globals
    if (!confirm('Bạn có chắc chắn xóa không?')) return
    try {
      // await todoApi.deleteByID(id)
      store.dispatch(deleteTodo(id))
    } catch (error) {
      console.log(error)
    }
  }
  const onUpdateItem = (id) => {
    store.dispatch(updateTodo(inputValue))
    setTimeout(() => {
      setOpenModal(false)
    }, 500)
  }
  let updateItem = {}
  if (updateId) {
    const idx = todo?.findIndex((item) => item.id === updateId)
    if (idx > -1) {
      updateItem = todo[idx]
    }
  }
  useEffect(() => {
    setInputValue(updateItem)
  }, [updateId])

  const onChangeValue = (e) => {
    const { name, value } = e.target
    setInputValue((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }
  const onCreateItem = () => {
    store.dispatch(createTodo(inputCreateValue))
    setInputCreateValue('')
    setTimeout(() => {
      setOpenModalCreate(false)
    }, 500)
  }
  const onChangeCreatValue = (e) => {
    const { name, value } = e.target
    setInputCreateValue((prevState) => ({
      ...prevState,
      id: Math.random().toString(36).slice(2),
      [name]: value,
    }))
  }
  return (
    <>
    <div className="d-flex justify-content-center mt-4">
     <CardTitle tag="h5">The list of Department</CardTitle>
     </div>
      <div className="d-flex justify-content-end">
        <Button
          className="my-3 mx-5"
          variant="success"
          onClick={() => {
            setOpenModalCreate(!openModalCreate)
          }}
        >
          Create
        </Button>
      </div>
      <Table className="table-hover" bordered>
        <thead>
          <tr>
            <th>STT</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Manager</th>
            <th>Manager other</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {todo?.map((item, index) => {
            return (
              <tr key={index}>
                <td>{++index}</td>
                <td>{item.department_name}</td>
                <td>{item.department_phone}</td>
                <td>{item.department_manager}</td>
                <td>{item.department_manager_other}</td>
                <th>
                  <span
                    className="cursor-pointer"
                    onClick={() => onDeleteItem(item.id)}
                  >
                    Xóa
                  </span>{' '}
                  |
                  <span
                    className="cursor-pointer"
                    onClick={() => {
                      setOpenModal(!openModal)
                      setUpdateId(item.id)
                    }}
                  >
                    {' '}
                    Sửa
                  </span>
                </th>
              </tr>
            )
          })}
        </tbody>
        <ModalExample
          openModal={openModalCreate}
          setOpenModal={setOpenModalCreate}
          onClickSave={() => onCreateItem()}
        >
          <Form className="">
            <FormGroup className="mt-4" row>
              <Label for="exampleEmail" sm={3}>
                Name
              </Label>
              <Col sm={9}>
                <Input
                  type="text"
                  name="department_name"
                  placeholder="Name"
                  onChange={onChangeCreatValue}
                  value={inputCreateValue.department_name || ''}
                />
              </Col>
            </FormGroup>
            <br/>
            <FormGroup row>
              <Label for="exampleEmail" sm={3}>
                Phone
              </Label>
              <Col sm={9}>
                <Input
                  type="text"
                  name="department_phone"
                  placeholder="Enter Phone Number"
                  onChange={onChangeCreatValue}
                  value={inputCreateValue.department_phone || ''}
                />
              </Col>
            </FormGroup>
            <br/>
            <FormGroup row>
              <Label for="exampleEmail" sm={3}>
                Main Manager
              </Label>
              <Col sm={9}>
                <Input
                  type="text"
                  name="department_manager"
                  placeholder="Enter Main Manager"
                  onChange={onChangeCreatValue}
                  value={inputCreateValue.department_manager || ''}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="exampleEmail" sm={3}>
                Others Manager
              </Label>
              <Col sm={9}>
                <Input
                  type="text"
                  name="department_manager_other"
                  placeholder="Enter Others Manager"
                  onChange={onChangeCreatValue}
                  value={inputCreateValue.department_manager_other || ''}
                />
              </Col>
            </FormGroup>
          </Form>
        </ModalExample>
        <ModalExample
          openModal={openModal}
          setOpenModal={setOpenModal}
          onClickSave={() => onUpdateItem(updateId)}
        >
          <Form className="">
            <FormGroup className="mt-4" row>
              <Label for="exampleEmail" sm={3}>
                Name
              </Label>
              <Col sm={9}>
                <Input
                  type="text"
                  name="department_name"
                  placeholder="Name"
                  onChange={onChangeValue}
                  value={inputValue.department_name || ''}
                />
              </Col>
            </FormGroup>
            <br/>
            <FormGroup row>
              <Label for="exampleEmail" sm={3}>
                Phone
              </Label>
              <Col sm={9}>
                <Input
                  type="text"
                  name="department_phone"
                  placeholder="Enter Phone Number"
                  onChange={onChangeValue}
                  value={inputValue.department_phone || ''}
                />
              </Col>
            </FormGroup>
            <br/>
            <FormGroup row>
              <Label for="exampleEmail" sm={3}>
                Main Manager
              </Label>
              <Col sm={9}>
                <Input
                  type="text"
                  name="department_manager"
                  placeholder="Enter Main Manager"
                  onChange={onChangeValue}
                  value={inputValue.department_manager || ''}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="exampleEmail" sm={3}>
                Others Manager
              </Label>
              <Col sm={9}>
                <Input
                  type="text"
                  name="department_manager_other"
                  placeholder="Enter Others Manager"
                  onChange={onChangeValue}
                  value={inputValue.department_manager_other || ''}
                />
              </Col>
            </FormGroup>
          </Form>
        </ModalExample>
      </Table>
    </>
  )
}

export default Todo
