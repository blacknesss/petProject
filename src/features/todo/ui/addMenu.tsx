'use client';

import { Modal } from '@/shared/ui/Modal/modal';
import { useEffect, useState } from 'react';
import styles from '@/widgets/main/ui/main.module.scss';
import { useAppDispatch, useAppSelector } from '../model/hooks';
import { fetchAction, postAction } from '../api/todoApi';
import { setInput } from '../model/todoSlice';

export default function AddMenu() {
    const [active, setActive]= useState<boolean>(false);
    const inp = useAppSelector(state => state.local.inp) //насколько я понимаю, инпут можно было локальным оставим, не вынося в слайс
    const dispatch = useAppDispatch();

    const handleSubmit = () => {
        if (inp.length > 0){
            dispatch(postAction(inp))
            .unwrap()
            .then(() => {
            dispatch(fetchAction(''));
            dispatch(setInput(''))
            setActive(false);
            })
        }else{
            setActive(false)
        }
        
    }


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
                            onChange={(e) => dispatch(setInput(e.target.value))}
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
