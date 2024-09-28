import { allBlogs } from "contentlayer/generated";
import { redirect } from "next/navigation";
import { ImageResponse } from "next/og";
import { meta } from "@/config";
import { parseISO } from "@/lib/utils";

export const runtime = "edge";
export const contentType = "image/png";
export const alt = `${meta.title} - ${meta.shortDescription}`;
export const size = {
 width: 1200,
 height: 630,
};

export default async function Image({ params }) {
 const { slug } = params;
 const post = allBlogs.find((post) => post.slug === slug);

 if (!post) return redirect("/opengraph-image");

 const fontBold = fetch(new URL("public/fonts/geist-mono-900.otf", import.meta.url)).then((res) => res.arrayBuffer());
 const fontRegular = fetch(new URL("public/fonts/geist-mono-400.otf", import.meta.url)).then((res) => res.arrayBuffer());

 return new ImageResponse(
  (
   <div
    style={{
     height: "100%",
     width: "100%",
     display: "flex",
     padding: "50px",
     flexDirection: "column",
     justifyContent: "flex-end",
     backgroundColor: "#101110",
    }}
   >
    <div
     style={{
      // prettier-ignore
      backgroundImage: "url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAYCAYAAACfpi8JAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAYRSURBVHgBtVbJjiRXFT1viCGHyDmzs7q6qhtojNQthIRBwkJIlkDwBe01v8AXmP4FfoAVG7OCJSt6CRIbgwHJdquHqqzsynmIjHjxJt8ouzx2Vact+UqZKb2IvO/e88459zFQvH8XUS3A0Frccw4/BUefeZwHNfx/+AuM8UYzwHd7g1l00P2b/lXj3/yXjYm7hdGLeP6Pv6ps9s8P2kiXbTidw7l34YJ3keEZJu/tgIcOewQvv+5+ACNy5JxjxSUWAlBgqBiFxnaMAFMqsSjyGlZFP5iZKqY65gaVqg0bwwiotjIwocGYpJQNMN1E28R4/Uxgz+Cf/Lq1QKYtFp5h4oEtrUXWoLMeoY6z3GFh8kBl2W0+UgP/WMVYsWrkw8GRF5Vhq4CMqHguwFkHnPdRsDpGrweUh+1dCL1Je0NdIOJw7hiWtOLoYeJWaOQfGolppoTRu4F/rg7Yman5iYkCLTo3mGzfrlhU64QK/Zu5OiXsgPkGgnqEB+/wfQr5FLo/zOEnbYJGIAg5Ks6jRYVFxBnjHdLqEDl6IYKqjwpeCce6J3fBDZH7ii8K6PNn3vk0DWENnZU3lGiN0G4wFxkmf7avKuTTagmVklTKayzpiKa0sKAiqEEkxRpJ/jRnmO8KoXR+k53lAzbOE3duqnEhujeYaNysGoSVnFApj6IJbnpA2MAEIfD2K1H5AplKVNZNoh2t01eNlJNQqTEzMNJjE3VZgX7Eo9jKlLf41LVFJgYysxHSbaCWYwufbmN4WnBMUW8bxNTGjxY5njxyeyFyicqZIa4QR+hYzj1xplwnXBu7GRJTorLVuVCZuhM8UwM803W2cknDit4twaNBo7hApczLWQvOd6FFHf8jrryCtF+R12/W8MPGBf8lpas6iyZjCI1DISy2cY/w6UseSBtteZuN3UDmrCULG9ptKvT6VAmoXYlKQFuTr1AzvLPB7+4pPHrksQ8iZbxFAJBGMkVcIY5MqI11uS4tErUgVE4upKxit8sPxMj03RNdFxvXbBs2uBM43mlnkCVXiBvet6idNqKwhj91r5XySw3nkiuVkLhSokJcoYpDb6Elc2l4MzBohEEcaTlDTyx8N1Ciz7QTdnYGk08JFb2rknokOe0W3K0hu1vMfqCBl6PyUjZfcsUWWJHBTQXDiorhhlDJZuS4j7cWO5UHxVLdDk51x53ksdjwWtPLznFkebORQ4S0KYgbvAWYJjyPrnPaKx9ccKVJaYgrpKAqnXVCxUgy8jyULpMHwopWJIMIwdR35EIeMs2afKcCu5hwU8y2IUwREFeI68EGvpgjPciw/IvZG5EyPs8VX2BCRrciNRlCJdrN6fznypSoVItxcUeO8qQ4tVGobKtnZOdIOnLaDXVBQ49MwBeSLJ8KW1zJkWuNhoah3lhsSMpjgm5EvwuStLEpnd6MSpplKtY6P5JP8x6e7xJGztJ2GBwLRIe9HaIqsc1vSIMGzPrr9rq2kJIrdUKFZDsn0Z46gxENwnk+JzeZmQxzlxGTsq45L46isyLBTNcixbqH3DcPoxT19hySz8HkCobrz9J+zUI+QaV4rLARHqeEwVPiyIlTNAIXJOtqsCJ5psJk6pg9Nx17UsQiN7XEsaPXZNG425mh2jwhl6WRUezQWJUzZ3/VfAkV/8YJ8sxiTcicU1svYokZ35JRdeINdbpFVuQ9O971cZolYpslidHD48Deul9Nk+9/b4kKvevIXx7AXLWPxB5xcU14gvwdQN8r5xA1oH8MVu/KUuQVmgFBc3uih/E4qLkXMWMHYWvoi9ciXnBTT/8zvpni/kjh4dW3tb0KuYy3LsbOxQf+HqEpKG89XJF6mLQmOxDkE87H3PuIeeOjGlc//BkvfnJ4qP/42587ds20+VqFfD7YQ9ryzbt0Uu+l5C6OPDesbCYsDrfCSBkREaSIfK5FRZvahIq4/qK21+3pynjz7+S1xwpjSTauVoeTx8u2P53TkxmvsKnndh1vMroO/PdKkl7GN0akDGqSkv9L+7fpuO5/LMtk9B26wC9VrV/jpW3fPkzd73/9wO11cf0WotyXee8Z9rw8fwSaTRDb+HSqhQAAAABJRU5ErkJggg==\")",
      opacity: 0.2,
      backgroundSize: "1203px 849px",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "40%",
      display: "flex",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      filter: "hue-rotate(215deg) saturate(25)",
      position: "absolute",
      zIndex: 1,
     }}
    />
    <div
     style={{
      color: "rgba(255, 255, 255, 0.5)",
      fontFamily: "GeistMono-Regular",
      fontSize: 28,
      marginBottom: "15px",
     }}
    >
     {parseISO(post.publishedAt)}
    </div>
    <div
     style={{
      color: "#fff",
      fontFamily: "GeistMono-Black",
      fontSize: 64,
     }}
    >
     {post.title}
    </div>
    <div
     style={{
      color: "rgba(255, 255, 255, 0.5)",
      fontFamily: "GeistMono-Regular",
      fontSize: 32,
      marginTop: "15px",
     }}
    >
     igorkowalczyk.dev
    </div>
   </div>
  ),
  {
   ...size,
   fonts: [
    {
     name: "GeistMono-Black",
     data: await fontBold,
     style: "normal",
     weight: 900,
    },
    {
     name: "GeistMono-Regular",
     data: await fontRegular,
     style: "normal",
     weight: 400,
    },
   ],
  }
 );
}
