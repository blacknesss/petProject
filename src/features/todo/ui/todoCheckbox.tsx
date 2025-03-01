"use client";
import styles from '@/widgets/main/ui/main.module.css';
import { useState } from 'react';

const TodoCheckbox = ({item, id}:{item: {id?: number, task: string}, id: number}) => {
    const [value, setValue] = useState(false)
    
    return (
        <label htmlFor='touched' className={styles.FCG}>
            <input id='touched' type='checkbox'  checked = {value} onChange={() => setValue(!value)}/>
            <p className={value ? styles.lineThrough : ''}>
                {item.task} #{id}
            </p>
        </label>
    );
};

export { TodoCheckbox };
