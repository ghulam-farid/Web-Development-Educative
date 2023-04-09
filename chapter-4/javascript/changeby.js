/* const changeBy = (val) => {
  let range = document.getElementById("noMachines");
  let newVal = parseInt(range.value) + val;
  if (newVal < range.min) newVal = range.min;
  if (newVal > range.max) newVal = range.max;
  console.log(newVal)
  range.value = newVal;
}; */

function changeBy(val, reset = false) {
  let range = document.getElementById("noMachines");
  let newVal = parseInt(range.value) + val;
  document.getElementById("plusBtn").disabled = false;
  document.getElementById("minusBtn").disabled = false;
  if (!reset) {
    if (newVal <= range.min) {
      newVal = range.min;
      document.getElementById("minusBtn").disabled = true;
      document.getElementById("reset-range").addA = false;
      console.log('disabled')
    }
    if (newVal >= range.max) {
      newVal = range.max;
      document.getElementById("plusBtn").disabled = true;
    }
    document.getElementById("reset-range").disabled = false;
  } else {
    newVal = 0;
    document.getElementById("reset-range").disabled = true;
    document.getElementById("minusBtn").disabled = true;
  }
  console.log(newVal)
  range.value = newVal;
}

function changeProgress(val){
    let range = document.getElementById('progress');
    let newVal = parseInt(range.value) + val;
    if (newVal < 0) newVal = 0
    if( newVal > range.max) newVal = range.max;
    range.value = newVal;
}

function getProductInfo(prod, lab1, lab2){
    let node = document.getElementById(prod);
    console.log(node.dataset)
    let l1 = document.getElementById(lab1);
    let l2 = document.getElementById(lab2);

    l1.innerText = node.getAttribute('data-product-cpu');
    l2.innerHTML = node.dataset.productSsd
}