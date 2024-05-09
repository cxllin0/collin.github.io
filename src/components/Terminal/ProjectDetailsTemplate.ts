const allDetails = [
  {
    title: "RDM CREW",
    description:
      "RDM CREW is a Spanish mc and a Discord trolling group that is enemies with half roblox youtube germany (like: Lami, erdbeereemily, majoo, chanselguel, vitamine, ceddy, erdbeere felixy)",
    technology: [
      "Harley davidson (mc)",
      "Custom Tool (trolling)",
    ],
    liveLink: "https://remcrew.es",
    github: "https://www.youtube.com/watch?v=xwUe6zqHPTA&t=56s",
  },
];

const projectDetailsTemplate = (index: number) => {
  index--;
  const parentDiv = document.createElement("div");
  parentDiv.className = "text-orange-light text-lg";
  parentDiv.innerHTML = `
  <span class="text-emerald-400 font-medium">${allDetails[index].title}</span>
  <br />
  <span>${allDetails[index].description}</span>
  <br />
  <span>Technology:</span>
  ${allDetails[index].technology?.map(
    (data) => `<span class="text-indigo-400"> ${data}</span>`
  )}.
  <br/>
  <a
    href="${allDetails[index].liveLink}"
    target="_blank"
    rel="noreferrer"
    class="text-emerald-400 cursor-pointer"
  >
    Live Link
  </a>
  ,
  <a
    href="${allDetails[index].github}"
    target="_blank"
    rel="noreferrer"
    class="text-emerald-400 cursor-pointer"
  > Github
  </a>
    `;
  return parentDiv;
};
export default projectDetailsTemplate;
