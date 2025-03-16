//DOM
const container = document.querySelector(".container");
//API and render
const API = 'https://67bac6d4fbe0387ca1381dc2.mockapi.io/tripsAPI/trips'

async function render(){
    let response = await fetch(API);
    let data = await response.json();
    console.log(data);
    let htmls = "";
    for(let i = 0; i < data.length; i++){
        htmls += `
                <div class="recommend-box">
                    <img src="/IMG/lau-dai-Osaka.jpg">
                    <p class="p3">Du lịch ${data[i].end}</p>
                    <div style="width:100%;display:flex;justify-content:space-around;align-items:end">
                        <div style="width:75%">
                            <div style="display:flex;justify-content:flex-start;width:90%;align-items:end">
                                <i class='bx bx-flag' ></i>
                                <p class="p4">${data[i].start}</p>
                            </div>
                            <div style="display:flex;justify-content:flex-start;width:90%;align-items:end">
                                <i class='bx bx-time-five'></i>
                                <p class="p4">${data[i].date}</p>
                            </div>
                            <div style="display:flex;justify-content:flex-start;width:90%;align-items:end">
                                <i class='bx bx-coin-stack' ></i>
                                <p class="p4">${data[i].price} dollar</p>
                            </div>
                        </div>
                        <a href="/HTML/trips/japan.html" class="p5">XEM CHI TIẾT</a>
                    </div>
                </div>    
        `
    }

    container.innerHTML =  htmls   
}
render();