import { Icon } from "./style";

interface PixelIconProps {
  src: string;
  alt?: string;
}

export function PixelIcon({
  src,
  alt = "",
}: PixelIconProps) {
  return <Icon src={src} alt={alt} />;
}