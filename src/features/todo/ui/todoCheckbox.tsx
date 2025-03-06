"use client";
import { INote } from '@/shared/config/types';
import styles from '@/widgets/main/ui/main.module.scss';
import { fetchAction, patchCompleteAction } from '../api/todoApi';
import { useAppDispatch} from '../model/hooks';

const TodoCheckbox = ({ item }: { item: INote }) => {
    const dispatch = useAppDispatch();

    const handleChange = async (e:React.ChangeEvent<HTMLInputElement>) => {
        await dispatch(patchCompleteAction({ value: e.target.checked, id: Number(item.id) }));
        dispatch(fetchAction(''))
    };

    return (
        <label key={item.id} htmlFor={item.id} className={styles.FCG}>
            <input
                id={item.id}
                type="checkbox"
                checked={item.complete}
                onChange={(e) => handleChange(e)}
            />
            <p className={item.complete ? styles.lineThrough : ''}>
                {item.task}
            </p>
        </label>
    );
};

export { TodoCheckbox };