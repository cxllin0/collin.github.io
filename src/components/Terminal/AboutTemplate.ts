const aboutTemplate = () => {
  const parentDiv = document.createElement("div");
  parentDiv.className = "text-orange-light text-lg";
  parentDiv.innerHTML = `Hello, My Name is <span class="text-tahiti">Collin</span>.<br /> I am a <span class="text-tahiti">Programmer</span> &  <span class="text-tahiti">RDM CREW</span> leaderr.`;
  return parentDiv;
};
export default aboutTemplate;
