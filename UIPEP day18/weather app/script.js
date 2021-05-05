class Fetch {
    async getCurrent(input) {
      const myKey = "a5cdd9cee80f4f36570834f6e7c02661";
    
      const response = await fetch( 
        `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}`
      );
  
      const data = await response.json();  
      console.log(data);
      return data;
    }
  }

class UI {
    constructor() {
        this.uiContainer = document.getElementById("content");
        this.city;
        this.defaultCity = "London";
    }

    populateUI(data) {

        this.uiContainer.innerHTML = `
            <div class="card mx-auto mt-5" style="width: 18rem;">
                <div class="card-body justify-content-center">
                    <h5 class="card-title">${data.name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Highs of ${data.main.temp_max / 10}. Lows of ${data.main.temp_min / 10}</h6>
                    <p class="card-text ">Weather conditions are described as: ${data.weather[0].description}</p>
                </div>
            </div>
            `;
    }
}

const ft = new Fetch();
const ui = new UI();

const search = document.getElementById("searchUser");
const button = document.getElementById("submit");
button.addEventListener("click", () => {
  const currentVal = search.value;
  ft.getCurrent(currentVal).then((data) => {
    ui.populateUI(data);
  });
});


document.getElementById("searchUser").addEventListener("keyup", (e) => {
    if(e.keyCode == 13){
        const currentVal = search.value;
        ft.getCurrent(currentVal).then((data) => {
        ui.populateUI(data);
        });
    }
  });

