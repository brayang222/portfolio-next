import React from "react";

export const About = () => {
  return (
    <section className="flex justify-between bg-black-custom text-white lg:px-12 md:px-4 mt-12 py-8">
      <aside className="flex flex-col gap-4">
        <p className="text-white-opacity text-xs">ABOUT</p>
        <p className="max-w-[50ch]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab
          repellendus facere alias voluptatum veniam commodi tempore minus
          deleniti magni numquam facilis sunt in aut laudantium quod, sed, dolor
          vero.
        </p>
      </aside>
      <aside className="flex flex-col w-[700px] gap-3">
        <div className="flex flex-col columns-2 gap-4  ">
          <div className="flex columns-2 gap-4 min-w-60 ">
            <h3 className="text-white-opacity text-xs min-w-60">TEAM</h3>
            <h3 className="text-white-opacity text-xs">DESCRIPCION</h3>
          </div>
          <div className="flex columns-2 gap-4">
            <p className="text-nowrap min-w-60">
              Norvik
              <br />
              06.2024 - Present
            </p>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              quis facilis fugit quam sapiente voluptatibus nam odio, aliquid
              eveniet, nesciunt veniam quaerat? Maiores ut eveniet laudantium!
              Distinctio iste aperiam incidunt.
            </p>
          </div>
        </div>
      </aside>
    </section>
  );
};
