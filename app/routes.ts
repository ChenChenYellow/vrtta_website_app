import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("products", "routes/products.tsx"),
  route("consulting", "routes/consulting.tsx"),
  route("consulting_2", "routes/consulting_2.tsx"),
  route("sector", "routes/sector.tsx"),
  route("organization", "routes/organization.tsx"),
  route("engagement", "routes/engagement.tsx"),
  route("platform", "routes/platform.tsx"),
  route("sectoral_modules", "routes/sectoral_modules.tsx"),
  route("abc", "routes/abc.tsx"),
  route("flos", "routes/flos.tsx"),
  route("contact", "routes/contact.tsx"),
  route("about", "routes/about.tsx"),
  route("news", "routes/news.tsx"),
] satisfies RouteConfig;
