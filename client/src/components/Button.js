/**
 * @file Wrapper for Button Components.
 * @author Manav Patel <mpate136@uottawa.ca>
 */

import "../styles/components/Button.css";

function Button(props) {
    const {
        text,
        className,
        onClick,
        style,
        type,
    } = props

    return (
      <button type={type} className={className} onClick={onClick} style={style}>
        {text}
      </button>
    );
}

export default Button;