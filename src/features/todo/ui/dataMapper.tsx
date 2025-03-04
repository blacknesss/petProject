'use client';
import Image from "next/image";
import { useAppSelector } from "../model/hooks";
import styles from '@/widgets/main/ui/main.module.scss';
import { TodoCheckbox } from "./todoCheckbox";
import AddMenu from "./addMenu";

export default function DataMapper() {
    const data = useAppSelector(state => state.todos);
    return (
        <div
            style={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                rowGap: '35px',
            }}
        >
            {data.length < 1 ?
            (
                <div style={{alignItems: 'center', display: 'flex', flexDirection: 'column', rowGap:'15px', userSelect: 'none'}} className='container'>
                    <Image src={`/nothing.svg`} alt='#' width={221} height={174} priority/>
                    <p>Empty...</p>
                </div>
            )
            :
            data.map((item) => (
                <div key={item.id} className={styles.mainKey}>
                    <TodoCheckbox item={item} />

                    <div className={styles.FCG}>
                        <Image
                            className={styles.mainImg}
                            width={18}
                            height={18}
                            src={`/changeBtn.svg`}
                            alt='#'
                        />
                        <Image
                            className={styles.mainImg}
                            width={18}
                            height={18}
                            src={`delBtn.svg`}
                            alt='#'
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}
