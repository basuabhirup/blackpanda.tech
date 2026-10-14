import { Wordmark } from "@/components/brand/logo";
import { ButtonLink } from "@/components/site/primitives";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-ink px-5 text-center">
      <Wordmark />
      <p className="mt-14 font-mono text-sm text-fault">HTTP 404</p>
      <h1 className="mt-3 text-4xl font-semibold text-white md:text-5xl">
        This route isn’t deployed.
      </h1>
      <p className="mt-4 max-w-md text-white/55">
        The page you’re looking for doesn’t exist, or was rolled back to a
        previous version.
      </p>
      <ButtonLink href="/" className="mt-9">
        Back to production
      </ButtonLink>
    </div>
  );
}
