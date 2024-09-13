document.addEventListener('DOMContentLoaded', function() {
    const quality = document.getElementById('quality');
    const cheap = document.getElementById('cheap');
    const fast = document.getElementById('fast');

    function updateSwitches(changedSwitch) {
        if (quality.checked && cheap.checked && fast.checked) {
            // Если все три включены, отключаем "Быстро"
            fast.checked = false;
        } else if (changedSwitch === fast && quality.checked && cheap.checked) {
            // Если включены "Качественно" и "Дешево", при попытке включить "Быстро", отключаем "Качественно"
            quality.checked = false;
        } else if (changedSwitch === quality && cheap.checked && fast.checked) {
            // Если включены "Дешево" и "Быстро", при попытке включить "Качественно", отключаем "Дешево"
            cheap.checked = false;
        } else if (changedSwitch === cheap && quality.checked && fast.checked) {
            // Если включены "Качественно" и "Быстро", при попытке включить "Дешево", отключаем "Качественно"
            quality.checked = false;
        }
    }

    // Обработчики событий изменения состояния переключателей
    quality.addEventListener('change', function() { updateSwitches(quality); });
    cheap.addEventListener('change', function() { updateSwitches(cheap); });
    fast.addEventListener('change', function() { updateSwitches(fast); });
});
