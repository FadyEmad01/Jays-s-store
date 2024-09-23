let sidebarBtn = document.querySelector(".toggle-sidebar-btn");
let sidebar = document.getElementById("sidebar");

sidebarBtn.addEventListener("click", () => {
    document.body.classList.toggle("toggle-sidebar");
});

// image view-------------------------------------------------//
// -----------------------------------------------------------//

// Bootstrap Toast initialization
let toastElement = document.getElementById("error-toast");
let toast = new bootstrap.Toast(toastElement);

let input1 = document.getElementById("file1");

let imgDisplay = document.querySelectorAll(".imgDisplay");

let inputDiv = document.querySelector(".uploadDiv");

let addSubImageBtn = document.getElementById("addSubImageBtn");

console.log(imgDisplay);

ImageArray = [];

input1.addEventListener("change", () => {
    const files = input1.files;
    let isValid = true;
    for (let i = 0; i < files.length; i++) {
        const fileType = files[i].type;
        if (!fileType.match("image.*")) {
            isValid = false;
            displayToastErrorMessage("Only image files are allowed.");
            break;
        }
    }
    if (isValid) {
        clearToastErrorMessage();
        for (let i = 0; i < files.length; i++) {
            ImageArray.push(files[i]);
        }
        input1.disabled = true;
        input1.style.cursor = "not-allowed";
        inputDiv.style.backgroundColor = "lightgray";
    }
    displayQueuedImage();
});

inputDiv.addEventListener("drop", (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    let isValid = true;
    for (let i = 0; i < files.length; i++) {
        const fileType = files[i].type;
        if (!fileType.match("image.*")) {
            isValid = false;
            displayToastErrorMessage("Only image files are allowed.");
            break;
        }
    }
    if (isValid) {
        clearToastErrorMessage();
        for (let i = 0; i < files.length; i++) {
            if (ImageArray.every((image) => image.name !== files[i].name)) {
                ImageArray.push(files[i]);
            }
        }
        input1.disabled = true;
        input1.style.cursor = "not-allowed";
        inputDiv.style.backgroundColor = "lightgray";
    }
    displayQueuedImage();
});

addSubImageBtn.addEventListener('click', () => {
    input1.disabled = false;
    input1.style.cursor = "pointer";
    inputDiv.style.backgroundColor = "transparent";
    displayQueuedImage();
})

function displayQueuedImage() {
    //   if (ImageArray.length === 0) return;
    //   if (ImageArray.length === 1) {
    //     imgDisplay.src = URL.createObjectURL(ImageArray[0]);
    //     return;
    //   }
    //   if (ImageArray.length === 2) {
    //     imgDisplay.src = URL.createObjectURL(ImageArray[0]);
    //     imgDisplay2.src = URL.createObjectURL(ImageArray[1]);
    //     return;
    //   }
    for (let i = 0; i < ImageArray.length; i++) {
        imgDisplay[i].src = URL.createObjectURL(ImageArray[i]);
    }
    // imgDisplay.src = URL.createObjectURL(ImageArray[0]);
    // imgDisplay2.src = URL.createObjectURL(ImageArray[1]);
}

function displayToastErrorMessage(message) {
    let toastBody = document.querySelector("#error-toast .toast-body");
    toastBody.innerText = message;
    toast.show();
}

// Optional: Function to clear any existing error messages from the toast
function clearToastErrorMessage() {
    let toastBody = document.querySelector("#error-toast .toast-body");
    toastBody.innerText = "";
}

// ///////////////////////////

// let addSubImageBtn = document.querySelector(".addSubImageBtn");
// let addSubImageContainer = document.getElementById("addSubImageContainer");

// addSubImageBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   addSubImageContainer.innerHTML += `<div class="mb-3">
//                                          <label for="Image" class="form-label">Upload Image ${ID +1}</label>
//                                             <div class="uploadDiv d-flex align-items-center justify-content-center flex-column form-control">
//                                                 <i class='bx bx-image fs-1'></i>
//                                                 <p class="mb-0">Drop your imager here, or browse</p>
//                                                 <p>Images are allowed</p>
//                                                 <input type="file" multiple="multiple" id="file"
//                                                             accept="image/png, image/jpeg, image/jpg">
//                                                 </div>
//                                                 <div class="w-100 mt-3 d-flex justify-content-end">
//                                                     <button id="addSubImageBtn" class="view-order py-2 px-2 border-0 d-flex align-items-center gap-2">
//                                                             Add sub Image <i class='bx bx-image'></i>
//                                                     </button>
//                                                 </div>
//                                     </div>`;

//   // Add event listeners for the new input
//   let newInput = newUploadDiv.querySelector('input[type="file"]');
//   newInput.addEventListener("change", () => {
//     const files = newInput.files;
//     handleFileUpload(files, newInput);
//   });

//   newUploadDiv.addEventListener("drop", (e) => {
//     e.preventDefault();
//     const files = e.dataTransfer.files;
//     handleFileUpload(files, newInput);
//   });
// });

// card view--------------------------------------------------//
// -----------------------------------------------------------//

let productNameInput = document.getElementById("productName");
let productNameCard = document.getElementById("productNameCard");

let DescriptionInput = document.getElementById("Description");
let DescriptionCard = document.getElementById("DescriptionCard");

let SalePriceInput = document.getElementById("SalePrice");
let SalePriceCard = document.getElementById("SalePriceCard");

function replaceProductName() {
    if (productNameInput.value != "") {
        productNameCard.innerText = productNameInput.value;
    } else {
        productNameCard.innerText = "Product Name";
    }
}
productNameInput.addEventListener("keyup", replaceProductName);

function replaceDescription() {
    if (DescriptionInput.value != "") {
        DescriptionCard.innerText = DescriptionInput.value;
    } else {
        DescriptionCard.innerText = "Description";
    }
}
DescriptionInput.addEventListener("keyup", replaceDescription);

function replaceSalePrice() {
    if (SalePriceInput.value != "") {
        SalePriceCard.innerText = SalePriceInput.value;
    } else {
        SalePriceCard.innerText = "Sale Price";
    }
}
SalePriceInput.addEventListener("keyup", replaceSalePrice);
SalePriceInput.addEventListener("change", replaceSalePrice);