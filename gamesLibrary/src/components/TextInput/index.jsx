import PropTypes from 'prop-types'
import styles from './styles.module.css'

TextInput.PropTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string,
    setValue: PropTypes.func
}

export default function TextInput({ id, value, setValue, label }) {
    return(
        <div className={styles.div}>
          <label className={styles.label} htmlFor={id}>{label}</label>
          <input 
            className={styles.input}
            type="text"
            name={id}
            id={id}
            value={value} 
            onChange={(e) => setValue(e.target.value)} 
          />
        </div>
    )
}