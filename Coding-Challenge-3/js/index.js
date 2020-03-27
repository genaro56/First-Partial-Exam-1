window.onload = function() {
    document.getElementById('submitBtn').addEventListener('click', function(event) {
        event.preventDefault();
        var inputNumber = document.querySelector('.fizzBuzzNumber').value
        console.log(inputNumber)

        const getNumber = (i) => {
            if(i % 5 == 0) return 'buzz' 
            if(i % 3 == 0) {
                return 'fizz' 
            }

            return i;
        }
        for(let i = 0; i < inputNumber; i++) {
            const html = `
                <div class="square">
                 <label>${getNumber(i+1)}</label>
                </div>
                `
            document.getElementById('formSquare').insertAdjacentHTML('afterend', html)
        }
    })
}