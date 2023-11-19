import Logo from "@/assets/Logo.png";

export const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            Discover a diverse array of fitness classes catering to all levels
            and interests, led by certified trainers. Experience personalized,
            effective workouts for holistic progress and results-driven
            transformations.
          </p>
          {/* <p>© Revgym All Rights Reserved.</p> */}
          <p>Developed by @Emprcode || All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Home</p>
          <p className="my-5">Benefits</p>
          <p className="my-5">Our Classes</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Reach out and start today!</p>
          <p>(999) 1234-2547</p>
        </div>
      </div>
    </footer>
  );
};
