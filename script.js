document.addEventListener('DOMContentLoaded', function() {
    const quality = document.getElementById('quality');
    const cheap = document.getElementById('cheap');
    const fast = document.getElementById('fast');

    function updateSwitches(changedSwitch) {
        if (quality.checked && cheap.checked && fast.checked) {
            fast.checked = false;
        } else if (changedSwitch === fast && quality.checked && cheap.checked) {
            quality.checked = false;
        } else if (changedSwitch === quality && cheap.checked && fast.checked) {
            cheap.checked = false;
        } else if (changedSwitch === cheap && quality.checked && fast.checked) {
            fast.checked = false;
        }
    }

    quality.addEventListener('change', function() {
        updateSwitches(quality);
    });

    cheap.addEventListener('change', function() {
        updateSwitches(cheap);
    });

    fast.addEventListener('change', function() {
        updateSwitches(fast);
    });
});
