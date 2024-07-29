import propTypes from 'prop-types'
import styles from './styles.module.css'

Game.PropTypes = {
    title: propTypes.string,
    cover: propTypes.string,
    onRemove: propTypes.func
}

export default function Game({ title, cover, onRemove}) {
    return(
            <div className={styles.div}>
            <img className={styles.image} src={cover} alt="" /> 
            <div>
                <h2 className={styles.title}>{title}</h2>
                <button className={styles.button} onClick={onRemove}>Remover</button>
            </div>
        </div>
    )
}