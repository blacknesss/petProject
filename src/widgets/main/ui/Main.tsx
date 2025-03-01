import Image from 'next/image';
import styles from './main.module.css';
import { TodoCheckbox } from '@/features/todo/ui/todoCheckbox';
import { INote } from '@/shared/config/types';


export default function Main() {
  const data: INote[] = [
    {
      id: 1,
      task: 'NOTE',
    },
    {
      id: 2,
      task: 'NOTE',
    },
    {
      id: 3,
      task: 'NOTE',
    },
  ]
  if (data.length < 1){
    return (
      <div style={{alignItems: 'center', display: 'flex', flexDirection: 'column', rowGap:'15px', userSelect: 'none'}} className='container'>
          <Image src={`/nothing.svg`} alt='#' width={221} height={174} priority/>
          <p>Empty...</p>
      </div>
    )
  }
  return (
    <div>
      <div className='container'>
        <div style={{position: 'relative', display: 'flex', flexDirection: 'column', rowGap: '35px'}}>
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
          <button className={styles.btn}>Add</button>
    </div>
  )
}
