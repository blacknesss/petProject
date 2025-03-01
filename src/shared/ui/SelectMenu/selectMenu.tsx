import { FC } from "react";
import styles from '@/features/todo/ui/todoForm.module.scss';


const SelectMenu:FC = () => {
  return (
    <select className={styles.selectMenu}>
        <option value="All">All</option>
        <option value="Complete">Complete</option>
        <option value="Incomplete">Incomplete</option>
    </select>
  )
}
export {SelectMenu}