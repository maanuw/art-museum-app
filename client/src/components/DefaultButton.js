/**
 * @file Default Black Button Component file.
 * @author Manav Patel <mpate136@uottawa.ca>
 */

import "../styles/components/DefaultButton.css";

function DefaultButton({text}) {
    return (
        <button type="button" class="button">{text}</button>
    );
}

export default DefaultButton;