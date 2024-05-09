const contactTemplate = () => {
  const parentDiv = document.createElement("div");
  parentDiv.className = "text-orange-light text-lg";
  parentDiv.innerHTML = `
  Email: 
  <a href="mailto:weinachts.man.nordpol@gmail.com" class="text-emerald-400">
  weinachts.man.nordpol@gmail.co
  </a>
  <br />
  Mobile: 
  <a href="tel:+8801619601390" class="text-emerald-400">
    +8801619601390
  </a>
  <br />
  `;
  return parentDiv;
};
export default contactTemplate;
