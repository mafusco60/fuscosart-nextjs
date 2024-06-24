export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/artworks/add",
    // NOTE: editing an artwork should be a private route
    "/artworks/:id/edit",
    "/profile",
    "/artworks/saved",
    "/messages",
  ],
};
