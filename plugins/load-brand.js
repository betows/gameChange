export default function(context, inject, token) {
  let cfg = { headers: { Authorization: "Bearer " + (token || context.$cookies.get("access-token")) } };
  cfg.headers["Referer"] = context.req.headers.host || context.req.headers.referer || "";
  return context.$axios.get("/brands/data/", cfg).then(r => {
    context.store.commit("brands/setBrand", r.data.brand);
    context.store.commit("users/setUser", r.data.user);
  }).catch(() => {
    context.$cookies.removeAll();
    delete cfg.headers["Authorization"];
    return context.$axios.get("/brands/data/", cfg).then(r => {
      context.store.commit("brands/setBrand", r.data.brand);
      context.store.commit("users/setUser", r.data.user);
      context.redirect("/login");
    });
  });
}