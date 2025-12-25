import { sanityFetch } from "@/sanity/lib/live";
import { ALL_CATEGORIES_QUERY } from "@/sanity/lib/queries/categories";

export default async function Home() {
  const { data: categories } = await sanityFetch({
    query: ALL_CATEGORIES_QUERY,
  });
  return (
    <div className="">
      {/* Featured Products Carousel */}

      {/* Page Banner */}

      {/* Category Tiles */}

      {/* Products Section */}
    </div>
  );
}
