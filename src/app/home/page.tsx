import styles from './page.module.css';
import mainStyles from '../page.module.css';

import Image from 'next/image';

export default function Home() {
    return (
        <div className={styles.div}>
            <div className={styles.div2}>
                <div className={styles.div3}>
                    <p className={styles.pLight}>An <span className={styles.letterSpan}>O</span> in the <span className={styles.letterSpan}>-than</span> for those under the sky,</p>
                    <p className={styles.pLight}>An <span className={styles.letterSpan}>H</span> in the <span className={styles.letterSpan}>John-</span> for those in the stone.</p>
                    <p className={styles.pLight}>Both for those mortals doomed to die,</p>
                    <p className={styles.pLight}>Neither <span className={styles.letterSpan}>H</span> nor <span className={styles.letterSpan}>O</span> for those on the throne,</p>
                    <p className={styles.pLight}>In the linguistic land where <span className={styles.jonathanSpan}>Jonathan</span>s lie.</p>

                    <Image src="/images/ring.png" alt="The one true name" width={279} height={200}/>
                </div>
            </div>
        </div>
    )
}