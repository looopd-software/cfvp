export interface PartnerProps {
  url: string;
  name: string;
  lastName: string;
  description: string[] | string;
  selected?: boolean;
  onClick?: () => void;
}
