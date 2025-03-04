'use client';

import { Modal } from '@/shared/ui/Modal/modal';
import { useEffect, useState } from 'react';
import styles from '@/widgets/main/ui/main.module.scss';
import { useAppDispatch } from '../model/hooks';
import { fetchAction, postAction } from '../api/todoApi';

export default function AddMenu() {
    const [active, setActive]= useState<boolean>(false);
    const [inp, setInp] = useState('');
    const dispatch = useAppDispatch();

    const handleSubmit = () => {
        dispatch(postAction(inp))
        .unwrap()
        .then(() => {
            dispatch(fetchAction());
            setInp('');
            setActive(false);
        })
    }

    useEffect(() => {
        dispatch(fetchAction())
      }, [dispatch])

    return (
        <>
            <button 
                onClick={() => setActive(true)} 
                className={styles.btn}
            >
                Add
            </button>
            
            <Modal active={active} setActive={() => ''}>
                <div className={styles.mainModal}>
                    <div>
                        <h1>NEW NOTE</h1>
                        <input
                            value={inp}
                            type='text'
                            placeholder='Input your note...'
                            onChange={(e) => setInp(e.target.value)}
                        />
                    </div>
                    <div>
                        <button onClick={() => setActive(false)}>CANCEL</button>
                        <button onClick={handleSubmit}>APPLY</button>
                    </div>
                </div>
            </Modal>
        </>
    );
}
