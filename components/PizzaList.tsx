import styles from '../styles/PizzaList.module.scss'
import PizzaCard from './PizzaCard'

const PizzaList = () => {
  const renderCard = [...Array(10)].map((_, i) => <PizzaCard key={i} />)

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu
        in pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit.
      </p>
      <div className={styles.wrapper}>{renderCard}</div>
    </div>
  )
}

export default PizzaList
