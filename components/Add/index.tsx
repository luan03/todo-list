import styles from '../../styles/Home.module.css'

export interface AddProps {
    todo: any;
    setList: any;
    setTodo: any;
    list: any;
}

export default function Add({ todo, setList, setTodo, list }: AddProps) {

    const add = (event: any) => {

        if (event.key === 'Enter') {
            const time = new Date().getTime()

            setList([...list, { name: todo, id: time, done: false, show: false }]);

            setTodo('')
        }
    }

    return (
        <>
            <div className={styles.add}>
                <input type="text" value={todo} name="add" placeholder="Add a task to do" onKeyUp={add} onChange={event => setTodo(event.target.value)} />
            </div>
        </>

    );
}
