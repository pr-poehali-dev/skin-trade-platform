import { LucideIcon } from "lucide-react";
import * as Icons from "lucide-react";

interface IconProps {
  name: keyof typeof Icons;
  size?: number;
  className?: string;
  fallback?: keyof typeof Icons;
}

const Icon = ({
  name,
  size = 24,
  className = "",
  fallback = "CircleAlert",
}: IconProps) => {
  const IconComponent = Icons[name] as LucideIcon;
  const FallbackIcon = Icons[fallback] as LucideIcon;

  if (!IconComponent) {
    return <FallbackIcon size={size} className={className} />;
  }

  return <IconComponent size={size} className={className} />;
};

export default Icon;
