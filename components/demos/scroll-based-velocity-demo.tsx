import { VelocityScroll } from "@/components/ui/scroll-based-velocity";

export function ScrollBasedVelocityDemo() {
  return (
    <VelocityScroll
      text="Galsen Digital Studio"
      default_velocity={5}
      className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-green-600 drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
    />
  );
}
