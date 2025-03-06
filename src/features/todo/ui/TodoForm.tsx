'use client';
import { SelectMenu } from "@/shared/ui/SelectMenu/selectMenu";
import styles from './todoForm.module.scss';
import Image from "next/image";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../model/hooks";
import { fetchAction } from "../api/todoApi";

export default function TodoForm() {
  const [inp, setInp] = useState<string>('');
  const dispatch = useAppDispatch();

  useEffect(() => {
      dispatch(fetchAction(inp))
  }, [inp, dispatch])

  return (
    <div className="container">
      <div className={styles.todoForm}>
        <input
            type="text"
            placeholder="Search note..."
            value={inp}
            onChange={(e) => setInp(e.target.value)}
            />
        <SelectMenu/>
        <Image className={styles.formImg} width={38} height={38} src='/blackTheme.svg' alt="#"/>
      </div>
    </div>
  )
}
