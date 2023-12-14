import "./index.css";
import { useState } from "react";

const Form = () => {
    const [amountChoice, setAmount] = useState(0);
    const [currency, setCurrency] = useState("€");
    const [result, setResult] = useState(0);

    const onFormInput = () => {
        setAmount();
        setResult();
    };

    const onCurrencyChange = ({ target }) => setCurrency(target.value);
    const onAmountChange = ({ target }) => setAmount(target.value);
    const onResultChange = () =>
        setResult(amountChoice, (currency) => {
            const eur = 4.55;
            const usd = 4.15;
            const gbp = 5.24;

            switch (currency) {
                case "€":
                    return amountChoice / eur;

                case "$":
                    return amountChoice / usd;

                case "£":
                    return amountChoice / gbp;
            }
        });
    return (
        <form className="form" onInput={onFormInput}>
            <fieldset className="form__fieldset">
                <legend className="form__legend">Przelicznik walut</legend>
                <p>
                    <label>
                        Podaj kwotę w PLN - zł:
                        <input
                            className="form__label"
                            type="number"
                            step="1"
                            min="0"
                            autofocus
                            value={amountChoice}
                            onChange={onAmountChange}
                        />
                    </label>
                </p>
                <p>
                    <label>
                        Wybierz walutę:
                        <select
                            className="form__label"
                            value={currency}
                            onChange={onCurrencyChange}
                        >
                            <option value="€" selected>
                                EUR - euro (€)
                            </option>
                            <option value="$">USD - dolar amerykański ($)</option>
                            <option value="£">GBP - funt brytyjski (£)</option>
                        </select>
                    </label>
                </p>
                <p value={result} onChange={onResultChange}>
                    Wynik: {result}
                    <strong> {currency}</strong>
                </p>
            </fieldset>
        </form>
    );
};

export default Form;
