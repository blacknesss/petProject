"use client";
import { INote } from '@/shared/config/types';
import styles from '@/widgets/main/ui/main.module.css';
import { useState } from 'react';

const TodoCheckbox = ({item, id}:{item: INote, id: number}) => {
    const [value, setValue] = useState(false)
    
    return (
        <label htmlFor={id.toString()} className={styles.FCG}>
            <input id={id.toString()} type='checkbox'  checked = {value} onChange={() => setValue(!value)}/>
            <p className={value ? styles.lineThrough : ''}>
                {item.task} #{id}
            </p>
        </label>
    );
};

export { TodoCheckbox };
