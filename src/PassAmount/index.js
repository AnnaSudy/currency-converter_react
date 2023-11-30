import "./index.css";


const PassAmount = ({ title }) => (
    <p>
        <label>
            {title}
            <input
                className="form__label"
                type="number"
                step="1"
                min="0"
                autofocus
                value="0"
            />
        </label>
    </p>
);

export default PassAmount;