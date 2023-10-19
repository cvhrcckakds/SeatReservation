//1
const container = document.querySelector(".container");
//6
const infoText = document.querySelector(".infoText");
//9
const movieList = document.querySelector("#movie");
//10
const seatCount = document.getElementById("count");
//11
const totalAmount = document.getElementById("amount");
//15
const seats = document.querySelector(".seat:not(.reserved)");
//19
const saveToDatebase = (index) => {
  localStorage.setItem("seatsIndex", JSON.stringify(index));
//25
  localStorage.setItem("movieIndex",JSON.stringify(movieList.selectedIndex ))
};
//21
const getFromDatebase = () => {
  //22
  const dbSelectedSeats = JSON.parse(localStorage.getItem("seatsIndex"));
  //24


 //26

};
//23
getFromDatebase();

//14
const createIndex = () => {
  let allSeatsArray = [];
  seats.forEach((seat) => {
    allSeatsArray.push(seat);
  });
  //17
  const allSelectedSeatsArray = [];
  //16
  const allSelectedSeats = container.querySelectorAll(".seat.selected");
  //18
  allSelectedSeats.forEach((selectedSeat) => {
    allSelectedSeatsArray.push(selectedSeat);
  });
  const allSelectedSeatsIndex = allSelectedSeatsArray.map((selectedSeat) => {
    return allSeatsArray.indexOf(selectedSeat);
  });
  //20
  saveToDatebase(selectedSeatIndex);
};

//3
const calculateTotal = () => {
  //5
  let selectedSeatCount = container.querySelectorAll(".seat.selected").length;
  //12
  seatCount.innerText = selectedSeatCount;

  totalAmount.innerText = selectedSeatCount * movieList.value;
  //7
  if (selectedSeatCount > 0) {
    infoText.classList.add("open");
  } else {
    infoText.classList.remove("open");
  }
};
//8
calculateTotal();

//2
container.addEventListener("click", (pointerEvent) => {
  const clickedSeat = pointerEvent.target.offsetParent;

  if (
    clickedSeat.classList.contains("seat") &&
    !clickedSeat.classList.contains("reserved")
  ) {
    clickedSeat.classList.toggle("selected");
  }
  calculateTotal();
});
//13
movieList.addEventListener("change", () => {
  calculateTotal();
});
