import { useState } from 'react';
import styles from '../../styles/Home.module.css'

export interface ListProps {
    list: Array<ItemProps>
    setList: any;
    setName: any;
    setEdit: any;
    setDone: any;
}

export interface ItemProps {
    name: string;
    id: number;
    show: boolean;
    done: boolean;
}

export default function List({ list, setList, setName, setEdit, setDone }: ListProps) {

    const [updateTodo, setUpdateTodo] = useState(false)

    const check = (element: any) => {
        const id = parseInt(element.getAttribute('id').replace('item-', ''), 10)

        list.find((todo) => {
            if (todo.id === id) {

                setUpdateTodo(!updateTodo)

                if (!todo.done) {
                    todo.done = true
                } else {
                    todo.done = false;
                }

                return todo
            }
        })
    }

    const toggle = (element: any) => {
        const id = parseInt(element.getAttribute('for').replace('item-', ''), 10)

        list.find((todo) => {
            if (todo.id === id) {

                !todo.done ? setDone('not done') : setDone('done');

                if (!todo.show) {
                    todo.show = true
                    setEdit(true)
                } else {
                    todo.show = false;
                    setEdit(false)
                }

                setName(todo.name)

                return todo
            }
        })

        setUpdateTodo(!updateTodo)
    }

    const remove = (id: number) => {
        const filtered = list.filter((todo) => {
            return todo.id !== id
        })

        setList(filtered)
    }

    return (
        <>
            {list.map(({ name, id, show, done }: ItemProps) => (
                <div key={`item-${id}`} className={show ? styles.disabled : styles.content}>
                    <span id={`item-${id}`} className={done ? styles.marked : styles.check} onClick={event => check(event.target)}></span>
                    <label htmlFor={`item-${id}`} className={styles.item} onClick={event => toggle(event.target)}>
                        {name}
                    </label>
                    <span className={styles.delete} onClick={() => remove(id)}>delete</span>
                </div>
            ))}
        </>

    );
}
