import prefetch from "@astrojs/prefetch";

export default {
  // ...
  integrations: [
    prefetch({
      // Allow up to three links to be prefetched concurrently
      throttle: 10,
    }),
  ],
};
