import styles from "./Logo.module.css"

const Logo = ({ className = '', ...props }) => (
  <h1 className={`${styles.logoText} ${className}`}> Styline </h1>
)

export default Logo
