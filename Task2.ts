var obj = [
    { name: 'Test', expirence: '364 days', Frontender: true, Backender: true, company: 'soft skill' },
    { name: 'Test 2', expirence: '367 days', Frontender: true, Backender: false, company: 'ESL' },
    { name: 'Test 3', expirence: '731 days', Frontender: true, Backender: false, company: 'ESL' },
    { name: 'Test 4', expirence: '731 days', Frontender: true, Backender: false, company: '' } ];

var obj1 = [
    { name: 'Test', expirence: '364 days', Frontender: true, Backender: true, company: 'soft skill' },
    { name: 'Test 2', expirence: '367 days', Frontender: true, Backender: false, company: 'ESL' },
    { name: 'Test 3', expirence: '731 days', Frontender: false, Backender: false, company: 'ESL' },
    { name: 'Test 4', expirence: '731 days', Frontender: true, Backender: false, company: '' } ];

findFullstackInArray();
isAllFrontenders(obj);
isAllFrontenders(obj1);
findESLEmploers();



function findFullstackInArray() {
    if(obj.filter(x => x.Frontender == true).length > 0){
        console.log('Фулстак есть');
    }
}

function isAllFrontenders(obj) {
    if(obj.length == obj.filter(x => x.Frontender == true).length){
        console.log("Все фронтендеры");
    }else {
        console.log("Не все фронтендеры");
    }
}

function findESLEmploers() {
    console.log(obj.filter(x => x.company === 'ESL'));
}