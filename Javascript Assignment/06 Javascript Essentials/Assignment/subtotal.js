document.addEventListener('DOMContentLoaded', function() {
    const itemsTable = document.getElementById('items-table');
    const subtotalElement = document.getElementById('subtotal');

    function calculateSubtotal() {
        let subtotal = 0;
        const items = document.querySelectorAll('.item');
        items.forEach(item => {
            const price = parseFloat(item.getAttribute('data-price'));
            const quantity = parseFloat(item.querySelector('.quantity').value) || 0;
            const amount = price * quantity;
            item.querySelector('.amount').textContent = `$${amount.toFixed(2)}`;
            subtotal += amount;
        });
        subtotalElement.textContent = subtotal.toFixed(2);
    }

    function removeItem(event) {
        const item = event.target.closest('tr');
        item.remove();
        calculateSubtotal();
    }

    document.querySelectorAll('.quantity').forEach(input => {
        input.addEventListener('input', calculateSubtotal);
    });

    document.querySelectorAll('.remove-button').forEach(button => {
        button.addEventListener('click', removeItem);
    });

    calculateSubtotal();
});
