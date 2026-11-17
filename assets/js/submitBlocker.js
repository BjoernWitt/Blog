const form = document.getElementById('formular');

form.addEventListener('submit', function(event) {
    // Klasse hinzufügen, damit das CSS :invalid aktiviert wird
    form.classList.add('submitted');

    if (!form.checkValidity()) {
        event.preventDefault(); // Verhindert das Absenden
        event.stopPropagation();

        // Alle ungültigen Felder im Formular finden
        const invalidInputs = form.querySelectorAll(':invalid');
        invalidInputs.forEach((input) => {
            // 1. Klasse entfernen
            input.classList.remove('animate-invalid');
        
            // 2. Browser-Reflow erzwingen, damit die Animation neu startet
            void input.offsetWidth;
        
            // 3. Klasse wieder hinzufügen
            input.classList.add('animate-invalid');
        });
    }
});
