"use client";
import { INote } from '@/shared/config/types';
import styles from '@/widgets/main/ui/main.module.scss';
import { useState } from 'react';

const TodoCheckbox = ({item}:{item: INote}) => {
    const [value, setValue] = useState(false)
    
    return (
        <label htmlFor={item.id} className={styles.FCG}>
            <input id={item.id} type='checkbox'  checked = {value} onChange={() => setValue(!value)}/>
            <p className={value ? styles.lineThrough : ''}>
                {item.task}
            </p>
        </label>
    );
};

export { TodoCheckbox };
