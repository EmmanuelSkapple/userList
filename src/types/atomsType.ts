export interface LoadingProps {
  size?: "small" | "large";
  color?: string;
}

export interface HeaderProps {
  title: string;
  onBack?: () => void;
}

export interface AvatarProps {
  name?: string;
  id?: number;
  size?: string;
  fontColor?: string;
  src?: string;
}
