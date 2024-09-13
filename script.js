document.addEventListener('DOMContentLoaded', function() {
    const quality = document.getElementById('quality');
    const cheap = document.getElementById('cheap');
    const fast = document.getElementById('fast');
    
    // Обработчики событий для каждого переключателя
    quality.addEventListener('change', function() {
        if (quality.checked && cheap.checked && fast.checked) {
            cheap.checked = false;
        }
    });

    cheap.addEventListener('change', function() {
        if (quality.checked && cheap.checked && fast.checked) {
            quality.checked = false;
        }
    });

    fast.addEventListener('change', function() {
        if (quality.checked && cheap.checked && fast.checked) {
            quality.checked = false;
        }
    });
});
