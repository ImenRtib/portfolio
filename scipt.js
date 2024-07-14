let about = document.getElementById('behind');
let skills = document.getElementById('behindd');

console.log(skills)
window.onscroll = function() {
    let value = scrollY - 200;
    about.style.left = value + 'px';
    
    if (value -200 >= 471.20001220703125) {
        about.style.left = 671.20001220703125 + 'px';
    }

     

   

    const s1 = document.getElementById('s1') || document.getElementById('c1');
    const s2 = document.getElementById('s2') || document.getElementById('c2');
    const s3 = document.getElementById('s3') || document.getElementById('c3');
    const s4 = document.getElementById('s4') || document.getElementById('c4');

    const ss1 = document.getElementById('ss1') || document.getElementById('c1');
    const ss2 = document.getElementById('ss2') || document.getElementById('c2');
    const ss3 = document.getElementById('ss3') || document.getElementById('c3');
    const ss4 = document.getElementById('ss4') || document.getElementById('c4');

    // First range check
    if (value + 200 >= 387.20001220703125 && value + 200 < 1569.5999755859375) {
        s1.id = 'c1';
        s2.id = 'c2';
        s3.id = 'c3';
        s4.id = 'c4';
    } else {
        s1.id = 's1';
        s2.id = 's2';
        s3.id = 's3';
        s4.id = 's4';
    }

    // Second range check
    if (value + 200 >= 1569.5999755859375 && value + 200 < 2300) {
        ss1.id = 'c1';
        ss2.id = 'c2';
        ss3.id = 'c3';
        ss4.id = 'c4';
    } else {
        ss1.id = 'ss1';
        ss2.id = 'ss2';
        ss3.id = 'ss3';
        ss4.id = 'ss4';
    }


     var variable3=scrollY -2500.5999755859375
    var variable2=document.getElementById("behindd")
    variable2.style.left = variable3
    + 'px';
    

}
