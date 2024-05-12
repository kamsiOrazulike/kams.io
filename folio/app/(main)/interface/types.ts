export interface SocialMediaItem {
  link: string;
  text?: string; 
  icon?: React.ReactNode;
}

export interface GetInTouchProps {
  contactIcons: SocialMediaItem[];
}
