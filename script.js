var btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  //debugger;
  var wordListInput = document.getElementById("wordList").value;

  // Split
  var wordListArray = wordListInput.split(",");

  // Sort
  var sortedArray = wordListArray.sort();
  // Remove duplicates
  var sortedArrayWithoutDup = [];
  for (let index = 0; index < sortedArray.length; index++) {
    if (!sortedArrayWithoutDup.includes(sortedArray[index])) {
      sortedArrayWithoutDup.push(sortedArray[index]);
    }
  }
  // Show result
  var resultDiv = document.getElementById("result");
  document.getElementById("result").style.padding = "20px";
  document.getElementById("result").style.background = "white";
  resultDiv.innerHTML = sortedArrayWithoutDup.join(" - ");
});
