//Named export
export function generateOptions(options) {
    return Object.entries(options).map(([currencyCode, currencyName]) => {
        // we doestructure  the array directly in the parameter definition
        return `
			<option value="${currencyCode}">
			${currencyCode} - ${currencyName}
			</option>
		`;
    }).join('');
}

export function formatCurrency(amount, currency) {
    return Intl.NumberFormat('fr-FR', {
        style: 'currency',
        currency,
    }).format(amount);
}