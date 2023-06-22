import './button.css'

function Button({buttonStyle, buttonText, icon}){
    return(
        <> 
            <button className={"Button " + buttonStyle}>
                {buttonText}{icon}
            </button>
        </>
       
    )
}

export default Button