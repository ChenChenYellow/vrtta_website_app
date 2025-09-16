import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("products", "routes/products.tsx"),
  // route("consulting", "routes/consulting_old.tsx"),
  route("consulting", "routes/consulting.tsx"),
  route("sector", "routes/sector.tsx"),
  route("organization", "routes/organization.tsx"),
  route("engagement", "routes/engagement.tsx"),
  route("platform", "routes/platform.tsx"),
  route("sectoral_modules", "routes/sectoral_modules.tsx"),
  route("contact", "routes/contact.tsx"),
  route("about", "routes/about.tsx"),
  route("news", "routes/news.tsx"),
  // abc
  route("abc", "routes/abc/home.tsx"),
  route("abc/platform", "routes/abc/platform.tsx"),
  route("abc/platform/sector", "routes/abc/platform/sector.tsx"),
  route("abc/platform/organization", "routes/abc/platform/organization.tsx"),
  route("abc/platform/engagement", "routes/abc/platform/engagement.tsx"),
  // flos
  route("flos", "routes/flos/home.tsx"),
  route("flos/platform", "routes/flos/platform.tsx"),
  route("flos/platform/sector", "routes/flos/platform/sector.tsx"),
  route("flos/platform/organization", "routes/flos/platform/organization.tsx"),
  route("flos/platform/engagement", "routes/flos/platform/engagement.tsx"),
] satisfies RouteConfig;
