const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

//show sidebar
menuBtn.addEventListener("click", () => {
  sideMenu.style.display = "block";
});

//close sidebar
closeBtn.addEventListener("click", () => {
  sideMenu.style.display = "none";
});

//change theme
themeToggler.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme-variables");

  themeToggler.querySelector("span").classList.toggle("active");
});

// fill orders in table
Orders.forEach((order) => {
  const tr = document.createElement("tr");
  const trContet = `
  
<td>${order.productName}</td>
<td>${order.productNumber}</td>
<td>${order.paymentStatus}</td>
<td class="${
    order.shipping === "declined"
      ? "danger"
      : order.shipping === "pending"
      ? "warning"
      : "primary"
  }">${order.shipping}</td>
<td class="primary">Details</td>
  `;
  tr.innerHTML = trContet;
  document.querySelector("table tbody").appendChild(tr);
});
