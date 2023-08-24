import { LaptopIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";

export default function Icons({ icon }: { icon: "light" | "dark" | "system" }) {
  const triggerIcon = {
    light: <SunIcon className="h-6 w-6" />,
    dark: <MoonIcon className="h-6 w-6" />,
    system: <LaptopIcon className="h-6 w-6" />,
  }[icon];

  return <>{triggerIcon}</>;
}
