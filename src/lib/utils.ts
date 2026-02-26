// Utility functions for formatting currency and dates

/**
 * Format a number as currency.
 * @param amount - The amount of money to format.
 * @param currency - The currency symbol to use (e.g., '$', '€').
 * @returns Formatted currency string.
 */
function formatCurrency(amount: number, currency: string = '$'): string {
    return `${currency}${amount.toFixed(2)}`;
}

/**
 * Format a date to a readable string.
 * @param date - Date object to format.
 * @returns Formatted date string in YYYY-MM-DD format.
 */
function formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

/**
 * Helper function to check if an input is a number.
 * @param value - The value to check.
 * @returns True if value is a number, false otherwise.
 */
function isNumber(value: any): boolean {
    return typeof value === 'number' && !isNaN(value);
}

// Export functions
export { formatCurrency, formatDate, isNumber };