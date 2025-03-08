'use client';
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "../model/hooks";
import styles from '../../../widgets/main/ui/main.module.scss';
import { TodoCheckbox } from "./todoCheckbox";
import { deleteAction, fetchAction, patchAction,  } from "../api/todoApi";
import { useEffect, useState } from "react";
import { Modal } from "../../../shared/ui/Modal/Modal";

export default function DataMapper() {
    
    const [currentInput, setCurrentInput] = useState<string>('')
    const [active, setActive] = useState<boolean>(false)
    const data = useAppSelector(state => state.tasks);
    const preloader = useAppSelector(state => state.status);
    const dispatch = useAppDispatch();

    
    const handleClick = async (inp:string, id:number) => {
        
        if(inp.length > 0){
           await dispatch(patchAction({currentInput, id}))
        }
        setActive(false)
        dispatch(fetchAction(''))
    }


    const handleDelete = async (id:number) => {
        await dispatch(deleteAction(id))
        dispatch(fetchAction(''))
    }
    useEffect(() => {
        dispatch(fetchAction(''))
    }, [dispatch])

    return (
        <div
            style={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                rowGap: '35px',
            }}
        >
            {preloader === 'loading' && (<h1 style={{display: 'flex', justifyContent: 'center'}}>loading...</h1>)}
            {!data || data.length < 1 ?
            (
                <div style={{alignItems: 'center', display: 'flex', flexDirection: 'column', rowGap:'15px', userSelect: 'none'}} className='container'>
                    <Image src={`/nothing.svg`} alt='#' width={221} height={174} />
                    <p>Empty...</p>
                </div>
            )
            :
            data?.map((item) => (
                <div key={item.id} className={styles.mainKey}>
                    <TodoCheckbox item={item} />

                    <div className={styles.FCG}>
                        <Image
                            onClick={() => setActive(true)}
                            className={styles.mainImg}
                            width={18}
                            height={18}
                            src={`/changeBtn.svg`}
                            alt='#'
                        />
                        <Image
                        onClick={() => handleDelete(Number(item.id))}
                            className={styles.mainImg}
                            width={18}
                            height={18}
                            src={`delBtn.svg`}
                            alt='#'
                        />
                    </div>
                    <Modal active={active} setActive={setActive}>
                        <div className={styles.mainModal}>
                            <input
                                className={styles.inp}
                                value={currentInput}
                                onChange={(e) => setCurrentInput(e.target.value)}
                                type="text" />
                            <button onClick={() => handleClick(currentInput, Number(item.id))} style={{padding: '5px 10px', borderRadius: '5px', border: '1px', backgroundColor: '#557FAF', cursor: 'pointer'}}>Change</button>
                        </div>
                    </Modal>
                </div>
            ))}
        </div>
    );
}
