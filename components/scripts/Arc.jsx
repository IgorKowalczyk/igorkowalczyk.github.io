export function Arc(props) {
 process.env.NODE_ENV === "production" && process.env.NEXT_PUBLIC_ARC_TOKEN ? <script async {...props} src={`https://arc.io/widget.min.js#${process.env.NEXT_PUBLIC_ARC_TOKEN}`}></script> : "";
}
