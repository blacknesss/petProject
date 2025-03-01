import Image from 'next/image';
import styles from './main.module.css';
import { TodoCheckbox } from '@/features/todo/ui/todoCheckbox';


export default function Main() {
  const data = [
    {
      task: 'NOTE'
    }
  ]
  return (
    <div>
      <div className='container'>
          {data.map((item, id) => (
            <div key={id} className={styles.mainKey}>
              <TodoCheckbox item = {item} id={id}/>

              <div className={styles.FCG}>
                <Image className={styles.mainImg} width={18} height={18} src={`/changeBtn.svg`} alt='#'/>
                <Image className={styles.mainImg} width={18} height={18} src={`delBtn.svg`} alt='#'/>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}
