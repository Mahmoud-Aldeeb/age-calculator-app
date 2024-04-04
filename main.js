let dayClass = document.querySelector ('.app .container .data .day');
let dayLabel = document.querySelector ('.app .container .data .day label');
let day = document.querySelector ('.app .container .data .day #day');

let monthClass = document.querySelector ('.app .container .data .month');
let monthLabel = document.querySelector ('.app .container .data .month label');
let month = document.querySelector ('.app .container .data .month #month');

let yearClass = document.querySelector ('.app .container .data .year');
let yearLabel = document.querySelector ('.app .container .data .year label');
let year = document.querySelector ('.app .container .data .year #year');



let maniusDay = document.querySelector ('.app .container .print .days .mainas');
let maniusMonth = document.querySelector ('.app .container .print .months .mainas');
let maniusYear = document.querySelector ('.app .container .print .years .mainas');

let mainas1Day = document.querySelector('.app .container .print .days .mainas .mainas1');
let mainas2Day = document.querySelector('.app .container .print .days .mainas .mainas2');


let mainas1Month = document.querySelector('.app .container .print .months .mainas .mainas1');
let mainas2Month = document.querySelector('.app .container .print .months .mainas .mainas2');


let mainas1Year = document.querySelector('.app .container .print .years .mainas .mainas1');
let mainas2Year = document.querySelector('.app .container .print .years .mainas .mainas2');


let dayH3 = document.createElement('h3');
let monthH3 = document.createElement('h3');
let yearH3 = document.createElement('h3');



let masgErrorDay = document.createElement ('p');
let masgErrorMonth = document.createElement ('p');
let masgErrorYear = document.createElement ('p');



let days = document.querySelector ('.app .container .print .days');


let clicks = document.querySelector ('.app .container .icon svg');

console.log(mainas1Month);



clicks.onclick = function () {

    
    if (day.value >30 || day.value <= 0) {
        console.log(day.value);

        masgErrorDay.innerHTML = 'This field is required';
        dayClass.appendChild(masgErrorDay);
        dayLabel.style.color = 'red';
    }else {
        dayLabel.style.color = 'hsl(0, 1%, 44%)';
        masgErrorDay.innerHTML = '';
    }

    if (month.value >12 || month.value <= 0) {
        console.log(day.value);
        masgErrorMonth.innerHTML = 'This field is required';
        monthClass.appendChild(masgErrorMonth);
        monthLabel.style.color = 'red';
    }else {
        monthLabel.style.color = 'hsl(0, 1%, 44%)';
        masgErrorMonth.innerHTML = '';
    }

    if (year.value >2024 || year.value <= 0) {
        console.log(day.value);
        masgErrorYear.innerHTML = 'This field is required';
        yearClass.appendChild(masgErrorYear);
        yearLabel.style.color = 'red';
    }else {
        yearLabel.style.color = 'hsl(0, 1%, 44%)';
        masgErrorYear.innerHTML = '';
    }
    
    // day.onfullscreenchange = function () {
    //     // mainas1Day.style.display = 'flex';
    //     // mainas2Day.style.display = 'flex';
    //     // mainas1Month.style.display = 'flex';
    //     // mainas2Month.style.display = 'flex';
    //     // mainas1Year.style.display = 'flex';
    //     // mainas2Year.style.display = 'flex';
    //     // dayH3.style.display = 'none';
    //     // monthH3.style.display = 'none';
    //     // yearH3.style.display = 'none';
    // };
    // month.onfullscreenchange = function () {

    // };
    
    getElemen();
}








function calculateAgeDetailed(birthDateString) {
    const birthDate = new Date(birthDateString);
    const today = new Date();

    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();

    // إذا كان الشهر الحالي أقل من شهر الميلاد، أو نحن في نفس شهر الميلاد لكن اليوم لم يأتِ بعد
    if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
        ageYears--;  // نقوم بطرح سنة لأن عيد الميلاد لم يأتِ بعد هذا العام
        ageMonths += 12;  // نضيف 12 للشهور لتصحيح الفارق
    }

    if (ageDays < 0) {
        const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0); // يوم 0 يعود بآخر يوم في الشهر السابق
        ageDays += lastMonth.getDate(); // نضيف عدد أيام الشهر السابق لتصحيح الفارق
        ageMonths--; // نقوم بطرح شهر لأننا أضفنا أيام من الشهر السابق
    }



    return { years: ageYears, months: ageMonths, days: ageDays };
}



function getElemen () {
    let birthDate = `${year.value}-${month.value}-${day.value}`;

    console.log(birthDate);

    calculateAgeDetailed(birthDate);
    console.log(calculateAgeDetailed(birthDate));

    let yearNew = calculateAgeDetailed(birthDate).years;
    let monthNew = calculateAgeDetailed(birthDate).months;
    let dayNew = calculateAgeDetailed(birthDate).days;

    console.log(yearNew);
    console.log(monthNew);
    console.log(dayNew);

    if (dayNew > 0 && dayNew <= 30) {
        mainas1Day.style.display = 'none';
        mainas2Day.style.display = 'none';
    

        dayH3.innerHTML = dayNew;
        maniusDay.append(dayH3);
    }

    if (monthNew > 0 && monthNew <= 12){
        mainas1Month.style.display = 'none';
        mainas2Month.style.display = 'none';
    

        monthH3.innerHTML = monthNew;
        maniusMonth.appendChild(monthH3);
    }

    if (yearNew > 0 && yearNew <= 2024) {
        mainas1Year.style.display = 'none';
        mainas2Year.style.display = 'none';
    

        yearH3.innerHTML = yearNew;
        maniusYear.append(yearH3);
            
        
    }


}