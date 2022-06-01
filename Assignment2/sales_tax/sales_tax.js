"use strict";

var $ = function (id) {
    return document.getElementById(id);
};

window.addEventListener('DOMContentLoaded', () => {
    $('subtotal').focus();

    const calculateSalesTax = (subTotal, taxRate) => (subTotal * taxRate) / 100;

    function processEntries() {
        const subTotal = parseFloat($('subtotal').value);
        const taxRate = parseFloat($('tax_rate').value);

        if (isNaN(subTotal) || isNaN(taxRate)) {
            alert('Please enter a valid number');
        } else if (subTotal >= 10000 || subTotal <= 0) {
            alert('Subtotal must be > 0 and < 10000');
        } else if (taxRate >= 12 || taxRate <= 0) {
            alert('Tax rate must be > 0 and < 12')
        } else {
            const salesTax = calculateSalesTax(subTotal, taxRate);
            const total = subTotal + salesTax;
            $('sales_tax').value = parseFloat(salesTax).toFixed(2);
            $('total').value = parseFloat(total).toFixed(2);
        }
    }

    function clearFields() {
        $('subtotal').value = '';
        $('tax_rate').value = '';
        $('sales_tax').value = '';
        $('total').value = '';
        $('subtotal').focus();
    }

    $('calculate').addEventListener('click', processEntries);
    $('clear').addEventListener('click', clearFields);
    $('subtotal').addEventListener('focus', e => e.target.value = '');
    $('tax_rate').addEventListener('focus', e => e.target.value = '');
});