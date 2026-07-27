import type { BlogPost } from "@/lib/blog";
import { post as howToMealPlanFromYourPantry } from "./how-to-meal-plan-from-your-pantry";

// The post registry.
//
// Adding a post means two edits: the content file, and one line here. That is a
// hand-maintained list, so it is DRIFT-CHECKED rather than trusted:
// `scripts/verify-seo.mjs` reads this directory and fails the build if a post
// file is not imported below, or if a registered post produced no HTML in the
// export. Without that check a new post is a file nobody ever sees, and nothing
// anywhere reports it.
export const POSTS: readonly BlogPost[] = [howToMealPlanFromYourPantry];
