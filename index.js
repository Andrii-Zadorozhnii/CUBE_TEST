document.querySelectorAll('.range_box input').forEach(item => {

    item.addEventListener('mousemove', function() {

        this.closest('.range_box').querySelector('.rangeValue').innerHTML = this.value;
    })

    
});

const myBox = document.getElementById('box');
const borderRadiusInput = document.getElementById('borderRadiusInput');

borderRadiusInput.addEventListener('mousemove', () => {
    const borderRadiusInputValue = borderRadiusInput.value;
    myBox.style.borderRadius = borderRadiusInputValue + 'px';
});
