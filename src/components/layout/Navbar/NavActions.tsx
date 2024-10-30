import { AddToCart, AddToFavorite } from "@/components/features";
import { UserActions } from "./UserActions";

export const NavActions = () => {
  return (
    <div className="flex items-center gap-3">
      <AddToFavorite />
      <AddToCart />
      <UserActions />
    </div>
  );
};
