const socialTemplate = () => {
  const parentDiv = document.createElement("div");
  parentDiv.className = "text-orange-light text-lg";
  parentDiv.innerHTML = `
  Click on these links or use them as commands.
  <br />
  Example: &quot;<span class="text-cyan">github</span>&quot;
  <br />
  &gt;
  <a
    href="https://github.com"
    target="_blank"
    rel="noreferrer"
    class="text-emerald-400 pl-1"
  >
    Github
  </a>
  <br />
  &gt;
  <a
    href="https://discord.com/users/826931681109606441"
    target="_blank"
    rel="noreferrer"
    class="text-emerald-400 pl-1"
  >
    Discord
  </a>
  <br />
  &gt;
  <a
    href="https://www.facebook.com"
    target="_blank"
    rel="noreferrer"
    class="text-emerald-400 pl-1"
  >
    Facebook
  </a>
    `;
  return parentDiv;
};
export default socialTemplate;
