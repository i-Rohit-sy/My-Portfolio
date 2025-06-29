import { OrbitingCircles } from "./OrbitingCircles";

export default function FrameWorks() {
  const skills = [
    "C",
    "csharp",
    "cplusplus",
    "java",
    "javascript",
    "python",
    "nextjs",
    "tailwindcss",
    "nodejs",
    "vitejs",
    "threejs",
    "expressjs",
    "mongodb",
    "git",
    "github",
    "linux",
    "docker",
    "css3",
    "html5",
    "terminal",
  ];
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40} radius={120}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`/assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={21} radius={70} reverse speed={2}>
        {skills.reverse().map((skill, index) => (
          <Icon key={index} src={`/assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img src={src} className="duration-200 rounded-sm hover:scale-150" />
);
