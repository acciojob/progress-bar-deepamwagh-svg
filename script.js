//your JS code here. If required.
const circles = document.querySelectorAll('.circle');
const progress = document.getElementById('progress');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
let currentStep = 1;

nextBtn.addEventListener('click', () => {
    currentStep++;
    if (currentStep > circles.length) {
        currentStep = circles.length;
    }
    update();
});

prevBtn.addEventListener('click', () => {
    currentStep--;
    if (currentStep < 1) {
        currentStep = 1;
    }
    update();
});

function update() {
    circles.forEach((circle, idx) => {
        if (idx < currentStep) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });

    const actives = document.querySelectorAll('.active');
    progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%';

    prevBtn.disabled = currentStep === 1;
    nextBtn.disabled = currentStep === circles.length;
}
