import h from "vhtml";

import { Context } from "../d";

interface Data {
  readonly title: string;
  readonly layout: string;
};

export const data = {
  title: "Testing 1-2-3",
  layout: "layouts/base.11ty.tsx",
};

export function render(this: Context, data: Data) {
  // this.log(`title=${title}`);
  // console.log(data);
  return (
    <p>OK, computer! { data.title }</p>
  );
};
