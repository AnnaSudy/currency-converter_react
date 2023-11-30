const ChangeCurrency = ({ title }) => (
    <p>
        <label>
            {title}
            <select className="form__label">
                <option value="€" selected>EUR - euro (€)</option>
                <option value="$">USD - dolar amerykański ($)</option>
                <option value="£">GBP - funt brytyjski (£)</option>
            </select>
        </label>
    </p>
);

export default ChangeCurrency;