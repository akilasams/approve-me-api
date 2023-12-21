import { Router } from "express";
import { deletUser, getAllUsers, updateUser } from "../controllers/users";
import { isAuthenticated, isOwner } from "../middlewares";

export default (router: Router) => {
  router.get("/users", isAuthenticated, getAllUsers);
  router.delete("/users/:id", isAuthenticated, isOwner, deletUser);
  router.patch("/users/:id", isAuthenticated, isOwner, updateUser);
};
