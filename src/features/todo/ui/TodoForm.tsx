'use client';
import { SelectMenu } from "@/shared/ui/SelectMenu/selectMenu";
import Image from "next/image";
import { useEffect, useState } from "react";
import { fetchAction } from "../api/todoApi";
import { useAppDispatch } from "../model/hooks";
import styles from './todoForm.module.scss';

export default function TodoForm() {
  const [inp, setInp] = useState<string>('');
  const [theme, setTheme] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark'
  })
  const dispatch = useAppDispatch();

  useEffect(() => {
      const root = document.body;
      if(theme){
        root.classList.add('dark')
        localStorage.setItem('theme', 'dark');
        root.classList.remove('light')
      }else{
        root.classList.remove('dark')
        localStorage.setItem('theme', 'light');
        root.classList.add('light')
      }
      dispatch(fetchAction(inp))
  }, [inp, dispatch, theme])

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
        {theme ? 
        <Image onClick={() => setTheme(!theme)} className={styles.formImg} width={38} height={38} src='/blackTheme.svg' alt="#"/>
        :
        <Image onClick={() => setTheme(!theme)} className={styles.formImg} width={38} height={38} src='/whiteTheme.svg' alt="#"/>}
      </div>
    </div>
  )
}
