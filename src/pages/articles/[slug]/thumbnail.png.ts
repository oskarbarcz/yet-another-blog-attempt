import { Resvg } from "@resvg/resvg-js";
import { getCollection } from "astro:content";
import type { APIRoute } from "astro";
import satori from "satori";
import fs from "node:fs";
import path from "node:path";
import { AUTHOR_NAME, AUTHOR_PHOTO } from "../../../constants";

export async function getStaticPaths() {
  const articles = await getCollection("articles");
  return articles.map((article) => ({
    params: { slug: article.slug },
    props: { article },
  }));
}

export const GET: APIRoute = async ({ props }) => {
  const { article } = props;

  const robotoSlabBold = fs.readFileSync(
    path.resolve("./src/assets/fonts/RobotoSlab-Bold.ttf"),
  );
  const robotoSlabRegular = fs.readFileSync(
    path.resolve("./src/assets/fonts/RobotoSlab-Regular.ttf"),
  );

  const title = article.data.title;
  const author = AUTHOR_NAME;
  const coverUrl = article.data.coverUrl;
  const readTime = article.data.readTime;
  const dateFormatted = article.data.date.toLocaleDateString("pl-PL", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  async function fetchImageAsBase64(url: string) {
    if (!url) return "";
    try {
      const response = await fetch(url);
      const arrayBuffer = await response.arrayBuffer();
      const base64 = Buffer.from(arrayBuffer).toString("base64");
      const mimeType = response.headers.get("content-type") || "image/jpeg";
      return `data:${mimeType};base64,${base64}`;
    } catch (e) {
      console.error(`Failed to fetch image: ${url}`, e);
      return "";
    }
  }

  const backgroundImageData = await fetchImageAsBase64(coverUrl || "");
  const authorPhotoData = await fetchImageAsBase64(AUTHOR_PHOTO || "");

  const svg = await satori(
    {
      type: "div",
      props: {
        style: {
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          backgroundColor: "#111",
          fontFamily: "Roboto Slab",
        },
        children: [
          backgroundImageData
            ? {
                type: "img",
                props: {
                  src: backgroundImageData,
                  style: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  },
                },
              }
            : null,
          // Logo in top left
          {
            type: "div",
            props: {
              style: {
                position: "absolute",
                top: "60px",
                left: "60px",
                fontSize: "64px",
                fontWeight: 700,
                color: "#40bf7e",
                display: "flex",
                textShadow: "0 4px 20px rgba(0,0,0,1)",
              },
              children: "oskar_blog",
            },
          },
          // Overlay gradient
          {
            type: "div",
            props: {
              style: {
                position: "absolute",
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                background:
                  "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.85) 100%)",
                display: "flex",
              },
            },
          },
          // Content
          {
            type: "div",
            props: {
              style: {
                display: "flex",
                flexDirection: "column",
                padding: "60px",
                position: "relative",
                width: "100%",
              },
              children: [
                {
                  type: "div",
                  props: {
                    style: {
                      width: "150px",
                      height: "12px",
                      backgroundColor: "#40bf7e",
                      marginBottom: "40px",
                      display: "flex",
                    },
                  },
                },
                {
                  type: "div",
                  props: {
                    style: {
                      fontSize: "82px",
                      fontWeight: 700,
                      color: "white",
                      marginBottom: "30px",
                      lineHeight: 1.1,
                      display: "flex",
                    },
                    children: title,
                  },
                },
                {
                  type: "div",
                  props: {
                    style: {
                      display: "flex",
                      alignItems: "center",
                    },
                    children: [
                      authorPhotoData
                        ? {
                            type: "img",
                            props: {
                              src: authorPhotoData,
                              style: {
                                width: "80px",
                                height: "80px",
                                borderRadius: "40px",
                                marginRight: "20px",
                                objectFit: "cover",
                              },
                            },
                          }
                        : null,
                      {
                        type: "div",
                        props: {
                          style: {
                            fontSize: "42px",
                            fontWeight: 400,
                            color: "rgba(255, 255, 255, 0.9)",
                            display: "flex",
                          },
                          children: [
                            { type: "div", props: { children: author } },
                            {
                              type: "div",
                              props: {
                                style: {
                                  color: "rgba(255, 255, 255, 0.5)",
                                  margin: "0 24px",
                                },
                                children: "/",
                              },
                            },
                            { type: "div", props: { children: dateFormatted } },
                            {
                              type: "div",
                              props: {
                                style: {
                                  color: "rgba(255, 255, 255, 0.5)",
                                  margin: "0 24px",
                                },
                                children: "/",
                              },
                            },
                            { type: "div", props: { children: readTime } },
                          ],
                        },
                      },
                    ].filter(Boolean),
                  },
                },
              ],
            },
          },
        ].filter(Boolean),
      },
    },
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Roboto Slab",
          data: robotoSlabRegular,
          weight: 400,
          style: "normal",
        },
        {
          name: "Roboto Slab",
          data: robotoSlabBold,
          weight: 700,
          style: "normal",
        },
      ],
    },
  );

  const resvg = new Resvg(svg);
  const pngData = resvg.render();
  const pngBuffer = pngData.asPng();

  return new Response(pngBuffer, {
    headers: {
      "Content-Type": "image/png",
    },
  });
};
