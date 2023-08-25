import { LaptopIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";

interface IIcons {
  icon: "light" | "dark" | "system";
}

export default function Icons({ icon }: IIcons) {
  const triggerIcon = {
    light: <SunIcon className="h-6 w-6" />,
    dark: <MoonIcon className="h-6 w-6" />,
    system: <LaptopIcon className="h-6 w-6" />,
  }[icon];

  return <>{triggerIcon}</>;
}
