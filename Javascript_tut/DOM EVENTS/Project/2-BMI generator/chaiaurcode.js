const form=document.querySelector('form')
// This use case will give you an empty value
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit',function(e){
    // To stop the default action of submission of form we use preventDefault
    // Whenever form gets submitted the values reaches to server side by get type or post type
    e.preventDefault();
    // In forms we get the value in forms of string to parse them into integer we use parseInt method
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('.results');
    // isNan is a boolean technique to check the parametere is integer or not 
    if (height === ''|| height<0 || isNaN(height)) {
        results.innerHTML = `Give a valid heights ${height}`;
    }
   else if (weight === ''|| weight<0 || isNaN(weight)) {
        results.innerHTML = `Give a valid heights ${weight}`;
    }
    else{
       const bmi =  (weight / ((height*height)/1000)).toFixed(2)
       //show the result
       results.innerHTML = `<span>${bmi}</span>`;
    }

});