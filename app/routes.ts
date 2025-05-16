import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [index("routes/home.tsx"),
route("products", "routes/products.tsx"),
route("consulting", "routes/consulting.tsx"),
route("contact", "routes/contact.tsx"),
route("about", "routes/about.tsx"),
route("news", "routes/news.tsx")] satisfies RouteConfig;
