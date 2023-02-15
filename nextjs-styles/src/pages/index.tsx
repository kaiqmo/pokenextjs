
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

import Title from '../../components/title/Title'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Title title='novo titulo'/>
      <h2 className={styles.title}>
        Welcome to next.js
      </h2>
    </>
  )
}
