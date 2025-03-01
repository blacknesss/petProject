import { SelectMenu } from "@/shared/ui/SelectMenu/selectMenu";
import styles from './todoForm.module.scss';
import Image from "next/image";

export default function TodoForm() {
  return (
    <div className="container">
      <div className={styles.todoForm}>
        <input type="text" placeholder="Search note..."/>
        <SelectMenu/>
        <Image className={styles.formImg} width={38} height={38} src='/blackTheme.svg' alt="#"/>
      </div>
    </div>
  )
}
