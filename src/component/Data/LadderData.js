const data = [];

const r800 = [];
const r900 = [];
const r1000 = [];
const r1100 = [];
const r1200 = [];
const r1300 = [];
const r1400 = [];
const r1500 = [];
const r1600 = [];
const r1700 = [];
const r1800 = [];
const r1900 = [];
const r2000 = [];
const r2100 = [];
const r2200 = [];
const r2300 = [];
const r2400 = [];
const r2500 = [];
const r2600 = [];
const r2700 = [];
const r2800 = [];
const r2900 = [];
const r3000 = [];
const r3100 = [];
const r3200 = [];
const extra = [];

fetch(" https://codeforces.com/api/problemset.problems")
    .then(response => response.json())
    .then(data => {
        if (data.status === "OK") {
            data.result.problems.map(item => {
                if(item.rating===800){
                    if(r800.length < 100)   r800.push(item);
                }else if(item.rating===900){
                    if(r900.length < 100)   r900.push(item);
                }else if(item.rating===1000){
                    if(r1000.length < 100)   r1000.push(item);
                }else if(item.rating===1100){
                    if(r1100.length < 100)   r1100.push(item);
                }else if(item.rating===1200){
                    if(r1200.length < 100)   r1200.push(item);
                }else if(item.rating===1300){
                    if(r1300.length < 100)   r1300.push(item);
                }else if(item.rating===1400){
                    if(r1400.length < 100)   r1400.push(item);
                }else if(item.rating===1500){
                    if(r1500.length < 100)   r1500.push(item);
                }else if(item.rating===1600){
                    if(r1600.length < 100)   r1600.push(item);
                }else if(item.rating===1700){
                    if(r1700.length < 100)   r1700.push(item);
                }else if(item.rating===1800){
                    if(r1800.length < 100)   r1800.push(item);
                }else if(item.rating===1900){
                    if(r1900.length < 100)   r1900.push(item);
                }else if(item.rating===2000){
                    if(r2000.length < 100)   r2000.push(item);
                }else if(item.rating===2100){
                    if(r2100.length < 100)   r2100.push(item);
                }else if(item.rating===2200){
                    if(r2200.length < 100)   r2200.push(item);
                }else if(item.rating===2300){
                    if(r2300.length < 100)   r2300.push(item);
                }else if(item.rating===2400){
                    if(r2400.length < 100)   r2400.push(item);
                }else if(item.rating===2500){
                    if(r2500.length < 100)   r2500.push(item);
                }else if(item.rating===2600){
                    if(r2600.length < 100)   r2600.push(item);
                }else if(item.rating===2700){
                    if(r2700.length < 100)   r2700.push(item);
                }else if(item.rating===2800){
                    if(r2800.length < 100)   r2800.push(item);
                }else if(item.rating===2900){
                    if(r2900.length < 100)   r2900.push(item);
                }else if(item.rating===3000){
                    if(r3000.length < 100)   r3000.push(item);
                }else if(item.rating===3100){
                    if(r3100.length < 100)   r3100.push(item);
                }else if(item.rating===3200){
                    if(r3200.length < 100)   r3200.push(item);
                }else{
                    if(extra.length < 100)   extra.push(item);
                }
            });
        }
        else {
            alert("something went wrong check your handle");
        }


    }).catch(err => {
        console.log(err);
    })
data.push({ id: "800", content: r800 });
data.push({ id: "900", content: r900 });
data.push({ id: "1000", content: r1000 });
data.push({ id: "1100", content: r1100 });
data.push({ id: "1200", content: r1200 });
data.push({ id: "1300", content: r1300 });
data.push({ id: "1400", content: r1400 });
data.push({ id: "1500", content: r1500 });
data.push({ id: "1600", content: r1600 });
data.push({ id: "1700", content: r1700 });
data.push({ id: "1800", content: r1800 });
data.push({ id: "1900", content: r1900 });
data.push({ id: "2000", content: r2000 });
data.push({ id: "2100", content: r2100 });
data.push({ id: "2200", content: r2200 });
data.push({ id: "2300", content: r2300 });
data.push({ id: "2400", content: r2400 });
data.push({ id: "2500", content: r2500 });
data.push({ id: "2600", content: r2600 });
data.push({ id: "2700", content: r2700 });
data.push({ id: "2800", content: r2800 });
data.push({ id: "2900", content: r2900 });
data.push({ id: "3000", content: r3000 });
data.push({ id: "3100", content: r3100 });
data.push({ id: "3200", content: r3200 });
if(extra.length > 0){
    data.push({id: "More", content: extra});
}
export default data;