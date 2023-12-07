import "./index.css"
import { useState } from "react";

const onFormInput = () => console.log(`wpisana wartość to`);

const Form = () => (
    <form className="form">
        <fieldset className="form__fieldset">
            <legend className="form__legend">Przelicznik walut</legend>
            <p>
                <label
                >Podaj kwotę w PLN - zł:
                    <input
                        className="form__label"
                        type="number"
                        step="1"
                        min="0"
                        autofocus
                        value={1}
                        onInput={onFormInput}
                    />
                </label>
            </p>
            <p>
                <label>
                    Wybierz walutę:
                    <select className="form__label">
                        <option value="eur" selected>EUR - euro (€)</option>
                        <option value="usd">USD - dolar amerykański ($)</option>
                        <option value="gbp">GBP - funt brytyjski (£)</option>
                    </select>
                </label>
            </p>
            <p>Wynik: <strong>0.00 €</strong></p>
        </fieldset>
    </form>
);

export default Form;