const Button = (props) => {
    const {children, type = "button", classname, name, onClick = () => {}} = props;
    return (
        <button 
        id="button-hamburger" 
        name={name} 
        type={type}
        className={classname}
        onClick={onClick}
        >
            {children}
        </button>
    )
}
export default Button;