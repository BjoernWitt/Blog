const form = document.getElementById('formular');

form.addEventListener('submit', function(event) {
    // Klasse hinzufügen, damit das CSS :invalid aktiviert wird
    form.classList.add('submitted');

    // Prüfen, ob alle HTML5-Regeln (required, type="email", etc.) erfüllt sind
    if (!form.checkValidity()) {
        // Verhindert das Absenden des Formulars
        event.preventDefault();
        event.stopPropagation();
    }
    //alert("submit");

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
