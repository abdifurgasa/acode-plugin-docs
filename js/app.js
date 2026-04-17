import { listenAuth } from "./core/auth.js";
import { getRole } from "./core/role.js";

listenAuth(async (user) => {

  if (!user) {
    if (!location.pathname.includes("login.html")) {
      location.href = "login.html";
    }
    return;
  }

  const role = await getRole(user.uid);

  if (location.pathname.includes("login.html")) {

    if (role === "admin") location.href = "admin.html";
    if (role === "worker") location.href = "worker.html";
    if (role === "kitchen") location.href = "kitchen.html";
    if (role === "barman") location.href = "barman.html";
    if (role === "finance") location.href = "finance.html";

  }

});