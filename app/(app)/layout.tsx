import { ClerkProvider } from "@clerk/nextjs";
import { SanityLive } from "@/sanity/lib/live";
import { CartStoreProvider } from "@/lib/store/cart-store-provider";
import { Toaster } from "@/components/ui/sonner";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider>
      <CartStoreProvider>
        <main>{children}</main>
        <Toaster position="bottom-center" />
        <SanityLive />
      </CartStoreProvider>
    </ClerkProvider>
  );
};

export default Layout;
