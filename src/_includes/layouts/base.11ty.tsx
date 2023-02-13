import h from "vhtml";

import { Context } from "../../../d";

interface Data {
  readonly title: string;
  readonly layout: string;
  readonly content: string;
}

export const data = {
  // title: "Eleventy 11ty.js Extensions",
};

export function render(this: Context, { title, content }: Data) {
  // this.log(`title=${title}`);
  const html = (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <title>{title}</title>
      </head>
      <body>
        <main>{content}</main>
      </body>
    </html>
  );
  return `<!DOCTYPE html>\n${html}`;
};
