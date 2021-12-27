import styles from '../../styles/Home.module.css'

export interface BackdropProps {
    name: string;
    done: string;
    edit: boolean;
}

export default function Backdrop({ name, done, edit }: BackdropProps) {

    return (
        <>
            {edit && <aside className={styles.description}>
                <div className={styles.label}><b>Description:</b> {name}</div>
                <div className={styles.label}><b>Status:</b> {done}</div>
                <input type="text" className={styles.update} placeholder="Edit your todo then press ENTER" />
            </aside>}
        </>

    );
}
