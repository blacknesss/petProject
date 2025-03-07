'use client';
import { FC,useEffect,useMemo, useState } from "react";
import styles from '@/features/todo/ui/todoForm.module.scss';
import { useAppDispatch, useAppSelector } from "@/features/todo/model/hooks";
import { setTasks } from "@/features/todo/model/todoSlice";


const SelectMenu:FC = () => {
  const [isSelected, setIsSelected] = useState<string>('All')
  const data = useAppSelector(state => state.todos)
  const dispatch = useAppDispatch()
  const handleChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
      setIsSelected(e.currentTarget.value)
  }

  const filteredData = useMemo(() => {
    return data?.filter((item) => {
      if (isSelected === 'Complete') {
        return item.complete !== false;
      } else if (isSelected === 'Incomplete') {
        return item.complete === false;
      } else {
        return item;
      }
    });
  }, [data, isSelected]);

  useEffect(() => {
      dispatch(setTasks(filteredData))
  }, [dispatch, filteredData])


  return (
    <select defaultValue={isSelected} onChange={handleChange} className={styles.selectMenu}>
        <option value="All">All</option>
        <option value="Complete">Complete</option>
        <option value="Incomplete">Incomplete</option>
    </select>
  )
}
export {SelectMenu}