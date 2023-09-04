import { UserTypes } from "./userType";

export interface UserItemProps {
  user: UserTypes;
  onPress: (userId: number) => void;
}
