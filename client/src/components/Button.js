/**
 * @file Wrapper for Button Components.
 * @author Manav Patel <mpate136@uottawa.ca>
 */

import "../styles/components/Button.css";

function Button({text, className}) {
    return (
        <button type="button" className={className}>{text}</button>
    );
}

export default Button;