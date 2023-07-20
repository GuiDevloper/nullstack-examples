import styles from './Application.module.css'
import Nullstack from 'nullstack'

class Application extends Nullstack {

  render() {
    return (
      <div class={styles.hello}>
        <p>Gaaato</p>
      </div>
    )
  }

}

export default Application
