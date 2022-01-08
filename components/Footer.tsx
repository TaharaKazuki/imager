import Image from 'next/image'
import styles from '../styles/Footer.module.scss'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        {/* <Image src="/img/bg.png" objectFit="cover" layout="fill" alt="" /> */}
      </div>
    </div>
  )
}

export default Footer
