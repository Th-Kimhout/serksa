import { Groupcard } from "../courseWYL/Groupcard.jsx";

export default function Started() {
  return (
    <>
      <div className="w-4/5 mx-auto">
        <iframe
          className="mx-auto"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/pYaamz6AyvU?si=U5Bw2MC_32o6s2Qb"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      <Groupcard />
    </>
  );
}
